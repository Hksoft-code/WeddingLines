import Image from "next/image";
import EnjoyCard from "./EnjoyCard";
import gift from "@/public/gift.jpg";
import buld from "@/public/buld.png";
import calender from "@/public/calender.png";
import Section from "./Section";

const EnjoyPlanningComponent = () => {
  return (
    <Section
      header="Enjoy planning your wedding"
      text="Start planning your wedding with us, it's free!"
    >
      <div className="flex md:flex-col flex-row overflow-x-scroll enjoy-content">
        <div className="flex mt-6">
          <span className="md:w-auto w-[360px]">
            <EnjoyCard
              header="Your free wedding website"
              text="Give your guests all the details - and tell your love story - with a 100% customisable website."
              label="Personalise your free website"
              linkRoute="#route3"
              showBackgroundImage={false}
              icon={<Image src={gift} height={100} width={100} alt="" />}
            />
          </span>
          <span className="md:w-auto w-[360px]">
            <EnjoyCard
              header="Infinite inspiration"
              text="The latest trends and ideas... all the inspiration you need for your wedding"
              label="Get inspired here"
              linkRoute="#route4"
              showBackgroundImage={false}
              icon={<Image src={buld} height={50} width={50} alt="" />}
            />
          </span>
          <span className="md:w-auto w-[360px]">
            <EnjoyCard
              header="Planning tools"
              text="All under control: Checklist, Budget Planner, Guest List and much more!"
              label="Discover our tools"
              linkRoute="#route5"
              showBackgroundImage={false}
              icon={<Image src={calender} height={50} width={50} alt="" />}
            />
          </span>
        </div>
        <div className="flex md:mt-auto mt-6">
          <span className="md:w-auto w-[360px]">
            <EnjoyCard
              header="Wedding venues"
              text="Photos, reviews, and so much more... get in touch from here!"
              label="Explore venues"
              linkRoute="#route1"
              showBackgroundImage={true}
            />
          </span>
          <span className="md:w-auto w-[360px]">
            <EnjoyCard
              header="Vendors"
              text="Find the best wedding vendors near you in every category."
              label="Start your search"
              linkRoute="#route2"
              showBackgroundImage={true}
            />
          </span>
        </div>
      </div>
    </Section>
  );
};

export default EnjoyPlanningComponent;
