const express = require("express");


const burger = require("../models/burger.js");

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create({ burger_name: req.body.burger_name, devoured: req.body.devoured }, (result) => {
    res.json({ id: result.insertId });
  });
});


router.put("/api/burgers/:id", (req, res) => {
  const condition = { id: req.params.id };
  const update = { devoured: req.body.value };

  burgers.update(update, condition, (result) => {
    if (result.affectedRows === 0) {

      return res.status(404).end();
    }
    res.status(200).end();
  });
});



// Export routes for server.js to use.
module.exports = router;
