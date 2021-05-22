import React, { useEffect, useState } from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import Navbar from './Landing/Nav/Navbar';
import Footer from './Landing/Footer/Footer';
import ROUTES, {
  ADMIN_ROUTES,
  DRIVER_ROUTES,
  CUSTOMER_ROUTES,
  RenderRoutes,
} from '../routing/routes';
import { connect } from 'react-redux';

const App = ({ auth }) => {
  const [isAuth, setisAuth] = useState(false);
  const [routes, setRoutes] = useState(ROUTES);
  useEffect(() => {
    if (auth && auth.role) setisAuth(true);
    else setisAuth(false);
    defineRoutes();
  }, [auth]);

  const defineRoutes = () => {
    switch (auth.role) {
      case 'admin':
        setRoutes(ADMIN_ROUTES);
        break;
      case 'driver':
        setRoutes(DRIVER_ROUTES);
        break;
      case 'customer':
        setRoutes(CUSTOMER_ROUTES);
        break;
      default:
        setRoutes(ROUTES);
        break;
    }
  };

  return (
    <div className="App">
      <Navbar isAuth={isAuth} role={auth.role ?? {}} routes={routes} />
      <div>
        <RenderRoutes isAuth={isAuth} routes={routes} />
      </div>
      <Footer />
    </div>
  );
}

App.propTypes = {};

App.defaultProps = {};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);