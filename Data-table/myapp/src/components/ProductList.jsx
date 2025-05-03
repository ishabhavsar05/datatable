import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/products").then((res) => setProducts(res.data));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/products/${id}`).then(() => {
      setProducts(products.filter((item) => item.id !== id));
    });
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      <h2 style={styles.heading}> Product List</h2>
      <button
        onClick={() => navigate("/add")}
        style={styles.addBtn}
      >
        Add Product
      </button>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Category</th>
            <th style={styles.th}>Price</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id}>
              <td style={styles.td}>{prod.name}</td>
              <td style={styles.td}>{prod.category}</td>
              <td style={styles.td}>${prod.price}</td>
              <td style={styles.td}>
                <button onClick={() => navigate(`/edit/${prod.id}`)} style={styles.editBtn}>Edit</button>
                <button onClick={() => handleDelete(prod.id)} style={styles.deleteBtn}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  heading: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "16px"
  },
  addBtn: {
    padding: "10px 16px",
    marginBottom: "16px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  },
  th: {
    border: "1px solid #ccc",
    padding: "10px",
    backgroundColor: "#f5f5f5",
  },
  td: {
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "center",
  },
  editBtn: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "6px 12px",
    marginRight: "8px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  deleteBtn: {
    backgroundColor: "#dc3545",
    color: "white",
    padding: "6px 12px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  }
};

export default ProductList;