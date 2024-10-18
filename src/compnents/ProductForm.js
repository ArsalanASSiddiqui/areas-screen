import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    sku: '',
    promotion: '',
    beforePrice: '',
    arabic: '',
    english: '',
    area:'',
    sizeX:'',
    sizeY:'',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value, // Handle file input for image
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send both text fields and the image
    const formDataToSend = new FormData();
    formDataToSend.append('sku', formData.sku);
    formDataToSend.append('promotion', formData.promotion);
    formDataToSend.append('beforePrice', formData.beforePrice);
    formDataToSend.append('arabic', formData.arabic);
    formDataToSend.append('english', formData.english);
    formDataToSend.append('area', formData.area);
    formDataToSend.append('sizeX', formData.sizeX);
    formDataToSend.append('SizeY', formData.sizeY);
    formDataToSend.append('image', formData.image); // Append the image file

    try {
      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        body: formDataToSend, // Send the formData with the file and other fields
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Product created successfully:', data);
        alert('Product created successfully!');
      } else {
        console.error('Failed to create product:', data.error);
        alert(`Failed to create product: ${data.error}`);
      }
    } catch (error) {
      console.error('Error while creating product:', error);
      alert('Error while creating product');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Side (Welcome Section) */}
        <div className="col-md-4 bg-primary text-white d-flex flex-column justify-content-center align-items-center p-4 rounded-left">
          <h2>Welcome</h2>
          <p>You are 30 seconds away from completing your order!</p>
          <button className="btn btn-light mt-3">Go Back</button>
        </div>

        {/* Right Side (Form Section) */}
        <div className="col-md-8 bg-white p-5 rounded-right shadow-sm">
          <h4 className="mb-4 text-center">Product Details</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="sku">SKU (Barcode)</label>
                <input
                  type="text"
                  className="form-control"
                  id="sku"
                  name="sku"
                  value={formData.sku}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="promotion">Promotion</label>
                <input
                  type="number"
                  className="form-control"
                  id="promotion"
                  name="promotion"
                  value={formData.promotion}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="beforePrice">Before Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="beforePrice"
                  name="beforePrice"
                  value={formData.beforePrice}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="arabic">Arabic</label>
                <input
                  type="text"
                  className="form-control"
                  id="arabic"
                  name="arabic"
                  value={formData.arabic}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-12">
                <label htmlFor="english">English (Description)</label>
                <input
                  type="text"
                  className="form-control"
                  id="english"
                  name="english"
                  value={formData.english}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="area">Area</label>
              <select
                className="form-control"
                id="area"
                name="area"
                value={formData.area}
                onChange={handleChange}
                required
              >
                <option value="">Select Area</option>
                <option value="Saddar">Saddar</option>
                <option value="Korangi">Korangi</option>
                <option value="Defence">Defence</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="sizeX">Size (X pixels)</label>
              <input
                type="number"
                className="form-control"
                id="sizeX"
                name="sizeX"
                value={formData.sizeX}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="sizeY">Size (Y pixels)</label>
              <input
                type="number"
                className="form-control"
                id="sizeY"
                name="sizeY"
                value={formData.sizeY}
                onChange={handleChange}
                required
              />
            </div>


            <div className="form-group">
              <label htmlFor="image">Image Upload</label>
              <input
                type="file"
                className="form-control-file"
                id="image"
                name="image"
                onChange={handleChange}
                accept="image/*"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block mt-4">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
