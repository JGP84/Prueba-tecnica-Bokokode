import React from 'react'
import { Grid } from './styleHeader'
import { TitleHeader, Button, ImgFeaturedProduct, ContainerTitlePhotoDay, Title } from './styleHeader'


const Header = () => {
  return (
    <>
    <Grid>
    <TitleHeader>samurai king resting</TitleHeader>
        <Button>add to cart</Button>
        <ImgFeaturedProduct src="/images/featured-product.png"/>
    </Grid>
    <ContainerTitlePhotoDay>
        <Title sytle={{fontSize: "20px"}}>Photo of the day</Title>
      </ContainerTitlePhotoDay>
    </>
    
  )
}

export default Header