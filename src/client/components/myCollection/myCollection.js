import LibraryBar from "../myArticles/libraryBar";
import CollectionBar from "./collectionBar";

export default function MyCollection() {
  return (
    <div className="w-full   flex flex-col items-start gap-8 bg-highlight_background px-2 py-4 rounded-xl">
      <div className="w-full flex flex-col items-start gap-4">
        <p className="text-2xl text-important_text underline">My Collection</p>
        <div className="w-full flex flex-col gap-4 items-start md:flex-row md:gap-8">
          <CollectionBar area={"Nature"} update={"last Updated Today"} />
          <CollectionBar area={"Nature"} update={"last Updated Today"} />
          <CollectionBar area={"Nature"} update={"last Updated Today"} />
        </div>
      </div>
    </div>
  );
}
