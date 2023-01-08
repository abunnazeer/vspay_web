import defaultFlex from "./flexCardDefault.module.css";
const FlexCardDefault = props => {
  return <section className={defaultFlex.container}>{props.children}</section>;
};

export default FlexCardDefault;
