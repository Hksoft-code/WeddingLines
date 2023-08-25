import { GrFormNext } from "react-icons/gr";

const SideBarComponent = ({ component, showIcon = true, handleClick }) => {
  return (
    <div className="m-3 mb-7 flex justify-between">
      {component}
      <GrFormNext
        size={20}
        className={showIcon ? "block" : "hidden"}
        onClick={handleClick}
      />
    </div>
  );
};

export default SideBarComponent;
