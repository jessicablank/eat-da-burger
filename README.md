# Eat Da Burger!
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/jessicablank/eat-da-burger)](https://github.com/jessicablank/eat-da-burger/issues)
[![GitHub stars](https://img.shields.io/github/stars/jessicablank/eat-da-burger)](https://github.com/jessicablank/eat-da-burger/stargazers)
![GitHub](https://img.shields.io/github/followers/jessicablank?label=follow&style=social)

[:hamburger: Deployed on Heroku: https://secure-shore-09876.herokuapp.com/](https://secure-shore-09876.herokuapp.com/)

## Description:  
 A fun way to practice mySQL database CRUD methodology with a tribute to the show Bob's Burgers! I invite you to learn more and possibly contribute a random burger or Belcher family member. 

 ## Table of Contents:
* [Project Story](#project-story)
* [Local Installation](#local-installation-instructions)
* [File Structure](#file-structure)
* [Technologies Used](#technologies-used)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license-info)

## The Story
### MVP
The project started as a coding bootcamp assignment for a restaurant application. The minimum requirements were:
- User inputs the name of the burger they would like to eat.
- All inputted burgers are stored in a mySQL database. 
- When a user submits a burger's name, the burger will be displayed on the left side of the page waiting to be devoured. 
- Each waiting burger will have a `devour it!` button. When the user clicks the button, the burger will move the right side of the page. 

The reason it's called "Coding Bootcamp" and not "Coding Fun Times" is because the course moves _fast_. We would learn a new concept - in this case mySQL and NPM Handlebars.js - and be expected to submit a homework assignment a few days later. As a result, my homework submissions often just met the Minimum Viable Product (MVP) requirements. After bootcamp classes ended, I decided to take some time to go back to improve my homework submission. 

### CRUD
The first improvement for this homework assignment was to add database functionality. The MVP I submitted did not have a "delete" function. This means my project did not fulfill the full lifecycle of CRUD (more details below). This also means someone could submit an untoward burger name on my deployed application and everyone who visited the site would be able to read it. In fact, after I added the delete function this very scenario played out. No, I won't tell you the inappropriate (but hilarious) burger name I discovered all over my project on a Wednesday morning. You can ask me via email :grinning:

Now the application had full CRUD capabilities:
 - CREATE: Order a burger
 - READ: The burger will appear in the "Burgers Ready to Be Devoured" column by default. Once updated, the burger may appear in the "mmm..Devoured Burgers" column.
 - UPDATE: The user can move the burger between columns via the *Devour It* and *Make It Again* buttons.
 - DELETE: The user can delete the burger from the database via the *Send It Back!* and *X* buttons. 

 I was so excited. I updated the styling and added pictures from Bob's Burgers. I showed the project to my coworkers. They were impressed, but stumped. I was hoping the burger of the day art would inspire my users to type a clever burger name. Instead, the burger names were difficult to read. The styling intimidated my users into feeling something simple like "cheeseburger" would be inadequate. I also realized every time the page refreshed to move a burger, the pictures took some time to reload. Back to the refactoring.

 ### Final
 The first improvement was to move the images into the header to improve the look of reloading. Next, I created a random burger generator and styled it to look like the iconic chalkboard from the show. Initially 

### Original MVP:

![ScreenShot](./screenshot.PNG)

### Updated Application After Refactoring:

![ScreenShot](./screenshotv2.PNG)


    


## Local Installation Instructions
Clone the repo and install dependencies in terminal:
```
npm i

``` 
## File Structure
This project uses a custom ORM (Object Relational Mapper) to connect the code to the mySQL database. 
```
├── config
|  ├── connection.js
|  └── orm.js
├── controllers
|  └── burgersControllers.js
├── db
|  ├── schema.sql
|  └── seeds.sql
├── models
|  └── burger.js
├── package-lock.json
├── package.json
├── public
|  └── assets
|     ├── css
|     |  └── style.css
|     ├── img
|     |  ├── BobsBurgersList1.PNG
|     |  ├── BobsBurgersList2.PNG
|     |  ├── BurgerFamily.jpg
|     |  └── favicon.ico
|     └── js
|        ├── burgers.js
├── README.md
├── server.js
└── views
   ├── index.handlebars
   ├── layouts
   |  └── main.handlebars
   └── partials
      └── burgers
         └── burger-block.handlebars
```
## Technologies Used
- [BootStrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
- [NPM HandleBars](https://www.npmjs.com/package/handlebars)
- [NPM MySQL](https://www.npmjs.com/package/mysql)
- [NPM Express](https://www.npmjs.com/package/express)
- [NPM Express-HandleBars](https://www.npmjs.com/package/express-handlebars)



## Tests
*Original Criteria for MVP*
- WHEN the user submits a burger's name, THEN the app will display the burger on the left side of the page.
- WHEN The user clicks on the "Devour it" button, THEN correct burger will move to the right side of the page.
- The app will store every burger in the database, whether devoured or not. 

## Questions
You can reach the author, Jessica Blankemeier via [jessicablankemeier@gmail.com](mailto:jessicablankemeier@gmail.com)


## License
Copyright 2020 - present Jessica Blankemeier.
This project is licensed under the terms of the MIT license. 
This page has no license or affiliation with Fox entertainment and is for fan fun use only. 
More information is available at [opensource.org/licenses](https://opensource.org/licenses/MIT);