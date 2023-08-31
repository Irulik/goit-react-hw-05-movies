import { useState, useEffect } from 'react';
import { fetchReview } from 'api/fetchApi';
import {
	Review,
	ReviewAuthor,
	ReviewText,
} from "./Reviews.styled.jsx"

const Reviews = ({ id }) => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		fetchReview(id).then((data) => {
			setReviews(data.results);
		});
	}, [id]);
	// console.log(reviews);
	return reviews.length === 0 ? (
    <h3>Sorry, we don't have any reviews!</h3>
  ) :(
		reviews.map((review, index) => (
			<Review key={index}>
				<ReviewAuthor>{review.author}</ReviewAuthor>
				<ReviewText>{review.content}</ReviewText>
			</Review>
		))
	);
};
export default Reviews;