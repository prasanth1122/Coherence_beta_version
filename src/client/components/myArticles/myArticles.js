import LibraryBar from "./libraryBar";

export default function MyArticles() {
  return (
    <div className="w-full   flex flex-col items-start gap-8">
      <div className="w-full flex flex-col items-start gap-4">
        <p className="text-2xl text-important_text underline">Library</p>
        <div className="w-full flex flex-col gap-4 items-start md:flex-row md:gap-8">
          <LibraryBar type={"Today"} date={"8th March"} />
          <LibraryBar type={"This Week"} date={"Week 17"} />
          <LibraryBar type={"This Month"} date={"2024"} />
        </div>
      </div>
      <div className="w-full flex flex-col items-start gap-4">
        <p className="text-2xl text-important_text underline">Saved</p>
        <div className="w-full flex flex-col gap-4 items-start md:flex-row md:gap-8">
          <LibraryBar type={"All saved"} date={"Grand Reference"} />
        </div>
      </div>
    </div>
  );
}
