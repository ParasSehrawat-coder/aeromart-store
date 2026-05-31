import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { products } from "../data/products";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === id);

  const handleAdd = () => {
    addToCart(product);
    toast.success("Added to cart 🛒");
  };

  return (
    <div className="p-6">
      <img src={product.image} className="w-60 rounded-xl" />

      <h1 className="text-2xl font-bold mt-3">{product.name}</h1>
      <p className="text-gray-500">{product.description}</p>

      <h2 className="text-xl mt-2">₹{product.price}</h2>

      <button
        onClick={handleAdd}
        className="bg-black text-white px-4 py-2 mt-4"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;