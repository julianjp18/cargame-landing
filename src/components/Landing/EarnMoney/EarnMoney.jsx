import { Col, Table } from 'antd';
import React from 'react';
import firstPlanVideo from '../../assets/videos/Referido.mp4';
import ItemOne from '../../assets/images/new-version/embajadores.svg';
import ItemTwo from '../../assets/images/new-version/mil_usuarios.svg';
import { PRIMARY_COLOR, WHITE_COLOR } from '../../utils/colors';
import styled from 'styled-components';
import './earnMoney.scss';

const RowAnt = styled.div`
  padding: 50px 0;
  background-color: ${PRIMARY_COLOR};
  box-shadow: 2px 10px 28px rgba(75, 0, 129, 0.12);
`;

const RowAntTwo = styled.div`
  padding: 0 150px;
  margin-bottom: 40px;
  background-color: ${PRIMARY_COLOR};

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const ColAnt = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 20px 150px;
  }

  @media (max-width: 520px) {
    padding: 2px;
  }
`;

const EarnTitle = styled.p`
  font-family: Ruda;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 78px;
  text-align: center;
  color: ${WHITE_COLOR};

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const EmbassadorsImage = styled.img`

`;

const EmbassadorsTitle = styled.p`
  font-family: Ruda;
  font-style: normal;
  font-weight: normal;
  font-size: 30.2425px;
  line-height: 37px;
  text-align: center;
  color: ${WHITE_COLOR};
`;

const EmbassadorsDescription = styled.p`
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: ${WHITE_COLOR};
`;

const UsersImage = styled.img`

`;

const VideoSubTitle = styled.p`
  margin-left: 10px;
  text-align: start;
  font-family: Quicksand;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: ${WHITE_COLOR};
`;

const VideoTitle = styled.p`
  margin-left: 10px;
  text-align: start;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 46px;
  letter-spacing: 0.02em;
  color: ${WHITE_COLOR};

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const VideoContainer = styled.div`
  padding: 0 10px;
`;

const UsersTitle = styled.p`
  font-family: Ruda;
  font-style: normal;
  font-weight: normal;
  font-size: 30.2425px;
  line-height: 37px;
  text-align: center;
  color: ${WHITE_COLOR};
`;

const UsersDescription = styled.p`
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: ${WHITE_COLOR};
`;

const dataSource = [
  {
    key: '1',
    users: '100',
    bonification: 'Cop ($)50.000',
    referids: 'Todos los usuarios harán parte de los referidos del colaborador, es decir, también generaran el 1% del plan embajadores.',
  },
  {
    key: '2',
    users: '300',
    bonification: 'Cop ($)150.000',
    referids: '',
  },
  {
    key: '3',
    users: '500',
    bonification: 'Cop ($)200.000',
    referids: '',
  },
  {
    key: '4',
    users: '700',
    bonification: 'Cop ($)300.000',
    referids: '',
  },
  {
    key: '5',
    users: '1.000',
    bonification: 'Cop ($)500.000',
    referids: '',
  },
];

const columns = [
  {
    title: 'Usuarios',
    dataIndex: 'users',
    key: 'users',
  },
  {
    title: 'Bonificación',
    dataIndex: 'bonification',
    key: 'bonification',
    width: 300,
  },
  {
    title: '% referidos',
    dataIndex: 'referids',
    key: 'referids',
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };
      if (index === 0) {
        obj.props.rowSpan = 5;
      } else {
        obj.props.rowSpan = 0;
      }
      return obj;
    },
    responsive: ['md'],
  },
];

const EarnMoney = () => (
  <RowAnt id="earn-money" className="ant-row">
    <Col xs={24}>
      <EarnTitle>¿Cómo ganar dinero?</EarnTitle>
    </Col>
    <Col xs={24}>
      <RowAntTwo className="ant-row">
        <ColAnt className="ant-col ant-col-xs-24 ant-col-md-6">
          <EmbassadorsImage src={ItemOne} alt="embassadors" />
          <EmbassadorsTitle>Plan embajadores</EmbassadorsTitle>
          <EmbassadorsDescription>Puedes ganar dinero extra con CÁRGAME.</EmbassadorsDescription>
          <EmbassadorsDescription>
            Es muy fácil, solo debes recomendar a tus conocidos nuestra plataforma y listo!
          </EmbassadorsDescription>
        </ColAnt>
        <Col xs={24} md={18}>
          <VideoContainer>
            <video style={{ maxWidth: '100%' }} controls src={firstPlanVideo} type="video/mp4" />
          </VideoContainer>
          <VideoSubTitle>Video</VideoSubTitle>
          <VideoTitle>Plan embajadores</VideoTitle>
        </Col>
      </RowAntTwo>
    </Col>
    <Col xs={24}>
      <RowAntTwo className="ant-row">
        <ColAnt className="ant-col ant-col-xs-24 ant-col-md-6">
          <UsersImage src={ItemTwo} alt="users" />
          <UsersTitle>Plan mil usuarios</UsersTitle>
          <UsersDescription>
            Para incentivarte a usar nuestra plataforma, hemos creado para ti el plan 1000 Usuarios.
          </UsersDescription>
          <UsersDescription>Ahora puedes ganar dinero refiriendo a tus conocidos y amigos.</UsersDescription>
        </ColAnt>
        <Col className="earn-money-table-col" xs={24} md={18}>
          <Table
            dataSource={dataSource}
            pagination={{ position: ['none', 'none'] }}
            columns={columns}
          />
        </Col>
      </RowAntTwo>
    </Col>
  </RowAnt>
);

export default EarnMoney;
