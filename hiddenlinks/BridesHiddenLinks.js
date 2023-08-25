import HiddenLinks from "./HiddenLinks";
import Link from "@/components/Links/Link";
import WeddingVendComponent from "@/components/WeddingVendComponent";
import { MdArrowBackIos } from "react-icons/md";

const BridesHiddenLinks = ({ brides, mouseLeave, showIcon, handleClick }) => {
  return (
    <>
      {brides ? (
        <HiddenLinks>
          <div style={{ padding: 35 }} onMouseLeave={mouseLeave}>
            <span className={`${showIcon ? "block" : "hidden"} mb-1`}>
              <MdArrowBackIos size={20} onClick={handleClick} />
            </span>
            <Link
              label="Brides"
              route="#artists"
              _class="hover:text-red-800 font-bold"
            />
            <div style={{ marginTop: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <WeddingVendComponent
                  labelOne="Mehndi Artists"
                  labelTwo="Bridal Makeup Artists"
                  labelThree="Makeup Saloon"
                  routeOne="#artists"
                  routeTwo="#MakeupInvitations"
                  routeThree="#Saloon"
                />
                <WeddingVendComponent
                  labelOne="Bridal Jewellery"
                  labelTwo="Bridal Lehenga"
                  labelThree="Trousseau Packing"
                  routeOne="#Jewellery"
                  routeTwo="#Lehenga"
                  routeThree="#Trousseau"
                />
                <Link
                  _class="hover:text-red-800 font-bold"
                  label="Promotions"
                  route="#promotions"
                />
              </div>
            </div>
          </div>
        </HiddenLinks>
      ) : null}
    </>
  );
};

export default BridesHiddenLinks;
