// BookReviewPage.js

import React, { useState } from 'react';
import './ReviewPage.css';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([
    { id: 1, text: 'This book is amazing!', sentiment: 'positive' },
    { id: 2, text: 'I found this book average.', sentiment: 'neutral' },
    { id: 3, text: 'Terrible book, waste of time.', sentiment: 'negative' }
  ]);

  const analyzeSentiment = (text) => {
    // Basic sentiment analysis logic, you can replace with more sophisticated algorithms
    const positiveWords = ['amazing', 'great', 'fantastic', 'excellent'];
    const negativeWords = ['terrible', 'awful', 'bad', 'poor'];

    let score = 0;
    text.split(' ').forEach(word => {
      if (positiveWords.includes(word)) {
        score++;
      } else if (negativeWords.includes(word)) {
        score--;
      }
    });

    return score > 0 ? 'positive' : score < 0 ? 'negative' : 'neutral';
  };

  const addReview = (text) => {
    const sentiment = analyzeSentiment(text);
    const newReview = {
      id: reviews.length + 1,
      text,
      sentiment
    };
    setReviews([...reviews, newReview]);
  };

  return (
    <div className="book-review-page">
      <h1>Book Reviews</h1>
      <div className="review-form">
        <textarea placeholder="Write your review..." rows="4" cols="50" />
        <button onClick={() => addReview(document.querySelector('.review-form textarea').value)}>Submit</button>
      </div>
      <div className="reviews">
        {reviews.map(review => (
          <div key={review.id} className={`review ${review.sentiment}`}>
            <p>{review.text}</p>
            <span className="sentiment">{review.sentiment}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
