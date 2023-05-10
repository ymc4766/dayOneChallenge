import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Mail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "serv*****vbfg54yqgy3",
        "template***n74",
        form.current,
        "wCaOnG_qZR$$$i"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className=" py-10">
      <h1 className=" p-3 text-white ">
        {" "}
        Send Me Message{" "}
      </h1>
      <div className="max-w-[800px] mx-auto  w-full h-full">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full h-full px-3 py-7 bg-white rounded-md flex flex-col items-center  "
        >
          <div className="p-2  flex items-center ">
            <label className="text-gray-800 mr-2">Name</label>
            <input
              className="w-[340px]  border border-gray-300 p-2 rounded-lg "
              type="text"
              name="user_name"
            />
          </div>
          <div className="p-2  flex items-center ">
            <label className="text-gray-800 mr-2">Email</label>
            <input
              className="w-[340px] border border-gray-300 p-2 rounded-lg "
              type="email"
              name="user_email"
            />
          </div>
          <div className="mt-2 flex flex-col  ">
            <div className="flex items-center ">
              <label className="text-gray-800 mr-2">Message</label>
              <textarea
                name="message"
                placeholder="Leave A Message"
                rows="4"
                class="block p-2.5 w-[340px] text-sm text-gray-900 bg-gray-50 
              rounded-lg border border-gray-300 focus:ring-blue-500
               focus:border-blue-200 dark:bg-gray-700 dark:border-gray-200
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <input
            className="px-10 mb-3  mt-3 border border-gray-300 p-3 bg-blue-500 text-white rounded-lg "
            type="submit"
            value="Send"
          />{" "}
        </form>
      </div>
    </div>
  );
};

export default Mail;
