import Card from "./Card";
import Link from "./Links/Link";

const RealComponent = ({ image, label, text, route }) => {
  return (
    <Card display="mr-3">
      <div className="lg:w-[290px] w-[300px]">
        <div
          className="h-[40vh]"
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="p-3 mt-1">
          <Link
            route={route}
            label={label}
            _class="font-bold hover:text-red-800"
          />
          <p className="text-sm mt-1" style={{ color: "rgba(0, 0, 0, .4)" }}>
            {text}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default RealComponent;
