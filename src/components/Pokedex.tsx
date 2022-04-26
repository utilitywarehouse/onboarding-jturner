import { useState } from "react";
import "../index.css";
import { usePokemonService } from "../services/pokemon-service";

const Pokedex = () => {
    const [pokemon, setPokemon] = useState({
        name: "",
        height: null,
        weight: null,
        sprites: { front_default: "" },
    });
    const [searchName, setSearchName] = useState("");

    const pokemonService = usePokemonService();

    const searchPokemon = async () => {
        setPokemon(
            await pokemonService.getPokemon(searchName.toLocaleLowerCase())
        );
    };

    return (
        <div className="pokedex">
            <div className="pokedex-depth" />
            <div className="forehead-rectangle"></div>
            <div className="pokedex-forehead">
                <div className="light-container">
                    <div className="large-light" />
                    <div
                        className="small-light"
                        style={{ backgroundColor: "red" }}
                    />
                    <div
                        className="small-light"
                        style={{ backgroundColor: "yellow" }}
                    />
                    <div
                        className="small-light"
                        style={{ backgroundColor: "green" }}
                    />
                </div>
            </div>
            <div className="body">
                <div className="screen">
                    <img
                        className="pokemon-img"
                        src={
                            pokemon.sprites.front_default
                                ? pokemon.sprites.front_default
                                : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png"
                        }
                        alt="pokemon"
                    />
                </div>
                <div className="controls">
                    <input
                        type="text"
                        placeholder="Enter a Pokemon name"
                        onChange={(e) => setSearchName(e.target.value)}
                    />
                    <button type="submit" name="button" onClick={searchPokemon}>
                        Search
                    </button>
                    <div className="pokemon-stats">
                        <div>Name: {pokemon.name}</div>
                        <div>Height: {pokemon.height}</div>
                        <div>Weight: {pokemon.weight}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pokedex;
