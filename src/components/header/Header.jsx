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

  let product;

  if ( data ) { 
    console.log('getFeaturedProduct', getFeaturedProduct())
    product = getFeaturedProduct()[0]
    console.log('product.name', product.name)
  }

  



  return (
    <>
    { loading ? 
    <h1>Loading...</h1> 
    : 
    <>
    <WrapperSection>
      {/* Start Grid */}
      <Grid>
        <TitleHeader>{ product.name }</TitleHeader>
        <Button>add to cart</Button>
        <ImgFeaturedProduct src="/images/featured-product.png" />
      </Grid>
      <ContainerTitlePhotoDay>
        <Title sytle={{ fontSize: "20px" }}>Photo of the day</Title>
      </ContainerTitlePhotoDay>

      {/* End grid */}

      <ContainerFlex>
        <WrapperDescriptionFeatured>
          <Title>About the Samurai King Resting</Title>
          <SubTitle>Pets</SubTitle>
          <TextDescription>
            So how did the classical Latin become so incoherent? According to
            McClintock, a 15th century typesetter likely scrambled part of
            Cicero's De Finibus in order to provide placeholder text to mockup
            various fonts for a type specimen book.So how did the classical
            Latin become so incoherent? According to McClintock, a 15th century
            typesetter likely scrambled part of Cicero's De Finibus in order to
            provide placeholder
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

    </>
    
    }
   

    </>
  );
};

export default Header;
