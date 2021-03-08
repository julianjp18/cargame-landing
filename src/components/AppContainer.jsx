import React, { useEffect, useState } from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import Navbar from './Landing/Nav/Navbar';
import Footer from './Landing/Footer/Footer';
import ROUTES, { AUTH_ROUTES, RenderRoutes } from '../routing/routes';

const App = () => {
  const [isAuth, setisAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('user')) setisAuth(true);
    else setisAuth(false);

  }, []);

  return (
    <div className="App">
      <Navbar />
      <div>
        <RenderRoutes isAuth={isAuth} routes={ROUTES} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
