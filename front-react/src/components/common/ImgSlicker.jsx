import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick';
import {Box} from '@mui/material'

function ImgSlicker({imgs}) {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: true,
      };
      return (
        <>
          <StyledSlider {...settings}>
            {imgs && imgs.map((img,idx) => 
                    <Box component="img" src={img} key={idx}></Box>
            )}
            <Box>마지막이미지</Box>
          </StyledSlider>
        </>
      );
    }
    const StyledSlider = styled(Slider)`
      .slick-list {
        width: 500px;
        height: 500px;
        margin: 0 auto;
        color: white;
        background-color: black;
      }
    `;

export default ImgSlicker