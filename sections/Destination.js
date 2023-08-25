import ArrowButton from "@/components/ArrowButton";
import DestinationComponent from "@/components/Destination";
import Section from "@/components/Section";
import { destinations } from "@/components/constants";

const Destination = () => {
  return (
    <Section
      header="Plan your destination wedding"
      text="No matter where in the world you want to get married, WeddingWire directory of international wedding professionals can help you celebrate."
    >
      <div className="flex">
        {destinations.map((destination) => (
          <DestinationComponent
            image={destination.image}
            countryName={destination.name}
            key={destination.name}
          />
        ))}
      </div>
      <ArrowButton label="See all destinations" route="#66" />
    </Section>
  );
};

export default Destination;
