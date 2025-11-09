import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
 
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("idle");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setStatusType("idle");

   
    if (!form.name || !form.email || !form.phone || !form.message) {
      setStatus("Please fill out all fields.");
      setStatusType("error");
      return;
    }

    if (!validateEmail(form.email)) {
      setStatus("Please enter a valid email address.");
      setStatusType("error");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Form submitted successfully!");
        setStatusType("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
       
        let json = null;
        try { json = await res.json(); } catch (_){ }
        setStatus(json?.message || "Submission failed. Please try again later.");
        setStatusType("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("Network error. Please try again.");
      setStatusType("error");
    } finally {
      setLoading(false);
      // auto-hide success after few seconds
      if (statusType !== "error") {
        setTimeout(() => {
          setStatus("");
          setStatusType("idle");
        }, 4500);
      }
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <p className="contact-subtext">
        We'd love to hear from you! Fill out the form and our team will get back to you soon.
      </p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            aria-label="Your name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            aria-label="Your email"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            aria-label="Phone number"
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          aria-label="Your message"
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

        
        <div
          className={`status ${statusType === "success" ? "success" : ""} ${
            statusType === "error" ? "error" : ""
          } ${status ? "visible" : ""}`}
          role="status"
          aria-live="polite"
        >
          {status}
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
