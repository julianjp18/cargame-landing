import { Table } from 'antd';
import React from 'react';
import styled from 'styled-components';

const UsersListContainer = styled.div`
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
    title: 'Referido',
    dataIndex: 'referidNumber',
    key: 'referidNumber',
    render: (referidNumber) => {
      return !referidNumber ? 'N/A' : referidNumber;
    },
  },
];

const UsersList = ({ users }) => {
  return (
    <UsersListContainer>
      <Table dataSource={users} columns={columns} />
    </UsersListContainer>
  );
};

export default UsersList;