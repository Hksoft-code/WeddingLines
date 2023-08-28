"use client";

import Link from "./Links/Link";
import { AiOutlineShop } from "react-icons/ai";
import weddingWlogo from "@/public/weddingline.jpeg";
import Image from "next/image";
import PlanningTools from "./Links/PlanningTools";
import WeddingVenues from "./Links/WeddingVenues";
import WeddingVendors from "./Links/WeddingVendors";
import Brides from "./Links/Brides";
import Grooms from "./Links/Grooms";
import Blogs from "./Links/Blogs";
import PlanningHiddenLinks from "@/hiddenlinks/PlanningHiddenLinks";
import WeddingvenHiddenlinks from "@/hiddenlinks/WeddingvenHiddenlinks";
import WeddingvendHidenLinks from "@/hiddenlinks/WeddingvendHidenLinks";
import BridesHiddenLinks from "@/hiddenlinks/BridesHiddenLinks";
import GroomHiddenLinks from "@/hiddenlinks/GroomHiddenLinks";
import BlogHiddenLinks from "@/hiddenlinks/BlogHiddenLinks";
import React from "react";

const NavigationBar = () => {
  const [planning, setPlanning] = React.useState(false);
  const [venue, setVenues] = React.useState(false);
  const [vendors, setVendors] = React.useState(false);
  const [bride, setBrides] = React.useState(false);
  const [groom, setGrooms] = React.useState(false);
  const [blog, setBlogs] = React.useState(false);

  return (
    <div>
      <div
        className="pr-8 pl-8 font-bold pb-3 border border-t-8 border-red-600"
        style={{ borderBottom: "1px solid rgba(0, 0, 0, .2)" }}
      >
        <div className="lg:flex m-4 lg:justify-end">
          <span className="mr-1" style={{ marginTop: 2 }}>
            <AiOutlineShop />
          </span>
          <Link
            route="#route1"
            label="are you a vendor?"
            _class="uppercase text-sm"
          />
        </div>
        <div className="lg:flex lg:justify-between lg:mr-4 mb-4">
          <div className="flex">
            <a href="/">
              <Image
                src={weddingWlogo}
                width={100}
                height={100}
                alt=""
                className="rounded-full -mt-1"
              />
            </a>
            <p className="uppercase text-2xl lg:mt-1 ml-1 text-red-500">
              wedding
              <span className="font-normal">
                line.
                <span className="lowercase">in</span>
              </span>
            </p>
            <div className="ml-7 mt-2 flex w-full">
              <PlanningTools mouseOver={() => setPlanning(true)} />
              <WeddingVenues mouseOver={() => setVenues(true)} />
              <WeddingVendors mouseOver={() => setVendors(true)} />
              <Brides mouseOver={() => setBrides(true)} />
              <Grooms mouseOver={() => setGrooms(true)} />
              <Blogs mouseOver={() => setBlogs(true)} />
            </div>
          </div>
          <div className="mt-2">
            <Link
              route="#login"
              label="login"
              _class="uppercase text-sm text-red-500 hover:text-red-900 lg:mr-3"
            />
            <Link
              route="#freesignup"
              label="free sign up"
              _class="uppercase text-sm text-red-500 hover:text-red-900"
            />
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#fff",
          width: "100%",
          margin: 0,
        }}
      >
        <PlanningHiddenLinks
          planning={planning}
          mouseLeave={() => setPlanning(false)}
        />
        <WeddingvenHiddenlinks
          venues={venue}
          mouseLeave={() => setVenues(false)}
        />
        <WeddingvendHidenLinks
          vendors={vendors}
          mouseLeave={() => setVendors(false)}
        />
        <BridesHiddenLinks brides={bride} mouseLeave={() => setBrides(false)} />
        <GroomHiddenLinks grooms={groom} mouseLeave={() => setGrooms(false)} />
        <BlogHiddenLinks blogs={blog} mouseLeave={() => setBlogs(false)} />
      </div>
    </div>
  );
};

export default NavigationBar;
