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
import CheckboxCategory from "./CheckboxCategory";

const Main = () => {
  const [value, setCheckbox] = useState(true);

  const { dataFilter, loadingFilter } = useFetch();

  let products= null;

  if (dataFilter) {
    products = dataFilter.data.data;
    /* console.log('products', products) */
  }

  return (
    <>
      {loadingFilter ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <WrapperHeader>
            <WrapperTitleCategory>
              <TitleCategory>Photography&nbsp;&nbsp; /&nbsp; </TitleCategory>
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
            

              
                <CheckboxCategory></CheckboxCategory>
              
             

            </ColumnCheckboxes>

            <GridProducts>
              {products.map((product) => {
                return (
                  <CardProduct key={product._id}>
                    <ImgProduct
                      src={product.image.src}
                      alt={product.image.alt}
                    />

                    {/*  <ButtonCart>add to cart</ButtonCart> */}

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
