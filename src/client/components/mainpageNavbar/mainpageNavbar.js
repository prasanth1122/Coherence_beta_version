import { IoPerson } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";

export default function MainpageNavbar() {
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
      <button className="px-4 py-2 rounded-xl bg-secondary">Register</button>
      <div className="flex items-center gap-4 mr-12">
        <IoPerson style={{ fill: "white", width: "42px", height: "42px" }} />
        <IoNotifications
          style={{ fill: "white", width: "42px", height: "42px" }}
        />
      </div>
    </div>
  );
}
