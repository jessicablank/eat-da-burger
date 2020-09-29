const RandomBurgerNames= [
  "She’s a Super Leek",
  "Kales From the Crypt",
  "Sweet Chili O’Mine",
  "Bohemian Radishy",
  "Little Swiss Bunshine",
  "Poutine - On the Ritz",
  "Pepper Don’t Preach",
  "Sweet Home Avocado",
  "Pablano Picasso",
  "Grandpa Muenster",
  "New Bacon-ings",
  "A Leek of Their Own",
  "Tarragon in Sixty Seconds",
  "Top Bun",
  "The Longest Chard",
  "Sharp Cheddar Dressed Man",
  "Sit and Spinach",
  "All In A Glaze Work",
  "To Err Is Cumin",
  "Jagged Little Dill",
  "Curd-fect Strangers",
  "Weekend at Bearnaise",
  "The Roquefort Files",
  "Judy Garlic",
  "The Ruth Tomater",
  "Fig Lebowski"
  "Butterface",
  "Breaking Radish",
  "Edamame Dearest",
  "Krauted House",
  "Run Gorgonzola Run",
  "Charbroil Fair",
  "Salvador Cauliflower"
];


let currentRandomBurger = RandomBurgerNames[Math.floor(Math.Random())]
const generateBtn = document.querySelector("#randomBurger-output");

writeRandomBurger = () => {
  const randomBurgerText = document.querySelector("#randomBurger-btn");
  randomBurgerText.value = currentRandomBurger;
}

generateBtn.addEventListener("click", writeRandomBurger);