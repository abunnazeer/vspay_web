import listStyles from './list.module.css';
const Lists = (props) => {
  return (
    <div className={`${listStyles.list}`}>
      <ul>{props.children}</ul>
    </div>
  );
};

export default Lists;
