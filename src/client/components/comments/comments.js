import commentsIMG from "../../assets/comments.png";
export default function Comments({ name, review }) {
  return (
    <div className="w-full  flex flex-row items-start gap-8 md:items-center">
      <img src={commentsIMG} alt="CommentsImg" />
      <div className="flex flex-col gap-2 flex-1 items-start">
        <p className="text-2xl ">{name}</p>
        <p className="text-lg w-1/2 ">{review}</p>
      </div>
    </div>
  );
}
