import Link from "./Links/Link";
import { FcRating } from "react-icons/fc";
import { BsTags, BsPeople } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";
import Card from "./Card";

const CarouselCard = ({
  image,
  label,
  location,
  money,
  route,
  people,
  showPeopleIcon,
}) => {
  return (
    <Card display="w-full mt-6 mr-3 hover:shadow-lg">
      <div className="md:w-auto w-[300px]">
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "30vh",
            display: "flex",
            flexWrap: "wrap",
          }}
          className="md:w-auto set-width"
        ></div>
        <div className="h-auto p-2">
          <Link
            label={label}
            route={route}
            _class="hover:text-red-800 font-bold text-base"
          />
          <p className="flex mt-3">
            <FcRating />
            <span className="font-bold text-sm ml-2">5.0 {location}</span>
          </p>
          <p className="flex mt-2 mb-2">
            <BsTags /> <span className="text-sm ml-2">1 promotion</span>{" "}
            <span className="text-yellow-600 text-sm"> -10%</span>
          </p>
          <p className="flex">
            <GrMoney /> <span className="text-sm ml-2 mr-2">From {money}</span>
            <span className={showPeopleIcon ? "block" : "hidden"}>
              <BsPeople />
            </span>{" "}
            <span className="text-sm ml-2">{people}</span>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default CarouselCard;
