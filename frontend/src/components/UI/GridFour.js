import gridfour from './gridFour.module.css';
const GridFour = (props) => {
  return <section className={gridfour.container}>{props.children}</section>;
};

export default GridFour;
