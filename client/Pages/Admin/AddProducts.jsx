import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AddProduct() {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('productName', productName);
      formData.append('productDescription', productDescription);
      formData.append('category', category);
      formData.append('price', price);
      formData.append('productImage', productImage);

      const response = await axios.post('http://localhost:5000/addProduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('Product added successfully!');
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setMessage('Error adding product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="container">
        <div>
          <form className="container mt-4" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">
                Product Name:
              </label>
              <input
                type="text"
                className="form-control"
                required
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="productDescription" className="form-label">
                Product Description:
              </label>
              <textarea
                className="form-control"
                rows="3"
                required
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="productCategory" className="form-label">
                Category:
              </label>
              <input
                type="text"
                className="form-control"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="productPrice" className="form-label">
                Product Price:
              </label>
              <input
                type="number"
                id="productPrice"
                className="form-control"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="productImage" className="form-label">
                Product Image:
              </label>
              <input
                type="file"
                id="productImage"
                className="form-control"
                accept="image/*"
                required
                onChange={(e) => setProductImage(e.target.files[0])}
              />
            </div>

            <div style={{ display: 'flex' }}>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Adding...' : 'Add Product'}
              </button>
              <Link to="/">
                <button type="button" className="btn btn-secondary">
                  Cancel
                </button>
              </Link>
            </div>
          </form>
          {message && <div className="alert mt-3">{message}</div>}
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
