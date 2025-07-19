import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import * as API from '../../services/movies-api';

function ReviewsList() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviewsList(movieId);
  }, [movieId]);

  const fetchReviewsList = async movieId => {
    try {
      setIsLoading(true);
      const data = await API.getMovieReviews(movieId);
      setReviews(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (reviews.length === 0) {
    return isLoading ? <div>Loading...</div> : <div>No reviews</div>;
  }

  return (
    <>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h4>{author}</h4>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ReviewsList;
