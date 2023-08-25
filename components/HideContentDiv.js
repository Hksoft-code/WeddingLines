import HiddenContent from "./HiddenContent";

const HideContentDiv = ({
  iconOne,
  iconTwo,
  labelOne,
  labelTwo,
  routeOne,
  routeTwo,
}) => {
  return (
    <div>
      <HiddenContent icon={iconOne} label={labelOne} route={routeOne} />
      <HiddenContent icon={iconTwo} label={labelTwo} route={routeTwo} />
    </div>
  );
};

export default HideContentDiv;
