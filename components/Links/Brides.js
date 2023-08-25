import Link from "./Link";

const Brides = ({ mouseOver }) => {
  return (
    <div className="lg:mr-6" onMouseOver={mouseOver}>
      <Link
        label="bridess"
        route="/#brides"
        _class="uppercase text-sm font-bold hover:text-red-500"
      />
    </div>
  );
};

export default Brides;
