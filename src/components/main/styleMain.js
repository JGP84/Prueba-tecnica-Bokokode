import styled from "styled-components";
import { responsive } from "../../responsive";

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1266px;
  margin-left: 97px;
  margin-top: 220px;
  margin-bottom: 120px;
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
  grid-template-columns: repeat(3, 283.02px);
  grid-auto-rows: auto;
  column-gap: 48px;
  row-gap: 52.55px;

  ${responsive.mobile}{
    grid-template-columns: 1fr;
    
  }
`;

export const CardProduct = styled.div`
  width: 283.02px;
  height: auto;
  color: white;
  font-size: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-center;

  ${responsive.mobile}{
 
  width: 100%;
  
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

  ${responsive.mobile}{
   
    width: 100%;
    font-size: 70px;
    height: 166px;
  
  }
`;

export const ImgProduct = styled.img`
  height: 352.72px;

  ${responsive.mobile}{
   
    height: 1550px;
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

  ${responsive.mobile} {
    font-size: 200%;
    width: auto;
    gap: 40px;
  }

  /* background: red; */
`;
export const TextCategory = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
 
  margin-top: 62px;
  margin-bottom: 36px;
  text-transform: capitalize;
  color: #656565;

  ${responsive.mobile} {
    font-size: 75px;
  }
`;

export const TextProduct = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;

  text-transform: capitalize;
  color: #000000;

  ${responsive.mobile} {
    font-size: 110px;
    margin-bottom: 40px;
  }
`;
export const TextPrice = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 29px;

  color: #656565;

  ${responsive.mobile} {
    font-size: 150%;
    margin-bottom: 90px;
  }
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
