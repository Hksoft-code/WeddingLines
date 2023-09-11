import HiddenLinks from "./HiddenLinks";
import { BsCardChecklist } from "react-icons/bs";
import { GrVend } from "react-icons/gr";
import HideContentDiv from "@/components/HideContentDiv";
import { CgWebsite } from "react-icons/cg";
import { BsPeople } from "react-icons/bs";
import { BsDatabase } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";
import HiddenLinkCard from "@/components/HiddenLinkCard";
import weddingLogo from "@/public/weddingline.jpeg";
import photoIcon from "@/public/photoicon.png";
import { MdArrowBackIos } from "react-icons/md";

const PlanningHiddenLinks = ({
  planning,
  mouseLeave,
  showIcon,
  handleClick,
}) => {
  return (
    <>
      {planning ? (
        <HiddenLinks>
          <div
            className="m-0"
            style={{ paddingBottom: -100, paddingTop: 10 }}
            onMouseLeave={mouseLeave}
          >
            <p className="m-4 text-lg font-bold mb-9 flex justify-between">
              Plan your wedding
              <span className={`${showIcon ? "block" : "hidden"}`}>
                <MdArrowBackIos size={20} onClick={handleClick} />
              </span>
            </p>
            <div className="m-4 mt-6 flex flex-wrap justify-between w-full">
              <HideContentDiv
                iconOne={<BsCardChecklist className="m-4" />}
                labelOne="Checklist"
                routeOne="#checklist"
                iconTwo={<GrVend className="m-4" />}
                labelTwo="Wedding Vendors"
                routeTwo="#weddingvendors"
              />
              <HideContentDiv
                iconOne={<BsPeople className="m-4" />}
                labelOne="Guests"
                routeOne="#Guests"
                iconTwo={<CgWebsite className="m-4" />}
                labelTwo="Wedding Website"
                routeTwo="#weddingWebsite"
              />
              <HideContentDiv
                iconOne={<BsDatabase className="m-4" />}
                labelOne="Budget"
                routeOne="#Budget"
                iconTwo={<TbWorldWww className="m-4" />}
                labelTwo="Hashtag Generator"
                routeTwo="#hashtaggenerator"
              />
              <div
                className={`m-4 ${
                  window.innerWidth >= 1024 ? "w-1/4" : "w-full"
                }`}
                style={{ transform: "translateY(-30px)" }}
              >
                <HiddenLinkCard
                  head="Get the WeddingLine app"
                  image={weddingLogo}
                  text="Plan your wedding on the go with the WeddingLine app"
                />
                <HiddenLinkCard
                  head="Weddingshoots"
                  image={photoIcon}
                  text="Easily collect all your guests' event photos in one album"
                />
              </div>
            </div>
          </div>
        </HiddenLinks>
      ) : null}
    </>
  );
};

export default PlanningHiddenLinks;
