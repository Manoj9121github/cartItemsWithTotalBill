import Link from 'next/link'
import React from 'react'

const Cartitems = ({ cartItems }) => {
  return (
    <div>
      <div className="p-4">
      <h2 className="font-bold text-2xl mb-4">Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div className="flex flex-wrap">
          {cartItems.map((item, index) => (
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
    </div>

    <Link href={`/total?cartItems=${JSON.stringify(cartItems)}`} className="mt-4 bg-green-500 text-white py-2 px-4 rounded">
            View Total Bill
          </Link>
      
      
    </div>
  )
}

export default Cartitems
