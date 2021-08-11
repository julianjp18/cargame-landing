import { Popover, Space, Table } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../../utils/colors';

const AmbassadorsListContainer = styled.div`
  margin: 20px 40px;
`;

const Name = styled.p`
  color: ${PRIMARY_COLOR};
  cursor: pointer;
  margin-bottom: 0;
  
  &:hover {
    text-decoration: underline;
  }
`;

const PaymentItem = styled.p`
  margin-bottom: 0;
`;

const columns = [
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => {
      const { account_number, account_type, bank } = record.payment ?? {};
      const content = (
        <div>
          <p>Usuario: <b>{text}</b></p>
          <PaymentItem>Banco: <b>{bank ?? ''}</b></PaymentItem>
          <PaymentItem>Tipo de cuenta: <b>{account_type ?? ''}</b></PaymentItem>
          <PaymentItem>Número de cuenta: <b>{account_number ?? ''}</b></PaymentItem>
        </div>
      );
    
      return (
        <Popover content={content} title="Información de pago">
          <Name>{text}</Name>
        </Popover>
      );
    },
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
  {
    title: '1% valor ofertas',
    dataIndex: 'onePercent',
    key: 'onePercent',
  },
  {
    title: 'Acción',
    key: 'action',
    render: (text, record) => record.onePercent > 0 ? (
      <Space size="middle">
        <p onClick={() => finishPayment(record)}>Pagado</p>
      </Space>
    ) : ('-'),
  },
];

const finishPayment = (record) => {

};

const AmbassadorsList = ({ ambassadors }) => {
  return (
    <AmbassadorsListContainer>
      <Table dataSource={ambassadors} columns={columns} />
    </AmbassadorsListContainer>
  );
};

export default AmbassadorsList;
