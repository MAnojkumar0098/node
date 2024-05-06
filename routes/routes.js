let express = require("express");
let router = express.Router();

//granting permission based on query string using app.use()
router.use((req, res, next) => {
  if (req.query.grant) {
    next();
  }
  res.send("sorry no permission");
});

router.get("/", (req, res) => res.send("root"));
router.get("/:id", (req, res) => res.send("id"));

module.exports = router;
