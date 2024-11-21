import React, { useEffect, useState } from 'react';
import './main.css';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/product/show?producttype=추천')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <header className="navbar">
        <div className="logo">What's Product</div>
        <nav>
          <a href="#">Menu</a>
          <a href="#">Brands</a>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search Product" />
        </div>
        <div className="user-options">
          <a href="#">Cart</a>
          <a href="#">My Page</a>
        </div>
      </header>

      <section className="main-image">
        <div className="main-text">Welcome to What's Product!</div>
      </section>

      <section className="recommend-section">
        <div className="recommend-header">
          <h2>오늘의 추천</h2>
          <button className="view-all">View All</button>
        </div>
        <div className="product-list">
          {products.length > 0 ? (
            products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.name}
                img={product_thumbnailids.thumbnailid}
                rating={review.rating}
                price={product.price}
              />
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </section>
      
      <section className="recommend-section">
        <div className="recommend-header">
          <h2>오늘의 특가</h2>
          <button className="view-all">View All</button>
        </div>
        <div className="product-list">
          {products.length > 0 ? (
            products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.name}
                img={product_thumbnailids.thumbnailid}
                rating={review.rating}
                price={product.price}
              />
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </section>
    </div>
  );
};

const ProductCard = ({ title, img, rating, price }) => (
  <div className="product-card">
    <img src={img} alt={title} />
    <div className="product-info">
      <h3>{title}</h3>
      <div className="rating">{rating}</div>
      <p className="price">{price}</p>
    </div>
  </div>
);

export default App;
