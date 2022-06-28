import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/common/Header";
import swal from "sweetalert";
import { useSelector, useDispatch } from "react-redux";
import productSlice from "../../reducers/productApi";
import { getPrdDetailDB } from "../../reducers/productApi";
import Grid from "../../components/common/Grid";
function ProductDetail(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const prd_list = useSelector((state) => state.prd.list);
  // const prd_idx=prd_list.findIndex((p)=>p.pr) = prd_list[prd_list.findIndex((p) => p.id === id)];
  const product = prd_list[id];
  console.log(product);
  useEffect(() => {
    //db에서 product 조회
    dispatch(getPrdDetailDB(id));
  },);

  //상품 구매를 위한 옵션

  const [option, setOption] = useState([]);
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);

  //상품 옵션을 선택하면 화면에 elements 추가 렌더링
  const selectOption = (e) => {
    const _options = option.filter((o, id) => {
      if (o !== e.target.value) {
        return o;
      }
    });
    let price = Number(e.target.value.slice(-7, -1).split(",").join("").trim());
    setOption([
      ..._options,
      { text: e.target.value, num: 1, prd: product, count: price },
    ]);
    setCount(count + price);
  };
  //옵션 삭제
  const deleteOption = (target) => {
    const _options = option.filter((option, idx) => {
      if (option.text !== target.text) {
        return option;
      }
      setCount();
    });
    setOption(_options);
  };

  //수량 변경
  const plusQuantity = (option) => {
    let price = Number(option.text.slice(-7, -1).split(",").join("").trim());
    setSum(sum + price);
    option.num += 1;
    option.sum += price;
  };
  const minusQuantity = (option) => {
    if (sum > 0 && option.num > 1) {
      let price = Number(option.text.slice(-7, -1).split(",").join("").trim());
      setSum(sum - price);
      option.num -= 1;
      option.sum -= price;
    }
  };
  const setShoppingBasket = () => {
    swal({
      title: "장바구니에 담았습니다",
      icon: "success",
      buttons: {
        goCart: { text: "장바구니 이동", value: "goCart" },
        cancel: "쇼핑 계속하기",
      },
    });
  };
  return (
    <>
      <Header />
      {/* <Grid adding="60px 0 0 0" max_width="950px" margin="0 auto"></Grid>
      <Line />

      <div>판매기간 </div>
      <Line />

      <div>
        <Select onChange={selectOption}>
          <option>[필수] 옵션을 선택해 주세요 </option>
          <option> ------------------ </option>
        </Select>
      </div>
      <Button onClick={setShoppingBasket}>장바구니</Button>
      <Button>구매하기</Button> */}
      <Grid padding="60px 0 0 0" max_width="950px" margin="0 auto">
        <div style={{ alignItems: "flex-start", display: "flex" }}>
          <PrdImg src="" alt="상품 이미지"></PrdImg>
          <Grid>
            <Grid is_flex>
              <Grid width="auto" style={{ bottom: "0" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="16"
                  viewBox="0 0 20 16"
                >
                  <g fill="none" fill-rule="evenodd">
                    <g stroke="#3B3B3B" stroke-width="1.2">
                      <path
                        d="M14.727 10.384L14.727 14.727 0 14.727 0 3.273 5.54 3.273"
                        transform="translate(-1272 -368) translate(1273 368)"
                      ></path>
                      <path
                        d="M16.364 1.636L16.364 6.545 11.455 6.545"
                        transform="translate(-1272 -368) translate(1273 368) scale(1 -1) rotate(-45 4.033 0)"
                      ></path>
                      <path
                        d="M16.926 4.09c-4.88-.835-8.34 1.075-10.38 5.728"
                        transform="translate(-1272 -368) translate(1273 368)"
                      ></path>
                    </g>
                  </g>
                </svg>
              </Grid>
            </Grid>

            <Line />
            <Grid is_flex padding="6px 16px">
              <Grid width="auto">
                <p size="13px" margin="0" bold width="auto">
                  최대혜택
                </p>
              </Grid>
              <Grid width="82%" padding="0 0 0 15px"></Grid>
              <div style={{ bottom: "0" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="none"
                    fill-rule="evenodd"
                    stroke="#A1A1A1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.045 3.955L10.136 8.052 6.045 12.136"
                    transform="rotate(90 7.91 8.045)"
                  ></path>
                </svg>
              </div>
            </Grid>

            <Line />
            <Grid is_flex padding="6px 16px">
              <Grid width="auto">
                <p size="13px" margin="0" bold width="auto">
                  배송정보
                </p>
              </Grid>
              <Grid width="82%" padding="0 0 0 15px"></Grid>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  fill="none"
                  fill-rule="evenodd"
                  stroke="#A1A1A1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.045 3.955L10.136 8.052 6.045 12.136"
                  transform="rotate(90 7.91 8.045)"
                ></path>
              </svg>
            </Grid>
            <Grid padding="32px 16px 16px 10px">
              <Select onChange={selectOption}>
                <option>[필수] 옵션을 선택해 주세요 </option>
                <option disabled="true"> ------------------ </option>
                {/* {product.option.map((opt, idx) => {
                  return (
                    <option value={opt} key={product._id + idx}>
                      {opt}
                    </option>
                  );
                })} */}
              </Select>
            </Grid>

            {product.option && //선택한 옵션이 존재할 때 화면 렌더링
              product.option.map((option, idx) => {
                return (
                  <Grid padding="16px" key={idx}>
                    <Grid bg="rgb(248, 248, 248)" height="98px" padding="16px">
                      <Grid is_flex padding="0 0 14px 0">
                        <p margin="0" size="13px">
                          {/* {option.text.includes("[") ? (
                            <H>[{option.text.split("[")[1].split("]")[0]}]</H>
                          ) : null}
                          {option.text.split("[")[0].split("(")[0]} */}
                        </p>
                        <svg
                          onClick={() => {
                            deleteOption(option);
                          }}
                          class="css-1jd8bf1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                        >
                          <g
                            fill="none"
                            fill-rule="evenodd"
                            stroke="#C4C4C4"
                            stroke-linecap="square"
                          >
                            <path
                              d="M0 0L10.5 10.5"
                              transform="translate(.75 .75)"
                            ></path>
                            <path
                              d="M0 0L10.5 10.5"
                              transform="translate(.75 .75) matrix(-1 0 0 1 10.5 0)"
                            ></path>
                          </g>
                        </svg>
                      </Grid>
                      <Grid height="28px" is_flex center>
                        <Grid is_flex width="116px">
                          <Grid
                            _onClick={() => {
                              minusQuantity(option);
                            }}
                            width="28px"
                            height="28px"
                            bg="rgb(255, 255, 255)"
                          >
                            -
                          </Grid>
                          <Grid
                            width="50px"
                            height="28px"
                            bg="rgb(255, 255, 255)"
                            margin="0 5px"
                          >
                            {option.num ? option.num : 1}
                          </Grid>
                          <Grid
                            _onClick={() => {
                              plusQuantity(option);
                            }}
                            width="28px"
                            height="28px"
                            bg="rgb(255, 255, 255)"
                          >
                            +
                          </Grid>
                        </Grid>
                        <p margin="0" size="14px">
                          {Number(
                            option.text.slice(-7, -1).split(",").join("").trim()
                          ) * option.num}
                        </p>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}

            <Grid padding="16px" right>
              <p size="0.8em" margin="0">
                합계
                <p style={{ fontSize: "22px", margin: "0 0 0 8px" }}>
                  {sum.toLocaleString()}원
                </p>
              </p>
            </Grid>
            <Grid is_flex padding="16px 16px">
              <Button
                bold
                color="rgb(255, 111, 97)"
                bg="rgb(255, 240, 239)"
                text="장바구니 담기"
                _onClick={setShoppingBasket}
              />
              <Button bold text="바로 구매하기" />
            </Grid>
          </Grid>
        </div>
        <Detail />

        <ImgBox>{/* 상품 디테일 정보 */}</ImgBox>
      </Grid>
    </>
  );
}

const ImgBox = styled.div`
  margin: 100px auto 30px auto;
  width: 57%;
  align-items: center;
`;
const PrdImg = styled.img`
  width: 510px;
  height: 551px;
`;

const Line = styled.hr`
  border: solid 0.2px #ebebeb;
  width: 92%;
`;
const Select = styled.select`
  appearance: none;
`;
const Button = styled.button`
  color: "rgb(255, 111, 97)";
`;
const Detail = styled.ul``;
export default ProductDetail;
