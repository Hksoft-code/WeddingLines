import Link from "./Link";

const WeddingVenues = ({ mouseOver }) => {
  return (
    <div className="lg:mr-2" onMouseOver={mouseOver}>
      <Link
        label="wedding venues"
        route="/#weddingvenues"
        _class="uppercase text-sm font-bold hover:text-red-500"
      />
    </div>
  );
};

export default WeddingVenues;
