const Section = ({ header, text, children, style }) => {
  return (
    <div className="lg:p-8 p-2 mt-2 w-full" style={style}>
      <h1 className="font-bold text-2xl mb-1">{header}</h1>
      <p className="text-sm mb-2" style={{ color: "rgba(0, 0, 0, .5" }}>
        {text}
      </p>
      <>{children}</>
    </div>
  );
};

export default Section;
