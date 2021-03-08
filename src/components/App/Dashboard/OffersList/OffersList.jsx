import { Table } from 'antd';
import React from 'react';
import styled from 'styled-components';

const UsersListContainer = styled.div`
  margin: 20px 40px;
`;

const columns = [
  {
    title: 'Descripción',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Fecha recogida',
    dataIndex: 'pickUpDate',
    key: 'pickUpDate',
    sorter: (a, b) => {
      if (a.pickUpDate && b.pickUpDate)
        return a.pickUpDate.length - b.pickUpDate.length;
    },
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Telefono de quien recibe',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Servicio',
    dataIndex: 'typeServiceSelected',
    key: 'typeServiceSelected',
    render: (typeServiceSelected) => {
      let returnTypeServiceSelected = typeServiceSelected;
      if (typeServiceSelected === 'package') returnTypeServiceSelected = 'Paquete';
      else if (typeServiceSelected === 'crane') returnTypeServiceSelected = 'Grúa';
      else if (typeServiceSelected === 'document') returnTypeServiceSelected = 'Documento';
      else if (typeServiceSelected === 'door') returnTypeServiceSelected = 'Puerta a puerta';
      return returnTypeServiceSelected;
    },
    filters: [
      {
        text: 'Paquete',
        value: 'package',
      },
      {
        text: 'Grúa',
        value: 'crane',
      },
      {
        text: 'Documento',
        value: 'document',
      },
      {
        text: 'Puerta a puerta',
        value: 'door',
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => {
      if (record.typeServiceSelected) return record.typeServiceSelected.indexOf(value) === 0;
    },
    sorter: (a, b) => {
      if (a.typeServiceSelected && b.typeServiceSelected)
        return a.typeServiceSelected.length - b.typeServiceSelected.length;
    },
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Usuario',
    dataIndex: 'user',
    key: 'user',
    render: (user) => user ? `${user.name} - ${user.phone}` : '',
  },
  {
    title: 'Transportador',
    dataIndex: 'driver',
    key: 'driver',
    render: (driver) => driver ? `${driver.name} - ${driver.phone}` : '',
  },
  {
    title: 'Ciudad origen',
    dataIndex: 'currentCity',
    key: 'currentCity',
  },
  {
    title: 'Ciudad destino',
    dataIndex: 'destinationCity',
    key: 'destinationCity',
  },
  {
    title: 'Valor oferta',
    dataIndex: 'offerValue',
    key: 'offerValue',
    sorter: (a, b) => a.offerValue - b.offerValue,
  },
  {
    title: 'Estado',
    dataIndex: 'status',
    key: 'status',
    render: (status) => {
      let returnStatus = status;
      if (status === 'IN_PROGRESS') returnStatus = 'EN PROGRESO';
      else if (status === 'ACTIVE') returnStatus = 'ACTIVA';
      else if (status === 'EXPIRED') returnStatus = 'EXPIRADA';
      else if (status === 'DONE') returnStatus = 'FINALIZADA';
      return returnStatus;
    },
    filters: [
      {
        text: 'EN PROGRESO',
        value: 'IN_PROGRESS',
      },
      {
        text: 'ACTIVA',
        value: 'ACTIVE',
      },
      {
        text: 'EXPIRADA',
        value: 'EXPIRED',
      },
      {
        text: 'FINALIZADA',
        value: 'DONE',
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => {
      if (record.status) return record.status.indexOf(value) === 0;
    },
    sorter: (a, b) => {
      if (a.status && b.status) return a.status.length - b.status.length;
    },
    sortDirections: ['descend', 'ascend'],
  },
];

const OffersList = ({ offers }) => {
  return (
    <UsersListContainer>
      <Table dataSource={offers} columns={columns} />
    </UsersListContainer>
  );
};

export default OffersList;