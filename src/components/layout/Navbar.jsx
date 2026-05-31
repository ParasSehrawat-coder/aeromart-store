import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="flex justify-between p-4 bg-black text-white">
      
      {/* Logo */}
      <Link to="/" className="font-bold">
        AeroMart
      </Link>

      {/* Links */}
      <div className="flex gap-4 items-center">
        <Link to="/">Home</Link>

        <Link to="/cart" className="relative">
          Cart

          {/* 🔥 CART COUNT BADGE */}
          {cart.length > 0 && (
            <span className="ml-1 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;