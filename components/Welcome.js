"use client";

import React from "react";
import Input from "./Input";

const Welcome = () => {
  const [state, setState] = React.useState({ venues: "", places: "" });
  const handleChange = (event) =>
    setState({ ...state, [event.target.name]: event.target.value });
  return (
    <div className="w-full flex border-b md:h-[400px] md:flex-row flex-col-reverse">
      <div className="md:w-1/2 md:p-7 my-auto flex flex-col flex-wrap p-6">
        <p className="font-bold md:text-4xl mb-7 text-3xl">
          Discover everything you need
          <br className="max-md:hidden" /> to plan your big day
        </p>
        <p>
          Search over 73,000 local professionals with reviews,
          <br />
          pricing, and more
        </p>
        <div className="mt-6 hidden sm:block">
          <Input
            type="text"
            placeholder="Search for Eg.(Wedding Venues, Hotels)"
            _class="p-2 md:w-1/3 w-1/4 outline-none border-2 rounded-md shadow-md mr-2"
            handleChange={handleChange}
            value={state.venues}
            name_="venues"
          />
          <Input
            type="text"
            placeholder="in Eg.(Delhi, Nicobar)"
            _class="p-2 md:w-1/3 w-1/4 outline-none border-2 rounded-md shadow-md mr-2"
            handleChange={handleChange}
            value={state.places}
            name_="places"
          />
          <Input
            type="button"
            _class="p-2 w-1/4 outline-none border-2 rounded-md shadow-md mr-2 bg-red-500 text-white cursor-pointer hover:bg-red-400"
            value="Find"
          />
        </div>
        <div className="sm:hidden">
          <Input
            type="button"
            value="Search vendors"
            _class="p-3 w-full text-white bg-red-500 font-semibold mt-5 mb-4 rounded-md cursor-pointer"
          />
        </div>
      </div>
      <div className="md:w-1/2 md:h-auto flex justify-end items-end homepage h-[40vh]"></div>
    </div>
  );
};

export default Welcome;
