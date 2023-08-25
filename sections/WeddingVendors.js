import Link from "@/components/Links/Link";
import SectionComponent from "@/components/SectionComponent";
import { navButtons, vendors } from "@/components/constants";

const WeddingVendors = () => {
  return (
    <>
      <SectionComponent
        header="Featured wedding vendors"
        showPeopleIcon={true}
        items={vendors}
      />
      <div className="p-1" style={{ marginLeft: 40 }}>
        {navButtons.map((button, index) => (
          <button
            type="button"
            className="mr-3 p-3 rounded-md border border-green-200 hover:shadow-md mt-2 font-semibold"
            key={index}
          >
            <Link label={button.label} route={button.route} />
          </button>
        ))}
      </div>
    </>
  );
};

export default WeddingVendors;
