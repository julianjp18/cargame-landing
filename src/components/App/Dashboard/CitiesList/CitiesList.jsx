import { Table } from 'antd';
import React from 'react';
import styled from 'styled-components';

const CitiesListContainer = styled.div`
  margin: 20px 40px;
`;

const columns = [
  {
    title: 'Tipo de usuario',
    dataIndex: 'typeUser',
    key: 'typeUser',
    render: (typeUser) => {
      let returnTypeUser = typeUser;
      if (typeUser === 'driver') returnTypeUser = 'Transportador';
      else if (returnTypeUser === 'user') returnTypeUser = 'Usuario';
      return returnTypeUser;
    },
    filter: [
      {
        text: 'Transportador',
        value: 'driver',
      },
      {
        text: 'Usuario',
        value: 'user',
      },
    ],
    onFilter: (value, record) => {
      if (record.typeUser) return record.typeUser.indexOf(value) === 0;
    },
    sorter: (a, b) => {
      if (a.typeUser && b.typeUser)
        return a.typeUser.length - b.typeUser.length;
    },
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Ciudad',
    dataIndex: 'city',
    key: 'city',
    filter: [
      {
        text: 'Bogotá D.C.',
        value: 'Bogotá D.C.',
      },
      {
        text: 'Villavicencio',
        value: 'Villavicencio',
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => {
      if (record.city) return record.city.indexOf(value) === 0;
    },
    sorter: (a, b) => {
      if (a.city && b.city)
        return a.city.length - b.city.length;
    },
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Cantidad usuarios',
    dataIndex: 'cant',
    key: 'cant',
    filterMultiple: false,
    sorter: (a, b) => {
      if (a.cant && b.cant)
        return a.cant.length - b.cant.length;
    },
    sortDirections: ['descend', 'ascend'],
  },
];

const CitiesList = ({ cities }) => {
  return (
    <CitiesListContainer>
      <Table dataSource={cities} columns={columns} />
    </CitiesListContainer>
  );
};

export default CitiesList;
