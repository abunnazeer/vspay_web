import { Fragment } from "react";

import cardCss from "./card.module.css";
const Card = props => {
  return (
    <Fragment>
      <section className={cardCss.container}> {props.children}</section>
    </Fragment>
  );
};

export default Card;
