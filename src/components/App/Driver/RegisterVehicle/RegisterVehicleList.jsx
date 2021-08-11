import React, { useEffect, useState } from "react";
import { Card, Col, Row, Skeleton } from "antd";
import { EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import styled from "styled-components";
import { PRIMARY_COLOR } from "../../../utils/colors";
import { firestoreDB } from "../../../utils/firebase";

const { Meta } = Card;

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

const ColRow = styled.div`
  margin: auto;

`;

const CardImage = styled.img`
  max-width: 100%;
`;

const cardStyles = {
  width: "50%",
  margin: "0 10px",
};

const RegisterVehicleList = ({ data }) => {
  const [loadData, setLoadData] = useState(true);
  const [vehicleList, setVehicleList] = useState({});

  useEffect(() => {
    getVehicleList();
    setLoadData(false);
  }, []);

  const getVehicleList = () => {
    const data = firestoreDB.collection("VehicleList");

    data.onSnapshot((vehicles) => {
      setVehicleList([]);
      const newVehicleList = [];

      vehicles.forEach((vehicle) => {

        if (vehicle.data().userId === data.key) {
          newVehicleList.push({
            ...vehicle.data(),
            key: vehicle.id,
          });
        }

      });

      if (newVehicleList.length > 0) setVehicleList(newVehicleList);
    });
  };

  return (
    <Row>
      <ColRow className="ant-col ant-col-xs-24">
        <Title>Lista de vehiculos registrados</Title>
          <Col xs={24} md={8}>
            <Card
              actions={[
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
              cover={<CardImage alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              hoverable
              loading={loadData}
              style={cardStyles}
            >
              <Skeleton loading={loadData} active>
                <Meta title={data.carname ?? '-'} description={`Expiración SOAT: ${data.expireSoat ?? 'N/A'}, expiración técnico mecánica: ${data.expireMecanictecnic ?? 'N/A'}`} />
              </Skeleton>
            </Card>
          </Col>
          {vehicleList?.length > 0 && vehicleList.map((vehicle) => (
            <Col xs={24} md={8}>
              <Card
                actions={[
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
                cover={<CardImage alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                hoverable
                loading={loadData}
                style={cardStyles}
              >
                <Skeleton loading={loadData} active>
                  <Meta title={vehicle.carname ?? '-'} description={`Expiración SOAT: ${vehicle.expireSoat ?? '-'}, expiración técnico mecánica: ${vehicle.expireMecanictecnic ?? '-'}`} />
                </Skeleton>
              </Card>
            </Col>
          ))}
        </ColRow>
    </Row>
  );
};

export default RegisterVehicleList;
