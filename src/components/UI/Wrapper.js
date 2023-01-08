// import wrapper from './wrapper.module.css';
const Wrapper = (props) => {
  return (
    <div style={Object.assign({ margin: props.size })}>{props.children}</div>
  );
};

export default Wrapper;
