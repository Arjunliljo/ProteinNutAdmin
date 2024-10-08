import React from 'react'

const OrdersTable = () => {

  const orders = [
    {
      "id": 12345,
      "product": "Phone 234-M Grey Color Tristique sed metus",
      "address": "1234567FR",
      "category": "Electronics",
      "regularPrice": "$800",
      "salePrice": "$600",
      "payment": "Fully Paid",
      "orderStatus": "COMPLETED"
    },
    {
      "id": 12346,
      "product": "White Jumper",
      "address": "F34567FR",
      "category": "Fashion",
      "regularPrice": "$400",
      "salePrice": "$180",
      "payment": "$180/from $4,000",
      "orderStatus": "CONFIRMED"
    },
    {
      "id": 12347,
      "product": "Cheese Gauda",
      "address": "3157Jy",
      "category": "Food & Drinks",
      "regularPrice": "$50",
      "salePrice": "$20",
      "payment": "$0/$20",
      "orderStatus": "CANCELED"
    },
    {
      "id": 12348,
      "product": "Express Delivery, Worldwide",
      "address": "54321we",
      "category": "Services",
      "regularPrice": "$50/h",
      "salePrice": "$100/2h",
      "payment": "Fully Paid",
      "orderStatus": "COMPLETED"
    },
    {
      "id": 12349,
      "product": "Phone 12345 Tristique sed metus Black color",
      "address": "3417we0D",
      "category": "Electronics",
      "regularPrice": "$800",
      "salePrice": "$600",
      "payment": "Fully Paid",
      "orderStatus": "ON REFOUND"
    }
  ];

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

  const getStatusClass = (status) => {
    switch(status.toUpperCase()) {
      case 'COMPLETED': return 'btn completed-btn';
      case 'CONFIRMED': return 'btn confirmed-btn';
      case 'CANCELED': return 'btn secondary-btn';
      case 'ON REFOUND': return 'btn on-refound-btn';
      default: return 'btn';
    }
  };

  return (
    <div className="orders__table">
      <table className='main_table'>
        <thead className='table_head'>
          <tr>
            <th>#ORDER</th>
            <th className="product column product-name">PRODUCT</th>
            <th>ADDRESS</th>
            <th>CATEGORY</th>
            <th>PAYMENT</th>
            <th>ORDER STATUS</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id} index={index}>
              <td className="order-number">{order.id}</td>
              <td className="product-column product-name">
                {formatProductName(order.product)}
                <br />
                <span className="price-info">
                  Regular Price: {order.regularPrice}<br />
                  Sale Price: {order.salePrice}
                </span>
              </td>
              <td>{order.address}</td>
              <td>{order.category}</td>
              <td>{order.payment}</td>
              <td>
                <button className={getStatusClass(order.orderStatus)}>
                  {order.orderStatus}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrdersTable