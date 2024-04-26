import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../Cartsclice/cartSclice";

function Cart() {
  const dispatch = useDispatch();
  const cartdata = useSelector((state) => state.cart.item);
  console.log(cartdata);

  const removeFromCart = (id) => {
    dispatch(removeItem(id));
    console.log(id);
  };

  // Calculate total price
  const totalPrice = cartdata.reduce((acc, item) => acc + item.price, 0);

  // Check if totalPrice is a finite number before formatting
  const formattedTotalPrice = Number.isFinite(totalPrice) ? totalPrice.toFixed(2) : totalPrice;

  return (
    <div className="bg-white pt-20">
      <div className="w-full mx-auto bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

        <div className="space-y-4">
          {cartdata.map((item) => (
            <div key={item._id} className="flex justify-between items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-36 h-36 object-cover rounded"
              />
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-gray-500">Price: {item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item._id)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Remove item
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <p className="text-xl font-bold">Total Price: ${formattedTotalPrice}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
