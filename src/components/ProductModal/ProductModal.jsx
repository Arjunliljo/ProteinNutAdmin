import React, { useState } from 'react';

// Image icon SVG component
const ImageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <polyline points="21 15 16 10 5 21"/>
  </svg>
);

// Modal Component
const ProductModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [productName, setProductName] = useState('Smart Watches');
  const [brandName, setBrandName] = useState('Astro Retail');
  const [category, setCategory] = useState('Electronics');
  const [regularPrice, setRegularPrice] = useState('280');
  const [offerPercentage, setOfferPercentage] = useState('$180');
  const [weight, setWeight] = useState('0,200');
  const [stockStatus, setStockStatus] = useState('In Stock');
  const [quantityInStock, setQuantityInStock] = useState('1234');
  const [units, setUnits] = useState('Pieces');
  const [statistics, setStatistics] = useState('Best Seller');
  const [description, setDescription] = useState('Ut tortor ex, pellentesque nec volutpat vel, congue eu nibh. Sed posuere ipsum ut ornare ultrices. Aliquam condimentum ultricies lacinia. Aenean ac dolor mauris. Curabitur cursus mi ac urna vestibulum consectetur. Praesent vulputate eleifend ipsum at ultrices. Proin sed elementum diam, in ullamcorper risus');

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Product</h2>
        <div className="modal-body">
          <div className="left-column">
            <h3>Product Images</h3>
            <div className="image-grid">
              <div className="image-placeholder large">
                <ImageIcon />
                <span>Browse Image</span>
              </div>
              <div className="image-placeholder large">
                <ImageIcon />
                <span>Browse Image</span>
              </div>
              <div className="small-images-column">
                <div className="image-placeholder small">
                  <ImageIcon />
                  <span>Browse Image</span>
                </div>
                <div className="image-placeholder small">
                  <ImageIcon />
                  <span>Browse Image</span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
          </div>
          <div className="right-column">
            <div className="form-group">
              <label>Product Name</label>
              <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Brand Name</label>
                <select value={brandName} onChange={(e) => setBrandName(e.target.value)}>
                  <option value="Astro Retail">Astro Retail</option>
                </select>
              </div>
              <div className="form-group">
                <label>Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="Electronics">Electronics</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Regular Price</label>
                <input type="text" value={regularPrice} onChange={(e) => setRegularPrice(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Offer %</label>
                <select value={offerPercentage} onChange={(e) => setOfferPercentage(e.target.value)}>
                  <option value="$180">$180</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Weight,kg</label>
                <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Stock status</label>
                <select value={stockStatus} onChange={(e) => setStockStatus(e.target.value)}>
                  <option value="In Stock">In Stock</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Quantity in stock</label>
                <input type="text" value={quantityInStock} onChange={(e) => setQuantityInStock(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Units</label>
                <select value={units} onChange={(e) => setUnits(e.target.value)}>
                  <option value="Pieces">Pieces</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Statistics</label>
              <select value={statistics} onChange={(e) => setStatistics(e.target.value)}>
                <option value="Best Seller">Best Seller</option>
              </select>
            </div>
          </div>
        </div>
        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="publish-btn">Publish Product</button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
