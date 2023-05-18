import footerCss from "./footer.module.css";

const Footer = props => {
  return <section className={footerCss.container}>{props.right}</section>;
};

export default Footer;
