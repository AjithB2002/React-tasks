import React, { useState } from 'react';

const CartItem = ({ item }) => 
<div>
  {item.name} - ${item.price}
</div>;

const CartFooter = ({ totalPrice }) => 
<div>
  Total Price: ${totalPrice}
  </div>;

const ShoppingCart = ({ cartItems, totalPrice, onAddItem, onRemoveItem }) => (
  <div>
    {cartItems.map((item) => (
      <div key={item.id}>
        <CartItem item={item} />
        <button className='btn btn-info' onClick={() => onRemoveItem(item.id)}>Remove</button>
      </div>
    ))}
    <CartFooter totalPrice={totalPrice} />
    <button className='btn btn-info' onClick={onAddItem}>Add Item</button>
  </div>
);

const StateLiftup = () => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = () => {
    setCartItems([
      ...cartItems,
      {
        id: Date.now(),
        name: 'Item',
        price: Math.floor(Math.random() * 100) + 1,
      },
    ]);
  };

  const removeItem = (id) => {
    setCartItems(
      cartItems.filter((item) => item.id !== id)
    );
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <>

    <div className='container text-center'>
      <h4>State Lift-Up and Props Drilling</h4>
      <ShoppingCart
        cartItems={cartItems}
        totalPrice={totalPrice}
        onAddItem={addItem}
        onRemoveItem={removeItem}
      />
    </div>
    <hr className='mt-5' />
    </>
  );
};

export default StateLiftup;

