import ArrowButton from "@/components/ArrowButton";
import RealComponent from "@/components/RealComponent";
import Section from "@/components/Section";
import { realWeddings } from "@/components/constants";

const RealWeddings = () => {
  return (
    <div className="w-full">
      <Section
        header="Real Weddings"
        text="Browse by location to find wedding professionals in your area and view photos of their work"
      >
        <div className="flex w-full mt-2 overflow-x-scroll enjoy-content">
          {realWeddings.map((realWedding, index) => (
            <RealComponent
              image={realWedding.image}
              label={realWedding.label}
              route={realWedding.route}
              text={realWedding.text}
              key={index}
            />
          ))}
        </div>
        <ArrowButton label="View more weddings" route="#30" />
      </Section>
    </div>
  );
};

export default RealWeddings;
