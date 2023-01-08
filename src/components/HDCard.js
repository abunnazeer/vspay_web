import { Fragment } from 'react';
import hdCss from './hd.module.css';
const HeadingDescription = (props) => {
  const m__content = props.mobile;
  // console.log(mpcontentx);
  return (
    <Fragment>
      <section
        className={`${hdCss.container} ${m__content ? hdCss.m__content : null}`}
      >
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
            { textAlign: props.align }
            // { width: props.width }
          )}
        >
          {props.description}
        </p>
      </section>
    </Fragment>
  );
};

export default HeadingDescription;
