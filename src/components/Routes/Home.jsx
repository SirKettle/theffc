import React from 'react';
import { times } from 'ramda';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { routeNodeSelector } from 'redux-router5';
import { PageLayout } from '../Layout';
import * as site from '../../constants/site';
import * as twitterSelectors from '../../domains/twitter/twitterSelectors';
import { selectRating, selectReviewCount, selectReviews } from '../../domains/googlePlace/selectors';
import kitchenCopperImage from '../../assets/images/content/kitchen-copper.jpg';
import { Heading } from '../Typography';

const columnsCopy = [
  `
# ${site.description}

Specialising in bespoke kitchens, handmade fitted furniture and built in wardrobes – The Fitted Furniture Company is here to help you achieve a unique and wonderful solution for your home.

Our ethos is to design, make and install a beautiful piece of fitted furniture that is totally different and personal to you and your house. You can be assured that what is designed will be the best solution for you, your budget and your property, and not what someone else wants to sell you! Our design work is free of charge, and should help to visualise your ideas and give you a chance to be involved.
`,
];

const GoogleReviews = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  justify-content: stretch;
  align-items: stretch;
`;

const ReviewContent = styled.div`
  flex: 1 0 auto;
  background: rgba(0, 0, 0, 0.03);
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  padding: ${({ theme }) => theme.gap * 1.5}px;
  margin: ${({ theme }) => theme.gap * 1.5}px 0;

  @media (min-width: 600px) {
    padding: ${({ theme }) => theme.gap * 2}px;
    margin: ${({ theme }) => theme.gap * 2}px;
  }
`;

const Review = styled.div`
  flex: 1 0 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex: 0 0 50%;
  }
`;

const Stars = styled.div`
  color: #ffd500;
  font-family: sans-serif;
`;

const ReviewText = styled.p`
  text-align: left;
  margin-top: ${({ theme }) => theme.gap}px;
  font-style: italic;
`;

const getImages = images => [kitchenCopperImage].concat(images.map(i => i.src));

function Home({ images, googleRating, reviewCount, reviews, tweets }) {
  console.log(tweets.map(twitterSelectors.getHashTags));

  return (
    <PageLayout slideShowImages={getImages(images)} heroCopy={columnsCopy[0]}>
      {googleRating ? (
        <div>
          <Heading>We also make happy customers</Heading>
          <p>
            {googleRating.toFixed(1)} {times(() => '★')(googleRating).join('')} -{' '}
            <a href="https://www.google.com/search?q=The+Fitted+Furniture+Company+-+Handmade+Kitchens,+Wood+Farm,+High+Green,+Brooke,+Norwich+NR15+1JE&ludocid=5779555002704752917#lrd=0x47d9e5682da962d3:0x50351aa7500c7115,1">
              {reviewCount} reviews
            </a>
          </p>
          <GoogleReviews>
            {reviews.slice(0, 4).map(({ author_name, profile_photo_url, rating, text, time }) => (
              <Review key={time}>
                <ReviewContent>
                  <img src={profile_photo_url} alt={author_name} />
                  <p>{author_name}</p>
                  <Stars>{times(() => '★')(rating).join(' ')}</Stars>
                  <ReviewText>“ {text} ”</ReviewText>
                </ReviewContent>
              </Review>
            ))}
          </GoogleReviews>
        </div>
      ) : null}
    </PageLayout>
  );
}

const mapStateToProps = state => ({
  ...routeNodeSelector('')(state),
  images: twitterSelectors.imageWithHashTagSelector('bespoke')(state),
  tweets: twitterSelectors.directTweetsSelector(state),
  googleRating: selectRating(state),
  reviewCount: selectReviewCount(state),
  reviews: selectReviews(state),
});

export default connect(mapStateToProps)(Home);
