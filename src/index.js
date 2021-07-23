
// I. creating the bridge
const cardsEl = document.querySelector(".cards");


// II. adding html through JS 

function renderPokemonCard(pokemon) { 
    const pokemonCard = document.createElement ("li");
    pokemonCard.setAttribute("class", "card");

    const h2El = document.createElement('h2');
    let pokemonName = pokemon.name;
    h2El.setAttribute("class", "card--title");
    h2El.innerText = pokemonName;
    pokemonCard.append(h2El);

    const imgEl = document.createElement('img');
    let pokemonImg = pokemon.sprites.other["official-artwork"].front_default;
    imgEl.setAttribute("class", "card--img");
    imgEl.setAttribute("width", "256px");
    imgEl.setAttribute("src", pokemonImg);
    imgEl.setAttribute("alt", pokemonName);
    pokemonCard.append(imgEl);

    const pokemonStats = document.createElement("ul");
    pokemonStats.setAttribute("class", "card--text");

    const statica = pokemon.stats;
    console.log("statica: ", statica);

    for (let i=0; i < statica.length; i++) {
        const stat = statica[i];
        const baseStat = stat.base_stat;
        const statName = stat.stat.name;

        const statsList = `${statName.toUpperCase()}: ${baseStat}`;
        console.log("statsList: ", statsList); 

        const listEl = document.createElement("li");
        listEl.append(statsList);

        pokemonStats.append(listEl);
    }

    pokemonCard.append(pokemonStats); 

    return pokemonCard;
}

const pokemonCard = renderPokemonCard(data[2]);
// console.log("this is the pokemonCard: ", pokemonCard);

// III. final append
cardsEl.append(pokemonCard);


// 2.2 renderPokemonCards(data)
// - A for loop on the array of pokemon
//   - run renderPokemon()
//   - append to the element from Step 1.0
// - input: an array of objects that represent pokemon (data)
// - output: -


// function renderPokemonCards(pokemon) { 
//     for(let i = 0; i <pokemon.length; i++ );
//     const cards = pokemon[i];

//     return 
// } 

// const = 
// console.log(" : ", ); 




 // pokemonStats.innerText = 'This is how powerful I am 🏋🏼';

    // pokemonStats.innerText = 'Well... ';

    // const displayHP = document.createElement("li");
    // displayHP.innerText = "\n";
    // const displayAttack = document.createElement("li");
    // displayAttack.innerText = "Steven,";
    // const displayDefense = document.createElement("li");
    // displayDefense.innerText = "🙏🏼 please show me how to ⬇️";
    // const displaySpecialAttack = document.createElement("li");
    // displaySpecialAttack.innerText = " - access and store that nested array ";
    // const displaySpecialDefense = document.createElement("li");
    // displaySpecialDefense.innerText = " - and also save those objects outside the function";
    // const displaySpeed = document.createElement("li");
    // displaySpeed.innerText = " - for being able to add the stats 📉 \n and not hadcoded messages 😭 ";
   
    // pokemonStats.append(displayHP, displayAttack, displayDefense,displaySpecialAttack, displaySpecialDefense, displaySpeed);