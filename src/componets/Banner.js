import { Fragment } from 'react';
import bannerCss from './banner.module.css';
import Button from './Button';
import HeadingDescription from './HDCard';

const Banner = () => {
  return (
    <Fragment>
      <section className={`${bannerCss.container}`}>
        <HeadingDescription
          heading="Make your money move"
          description="Pay online, send money and buy crypto with a digital wallet used by
          millions."
          size_0="4rem"
          size_1="2.3rem"
        />
        <Button value="Become a Merchant" />
      </section>
    </Fragment>
  );
};

export default Banner;
