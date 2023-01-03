import buttonCss from "./button.module.css";
const Button = props => {
  return <button className={buttonCss.btn}>{props.value}</button>;
};

export default Button;
