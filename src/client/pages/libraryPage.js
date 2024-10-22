import MainpageNavbar from "../components/mainpageNavbar/mainpageNavbar";
import MyArticles from "../components/myArticles/myArticles";
import MyCollection from "../components/myCollection/myCollection";
import Sidebar from "../components/sidebar/sidebar";

export default function LibraryPage() {
  return (
    <div className="w-full h-full flex items-start gap-4 flex-col">
      <MainpageNavbar />
      <div className="flex-1 w-full h-full flex items-start gap-4">
        {/* Sidebar component with profile and user info */}
        <Sidebar />
        <div className="flex gap-8 flex-col items-start flex-1 h-full border-2 p-4">
          <MyArticles />
          <MyCollection />
        </div>
      </div>
    </div>
  );
}
