import styled from "styled-components";
import { responsive } from "../../responsive";

export const Grid = styled.div`
  display: grid;
  position: relative;
  width: 1290px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  margin: 0 auto;

  ${responsive.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    row-gap: 90px;
  }
`;
export const WrapperSection = styled.div`
 margin-top: 15px;
`;

export const TitleHeader = styled.text`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  text-transform: capitalize;
  color: #000000;
  margin-left: 10px;
  margin-bottom: 4px;

  ${responsive.mobile} {
    grid-row: 1 / 2;
    font-weight: 700;
    font-size: 110px;
    margin-top: 100px;
  }
`;

export const Button = styled.button`
  width: 257px;
  height: 47px;
  padding: 9.5px 39px 5.5px 39px;
  margin-bottom: 27px;
  font-family: "Archivo";
  font-style: normal;
  font-weight: 500;
  font-size: 23px;

  letter-spacing: 0.07em;
  background: #000000;
  color: #ffffff;
  text-transform: uppercase;
  justify-self: end;

  ${responsive.mobile} {
    grid-row: 3 / 4;
    width: 100%;
    font-size: 74px;
    height: 210px;
  }
`;

export const ImgFeaturedProduct = styled.img`
  grid-column: 1 / span 2;
 /*  object-fit: cover ; */
 object-fit: cover ; 

  ${responsive.mobile} {
    grid-row: 2 / 3;
    margin-top: 40px;
    width: 100%;
    height: 840px;
  }
`;

export const ContainerTitlePhotoDay = styled.div`
  position: absolute;
  width: 271.95px;
  height: 67px;
  left: 74px;
  top: 748px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  ${responsive.mobile} {
  
    position: absolute;
    width: 850px;
    height: 200px;
    left: 74px;
    top: 1600px;
  }
`;

export const WrapperDescriptionFeatured = styled.div`
  max-width: 690px;
  display: flex;
  flex-direction: column;

  ${responsive.mobile} {
    max-width: 100%;
    margin-top: 60px;
  }
`;
export const TitlePhoto = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  
  width: 100%auto;

  ${responsive.mobile} {
    font-size: 55px;
    margin-top: 50px;
    margin-bottom: 120px;
    /* display: flex; */
    align-self: center;
    align-content: center;
  }
`;

export const TitleDescription = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  
  width: 100%auto;

  ${responsive.mobile} {
    font-size: 75px;
    margin-top: 50px;
    margin-bottom: 120px;
    /* display: flex; */
    align-self: center;
    align-content: center;
  }
`;

export const TitlePeople = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  text-align: right;

  ${responsive.mobile} {
    font-size: 70px;
    text-align: Left;
    margin-top: 140px;
    margin-bottom: 180px;
  }
`;

export const SubTitle = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  margin-top: 16px;
  margin-bottom: 16px;
  color: #656565;

  ${responsive.mobile} {
    display: none;
  }
`;
export const TextDescription = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #656565;

  ${responsive.mobile} {
    font-size: 60px;
  }
`;
export const TextDescriptionFooter = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #656565;
  margin-top: 40px;

  ${responsive.mobile} {
    display: none;
  }
`;

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  margin-left: 92px;
  margin-top: 42px;
  margin-bottom: 75px;

  ${responsive.mobile} {
    flex-direction: column;
    margin: 0 auto;
    
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Row = styled.div`
  display: flex;
  margin-top: 34px;
  margin-bottom: 54px;

  ${responsive.mobile} {
    gap: 40px;
  }
`;
export const CardProduct = styled.div`
  width: 117px;
  /* height: ; */
  display: flex;
  flex-direction: column;
  margin-left: 35px;
  object-fit: contain;
  

  ${responsive.mobile} {
    width: 400px;
    margin-left: 0;
    margin-bottom: 280px;
    align-items: flex-start;
    
  }
`;
export const Img = styled.img`
 
  height: 147px;
  

  ${responsive.mobile} {
    
    height: 460px;
    object-fit: contain;
    margin-bottom: 28px;
  }
`;
export const WrapperText = styled.div`
  width: 117px;
  height: 22%;
  display: flex;
  flex-direction: column;
  justify-content: space-space-evenly;
  align-items: flex-start;
  gap: 10px;
  

  ${responsive.mobile} {
  }
`;
export const TextCategory = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  margin-top: 14px;
  text-transform: capitalize;
  color: #656565;

  ${responsive.mobile} {
    font-size: 45px;
  }
`;

export const TextProduct = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  text-transform: capitalize;
  color: #000000;

  ${responsive.mobile} {
    font-size: 57px;
  }
`;
export const TextPrice = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #656565;

  ${responsive.mobile} {
    font-size: 54px;
  }
`;
