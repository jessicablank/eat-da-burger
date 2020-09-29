

function getBurger(){
  const randomBurgerOutput= document.getElementById("randomBurgerOutput");

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
    "Fig Lebowski",
    "Butterface",
    "Breaking Radish",
    "Edamame Dearest",
    "Krauted House",
    "Run Gorgonzola Run",
    "Charbroil Fair",
    "Salvador Cauliflower"
  ];

  
  let currentRandomBurger = RandomBurgerNames[Math.floor(Math.random()*RandomBurgerNames.length)]
  console.log("The ChalkBoard Says: " + currentRandomBurger)
  randomBurgerOutput.value=currentRandomBurger;
}






