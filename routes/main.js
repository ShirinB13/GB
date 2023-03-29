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
        res.redirect("/" + req.body.topic_title);
      });
    });
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

  // app.delete("/posts/:id", function (req, res) {
  //   var postId = req.params.id;

  //   db.query(
  //     "DELETE FROM posts WHERE post_id = ?",
  //     [postId],
  //     function (err, result) {
  //       if (err) {
  //         console.log(err);
  //         res.status(500).send("Error deleting post.");
  //       } else if (result.affectedRows === 0) {
  //         res.status(404).send("Post not found.");
  //       } else {
  //         res.status(200).send("Post deleted successfully.");
  //       }
  //     }
  //   );
  // });

  app.delete("/posts/:postId", function (req, res) {
    const postId = req.params.postId;
    const username = req.body.username;

    db.query(
      "SELECT * FROM posts WHERE post_id = ?",
      [postId],
      function (err, result) {
        if (err) {
          console.log(err);
          res.status(500).send("Internal Server Error");
        } else if (result.length === 0) {
          res.status(404).send("Post Not Found");
        } else if (result[0].username !== username) {
          res.status(403).send("Forbidden");
        } else {
          db.query(
            "DELETE FROM posts WHERE post_id = ?",
            [postId],
            function (err, result) {
              if (err) {
                console.log(err);
                res.status(500).send("Internal Server Error");
              } else {
                res.sendStatus(200);
              }
            }
          );
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
