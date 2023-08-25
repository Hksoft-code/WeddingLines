import Link from "./Links/Link";

const HiddenContent = ({ icon, label, route }) => {
  return (
    <span className="flex">
      {icon}
      <span style={{ transform: "translate(0px, 12px)" }}>
        <Link label={label} route={route} _class="hover:text-red-900" />
      </span>
    </span>
  );
};

export default HiddenContent;
