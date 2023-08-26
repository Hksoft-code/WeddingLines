import ArrowButton from "@/components/ArrowButton";
import CommunityComponent from "@/components/CommunityComponent";
import Section from "@/components/Section";
import { questions } from "@/components/constants";

const Community = () => {
  return (
    <Section
      header="Community"
      text="Ask questions and get answers with the help of other people planning weddings."
      style={{ marginTop: "-1vh" }}
    >
      <div className="flex overflow-x-scroll enjoy-content">
        {questions.map((question, index) => (
          <CommunityComponent
            date={question.date}
            header={question.header}
            image={question.image}
            route={question.route}
            text={question.text}
            user={question.user}
            key={index}
          />
        ))}
      </div>
      <ArrowButton label={"View all discussions"} route={"#42"} />
    </Section>
  );
};

export default Community;
