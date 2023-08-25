import Card from "@/components/Card";
import Link from "@/components/Links/Link";
import Image from "next/image";

const SectionComponent = ({
  header,
  text1,
  head1,
  text2,
  head2,
  text3,
  head3,
  text4,
  image,
  route,
  buttonLabel,
  route2,
  route3,
}) => {
  return (
    <div className="m-5">
      <Card>
        <div className="flex p-5 m-3">
          <div className="p-4 mr-4 w-3/4">
            <h2 className="mt-3 text-2xl font-bold">{header}</h2>
            <p className="mt-4 mb-3">{text1}</p>
            <Link
              _class="font-bold text-sm text-red-500 hover:text-red-800"
              label="Discover more"
              route={route}
            />
            <p className="mb-2 font-semibold text-sm mt-4">{head1}</p>
            <p>{text2}</p>
            <p className="mt-4 mb-2 font-semibold text-sm">{head2}</p>
            <p>{text3}</p>
            <p className="mt-4 mb-2 font-semibold text-sm">{head3}</p>
            <p>{text4}</p>
            <button
              type="button"
              className="text-white p-4 font-semibold bg-red-500 rounded-lg mt-9"
            >
              <Link route={route3} label={buttonLabel} />
            </button>
          </div>
          <div className="p-4 rounded-lg">
            <a href={route2}>
              <Image
                src={image}
                height="20vh"
                width={400}
                alt=""
                style={{ border: "1px solid rgba(0, 0, 0, .3)" }}
                className="rounded-lg"
              />
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SectionComponent;
