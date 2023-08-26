import Image from "next/image";
import Card from "./Card";

const DestinationComponent = ({ image, countryName }) => {
  return (
    <Card display="mr-5 flex-col">
      <div className="flex flex-col w-[280px]">
        <Image
          src={image}
          alt=""
          width={250}
          height={300}
          className="rounded-md"
        />
        <p className="mt-3 font-semibold">{countryName}</p>
      </div>
    </Card>
  );
};

export default DestinationComponent;
