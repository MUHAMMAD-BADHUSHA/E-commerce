import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getProducts');
        setProducts(response.data);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return (

    <div className='container mt-5'>
      {products.map((product) => (
        <div key={product._id} className="card " style={{ width: '14rem' }}>
          <img src={product.ProductImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.productName}</h5>
            <p className="card-text">
              {product.productDescription}
            </p>
            <p className="card-text">
              {product.price}
            </p>
            <a href="#" className="btn btn-primary">
              Add to cart
            </a>
          </div>
        </div>))


      }

    </div>
  )
}

export default Products