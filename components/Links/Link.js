const Link = ({ route, label, _class, style }) => {
  return (
    <a href={route} className={_class} style={style}>
      {label}
    </a>
  );
};

export default Link;
