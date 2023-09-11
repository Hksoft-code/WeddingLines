import Link from "@/components/Links/Link";
import HiddenLinks from "./HiddenLinks";
import WeddingVendComponent from "@/components/WeddingVendComponent";
import Card from "@/components/Card";
import { MdArrowBackIos } from "react-icons/md";

const BlogHiddenLinks = ({ blogs, mouseLeave, showIcon, handleClick }) => {
  return (
    <>
      {blogs ? (
        <HiddenLinks>
          <div
            style={{ padding: 30, marginBottom: 20 }}
            onMouseLeave={mouseLeave}
          >
            <span className={`${showIcon ? "block" : "hidden"} mb-1`}>
              <MdArrowBackIos size={20} onClick={handleClick} />
            </span>
            <Link
              label="Wedding Inspiration and ideas"
              route="#weddinginspiration"
              _class="hover:text-red-800 font-bold"
            />
            <div
              style={
                window.innerWidth >= 1024
                  ? {
                      marginTop: 30,
                      display: "flex",
                      justifyContent: "space-between",
                    }
                  : {
                      marginTop: 30,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }
              }
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <WeddingVendComponent
                  labelOne="Before the wedding"
                  labelTwo="The wedding ceremony"
                  labelThree="The wedding Banquet"
                  labelFour="The services for your wedding"
                  labelFive="Wedding fashion"
                  routeOne="#Beforethewedding"
                  routeTwo="#Theweddingceremony"
                  routeThree="#TheweddingBanquet"
                  routeFour="#Theservicesforyourwedding"
                  routeFive="#Weddingfashion"
                />
                <span style={{ marginLeft: 100 }}>
                  <WeddingVendComponent
                    labelOne="Health and beauty"
                    labelTwo="Honey moon"
                    labelThree="After the wedding"
                    labelFour="The wedding receiption"
                    routeOne="#Healthandbeauty"
                    routeTwo="#Honeymoon"
                    routeThree="#Afterthewedding"
                    routeFour="#Theweddingreceiption"
                  />
                </span>
              </div>
              <div
                className={`${window.innerWidth >= 1024 ? "w-1/4" : "w-full"}`}
              >
                <Card>
                  <p className="font-bold mb-4">Real weddings</p>
                  <p style={{ marginBottom: 20 }}>
                    Find the wedding Inspiration that fits your style with
                    photos from real couples
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </HiddenLinks>
      ) : null}
    </>
  );
};

export default BlogHiddenLinks;
