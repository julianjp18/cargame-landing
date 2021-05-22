import { Space, Table, Tag } from 'antd';
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
  {
    title: 'Información',
    key: 'isInfoCompleted',
    render: (text, record) => {
      let returnInfoCompleted = record.isInfoCompleted;
      if (returnInfoCompleted) returnInfoCompleted = 'Completada';
      else returnInfoCompleted = 'Incompleta';
      return (
        <Tag color={record.isInfoCompleted ? 'green' : 'volcano'} key={returnInfoCompleted}>
          {returnInfoCompleted.toUpperCase()}
        </Tag>
      );
    },
    filter: [
      {
        text: 'Completada',
        value: 'true',
      },
      {
        text: 'Incompleta',
        value: 'false',
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
    title: 'Acción',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Ver perfil</a>
      </Space>
    ),
  },
];

const DeactiveDriversList = ({ drivers }) => {
  return (
    <DriversListContainer>
      <Table dataSource={drivers} columns={columns} />
    </DriversListContainer>
  );
};

export default DeactiveDriversList;
