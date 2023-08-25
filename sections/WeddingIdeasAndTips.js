import ArrowButton from "@/components/ArrowButton";
import RealComponent from "@/components/RealComponent";
import Section from "@/components/Section";
import WeddingIdeasComponent1 from "@/components/WeddingIdeasComponent1";
import { weddingIdeas, weddingTips } from "@/components/constants";

const WeddingIdeasAndTips = () => {
  return (
    <Section
      header="Wedding ideas and tips"
      text="Get inspired with the latest trends and advice from our wedding experts"
      style={{ marginTop: "-5vh" }}
    >
      {/* <div className="flex justify-between">
        {weddingIdeas.map((weddingIdea, index) => (
          <WeddingIdeasComponent1
            image={weddingIdea.image}
            label={weddingIdea.label}
            route={weddingIdea.route}
            key={index}
          />
        ))}
      </div> */}
      <div className="flex w-full flex-wrap mt-2">
        {weddingTips.map((weddingTip, index) => (
          <RealComponent
            image={weddingTip.image}
            label={weddingTip.label}
            route={weddingTip.route}
            text={weddingTip.text}
            key={index}
          />
        ))}
      </div>
      <ArrowButton label="All articles" route="#41" />
    </Section>
  );
};

export default WeddingIdeasAndTips;
