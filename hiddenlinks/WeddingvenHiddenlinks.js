import Link from "@/components/Links/Link";
import HiddenLinks from "./HiddenLinks";
import HiddenLinkCard from "@/components/HiddenLinkCard";
import plane from "@/public/plane.jpg";
import { MdArrowBackIos } from "react-icons/md";

const WeddingvenHiddenlinks = ({
  venues,
  mouseLeave,
  showIcon,
  handleClick,
}) => {
  return (
    <>
      {venues ? (
        <HiddenLinks>
          <div style={{ padding: 35 }} onMouseLeave={mouseLeave}>
            <span className={`${showIcon ? "block" : "hidden"}`}>
              <MdArrowBackIos
                size={20}
                onClick={handleClick}
                className="mb-2"
              />
            </span>
            <div className="lg:flex lg:justify-between">
              <div className="flex flex-col">
                <Link
                  route="#Weddingvenues"
                  label="Wedding venues"
                  _class="font-bold hover:text-red-900"
                />
                <Link
                  label="Banquet halls"
                  route="#banquethalls"
                  _class="mt-4 hover:text-red-900"
                  style={{ marginTop: 12 }}
                />
                <Link
                  label="Marriage garden"
                  route="#marriagegarden"
                  _class="mt-4 hover:text-red-900"
                  style={{ marginTop: 12 }}
                />
                <Link
                  label="Wedding Resorts"
                  route="#wedding resorts"
                  _class="mt-4 hover:text-red-900"
                  style={{ marginTop: 12 }}
                />
              </div>
              <div className="flex flex-col">
                <Link
                  label="Promotions"
                  route="#promotions"
                  _class="font-bold hover:text-red-900"
                  style={{ marginTop: 12 }}
                />
                <Link
                  label="Hotels"
                  route="#hotels"
                  _class="hover:text-red-900"
                  style={{ marginTop: 12 }}
                />
                <Link
                  label="Kalyana Mandapas"
                  route="#kalyan"
                  _class="hover:text-red-900"
                  style={{ marginTop: 12 }}
                />
                <Link
                  label="Wedding Lawns Farmhouses"
                  route="#farmhouses"
                  _class="hover:text-red-900"
                  style={{ marginTop: 12 }}
                />
              </div>
              <div style={{ transform: "translateX(-10px)" }}>
                <HiddenLinkCard
                  head="Destination weddings"
                  text="Easily plan your international wedding"
                  image={plane}
                />
              </div>
            </div>
          </div>
        </HiddenLinks>
      ) : null}
    </>
  );
};

export default WeddingvenHiddenlinks;
