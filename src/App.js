import React, { useRef, useState } from "react";
import CertificateForm from "./components/CertificateForm";
import CertificatePreview from "./components/CertificatePreview";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Button, Box } from "@mui/material";

const App = () => {
  const [certificateDetails, setCertificateDetails] = useState(null);
  const certificateRef = useRef();

  const generatePDF = () => {
    const input = certificateRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("landscape");
      pdf.addImage(imgData, "PNG", 0, 0, 297, 210); // A4 dimensions in mm
      pdf.save("certificate.pdf");
    });
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {!certificateDetails ? (
        <CertificateForm onSubmit={setCertificateDetails} />
      ) : (
        <div>
          <CertificatePreview
            ref={certificateRef}
            details={certificateDetails}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={generatePDF}
            sx={{ marginTop: "20px" }}
          >
            Download PDF
          </Button>
        </div>
      )}
    </Box>
  );
};

export default App;
