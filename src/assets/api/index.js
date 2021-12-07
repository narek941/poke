import axios from "axios";

axios.defaults.baseURL = "https://pokeapi.co/api/v2/pokemon";

const getAllPokemon = async () => {
  const data=axios
    .get("https://pokeapi.co/api/v2/pokemon/")
    .then((res) => {
      const fetches = res.data.results.map((p) => axios.get(p.url));
      Promise.all(fetches).then((data) => {
          console.log(data)
        return data;
      });
      return fetches;
    })
    .catch((err) => {
      console.log(err);
    });
    return data;
};

export { getAllPokemon };
