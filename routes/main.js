module.exports = function (app, blogData) {
  // Handle our routes
  app.get("/", function (req, res) {
    res.render("index.ejs", { user: req.session.user });
  });

  app.get("/register", function (req, res) {
    res.render("register.ejs", blogData);
  });

  // needed for hashing passwords (npm install bcrypt if you don't have already)
  const bcrypt = require("bcrypt");

  // Define the login route
  app.post("/register", function (req, res) {
    const username = req.body.username;
    const password = req.body.psw;

    console.log("username:", username);
    console.log("password:", password);

    // Query the database for the user with the matching username
    db.query(
      "SELECT * FROM users WHERE username = ?",
      [username],
      function (err, result) {
        if (err) throw err;

        // If there is no user with the matching username, redirect back to the login page
        if (result.length === 0) {
          console.log("No user found with username:", username);
          res.redirect("/register");
          return;
        }

        const user = result[0];

        console.log("user:", user);

        // Verify the user's password
        const isPasswordValid = bcrypt.compareSync(password, user.psw);

        if (isPasswordValid) {
          // Create a session with the user's information
          const sessionData = {
            username: user.username,
            permissions: user.permissions,
            firstname: user.firstname,
          };

          // Save the session data to the database
          req.session.user = sessionData;

          // Redirect the user to the home page
          res.redirect("/");
        } else {
          // The password is incorrect
          console.log("Incorrect password for user:", username);
          res.render("register.ejs", {
            message: "Invalid username or password",
          });
        }
      }
    );
  });

  // Define the logout route
  app.get("/logout", function (req, res) {
    // Destroy the session data
    req.session.destroy();

    // Redirect the user to the index page
    res.redirect("/");
  });

  app.get("/art", function (req, res) {
    const user = req.session.user;
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Art";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result, user: user });
      res.render("art.ejs", newData);
    });
  });
  app.get("/design", function (req, res) {
    const user = req.session.user;
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Design";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result, user: user });
      res.render("design.ejs", newData);
    });
  });

  app.get("/english", function (req, res) {
    const user = req.session.user;
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "English";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result, user: user });
      res.render("english.ejs", newData);
    });
  });

  app.get("/music", function (req, res) {
    const user = req.session.user;
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Music";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result, user: user });
      res.render("music.ejs", newData);
    });
  });

  app.get("/theatre", function (req, res) {
    const user = req.session.user;
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Theatre";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result, user: user });
      res.render("theatre.ejs", newData);
    });
  });

  app.get("/visualcultures", function (req, res) {
    const user = req.session.user;
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Visual Cultures";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result, user: user });
      res.render("visualcultures.ejs", newData);
    });
  });

  app.get("/dance&performance", function (req, res) {
    const user = req.session.user;
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Dance and Performance";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result, user: user });
      res.render("dance&performance.ejs", newData);
    });
  });

  app.get("/languages", function (req, res) {
    const user = req.session.user;
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Languages";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result, user: user });
      res.render("languages.ejs", newData);
    });
  });
  app.get("/signup", function (req, res) {
    res.render("signup.ejs", blogData);
  });

  app.get("/anthropology", function (req, res) {
    const user = req.session.user;
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Anthropology";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result, user: user });
      res.render("anthropology.ejs", newData);
    });
  });

  app.get("/history", function (req, res) {
    const user = req.session.user;
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "History";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result, user: user });
      res.render("history.ejs", newData);
    });
  });

  app.get("/media", function (req, res) {
    const user = req.session.user;
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Media";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result, user: user });
      res.render("media.ejs", newData);
    });
  });

  app.get("/politics", function (req, res) {
    const user = req.session.user;
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Politics";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result, user: user });
      res.render("politics.ejs", newData);
    });
  });

  app.get("/sociology", function (req, res) {
    const user = req.session.user;
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Sociology";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result, user: user });
      res.render("sociology.ejs", newData);
    });
  });

  app.get("/psychology", function (req, res) {
    const user = req.session.user;
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Psychology";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result, user: user });
      res.render("psychology.ejs", newData);
    });
  });

  app.get("/education", function (req, res) {
    const user = req.session.user;
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Education";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result, user: user });
      res.render("education.ejs", newData);
    });
  });

  app.get("/business", function (req, res) {
    const user = req.session.user;
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Business";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result, user: user });
      res.render("business.ejs", newData);
    });
  });

  app.get("/management", function (req, res) {
    const user = req.session.user;
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Management";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result, user: user });
      res.render("Management.ejs", newData);
    });
  });

  app.get("/law", function (req, res) {
    const user = req.session.user;
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Law";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result, user: user });
      res.render("Law.ejs", newData);
    });
  });

  app.get("/computerscience", function (req, res) {
    const user = req.session.user;
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Computer Science";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result, user: user });
      res.render("computerscience.ejs", newData);
    });
  });

  app.get("/computing", function (req, res) {
    const user = req.session.user;
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Computing";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result, user: user });
      res.render("computing.ejs", newData);
    });
  });

  app.get("/gamescomputing", function (req, res) {
    const user = req.session.user;
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Games Computing";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result, user: user });
      res.render("gamescomputing.ejs", newData);
    });
  });

  app.get("/search", function (req, res) {
    let keyword = req.query.keyword;
    let sqlquery = "SELECT * FROM posts WHERE post_title LIKE ?";
    let searchValue = "%" + keyword + "%";
    db.query(sqlquery, searchValue, (err, result) => {
      if (err) {
        res.redirect("./");
      }
      let newData = Object.assign({}, blogData, { posts: result });
      console.log(newData);
      res.render("search.ejs", newData);
    });
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

  // Define the add post route
  app.get("/addpost", function (req, res) {
    // Check if the user is logged in
    if (!req.session.user) {
      res.redirect("/register");
      return;
    }

    res.render("addpost.ejs");
  });

  app.post("/addpost", function (req, res) {
    // Check if the user is logged in
    if (!req.session.user) {
      res.redirect("/register");
      return;
    }

    // Get the post data from the request body
    const title = req.body.post_title;
    const content = req.body.post_content;
    const topic_title = req.body.topic_title;

    // Insert the post into the database
    db.query(
      "INSERT INTO posts (post_date, post_title, post_content, username, topic_title) VALUES (?, ?, ?, ?, ?)",
      [new Date(), title, content, req.session.user.username, topic_title],
      function (err, result) {
        if (err) throw err;

        // Redirect the user to the home page
        res.redirect("/");
      }
    );
  });

  // handle POST request to save signup information
  app.post("/registered", function (req, res) {
    const firstName = req.body.FirstName;
    const lastName = req.body.LastName;
    const username = req.body.username;
    const email = req.body.email;
    const plainTextPassword = req.body.psw;

    // Generate a random salt
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);

    // Hash the password using the salt
    const hashedPassword = bcrypt.hashSync(plainTextPassword, salt);

    let sqlquery = `INSERT INTO users (firstname, surname, username, email, psw)
                  VALUES (?, ?, ?, ?, ?)`;

    db.query(
      sqlquery,
      [firstName, lastName, username, email, hashedPassword],
      function (err, result) {
        if (err) throw err;
        console.log("Saved signup information to MySQL");
        res.redirect("/");
      }
    );
  });

  // Define the route for deleting a post
  app.delete("/posts/:postId", function (req, res) {
    const postId = req.params.postId;
    const username = req.query.username; // read username from query parameters

    // Check if the user is logged in
    if (!req.session.user || req.session.user.username !== username) {
      console.log(req.session.user);
      res.status(403).send("Unauthorized");
      return;
    }

    // Delete the post from the database
    db.query(
      "DELETE FROM posts WHERE post_id = ? AND username = ?",
      [postId, username],
      function (err, result) {
        if (err) {
          console.log(err);
          res.status(500).send("Error deleting post from database");
        } else {
          console.log(result);
          res.send("Post deleted successfully");
        }
      }
    );
  });

  // HASHING PASSWORDS
  // const password = "";

  // // Generate a salt to use when hashing the password
  // const salt = bcrypt.genSaltSync(10);

  // // Hash the password using the salt
  // const hashedPassword = bcrypt.hashSync(password, salt);

  // console.log("Password:", password);
  // console.log("Hashed Password:", hashedPassword);
};
