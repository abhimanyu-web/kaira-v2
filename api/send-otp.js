export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { phoneNumber } = req.body;
  if (!phoneNumber) {
    return res.status(400).json({ success: false, message: "Phone number required" });
  }

  try {
    const url = `http://www.smsalert.co.in/api/mverify.json?apikey=68f214b7760bd&sender=VBZEST&mobileno=${phoneNumber}&template=Your%20verification%20code%20for%20mobile%20verification%20is%20[otp%20length=%226%22]%20Powered%20by%20Vibez%20Estates`;
    console.log(url);
    const response = await fetch(url, { method: "POST", redirect: "follow" });
    
    const result = await response.json();
    console.log(result);

    if (result.status !== "success") {
      throw new Error(result.description?.desc || "Failed to send OTP");
    }

    res.status(200).json({ success: true, message: "OTP sent successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
} 
