import React from "react";
import Card from "./Card";
import Link from "./Links/Link";

const EnjoyCard = ({
  header,
  text,
  linkRoute,
  label,
  showBackgroundImage,
  icon,
}) => {
  return (
    <Card setWidth="w-full" display="md:flex md:flex-wrap">
      <div className={`${showBackgroundImage ? "w-1/2" : "w-3/4"} p-3`}>
        <p className="font-bold text-xl">{header}</p>
        <p className="mt-2 mb-2">{text}</p>
        <Link label={label} route={linkRoute} _class="text-red-400 font-bold" />
      </div>
      {showBackgroundImage ? (
        <div className="w-1/2 venue"></div>
      ) : (
        <div className="w-1/4">{icon}</div>
      )}
    </Card>
  );
};

export default EnjoyCard;