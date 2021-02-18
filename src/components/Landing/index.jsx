import React from 'react';
import '../../App.scss';
import 'antd/dist/antd.css';
import Header from './Header/Header';
import Team from './Team/Team';
import BusinessPlan from './BusinessPlan/BusinessPlan';
import Services from './Services/Services';
import ContactUs from './ContactUs/ContactUs';
import AboutUs from './AboutUs/AboutUs';


const Landing = () => {
  return (
    <div className="main-landing">
      <Header />
      <AboutUs id="us" />
      <BusinessPlan id="business-plan" />
      <Services id="services" />
      <Team id="team" />
      <ContactUs id="contact-us" />
    </div>
  );
}

export default Landing;