"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import weddingWlogo from "@/public/weddingline.jpeg";
import Sidebar from "./Sidebar";
import { MdClose } from "react-icons/md";

const SmallDeviceNavBar = () => {
  const [changeIcon, setChangeIcon] = React.useState(false);
  const handleChange = () => setChangeIcon((prevState) => !prevState);
  return (
    <>
      <nav
        className="flex justify-between p-3 w-full"
        style={{ borderBottom: "1px solid rgba(0, 0, 0, .4)" }}
      >
        {changeIcon ? (
          <MdClose size={30} className="mt-2" onClick={handleChange} />
        ) : (
          <AiOutlineMenu size={30} className="mt-2" onClick={handleChange} />
        )}
        <span className="flex">
          <a href="/">
            <Image
              src={weddingWlogo}
              width={80}
              height={80}
              alt=""
              className="rounded-full -mt-1"
            />
          </a>
          <p className="uppercase text-base mt-3 font-bold ml-1 text-red-500">
            wedding line.
            <span className="lowercase font-normal">in</span>
          </p>
        </span>
        <a href="#login">
          <AiOutlineUser size={30} className="mt-2" />
        </a>
      </nav>
      <span className="absolute -mt-1">
        <Sidebar showSideBar={changeIcon} />
      </span>
    </>
  );
};

export default SmallDeviceNavBar;
