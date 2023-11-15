import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import ReviewComponent from '../Review'; // Import the updated Review component

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/reviews')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  function onAddReview(rev) {
    setReviews((reviews) => [...reviews, rev]);
  }

  const [showForm, setShowForm] = useState(false);

  const handleAddReview = () => {
    setShowForm((form) => !form);
  };

  return (
    <div style={styles.container}>
      <button className="btn-addreview" onClick={handleAddReview}>
        {showForm ? 'Close Form' : 'Add Review!'}
      </button>

      <div>
        <h1 className="subheading center mg-top">All Reviews</h1>
        <h1 className="heading center mg-top">What people say about us...</h1>

        <ul className="review-list">
          {reviews.map((review) => (
            <ReviewComponent review={review} key={review.id} />
          ))}
        </ul>
      </div>

      {showForm && <Review onAddReview={onAddReview} />}
    </div>
  );
}

let styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export default Reviews;