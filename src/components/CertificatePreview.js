import React from "react";

const CertificatePreview = React.forwardRef(({ details }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        width: "800px",
        height: "600px",
        padding: "40px",
        textAlign: "center",
        fontFamily: '"Times New Roman", Times, serif',
        backgroundImage: 'url("/logo.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        color: "#333",
        borderRadius: "10px",
      }}
    >
      {/* Certificate Title */}
      {/* <h1
        style={{
          fontSize: "36px",
          marginTop: "20px",
          color: "#2e7d32",
          textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
        }}
      >
        Certificate of Completion
      </h1> */}
      {/* Subtitle */}
      {/* <p style={{ fontSize: "18px", margin: "20px 0" }}>This certifies that</p> */}
      {/* Recipient Name */}
      <h2
        style={{
          fontSize: "28px",
          color: "#1a237e",
          textTransform: "uppercase",
          margin: "273px 209px",
          marginRight: "-237px",
        }}
      >
        {details.name}
      </h2>
      {/* Course Text */}
      {/* <p style={{ fontSize: "18px", margin: "10px 0" }}>
        has successfully completed the course
      </p> */}
      {/* Course Name */}
      {/* <h3
        style={{
          fontSize: "24px",
          color: "#c62828",
          margin: "10px 0",
        }}
      >
        {details.course}
      </h3> */}
      {/* Date */}
      {/* <p style={{ fontSize: "18px", margin: "10px 0" }}>on</p>
      <h3
        style={{
          fontSize: "20px",
          color: "#424242",
          margin: "10px 0",
        }}
      >
        {details.date}
      </h3> */}
      {/* Footer with Signature */}
      {/* <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "40px",
          right: "40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      > */}
      {/* <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "200px",
              height: "1px",
              backgroundColor: "#333",
              margin: "0 auto 5px",
            }}
          ></div>
          <span style={{ fontSize: "14px" }}>Authorized Signature</span>
        </div> */}
      {/* <img
          src="https://via.placeholder.com/50"
          alt="Seal"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          }}
        /> */}
      {/* </div> */}
    </div>
  );
});

export default CertificatePreview;
