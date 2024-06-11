import "../styles/pokemoncard.css";
import "../styles/pokemontypes.css";
function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <div className="card-shine"></div>
      <p className="pokemon-id">
        {pokemon.id < 10 ? `No. 0${pokemon.id}` : `No. ${pokemon.id}`}
      </p>
      <div className={`pokemon-header ${pokemon.types[0].type.name}`}>
        <img
          className="pokemon-sprite"
          src={pokemon.sprite}
          alt={pokemon.name}
        ></img>
      </div>
      <div className="pokemon-body">
        <p className="pokemon-name">{pokemon.name}</p>
        <p className="ability-title">Abilities</p>
        <ul className="pokemon-abilities">
          {pokemon.abilities && pokemon.abilities.length > 0
            ? pokemon.abilities.map((ability, i) => {
                return (
                  <li key={`ab-${pokemon.id}-${i}`}>
                    {ability.ability.name.charAt(0).toUpperCase() +
                      ability.ability.name.slice(1)}
                  </li>
                );
              })
            : ""}
        </ul>
        {pokemon.types && pokemon.types.length > 0
          ? pokemon.types.map((typeP, i) => {
              return (
                <p
                  key={`type-${pokemon.id}-${i}`}
                  className={`type ${typeP.type.name}`}
                >
                  {typeP.type.name}
                </p>
              );
            })
          : ""}
      </div>
    </div>
  );
}
export default PokemonCard;
