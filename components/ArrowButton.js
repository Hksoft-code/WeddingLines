import Link from "./Links/Link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const ArrowButton = ({ label, route }) => {
  return (
    <button
      type="button"
      className="p-3 flex m-4 rounded-md hover:border-black mx-auto"
      style={{ border: "1px solid rgba(0, 0, 0, .2)" }}
    >
      <Link _class="text-semibold" label={label} route={route} />
      <span className="ml-3 mt-1">
        <HiOutlineArrowNarrowRight />
      </span>
    </button>
  );
};

export default ArrowButton;
