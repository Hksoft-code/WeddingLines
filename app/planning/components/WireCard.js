import Card from "@/components/Card";
import Link from "@/components/Links/Link";

const WireCard = ({ icon, header, text, label, route }) => {
  return (
    <Card>
      <div className="flex flex-wrap justify-center items-center p-3 flex-col mr-6">
        <span>{icon}</span>
        <h1 className="mt-3 mb-5 font-bold">{header}</h1>
        <p className="mb-3">{text}</p>
        <Link
          _class="uppercase text-red-400 font-semibold hover:text-red-800"
          label={label}
          route={route}
        />
      </div>
    </Card>
  );
};

export default WireCard;
