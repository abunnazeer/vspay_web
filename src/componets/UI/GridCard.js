import gridCss from "./gridCard.module.css";

const GridCard = props => {
  return <section className={gridCss.container}>{props.children}</section>;
};
export default GridCard;
