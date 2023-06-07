import "./button.css";

const Button = (props) => {
  return (
    <button
      className={`btn ${props.color ? props.color : ""} ${
        props.variant ? props.variant : ""
      }`}
      onClick={props.handleClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
