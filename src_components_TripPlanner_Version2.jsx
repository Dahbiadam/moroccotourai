import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Paper } from "@mui/material";
import axios from "axios";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

export default function TripPlanner() {
  const [form, setForm] = useState({
    city: "",
    time: "",
    mood: "",
    budget: "",
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult(null);
    try {
      const res = await axios.post(`${backendUrl}/plan-trip`, form);
      setResult(res.data);
    } catch (error) {
      setResult({ error: error.response?.data?.detail || "Error planning trip" });
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ padding: 3, marginTop: 4 }}>
        <Typography variant="h5" gutterBottom>
          Plan Your Morocco Trip
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField label="City" name="city" value={form.city} onChange={handleChange} required />
          <TextField label="Time of Day" name="time" value={form.time} onChange={handleChange} required />
          <TextField label="Mood" name="mood" value={form.mood} onChange={handleChange} required />
          <TextField label="Budget" name="budget" value={form.budget} onChange={handleChange} required />
          <Button type="submit" variant="contained">Plan Trip</Button>
        </Box>
        {result && (
          <Box sx={{ marginTop: 3 }}>
            <Typography variant="h6">Result:</Typography>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </Box>
        )}
      </Paper>
    </Container>
  );
}