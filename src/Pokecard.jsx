import React from "react";

let pokeAPI = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;

function Pokecard(props) {
 let pokeImg = `${pokeAPI}${props.id}.png`;
 return (
  <div id="poke-card"className="card" style={{ width: "18rem" }} key={props.id}>
    <div className="card-body d-flex flex-column align-items-center justify-content-center">
      <h5 className="card-title text-center">{props.name}</h5>
      <img src={pokeImg} alt={props.name}className="d-block mx-auto mb-3"
        style={{ maxWidth: "100px", height: "auto" }}
      />
      <p className="card-text text-center">Type: {props.type}</p>
      <p className="card-text text-center">EXP: {props.exp}</p>
    </div>
  </div>
);
}

export default Pokecard;
