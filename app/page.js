import EnjoyPlanningComponent from "@/components/EnjoyPlanningComponent";
import Welcome from "@/components/Welcome";
import Community from "@/sections/Community";
import CouplesChoice from "@/sections/CouplesChoice";
import Destination from "@/sections/Destination";
import RealWeddings from "@/sections/RealWeddings";
import WeddingIdeasAndTips from "@/sections/WeddingIdeasAndTips";
import WeddingVendors from "@/sections/WeddingVendors";
import WeddingWebsites from "@/sections/WeddingWebsite";

export default function Home() {
  return (
    <div>
      <Welcome />
      <EnjoyPlanningComponent />
      <CouplesChoice />
      <WeddingVendors />
      <RealWeddings />
      <WeddingIdeasAndTips />
      <Community />
      <WeddingWebsites />
      <Destination />
    </div>
  );
}
