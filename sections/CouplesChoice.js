import SectionComponent from "@/components/SectionComponent";
import { awards } from "@/components/constants";

const CouplesChoice = () => {
  return (
    <div className="mr-4">
      <SectionComponent
        header="Couples’ Choice Awards"
        text="Explore winners in your area."
        items={awards}
      />
    </div>
  );
};

export default CouplesChoice;
