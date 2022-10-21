import styled from "styled-components";
import { responsive } from "../../responsive";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1440px;

  ${responsive.mobile} {
    padding: 90px 40px 40px 40px;
  }
`;

export const Logo = styled.img`
  height: 100%;
  margin-left: 83px;
  margin-top: 20px;

  ${responsive.mobile} {
    width: 30%;
    height: 30%;
    margin-top: 0px;
  }
`;

export const Wrapper = styled.div`
  padding: 37px 80px 33px 0px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const IconCart = styled.img`
  margin-left: 79px;
  ${responsive.mobile} {
    width: 110px;
    height: 110px;
  }
`;
export const BadgeCart = styled.div`
  margin-top: 10px;
  width: 21px;
  height: 20.57px;
  text-align: center;
  background: #000000;

  ${responsive.mobile} {
    width: 42px;
    height: 41.2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const NumberBadget = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: 0.07em;
  color: #ffffff;

  ${responsive.mobile} {
    font-size: 40px;
  }
`;
