import React, { useState } from "react";

function Contact({ isSticky, isActive }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch("http://localhost:5000/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data)
      if (data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error occurred.");
    }
  };

  return (
    <div
      id="contact"
      className="second-section w-full h-[110vh] bg-[url('./assets/bg5.webp')] bg-cover bg-fixed text-white flex flex-col justify-center items-center bg-black"
    >
      <div className="w-full h-full bg-black bg-opacity-85 flex justify-center items-center">
        <div className="stars-container opacity-50 absolute left-[30%] mt-40">
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
        </div>
        <div className="flex flex-col justify-center items-center gap-16 max-w-[75vw]">
          <div
            id="section-1"
            className="p-4 flex flex-col justify-center items-center"
          >
            <h1 className="header text-2xl md:text-[40px] font-semibold">CONTACT</h1>
            <div className="underline md:w-[150px] w-[100px] h-[2px] md:h-[4px] bg-white mt-3"></div>
            <div className="text-[#03c0c4] md:text-lg font-semibold flex flex-col justify-center items-center mt-10 text-center">
              <div>Please provide your feedback</div>
              <div>
                Have a project for me? I'd love to hear from you, give me a
                shout by email or by using the form below.
              </div>
            </div>
            <div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-end w-[75vw] md:w-[40vw] h-auto mt-10 gap-2"
              >
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="bg-transparent w-full h-10 px-3 py-1 border-[#999d9b] border-[1px] placeholder:text-[#999d9b]"
                  required
                />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="bg-transparent w-full h-10 px-3 py-1 border-[#999d9b] border-[1px] placeholder:text-[#999d9b]"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="h-40 bg-transparent w-full px-3 py-1 border-[#999d9b] border-[1px] placeholder:text-[#999d9b]"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-transparent w-32 h-10 px-3 py-1 border-[#999d9b] border-[1px] font-semibold"
                >
                  SUBMIT
                </button>
                <p className="text-sm mt-2">{status}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
