import ArrowButton from "@/components/ArrowButton";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { weddingWebsites } from "@/components/constants";
import Image from "next/image";

const WeddingWebsites = () => {
  return (
    <Section
      header="Create your wedding website"
      text="Quickly set up and share all of your details in one place"
      style={{ marginTop: "-1vh" }}
    >
      <div className="flex overflow-x-scroll enjoy-content">
        {weddingWebsites.map((weddingWebsite) => (
          <Card key={weddingWebsite}>
            <div className="w-[280px]">
              <Image src={weddingWebsite} alt="" width={300} height={350} />
            </div>
          </Card>
        ))}
      </div>
      <ArrowButton label="View more designs" route="#88" />
    </Section>
  );
};

export default WeddingWebsites;
