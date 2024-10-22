import AboutusNavbar from "../components/abouUsNavbar/aboutusNavbar";
import FormInput from "../components/formInput/formInput";

// AboutUs component
export default function AboutUs() {
  return (
    <div className="w-full h-full flex items-start gap-4 flex-col">
      {/* Navbar for the About Us page */}
      <AboutusNavbar />

      {/* Main content area */}
      <main className="flex px-4 flex-col items-center gap-8 w-full flex-1 lg:flex-row lg:items-center">
        {/* Left section: Information about the organization */}
        <div className="w-full px-4 h-full flex flex-col items-center gap-8 lg:items-start lg:w-1/2 lg:p-0">
          <p className="text-2xl text-important_text">About Us</p>

          {/* Section for About Us details */}
          <div className="w-full flex flex-col items-start gap-8">
            <p className="text-2xl w-full">
              At Coherence Educational Society, we are a global consortium of
              forward-thinking researchers, educators, and working professionals
              who are pioneers in their fields. Our organization spans a diverse
              range of disciplines, from the arts and humanities to the
              cutting-edge sciences, including niche fields like microbiology,
              nanotechnology, and beyond.
            </p>
            {/* Repeated paragraphs to describe the organization's details */}
            <p className="text-2xl">
              At Coherence Educational Society, we are a global consortium of
              forward-thinking researchers, educators, and working professionals
              who are pioneers in their fields. Our organization spans a diverse
              range of disciplines, from the arts and humanities to the
              cutting-edge sciences, including niche fields like microbiology,
              nanotechnology, and beyond.
            </p>
            <p className="text-2xl">
              At Coherence Educational Society, we are a global consortium of
              forward-thinking researchers, educators, and working professionals
              who are pioneers in their fields. Our organization spans a diverse
              range of disciplines, from the arts and humanities to the
              cutting-edge sciences, including niche fields like microbiology,
              nanotechnology, and beyond.
            </p>
          </div>
        </div>

        {/* Right section: Contact Us form */}
        <div className="w-full bg-terinary p-4 h-full flex flex-col items-center gap-8 lg:items-start lg:w-1/2 lg:p-4 lg:rounded-xl">
          <p className="text-2xl text-important_text">Contact Us</p>

          {/* Input fields for the contact form */}
          <FormInput label={"Name"} placeholder={"Enter Your Name"} />
          <FormInput label={"Purpose"} placeholder={"Select your Purpose"} />

          {/* Message input (textarea) */}
          <div className="w-full flex-1 flex flex-col items-center gap-4 lg:items-start">
            <p className="text-2xl w-full">Message</p>
            <textarea
              placeholder="Enter Message"
              className="w-full h-36 shadow-input_shadow rounded-xl p-4 text-lg lg:flex-1"
            />

            <button className="px-4 text-lg py-2 bg-secondary rounded-xl text-white">
              Submit
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
