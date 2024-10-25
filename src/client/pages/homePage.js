import Article from "../components/article/article";
import Comments from "../components/comments/comments";
import MainpageNavbar from "../components/mainpageNavbar/mainpageNavbar";
import Preferences from "../components/preferences/preferences";
import ProfileBar from "../components/profileBar/profileBar";
import Sidebar from "../components/sidebar/sidebar";
import MultipleDoi from "../components/similarArticles/multipleDoi";
import SimilarArticlesBar from "../components/similarArticles/similarArticlesBar";
import { useNavigation } from "../store/context/navigationContext";

// LandingPage component
export default function HomePage() {
  const { isSubscribe, isProfileOpen, isPreference } = useNavigation();

  return (
    // Main container with full width and height, flex column layout, and gap between elements
    <div
      className={`w-full h-full flex items-start gap-4 flex-col relative 
      }`}
    >
      {isPreference && <Preferences />}
      {isProfileOpen && <ProfileBar />}
      {/* Navbar at the top of the page */}
      <div className={`sticky top-0 z-100 w-full "}`}>
        <MainpageNavbar />
      </div>

      {/* Main content area: sidebar on the left, main content on the right */}
      <div
        className={`flex-1 w-full flex items-start gap-4 overflow-y-hidden pr-4 md:pr-0 "
        }`}
      >
        {/* Sidebar component with profile and user info */}
        <div className="sticky left-0 h-full z-10 w-54 ">
          <Sidebar />
        </div>

        {/* Main section of the page */}
        <main className="flex-1 h-full gap-4 flex flex-col items-start overflow-y-auto hide-scrollbar">
          {/* Article and Similar Articles section displayed side-by-side on larger screens */}
          <div className="w-full flex flex-col items-start gap-4 lg:flex-row">
            {/* Main article component */}
            <Article />
            {isSubscribe === false && (
              <div className="w-full flex flex-col  gap-4 lg:flex-1  h-full">
                <MultipleDoi />
              </div>
            )}

            {/* Sidebar for similar articles */}
            {isSubscribe && <SimilarArticlesBar />}
          </div>

          {/* Comments section with background and top border */}
          {isSubscribe && (
            <div className="w-full p-4 flex flex-col items-start gap-12 bg-highlight_background rounded-xl">
              {/* Section title */}
              <p className="text-2xl text-important_text ">Comments</p>

              {/* Comments section where multiple comment components are displayed */}
              <div className="w-full flex flex-col items-start gap-4">
                <div className="w-full flex flex-col items-start gap-2 mt-2">
                  <p className="text-lg ">Add Comment </p>
                  <div className="w-full items-start gap-4  flex flex-col lg:flex-row lg:items-center">
                    <input
                      type="text"
                      placeholder="Add Comment"
                      className="w-full xl:w-1/2  h-12 text-lg rounded-xl bg-white shadow-input_shadow p-4"
                    />
                    <button className="px-4 py-2 rounded-md text-white bg-secondary text-lg">
                      Post
                    </button>
                  </div>
                </div>
                {/* Repeated comment components for demo purposes */}
                <Comments
                  name={"Sarthak Gandhi"}
                  review={
                    "Absolute conjecture describing the limits of human physiology and metabolism. @Nature lets come together to research this in further detail."
                  }
                />
                <Comments
                  name={"Sarthak Gandhi"}
                  review={
                    "Absolute conjecture describing the limits of human physiology and metabolism. @Nature lets come together to research this in further detail."
                  }
                />
                <Comments
                  name={"Sarthak Gandhi"}
                  review={
                    "Absolute conjecture describing the limits of human physiology and metabolism. @Nature lets come together to research this in further detail."
                  }
                />
                <Comments
                  name={"Sarthak Gandhi"}
                  review={
                    "Absolute conjecture describing the limits of human physiology and metabolism. @Nature lets come together to research this in further detail."
                  }
                />
                <Comments
                  name={"Sarthak Gandhi"}
                  review={
                    "Absolute conjecture describing the limits of human physiology and metabolism. @Nature lets come together to research this in further detail."
                  }
                />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
