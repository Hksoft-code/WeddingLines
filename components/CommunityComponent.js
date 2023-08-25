import Image from "next/image";
import Card from "./Card";
import Link from "./Links/Link";

const CommunityComponent = ({ header, text, image, user, date, route }) => {
  return (
    <div className="md:w-1/4 w-auto">
      <div className="md:w-auto w-[280px] h-[41vh]">
        <Card display="p-6 overflow-hidden">
          <Link
            label={header}
            route={route}
            _class="font-bold hover:text-red-800"
          />
          <p className="mt-2">{text}</p>
        </Card>
        <div className="flex flex-wrap mt-3 ml-2">
          <Image
            src={image}
            height={50}
            width={50}
            alt=""
            className="rounded-full"
          />
          <span className="ml-2">
            <h2 className="mb-1 font-semibold">{user}</h2>
            <p style={{ color: "rgba(0, 0, 0, .4)" }} className="text-sm">
              {date}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommunityComponent;
