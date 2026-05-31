import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const placeOrder = () => {
    if (!name || !address) {
      toast.error("Fill all details");
      return;
    }

    toast.success("Order Placed 🎉");

    setTimeout(() => {
      navigate("/success");
    }, 1000);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Checkout</h1>

      <div className="border p-3 mt-4">
        {cart.map((item) => (
          <p key={item.id}>
            {item.name} × {item.qty} = ₹{item.price * item.qty}
          </p>
        ))}

        <h2 className="font-bold mt-2">Total: ₹{total}</h2>
      </div>

      <input
        className="border p-2 mt-4 block w-full"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="border p-2 mt-2 block w-full"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <button
        onClick={placeOrder}
        className="bg-green-600 text-white px-4 py-2 mt-4 w-full"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;