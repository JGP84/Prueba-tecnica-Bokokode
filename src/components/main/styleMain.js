import styled from "styled-components";
import { responsive } from "../../responsive";

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1266px;
  margin-left: 97px;
  margin-top: 68px;
  margin-bottom: 59px;
`;
export const WrapperTitleCategory = styled.div``;

export const TitleCategory = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 33px;
  color: #000000;

  ${responsive.mobile}{
    font-size: 60px;
  }
`;
export const WrapperSortProducts = styled.div``;

export const TitleSorts = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 24px;
  color: #000000;

  ${responsive.mobile}{
    display:none;
  }
`;

export const Row = styled.div`
  max-width: 1266px;
  display: flex;
  justify-content: space-between;
  margin-left: 97px;
  /*  background: blue; */
`;

export const ColumnCheckboxes = styled.div`
  display: flex;
  flex-direction: column;
  background: red;
  width: 300px;

  ${responsive.mobile}{
    display:none;
  }
 
`;
export const WrapperCheckbox = styled.div`
  max-width: 327px;
  display: flex;
  flex-direction: column;
  background: yellow;
`;

export const GridProducts = styled.div`
  display: grid;
  /* gap: 1rem;
  grid-auto-rows: 22rem;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr)); */
  /* grid-auto-rows: 514px;
  grid-template-columns: repeat(auto-fill, minmax(283.02px, 1fr)); */
  grid-template-columns: repeat(3, 283.02px);
 /*  grid-template-columns: repeat(auto-fill, minmax( 1fr, 283.02px)); */
  /* grid-template-columns: repeat(auto-fill, minmax( 200px, auto)); */
 /*  grid-template-columns: repeat(auto-fill, minmax( 200px, 1fr)); */
  /* grid-template-rows: repeat(2, 514px);  */
  grid-auto-rows: 514px;
  column-gap: 48px;
  row-gap: 52.55px;

  ${responsive.mobile}{
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, auto);
    row-gap: 40px;
  }
`;

export const CardProduct = styled.div`
  width: 283.02px;
  height: 514px;
  /* background-color: green; */
  color: white;
  font-size: 32px;
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  align-items: flex-center;

  ${responsive.mobile}{
   /*  width: 362px;
  height: 661px; */
  width: 100%;
  /* height: 150%; */

  }
`;
export const ButtonCart = styled.button`
  width: 100%;
  height: 46px;
  background: #000000;
  font-family: "Archivo";
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.07em;
  text-transform: uppercase;

  color: #ffffff;
`;

export const ImgProduct = styled.img`
  width: 283.02px;
  height: 352.72px;
  object-fit: cover;

  ${responsive.mobile}{
    width: 100%;
  height: 80%;
  object-fit: cover;
  }
`;
export const WrapperText = styled.div`
  width: 283.02px;
  /* height: 115,98px; */
  height: 22%;
  display: flex;
  flex-direction: column;
  justify-content: space-space-evenly;
  align-items: flex-start;
  gap: 8px;

  /* background: red; */
`;
export const TextCategory = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  margin-top: 8px;
  text-transform: capitalize;
  /* identical to box height */

  color: #656565;
`;

export const TextProduct = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 37px;
  text-transform: capitalize;
  /* identical to box height */

  color: #000000;
`;
export const TextPrice = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 29px;
  line-height: 32px;
  /* identical to box height */

  color: #656565;
`;
export const WrapperBestSeller = styled.div`
  position: absolute;
  width: 127.4px;
  height: 29.17px;
  left: 417px;
  top: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6px;

  background: #ffffff;
`;
export const TextBestSeller = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  text-transform: capitalize;

  color: #000000;
`;
