import axios from "axios";

export const usePokemonService = () => {

    const getPokemon = async (name: string) => {
       const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`) 
       return res.data
    }

    return {
        getPokemon
    }
}