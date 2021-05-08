import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../App.scss';
import 'antd/dist/antd.css';
import Header from './Header/Header';
import Services from './Services/Services';
import { push } from 'connected-react-router';
import ContainsApp from './ContainsApp/ContainsApp';
import DownloadsApps from './DownloadApps/DownloadApps';
import EarnMoney from './EarnMoney/EarnMoney';
import AppsVideos from './AppsVideos/AppsVideos';
import HowItWorks from './HowItWorks/HowItWorks';
import DriverInfo from './DriverInfo/DriverInfo';

const Landing = () => {
  const history = useHistory();
  return (
    <div className="main-landing">
      <Header />
      <ContainsApp />
      <HowItWorks />
      <AppsVideos />
      <DriverInfo />
      <Services />
      <EarnMoney />
      <DownloadsApps />
    </div>
  );
}

export default Landing;
