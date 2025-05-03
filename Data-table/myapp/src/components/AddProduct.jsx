import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [form, setForm] = useState({ name: "", category: "", price: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/products", form).then(() => navigate("/"));
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle.container}>
      <h2 style={formStyle.heading}>➕ Add Product</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Product Name" style={formStyle.input} required />
      <input name="category" value={form.category} onChange={handleChange} placeholder="Category" style={formStyle.input} required />
      <input name="price" value={form.price} onChange={handleChange} placeholder="Price" type="number" style={formStyle.input} required />
      <button type="submit" style={formStyle.submit}>Submit</button>
    </form>
  );
};

const formStyle = {
  container: { maxWidth: "500px", margin: "auto", display: "flex", flexDirection: "column", gap: "10px" },
  heading: { fontSize: "22px", marginBottom: "10px" },
  input: { padding: "10px", fontSize: "16px" },
  submit: { padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px" }
};

export default AddProduct;