import { useState } from "react";
import image from "../assets/images/fromImage.webp";
import ModalBase from "./ModalBase";

export default function Form({ isFormOpen, isFormClose }) {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    if (step === 1) {
      await submitAction(e.target);
    } else if (step === 2) {
      await verifyOtp();
    }
  }

  async function submitAction(formElement) {
    setLoading(true);
    setMessage("");

    const data = new FormData(formElement);
    const name = data.get("name")?.trim();
    const email = data.get("email")?.trim();
    const phoneNumber = data.get("phoneNumber")?.trim();

    const errors = [];
    if (!name) errors.push("Name cannot be empty");
    if (!email.includes("@")) errors.push("Email is invalid");
    if (phoneNumber.length !== 10)
      errors.push("Phone number must be 10 digits");

    if (errors.length > 0) {
      setMessage(errors.join(", "));
      setLoading(false);
      return;
    }

    // Save form data for OTP verification
    const pageUrl = window.location.href;
    setFormData({ name, email, phoneNumber, pageUrl });

    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber }),
      });

      const resultData = await res.json();

      if (resultData.success) {
        setStep(2);
        setMessage("OTP sent successfully!");
      } else {
        setMessage(resultData.message || "Failed to send OTP.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
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
