import { useState, useEffect,useContext } from "react";
import { getApiPokemon, getAbilities } from "../../../services/pokemonsApi";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../contexts/theme-context";


const MainDetails = () => {
  const [poke, setPoke] = useState({});
  const [photo, setPhoto] = useState({});
  const [pokemonData, setPokemonData] = useState({
    moves: [],
    types: [],
    abilities: [],
  });
  const [abilityDesc, setAbilitiesDesc] = useState({
    abilitiesDescs: [],
  });

  const { name } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await getApiPokemon(name);

      setPoke(response);
      setPokemonData({
        moves: response.moves,
        types: response.types,
        abilities: response.abilities,
      });
      setPhoto(response.sprites.other.home.front_default);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const getAbilitiesDesc = pokemonData.abilities.map(async (name) => {
        const response = await getAbilities(name.ability.name);
        return response;
      });
      const AbilitiesDesc = await Promise.all(getAbilitiesDesc);

      setAbilitiesDesc({
        abilitiesDescs: AbilitiesDesc,
      });
    };
    fetchData();
  }, [pokemonData.abilities]);

  const {theme} = useContext(ThemeContext)
  return (
    <Sections style={{color: theme.color, backgroundColor: theme.backgroundBox}}>
      <Content className="section">
        <Main>
          <Perfil style={{color: theme.color, backgroundColor: theme.backgroundBox}}>
            <H1>{poke.name}</H1>
            <Img src={photo} />
            <BoxTypes className="box-types">
              {pokemonData.types.map((type, index) => {
                return (
                  <li key={index}>
                    <NameType style={{color: theme.color, backgroundColor: theme.backgroundBox}}>{type.type.name}</NameType>
                  </li>
                );
              })}
            </BoxTypes>
          </Perfil>
          <Ability className="ability" style={{color: theme.color, backgroundColor: theme.backgroundBox}}>
            <H1>Abilities</H1>
            <BoxAbilities className="box-abilities">
              {abilityDesc.abilitiesDescs.map((descs, index) => {
                return (
                  <Ability key={index}>
                    <h1>{descs.name}</h1>
                    <h5>
                      {descs.effect_entries[0].language.name === "en"
                        ? descs.effect_entries[0].effect
                        : descs.effect_entries[1].effect}
                    </h5>
                  </Ability>
                );
              })}
            </BoxAbilities>
          </Ability>
        </Main>
        <Moves className="moves" style={{color: theme.color, backgroundColor: theme.backgroundBox}}>
          <H1>Moves</H1>
          <BoxMoves className="box-moves">
            {pokemonData.moves.map((moves, index) => {
              return (
                <Move key={index} className="moves">
                  <h5>{moves.move.name}</h5>
                </Move>
              );
            })}
          </BoxMoves>
        </Moves>
      </Content>
      <Link className="link" to={"/"} style={{color: theme.color, backgroundColor: theme.backgroundBox}}>
        Voltar Para a Página inicial
      </Link>
    </Sections>
  );
};

const Sections = styled.section`
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: solid 1px black;
  border-right: solid 1px black;

  a{
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: large;
    font-weight: bold;
    border: solid 1px black;
    border-radius: 20px;
    width: 25%;
    margin-top: 20px;
    margin-bottom: 20px;
    text-decoration: none;
  }
  a:hover{
    transform:scale(1.07);
    z-index:2;
  }
  
`;

const NameType = styled.h3`
  margin: 30px;
  padding: 0px 30px 0px 30px;
  background-color: white;
  border: solid 1px black;
  border-radius: 20px;
`;

const Perfil = styled.div`
  border-bottom: solid 1px black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Ability = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: solid 0.8px black;
`;
const Moves = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: solid 0.8px black;
`;

const Move = styled.li`
  margin: 10px;
`;

const Content = styled.div`
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BoxAbilities = styled.ul`
  list-style-type: none;
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;

const BoxMoves = styled.ul`
  list-style-type: none;
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  list-style-type: none;
`;

const BoxTypes = styled.ul`
  list-style-type: none;
  margin: 10px;
  padding: 20px;
  display: flex;
`;


const Img = styled.img`
  width: 200px;
`;

const H1 = styled.h1`
  font-size: 50px;
  letter-spacing: 5px;
  padding-top:20px;
  color:black;
`;

export default MainDetails;
