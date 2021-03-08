import { Table } from 'antd';
import React from 'react';
import styled from 'styled-components';

const ReferralsListContainer = styled.div`
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

const Referral = ({ referrals }) => {
  return (
    <ReferralsListContainer>
      <Table dataSource={referrals} columns={columns} />
    </ReferralsListContainer>
  );
};

export default Referral;
