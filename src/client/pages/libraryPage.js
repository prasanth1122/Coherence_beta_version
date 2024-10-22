import MainpageNavbar from "../components/mainpageNavbar/mainpageNavbar";
import MyArticles from "../components/myArticles/myArticles";
import MyCollection from "../components/myCollection/myCollection";
import Sidebar from "../components/sidebar/sidebar";

export default function LibraryPage() {
  return (
    <div className="w-full h-full flex items-start gap-4 flex-col">
      <div className="sticky top-0 z-100 w-full">
        <MainpageNavbar />
      </div>
      <div className="flex-1 w-full h-full flex items-start gap-4">
        {/* Sidebar component with profile and user info */}
        <div className="sticky left-0 top-20 -z-10 w-54">
          <Sidebar />
        </div>
        <div className="flex gap-8 flex-col items-start flex-1 h-full border-2 p-4">
          <MyArticles />
          <MyCollection />
        </div>
      </div>
    </div>
  );
}
