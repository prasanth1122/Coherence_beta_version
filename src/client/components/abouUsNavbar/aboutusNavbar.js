import { IoPersonOutline } from "react-icons/io5";

export default function AboutusNavbar() {
  return (
    <div className="w-full h-navbar bg-primary p-4 flex items-center justify-between  text-white">
      <p className="text-sm leading-4 lg:text-base lg:leading-5">
        Coherence Educational
        <br />
        Society
      </p>
      <input
        type="text"
        placeholder="Enter Your Topic"
        className="p-4 w-1/4 md:w-2/5  rounded-lg h-9 shadow-input_shadow text-black"
      />
      <div className="flex items-center gap-6">
        <button className="px-4 py-2 rounded-xl bg-secondary">Sign In</button>
        <p className="text-lg text-white">Subscribe</p>
        <IoPersonOutline
          style={{ fill: "white", width: "30px", height: "30px" }}
        />
      </div>
    </div>
  );
}
