import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-blod text-center text-[#001b5e]">
        Contact
      </h1>
      <form
        action="https://getform.io/f/09bdd3e6-4b55-4c89-82c2-5a5035872e17"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="col-span-2 md:col-span-1 flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
            />
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col">
            <label className="uppercase text-sm py-2">Phone</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="phone"
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <label className="uppercase text-sm py-2">Email</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300 w-full"
              type="email"
              name="email"
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <label className="uppercase text-sm py-2">Subject</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300 w-full"
              type="text"
              name="subject"
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <label className="uppercase text-sm py-2">Message</label>
            <textarea
              className="border-2 rounded-lg p-3 border-gray-300 w-full"
              rows="10"
              name="message"
            ></textarea>
          </div>
          <div className="col-span-2">
            <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
