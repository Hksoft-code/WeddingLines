import Link from "./Links/Link";

const WeddingVendComponent = ({
  labelOne,
  labelTwo,
  labelThree,
  routeOne,
  routeTwo,
  routeThree,
  labelFour,
  routeFour,
  labelFive,
  routeFive,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link
        label={labelOne}
        route={routeOne}
        style={{ marginTop: 15 }}
        _class="hover:text-red-800"
      />
      <Link
        label={labelTwo}
        route={routeTwo}
        style={{ marginTop: 15 }}
        _class="hover:text-red-800"
      />
      <Link
        label={labelThree}
        route={routeThree}
        style={{ marginTop: 15 }}
        _class="hover:text-red-800"
      />
      <Link
        label={labelFour}
        route={routeFour}
        style={{ marginTop: 15 }}
        _class="hover:text-red-800"
      />
      <Link
        label={labelFive}
        route={routeFive}
        style={{ marginTop: 15 }}
        _class="hover:text-red-800"
      />
    </div>
  );
};

export default WeddingVendComponent;
