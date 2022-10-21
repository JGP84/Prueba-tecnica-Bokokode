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
import useFetch from "../../hooks/useFetch";

const Main = () => {
  const [value, setCheckbox] = useState(true);

  const { dataFilter, loading } = useFetch();

  let products;

  if (dataFilter) {
    products = dataFilter.data.data;
  }

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
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
              {products.map((product) => {
                return (
                  <CardProduct>
                    <ImgProduct
                      src={product.image.src}
                      alt={product.image.alt}
                    />

                    <ButtonCart>add to cart</ButtonCart>

                    <WrapperText>
                      <TextCategory>{product.category}</TextCategory>
                      <TextProduct>{product.name}</TextProduct>
                      <TextPrice>&#36;{product.price}</TextPrice>
                    </WrapperText>
                  </CardProduct>
                );
              })}
            </GridProducts>
          </Row>
        </>
      )}
    </>
  );
};

export default Main;
