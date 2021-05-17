import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import PrivacyPolicyPDF from '../../assets/PDF/Política_de_Privacidad.pdf';

const PrivacyPolicy = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={PrivacyPolicyPDF}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Página {pageNumber} de {numPages}</p>
    </div>
  );
};

export default PrivacyPolicy;