import React, { useEffect, useState } from 'react';
import './ReviewPage.css';
import axios from 'axios';

const imogy = {
  5: "https://cdn-icons-png.flaticon.com/128/3129/3129283.png",
  3.5: "https://cdn-icons-png.flaticon.com/128/2691/2691111.png",
  2: "https://cdn-icons-png.flaticon.com/128/166/166527.png",
  0.5: "https://cdn-icons-png.flaticon.com/128/1791/1791330.png"
}

const ReviewPage = () => {
  const [data, setData] = useState({ bookreview: '', bookid: '' });
  const [reviewdata, setReviewdata] = useState([]);
  const [bookid,setBookid]=useState()
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const bookid = urlParams.get('hostelid');
    fetchdata(bookid);
  }, [data]);

  const fetchdata = async (bookid) => {
      setBookid(bookid)
      axios.post("http://localhost:3001/fetchreview", { data: bookid })
        .then((response) => {
          if (response.data.success) {
            setReviewdata(response.data.data);
          }
        })
        .catch((error) => {
          console.error('Error fetching review data:', error);
        });
  };

  const addReviewtoBackend = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const uploadData = async () => {
      setData({ ...data, bookid: bookid });
      console.log(data);
      axios.post("http://localhost:3001/findscore", { data: data })
        .then((response) => {
          if (response.data.success) {
            alert("Review uploaded");
          }
        })
        .catch((error) => {
          console.error('Error uploading review:', error);
        });
  };

  return (
    <div className="book-review-page">
      <h1>Book Reviews</h1>
      <div className="review-form">
        <textarea placeholder="Write your review..." rows="4" cols="50" onChange={addReviewtoBackend} name="bookreview" />
        <button onClick={uploadData}>Submit</button>
      </div>
      <div className="reviews">
        {reviewdata && reviewdata.map((review, index) => (
          <div className="rdiv" key={index}>
            <p>{review.bookreview}</p>
            <p>{review.score}</p>
            <img src={imogy[review.bookscore]} alt="images" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
