import CollectionBar from "./collectionBar";

export default function MyCollection() {
  return (
    <div className="w-full   flex flex-col items-start gap-8 bg-highlight_background px-4 py-4 rounded-xl ">
      <div className="w-full flex flex-col items-start gap-4">
        <p className="text-2xl text-important_text ">My Collection</p>
        <div className="w-full flex   items-start flex-row gap-8 overflow-x-scroll overflow-y-hidden hide-scrollbar  ">
          <CollectionBar area={"Nature"} update={"last Updated Today"} />
          <CollectionBar area={"Nature"} update={"last Updated Today"} />
          <CollectionBar area={"Nature"} update={"last Updated Today"} />
          <CollectionBar area={"Nature"} update={"last Updated Today"} />
        </div>
      </div>
    </div>
  );
}
