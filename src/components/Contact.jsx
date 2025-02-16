import React from "react";

function Contact({ isSticky, isActive }) {
  return (
    <div
      id="contact"
      className="second-section w-full h-[110vh] bg-[url('./assets/bg5.jpg')] bg-cover bg-fixed text-white flex flex-col justify-center items-center"
    >
      <div className="w-full h-full bg-black bg-opacity-85 flex justify-center items-center">
        <div className="stars-container mt-10 mr-10">
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
            <h1 className="header text-[40px] font-semibold">CONTACT</h1>
            <div className="underline w-[150px] h-[4px] bg-white mt-3"></div>
            <div className="text-[#03c0c4] text-lg font-semibold flex flex-col justify-center items-center mt-10">
              <div>Please provide your feedback</div>
              <div>
                Have a project for me? I'd love to hear from you, give me a
                shout by email or by using the form below.
              </div>
            </div>
            <div className="flex flex-col items-end w-[40vw] h-auto mt-10 gap-2">
              <input
                className="bg-transparent w-full h-10 px-3 py-1 border-[#999d9b] border-[1px] placeholder:text-[#999d9b]"
                type="text"
                placeholder="Name"
              />
              <input
                className="bg-transparent w-full h-10 px-3 py-1 border-[#999d9b] border-[1px] placeholder:text-[#999d9b]"
                type="text"
                placeholder="Enter email"
              />
              <textarea
                className="h-40 bg-transparent w-full px-3 py-1 border-[#999d9b] border-[1px] placeholder:text-[#999d9b]"
                type="text"
                placeholder="Your Message"
                name=""
                id=""
              ></textarea>
              <button className="bg-transparent w-32 h-10 px-3 py-1 border-[#999d9b] border-[1px] font-semibold">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
