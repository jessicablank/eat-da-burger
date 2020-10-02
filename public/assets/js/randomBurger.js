function getBurger(){
  const randomBurgerOutput= document.getElementById("randomBurgerOutput");
  
//Add burger or Belcher names in alphabetical order please!
  const RandomBurgerNames= [
"A Leek of Their Own",
"All In A Glaze Work",
"Bohemian Radishy",
"Breaking Radish",
"Butterface",
"Charbroil Fair",
"Curd-fect Strangers",
"Edamame Dearest",
"Fig Lebowski",
"Grandpa Muenster",
"Jagged Little Dill",
"Judy Garlic",
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
"To Err Is Cumin",
"Top Bun",
"Weekend at Bearnaise",
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






