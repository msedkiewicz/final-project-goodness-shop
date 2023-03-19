import React from 'react';
import CarouselHome from '../../features/Carousel/Carousel';
import InformationBox from '../../features/InformationBox/InformationBox';
import OfferContainer from '../../features/OfferContainer/OfferContainer';

const Home = () => {
  return (
    <div>
      <CarouselHome />
      <InformationBox />
      <OfferContainer />
    </div>
  );
};

export default Home;
