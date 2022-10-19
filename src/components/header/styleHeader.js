import styled from "styled-components";

export const Grid = styled.div`
display: grid;
  position: relative;
  width: 1290px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  /* background: blue; */
  margin: 0 auto;
`;

export const TitleHeader = styled.text`
  /* font-family: "Archivo"; */
  font-style: normal;
  font-weight: 700;
  font-size: 32px;

  text-transform: capitalize;

  color: #000000;
  margin-left: 10px;
  margin-bottom: 4px;
`;
export const Button = styled.button`
  width: 257px;
  height: 47px;
  padding: 9.5px 39px 5.5px 39px;
  margin-bottom: 27px;
  /* margin: 58px 0px 27px 0px; */
  font-family: "Archivo";
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  
  letter-spacing: 0.07em;
  background: #000000;
  color: #ffffff;
  text-transform: uppercase;
  justify-self: end;

  
`;


export const ImgFeaturedProduct = styled.img`

  grid-column: 1 / span 2;
 /*  grid-row: 1 / 2; */

`;

export const ContainerTitlePhotoDay = styled.div` 
position: absolute;
width: 271.95px;
height: 67px;
left: 74px;
top: 688px;
/* bottom: 0px; */
background: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;

`
export const Title = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
`;