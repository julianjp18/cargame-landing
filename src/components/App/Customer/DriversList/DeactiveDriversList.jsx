import { Space, Table, Tag } from 'antd';
import moment from 'moment';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../../utils/colors';
import { firestoreDB } from '../../../utils/firebase';

const DriversListContainer = styled.div`
  margin: 20px 40px;
`;

const SeeProfileSpan = styled.span`
  color: ${PRIMARY_COLOR};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const getDriverDocuments = async (record) => {
  const {
    drivenLicenseBack_document,
    drivenLicenseFront_document,
    driverPhoto_document,
    identificationBack_document,
    identificationFront_document,
  } = record;

  let documents = {
    drivenLicenseBack_document,
    drivenLicenseFront_document,
    driverPhoto_document,
    identificationBack_document,
    identificationFront_document,
  };

  const data = firestoreDB.collection("VehiclesList");

    data.onSnapshot((vehicles) => {
      const newVehiclesList = [];

      vehicles.forEach((vehicle) => {
        if (vehicle.data().idDriver === record.id || vehicle.id === record.id) {
          newVehiclesList.push({
            ...vehicle.data(),
            key: vehicle.id,
          });
        }
      });

      if (newVehiclesList.length > 0)
        documents = {
          ...documents,
          vehiclesList: newVehiclesList,
        };
    });

  return {
    ...record,
    documents,
  };
};


const DeactiveDriversList = ({ drivers, viewDriver }) => {
  const history = useHistory();
  const seeDriver = async (record) => {
    const documents = await getDriverDocuments(record);
    viewDriver(documents);
    history.push('/driver-profile');
  };
  
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
          value: 'Completada',
        },
        {
          text: 'Incompleta',
          value: 'Incompleta',
        },
      ],
      onFilter: (value, record) => {
        if (record.isInfoCompleted) return record.isInfoCompleted.indexOf(value) === 0;
      },
      sorter: (a, b) => {
        if (a.isInfoCompleted && b.isInfoCompleted)
          return a.isInfoCompleted.length - b.isInfoCompleted.length;
      },
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Verificado',
      key: 'isVerified',
      render: (text, record) => {
        let returnisVerified = record.isVerified;
        if (returnisVerified) returnisVerified = 'Verificado';
        else returnisVerified = 'No verificado';
        return (
          <Tag color={record.isVerified ? 'green' : 'volcano'} key={returnisVerified}>
            {returnisVerified.toUpperCase()}
          </Tag>
        );
      },
      filter: [
        {
          text: 'Verificado',
          value: 'Verificado',
        },
        {
          text: 'No verificado',
          value: 'No verificado',
        },
      ],
      onFilter: (value, record) => {
        if (record.isVerified) return record.isVerified.indexOf(value) === 0;
      },
      sorter: (a, b) => {
        if (a.isVerified && b.isVerified)
          return a.isVerified.length - b.isVerified.length;
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
      width: 100,
    },
    {
      title: 'Acción',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <SeeProfileSpan onClick={() => seeDriver(record)}>Ver perfil</SeeProfileSpan>
        </Space>
      ),
    },
  ];

  return (
    <DriversListContainer>
      <Table dataSource={drivers} columns={columns} />
    </DriversListContainer>
  );
};

export default DeactiveDriversList;
