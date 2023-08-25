"use client";

import React from "react";
import Input from "@/components/Input";
import Link from "@/components/Links/Link";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { LiaFacebookF } from "react-icons/lia";

const Welcome = () => {
  const [state, setState] = React.useState({ username: "", email: "" });
  const handleChange = (event) =>
    setState({ ...state, [event.target.name]: event.target.value });
  return (
    <div
      className="flex md:h-[450px]"
      style={{ borderBottom: "1px solid rgba(0, 0, 0, .2)" }}
    >
      <div className="pl-9 pt-9 flex flex-col flex-wrap">
        <p className="text-4xl font-bold">Wedding Planning Tools</p>
        <p className="text-sm mt-4 mb-4">
          Plan your wedding with WeddingWire's free Wedding Planning Tools
          <br />
          that let you manage your tasks, budget, website, vendors and more!
        </p>
        <p className="uppercase mb-2 text-sm">get started:</p>
        <div className="mb-12">
          <Input
            type="text"
            _class="border rounded-md p-2 mr-2 outline-none w-1/3"
            placeholder="Name and Surname"
            value={state.username}
            name_="username"
            handleChange={handleChange}
          />
          <Input
            type="email"
            _class="border rounded-md p-2 mr-2 outline-none w-1/3"
            placeholder="Email"
            value={state.email}
            name_="email"
            handleChange={handleChange}
          />
          <Input
            type="button"
            value="Start planning"
            _class="rounded-md font-bold w-1/4 p-3 text-sm outline-none bg-red-500 text-white hover:bg-red-300"
          />
        </div>
        <div>
          <span className="mt-5">
            <p className="text-sm flex justify-between mb-3">
              You can also sign up with:
            </p>
            <span className="flex flex-wrap mt-2 mb-2">
              <FcGoogle
                href="#apple"
                size={30}
                className="rounded-full bold border mr-2"
              />
              <LiaFacebookF
                href="#facebook"
                size={30}
                className="rounded-full bold border mr-2"
              />
              <AiFillApple
                href="#apple"
                size={30}
                className="rounded-full bold border mr-2"
              />
            </span>
          </span>
          <p className="text-sm mt-5">
            Already have an account?{" "}
            <Link label="Login" _class="font-bold text-red-400" />
          </p>
        </div>
      </div>
      <div className="md:w-1/2 h-auto flex justify-end items-end planning -pr-4"></div>
    </div>
  );
};

export default Welcome;
