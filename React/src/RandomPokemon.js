// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png
import "./RandomPokemon.css";
export default function RandomPokemon() {
    const randomPokemon = Math.floor(Math.random() * 151) + 1;
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomPokemon}.png`;
    return(
        <div className = "RandomPokemon">
            <h1>Pokemon #{randomPokemon}</h1>
            <img src={ url} alt =""/>
        </div>
    );
}