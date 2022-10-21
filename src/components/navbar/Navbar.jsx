import React from "react";
import {
  Container,
  Logo,
  Wrapper,
  IconCart,
  BadgeCart,
  NumberBadget,
} from "./styleNavbar";

const Navbar = () => {
  return (
    <>
      <Container>
        <Logo src="/images/logo.png"></Logo>
        <Wrapper>
          {/* <BadgeCart>
            <NumberBadget>1</NumberBadget>
          </BadgeCart> */}
          <IconCart src="/images/icons/cart-icon.png"></IconCart>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
