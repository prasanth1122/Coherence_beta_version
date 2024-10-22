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
      <MainpageNavbar />

      {/* Main content area: sidebar on the left, main content on the right */}
      <div className="flex-1 w-full flex items-start gap-4">
        {/* Sidebar component with profile and user info */}
        <Sidebar />

        {/* Main section of the page */}
        <main className="flex-1 h-full gap-4 flex flex-col items-start">
          {/* Article and Similar Articles section displayed side-by-side on larger screens */}
          <div className="w-full h-full flex flex-col items-start gap-4 lg:flex-row">
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
