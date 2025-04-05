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


import img1ACBD561 from '../../assets/images/slides/living/1ACBD561-EF80-4685-AAFD-1EFE175F0AF0.jpg';
import img02 from '../../assets/images/slides/home/02.jpg';
import imgDJRY5575 from '../../assets/images/slides/home/DJRY5575a.jpg';
import imgETHY4390 from '../../assets/images/slides/living/ETHY4390a.jpg';
import imgGAPL3000 from '../../assets/images/slides/kitchen/IMG_8153.jpg';
import imgGWMP9285 from '../../assets/images/slides/home/GWMP9285a.jpg';
// import imgIMG_0235 from '../../assets/images/slides/home/IMG_0235.jpg';
import imgIMG_0235 from '../../assets/images/slides/kitchen/IMG_0235.jpg';
import imgIMG_4271 from '../../assets/images/slides/living/IMG_4271.jpg';
import imgIMG_4272 from '../../assets/images/slides/living/IMG_4272a.jpg';
import imgIMG_4482 from '../../assets/images/slides/bedroom/IMG_4482.jpg';
import imgIMG_4503 from '../../assets/images/slides/bedroom/IMG_4503a.jpg';
import imgIMG_4680 from '../../assets/images/slides/living/IMG_4680.jpg';
import imgIMG_4687 from '../../assets/images/slides/living/IMG_4687.jpg';
import imgIMG_5041 from '../../assets/images/slides/living/IMG_5041a.jpg';
import imgIMG_5098 from '../../assets/images/slides/living/IMG_5098.jpg';
import imgIMG_5274 from '../../assets/images/slides/home/IMG_5274.jpg';
import imgIMG_5448 from '../../assets/images/slides/home/IMG_5448.jpg';
import imgIMG_6043 from '../../assets/images/slides/kitchen/IMG_6043.jpg';
import imgIMG_6052 from '../../assets/images/slides/living/IMG_6052.jpg';
import imgIMG_6362 from '../../assets/images/slides/home/IMG_6362.jpg';
import imgIMG_6373 from '../../assets/images/slides/home/IMG_6373.jpg';
import imgIMG_6375 from '../../assets/images/slides/kitchen/IMG_6375.jpg';
import imgIMG_8172 from '../../assets/images/slides/kitchen/IMG_8172.jpg';
import imgIMG_8208 from '../../assets/images/slides/kitchen/IMG_8208.jpg';
import imgIMG_8211 from '../../assets/images/slides/kitchen/IMG_8211.jpg';
import imgIMG_8212 from '../../assets/images/slides/home/IMG_8212.jpg';
import imgIMG_8213 from '../../assets/images/slides/home/IMG_8213.jpg';
import imgIMG_8824 from '../../assets/images/slides/living/IMG_8824.jpg';
import imgSLIC7959 from '../../assets/images/slides/home/SLIC7959a.jpg';
import imgXVIG6487 from '../../assets/images/slides/kitchen/IMG_7034.jpg';
import img01 from '../../assets/images/slides/living/01.jpg';

const columnsCopy = [
  `
# ${site.description}

Specialising in bespoke kitchens, handmade fitted furniture and built in wardrobes – ${site.name} is here to help you achieve a unique and wonderful solution for your home.

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

// const getImages = images => [kitchenCopperImage].concat(images.map(i => i.src));
const getImages = () => [
  imgIMG_8208,
  img01,
  img1ACBD561,
  img02,
  imgDJRY5575,
  imgETHY4390,
  imgGAPL3000,
  imgGWMP9285,
  imgIMG_0235,
  imgIMG_4271,
  imgIMG_4272,
  imgIMG_4482,
  imgIMG_4503,
  imgIMG_4680,
  imgIMG_4687,
  imgIMG_5041,
  imgIMG_5098,
  imgIMG_5274,
  imgIMG_5448,
  imgIMG_6043,
  imgIMG_6052,
  imgIMG_6362,
  imgIMG_6373,
  imgIMG_6375,
  imgIMG_8172,
  imgIMG_8211,
  imgIMG_8212,
  imgIMG_8213,
  imgIMG_8824,
  imgSLIC7959,
  imgXVIG6487,
  kitchenCopperImage,
];

function Home({ images, googleRating, reviewCount, reviews }) {
  return (
    <PageLayout slideShowImages={getImages(images)} heroCopy={columnsCopy[0]}>
      {googleRating ? (
        <div>
          <Heading>We also make happy customers</Heading>
          <p>
            {googleRating.toFixed(1)} {times(() => '★')(Math.round(googleRating)).join('')} -{' '}
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
  images: twitterSelectors.imageWithOneOfHashTagsSelector(['bespoke'])(state),
  googleRating: selectRating(state),
  reviewCount: selectReviewCount(state),
  reviews: selectReviews(state),
});

export default connect(mapStateToProps)(Home);
