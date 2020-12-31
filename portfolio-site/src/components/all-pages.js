import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import './all-pages.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const onDocumentError = (err) => {
    console.error('pdf viewer error:', err);
  }
  const { pdf } = props;

  return (
      <Document
        file={pdf}
        onDocumentError={onDocumentError}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
  );
}
