import React from 'react'

const CustomerTable = () => {
  const customers = [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phoneNumber": "+1 (123) 456-7890",
      "address": "123 Main St, New York, USA",
      "purchaseValue": "$1,200"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "phoneNumber": "+44 20 7123 4567",
      "address": "456 High St, London, UK",
      "purchaseValue": "$980"
    },
    {
      "id": 3,
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "phoneNumber": "+61 2 9876 5432",
      "address": "789 George St, Sydney, Australia",
      "purchaseValue": "$1,500"
    },
    {
      "id": 4,
      "name": "Bob Williams",
      "email": "bob.williams@example.com",
      "phoneNumber": "+1 (987) 654-3210",
      "address": "321 Oak Ave, Los Angeles, USA",
      "purchaseValue": "$750"
    },
    {
      "id": 5,
      "name": "Emma Brown",
      "email": "emma.brown@example.com",
      "phoneNumber": "+33 1 23 45 67 89",
      "address": "987 Rue de Rivoli, Paris, France",
      "purchaseValue": "$2,100"
    },
    {
      "id": 6,
      "name": "Michael Davis",
      "email": "michael.davis@example.com",
      "phoneNumber": "+49 30 1234567",
      "address": "654 Unter den Linden, Berlin, Germany",
      "purchaseValue": "$1,800"
    }
  ];

  return (
    <div className="customers__table">
      <table className='main_table'>
        <thead className='table_head'>
          <tr>
            <th>CUSTOMER NAME</th>
            <th>EMAIL</th>
            <th>PHONE NUMBER</th>
            <th>ADDRESS</th>
            <th>PURCHASE VALUE</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer.id} index={index}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phoneNumber}</td>
              <td>{customer.address}</td>
              <td>{customer.purchaseValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CustomerTable