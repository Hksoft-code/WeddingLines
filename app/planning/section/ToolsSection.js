import React from "react";
import SectionComponent from "../components/SectionComponent";
import checklist from "@/public/checklist.jpg";
import vendorManager from "@/public/vendorManager.jpeg";
import weddingWebsite from "@/public/weddingWebsite.jpg";

const ToolsSection = () => {
  return (
    <div className="mt-14">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-3">
          Wedding planning tools that make everything easier
        </h2>
        <p className="text-sm mb-10">
          Create your free WeddingWire account and begin planning
        </p>
      </div>
      <SectionComponent
        header="Checklist"
        head1="Customise your tasks"
        head2="Monitor your progress"
        head3="Sync with your budget"
        text1="Start organising your tasks with the most complete Wedding Checklist"
        text2="Create new tasks and modify or remove existing ones as needed to create your unique Checklist for your wedding."
        text3="Get a quick view of the tasks you have completed and see what the next tasks will be. Include deadlines and manage tasks as you go."
        text4="Your WeddingWire Budget synchronises with your Checklist so that you can monitor your tasks, expenses and deadlines in one place."
        buttonLabel="Go to Your Checklist"
        route="/route1"
        route2="/route3"
        route3="/route4"
        image={checklist}
      />
      <SectionComponent
        header="Vendor Manager"
        head1="Get in touch with vendors"
        head2="Don't forget anything"
        head3="Save the best vendors"
        text1="One place to find your favourite vendors and contact them anytime."
        text2="Easily message and locate your vendors straight from your WeddingWire account. Get in touch with them from anywhere."
        text3="Feel free to add comments, details and information about each vendor to refer to at a later date."
        text4="Compare and contrast reviews and pricing to choose the right vendors. Be sure to save your favourites."
        buttonLabel="Find Your Vendors"
        route="/route2"
        route2="/route4"
        route3="/route5"
        image={vendorManager}
      />
      <SectionComponent
        header="Your Wedding Website"
        head1="It'll only take a minute of your time"
        head2="Include all the important details"
        head3="Receive and manage RSVPs"
        text1="Set up your own unique wedding website to share with your guests."
        text2="Create your own wedding website and customise it by choosing a template, colours and include all your wedding details to keep guests informed."
        text3="Keep your guests informed about accommodation, transportation, and what to expect. Guests can also inform you on any dietary restrictions."
        text4="Guests can very easily confirm their attendance through your wedding website, which will sync automatically with your Guest List."
        buttonLabel="Go to Your Checklist"
        route="/route3"
        route2="/route5"
        route3="/route7"
        image={weddingWebsite}
      />
    </div>
  );
};

export default ToolsSection;
