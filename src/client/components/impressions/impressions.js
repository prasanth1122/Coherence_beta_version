import { MdComment } from "react-icons/md";
import { TbBulb } from "react-icons/tb";
import { CiBookmark } from "react-icons/ci";
export default function ImpressinsBar() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <MdComment style={{ width: "18px", height: "18px" }} />
        <p className="text-lg">Comments</p>
      </div>
      <div className="flex items-center gap-2">
        <TbBulb style={{ width: "18px", height: "18px" }} />
        <p className="text-lg">Impressions</p>
      </div>
      <div className="flex items-center gap-2">
        <CiBookmark style={{ width: "18px", height: "18px" }} />
      </div>
    </div>
  );
}
