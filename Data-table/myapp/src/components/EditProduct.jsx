import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const [form, setForm] = useState({ name: "", category: "", price: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/products/${id}`).then((res) => setForm(res.data));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/products/${id}`, form).then(() => navigate("/"));
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle.container}>
      <h2 style={formStyle.heading}> Edit Product</h2>
      <input name="name" value={form.name} onChange={handleChange} style={formStyle.input} />
      <input name="category" value={form.category} onChange={handleChange} style={formStyle.input} />
      <input name="price" value={form.price} onChange={handleChange} style={formStyle.input} />
      <button type="submit" style={formStyle.submit}>Update</button>
    </form>
  );
};

const formStyle = {
  container: { maxWidth: "500px", margin: "auto", display: "flex", flexDirection: "column", gap: "10px" },
  heading: { fontSize: "22px", marginBottom: "10px" },
  input: { padding: "10px", fontSize: "16px" },
  submit: { padding: "10px", backgroundColor: "#ffc107", color: "black", border: "none", borderRadius: "4px" }
};

export default EditProduct;