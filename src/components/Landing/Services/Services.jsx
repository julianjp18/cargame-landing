import React from 'react';
import styled from 'styled-components';
import Title from '../Title/Title';

const ServicesContainer = styled.div`
`;

const Services = () => {
  return (
    <ServicesContainer>
      <Title
        title="SERVICIOS"
        description="Aprovechamos los espacios vacios de los transportadores para que las personas se puedan transportar y/o envíar su carga o encomiendas."
      />
    </ServicesContainer>
  );
};

export default Services;