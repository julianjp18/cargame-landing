import { Table } from 'antd';
import React from 'react';
import styled from 'styled-components';

const AmbassadorsListContainer = styled.div`
  margin: 20px 40px;
`;

const columns = [
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Tipo Usuario',
    dataIndex: 'typeUser',
    key: 'typeUser',
  },
  {
    title: 'Cantidad referidos',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Número de referido',
    dataIndex: 'identification',
    key: 'identification',
  },
];

const AmbassadorsList = ({ ambassadors }) => {
  return (
    <AmbassadorsListContainer>
      <Table dataSource={ambassadors} columns={columns} />
    </AmbassadorsListContainer>
  );
};

export default AmbassadorsList;
