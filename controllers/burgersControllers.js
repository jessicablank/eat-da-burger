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
  burger.create({ name: req.body.name }, (result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});


router.put("/api/cats/:id/sleepy", (req, res) => {
  const condition = { id: req.params.id };
  const update = { sleepy: req.body.value };

  cat.update(update, condition, (result) => {
    if (result.affectedRows === 0) {
      // If no rows were affected, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });
});



// Export routes for server.js to use.
module.exports = router;
