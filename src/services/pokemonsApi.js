const url = "https://pokeapi.co/api/v2/pokemon";

export async function getApiNames(limit, offset) {
  const response = await fetch(`${url}?limit=${limit}&o0ffset=${offset}}`);
  const json = await response.json();
  const names = json.results.map((result) => {
    return result.name;
  });
  return await names;
}

export async function getApiPokemon(name) {
  const response = await fetch(`${url}/${name}`);
  const json = await response.json();
  return await json;
}

export async function getAbilities(nameAbility){
  const response = await fetch(`https://pokeapi.co/api/v2/ability/${nameAbility}`)
  const json = await response.json()
  return await json;
}