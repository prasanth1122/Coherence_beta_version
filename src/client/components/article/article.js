import { useNavigation } from "../../store/context/navigationContext";
import ImpressinsBar from "../impressions/impressions";
import SubsribeParagraph from "../subscribeParagraph/subscribeParagraph";

export default function Article() {
  const { isSubscribe, handleNavigation } = useNavigation();
  console.log(isSubscribe);
  const handleArticleSubscribe = () => {
    if (isSubscribe === false) {
      handleNavigation("/subscribe");
    }
  };
  return (
    <div className="w-full h-full lg:w-3/5 p-2 flex flex-col gap-8 items-start">
      <div className="w-full flex flex-col items-start gap-2">
        <p className="text-2xl text-important_text ">
          Sunlight could Harm Your Brain in various ways
        </p>
        <p className="text-lg ">Nature-Health</p>
        <div className="w-full flex flex-col items-start xl:flex-row gap-4 xl:justify-between">
          <div className="flex items-center gap-2">
            <p className="text-lg opacity-50">Biology</p>
            <p className="text-lg opacity-50">Medicine</p>
            <p className="text-lg opacity-50">Opthamology</p>
          </div>
          <ImpressinsBar />
        </div>
      </div>
      {
        <p
          className={`py-2 px-4 w-full text-lg text-important_text bg-highlight_background rounded-xl hover:shadow-text_area_shadow hover:cursor-pointer`}
          onClick={handleArticleSubscribe}
        >
          Excessive sunlight exposure can harm the brain by causing oxidative
          stress, increasing the risk of neurodegenerative diseases, and
          impairing cognitive function. Prolonged UV radiation may lead to
          inflammation, DNA damage, and disruption of the blood-brain barrier,
          potentially contributing to long-term neurological issues. Protecting
          against overexposure is essential.
        </p>
      }
      {isSubscribe === false && <SubsribeParagraph />}
      {isSubscribe && (
        <>
          <p className="text-lg px-4">
            Sunlight is essential for life, providing the energy needed for
            plants to grow and helping humans produce vitamin D, which is
            crucial for bone health and immune function. However, while moderate
            exposure to sunlight offers health benefits, excessive and
            unprotected exposure can have detrimental effects on various organs,
            including the brain.
          </p>
          <p className="text-lg px-4">
            The brain, being the central command of the body, is highly
            sensitive to changes in the environment, including those brought
            about by ultraviolet (UV) radiation from the sun. Understanding the
            potential harms of sunlight on the brain is important for making
            informed decisions about sun protection.
          </p>
          <p className="text-lg px-4">
            1. Oxidative Stress and Neurodegeneration
          </p>
          <p className="text-lg px-4">
            One of the primary ways in which excessive sunlight can harm the
            brain is through oxidative stress. UV radiation from the sun can
            generate free radicals, which are unstable molecules that damage
            cells and tissues by stealing electrons from other molecules. This
            process can lead to oxidative stress, where the body's antioxidant
            defenses are overwhelmed, causing cellular damage.
          </p>
          <p className="text-lg px-4">
            In the brain, oxidative stress is particularly dangerous because it
            can damage neurons and other critical components. Over time, this
            can contribute to neurodegenerative diseases such as Alzheimer's and
            Parkinson's. Studies have shown that oxidative damage is a key
            factor in the progression of these diseases, and excessive UV
            exposure can exacerbate this damage by increasing the production of
            free radicals.
          </p>
          <p className="text-lg px-4">2. Inflammation and Brain Health</p>
          <p className="text-lg px-4">
            UV radiation can also trigger inflammatory responses in the body,
            including the brain. Inflammation is the body's natural response to
            injury or infection, but chronic inflammation can be harmful,
            leading to tissue damage and contributing to various health issues.
            In the brain, chronic inflammation is associated with a range of
            neurodegenerative conditions, including multiple sclerosis and
            amyotrophic lateral sclerosis (ALS).
          </p>
          <p className="text-lg px-4">
            Excessive sunlight exposure can induce an inflammatory response by
            damaging skin cells, which release pro-inflammatory cytokines. These
            cytokines can enter the bloodstream and reach the brain, where they
            can promote inflammation. This systemic inflammation can affect the
            brain's health, leading to cognitive decline and increasing the risk
            of developing neurodegenerative diseases.
          </p>
          <p className="text-lg px-4">3. DNA Damage and Cancer Risk</p>
          <p className="text-lg px-4">
            Another significant concern related to sunlight exposure is DNA
            damage. UV radiation can cause direct DNA damage by forming thymine
            dimers, which are abnormal bonds between DNA bases. This damage can
            lead to mutations if not properly repaired, increasing the risk of
            skin cancer. However, the effects of DNA damage are not limited to
            the skin; they can also impact the brain.
          </p>
          <p className="text-lg px-4">
            There is evidence that UV-induced DNA damage can disrupt the
            function of the blood-brain barrier (BBB), a protective layer that
            prevents harmful substances from entering the brain. When the BBB is
            compromised, it can allow toxins and pathogens to infiltrate the
            brain, leading to inflammation, oxidative stress, and other forms of
            neural damage.
          </p>
          <p className="text-lg px-4">
            Moreover, DNA damage in skin cells can indirectly affect the brain.
            For example, when skin cells undergo apoptosis (programmed cell
            death) due to severe DNA damage, they release signals that can
            trigger a systemic inflammatory response, further affecting brain
            health.
          </p>
          <p className="text-lg px-4">4. Disruption of Circadian Rhythms</p>
          <p className="text-lg px-4">
            Sunlight plays a crucial role in regulating the body's circadian
            rhythms, which are the natural cycles of sleep and wakefulness.
            However, excessive or irregular exposure to sunlight, especially at
            inappropriate times, can disrupt these rhythms. The brain's pineal
            gland, which produces the sleep hormone melatonin, is particularly
            sensitive to light. Overexposure to sunlight, especially during the
            evening, can reduce melatonin production, leading to sleep
            disturbances.
          </p>
          <p className="text-lg px-4">
            Chronic disruption of circadian rhythms is associated with various
            cognitive and mental health issues, including depression, anxiety,
            and impaired cognitive function. It can also increase the risk of
            developing neurodegenerative diseases.
          </p>
          <p className="text-lg px-4">Conclusion</p>
          <p className="text-lg px-4">
            While sunlight is essential for maintaining health, excessive
            exposure can harm the brain in various ways. From oxidative stress
            and inflammation to DNA damage and circadian rhythm disruption, the
            potential risks underscore the importance of protecting oneself from
            overexposure. Using sunscreen, wearing protective clothing, and
            limiting time in direct sunlight, especially during peak hours, are
            effective strategies to safeguard both brain and overall health.
          </p>{" "}
        </>
      )}
    </div>
  );
}
