"use client";

import React from "react";
import Input from "./Input";

const Welcome = () => {
  const [place, setPlace] = React.useState("");

  return (
    <div className="w-full md:p-10 pt-7 pr-3 pl-3 pb-7 md:h-[65vh] h-[50vh] homepage flex flex-col justify-center items-center">
      <h1 className="font-semibold text-4xl md:text-red-700 mb-5 text-center text-black">
        The Wedding Line
      </h1>
      <Input
        type="text"
        value={place}
        placeholder="Search for venues, hotels, party places etc or regions e.g Nicobar, Chamba"
        handleChange={(event) => setPlace(event.target.value)}
        _class="md:w-3/4 w-full md:p-4 p-3 outline-none rounded-lg"
      />
    </div>
  );
};

export default Welcome;
