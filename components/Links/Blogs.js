import Link from "./Link";

const Blogs = ({ mouseOver }) => {
  return (
    <div className="lg:mr-6" onMouseOver={mouseOver}>
      <Link
        label="blogs"
        route="/#blogs"
        _class="uppercase text-sm font-bold hover:text-red-500"
      />
    </div>
  );
};

export default Blogs;
