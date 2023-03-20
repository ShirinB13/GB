module.exports = function (app, blogData) {
  // Handle our routes
  app.get("/", function (req, res) {
    res.render("index.ejs", blogData);
  });
  app.get("/search", function (req, res) {
    res.render("search.ejs", blogData);
  });
  app.get("/register", function (req, res) {
    res.render("register.ejs", blogData);
  });
  app.get("/signup", function (req, res) {
    res.render("signup.ejs", blogData);
  });

  app.get("/blogs", function (req, res) {
    let sqlquery = "SELECT * FROM posts";
    db.query(sqlquery, (err, result) => {
      if (err) {
        res.redirect("./");
      }
      let newData = Object.assign({}, blogData, { posts: result });
      console.log(newData);
      res.render("blogs.ejs", newData);
    });
  });
  // Add a New Post page
  app.get("/addpost", function (req, res) {
    // Set the initial values for the form
    let initialvalues = {
      post_date: "",
      firstname: "",
      surname: "",
      email: "",
      username: "",
      topic_title: "",
      post_title: "",
      post_content: "",
    };

    // Pass the data to the EJS page and view it
    return renderAddNewPost(res, initialvalues, "");
  });

  // Helper function to render the Add New Post page
  function renderAddNewPost(res, initialvalues, errormessage) {
    let data = Object.assign({}, blogData, initialvalues, {
      errormessage: errormessage,
    });
    console.log(data);
    res.render("addpost.ejs", data);
    return;
  }

  // Add a New Post page form handler
  app.post("/postadded", function (req, res) {
    // Check if the user already exists
    let sqlquery = "SELECT * FROM users WHERE username = ?";
    let username = req.body.username;
    db.query(sqlquery, username, (err, result) => {
      if (err) {
        console.error(err.message);
        return;
      }
      if (result.length == 0) {
        // Add the user to the database
        sqlquery =
          "INSERT INTO users (firstname, surname, email, username) VALUES (?, ?, ?, ?)";
        let userRecord = [
          req.body.firstname,
          req.body.surname,
          req.body.email,
          req.body.username,
        ];
        db.query(sqlquery, userRecord, (err, result) => {
          if (err) {
            console.error(err.message);
            return;
          }
          console.log("User added to database");
        });
      }

      // Insert the post into the database
      sqlquery =
        "INSERT INTO posts (post_date, post_title, post_content, username, topic_title) VALUES (?, ?, ?, ?, ?)";
      let postRecord = [
        req.body.post_date,
        req.body.post_title,
        req.body.post_content,
        req.body.username,
        req.body.topic_title,
      ];
      db.query(sqlquery, postRecord, (err, result) => {
        if (err) {
          console.error(err.message);
          return;
        }
        res.send("Your post has been added to the forum");
      });
    });
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
