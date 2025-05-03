import { useEffect, useState } from "react";
import { API } from "../api";

const ProductDetails = ({ id }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    API.get(`/products/${id}`).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetails;
