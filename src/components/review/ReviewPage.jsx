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
  const [data, setData] = useState();
  const [reviewdata, setReviewdata] = useState([]);
  const [bookid,setBookid]=useState()
  const [trigger,setTrigger]=useState()
  const [bookname,setBookname]=useState()
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const bookid = urlParams.get('bookid');
    setBookname(urlParams.get("bookname"))
    fetchdata(bookid);
  }, [trigger]);

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
    setData(e.target.value);
  };

  const uploadData = async () => {
      const userid=localStorage.getItem("user")
      axios.post("http://localhost:3001/findscore", { data: {bookreview:data,userid:userid,bookid:bookid} })
        .then((response) => {
          console.log(response)
          if (response.data.success) {
            alert("Review uploaded");
            setTrigger(response.data.data)
          }
        })
        .catch((error) => {
          console.error('Error uploading review:', error);
        });
  };

  return (
    <div className="book-review-page">
      {bookname &&<h1 style={{color: 'black'}}> Reviews of book {bookname}</h1>}
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
