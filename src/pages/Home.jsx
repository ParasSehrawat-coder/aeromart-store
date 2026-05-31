import { useState } from "react";
import { products } from "../data/products";
import { Link } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">

      {/* SEARCH BAR */}
      <input
        className="border p-2 w-full mb-6"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* PRODUCTS */}
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div className="border p-4 rounded-xl hover:scale-105 transition duration-300 hover:shadow-xl">
              <img src={product.image} className="rounded-xl" />
              <h2 className="font-bold mt-2">{product.name}</h2>
              <p>₹{product.price}</p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Home;