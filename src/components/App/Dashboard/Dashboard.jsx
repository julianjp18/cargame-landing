import { Col, DatePicker, Row, Tabs } from 'antd';
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
import { currencyFormat, MONTHS, numberWithMiles } from '../../utils/extras';
import moment from 'moment';

const DashboardContainer = styled.div`
  margin: 20px 40px;
`;

const TitleContent = styled.h1`
  text-align: start;
`;

const SubTitleContent = styled.span`
  font-size: 22px;
  text-align: start;
  margin-right: 10px;
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

const FilterContainer = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

const { TabPane } = Tabs;

const percentageValue = (totalOffersValue) => {
  return (totalOffersValue * 13) / 100;
};

const Dashboard = () => {
  const [driversList, setdrivers] = useState([]);
  const [driversForFilterDate, setDriversForFilterDate] = useState([]);
  const [usersList, setusers] = useState([]);
  const [usersForFilterDate, setUsersForFilterDate] = useState([]);
  
  const [offersList, setoffers] = useState([]);
  const [citiesList, setcities] = useState({});
  const [filterDate, setFilterDate] = useState(moment().format('MM-YYYY'));
  const [citySelected, setcitySelected] = useState('Yopal');
  const [ambassadorsList, setambassadorsList] = useState([]);
  const [referralsList, setreferralsList] = useState([]);
  const [offersDone, setoffersDone] = useState(0);
  const [totalOffersValue, settotalOffersValue] = useState(0);

  const cityOnChange = (value) => setcitySelected(value);

  const filterOnChange = (date, dateString) => {
    setFilterDate(dateString);
  };

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

  const showDriversForFilterDate = () => {
    const data = firestoreDB.collection("Drivers");

    data.onSnapshot((drivers) => {
      setDriversForFilterDate([]);
      const newDriversForMonth = [];

      drivers.forEach((driver) => {

        const createdAt = driver.data().created_at;
        
        if (moment(createdAt).format('MM-YYYY') === filterDate) {
          newDriversForMonth.push({
            ...driver.data(),
            key: driver.id,
          });
        }

      });

      if (newDriversForMonth.length > 0) setDriversForFilterDate(newDriversForMonth);
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

  const showUsersForFilterDate = () => {
    const data = firestoreDB.collection("Users");

    data.onSnapshot((users) => {
      setUsersForFilterDate([]);
      const newUsersForMonth = [];

      users.forEach((user) => {

        const createdAt = user.data().created_at;
        
        if (moment(createdAt).format('MM-YYYY') === filterDate) {
          newUsersForMonth.push({
            ...user.data(),
            key: user.id,
          });
        }

      });

      if (newUsersForMonth.length > 0) setUsersForFilterDate(newUsersForMonth);
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
        const pickupDate = offer.data().pickUpDate.split('/');
        
        if (`${pickupDate[1]}-${pickupDate[2]}` === filterDate) {
          newOffersList.push({
            ...offer.data(),
            key: offer.id,
          });

          if (offer.data().status === 'DONE') {
            settotalOffersValue(Number.parseInt(totalOffersValue) + Number.parseInt(offer.data().offerValue));
            setoffersDone(offersDone + 1);
          }
        }
      });

      if (newOffersList.length > 0) setoffers(newOffersList);
    });
  };

  const showCities = async () => {
    let totalDrivers = 0;
    let totalUsers = 0;

    const drivers = await firestoreDB.collection("Drivers").get().then((allDrivers) => allDrivers);

    if (drivers) {
      drivers.forEach((driver) => {
        const { city } = driver.data();
        
        if (city === citySelected) {
          totalDrivers++;
        }
      });
    }

    const users = await firestoreDB.collection("Users").get().then((allUsers) => allUsers);

    if (users) {
      users.forEach((user) => {
        const { city } = user.data();
        
        if (city === citySelected) {
          totalUsers++;
        }
      });
    }
    //const newCities = [...listUserCities, ...listDriverCities];
    const newCities = {
      drivers: totalDrivers,
      users: totalUsers,
    };
    
    setcities(newCities);
  };

  const showAmbassadors = async () => {
    const referralsData = firestoreDB.collection("Referrals");
    const historyOffersData = firestoreDB.collection("HistoryOffersNotificationCenter");
    const newReferralList = [];

    firestoreDB.collection("Users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const { name, numberId, payment } = doc.data();
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
                  identification: numberId,
                  key: numberId,
                  name,
                  onePercent: 0,
                  payment,
                  quantity,
                  typeUser: 'Usuario',
                });
              }
            }

            if (newReferralList.length > 0) {
              const newAmbassorsList = newReferralList;
              newReferralList.forEach((ambassador, index) => {
                const { identification } = ambassador;

                historyOffersData.where("numberId", "==", identification)
                  .get()
                  .then((querySnapshotHistory) => {
                    const sumTotalPriceOffers = [];

                    querySnapshotHistory.forEach((doc) => {
                      const { totalPrice } = doc.data();

                      sumTotalPriceOffers.push(Number.parseInt(totalPrice));
                    });

                    const total = sumTotalPriceOffers.reduce((a, b) => a + b, 0);

                    newAmbassorsList[index] = {
                      ...newAmbassorsList[index],
                      onePercent: total ? (1 * total) / 100 : 0,
                    }

                    setambassadorsList(newAmbassorsList);
                  });
              });
            }
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
                  key: numberId,
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
    showAmbassadors();
    showDrivers();
    showReferrals();
    showUsers();
  }, []);

  useEffect(() => {
    showCities();
  }, [citySelected]);

  useEffect(() => {
    showOffers();
    showDriversForFilterDate();
    showUsersForFilterDate();
  }, [filterDate]);

  return (
    <DashboardContainer>
      <TitleContent>Hola Admin,</TitleContent>
      <FilterContainer>
        <SubTitleContent>Dashboard</SubTitleContent>
        <DatePicker defaultValue={moment(filterDate, 'MM-YYYY')} format="MM-YYYY" onChange={filterOnChange} picker="month" placeholder="Filtrar por mes" size="large" />
      </FilterContainer>
      <Row>
        <Col xs={6}>
          <ShowInfoContent>
            <PShowInfo>Transacciones realizadas</PShowInfo>
            <PValue>{numberWithMiles(offersDone)}</PValue>
          </ShowInfoContent>
        </Col>
        <Col xs={12}>
          <ShowInfoContent>
            <PShowInfo>Valor servicios realizados</PShowInfo>
            <Row>
              <Col xs={24}>
                <PRegistersTitle>Total</PRegistersTitle>
                <PRegistersValue>{currencyFormat(totalOffersValue)}</PRegistersValue>
              </Col>
              <Col xs={24} md={12}>
                <PRegistersTitle>13% transportadores</PRegistersTitle>
                  <PRegistersValue>{currencyFormat(percentageValue(totalOffersValue))}</PRegistersValue>
              </Col>
              <Col xs={24} md={12}>
                <PRegistersTitle>13% usuarios</PRegistersTitle>
                <PRegistersValue>{currencyFormat(percentageValue(totalOffersValue))}</PRegistersValue>
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
                <PRegistersValue>{numberWithMiles(driversForFilterDate.length)}</PRegistersValue>
              </Col>
              <Col xs={24} md={12}>
                <PRegistersTitle>Usuarios</PRegistersTitle>
                <PRegistersValue>{numberWithMiles(usersForFilterDate.length)}</PRegistersValue>
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
              <CitiesList cities={citiesList} citySelected={citySelected} cityOnChange={cityOnChange} />
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