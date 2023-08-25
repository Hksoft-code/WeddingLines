import Link from "./Links/Link";

const ModalCountries = ({ countries, header }) => {
  return (
    <div className="mt-6">
      <p className="font-bold">{header}</p>
      {countries.map((country) => (
        <p className="mt-4" key={country.label}>
          <Link
            label={country.label}
            route={country.route}
            _class="hover:text-red-800 hover:font-semibold"
          />
        </p>
      ))}
    </div>
  );
};

export default ModalCountries;
