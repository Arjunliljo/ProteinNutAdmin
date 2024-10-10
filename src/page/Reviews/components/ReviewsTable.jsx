import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

const ReviewsTable = () => {
  const reviews = [
    {
      name: "J. Davidson",
      email: "email@email.com",
      rating: 4,
      comment: "Nulla commodo, mi a blandit facilisis, nibh sapien molestie felis, a vulputate orci enim a tellus. Integer ante arcu, rhoncus ac ...",
      product: "name name",
      date: "12.12.23 02:30 am",
    },
    {
      name: "Michael Brandon",
      email: "email@email.com",
      rating: 3,
      comment: "Curabitur ornare malesuada velit et facilisis!!!",
      product: "name name",
      date: "12.12.23 02:30 am",
    },
    {
      name: "Mr. Warner",
      email: "email@email.com",
      rating: 5,
      comment: "Blandit facilisis, nibh sapien molestie felis, a vulputate orci enim a tellus. Integer ante arcu, rhoncus ac ...",
      product: "name name",
      date: "12.12.23 02:30 am",
    },
    {
      name: "Maria Smith",
      email: "email@email.com",
      rating: 4,
      comment: "Commodo, mi a blandit facilisis, nibh sapien molestie felis, a vulputate orci enim a tellus. Integer ante arcu, rhoncus ac ...",
      product: "name name",
      date: "12.12.23 02:30 am",
    },
  ];

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <i key={i} className={`fas fa-star ${i < rating ? 'filled' : ''}`}></i>
    ));
  };

  return (
    <div className="reviews__table">
      <div className="reviews__header">
        <div className="reviews__title">
          {/* <input type="checkbox" /> */}
          <h2>Latest Accepted Reviews</h2>
        </div>
        <select className="reviews__dropdown">
          <option value="latest"><span style={{marginRight: '1rem'}}>Latest</span></option>
        </select>
      </div>
      <table className='main_table'>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id}>
              <td><input type="checkbox" /></td>
              <td className="reviews__name-email">
                <div className="customer-name">{review.name}</div>
                <div>{review.email}</div>
              </td>
              <td>{renderStars(review.rating)}</td>
              <td className="review-comment">{review.comment}</td>
              <td className="reviews__product-date">
                <div className="product-name">{review.product}</div>
                <div>{review.date}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ReviewsTable