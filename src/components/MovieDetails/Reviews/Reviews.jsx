import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieByIdReview } from 'components/API/API';
import { ReviewsItem } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    getMovieByIdReview(moviesId).then(resp => setReviews(resp));
  }, [moviesId]);

  return (
    <ul>
      {reviews.length > 0
        ? reviews.map(({ id, author, content }) => (
            <ReviewsItem key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </ReviewsItem>
          ))
        : 'Oooops, there is no one review'}
    </ul>
  );
};

export default Reviews;
