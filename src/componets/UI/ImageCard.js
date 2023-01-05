import { Fragment } from 'react';

import me from './../../assets/phone.png';
const ImageCard = (props) => {
  // const container = {
  //   textAlign: props.align,
  // };
  return (
    <Fragment>
      <section
        style={Object.assign({ textAlign: props.align }, { marginTop: '3rem' })}
      >
        <img src={me} alt="" style={{ width: props.size }} />
      </section>
    </Fragment>
  );
};
export default ImageCard;
