import React from "react";
import Pokecard from "./Pokecard";

function Pokedex(props) {
  return (
    <div className="container">
      <div className="row">
        {props.pokemon.map((p) => (
          <div className="col-12 col-md-3" key={p.id}>
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pokedex;
