import { Fragment } from 'react';

const ImageCard = (props) => {
  // const container = {
  //   textAlign: props.align,
  // };
  return (
    <Fragment>
      <section style={Object.assign({ textAlign: props.align })}>
        <img
          src={props.src}
          alt=""
          style={Object.assign(
            { width: props.size },
            { position: props.pos },
            { top: props.top },
            { left: props.left },
            {
              zIndex: props.zindex,
            }
          )}
        />
      </section>
    </Fragment>
  );
};
export default ImageCard;
