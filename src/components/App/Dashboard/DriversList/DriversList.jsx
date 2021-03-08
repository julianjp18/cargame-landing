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
  },
  {
    title: 'Activo',
    dataIndex: 'isActive',
    key: 'isActive',
    render: (isActive) => {
      return isActive ? 'Activo' : 'Inactivo';
    },
  },
];

const DriversList = ({ drivers }) => {
  return (
    <DriversListContainer>
      <Table dataSource={drivers} columns={columns} />
    </DriversListContainer>
  );
};

export default DriversList;