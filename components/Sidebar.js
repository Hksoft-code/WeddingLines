"use client";

import React from "react";
import PlanningTools from "./Links/PlanningTools";
import WeddingVenues from "./Links/WeddingVenues";
import WeddingVendors from "./Links/WeddingVendors";
import Brides from "./Links/Brides";
import Grooms from "./Links/Grooms";
import Blogs from "./Links/Blogs";
import SideBarComponent from "./SideBarComponent";
import Link from "./Links/Link";
import PlanningHiddenLinks from "@/hiddenlinks/PlanningHiddenLinks";
import WeddingvenHiddenlinks from "@/hiddenlinks/WeddingvenHiddenlinks";
import WeddingvendHidenLinks from "@/hiddenlinks/WeddingvendHidenLinks";
import BridesHiddenLinks from "@/hiddenlinks/BridesHiddenLinks";
import GroomHiddenLinks from "@/hiddenlinks/GroomHiddenLinks";
import BlogHiddenLinks from "@/hiddenlinks/BlogHiddenLinks";

const Sidebar = ({ showSideBar }) => {
  const [showHiddenLinks, setShowHiddenLinks] = React.useState(false);
  const [planning, setPlanning] = React.useState(false);
  const [venue, setVenues] = React.useState(false);
  const [vendors, setVendors] = React.useState(false);
  const [bride, setBrides] = React.useState(false);
  const [groom, setGrooms] = React.useState(false);
  const [blog, setBlogs] = React.useState(false);

  const handleClick = (setLinks) => {
    setShowHiddenLinks(false);
    setLinks(false);
  };

  return (
    <div
      className={`w-[300px] sm:w-[360px] min-h-screen ${
        showSideBar ? "block" : "hidden"
      }`}
      style={{
        backgroundColor: "#fff",
        borderRight: "1px solid rgba(0, 0, 0, .2)",
        borderBottom: "1px solid rgba(0, 0, 0, .2)",
        borderBottomRightRadius: 10,
        marginTop: -8,
      }}
    >
      {!showHiddenLinks ? (
        <>
          <div style={{ borderBottom: "1px solid rgba(0, 0, 0, .2)" }}>
            <SideBarComponent
              component={<PlanningTools />}
              handleClick={() => {
                setShowHiddenLinks(true);
                setPlanning(true);
              }}
            />
            <SideBarComponent
              component={<WeddingVenues />}
              handleClick={() => {
                setShowHiddenLinks(true);
                setVenues(true);
              }}
            />
            <SideBarComponent
              component={<WeddingVendors />}
              handleClick={() => {
                setShowHiddenLinks(true);
                setVendors(true);
              }}
            />
            <SideBarComponent
              component={<Brides />}
              handleClick={() => {
                setShowHiddenLinks(true);
                setBrides(true);
              }}
            />
            <SideBarComponent
              component={<Grooms />}
              handleClick={() => {
                setShowHiddenLinks(true);
                setGrooms(true);
              }}
            />
            <SideBarComponent
              component={<Blogs />}
              handleClick={() => {
                setShowHiddenLinks(true);
                setBlogs(true);
              }}
            />
            <SideBarComponent
              showIcon={false}
              component={
                <Link
                  label="WedShoots"
                  route="/#shoots"
                  _class="hover:text-red-800"
                />
              }
            />
          </div>
          <div>
            <SideBarComponent
              showIcon={false}
              component={
                <Link
                  label="Vendor Login"
                  route="/#login"
                  _class="hover:text-red-800"
                />
              }
            />
          </div>
        </>
      ) : (
        <div>
          <span style={{ marginTop: 10 }}>
            <PlanningHiddenLinks
              planning={planning}
              showIcon={true}
              handleClick={() => handleClick(setPlanning)}
            />
          </span>
          <WeddingvenHiddenlinks
            venues={venue}
            showIcon={true}
            handleClick={() => handleClick(setVenues)}
          />
          <WeddingvendHidenLinks
            showIcon={true}
            vendors={vendors}
            handleClick={() => handleClick(setVendors)}
          />
          <BridesHiddenLinks
            showIcon={true}
            brides={bride}
            handleClick={() => handleClick(setBrides)}
          />
          <GroomHiddenLinks
            showIcon={true}
            grooms={groom}
            handleClick={() => handleClick(setGrooms)}
          />
          <BlogHiddenLinks
            showIcon={true}
            blogs={blog}
            handleClick={() => handleClick(setBlogs)}
          />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
