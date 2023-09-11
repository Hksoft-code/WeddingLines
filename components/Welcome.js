"use client";

import React from "react";
import Input from "./Input";
import { GoSearch } from "react-icons/go";

const Welcome = () => {
  const [place, setPlace] = React.useState("");

  return (
    <div className="w-full md:p-10 pt-7 pr-3 pl-3 pb-7 h-[400px] homepage flex flex-col justify-center items-center mb-7">
      <h1 className="font-semibold text-4xl text-white shadow-text mb-7">
        The Wedding Line
      </h1>
      <p className="flex w-full justify-center items-center">
        <Input
          type="text"
          value={place}
          placeholder="Search for venues, hotels, party places etc or regions e.g Nicobar, Chamba"
          handleChange={(event) => setPlace(event.target.value)}
          _class="md:w-3/4 w-full md:p-4 p-3 outline-none rounded-lg"
        />
        <GoSearch size={30} className="-translate-x-11 cursor-pointer" />
      </p>
    </div>
  );
};

export default Welcome;
