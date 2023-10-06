// Declare variables that refer to HTML elements
const pokeCard = document.getElementById("pokeCard")
const favorites = document.getElementById("favorites")
const filterTypeDropdown = document.getElementById("filterTypeDropdown")
const filterCategoryDropdown = document.getElementById("filterCategoryDropdown")
const sortButtonHp = document.getElementById('sortButtonHp')
const sortButtonAz = document.getElementById('sortButtonAz')
const sortButtonTotal = document.getElementById('sortButtonTotal')
const showFavoritesButton = document.getElementById('showFavoritesButton')
const listTitle = document.getElementById('listTitle')

// Array of different pokémons as objects
let pokemons = [
  {
    name: "Bulbasaur",
    type: ["Grass", "Poison"],
    category: "Seed",
    attack: 49,
    defense: 49,
    HP: 45,
    speed: 45,
    description: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    image: "./pokemon-images/bulbasaur.png"
  },
  {
    name: "Ivysaur",
    type: ["Grass", "Poison"],
    category: "Seed",
    attack: 62,
    defense: 63, 
    HP: 60,
    speed: 60,
    description: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
    image: "./pokemon-images/ivysaur.png"
  },
  {
    name: "Venusaur",
    type: ["Grass", "Poison"],
    category: "Seed",
    attack: 82,
    defense: 83,
    HP: 80,
    speed: 80,
    description: "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    image: "./pokemon-images/venusaur.png"
  },
  {
    name: "Charmander",
    type: ["Fire"],
    category: "Lizard",
    attack: 52,
    defense: 43,
    HP: 39,
    speed: 65,
    description: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    image: "./pokemon-images/charmander.png"
  },
  {
    name: "Charmeleon",
    type: ["Fire"],
    category: "Flame",
    attack: 64,
    defense: 58,
    HP: 58,
    speed: 80,
    description: "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
    image: "./pokemon-images/charmeleon.png"
  },
  {
    name: "Charizard",
    type: ["Fire", "Flying"],
    category: "Flame",
    attack: 84,
    defense: 78,
    HP: 78,
    speed: 100,
    description: "It is said that Charizard’s fire burns hotter if it has experienced harsh battles.",
    image: "./pokemon-images/charizard.png"
  },
  {
    name: "Squirtle",
    type: ["Water"],
    category: "Tiny Turtle",
    attack: 48,
    defense: 65,
    HP: 44,
    speed: 43,
    description: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    image: "./pokemon-images/squirtle.png"
  },
  {
    name: "Wartortle",
    type: ["Water"],
    category: "Turtle",
    attack: 63,
    defense: 80,
    HP: 59,
    speed: 58,
    description: "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
    image: "./pokemon-images/wartortle.png"
  },
  {
    name: "Blastoise",
    type: ["Water"],
    category: "Shellfish",
    attack: 83,
    defense: 100,
    HP: 79,
    speed: 78,
    description: "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
    image: "./pokemon-images/blastoise.png"
  },
  {
    name: "Caterpie",
    type: ["Bug"],
    category: "Worm",
    attack: 30,
    defense: 35,
    HP: 45,
    speed: 45,
    description: "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.",
    image: "./pokemon-images/caterpie.png"
  },
  {
    name: "Metapod",
    type: ["Bug"],
    category: "Cocoon",
    attack: 20,
    defense: 55,
    HP: 50,
    speed: 30,
    description: "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.",
    image: "./pokemon-images/metapod.png"
  },
  {
    name: "Butterfree",
    type: ["Bug", "Flying"],
    category: "Butterfly",
    attack: 45,
    defense: 50,
    HP: 60,
    speed: 70,
    description: "It loves the nectar of flowers and can locate flower patches that have even tiny amounts of pollen.",
    image: "./pokemon-images/butterfree.png"
  },
  {
    name: "Weedle",
    type: ["Bug", "Poison"],
    category: "Hairy Bug",
    attack: 35,
    defense: 30,
    HP: 40,
    speed: 50,
    description: "Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.",
    image: "./pokemon-images/weedle.png"
  },
  {
    name: "Kakuna",
    type: ["Bug", "Poison"],
    category: "Cocoon",
    attack: 25,
    defense: 50,
    HP: 45,
    speed: 35,
    description: "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.",
    image: "./pokemon-images/kakuna.png"
  },
  {
    name: "Beedrill",
    type: ["Bug", "Poison"],
    category: "Poison Bee",
    attack: 90,
    defense: 40,
    HP: 65,
    speed: 75,
    description: "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
    image: "./pokemon-images/beedrill.png"
  },
  {
    name: "Pidgey",
    type: ["Normal", "Flying"],
    category: "Tiny Bird",
    attack: 45,
    defense: 40,
    HP: 40,
    speed: 56,
    description: "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.",
    image: "./pokemon-images/pidgey.png"
  },
  {
    name: "Pidgeotto",
    type: ["Normal", "Flying"],
    category: "Bird",
    attack: 60,
    defense: 55,
    HP: 63,
    speed: 71,
    description: "This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.",
    image: "./pokemon-images/pidgeotto.png"
  },
  {
    name: "Pidgeot",
    type: ["Normal", "Flying"],
    category: "Bird",
    attack: 80,
    defense: 75,
    HP: 83,
    speed: 101,
    description: "This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.",
    image: "./pokemon-images/pidgeot.png"
  },
  {
    name: "Rattata",
    type: ["Normal"],
    category: "Mouse",
    attack: 56,
    defense: 35,
    HP: 30,
    speed: 72,
    description: "Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.",
    image: "./pokemon-images/rattata.png"
  },
  {
    name: "Raticate",
    type: ["Normal"], 
    category: "Mouse",
    attack: 81,
    defense: 60,
    HP: 55,
    speed: 97,
    description: "Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.",
    image: "./pokemon-images/raticate.png"
  },
  {
    name: "Spearow",
    type: ["Normal", "Flying"],
    category: "Tiny Bird",
    attack: 60,
    defense: 30,
    HP: 40,
    speed: 70,
    description: "Inept at flying high. However, it can fly around very fast to protect its territory.",
    image: "./pokemon-images/spearow.png"
  },
  {
    name: "Fearow",
    type: ["Normal", "Flying"],
    category: "Beak",
    attack: 90,
    defense: 65,
    HP: 65,
    speed: 100,
    description: "A Pokémon that dates back many years. If it senses danger, it flies high and away, instantly.",
    image: "./pokemon-images/fearow.png"
  },
  {
    name: "Ekans",
    type: ["Poison"],
    category: "Snake",
    attack: 60,
    defense: 44,
    HP: 35,
    speed: 55,
    description: "The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest.",
    image: "./pokemon-images/ekans.png"
  },
  {
    name: "Arbok",
    type: ["Poison"],
    category: "Cobra",
    attack: 95, 
    defense: 69,
    HP: 60,
    speed: 80,
    description: "The frightening patterns on its belly have been studied. Six variations have been confirmed.",
    image: "./pokemon-images/arbok.png"
  },
  {
    name: "Pikachu",
    type: ["Electric"],
    category: "Mouse",
    attack: 55,
    defense: 40,
    HP: 35,
    speed: 90,
    description: "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.",
    image: "./pokemon-images/pikachu.png"
  },
  {
    name: "Raichu",
    type: ["Electric"],
    category: "Mouse",
    attack: 90,
    defense: 55,
    HP: 60,
    speed: 110,
    description: "Its tail discharges electricity into the ground, protecting it from getting shocked.",
    image: "./pokemon-images/raichu.png"
  },
  {
    name: "Sandshrew",
    type: ["Ground"],
    category: "Mouse",
    attack: 75,
    defense: 85,
    HP: 50,
    speed: 40,
    description: "It loves to bathe in the grit of dry, sandy areas. By sand bathing, the Pokémon rids itself of dirt and moisture clinging to its body.",
    image: "./pokemon-images/sandshrew.png"
  },
  {
    name: "Sandslash",
    type: ["Ground"],
    category: "Mouse",
    attack: 100,
    defense: 110,
    HP: 75,
    speed: 65,
    description: "The drier the area Sandslash lives in, the harder and smoother the Pokémon’s spikes will feel when touched.",
    image: "./pokemon-images/sandslash.png"
  },
]

//Initialize empty array to store favorite pokémons
const favePokes = []
//Initialize variable to keep track of the alphabetic sorting
let isAscending = true

// Function to create list, or library, of pokémons and display them
const loadPokemons = (pokemons) => {  
  pokeCard.innerHTML = ''
  favorites.innerHTML = ''
//Structure of the Pokémon library
  pokemons.forEach((pokemon) => {
    pokeCard.innerHTML += `
    <div class="card">
    <h3>${pokemon.name}</h3>
            <span>${pokemon.type}</span>
    <div class="content-container">
      <div class="image-container">
        <img src="${pokemon.image}" alt="${pokemon.name}" class="poke-img"/>
      </div>
      <div class="text-container">
      <span>Category: ${pokemon.category}</span>
        <p>${pokemon.description}</p>
        <ul class="list">
          <li>HP: ${pokemon.HP}</li>
          <li>Attack: ${pokemon.attack}</li>
          <li>Defense: ${pokemon.defense}</li>
          <li>Speed: ${pokemon.speed}</li>
        </ul>
      </div>
      <button onclick="addToFavorites('${encodeURIComponent(JSON.stringify(pokemon))}')">Add to favorites</button>
    </div>  
</div>
      `
  })
}

//Function to filter pokémons based on both type- and category dropdown
const filterPokemon = () => {
  const typeValue = filterTypeDropdown.value
  const categoryValue = filterCategoryDropdown.value

  //Check if both filters are set to "all"
  if (typeValue === 'all' && categoryValue === 'all') {
    loadPokemons(pokemon)
    return
  }
  //Filter pokémons based on type and category
  const filteredList = pokemons.filter((pokemon) => {
    const matchesType = typeValue === 'all' || pokemon.type.includes(typeValue)
    const matchesCategory = categoryValue === 'all' || pokemon.category.includes(categoryValue)
    return matchesType && matchesCategory
  })

  loadPokemons(filteredList)
}


//Function to toggle sorting order when button is clicked
const toggleSortingOrderHp = () => {
  //Change sorting order from ascending to descending
  isAscending = !isAscending
  sortByHp()
}

//Function to sort pokémons from highest to lowest HP
const sortByHp = () => {
  if (isAscending) {
    pokemons.sort(function(a, b) {
      return a.HP - b.HP
    })
} else {
  pokemons.sort(function(a, b) {
    return b.HP - a.HP
  })
}
  //Update list of pokémons on page
  loadPokemons(pokemons)
}

//Function to toggle sorting order when button is clicked
const toggleSortingOrderTotal = () => {
  //Change sorting order from ascending to descending
  isAscending = !isAscending
  sortTotalAmount()
}

//Function to sort pokémons from highest total amount to lowest
const sortTotalAmount = () => {
  if (isAscending) {
    pokemons.sort(function(a, b) {
      const totalAmountA = a.HP + a.attack + a.defense + a.speed
      const totaltAmountB = b.HP + b.attack + b.defense + b.speed
      return totalAmountA - totaltAmountB
    }) 
} else {
    pokemons.sort(function(a, b) {
      const totalAmountA = a.HP + a.attack + a.defense + a.speed
      const totaltAmountB = b.HP + b.attack + b.defense + b.speed
      return totaltAmountB - totalAmountA
    }) 
}
  //Update list of pokémons
  loadPokemons(pokemons)
}

//Function to toggle sorting order alphabetically when button is clicked
const toggleSortingOrder = () => {
  //Change sorting order from ascending to descending
  isAscending = !isAscending
  sortAlphabetically()
}

// Function to sort pokémons
const sortAlphabetically = () => {
  //Use isAscending to decide sorting order
  if (isAscending) {
    pokemons.sort((a, b) => b.name.localeCompare(a.name))
  } else {
    pokemons.sort((a, b) => a.name.localeCompare(b.name))
  }
  //Update list of pokémons
  loadPokemons(pokemons)
}

//Function to add pokémon to favorites
const addToFavorites = (pokemon) => {

  const parsedPokemon = JSON.parse(decodeURIComponent(pokemon))
  //Check to see if pokémon is already in the favorites list
  if (favePokes.some((favorite) => favorite.name === parsedPokemon.name)) {
    alert(`${parsedPokemon.name} is already added to the list!`)
  } else {
  favePokes.push(parsedPokemon)
  //Alert user that chosen pokémon is added to favorite list
  alert(`${parsedPokemon.name} added to favorite list!`)
  }
}


//Function to create list of favorite pokémons
const loadFavorites = () => {
  pokeCard.innerHTML = ''

//Iterate through favorite pokémons and display their names and an image
  favePokes.forEach((pokemon) => {
    favorites.innerHTML += `
      <div class="card">
      <h3>${pokemon.name}</h3>
      <span>${pokemon.type}</span>
        <div class="image-container">
          <img src="${pokemon.image}" alt="${pokemon.name}" class="poke-img"/>
        </div>
      </div>
    `
  })
}

  //Function to toggle between favorites and all pokemons
  const toggleFavorites = () => {
    pokeCard.classList.toggle('favorites')
    //Change button text depending if you're showing favorites or not
    const buttonText = pokeCard.classList.contains('favorites') ? 'Show all Pokémons' : 'Show favorites'
    showFavoritesButton.textContent = buttonText

    if (pokeCard.classList.contains('favorites')) {
      loadFavorites()
      //Change title of list to "Your favorites"
      listTitle.innerHTML = 'Your favorite Pokémons <i class="fa-regular fa-heart"></i>' 
    } else {
      loadPokemons(pokemons)
      //Change title of list to "Pokédex"
      listTitle.innerHTML = 'Pokédex' 
    }
  }

//Function to search for specific Pokémon
const searchPokemon = () => {
  const searchInput = document.getElementById("searchInput").value.toLowerCase()
  const searchResult = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchInput)
  })
  loadPokemons(searchResult)
}

//Eventlistener for buttons and drop down menu
filterTypeDropdown.addEventListener("change", filterPokemon)
filterCategoryDropdown.addEventListener("change", filterPokemon)
sortButtonHp.addEventListener("click", toggleSortingOrderHp)
sortButtonTotal.addEventListener("click", toggleSortingOrderTotal)
sortButtonAz.addEventListener("click", toggleSortingOrder)
searchInput.addEventListener("input", searchPokemon)
showFavoritesButton.addEventListener('click', toggleFavorites)


//Invoke the loadPokemon function to show the pokémon cards
loadPokemons(pokemons)  