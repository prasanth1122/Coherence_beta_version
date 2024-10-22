import FormInput from "../components/formInput/formInput";
import Sidebar from "../components/sidebar/sidebar";
import WriteArticleNavbar from "../components/writeAricleNavbar/writeArticleNavbar";

export default function WriteArticlePage() {
  return (
    <div className="w-full h-full flex items-start gap-4 flex-col">
      <WriteArticleNavbar />
      <div className="flex-1 w-full flex items-start gap-4">
        <Sidebar />
        <div className="flex-1 flex flex-col items-start gap-8 p-4 bg-terinary rounded-xl h-full">
          <FormInput label={"Title"} placeholder={"Enter Title"} />
          <FormInput label={"Description"} placeholder={"Enter Description"} />
          <FormInput label={"Tag"} placeholder={"Enter Tag"} />
          <div className="w-full flex-1 flex flex-col items-satart gap-4">
            <p className="text-2xl ">Article</p>
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
