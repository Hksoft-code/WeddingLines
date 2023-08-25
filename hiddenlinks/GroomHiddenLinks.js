import Link from "@/components/Links/Link";
import HiddenLinks from "./HiddenLinks";
import { MdArrowBackIos } from "react-icons/md";

const GroomHiddenLinks = ({ grooms, mouseLeave, showIcon, handleClick }) => {
  return (
    <>
      {grooms ? (
        <HiddenLinks>
          <div
            style={{ padding: 30, display: "flex", flexDirection: "column" }}
            onMouseLeave={mouseLeave}
          >
            <span className={`${showIcon ? "block" : "hidden"} mb-1`}>
              <MdArrowBackIos size={20} onClick={handleClick} />
            </span>
            <Link
              label="Couples"
              route="#couples"
              _class="hover:text-red-800 font-bold"
            />
            <Link
              label="Sherwan"
              route="#couples"
              _class="hover:text-red-800"
              style={{ marginTop: 15, marginBottom: 15 }}
            />
            <Link
              label="Promotions"
              route="#Promotions"
              _class="hover:text-red-800 font-bold"
            />
          </div>
        </HiddenLinks>
      ) : null}
    </>
  );
};

export default GroomHiddenLinks;
