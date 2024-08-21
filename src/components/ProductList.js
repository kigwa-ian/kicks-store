import React, { useState } from "react";

// Define product data
const products = [
  {
    id: 1,
    name: "Nike Air Max",
    image: "/images/nikeairmax.jpeg", 
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    image: "/images/addidasultraboost.jpeg",
  },
  {
    id: 3,
    name: "Puma RS-X",
    image: "/images/pumarsx.jpeg",
  },
  {
    id: 4,
    name: "Reebok Classic",
    image: "/images/reebokclassic.jpeg",
  },
  {
    id: 5,
    name: "New Balance 990",
    image: "/images/newbalance990.jpeg",
  },
  {
    id: 6,
    name: "Asics Gel-Kayano",
    image: "/images/asicsgelkayano.jpeg",
  },
  {
    id: 7,
    name: "Under Armour HOVR",
    image: "/images/underarmourhovr.jpg",  
  },
  {
    id: 8,
    name: "Vans Old Skool",
    image: "/images/vansoldskool.jpeg",
  },
  {
    id: 9,
    name: "Converse Chuck Taylor",
    image: "/images/conversechucktaylor.jpeg",
  },
  {
    id: 10,
    name: "Hoka One One Bondi",
    image: "/images/hokaoneonebondi.jpg",  
  },
];

const ProductList = () => {
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <button onClick={() => addToCart(product)}>Buy</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
