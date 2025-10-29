import "../Card/Card.css";

const Card = ({ children, variant = "default", className = "", ...props }) => {
  
  // const classNames = ["card", `card-${variant}`, className]
  //   .filter(Boolean)
  //   .join(" ");

  const classNames = `card card-${variant} ${className}`;

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

export default Card;
