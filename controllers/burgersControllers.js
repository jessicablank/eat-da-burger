const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      burgers: data,
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", (req, res) => {
  burger.create({ burger_name: req.body.burger_name, devoured: req.body.devoured }, (result) => {
    res.json({ id: result.insertId });
  });
});


router.put("/api/burger/:id/devour", (req, res) => {
  const condition = { id: req.params.id };
  const update = { devoured: true };

  burger.update(update, condition, (result) => {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

router.delete("/api/burger/:id", (req, res) => {
  const condition = { id: req.params.id };
  
  burger.delete(condition, (result) => {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});



// Export routes for server.js to use.
module.exports = router;
