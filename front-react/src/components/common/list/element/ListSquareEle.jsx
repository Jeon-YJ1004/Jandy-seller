import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ListSquareEle(props) {
  const type = props.type;
  const img = props.img;
  const { id, factory, name, price, like } = props.item;
  const size = props.size;
  const linkUrl = type === "market" ? `product/detail/${id}` : `/${type}/${id}`;

  return (
    <Link to={linkUrl}>
      <Box sx={{ maxWidth: 289, height: 410, pb: 2 }}>
        <Box sx={{ width: 289, height: 304 }}>
          <StyledImg src={img} alt="상품 썸네일" />
        </Box>
        <Box sx={{ p: "12px" }}>
          <Typography variant="body4" color="text.secondary">
            {factory}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {name}
          </Typography>
        </Box>
        <Box sx={{ position: "relative" }}>
          <Typography
            size="small"
            sx={{
              position: "absolute",
              left: "15px",
            }}
          >
            {price + "00"}원
          </Typography>
          <IconButton
            aria-label="add to favorites"
            sx={{
              position: "absolute",
              right: "10px",
            }}
          >
            <FavoriteIcon /> <Typography size="small">{like}</Typography>
          </IconButton>
        </Box>
      </Box>
    </Link>
  );
}
const StyledImg = styled.img`
  max-width: 289px;
  max-height: 304px;
  min-width: 50wh;
`;
export default ListSquareEle;
