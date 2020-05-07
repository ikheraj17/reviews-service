import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ReviewRatings = ({ className, review }) => (
  <div className={className}>
    Graphics
    <br />
    Gameplay
    <br />
    Lasting Appeal
  </div>
);

const StyledReviewRatings = styled(ReviewRatings)`
grid-area: ratings;
background: #cccccc;
font-size: 12px;
line-height: 16px;
margin-left: 20px;
`;

export default StyledReviewRatings;

ReviewRatings.propTypes = {
  className: PropTypes.string.isRequired,
  review: PropTypes.shape({
    _id: PropTypes.string,
    gameId: PropTypes.number,
    date: PropTypes.string,
    overall: PropTypes.number,
    title: PropTypes.string,
    review: PropTypes.string,
    recommend: PropTypes.bool,
    nickname: PropTypes.string,
    location: PropTypes.string,
    email: PropTypes.string,
    buyForSelf: PropTypes.bool,
    ageBracket: PropTypes.number,
    gender: PropTypes.number,
    graphics: PropTypes.number,
    gameplay: PropTypes.number,
    appeal: PropTypes.number,
    ownershipBracket: PropTypes.number,
    purchaseOnline: PropTypes.bool,
    readReviews: PropTypes.bool,
    recommendBGS: PropTypes.number,
    meta: PropTypes.shape({
      helpful: PropTypes.number,
      unhelpful: PropTypes.number,
    }),
  }).isRequired,
};
