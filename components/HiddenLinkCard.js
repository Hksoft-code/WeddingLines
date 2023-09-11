import Image from "next/image";
import Card from "./Card";

const HiddenLinkCard = ({ head, text, image }) => {
  return (
    <Card>
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-1 p-2">
        <div className="col-span-2">
          <h1 className="font-bold mb-4">{head}</h1>
          <p className="text-sm">{text}</p>
        </div>
        <div className="flex justify-items-end items-end">
          <Image
            src={image}
            alt=""
            height={110}
            width={110}
            className="rounded-full"
          />
        </div>
      </div>
    </Card>
  );
};

export default HiddenLinkCard;
