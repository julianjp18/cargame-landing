import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { Button, Card, Col, Descriptions, Row, Skeleton } from "antd";
import styled from "styled-components";

import DriveFormForChanges from "./DriveFormForChanges";
import { PRIMARY_COLOR } from "../../../utils/colors";
import { firestoreDB } from "../../../utils/firebase";
import { uploadDocsForChangeNotifier } from "../../../../redux/sagas/driver/actions/driver";

const AntRow = styled.div`
  margin-top: 60px;
  min-height: 100vh;
`;

const Title = styled.p`
  margin-bottom: 0;
  text-align: start;
  font-family: Ruda;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 78px;
  color: ${PRIMARY_COLOR};
  text-align: center;
`;

const DocumentsList = styled.ul`
  text-align: start;
  margin-left: 10px;
`;

const DescriptionContainer = styled.div`
  margin: 0 80px;

  @media (max-width: 768px) {
    margin: 0 20px;
  }
`;

const translateKey = (key) => {
  switch (key) {
    case "drivenLicenseChecked":
      return "Licencia de conducción";
    case "driverPhotoChecked":
      return "Selfie";
    case "identificationChecked":
      return "Identificación";
    case "mecanictecnicChecked":
      return "Técnico mecánica";
    case "propertyCardChecked":
      return "Tarjeta de propiedad";
    case "soatChecked":
      return "SOAT";
    default:
      return "";
  }
};

const Notifications = ({ auth, uploadDocsForChange }) => {
  const [notifications, setNotifications] = useState([]);
  const [notificationSelected, setNotificationSelected] = useState({});
  const [showNotificationsView, setShowNotificationsView] = useState(true);

  const showNotifications = () => {
    const data = firestoreDB.collection("VehiclesList");

    data.onSnapshot((vehicles) => {
      setNotifications([]);
      const newNotificationsList = [];

      vehicles.forEach((vehicle) => {
        if (vehicle.data().idDriver === auth.id || vehicle.id === auth.id) {
          newNotificationsList.push({
            ...vehicle.data(),
            key: vehicle.id,
          });
        }
      });

      if (newNotificationsList.length > 0)
        setNotifications(newNotificationsList);
    });
  };

  const changeForForm = (notification) => {
    setShowNotificationsView(!showNotificationsView);
    setNotificationSelected(notification);
  };

  useEffect(() => {
    showNotifications();
  }, []);

  return (
    <AntRow className="ant-row">
      {showNotificationsView ? (
        <Col xs={24}>
          <Title>Notificaciones</Title>
          {notificationSelected ? (
            <Row>
              {notifications?.map((notification) => {
                const documents = [];
                if (notification.documentsForChange) {
                  Object.entries(notification?.documentsForChange).forEach(
                    (value) => {
                      if (value[1]) {
                        documents.push(translateKey(value[0]));
                      }
                    }
                  );
                }

                return (
                  <Col key={notification.comments} xs={24} md={6}>
                    <Card>
                      <p>{notification?.comments}</p>
                      <DocumentsList>
                        {notification?.documentsForChange &&
                          documents?.map((document) => (
                            <li key={document}>{document}</li>
                          ))}
                      </DocumentsList>
                      {notification?.documentsForChange && (
                        <Button onClick={() => changeForForm(notification)}>
                          Ver más
                        </Button>
                      )}
                    </Card>
                  </Col>
                );
              })}
            </Row>
          ) : (
            <Skeleton />
          )}
        </Col>
      ) : (
        <Col xs={24}>
          <Title>Ver notificación</Title>
          <DescriptionContainer>
            <Descriptions title="Descripción de la notificación">
              <Descriptions.Item label="Comentario">
                {notificationSelected.comments}
              </Descriptions.Item>
              <Descriptions.Item label="Documentos para cambiar">
                <DocumentsList>
                  {notificationSelected?.documentsForChange &&
                    Object.entries(notificationSelected?.documentsForChange).map(
                      (document) =>
                        document[1] ? (
                          <li key={translateKey(document[0])}>
                            {translateKey(document[0])}
                          </li>
                        ) : null
                    )}
                </DocumentsList>
              </Descriptions.Item>
            </Descriptions>
          </DescriptionContainer>
          <DriveFormForChanges
            auth={auth}
            notificationSelected={notificationSelected}
            documentsForChange={notificationSelected?.documentsForChange}
            uploadDocsForChange={uploadDocsForChange}
          />
        </Col>
      )}
    </AntRow>
  );
};

Notifications.propTypes = {};

Notifications.defaultProps = {};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  uploadDocsForChange: uploadDocsForChangeNotifier,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
