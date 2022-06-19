import { React, useState, useRef } from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Divider,
} from "@material-ui/core";
import styled from "styled-components";
import Autocomplete from "@material-ui/lab/Autocomplete";
import UploadImg from "../../components/common/UploadImg";

function ProductRegister() {
  const initTag = ["키링", "레이스", "봄", "여름"];
  const opt_lst = ["옵션 타입", "옵션 명", "옵션값", "필수"];
  const [options, setOptions] = useState([]);
  const [optionInfo, setOptionInfo] = useState([]);

  const productImg = useRef();

  const setOption = (e) => {
    // let optList=[];
    // optList.push(e.value)
    setOptionInfo((current) => current.push(e.value));
  };

  return (
    <>
      {/* 헤더 */}
      {/* 상품 등록 div */}
      <Typography variant="h6" gutterBottom>
        상품 정보
      </Typography>
      기본정보
      <Divider />
      상품 이미지 사진
      <UploadImg />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Grid item md={6}>
          <TextField
            required
            id="prdName"
            label="상품명"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />

          <Grid item md={6}>
            <TextField
              required
              id="prdInfo"
              label="상품정보"
              fullWidth
              autoComplete="cc-info"
              variant="standard"
            />
          </Grid>
          <Grid container>
            {/* {opt_lst.map((key) => {
              <Grid item key={key}>
                {key}
              </Grid>;
            })} */}
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="flex-start"
            spacing={3}
          >
            <option placeholder="기본" onChange={setOption} />
            <TextField
              required
              id="optName"
              label="옵션명"
              autoComplete="cc-info"
              variant="standard"
            />

            <FormControlLabel
              control={<Checkbox onChange={setOption} defaultChecked />}
              label="필수"
            />
          </Grid>
          <Grid item md={6}>
            <Autocomplete
              multiple
              id="hashTagOption"
              options={initTag}
              getOptionLabel={(option) => option}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField {...params} id="hashtag" label="해쉬태그" />
              )}
            />
          </Grid>
          <Grid item md={6}>
            <Autocomplete
              disablePortal
              sx={{ width: 300 }}
              options={initTag}
              getOptionLabel={(option) => option}
              renderInput={(params) => (
                <TextField {...params} id="hashtag" label="카테고리" />
              )}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
const InputImg = styled.input``;
export default ProductRegister;
