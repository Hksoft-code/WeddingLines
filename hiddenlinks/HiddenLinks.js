const HiddenLinks = ({ children }) => {
  return (
    <div
      className="w-full m-0 bg-inherit h-auto"
      style={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, .2" }}
    >
      {children}
    </div>
  );
};

export default HiddenLinks;
