import Link from "./Link";

const PlanningTools = ({ mouseOver }) => {
  return (
    <div className="lg:mr-6" onMouseOver={mouseOver}>
      <Link
        route="/planning"
        label="planning tools"
        _class="uppercase text-sm font-bold hover:text-red-500"
      />
    </div>
  );
};

export default PlanningTools;
