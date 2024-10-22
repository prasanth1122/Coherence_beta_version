import Article from "../components/article/article";
import Comments from "../components/comments/comments";
import MainpageNavbar from "../components/mainpageNavbar/mainpageNavbar";
import Sidebar from "../components/sidebar/sidebar";
import SimilarArticlesBar from "../components/similarArticles/similarArticlesBar";

// LandingPage component
export default function LandingPage() {
  return (
    // Main container with full width and height, flex column layout, and gap between elements
    <div className="w-full h-full flex items-start gap-4 flex-col">
      {/* Navbar at the top of the page */}
      <div className="sticky top-0 z-100 w-full">
        <MainpageNavbar />
      </div>

      {/* Main content area: sidebar on the left, main content on the right */}
      <div className="flex-1 w-full flex items-start gap-4 overflow-y-hidden">
        {/* Sidebar component with profile and user info */}
        <div className="sticky left-0 top-20 z-10 w-54 ">
          <Sidebar />
        </div>

        {/* Main section of the page */}
        <main className="flex-1 h-full gap-4 flex flex-col items-start overflow-y-auto">
          {/* Article and Similar Articles section displayed side-by-side on larger screens */}
          <div className="w-full flex flex-col items-start gap-4 lg:flex-row">
            {/* Main article component */}
            <Article />

            {/* Sidebar for similar articles */}
            <SimilarArticlesBar />
          </div>

          {/* Comments section with background and top border */}
          <div className="w-full p-4 flex flex-col items-start gap-12 bg-highlight_background border-t-2 border-black">
            {/* Section title */}
            <p className="text-2xl text-important_text underline">Comments</p>

            {/* Comments section where multiple comment components are displayed */}
            <div className="w-full flex flex-col items-start gap-4">
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
        </main>
      </div>
    </div>
  );
}
