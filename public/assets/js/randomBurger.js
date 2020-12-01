function getBurger(){
  const randomBurgerOutput= document.getElementById("randomBurgerOutput");
  
//Add burger or Belcher names in alphabetical order please!
const RandomBurgerNames= [
  "A Leek of Their Own",
  "All In A Glaze Work",
  "Bay Leaf in Magic",
  "Beets Me",
  "Bohemian Radishy",
  "Breaking Radish",
  "Butterface",
  "Beyond Meat Dream",
  "Charbroil Fair",
  "Curd-fect Strangers",
  "Edamame Dearest",
  "Enoki Dokie Burger",
  "Fig Lebowski",
  "Fuh-gouda-bout-it",
  "Grandpa Muenster",
  "Holy Chuck",
  "I Fought the Slaw",
  "It's Only Sourdough",
  "Jagged Little Dill",
  "Judy Garlic",
  "Kale Mary Burger",
  "Kales From the Crypt",
  "Krauted House",
  "Little Swiss Bunshine",
  "New Bacon-ings",
  "Pablano Picasso",
  "Pepper Don’t Preach",
  "Poutine - On the Ritz",
  "Run Gorgonzola Run",
  "Salvador Cauliflower",
  "Sharp Cheddar Dressed Man",
  "She’s a Super Leek",
  "Sit and Spinach",
  "Sweet Chili O’Mine",
  "Sweet Home Avocado",
  "Tarragon in Sixty Seconds",
  "The Longest Chard",
  "The Roquefort Files",
  "The Ruth Tomater",
  "The Say Cheese",
  "To Err Is Cumin",
  "Top Bun",
  "Weekend at Bearnaise",
  "Yes I Cayenne",
    ];

  const belcherNames = [
    "Al",
    "Bob",
    "Gene",
    "Gloria",
    "Linda",
    "Tina",
  ]
  
  //Uncomment to see how many random burgers there are. We started with 33 in October 2020
  // console.log(RandomBurgerNames.length)
  
  let currentRandomBurger = RandomBurgerNames[Math.floor(Math.random()*RandomBurgerNames.length)]
  let currentRandomBelcher = belcherNames[Math.floor(Math.random()*belcherNames.length)]
  console.log(currentRandomBelcher +" Recommends the " + currentRandomBurger + " Burger")
  randomBurgerOutput.value=currentRandomBurger;
}






