"use client";

import React from "react";
import Input from "./Input";

const Welcome = () => {
  const [place, setPlace] = React.useState("");

  return (
    <div className="w-full md:p-10 pt-7 pr-3 pl-3 pb-7 h-[400px] homepage flex flex-col justify-center items-center mb-7">
      <h1 className="font-semibold text-4xl text-white shadow-text mb-7">
        The Wedding Line
      </h1>
      <Input
        type="text"
        value={place}
        placeholder="Search for venues, hotels, party places etc or regions e.g Nicobar, Chamba"
        handleChange={(event) => setPlace(event.target.value)}
        _class="md:w-3/4 w-full md:p-4 p-3 outline-none rounded-lg"
      />
      <button
        type="button"
        className="border border-white md:border-black rounded-lg md:p-4 p-3 md:w-1/4 w-1/2 text-white shadow-text outline-none mt-3 font-semibold md:hover:border-red-600 hover:border-black"
        style={{ boxShadow: "0 0 10px 0 rgba(0, 0, 0, .5)" }}
      >
        Search
      </button>
    </div>
  );
};

export default Welcome;
