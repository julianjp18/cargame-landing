import { Col, Row, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { firestoreDB } from '../../utils/firebase';
import 'firebase/firestore';
import DriversList from './DriversList/DriversList';
import UsersList from './UsersList/UsersList';
import OffersList from './OffersList/OffersList';
import { PRIMARY_COLOR } from '../../utils/colors';
import CitiesList from './CitiesList/CitiesList';
import AmbassadorsList from './AmbassadorsList/AmbassadorsList';
import ReferralsList from './ReferralsList/ReferralsList';

const DashboardContainer = styled.div`
  margin: 20px 40px;
`;

const TitleContent = styled.h1`
  text-align: start;
`;

const SubTitleContent = styled.h2`
  text-align: start;
`;

const ShowInfoContent = styled.div`
  min-height: 120px;
  margin: 0 10px;
  border: 1px solid rgba(0,0,0,0.3);
  border-radius: 5px;
  box-shadow: 0px 0px 15px -5px rgba(0,0,0,0.75);
`;

const PShowInfo = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const PValue = styled.p`
  font-size: 30px;
  color: ${PRIMARY_COLOR};
`;

const PRegistersTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 1px;
`;

const PRegistersValue = styled.p`
  font-size: 30px;
  color: ${PRIMARY_COLOR};
  margin-bottom: 0;
`;

const { TabPane } = Tabs;

const percentageValue = (totalOffersValue) => {
  return (totalOffersValue * 13) / 100;
};

const Dashboard = () => {
  const [driversList, setdrivers] = useState([]);
  const [usersList, setusers] = useState([]);
  const [offersList, setoffers] = useState([]);
  const [citiesList, setcities] = useState([]);
  const [ambassadorsList, setambassadorsList] = useState([]);
  const [referralsList, setreferralsList] = useState([]);
  const [offersDone, setoffersDone] = useState(0);
  const [totalOffersValue, settotalOffersValue] = useState(0);

  const showDrivers = () => {
    const data = firestoreDB.collection("Drivers");

    data.onSnapshot((drivers) => {
      setdrivers([]);
      const newDriversList = [];

      drivers.forEach((driver) => {

        if (driver.data().name && driver.data().numberId) {
          newDriversList.push({
            ...driver.data(),
            key: driver.id,
          });
        }

      });

      if (newDriversList.length > 0) setdrivers(newDriversList);
    });
  };

  const showUsers = () => {
    const data = firestoreDB.collection("Users");

    data.onSnapshot((users) => {
      setusers([]);
      const newUsersList = [];

      users.forEach((user) => {

        if (user.data().name && user.data().numberId) {
          newUsersList.push({
            ...user.data(),
            key: user.id,
          });
        }

      });

      if (newUsersList.length > 0) setusers(newUsersList);
    });
  };

  const showOffers = () => {
    const data = firestoreDB.collection("OffersNotificationCenter");

    data.onSnapshot((offers) => {
      setoffers([]);
      setoffersDone(0);
      settotalOffersValue(0);
      const newOffersList = [];

      offers.forEach((offer) => {

        newOffersList.push({
          ...offer.data(),
          key: offer.id,
        });

        if (offer.data().status === 'DONE') {
          settotalOffersValue(Number.parseInt(totalOffersValue) + Number.parseInt(offer.data().offerValue));
          setoffersDone(offersDone + 1);
        }
      });

      if (newOffersList.length > 0) setoffers(newOffersList);
    });
  };

  const showCities = async () => {
    const cities = ['Bogotá D.C.', 'Villavicencio'];
    const listDriverCities = [];
    const listUserCities = [];

    cities.forEach((city) => {
      listDriverCities.push({
        typeUser: 'driver',
        city,
        cant: 0,
      });
      listUserCities.push({
        typeUser: 'user',
        city,
        cant: 0,
      });
    });

    const drivers = await firestoreDB.collection("Drivers").get().then((allDrivers) => allDrivers);

    if (drivers) {
      drivers.forEach((driver) => {
        const { city } = driver.data();
        const pos = listDriverCities.findIndex(x => x.city === city && x.typeUser === 'driver');

        if (pos > -1) {
          listDriverCities[pos].cant = listDriverCities[pos].cant + 1;
        }
      });
    }

    const users = await firestoreDB.collection("Users").get().then((allUsers) => allUsers);

    if (users) {
      users.forEach((user) => {
        const { city } = user.data();
        const pos = listUserCities.findIndex(x => x.city === city && x.typeUser === 'user');

        if (pos > -1) {
          listUserCities[pos].cant = listUserCities[pos].cant + 1;
        }
      });
    }
    const newCities = [...listUserCities, ...listDriverCities];

    setcities(newCities);
  };

  const showAmbassadors = () => {
    const referralsData = firestoreDB.collection("Referrals");
    const newReferralList = [];
    firestoreDB.collection("Users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const { name, numberId } = doc.data();
        setambassadorsList([]);

        referralsData.where("referralId", "==", numberId)
          .get()
          .then((querySnapshot) => {
            let quantity = 0;

            querySnapshot.forEach((doc) => {
              quantity++;
            });

            if (quantity > 0) {
              const elIndex = newReferralList.findIndex(element => element.identification === numberId);

              if (elIndex > -1) {
                newReferralList[elIndex] = {
                  ...newReferralList[elIndex],
                  quantity,
                };
              } else {
                newReferralList.push({
                  name,
                  typeUser: 'Usuario',
                  quantity,
                  identification: numberId,
                });
              }
            }

            if (newReferralList.length > 0) setambassadorsList(newReferralList);
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      });

    });
  };

  const showReferrals = () => {
    const referralsData = firestoreDB.collection("Referrals");
    const newReferralList = [];
    firestoreDB.collection("Users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const { name, numberId } = doc.data();
        setreferralsList([]);

        referralsData.where("referralId", "==", numberId)
          .get()
          .then((querySnapshot) => {
            let quantity = 0;

            querySnapshot.forEach((doc) => {
              quantity++;
            });

            if (quantity > 0) {
              const elIndex = newReferralList.findIndex(element => element.identification === numberId);

              if (elIndex > -1) {
                newReferralList[elIndex] = {
                  ...newReferralList[elIndex],
                  quantity,
                };
              } else {
                newReferralList.push({
                  name,
                  typeUser: 'Usuario',
                  quantity,
                  identification: numberId,
                });
              }
            }

            if (newReferralList.length > 0) setreferralsList(newReferralList);
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      });

    });
  };

  useEffect(() => {
    showDrivers();
    showUsers();
    showOffers();
    showCities();
    showAmbassadors();
    showReferrals();
  }, []);

  return (
    <DashboardContainer>
      <TitleContent>Hola Admin,</TitleContent>
      <SubTitleContent>Dashboard</SubTitleContent>
      <Row>
        <Col xs={6}>
          <ShowInfoContent>
            <PShowInfo>Transacciones realizadas</PShowInfo>
            <PValue>{offersDone}</PValue>
          </ShowInfoContent>
        </Col>
        <Col xs={12}>
          <ShowInfoContent>
            <PShowInfo>Valor servicios realizados</PShowInfo>
            <Row>
              <Col xs={24}>
                <PRegistersTitle>Total</PRegistersTitle>
                <PRegistersValue>{totalOffersValue}</PRegistersValue>
              </Col>
              <Col xs={24} md={12}>
                <PRegistersTitle>13% transportadores</PRegistersTitle>
                <PRegistersValue>{percentageValue(totalOffersValue)}</PRegistersValue>
              </Col>
              <Col xs={24} md={12}>
                <PRegistersTitle>13% usuarios</PRegistersTitle>
                <PRegistersValue>{percentageValue(totalOffersValue)}</PRegistersValue>
              </Col>
            </Row>
          </ShowInfoContent>
        </Col>
        <Col xs={6}>
          <ShowInfoContent>
            <PShowInfo>Registrados</PShowInfo>
            <Row>
              <Col xs={24} md={12}>
                <PRegistersTitle>Transportadores</PRegistersTitle>
                <PRegistersValue>{driversList.length}</PRegistersValue>
              </Col>
              <Col xs={24} md={12}>
                <PRegistersTitle>Usuarios</PRegistersTitle>
                <PRegistersValue>{usersList.length}</PRegistersValue>
              </Col>
            </Row>
          </ShowInfoContent>
        </Col>
        <Col xs={24}>
          <Tabs className="tabs-container" defaultActiveKey="1">
            <TabPane tab="Usuarios" key="1">
              <UsersList users={usersList} />
            </TabPane>
            <TabPane tab="Transportadores" key="2">
              <DriversList drivers={driversList} />
            </TabPane>
            <TabPane tab="Servicios" key="3">
              <OffersList offers={offersList} />
            </TabPane>
            <TabPane tab="Ciudades" key="4">
              <CitiesList cities={citiesList} />
            </TabPane>
            <TabPane tab="Embajadores" key="5">
              <AmbassadorsList ambassadors={ambassadorsList} />
            </TabPane>
            <TabPane tab="1000 usuarios" key="6">
              <ReferralsList referrals={referralsList} />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </DashboardContainer>
  );
};

export default Dashboard;