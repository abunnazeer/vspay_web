import gridThree from './gridThree.module.css';

const GridThree = (props) => {
  return <section className={gridThree.container}>{props.children}</section>;
};

export default GridThree;
