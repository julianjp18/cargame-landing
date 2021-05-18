import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styled from "styled-components";
import { DANGER_COLOR, ORANGE_COLOR, PRIMARY_COLOR, SECOND_COLOR, WHITE_COLOR } from "../../utils/colors";
import './allPages.scss';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFInfoContainer = styled.div`
  margin-top: 5px;
`;

const PagesInfo = styled.p`
  margin-bottom: 2px;
`;

const Button = styled.button`
  margin-right: 10px;
  padding: 10px 20px;
  background: linear-gradient(55.05deg, ${ORANGE_COLOR} 0%, ${DANGER_COLOR} 100%);
  border: 0;
  border-radius: 20px;
  color: ${WHITE_COLOR};
  transition: 0.2s;

  &:hover {
    background: linear-gradient(55.05deg, ${SECOND_COLOR} 0%, ${PRIMARY_COLOR} 100%);
    cursor: pointer;
    color: ${ORANGE_COLOR};
  }
`;

export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const { pdf } = props;

  return (
    <>
      <PDFInfoContainer>
        <PagesInfo>
          Página {pageNumber || (numPages ? 1 : "--")} de {numPages || "--"}
        </PagesInfo>
        <Button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Anterior
        </Button>
        <Button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Siguiente
        </Button>
      </PDFInfoContainer>
      <Document
        file={pdf}
        options={{
          workerSrc: "pdf.worker.js",
          cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
          cMapPacked: true,
        }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </>
  );
};

