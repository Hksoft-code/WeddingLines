import Link from "./Links/Link";

const WeddingIdeasComponent1 = ({ image, label, route }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="rounded-full"
      ></div>
      <Link _class="font-bold hover:text-red-800" label={label} route={route} />
    </>
  );
};

export default WeddingIdeasComponent1;
