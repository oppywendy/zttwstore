import React from "react";

const Footer = () => {
  return (
    <div className="w-full justify-center items-center flex">
      <div className="w-[96%] min-h-full">
        <div className="pt-5">
          <p className="text-xl pb-5">Subscribe to our emails</p>
          <input
            className="w-80 h-12 border border-black pl-5 rounded-lg"
            type="email"
            placeholder="Email"
          />
        </div>
        <hr className="mt-3" />
        <div className="pt-10 pb-10">
          <p className="text-sm pb-2">Country/region</p>
          <select className="w-48 h-10 border border-black text-sm pl-5 rounded-lg">
            <option value="usa">United States (USD$)</option>
            <option value="canada">Canada</option>
            <option value="uk">UK</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Footer;
