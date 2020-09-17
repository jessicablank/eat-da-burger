# Eat Da Burger!
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/jessicablank/eat-da-burger)](https://github.com/jessicablank/eat-da-burger/issues)
[![GitHub stars](https://img.shields.io/github/stars/jessicablank/eat-da-burger)](https://github.com/jessicablank/eat-da-burger/stargazers)
![GitHub](https://img.shields.io/github/followers/jessicablank?label=follow&style=social)

[:hamburger: Deployed on Heroku: https://secure-shore-09876.herokuapp.com/](https://secure-shore-09876.herokuapp.com/)

## Description:  
 A fun way to demonstrate mySQL database methodology with a tribute to Bob's Burgers! 
 - CREATE: Order a burger
 - READ: The burger will appear in the "Burgers Ready to Be Devoured" column by default. Once updated, the burger may appear in the "mmm..Devoured Burgers" column.
 - UPDATE: The user can move the burger between columns via the *Devour It* and *Make It Again* buttons.
 - DELETE: The user can delete the burger from the database via the **Send It Back!** and **X** buttons. 

 Originally a homework assignment without starter code for web-development bootcamp, now a fun project to keep mySQL skills fresh.

### Updated Application After Refactoring:

![ScreenShot](./screenshotv2.PNG)

### Original MVP:

![ScreenShot](./screenshot.PNG)
    
## More Details:
* [Local Installation](#local-installation-instructions)
* [File Structure](#file-structure)
* [Technologies Used](#technologies-used)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license-info)

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
|        └── service-worker.js
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