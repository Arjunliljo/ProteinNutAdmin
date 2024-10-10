import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa' // Make sure to install react-icons if not already installed

const CouponsTable = () => {
  const [coupons, setCoupons] = useState([
    {
      id: 1,
      title: "FREEBIE20",
      description: "Nulla commodo, mi a blandit facilisis, nibh sapien molestie felis, a vulputate orci enim a tellus. Integer ante arcu, rhoncus ac...",
      date: "02/10/2023",
      time: "at 02:30 am"
    },
    {
      id: 2,
      title: "NEWDEAL15",
      description: "Curabitur ornare malesuada velit et facilisis!!!",
      date: "02/08/2023",
      time: "at 10:30 am"
    },
    {
      id: 3,
      title: "EXTRA10",
      description: "Blandit facilisis, nibh sapien molestie felis, a vulputate orci enim a tellus. Integer ante arcu, rhoncus ac...",
      date: "02/04/2023",
      time: "at 03:30 pm"
    },
    {
      id: 4,
      title: "Code",
      description: "Offer description",
      date: "02/03/2023",
      time: "at 02:30 am"
    }
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [newCoupon, setNewCoupon] = useState({
    title: '',
    description: '',
    date: '',
    time: ''
  });

  const handleAddClick = () => {
    setIsAdding(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCoupon(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setCoupons(prev => [{ id: Date.now(), ...newCoupon }, ...prev]);
    setIsAdding(false);
    setNewCoupon({ title: '', description: '', date: '', time: '' });
  };

  return (
    <div className="coupons">
      <div className="coupons__table">
        <table>
          <thead>
            <tr>
              <th colSpan="4">
                <div className="coupons__header">
                  <div className="coupons__header-left">
                    {/* <input type="checkbox" /> */}
                  </div>
                  <div className="coupons__header-right">
                    <button className="coupons__add-btn" onClick={handleAddClick}>
                      <FaPlus />
                      
                    </button>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {isAdding && (
              <tr>
                <td><input type="checkbox" disabled /></td>
                <td><input type="text" name="title" value={newCoupon.title} onChange={handleInputChange} placeholder="Coupon Code" /></td>
                <td><input type="text" name="description" value={newCoupon.description} onChange={handleInputChange} placeholder="Description" /></td>
                <td>
                  <input type="date" name="date" value={newCoupon.date} onChange={handleInputChange} />
                  <input type="time" name="time" value={newCoupon.time} onChange={handleInputChange} />
                  {/* <button onClick={handleSave}>Save</button> */}
                </td>
              </tr>
            )}
            {coupons.map((coupon) => (
              <tr key={coupon.id}>
                <td><input type="checkbox" /></td>
                <td><span className="coupon-code">{coupon.title}</span></td>
                <td><span className="coupon-description">{coupon.description}</span></td>
                <td>
                  <div className="coupon-date">
                    {coupon.date}
                    <div>{coupon.time}</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default CouponsTable