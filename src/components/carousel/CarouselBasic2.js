import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
// material
import { useTheme } from '@mui/material/styles';
import { Box, Card, Typography, CardContent } from '@mui/material';
//
import { CarouselControlsArrowsIndex } from './controls';

// ----------------------------------------------------------------------

const MOCK_CAROUSELS = [
  {
    id: 1,
    title: 'Mohsin Dawood',
    description: 'CEO & Founder',
    image: '/static/home/main-img.png',
  },
  {
    id: 2,
    title: 'Hassan Dawood',
    description: 'Backend Developer',
    image: '/static/home/main-img.png',
  },
  {
    id: 3,
    title: 'Muhammad Afzaal',
    description: 'UX Designer',
    image: '/static/home/main-img.png',
  },
];

CarouselItem.propTypes = {
  item: PropTypes.object,
};

function CarouselItem({ item }) {
  const { image, title, description } = item;

  return (
    <>
      <Box
        component='img'
        alt={title}
        src={image}
        sx={{ width: '100%', height: 370, objectFit: 'cover' }}
      />

      <CardContent sx={{ textAlign: 'left' }}>
        <Typography
          variant='h6'
          noWrap
          gutterBottom>
          {title}
        </Typography>
        <Typography
          variant='body2'
          sx={{ color: 'text.secondary' }}
          noWrap>
          {description}
        </Typography>
      </CardContent>
    </>
  );
}

export default function CarouselBasic2() {
  const theme = useTheme();
  const carouselRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(2);

  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentIndex,
    fade: Boolean(theme.direction !== 'rtl'),
    rtl: Boolean(theme.direction === 'rtl'),
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  const handlePrevious = () => {
    carouselRef.current.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current.slickNext();
  };

  return (
    <Card>
      <Slider
        ref={carouselRef}
        {...settings}>
        {MOCK_CAROUSELS.map((item) => (
          <CarouselItem
            key={item.title}
            item={item}
          />
        ))}
      </Slider>

      <CarouselControlsArrowsIndex
        index={currentIndex}
        total={MOCK_CAROUSELS.length}
        onNext={handleNext}
        onPrevious={handlePrevious}
        sx={{ bottom: 120 }}
      />
    </Card>
  );
}
