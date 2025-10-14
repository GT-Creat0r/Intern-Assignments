import '../Card/Card.css';

const Card = ({ children, variant = "default", className = "" }) => {
  const classNames = ["card", `card-${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return <div className={classNames}>{children}</div>;
};

export default Card;
