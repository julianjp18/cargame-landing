import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import PrivacyAdsPDF from '../../assets/PDF/Aviso_de_Privacidad.pdf';

const PrivacyAds = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={PrivacyAdsPDF}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Página {pageNumber} de {numPages}</p>
    </div>
  );
};

export default PrivacyAds;