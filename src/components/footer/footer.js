import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../contexts/theme-context";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Footers style={{ color: theme.color, backgroundImage: `url(${theme.backgroundImageFloor})`}}>
      <h4>Saullo Reis</h4>

      <A
        href="https://github.com/saullo-reis"
        target="_blank"
        style={{ color: theme.color}}
      >
        GitHub
      </A>
      <A
        href="https://www.linkedin.com/in/saullo-reis-874852231/"
        target="_blank"
        style={{ color: theme.color}}
      >
        Linkedin
      </A>
    </Footers>
  );
};
const Footers = styled.section`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-bottom: 20px;
  align-items: center;
`;
const A = styled.a`
  text-decoration: none;
  font-weight: bold;
  &:hover{
    transform:scale(1.07);
    z-index:2;
  }
`;

export default Footer;
