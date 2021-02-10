import './App.scss';
import 'antd/dist/antd.css';
import Navbar from './components/Landing/Nav/Navbar';
import Footer from './components/Landing/Footer/Footer';
import ROUTES, { RenderRoutes } from './routing/routes';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div>
        <RenderRoutes routes={ROUTES} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
