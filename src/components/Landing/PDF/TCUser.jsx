import React from 'react';
import TCUserPDF from '../../assets/PDF/T&C_user.pdf';
import AllPages from './AllPages';

const TCUser = () => {

  return (
    <div>
      <AllPages pdf={TCUserPDF} />
    </div>
  );
};

export default TCUser;