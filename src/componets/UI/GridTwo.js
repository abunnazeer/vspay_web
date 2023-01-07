import gridTwo from './gridTwo.module.css';

const GridTwo = (props) => {
  return <section className={gridTwo.container}>{props.children}</section>;
};
export default GridTwo;
