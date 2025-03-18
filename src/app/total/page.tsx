"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const TotalBill = () => {
  const searchParams = useSearchParams();
  const cartItems = searchParams.get('cartItems'); // Get cart items from query parameters
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cartItems) {
      const parsedItems = JSON.parse(cartItems);
      setItems(parsedItems);
      const totalAmount = parsedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      setTotal(totalAmount);
    }
  }, [cartItems]);

  return (
    <div className="p-4">
      <h2 className="font-bold text-2xl mb-4">Total Bill</h2>
      {items.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div className="flex flex-wrap">
          {items.map((item, index) => (
            <div key={index} className="max-w-xs rounded overflow-hidden shadow-lg m-4">
              <div className="p-4">
                <h3 className="font-bold text-xl">{item.name}</h3>
                <p className="text-gray-700">{item.description}</p>
                <p className="font-semibold text-lg">
                  Price: ${item.price} x {item.quantity}
                </p>
                <p className="font-semibold text-lg">
                  Total: ${item.price * item.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      <h3 className="font-bold text-xl mt-6">Total Amount: ${total}</h3>
    </div>
  );
};

export default TotalBill;
