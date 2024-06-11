import "../styles/searchbar.css";
import { useContext } from "react";
import { LoadingButton } from "@mui/lab";
import SearchIcon from "@mui/icons-material/Search";
import FilterSelectInput from "./FilterSelectInput";
import { PokemonContext } from "../context/PokemonContext";
function SearchMenu() {
  const { search, setSearch, loading, searchForPokemon } =
    useContext(PokemonContext);
  return (
    <div className="search-container">
      <img
        className="poketitle"
        src="/assets/images/poketitle.svg"
        alt="pokemon"
      />
      <FilterSelectInput></FilterSelectInput>
      <div className="input-container">
        <input
          className="poke-searchinput"
          placeholder="Pokemon ID or Name"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            console.log(search);
          }}
        ></input>
      </div>

      <LoadingButton
        className="filter-btn"
        onClick={searchForPokemon}
        variant="contained"
        loading={loading}
      >
        <SearchIcon />
        Search
      </LoadingButton>
    </div>
  );
}
export default SearchMenu;
