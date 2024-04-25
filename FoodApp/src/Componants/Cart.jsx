import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
    const cartdata = useSelector((state)=>state.cart.item)
    console.log(cartdata);
  return (
    <div>
            <nav className="bg-white">
        <div className="w-full mx-auto px-4 shadow-md p-5">
          <div className="flex justify-between items-center ">
            <div className="flex-shrink-0">
              <a href="#" className="text-black font-extrabold text-4xl">
                Zomato
              </a>
            </div>
            <div className="hidden md:flex flex-1 justify-center"></div>
           
           
          </div>
        </div>
      </nav>
      <div>
      <h2>Shopping Cart</h2>
      {cartdata.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartdata.map((item) => (
            <li key={item.id}>
              <div>
                <img src={item.image} alt={item.name} />
              </div>
              <div>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <button onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  )
}

export default Cart
