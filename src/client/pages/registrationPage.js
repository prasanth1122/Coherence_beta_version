import React from "react";
import Navbar from "../components/navBar/navbar";
import FormInput from "../components/formInput/formInput";

// RegistrationPage component
export default function RegistrationPage() {
  return (
    <div className="w-full h-full flex items-start gap-4 flex-col">
      {/* Navbar at the top of the page */}
      <Navbar />

      {/* Main content area */}
      <main className="flex flex-col items-center gap-8 w-full flex-1 lg:flex-row lg:items-center">
        {/* Left section with congratulatory message */}
        <div className="flex flex-col items-center px-8 pl-12 w-full lg:w-2/5 lg:items-start lg:pl-12">
          <p className="text-2xl text-important_text">Congratulations...</p>
          <p className="text-lg leading-6">
            For being in those top 2% Pioneers of your Domain.
            <br /> Future resides on Your Shoulders to carry forward
          </p>
        </div>

        {/* Right section with registration form */}
        <div className="flex flex-col gap-16 items-center w-5/6 px-12 mx-4 rounded-xl bg-terinary p-4 md:w-3/5 lg:h-full lg:px-24 py-12">
          {/* Form header and circles for visual representation */}
          <div className="w-full flex flex-col gap-8 items-center">
            <p className="text-4xl">Register</p>
            <div className="flex items-start gap-4">
              {/* Circle indicators for steps or selection */}
              <div className="w-8 h-8 bg-white rounded-full border-2 border-black"></div>
              <div className="w-8 h-8 bg-black rounded-full border-2 border-black"></div>
              <div className="w-8 h-8 bg-white rounded-full border-2 border-black"></div>
            </div>
          </div>

          {/* Input fields for registration */}
          <div className="w-full flex flex-col items-center gap-4">
            <FormInput label={"Name"} placeholder={"Enter Your Name"} />
            <FormInput label={"Age"} placeholder={"Select Age Group"} />
            <FormInput label={"Location"} placeholder={"Select Your Country"} />
            {/* Register button */}
            <button className="px-4 py-2 bg-secondary text-white text-2xl rounded-xl mt-4 shadow-cta_button_shadow">
              Register
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
