import StarRatings from 'react-star-ratings';

const Rating = ({ value }) => {
  return (
    <StarRatings
      rating={value}
      starRatedColor="gold"
      numberOfStars={5}
      starDimension="20px"
      starSpacing="2px"
      name="rating"
    />
  );
};

export default Rating;
