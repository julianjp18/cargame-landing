import React from 'react';
import styled from 'styled-components';
import Title from '../Title/Title';

const BusinessPlanContainer = styled.div`
`;

const BusinessPlan = () => {
  return (
    <BusinessPlanContainer>
      <Title
        title="PLAN DE NEGOCIO"
        description="Cárgame dentro de sus políticas de responsabilidad social, creó dos métodos que potencializan la generación de ingresos a usuarios que deseen vincularse y ser parte de la estrategia de mercadeo de la compañía, dichos usuarios serán denominados «Embajadores de Cárgame», ya que serán voceros e influenciadores de la marca."
        isSecond
      />
    </BusinessPlanContainer>
  );
};

export default BusinessPlan;
