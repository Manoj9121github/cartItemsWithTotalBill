"use client";

import Image from "next/image";
import Cartitems from "./cartitems/cartitems";
import Menuitems from "./menuitem/menuitems";
import { useState } from "react";

export default function Home() {
  const [cartItems, setCartItems] = useState([]);

  const menuItems = [
    { name: "Pizza", description: "Delicious cheese pizza", price: 10 },
    { name: "Burger", description: "Juicy beef burger", price: 8 },
    { name: "Sushi", description: "Fresh sushi rolls", price: 12 },
  ];

  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  return (
    <div>
      <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold my-4">Menu</h1>
      <div className="flex flex-wrap justify-center">
        {menuItems.map((item, index) => (
          <Menuitems key={index} item={item} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <Cartitems cartItems={cartItems} />
    </div>
    </div>
  );
}
