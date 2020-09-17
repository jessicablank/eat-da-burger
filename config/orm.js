
const connection = require("../config/connection.js");

// Object for all our SQL statement functions.
const orm = {
  all: (tableInput, cb) => {
    const queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  //insert a new burger
  create: (table, newRowData, cb) => {
    const queryString = "INSERT INTO ?? SET ?";
    const values = [table, newRowData];

    connection.query(queryString, values, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  
//update burger
  update: (table, updateValues, condition, cb) => {
    const queryString = "UPDATE ?? SET ? WHERE ?";
    const values = [table, updateValues, condition];

    console.log(queryString);
    connection.query(queryString, values, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },


delete: (table, condition, cb) => {
  const queryString = "DELETE FROM ?? WHERE ?";
  const values = [table, condition];

  console.log(queryString);
  connection.query(queryString, values, (err, result) => {
    if (err) {
      throw err;
    }
    cb(result);
  });
},

};

// Export the orm object
module.exports = orm;
