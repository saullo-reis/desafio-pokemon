import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import styled from "styled-components";

export const Button = (props) => {
  const { theme } = useContext(ThemeContext);


  return (
    <ButtonStyle
      {...props}
      alt="Mudar Tema"
      style={{
        backgroundColor: theme.background,
        backgroundImage: `url(${theme.themeButton})`,
      }}
    />
  );
};

const ButtonStyle = styled.button`
  width: 35px;
  background-size: cover;
  height: 35px;
  float: right;
  margin-right: 30px;
  border: 1px solid gray;
  border-radius: 10px;
`;
