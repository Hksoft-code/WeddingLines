const Card = ({ children, setWidth, display }) => {
  return (
    <div
      className={`p-2 m-2 rounded-md h-auto ${
        (setWidth, display)
      } cursor-pointer hover:border hover:rounded-md`}
      style={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, .2)" }}
    >
      {children}
    </div>
  );
};

export default Card;
