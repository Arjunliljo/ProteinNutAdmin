import React from 'react'

const getStockStatusClass = (stock) => {
  if (stock.includes("Out")) return "out-of-stock";
  if (stock.includes("Low")) return "low-inventory";
  if (stock.includes("On Demand")) return "on-demand";
  return "in-stock";
};

const ProductsTable = () => {

  const products = [
    {
      "id": 1,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4PA-ZUKVhMSZxnX1X54Fwmvh-4HL03xj6Lw&s",
      "name": "Phone 234-M Tristique sed metus",
      "sku": "12345",
      "stock": "In Stock (120)",
      "price": 280,
      "category": "Electronics",
      "statistic": "Best Seller",
      "date": "03/11/2023"
    },
    {
      "id": 2,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4PA-ZUKVhMSZxnX1X54Fwmvh-4HL03xj6Lw&s",
      "name": "Laptop Pro X900",
      "sku": "67890",
      "stock": "Low Inventory (50)",
      "price": 1500,
      "category": "Computers",
      "statistic": "Popular Choice",
      "date": "02/22/2023"
    },
    {
      "id": 3,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4PA-ZUKVhMSZxnX1X54Fwmvh-4HL03xj6Lw&s",
      "name": "Smart TV Ultra HD",
      "sku": "34567",
      "stock": "In Stock (100)",
      "price": 800,
      "category": "Electronics",
      "statistic": "Top Rated",
      "date": "01/15/2023"
    },
    {
      "id": 4,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4PA-ZUKVhMSZxnX1X54Fwmvh-4HL03xj6Lw&s",
      "name": "Wireless Headphones Pro",
      "sku": "24680",
      "stock": "Out of Stock",
      "price": 200,
      "category": "Audio",
      "statistic": "Best Value",
      "date": "04/05/2023"
    },
    {
      "id": 5,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4PA-ZUKVhMSZxnX1X54Fwmvh-4HL03xj6Lw&s",
      "name": "Gaming Console X5000",
      "sku": "13579",
      "stock": "Low Inventory (75)",
      "price": 1200,
      "category": "Games",
      "statistic": "New Release",
      "date": "03/28/2023"
    },
    {
      "id": 6,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4PA-ZUKVhMSZxnX1X54Fwmvh-4HL03xj6Lw&s",
      "name": "Smartwatch Fitness Pro",
      "sku": "98765",
      "stock": "On Demand",
      "price": 250,
      "category": "Wearables",
      "statistic": "Trending Now",
      "date": "02/08/2023"
    },
    {
      "id": 7,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4PA-ZUKVhMSZxnX1X54Fwmvh-4HL03xj6Lw&s",
      "name": "High-Speed Router X3000",
      "sku": "54321",
      "stock": "In Stock (200)",
      "price": 180,
      "category": "Networking",
      "statistic": "Customer Favorite",
      "date": "01/18/2023"
    },
    {
      "id": 8,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4PA-ZUKVhMSZxnX1X54Fwmvh-4HL03xj6Lw&s",
      "name": "Noise-Cancelling Earbuds",
      "sku": "32109",
      "stock": "Low Inventory (25)",
      "price": 180,
      "category": "Audio",
      "statistic": "Best Seller",
      "date": "04/12/2023"
    },
    {
      "id": 9,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4PA-ZUKVhMSZxnX1X54Fwmvh-4HL03xj6Lw&s",
      "name": "Portable Power Bank X500",
      "sku": "09876",
      "stock": "In Stock (150)",
      "price": 100,
      "category": "Accessories",
      "statistic": "Popular Choice",
      "date": "03/01/2023"
    },
    {
      "id": 10,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4PA-ZUKVhMSZxnX1X54Fwmvh-4HL03xj6Lw&s",
      "name": "Smart Home Security Camera",
      "sku": "76543",
      "stock": "Out of Stock",
      "price": 200,
      "category": "Security",
      "statistic": "New Release",
      "date": "02/25/2023"
    }
  ];

  return (
    <div className="table products__table">
      <table className='main_table' >
        <thead className='table_head' >
          <tr>
            <th><input type="checkbox" /></th> 
            <th>IMAGE</th> 
            <th>PRODUCT NAME</th>
            <th>STOCK</th>
            <th>PRICE</th>
            <th>CATEGORIE</th>
            <th>STATISTIC</th>
            <th>DATE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody >
          {products.slice(0, 6).map((product, index) => (
            <tr key={product.id}  index={index}>
              <td><input type="checkbox" /></td>
              <td><div className='product_image'><img src={product.image} alt={product.name} /></div></td>
              <td>{product.name}</td>
              
              <td className={`stock-status ${getStockStatusClass(product.stock)}`}>
                {product.stock}
              </td>
              <td>${product.price}</td> 
              <td>{product.category}</td>
              <td>{product.statistic}</td>
              <td>{product.date}</td>
              <td>
                <button className="edit-button">Edit</button> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductsTable