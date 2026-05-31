import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">🛒 Cart is Empty</h1>
        <Link to="/">
          <button className="mt-4 bg-black text-white px-4 py-2 rounded">
            Go Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Cart</h1>

      {cart.map((item) => (
        <div key={item.id} className="border p-4 mt-3">
          <h2 className="font-bold">{item.name}</h2>
          <p>₹{item.price}</p>

          <div className="flex gap-2 items-center mt-2">
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span>{item.qty}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-500 text-white px-3 py-1 mt-2"
          >
            Remove
          </button>
        </div>
      ))}

      <h2 className="mt-4 font-bold text-xl">
        Total: ₹{total}
      </h2>

      <Link to="/checkout">
        <button className="bg-green-600 text-white px-4 py-2 mt-4 w-full">
          Checkout
        </button>
      </Link>
    </div>
  );
};

export default Cart;