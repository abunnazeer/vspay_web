import appStoreCss from "./appstore.module.css";
const AppStore = props => {
  return (
    <div className={appStoreCss.imgStyles}>
      <img src={props.image} alt={props.brandName} />
    </div>
  );
};

export default AppStore;
