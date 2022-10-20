import styled from "styled-components";
import { responsive } from "../../responsive";

export const Container = styled.div`
  position: relative;
  width: 1440px;
  background: #ffffff;
  margin: auto;
  margin-top: 5em;
`;

export const Line = styled.hr`
  position: relative;
  margin: 0 auto;
  width: 1281px;
  border: 2px solid #e4e4e4;

  ${responsive.mobile} {
    border: 8px solid #e4e4e4;
    width: 100%;
  }
`;
