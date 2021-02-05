import React from 'react';
import styled from 'styled-components';
import Title from '../../Title/Title';

const DashboardContainer = styled.div`
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Title
        title="ACERCA DE NOSOTROS"
        description="Somos una plataforma digital que búsca acercar las regiones más apartadas con las ciudades principales. Conectamos a transportadores con usuarios generadores de carga."
      />
    </DashboardContainer>
  );
};

export default Dashboard;