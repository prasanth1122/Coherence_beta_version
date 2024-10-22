import Navbar from "../components/navBar/navbar";

export default function PaymentPage() {
  return (
    <div className="w-full h-full flex items-start gap-4 flex-col">
      {/* Navbar component at the top of the page */}
      <Navbar />
      <main className="flex flex-col items-center gap-8 w-full flex-1 lg:flex-row lg:items-center">
        {/* Left section with subscription message */}
        <div className="flex flex-col items-center px-8 pl-12 w-full lg:w-2/5 lg:items-start lg:pl-12">
          <p className="text-2xl text-important_text">Subscribe to Coherence</p>
          <p className="text-lg leading-6 w-4/5 ">
            Stay updated and informed about your entire domain of interest look
            into research, career, investment and entrepreneurial opportunities
            across the globe ...
          </p>
        </div>

        {/* Right section with payment button */}
        <div className="flex flex-col justify-center items-center w-5/6 px-12 mx-4 rounded-xl bg-terinary p-4 md:w-3/5 lg:h-full lg:px-24 py-12">
          {/* Form header and informational text */}
          <div className="w-full flex flex-col gap-4 items-center">
            <p className="text-4xl text-important_text">Get</p>
            <div className="flex flex-col items-center gap-2">
              {/* List of benefits available to the user */}
              <p className="text-lg leading-6 text-center">
                Access to Detailed Comprehensive Real World Knowledge
              </p>
              <p className="text-lg leading-6 text-center">
                More than 274 Renowned Journals and Periodicals
              </p>
              <p className="text-lg leading-6 text-center">
                More than 300 Million Research Papers, Patents and Industry
                Reports
              </p>
              <p className="text-lg leading-6 text-center">
                Participate into the Network of More than 28 Million Pioneers
                across various Domains of Knowledge
              </p>
            </div>
            {/* Payment button */}
            <button className="w-full py-2 bg-secondary text-white text-2xl rounded-xl mt-4 shadow-cta_button_shadow">
              Make Payment of Rs. 149/Month
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
