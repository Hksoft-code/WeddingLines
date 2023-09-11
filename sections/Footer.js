"use client";

import Link from "@/components/Links/Link";
import { contactLinks } from "@/components/constants";
import Image from "next/image";
import React from "react";
import weddingWlogo from "@/public/weddingline.jpeg";
import { IoLogoApple } from "react-icons/io";
import { BiLogoPlayStore } from "react-icons/bi";
import { BsFacebook, BsPinterest, BsTwitter } from "react-icons/bs";
import SocialButton from "@/components/SocialButton";
import { AiFillInstagram, AiOutlineCopyrightCircle } from "react-icons/ai";
import Modal from "@/components/modals/Modal";

const Footer = () => {
  const [modal, setModal] = React.useState(false);

  const showModal = () => setModal(true);

  const hideModel = () => setModal(false);
  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "rgba(0, 0, 0, .1)",
      }}
    >
      <div className="footer">
        <div>
          <p className="font-bold mb-4 text-md">Information</p>
          <div>
            {contactLinks.map((contactLink, index) => (
              <p key={index}>
                <Link
                  label={contactLink.label}
                  route={contactLink.route}
                  _class="mb-2 text-sm"
                  style={{ color: "rgba(0, 0, 0, .8)" }}
                />
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold mb-4 text-md lg:mt-auto mt-6">
            Get the Wedding Line app
          </p>
          <span className="flex flex-wrap mb-4">
            <Image
              src={weddingWlogo}
              width={70}
              height={70}
              alt=""
              style={{ borderRadius: "10px" }}
            />
            <p
              style={{ color: "rgba(0, 0, 0, .8)", margin: "10px" }}
              className="text-sm"
            >
              Plan your wedding on the go
              <br /> with the Wedding Line app
            </p>
          </span>
          <SocialButton icon={<BiLogoPlayStore size={50} />} />
          <SocialButton icon={<IoLogoApple size={50} />} />
        </div>
        <div>
          <p className="font-bold mb-4 text-md lg:mt-auto mt-6">Follow us on</p>
          <SocialButton icon={<BsFacebook size={30} />} />
          <SocialButton icon={<BsTwitter size={30} />} />
          <SocialButton icon={<BsPinterest size={30} />} />
          <SocialButton icon={<AiFillInstagram size={30} />} />
          <div className="mt-6 lg:text-center">
            <p className="font-semibold mb-2">
              Contact a wedding expert for free
            </p>
            <p className="text-sm mb-2">
              We'd love to assist you! 7 days
              <br /> a week from 9am to 8pm
            </p>
            <p className="text-red-500 font-bold">Call XX XXXXXXXXX</p>
          </div>
        </div>
        <div className="lg:mt-auto mt-6">
          <p className="font-bold mb-4 text-md">Choose a country</p>
          <button
            type="button"
            className="p-3 rounded-lg btn"
            style={{ border: "1px solid grey" }}
            onClick={showModal}
          >
            Choose country
          </button>
        </div>
      </div>
      <Modal modal={modal} hideModel={hideModel} />
      <div className="flex mt-4">
        <AiOutlineCopyrightCircle />{" "}
        <span
          className="text-sm ml-2"
          style={{ color: "rgba(0, 0, 0, .7)", transform: "translateY(-2px)" }}
        >
          {new Date().getFullYear()} Wedding Line
        </span>
      </div>
    </div>
  );
};

export default Footer;
