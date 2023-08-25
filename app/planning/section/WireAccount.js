import { BsFillCalculatorFill, BsPeople } from "react-icons/bs";
import WireCard from "../components/WireCard";

const WireAccount = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-2xl font-bold">
        Start planning with your free WeddingWire account
      </h1>
      <p className="text-sm mt-4 mb-8">
        A great starting point is to create your wedding website and then build
        your guest list.
      </p>
      <div className="w-1/2 flex justify-between mb-7">
        <WireCard
          header="Budget Planner"
          icon={<BsFillCalculatorFill size={40} />}
          label="revise my budget"
          route="/revise"
          text="Let WeddingWire do the math for you to keep your spending within budget."
        />
        <WireCard
          header="Guest List"
          icon={<BsPeople size={40} />}
          label="add your guests"
          route="/addguests"
          text="Easily create your Guest List and manage RSVPs for your wedding."
        />
      </div>
    </div>
  );
};

export default WireAccount;
