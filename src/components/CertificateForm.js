import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

const CertificateForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: "500px",
        margin: "auto",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#fafafa",
      }}
    >
      <Typography variant="h4" gutterBottom textAlign="center" color="primary">
        Certificate Generator
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
          variant="outlined"
        />
        <TextField
          label="Course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          fullWidth
          required
          variant="outlined"
        />
        <TextField
          label="Date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          type="date"
          fullWidth
          required
          InputLabelProps={{ shrink: true }}
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
        >
          Generate Certificate
        </Button>
      </Box>
    </Paper>
  );
};

export default CertificateForm;
