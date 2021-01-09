
import React from "react";
import AllPagesPDFViewer from "../components/all-pages"

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "../components/SWEResume.pdf";

export default function Resume() {
  return (
    <div>
        <AllPagesPDFViewer pdf={samplePDF} />
    </div>
  );
}
