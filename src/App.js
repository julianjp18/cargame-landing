import './App.scss';
import 'antd/dist/antd.css';
import Navbar from './components/Landing/Nav/Navbar';
import Header from './components/Landing/Header/Header';
import Team from './components/Landing/Team/Team';
import BusinessPlan from './components/Landing/BusinessPlan/BusinessPlan';
import Services from './components/Landing/Services/Services';
import ContactUs from './components/Landing/ContactUs/ContactUs';
import AboutUs from './components/Landing/AboutUs/AboutUs';
import Footer from './components/Landing/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <BusinessPlan />
      <Services />
      <Team />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
