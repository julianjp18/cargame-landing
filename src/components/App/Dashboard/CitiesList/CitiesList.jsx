import { Col, Row, Select } from 'antd';
import React from 'react';
import Chart from 'react-apexcharts';
import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../../utils/colors';
import { CITIES } from '../../../utils/extras';

const CitiesListContainer = styled.div`
  margin: 20px 40px;
`;

const SelectContainer = styled.div`
margin-bottom: 20px;
`;

const Subtitle = styled.p`
  margin-bottom: 0;
`;

const Title = styled.p`
`;

const Highlight = styled.span`
  color: ${PRIMARY_COLOR};
  font-size: 20px;
  font-weight: 'bold';
`;

const { Option } = Select;

const CitiesList = ({ cities, citySelected, cityOnChange }) => {
  const labels = ['Conductores', 'Usuarios'];
  const options = {
    labels,
  };
  const series = [cities.drivers, cities.users];

  const onChange = (value) => {
    cityOnChange(value);
  };

  return (
    <CitiesListContainer>
      <Row>
        <Col xs={24}>
        <SelectContainer>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Selecciona una ciudad"
              optionFilterProp="children"
              onChange={onChange}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {CITIES.map((city) => (
                <Option value={city}>{city}</Option>
              ))}
            </Select>
          </SelectContainer>
          
        </Col>
        <Col xs={6}>
        <Title>Ciudad seleccionada: <Highlight>{citySelected}</Highlight></Title>
          <Subtitle>Total Conductores: <Highlight>{cities.drivers}</Highlight></Subtitle>
          <Subtitle>Total Usuarios: <Highlight>{cities.users}</Highlight></Subtitle>
        </Col>
        <Col xs={6}>
          <Chart options={options} series={series} type="donut" width="380" />
        </Col>
      </Row>
    </CitiesListContainer>
  );
};

export default CitiesList;
