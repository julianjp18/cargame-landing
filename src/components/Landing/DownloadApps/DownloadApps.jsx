import { Row, Col } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { PRIMARY_BUTTON_BG_COLOR } from '../../utils/colors';

const DownloadContainer = styled.div`
margin: 15px 0;
font-size: 25px;
color: ${props => props.color};
`;

const Button = styled.button`
background: transparent;
border: 0;
font-size: 40px;
cursor: pointer;

&:hover {
  color: ${PRIMARY_BUTTON_BG_COLOR};
}
`;

const IContent = styled.i`
padding-left: 18px;
color: ${props => props.color};

&:hover {
  color: ${PRIMARY_BUTTON_BG_COLOR}
}
`;

const DownloadsApps = ({ color }) => (
  <Row>
    <Col xs={24}>
      <DownloadContainer color={color}>
        <p>
          Disponible en:
            <Button><IContent color={color} className="fab fa-google-play" /></Button>
          <Button><IContent className="fab fa-app-store-ios" /></Button>
        </p>
      </DownloadContainer>
    </Col>
  </Row>
);

export default DownloadsApps;

