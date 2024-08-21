import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Login from "./components/Login";
import Cart from "./components/Cart";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="app">
      <h1>Shoe Shopping App</h1>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <ProductList addToCart={addToCart} />
          <Cart items={cartItems} />
        </>
      )}
    </div>
  );
}

export default App;
