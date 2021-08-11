import React, { useState } from "react";
import { Form, message, Row } from "antd";
import styled from "styled-components";
import { PRIMARY_COLOR, SECOND_COLOR, WHITE_COLOR } from "../../../utils/colors";
import RegisterVehicle from "./RegisterVehicle";
import { connect } from "react-redux";
import moment from 'moment';

const ColRow = styled.div`
  margin: auto;

`;

const SecondButtonContainer = styled.button`
  width: 300px;
  height: 40px;  
  display: inline-block;
  padding: 5px 28px 10px 28px;
  margin: 14px 10px 0 0;
  font-family: Quicksand;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: ${WHITE_COLOR};
  border: 1px solid ${WHITE_COLOR};
  border-radius: 50px;
  background: linear-gradient(55.05deg, ${SECOND_COLOR} 0%, ${PRIMARY_COLOR} 100%);
  -webkit-transition: 0.3s;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: linear-gradient(55.05deg, ${WHITE_COLOR} 0%, ${WHITE_COLOR} 100%);
    color: ${PRIMARY_COLOR};
    border: 1px solid ${PRIMARY_COLOR};
    cursor: pointer;
  }
`;

const formItemLayout = {
  labelCol: {
    span: 11,
  },
  wrapperCol: {
    span: 14,
  },
};

const RegisterVehicleForm = ({ auth }) => {
  const [expireMecanictecnic, setexpireMecanictecnic] = useState();
  const [hideMecanictecnic, sethideMecanictecnic] = useState(false);
  const [expireSoat, setexpireSoat] = useState();
  const [yearVehicle, setyearVehicle] = useState();
  
  const onChangeExpireMecanictecnic = (date, dateString) => {
    setexpireMecanictecnic(dateString);
  };

  const onChangeExpireSOAT = (date, dateString) => {
    setexpireSoat(dateString);
  };

  const onChangeYearModelVehicle = (date, dateString) => {
    setyearVehicle(dateString);
    if (dateString >= moment().subtract(3, 'years').calendar()) {
      sethideMecanictecnic(true);
    }
  };

  const onFinish = (values) => {
    const {
      propertyCardFront,
      propertyCardBack,
      mecanictecnic,
      soat,
    } = values;

    if (
      expireSoat &&
      propertyCardFront &&
      propertyCardBack &&
      mecanictecnic &&
      soat &&
      yearVehicle
    ) {
      console.log({
        ...values,
        expireMecanictecnic,
        expireSoat,
        id: auth.id,
      });
    } else {
      message.error('Por favor llena todos los campos');
    }
  };

  return (
    <Row>
      <ColRow className="ant-col ant-col-xs-24">
        <Form
          name="complete-info-form"
          onFinish={onFinish}
          {...formItemLayout}
        >
          <RegisterVehicle
            hideMecanictecnic={hideMecanictecnic}
            onChangeExpireMecanictecnic={onChangeExpireMecanictecnic}
            onChangeExpireSOAT={onChangeExpireSOAT}
            onChangeYearModelVehicle={onChangeYearModelVehicle}
          />
          <Form.Item
            wrapperCol={{
              span: 24,
            }}
          >
            <SecondButtonContainer className="ant-btn" type="primary" htmlType="submit">
              Enviar
            </SecondButtonContainer>
          </Form.Item>
        </Form>
      </ColRow>
    </Row>
  );
};

RegisterVehicleForm.propTypes = {
};

RegisterVehicleForm.defaultProps = {};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterVehicleForm);

