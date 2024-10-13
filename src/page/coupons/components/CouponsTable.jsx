import React from 'react'
import { FaPlus } from 'react-icons/fa'

const CouponsTable = ({ isAdding, coupons, newCoupon, onAddClick, onInputChange, selectedCoupons, onSelectCoupon }) => {
  const formatDescription = (description) => {
    const words = description.split(' ');
    const firstLine = words.slice(0, 10).join(' ');
    const secondLine = words.slice(10, 20).join(' ');
    return (
      <>
        <div>{firstLine}</div>
        <div>{secondLine}{words.length > 20 ? '...' : ''}</div>
      </>
    );
  };

  return (
    <div className="coupons">
      <div className="coupons__table">
        <table>
          <colgroup>
            <col style={{width: '5%'}} />
            <col style={{width: '20%'}} />
            <col style={{width: '55%'}} />
            <col style={{width: '20%'}} />
          </colgroup>
          <thead>
            <tr>
              <th colSpan="4">
                <div className="coupons__header">
                  <div className="coupons__header-left">
                    {/* <input type="checkbox" /> */}
                  </div>
                  <div className="coupons__header-right">
                    <button className="coupons__add-btn" onClick={onAddClick}>
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
                <td>
                  <div className='coupon_code_discount'>
                    <input type="text" name="title" value={newCoupon.title} onChange={onInputChange} placeholder="Coupon Code" />
                    <input type="text" name="discount" value={newCoupon.discount} onChange={onInputChange} placeholder="Discount %" />
                  </div>
                </td>
                <td><input type="text" name="description" value={newCoupon.description} onChange={onInputChange} placeholder="Description" /></td>
                <td>
                  <input type="date" name="date" value={newCoupon.date} onChange={onInputChange} />
                  <input type="time" name="time" value={newCoupon.time} onChange={onInputChange} />
                </td>
              </tr>
            )}
            {coupons.length > 0 ? (
              coupons.map((coupon) => (
                <tr key={coupon.id}>
                  <td>
                    <input 
                      type="checkbox" 
                      checked={selectedCoupons.includes(coupon.id)}
                      onChange={() => onSelectCoupon(coupon.id)}
                    />
                  </td>
                  <td>
                    <div className="coupon-code-discount">
                      <span className="coupon-code">{coupon.title}</span>
                      <span className="coupon-discount">{coupon.discount}</span>
                    </div>
                  </td>
                  <td><span className="coupon-description">{formatDescription(coupon.description)}</span></td>
                  <td>
                    <div className="coupon-date">
                      <div>{coupon.date}</div>
                      <div>{coupon.time}</div>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>
                  No coupons available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CouponsTable