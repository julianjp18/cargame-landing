import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../App.scss';
import 'antd/dist/antd.css';
import Header from './Header/Header';
import Services from './Services/Services';
import ContainsApp from './ContainsApp/ContainsApp';
import DownloadsApps from './DownloadApps/DownloadApps';
import EarnMoney from './EarnMoney/EarnMoney';
import AppsVideos from './AppsVideos/AppsVideos';
import HowItWorks from './HowItWorks/HowItWorks';
import DriverInfo from './DriverInfo/DriverInfo';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import PaymentMethods from './PaymentMethods/PaymentMethods';

const Landing = () => {
  const history = useHistory();
  return (
    <div className="main-landing">
      <Fade>
        <Header />
      </Fade>
      <Fade>
        <ContainsApp />
      </Fade>
      <Slide left>
        <HowItWorks />
      </Slide>
      <Fade>
        <AppsVideos />
      </Fade>
      <Slide right>
        <DriverInfo />
      </Slide>
      <Slide left>
        <PaymentMethods />
      </Slide>
      <Fade>
        <Services />
      </Fade>
      <Fade>
        <EarnMoney />
      </Fade>
      <Slide bottom>
        <DownloadsApps />
      </Slide>
    </div>
  );
}

export default Landing;
