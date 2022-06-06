import React, { useContext } from "react";
import logo from "../../assets/img/pokemon.png";
import styled, { css } from "styled-components";
import { ThemeTogglerButton } from "../theme-toggler-button/theme-toggler-button";
import { ThemeContext } from "../../contexts/theme-context";

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Headers
      style={{
        color: theme.color,
        backgroundImage: `url(${theme.backgroundImageSky})`,
      }}
    >
      <Logo src={logo} />
      <ThemeTogglerButton />
    </Headers>
  );
};

const Headers = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;

`;
const Logo = styled.img`
  width: 200px;
  margin-left:30px;
`;
export default Header;
