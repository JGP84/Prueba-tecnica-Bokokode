import React from "react";
import { Grid } from "./styleHeader";
import {
  WrapperSection,
  TitleHeader,
  Button,
  ImgFeaturedProduct,
  ContainerTitlePhotoDay,
  TitlePhoto,
  TitleDescription,
  TitlePeople,
  SubTitle,
  TextDescription,
  TextDescriptionFooter,
  ContainerFlex,
  WrapperDescriptionFeatured,
  Column,
  Row,
  Img,
  CardProduct,
  WrapperText,
  TextCategory,
  TextProduct,
  TextPrice,
} from "./styleHeader";
import useFetch from "../../hooks/useFetch";

const Header = () => {

  const { loading, getFeaturedProduct } = useFetch();

  let productFeatured = null;
  let productsPeopleAlsoBuy = null;

  if (loading === false) {
    productFeatured = getFeaturedProduct()[0];
    productsPeopleAlsoBuy = productFeatured.people_also_buy;
  }

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <WrapperSection>
          {/* Start Grid */}
          <Grid>
            <TitleHeader> {productFeatured.name}</TitleHeader>
            <Button>add to cart</Button>
            <ImgFeaturedProduct
              src={productFeatured.image.src}
              alt={productFeatured.image.alt}
            />
          </Grid>
          <ContainerTitlePhotoDay>
            <TitlePhoto>Photo of the day</TitlePhoto>
          </ContainerTitlePhotoDay>

          {/* End grid */}

          <ContainerFlex>
            <WrapperDescriptionFeatured>
              <TitleDescription>{`About the ${productFeatured.name}`}</TitleDescription>
              <SubTitle>{productFeatured.category}</SubTitle>
              <TextDescription>{productFeatured.description}</TextDescription>
              <TextDescriptionFooter>
                {productFeatured.description}
              </TextDescriptionFooter>
            </WrapperDescriptionFeatured>

            <Column>
              <TitlePeople>People also buy</TitlePeople>

              <Row>
                {productsPeopleAlsoBuy.map((product) => {
                  return (
                    <CardProduct key={product._id}>
                      <Img src={product.image.src} alt={product.image.alt} />
                      <WrapperText>
                        <TextCategory>{product.category}</TextCategory>
                        <TextProduct>{product.name}</TextProduct>
                        <TextPrice>&#36;{product.price}</TextPrice>
                      </WrapperText>
                    </CardProduct>
                  );
                })}
              </Row>
            </Column>
          </ContainerFlex>
        </WrapperSection>
      )}
    </>
  );
};

export default Header;
