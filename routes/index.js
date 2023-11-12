var express = require("express");
var router = express.Router();

/* GET home page. */

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/new", function (req, res, next) {
  res.render("form", { title: "New Message Form" });
});

// adding the new route
router.post("/new", function (req, res, next) {
  // Access the form data which is filled
  const author = req.body.author;
  const message = req.body.message;

  // Adding new message to store it in the databse
  const newmessage = {
    text: message,
    user: author,
    added: new Date(),
  };
  messages.push(newmessage);
  res.redirect("/");
});
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

module.exports = router;
