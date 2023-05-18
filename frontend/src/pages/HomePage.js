import React, { Fragment } from 'react';

import Header from '../layout/Header';
import Banner from '../components/Banner';
import ImageCard from '../components/UI/ImageCard';
import HeadingDescription from '../components/HDCard';
import Card from '../components/Card';
import AppStore from '../components/UI/AppStore';
import FlexCard from '../components/UI/FlexCard';
import GridThree from '../components/UI/GridThree';
import GridTwo from '../components/UI/GridTwo';
import GridFour from '../components/UI/GridFour';
import Footer from '../layout/Footer';
import Wrapper from '../components/UI/Wrapper';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faMoneyBillTransfer,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
//images

import google from '../assets/google.png';
import apple from '../assets/apple.png';
import powerby from '../assets/copyright.png';
import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
import instgram from '../assets/instagram.png';
import phone from '../assets/phone.png';
import circle_1 from '../assets/circle_1.jpg';
import circle_2 from '../assets/circle_2.jpg';
// partner
import air from '../assets/partner/Air-Peace-Stack-Blue.svg';
import carbon from '../assets/partner/carbon-dark.svg';
import film from '../assets/partner/FilmHouse-Stack-Blue.svg';
import kuda from '../assets/partner/kuda-Stack-Blue.svg';

import FlexCardDefault from '../components/UI/FlexCardDefault';

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <div className="hide__mobile">
        <ImageCard
          src={circle_1}
          size="8rem"
          align="center"
          pos="absolute"
          top="90px"
          left="145px"
          zindex="-2"
        />
      </div>
      <div className="hide__mobile">
        <ImageCard
          src={circle_2}
          size="8rem"
          align="center"
          pos="absolute"
          top="380px"
          left="440px"
          zindex="-2"
        />
      </div>

      <GridTwo>
        <Banner />

        <ImageCard src={phone} size="20rem" align="center" />
      </GridTwo>
      <Wrapper size="80px 0">
        <HeadingDescription
          heading="A Payment Network For Your Business"
          description="On-ramp and off-ramp cash with our peer-to-peer network without a bank account."
          size_0="3rem"
          size_1="2rem"
          mt="1rem"
          align="center"
          mobile="m__content"
        />
      </Wrapper>

      <GridThree>
        <Card>
          <FontAwesomeIcon
            icon={faMoneyBillTransfer}
            size="7x"
            color="#3459A6"
          />
          <HeadingDescription
            heading="Deposit & Withdrawal"
            description="Send money in and out of any platform in your local currency"
            size_0="2.5rem"
            size_1="1.6rem"
            mt="1rem"
          />
        </Card>
        <Card>
          <FontAwesomeIcon icon={faBriefcase} size="7x" color="#3459A6" />
          <HeadingDescription
            heading="Escrow Service"
            description="Vspay secures your funds until both parties fulfill their side of the transaction. We run a No scam zone"
            size_0="2.5rem"
            size_1="1.6rem"
            mt="1rem"
          />
        </Card>
        <Card>
          <FontAwesomeIcon icon={faCheck} size="7x" color="#3459A6" />
          <HeadingDescription
            heading="API Integration"
            description="Our Tech team has designed an API system that can easily be seamlessly integrated with your platform"
            size_0="2.5rem"
            size_1="1.6rem"
            mt="1rem"
          />
        </Card>
      </GridThree>
      {/* Powering growth for amazing businesses */}
      <Wrapper size="80px 0">
        <HeadingDescription
          heading="Powering growth for amazing businesses"
          description="Vspay is a growth engine for a new generation of innovative, forward-looking organizations operating in Africa."
          size_0="3.5rem"
          size_1="1.7rem"
          mt="1rem"
          align="center"
          mobile="m__content"
        />
      </Wrapper>
      <Wrapper>
        <GridFour>
          <ImageCard src={air} size="20rem" align="" />
          <ImageCard src={carbon} size="20rem" align="" />
          <ImageCard src={film} size="20rem" align="" />
          <ImageCard src={kuda} size="20rem" align="" />
          <ImageCard src={air} size="20rem" align="" />
        </GridFour>
      </Wrapper>
      <FlexCard align="center">
        <AppStore image={google} brandName="google" />
        <AppStore image={apple} brandName="apple" />
      </FlexCard>
      <FlexCardDefault>
        <FlexCard align="flex-start">
          <div>
            <img src={powerby} alt="powerby" width={140} />
          </div>
          <FlexCard align="flex-end">
            <img src={facebook} alt="facebook" width={35} />
            <img src={instgram} alt="instagram" width={35} />
            <img src={twitter} alt="twitter" width={35} />
          </FlexCard>
        </FlexCard>
        <HeadingDescription
          description="Copyright © 2023 Virtual Shago Limited. All rights reserved. Vspay Limited  is authorised by the Financial Conduct Authority under the Electronic Money Regulations 2011 for the issuing of electronic money and payment instruments. vspay is a registered trademark of Virtual Shago Limited."
          size_1="1.3rem"
          align="justify"
        />
      </FlexCardDefault>
      <Footer right="© 2022 Vspay. All rights reserved" />
    </Fragment>
  );
};

export default HomePage;
