import MainpageNavbar from "../components/mainpageNavbar/mainpageNavbar";
import TrendingBar from "../components/trendingOnCoherence/trendingBar";


export default function LandingPage() {
  

  return (
    <div className="w-full h-full flex items-start gap-4 flex-col">
      {/* Navbar at the top of the page */}
      <div className="sticky top-0 z-100 w-full">
        <MainpageNavbar />
      </div>
      <main className="w-full h-full flex flex-col items-start gap-4 px-4">
        <p className="text-2xl text-important_text">Trending on Coherence</p>
        <div className="w-full flex items-center gap-8 flex-wrap ">
          <TrendingBar
            heading={"Plastic eating bacteria could be the future"}
            area={"Coherence : Applied"}
            number={"01"}
          />
          <TrendingBar
            heading={"Plastic eating bacteria could be the future"}
            area={"Coherence : Applied"}
            number={"01"}
          />
          <TrendingBar
            heading={"Plastic eating bacteria could be the future"}
            area={"Coherence : Applied"}
            number={"01"}
          />
          <TrendingBar
            heading={"Plastic eating bacteria could be the future"}
            area={"Coherence : Applied"}
            number={"01"}
          />
        </div>
      </main>
    </div>
  );
}
