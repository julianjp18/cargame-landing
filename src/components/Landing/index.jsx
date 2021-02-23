import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../App.scss';
import 'antd/dist/antd.css';
import Header from './Header/Header';
import Team from './Team/Team';
import BusinessPlan from './BusinessPlan/BusinessPlan';
import Services from './Services/Services';
import ContactUs from './ContactUs/ContactUs';
import AboutUs from './AboutUs/AboutUs';


const Landing = () => {
  const history = useHistory();

  const redirect = (path) => {
    if (path) history.push({ pathname: `/${path}`, state: { component: path } });
  };

  return (
    <div className="main-landing">
      <Header redirect={redirect} />
      <AboutUs id="us" />
      <BusinessPlan id="business-plan" />
      <Services id="services" />
      <Team id="team" />
      <ContactUs id="contact-us" />
    </div>
  );
}

export default Landing;