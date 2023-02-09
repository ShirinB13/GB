module.exports = function (app, blogData) {
  // Handle our routes
  app.get("/", function (req, res) {
    res.render("index.ejs", blogData);
  });
  app.get("/search", function (req, res) {
    res.render("search.ejs", blogData);
  });
  app.get("/addbook", function (req, res) {
    res.render("addbook.ejs", blogData);
  });
  app.get("/register", function (req, res) {
    res.render("register.ejs", blogData);
  });
  app.get("/signup", function (req, res) {
    res.render("signup.ejs", blogData);
  });
  app.post("/registered", function (req, res) {
    // saving data in database
    res.send(
      " Hello " +
        req.body.FirstName +
        " " +
        req.body.LastName +
        " you are now registered with the email address " +
        req.body.email
    );
  });
};
