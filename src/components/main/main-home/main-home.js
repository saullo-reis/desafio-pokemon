import { getApiPokemon, getApiNames } from "../../../services/pokemonsApi";
import { useState, useEffect, useContext } from "react";
import "./mediaquery.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../contexts/theme-context";

const Pokemons = () => {
  let limit = 10;
  const [count, setCount] = useState(10);
  const [offset, setOffset] = useState(0)
  const [pokes, setPokes] = useState({
    pokemons: [],
  });

  async function showMore() {
    setCount(count + limit);
    setOffset(offset + limit);
  }


  console.log(pokes.pokemons)
  useEffect(() => {
    const fetchData = async () => {
      const names = await getApiNames(count, offset);
      const pokemons = names.map(async (name) => {
        const response = await getApiPokemon(name);
        return response;
      });
      const resolved = await Promise.all(pokemons);
      setPokes({
        pokemons: resolved,
      });
    };
    fetchData();
  }, [count, offset]);

  const { theme } = useContext(ThemeContext);

  return (
    <Home style={{ color: theme.color, backgroundColor: theme.backgroundBox }}>
      {
        <Container className="container"
          style={{ color: theme.colorBox, backgroundColor: theme.background }}
        >
          {pokes.pokemons.map((pokemon, index) => {
            return (
                <Box className="box-pokemon" key={index} >
                  <Link to={`/details/${pokemon.name}`}>
                    <Item className="division"
                      style={{
                        color: theme.color,
                        backgroundColor: theme.backgroundBox,
                    }}>
                      <img src={pokemon.sprites.front_default} />
                      <H1 style={{ color: theme.color }}>{pokemon.name}</H1>
                    </Item>
                  </Link>
                </Box>
            );
          })}
        </Container>
      }
      <Button
        style={{ color: theme.color, backgroundColor: theme.background }}
        className="button"
        onClick={showMore}
      >
        Mais Pokemons
      </Button>
    </Home>
  );
};

const H1 = styled.h1`
  letter-spacing: 3px;
  text-decoration: none;
  font-size: 85%;
`;
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 2px 2px 2px black;
  border: solid gray 0.2px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 30px;
  list-style-type: none;
  cursor: pointer;
  width:200px;

  img{
    width:100%;
  }
`;

const Box= styled.li`
  a{
    text-decoration: none;
  }
`

const Container = styled.ul`
  box-shadow: 2px 2px 2px black;
  width: 50%;
  display: flex;
  justify-content:space-between;
  align-items: center;
  flex-flow: row wrap;
  padding:0;
  border-radius: 20px;
  border: black solid 0.1px;
  margin-top:20px;
  
  li{
    list-style-type: none;
  }

  li:hover{
    transform:scale(1.07);
    z-index:2;
  }
`;

const Button = styled.button`
  width: 206px;
  margin-bottom: 20px;
  margin-top: 20px;
  height: 60px;
  line-height: 60px;
  border-radius: 20px;
  cursor: pointer;
  border: solid gray 0.2px;
  box-shadow: 2px 2px 2px black;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 3px;
`;
const Home = styled.section`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button:hover{
    transform:scale(1.07);
    z-index:2;
  }
`;

export default Pokemons;
