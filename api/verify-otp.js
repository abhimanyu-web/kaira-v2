export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { name, email, phoneNumber, pageUrl, otp } = req.body;

  if (!phoneNumber || !otp) {
    return res.status(400).json({ success: false, message: "Phone and OTP are required" });
  }

  try {
    // Step 1: Verify OTP
    const apiKey = "68f214b7760bd";
    const verifyURL = `http://www.smsalert.co.in/api/mverify.json?apikey=${apiKey}&mobileno=${phoneNumber}&code=${otp}`;

    const verifyResponse = await fetch(verifyURL, { method: "POST", redirect: "follow" });
    const verifyResult = await verifyResponse.json();

    if (verifyResult.status !== "success") {
      return res.status(400).json({
        success: false,
        message: verifyResult.description?.desc || "OTP verification failed",
      });
    }

    // Step 2: Once verified, send data to Zoho Webhook
    const webhookURL =
      "https://flow.zoho.com/899071440/flow/webhook/incoming?zapikey=1001.032298ac244ab16396c1ccb1793332ca.a6728157ec735e0e3955e6c335e8a9a2&isdebug=false";

    const zohoResponse = await fetch(webhookURL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        Remote__IP: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
        Time: new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        Date: new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        Name: name,
        Phone: phoneNumber,
        email: email,
        Page__URL: pageUrl,
      }).toString(),
    });

    if (!zohoResponse.ok) throw new Error("Failed to send data to Zoho");

    res.status(200).json({ success: true, message: "OTP verified and data sent" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}
