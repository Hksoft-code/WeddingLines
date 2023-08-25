import Link from "./Link";

const WeddingVendors = ({ mouseOver }) => {
  return (
    <div className="lg:mr-6" onMouseOver={mouseOver}>
      <Link
        label="wedding vendors"
        route="/#weddingvendors"
        _class="uppercase text-sm font-bold hover:text-red-500"
      />
    </div>
  );
};

export default WeddingVendors;
