const listOfPokemon = [
    {name:"Gengar", hp:220, move1:"ShadowBall", move2: "Curse", picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"},
    {name: "MilTank", hp:300, move1: "Rollout", move2:"BodySlam", picture:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png"},
    {name:"Garchomp", hp:200, move1:"HyperBeam", move2: "Eathquake", picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png"},
    {name:"Swampert", hp:190, move1:"hydropump", move2: "mudshot", picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png"},
    {name:"Phanpy", hp:120, move1:"playrough", move2: "tackle", picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png"},
];

const body = document.getElementsByTagName("body")[0];

for (const pokemon of listOfPokemon) {
    const pokeDiv = document.createElement("div");
    pokeDiv.className = "pokeCard";
    const pokeName = document.createElement("h1");
    pokeName.className = "pokeName"
    const pokeHp = document.createElement("h3");
    const pokeMove1 = document.createElement("h3");
    const pokeMove2 = document.createElement("h3");
    pokeMove1.className = "pokeMove";
    pokeMove2.className = "pokeMove";
    const pokePicture = document.createElement("img");
    pokePicture.src = pokemon.picture;
    pokeName.innerText = pokemon.name;
    pokeHp.innerText = pokemon.hp;
    pokeMove1.innerText = pokemon.move1;
    pokeMove2.innerText = pokemon.move2;
    pokeDiv.append(pokeName,pokeHp,pokeMove1,pokeMove2,pokePicture)
    body.append(pokeDiv)
}

