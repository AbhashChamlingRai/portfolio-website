import React, { useState } from "react";
import "./Contact.css";

// Custom hook for handling form inputs
function useForm(initialState) {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return [values, handleChange];
}

function ContactForm({
  container_classes,
  headers_classes,
  normal_text_classes,
}) {
  const initialFormValues = {
    fullName: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formValues, setFormValues] = useForm(initialFormValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };
  return (
    <div
      className={`contact_section px-10 ${container_classes} flex flex-col gap-14`}
    >
      <div className="contact_intro flex flex-col gap-2">
        <div className="text-[18px] sm:text-[22px] md:text-2xl lg:text-2xl xl:text-3xl font-semibold">
          Contact me
        </div>
        <div className={`${normal_text_classes}`}>
          I'm always open for any suggestion or just to have a chat
        </div>
      </div>

      <div
        className={`contact_info flex flex-col gap-3 sm:flex-row sm:gap-0 text-left ${normal_text_classes}`}
      >
        <div className="flex flex-col flex-auto">
          <div className="contact_info_title font-semibold">MY ADDRESS:</div>
          <div className="contact_info_info text-custom-light-blue">
            Nakhudole, <br />
            Karyabinayak 44700, <br />
            Lalitpur, Nepal
          </div>
        </div>
        <div className="w-[7%] sm:w-[10%] md:w-[12%] lg:w-[15%]"></div>
        <div className="flex flex-col flex-auto">
          <div className="contact_info_title font-semibold">MY EMAIL:</div>
          <div className="contact_info_info text-custom-light-blue">
            avash.cmling@gmail.com
          </div>
        </div>
        <div className="w-[7%] sm:w-[10%] md:w-[12%] lg:w-[15%]"></div>
        <div className="flex flex-col flex-auto">
          <div className="contact_info_title font-semibold">MY PHONE:</div>
          <div className="contact_info_info text-custom-light-blue">
            +977 9803934508
          </div>
        </div>
      </div>

      <div className="contact_form">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-row gap-8 sm:gap-16">
            <div className="flex-1">
              {/* <label htmlFor="fullName">Full Name</label> */}
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formValues.fullName}
                onChange={setFormValues}
                placeholder="Your Full Name"
                className={`focus:border-custom-light-blue focus:ring-2 focus:border-teal focus:outline-none w-full ${normal_text_classes} text-center flex justify-center items-center bg-transparent border-[1px] sm:border-2 border-white rounded-lg
                            h-[35px] sm:h-[40px] md:h-[35px] lg:h-[35px] xl:h-[40px]`}
              />
            </div>
            <div className="flex-1">
              {/* <label htmlFor="email">Your Email</label> */}
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={setFormValues}
                placeholder="Your Email"
                className={`focus:border-custom-light-blue focus:ring-2 focus:border-teal focus:outline-none w-full ${normal_text_classes} text-center flex justify-center items-center bg-transparent border-[1px] sm:border-2 border-white rounded-lg
                            h-[35px] sm:h-[40px] md:h-[35px] lg:h-[35px] xl:h-[40px]`}
              />
            </div>
          </div>
          <div>
            {/* <label htmlFor="subject">Message Subject</label> */}
            <input
              type="text"
              id="subject"
              name="subject"
              value={formValues.subject}
              onChange={setFormValues}
              placeholder="Message Subject"
              className={`focus:border-custom-light-blue focus:ring-2 focus:border-teal focus:outline-none w-full ${normal_text_classes} text-center flex justify-center items-center bg-transparent border-[1px] sm:border-2 border-white rounded-lg
                          h-[35px] sm:h-[40px] md:h-[35px] lg:h-[35px] xl:h-[40px]`}
            />
          </div>
          <div>
            {/* <label htmlFor="message">Your Message Goes Here...</label> */}
            <textarea
              id="message"
              name="message"
              value={formValues.message}
              onChange={setFormValues}
              placeholder="Your Message Goes Here..."
              className={`focus:border-custom-light-blue focus:ring-2 focus:border-teal focus:outline-none w-full ${normal_text_classes} text-center flex justify-center items-center bg-transparent border-[1px] sm:border-2 border-white rounded-lg
                        h-[200px]`}
            />
          </div>
          <div>
            <button
              type="submit"
              className={`focus:border-teal focus:outline-none focus:ring-0 ${normal_text_classes} font-semibold bg-custom-light-blue text-custom-darker-blue border-0 w-[15%] h-[40px] rounded-lg hover:bg-[#39b1b7]`}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formValues.fullName}
          onChange={setFormValues}
          placeholder="Your Full Name"
        />
      </div>
      <div>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={setFormValues}
          placeholder="Your Email"
        />
      </div>
      <div>
        <label htmlFor="subject">Message Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formValues.subject}
          onChange={setFormValues}
          placeholder="Message Subject"
        />
      </div>
      <div>
        <label htmlFor="message">Your Message Goes Here...</label>
        <textarea
          id="message"
          name="message"
          value={formValues.message}
          onChange={setFormValues}
          placeholder="Your Message Goes Here..."
        />
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
}

export default ContactForm;
