import React from "react";
import styled from "styled-components";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";

import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

function SearchBox({ props }) {
  var searchword;
  return (
    <>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          borderRadius: 10,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="search"
          inputProps={{ "aria-label": "search google maps" }}
          value={searchword}
        />
        <IconButton
          type="submit"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={() => {
            props.history.push(`/product/search/${searchword}`);
          }}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
}

export default SearchBox;
