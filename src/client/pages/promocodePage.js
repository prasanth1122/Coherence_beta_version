import React, { useState } from "react";
import Navbar from "../components/navBar/navbar";
import FormInput from "../components/formInput/formInput";
import { useNavigation } from "../store/context/navigationContext";

// PromocodePage component
export default function PromocodePage() {
  const { handleNavigation, handleSubscribe } = useNavigation();
  const [promo, setPromo] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleRegister = () => {
    if (promo === "") {
      setErrorMessage("Enter promo code");
    } else {
      setErrorMessage("");
      handleSubscribe();

      handleNavigation("/home");
    }
  };
  return (
    <div className="w-full h-full flex items-start gap-4 flex-col">
      {/* Navbar at the top of the page */}
      <div className="sticky top-0 z-100 w-full">
        <Navbar />
      </div>

      {/* Main content area */}
      <main className="flex flex-col items-center gap-8 w-full flex-1 lg:flex-row lg:items-center">
        {/* Left section with payment instructions */}
        <div className="flex flex-col items-center px-8 pl-12 w-full lg:w-2/5 lg:items-start lg:pl-12">
          <p className="text-2xl text-important_text">Make Payment</p>
          <p className="text-lg leading-6">
            Make Payment Scanning the QR Code Provided
          </p>
        </div>

        {/* Right section with QR code and input form */}
        <div className="flex flex-col gap-16 items-center w-5/6 px-12 mx-4 rounded-xl bg-terinary p-4 md:w-3/5 lg:h-full lg:px-24 py-12">
          {/* Placeholder for QR Code */}
          <div className="w-64 h-64 border-2 flex flex-col justify-center items-center bg-highlight_background rounded-xl">
            <p className="text-2xl">QR Code Here</p>
          </div>

          {/* Input fields for the promocode */}
          <div className="w-full flex flex-col items-center gap-4">
            <FormInput
              label={"I have special access to the service via my code"}
              placeholder={"Enter Your Code"}
              value={promo}
              onChange={(e) => setPromo(e.target.value)}
            />

            {/* Proceed button */}
            <button
              className="w-full py-2 bg-secondary text-white text-2xl rounded-xl mt-4 shadow-cta_button_shadow"
              onClick={handleRegister}
            >
              Proceed
            </button>
            {errorMessage && (
              <p className="text-lg w-full text-center">{errorMessage}</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
