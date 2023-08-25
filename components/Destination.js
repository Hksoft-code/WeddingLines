import Image from "next/image";
import Card from "./Card";

const DestinationComponent = ({ image, countryName }) => {
  return (
    <Card display="flex mr-5 flex-col">
      <Image
        src={image}
        alt=""
        width={250}
        height={300}
        className="rounded-md"
      />
      <p className="mt-3 font-semibold">{countryName}</p>
    </Card>
  );
};

export default DestinationComponent;
