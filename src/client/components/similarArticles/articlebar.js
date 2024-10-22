import articleImg from "../../assets/similarArticle.png";
export default function ArticleBar({ heading, area }) {
  return (
    <div className="flex  items-center gap-6 w-full p-4 bg-terinary rounded-xl shadow-card_shadow">
      <img src={articleImg} alt="ArticleImg" />
      <div className="flex flex-col items-start h-full justify-between">
        <p className="text-lg w-full">{heading}</p>
        <p className="text-lg opacity-40">{area}</p>
      </div>
    </div>
  );
}
