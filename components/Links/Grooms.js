import Link from "./Link";

const Grooms = ({ mouseOver }) => {
  return (
    <div className="lg:mr-6" onMouseOver={mouseOver}>
      <Link
        label="grooms"
        route="/#grooms"
        _class="uppercase text-sm font-bold hover:text-red-500"
      />
    </div>
  );
};

export default Grooms;
