
const orm = require("../config/orm.js");

const burger = {
  all: (cb) => {
    orm.all("burgers", (res) => {
      cb(res);
    });
  },
 
  create: (newBurger, cb) => {
    orm.create("burgers", newBurger, (res) => {
      cb(res);
    });
  },
  update: (burgerData, criteria, cb) => {
    orm.update("burgers", burgerData, criteria, (res) => {
      cb(res);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
