import React, { Fragment } from "react";
import MobileHeader from "../layout/MobileHeader";
import Banner from "../componets/Banner";
import ImageCard from "../componets/UI/ImageCard";
import HeadingDescription from "../componets/HDCard";
import Card from "../componets/Card";
import AppStore from "../componets/UI/AppStore";
import FlexCard from "../componets/UI/FlexCard";
import Footer from "../layout/Footer";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faMoneyBillTransfer,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
//images

import google from "../assets/google.png";
import apple from "../assets/apple.png";
import powerby from "../assets/copyright.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import instgram from "../assets/instagram.png";

const HomePage = () => {
  return (
    <Fragment>
      <MobileHeader />
      <Banner />
      <ImageCard size="20rem" align="center" />
      <HeadingDescription
        heading="A Payment Network For Your Business"
        description="On-ramp and off-ramp cash with our peer-to-peer network without a bank account."
        size_0="3rem"
        size_1="2rem"
        mt="1rem"
      />
      <Card>
        <FontAwesomeIcon icon={faMoneyBillTransfer} size="7x" color="#3459A6" />
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

      <FlexCard align="center">
        <AppStore image={google} brandName="google" />
        <AppStore image={apple} brandName="apple" />
      </FlexCard>

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

      <Footer right="© 2022 Vspay. All rights reserved" />
    </Fragment>
  );
};

export default HomePage;
