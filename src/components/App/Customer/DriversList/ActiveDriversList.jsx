import { Table } from 'antd';
import React from 'react';
import styled from 'styled-components';

const DriversListContainer = styled.div`
  margin: 20px 40px;
`;

const columns = [
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Telefono',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Identificación',
    dataIndex: 'numberId',
    key: 'numberId',
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
      {
        text: 'N/A',
        value: '',
      }
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
];

const ActiveDriversList = ({ drivers }) => {
  return (
    <DriversListContainer>
      <Table dataSource={drivers} columns={columns} />
    </DriversListContainer>
  );
};

export default ActiveDriversList;
