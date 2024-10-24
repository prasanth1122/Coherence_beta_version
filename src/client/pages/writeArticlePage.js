import FormInput from "../components/formInput/formInput";
import Sidebar from "../components/sidebar/sidebar";
import WriteArticleNavbar from "../components/writeAricleNavbar/writeArticleNavbar";

// WriteArticlePage component that represents the page for writing an article
export default function WriteArticlePage() {
  return (
    <div className="w-full h-full flex items-start gap-4 flex-col">
      {/* Navbar at the top of the page */}
      <div className="sticky top-0 z-10 w-full">
        <WriteArticleNavbar />
      </div>

      {/* Main content area with sidebar on the left and the form input area on the right */}
      <div className="flex-1 w-full flex items-start gap-4 overflow-y-hidden">
        {/* Sidebar component on the left side */}
        <div className="sticky left-0 top-0 z-10 w-54 ">
          <Sidebar />
        </div>

        {/* Form section for writing the article */}
        <div className="flex-1 flex flex-col items-start gap-8 p-4 bg-terinary rounded-xl h-full overflow-y-auto">
          {/* Title input field */}
          <FormInput label={"Title"} placeholder={"Enter Title"} />

          {/* Description input field */}
          <FormInput label={"Description"} placeholder={"Enter Description"} />

          {/* Tag input field */}
          <FormInput label={"Tag"} placeholder={"Enter Tag"} />

          {/* Article textarea for writing the main content */}
          <div className="w-full flex-1 flex flex-col items-start gap-4">
            <p className="text-2xl">Article</p>
            <textarea
              placeholder="Write Article"
              className="p-4 rounded-xl text-lg w-full flex-1 shadow-input_shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
