import React, { useState } from 'react'

const OrdersTable = () => {
  const initialOrders = [
    {
      "id": 123456,
      "product": "Phone 234-M Gray Color Tristique sed metus",
      "regularPrice": "$800",
      "salePrice": "$600",
      "address": "1234 Elm Street, Apt 5B, Springfield, IL 62701",
      "phone": "+1 (555) 123-4567",
      "category": "Electronics",
      "payment": "$600",
      "paymentStatus": "Fully Paid",
      "orderStatus": "COMPLETED"
    },
    {
      "id": 123567,
      "product": "White Jumper",
      "regularPrice": "$400",
      "address": "789 Maple Avenue, Suite 300, Oakville, ON L6J 0A5, Canada",
      "phone": "+1 (905) 845-6789",
      "category": "Fashion",
      "payment": "$180/from $4,000",
      "paymentStatus": "Partially Paid",
      "orderStatus": "CONFIRMED"
    },
    {
      "id": 123678,
      "product": "Cheese Gauda",
      "regularPrice": "$50",
      "salePrice": "$20",
      "address": "42 Rue de la Paix, 75002 Paris, France",
      "phone": "+33 1 23 45 67 89",
      "category": "Food & Drinks",
      "payment": "$0/$20",
      "paymentStatus": "Unpaid",
      "orderStatus": "CANCELED"
    },
    {
      "id": 123789,
      "product": "Express Delivery, Worldwide",
      "regularPrice": "$50/h",
      "address": "1010 Winding Creek Rd, Roseville, CA 95678",
      "phone": "+1 (916) 555-1234",
      "category": "Services",
      "payment": "$100/2h",
      "paymentStatus": "Fully Paid",
      "orderStatus": "COMPLETED"
    },
    {
      "id": 123890,
      "product": "Phone 12345 Tristique sed metus Black color",
      "regularPrice": "$800",
      "salePrice": "$600",
      "address": "221B Baker Street, London NW1 6XE, United Kingdom",
      "phone": "+44 20 7224 3688",
      "category": "Electronics",
      "payment": "$600",
      "paymentStatus": "Fully Paid",
      "orderStatus": "ON REFOUND"
    }
  ];

  const [orders, setOrders] = useState(initialOrders.slice(0, 4)); // Only use the first 4 orders
  const [activeDropdown, setActiveDropdown] = useState(null);

  const statusOptions = ['COMPLETED', 'CONFIRMED', 'CANCELED', 'ON REFOUND'];

  const getStatusClass = (status) => {
    switch(status.toUpperCase()) {
      case 'COMPLETED': return 'btn completed-btn';
      case 'CONFIRMED': return 'btn confirmed-btn';
      case 'CANCELED': return 'btn canceled-btn';
      case 'ON REFOUND': return 'btn on-refound-btn';
      default: return 'btn';
    }
  };

  const formatProductName = (name) => {
    const words = name.split(' ');
    if (words.length <= 4) return name;
    return (
      <>
        {words.slice(0, 4).join(' ')}
        <br />
        {words.slice(4).join(' ')}
      </>
    );
  };

  const formatAddress = (address) => {
    // Limit the overall address to 60 characters
    const limitedAddress = address.slice(0, 60);
    let line1 = '', line2 = '';
    const words = limitedAddress.split(' ');
    
    words.forEach(word => {
      if (line1.length + word.length <= 30) {
        line1 += (line1 ? ' ' : '') + word;
      } else if (line2.length + word.length <= 30) {
        line2 += (line2 ? ' ' : '') + word;
      }
    });

    return (
      <>
        {line1}
        {line2 && <br />}
        {line2}
      </>
    );
  };

  const changeOrderStatus = (orderId, newStatus) => {
    setOrders(prevOrders => prevOrders.map(order => 
      order.id === orderId ? { ...order, orderStatus: newStatus } : order
    ));
    setActiveDropdown(null);
  };

  const toggleDropdown = (orderId) => {
    setActiveDropdown(activeDropdown === orderId ? null : orderId);
  };

  return (
    <div className="orders__table">
      <table className='main_table'>
        <thead className='table_head'>
          <tr>
            <th className="order-column"># ORDER</th>
            <th className="product-column">PRODUCT</th>
            <th className="address-column">ADDRESS</th>
            <th className="category-column">CATEGORY</th>
            <th className="payment-column">PAYMENT</th>
            <th className="status-column">ORDER STATUS</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="order-column"><div className="cell-content">#{order.id}</div></td>
              <td className="product-column">
                <div className="cell-content">
                  <div className="product-name">{formatProductName(order.product)}</div>
                  <div className="price-info">
                    Regular Price: {order.regularPrice}
                    {order.salePrice && <><br />Sale Price: {order.salePrice}</>}
                  </div>
                </div>
              </td>
              <td className="address-column">
                <div className="cell-content">
                  <div className="formatted-address">
                    {formatAddress(order.address)}
                  </div>
                  <div className="phone-number">
                    {order.phone}
                  </div>
                </div>
              </td>
              <td className="category-column"><div className="cell-content">{order.category}</div></td>
              <td className="payment-column">
                <div className="cell-content">
                  <div>{order.payment}</div>
                  <div className="payment-status">{order.paymentStatus}</div>
                </div>
              </td>
              <td className="status-column">
                <div className="cell-content">
                  <div className="status-dropdown">
                    <button 
                      className={getStatusClass(order.orderStatus)}
                      onClick={() => toggleDropdown(order.id)}
                    >
                      {order.orderStatus}
                    </button>
                    {activeDropdown === order.id && (
                      <ul className="dropdown-menu">
                        {statusOptions.map((status) => (
                          <li key={status} onClick={() => changeOrderStatus(order.id, status)}>
                            {status}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrdersTable