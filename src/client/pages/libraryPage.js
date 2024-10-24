import MainpageNavbar from "../components/mainpageNavbar/mainpageNavbar";
import MyArticles from "../components/myArticles/myArticles";
import MyCollection from "../components/myCollection/myCollection";
import ProfileBar from "../components/profileBar/profileBar";
import Sidebar from "../components/sidebar/sidebar";
import { useNavigation } from "../store/context/navigationContext";

// LibraryPage component
export default function LibraryPage() {
  const { isProfileOpen } = useNavigation();

  return (
    // Main container with full width and height, flex column layout
    <div className="w-full h-full flex items-start gap-4 flex-col relative">
      {isProfileOpen && <ProfileBar />}
      {/* Navbar section, sticky at the top with a high z-index for layering */}
      <div className="sticky top-0 z-100 w-full">
        <MainpageNavbar />
      </div>

      {/* Main content area with sidebar and library content */}
      <div className="flex-1 w-full h-full flex items-start gap-4 overflow-y-hidden">
        {/* Sidebar section with profile and user information, sticky at the left side */}
        <div className="sticky left-0 top-20  w-54">
          <Sidebar />
        </div>

        {/* Main content section with articles and collections */}
        <div className="flex gap-8 flex-col items-start flex-1 h-full border-2 p-4 overflow-y-auto">
          {/* Display the MyArticles component (list of user articles) */}
          <MyArticles />

          {/* Display the MyCollection component (user's article collections) */}
          <MyCollection />
        </div>
      </div>
    </div>
  );
}
