import SectionComponent from "@/components/SectionComponent";
import { awards } from "@/components/constants";

const CouplesChoice = () => {
  return (
    <SectionComponent
      header="Couples’ Choice Awards"
      text="Explore winners in your area."
      items={awards}
    />
  );
};

export default CouplesChoice;
