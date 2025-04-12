// Panier.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addPanier, removePanier, clearPanier } from "./panierActions";
import { addPanier , removePanier, clearPanier } from "./actions/panierActions";
import toast from "react-hot-toast";

const Cart = () => {
  const dispatch = useDispatch();
  const panier = useSelector((state) => state.panier);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPanier({ name, price, quantity }));
    toast.success("Panier added successfully");
    setName("");
    setPrice("");
    setQuantity("");
  };

  const handleDelete = (id) => {
    toast.error("Panier deleted successfully");
    dispatch(removePanier(id));
  };

  return (
    <div className="p-4">
      <h1>Panier</h1>
      <div className="flex justify-between gap-20">
        <div className="w-1/2 border border-gray-300 p-4">
          <h2 className="text-2xl font-bold border-b mb-4">Add Panier</h2>
          <form onSubmit={handleSubmit} className="">
            <input
              className="w-full p-2 border my-10 border-gray-300 rounded"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="w-full p-2 border my-10 border-gray-300 rounded"
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              className="w-full p-2 border my-10 border-gray-300 rounded"
              type="number"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Panier
            </button>
          </form>
        </div>

        <div className="w-1/2 border border-gray-300 p-4">
          <h2 className="text-2xl font-bold border-b mb-4">Panier</h2>
          {panier.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete Panier
              </button>
            </div>
          ))}
          <button
            onClick={() => dispatch(clearPanier())}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded dark:bg-red-500 dark:hover:bg-red-700"
          >
            Clear Panier
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
