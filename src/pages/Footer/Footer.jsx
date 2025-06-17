import React from 'react'
import chaer from '../../assets/footerpic.png'
import Contect from '../Home/Contect';

 const Footer = () => {
  return (
<footer className="max-w-screen mt-5">
  <div className="flex flex-col lg:flex-row">
    {/* Contact Image */}
    <div id="Contact" className="w-full lg:w-1/2 h-fit lg:h-auto">
      <img
        src={chaer}
        alt="Contact"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>

    {/* Contact Form */}
    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 py-8 gap-4">
      <h2 className="text-black font-bold w-full text-start text-[32px] lg:text-[48px] mb-4 judson-regular">
        Get in Touch – We're Here to Help!
      </h2>
      <p className="text-seven font-normal text-[18px] lg:text-[24px] mb-4 open-sans-regular">
        Whether you're starting fresh or upgrading your current setup, we're ready to support you
      </p>

      <form className="w-full judson-bold flex flex-col gap-4">
        {/* Name */}
        <label className="text-seven text-[14px] font-semibold text-start">Name:</label>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-3xl p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-one transition"
        />

        {/* Email */}
        <label className="text-seven text-[14px] font-semibold text-start">Email:</label>
        <input
          type="email"
          placeholder="Your Email"
          className="w-full rounded-3xl p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-one transition"
        />

        {/* Phone */}
        <label className="text-seven text-[14px] font-semibold text-start">Phone number:</label>
        <div className="flex">
          <select className="rounded-l-3xl p-3 border border-gray-300 border-r-0 focus:outline-none focus:ring-2 focus:ring-one text-gray-700">
            <option value="US">🇺🇸 +1</option>
            <option value="EG">🇪🇬 +20</option>
            <option value="SA">🇸🇦 +966</option>
          </select>
          <input
            type="tel"
            placeholder="Your Phone"
            className="w-full rounded-r-3xl p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-one transition"
          />
        </div>

        {/* Message */}
        <label className="text-seven text-[14px] font-semibold text-start">Message:</label>
        <textarea
          placeholder="How can we help?"
          className="w-full h-28 resize-none rounded-3xl p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-one transition"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-one px-5 py-2 w-[80%] mx-auto text-white text-[24px] font-normal rounded-3xl hover:scale-95 transition mt-6 mb-2"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>

<Contect/>
</footer>

  )
}
export default Footer
