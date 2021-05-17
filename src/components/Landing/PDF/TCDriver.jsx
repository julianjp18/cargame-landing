import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import TCDriverPDF from '../../assets/PDF/T&C_driver.pdf';

const TCDriver = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={TCDriverPDF}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Página {pageNumber} de {numPages}</p>
    </div>
  );
};

export default TCDriver;