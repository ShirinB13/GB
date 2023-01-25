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
};
