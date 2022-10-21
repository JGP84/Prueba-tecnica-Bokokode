import React from "react";
import { Grid } from "./styleHeader";
import {
  WrapperSection,
  TitleHeader,
  Button,
  ImgFeaturedProduct,
  ContainerTitlePhotoDay,
  Title,
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

  const { featuredProduct,  data, dataFilter, loading, error, reFetch, getFeaturedProduct } = useFetch()

  let productFeatured;

  if ( data ) { 
   
    productFeatured = getFeaturedProduct()[0]
    console.log('product.name', productFeatured)
  }

  



  return (
    <>
    { loading ? 

    <h1>Loading...</h1> :

    <WrapperSection>
      {/* Start Grid */}
      <Grid>
        <TitleHeader> { productFeatured.name }</TitleHeader>
        <Button>add to cart</Button>
        <ImgFeaturedProduct src={ productFeatured.image.src }
        alt={ productFeatured.image.alt } />
      </Grid>
      <ContainerTitlePhotoDay>
        <Title sytle={{ fontSize: "20px" }}>Photo of the day</Title>
      </ContainerTitlePhotoDay>

      {/* End grid */}

      <ContainerFlex>
        <WrapperDescriptionFeatured>
          <Title>{`About the ${ productFeatured.name }` }</Title>
          <SubTitle>{ productFeatured.category }</SubTitle>
          <TextDescription>
          { productFeatured.description }
          </TextDescription>
          <TextDescriptionFooter>
            text to mockup various fonts for a type specimen book.So how did the
            classical Latin become so incoherent? According to McClintock.
          </TextDescriptionFooter>
        </WrapperDescriptionFeatured>

        <Column>
          <TitlePeople>People also buy</TitlePeople>

          <Row>
            <CardProduct>
              <Img src={ productFeatured.people_also_buy[0].image.src} />
              <WrapperText>
                <TextCategory>{ productFeatured.people_also_buy[0].category}</TextCategory>
                <TextProduct>{ productFeatured.people_also_buy[0].name}</TextProduct>
                <TextPrice>&#36;{ productFeatured.people_also_buy[0].price}</TextPrice>
              </WrapperText>
            </CardProduct>

            <CardProduct>
              <Img src="/images/yellow-wall.png" />
              <WrapperText>
                <TextCategory>people</TextCategory>
                <TextProduct>red bench</TextProduct>
                <TextPrice>&#36;3.89</TextPrice>
              </WrapperText>
            </CardProduct>

            <CardProduct>
              <Img src="/images/yellow-wall.png" />
              <WrapperText>
                <TextCategory>people</TextCategory>
                <TextProduct>red bench</TextProduct>
                <TextPrice>&#36;3.89</TextPrice>
              </WrapperText>
            </CardProduct>
          </Row>
        </Column>
      </ContainerFlex>
    </WrapperSection>
    }

    

    </>
  );
};

export default Header;
