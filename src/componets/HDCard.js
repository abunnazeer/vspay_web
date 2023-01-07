import { Fragment } from 'react';
// import hdCss from "./hd.module.css";
const HeadingDescription = (props) => {
  const container = {
    padding: '2rem',
    textAlign: 'center',
  };
  return (
    <Fragment>
      <section style={container}>
        <h1
          style={Object.assign(
            { fontSize: props.size_0 },
            { textAlign: props.align },
            { width: props.width }
          )}
        >
          {props.heading}
        </h1>
        <p
          style={Object.assign(
            { fontSize: props.size_1 },
            { marginTop: props.mt },
            { textAlign: props.align },
            { width: props.width }
          )}
        >
          {props.description}
        </p>
      </section>
    </Fragment>
  );
};

export default HeadingDescription;
