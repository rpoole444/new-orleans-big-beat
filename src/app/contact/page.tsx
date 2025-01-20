"use client"
import { useState, ChangeEvent, FormEvent } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        setStatus(`Failed to send email: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Error sending email.");
    }
  };

  return (
    <div className="mx-auto py-20 px-4 bg-gray-700">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-gray-100 p-8 text-black shadow-lg rounded-lg"
      >
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Send
        </button>
        {status && <p className="text-center mt-4">{status}</p>}
      </form>
      <p className="text-center text-gray-300 mt-8">
        Or Feel free to reach out to Reid Poole at:
        <br />
        <span className="font-bold">719-332-2752</span>
        <br />
        <span className="font-bold">poole.reid@gmail.com</span>
      </p>
    </div>
  );
}