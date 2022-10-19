import styled from "styled-components";
import { responsive } from "../../responsive";

export const Grid = styled.div`
  display: grid;
  position: relative;
  width: 1290px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  /* background: blue; */
  margin: 0 auto;

  ${responsive.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    row-gap: 90px;
    /* grid-template-rows: repeat(11, auto);
    row-gap: 20px;
    margin: 0px auto; */
  }
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

  ${responsive.mobile} {
    grid-row: 1 / 2;
    font-weight: 700;
    font-size: 110px;
  }
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

  ${responsive.mobile} {
    grid-row: 3 / 4;
    width: 100%;
    /* margin: 5px 0 0 0; */
    font-size: 70px;
    height: 190px;
  }
`;

export const ImgFeaturedProduct = styled.img`
  grid-column: 1 / span 2;
  /*  grid-row: 1 / 2; */

  ${responsive.mobile} {
    grid-row: 2 / 3;
  }
`;

export const ContainerTitlePhotoDay = styled.div`
  position: absolute;
  width: 271.95px;
  height: 67px;
  left: 74px;
  top: 688px;
  /* bottom: 0px; */
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
`;
