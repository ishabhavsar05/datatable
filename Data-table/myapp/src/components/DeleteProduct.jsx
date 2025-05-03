import { API } from "../api";

const DeleteProduct = ({ id, onDelete }) => {
  const handleDelete = async () => {
    await API.delete(`/products/${id}`);
    alert("Deleted!");
    onDelete(); // refresh list
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteProduct;
