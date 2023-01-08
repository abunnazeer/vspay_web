import { Fragment } from "react";

import cardCss from "./card.module.css";
const Card = props => {
  return (
    <Fragment>
      <div className={cardCss.container}>{props.children}</div>
    </Fragment>
  );
};

export default Card;
