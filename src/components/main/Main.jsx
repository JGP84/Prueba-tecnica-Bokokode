import React, { useState } from "react";
import {
  WrapperHeader,
  WrapperTitleCategory,
  TitleCategory,
  TitleSorts,
  Row,
  ColumnCheckboxes,
  WrapperCheckbox,
  WrapperSortProducts,
  GridProducts,
  CardProduct,
  ButtonCart,
  ImgProduct,
  WrapperText,
  TextCategory,
  TextProduct,
  TextPrice,
  WrapperBestSeller,
  TextBestSeller,
} from "./styleMain";
import Checkbox from "./Checkbox";

const Main = () => {
  const [value, setCheckbox] = useState(true);

  return (
    <>
      <WrapperHeader>
        <WrapperTitleCategory>
          <TitleCategory>Photography /</TitleCategory>
          <TitleCategory style={{ color: "#9B9B9B", fontWeight: "400" }}>
            Premium Photos
          </TitleCategory>
        </WrapperTitleCategory>
        <WrapperSortProducts>
          <TitleSorts>Price</TitleSorts>
        </WrapperSortProducts>
      </WrapperHeader>

      <Row>
        <ColumnCheckboxes>
          {/* <Checkbox>
            
          </Checkbox> */}
          {/* <WrapperCheckbox>
            <input
              type="checkbox"
              id="coding"
              name="interest"
              value="coding"
              checked
            ></input>
          </WrapperCheckbox> */}
          <WrapperCheckbox>
            <Checkbox
              label="value"
              value={value}
              checked={value}
              onChange={({ target }) => setCheckbox(!value)}
            />
          </WrapperCheckbox>

          {/*  <Checkbox
              label="value"
              value={value}
              checked={value}
              onChange={({ target }) => setCheckbox(!value)}
            /> */}
          {/* <Checkbox>1</Checkbox> */}
        </ColumnCheckboxes>

        <GridProducts>

          <CardProduct>

            <ImgProduct src="/images/landmarks.png" alt="product" />

            <ButtonCart>add to cart</ButtonCart>

            <WrapperText>
              <TextCategory>people</TextCategory>
              <TextProduct>red bench</TextProduct>
              <TextPrice>&#36;3.89</TextPrice>
            </WrapperText>

          </CardProduct>

          <CardProduct>
            <ImgProduct src="/images/landmarks.png" alt="product" />
            <ButtonCart>add to cart</ButtonCart>
            <WrapperText>
              <TextCategory>people</TextCategory>
              <TextProduct>red bench</TextProduct>
              <TextPrice>&#36;3.89</TextPrice>
            </WrapperText>
          </CardProduct>
          <CardProduct>
            <ImgProduct src="/images/landmarks.png" alt="product" />
            <ButtonCart>add to cart</ButtonCart>
            <WrapperText>
              <TextCategory>people</TextCategory>
              <TextProduct>red bench</TextProduct>
              <TextPrice>&#36;3.89</TextPrice>
            </WrapperText>
          </CardProduct>
          <CardProduct>
            <WrapperBestSeller>
              <TextBestSeller>best seller</TextBestSeller>
            </WrapperBestSeller>
            <ImgProduct
              src="/images/landmarks.png"
              alt="product"
            ></ImgProduct>
            <ButtonCart>add to cart</ButtonCart>
            <WrapperText>
              <TextCategory>people</TextCategory>
              <TextProduct>red bench</TextProduct>
              <TextPrice>&#36;3.89</TextPrice>
            </WrapperText>
          </CardProduct>
          <CardProduct>
            <ImgProduct src="/images/landmarks.png" alt="product" />
            <ButtonCart>add to cart</ButtonCart>
            <WrapperText>
              <TextCategory>people</TextCategory>
              <TextProduct>red bench</TextProduct>
              <TextPrice>&#36;3.89</TextPrice>
            </WrapperText>
          </CardProduct>
          <CardProduct>
            <ImgProduct src="/images/landmarks.png" alt="product" />
            <ButtonCart>add to cart</ButtonCart>
            <WrapperText>
              <TextCategory>people</TextCategory>
              <TextProduct>red bench</TextProduct>
              <TextPrice>&#36;3.89</TextPrice>
            </WrapperText>
          </CardProduct>
        </GridProducts>

      </Row>
    </>
  );
};

export default Main;
