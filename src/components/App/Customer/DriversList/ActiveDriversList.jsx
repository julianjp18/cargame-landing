import { Table } from 'antd';
import moment from 'moment';
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
    title: 'Fecha de registro',
    dataIndex: 'created_at',
    key: 'created_at',
    filterMultiple: false,
    onFilter: (value, record) => {
      if (record.created_at) return record.created_at.indexOf(value) === 0;
    },
    render: (createdAt) => {
      return moment(createdAt).format('DD-MM-YYYY');
    },
    sorter: (a, b) => {
      if (a.created_at && b.created_at)
        return a.created_at.length - b.created_at.length;
    },
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Fecha de activación',
    dataIndex: 'isVerifiedDate',
    key: 'isVerifiedDate',
    filterMultiple: false,
    onFilter: (value, record) => {
      if (record.isVerifiedDate) return record.isVerifiedDate.indexOf(value) === 0;
    },
    render: (isVerifiedDate) => {
      return isVerifiedDate ? moment(isVerifiedDate).format('DD-MM-YYYY') : 'N/A';
    },
    sorter: (a, b) => {
      if (a.isVerifiedDate && b.isVerifiedDate)
        return a.isVerifiedDate.length - b.isVerifiedDate.length;
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
