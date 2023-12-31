import CarouselCard from "./CarouselCard";
import Section from "./Section";

const SectionComponent = ({ header, text, items, showPeopleIcon }) => {
  return (
    <Section header={header} text={text}>
      <div className="flex overflow-x-scroll enjoy-content">
        {items.map((item, index) => (
          <CarouselCard
            key={index}
            image={item.image}
            label={item.label}
            location={item.location}
            money={item.money}
            showPeopleIcon={showPeopleIcon}
            route={item.route}
            people={item.people}
          />
        ))}
      </div>
    </Section>
  );
};

export default SectionComponent;
