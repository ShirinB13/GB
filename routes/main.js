module.exports = function (app, blogData) {
  // Handle our routes
  app.get("/", function (req, res) {
    res.render("index.ejs", blogData);
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

  app.get("/register", function (req, res) {
    res.render("register.ejs", blogData);
  });

  app.get("/art", function (req, res) {
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Art";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result });
      res.render("art.ejs", newData);
    });
  });
  app.get("/design", function (req, res) {
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Design";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result });
      res.render("design.ejs", newData);
    });
  });

  app.get("/english", function (req, res) {
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "English";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result });
      res.render("english.ejs", newData);
    });
  });

  app.get("/music", function (req, res) {
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Music";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result });
      res.render("music.ejs", newData);
    });
  });

  app.get("/theatre", function (req, res) {
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Theatre";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result });
      res.render("theatre.ejs", newData);
    });
  });

  app.get("/visualcultures", function (req, res) {
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Visual Cultures";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result });
      res.render("visualcultures.ejs", newData);
    });
  });

  app.get("/dance&performance", function (req, res) {
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Dance and Performance";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result });
      res.render("dance&performance.ejs", newData);
    });
  });

  app.get("/languages", function (req, res) {
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Languages";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result });
      res.render("languages.ejs", newData);
    });
  });
  app.get("/signup", function (req, res) {
    res.render("signup.ejs", blogData);
  });

  app.get("/anthropology", function (req, res) {
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Anthropology";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result });
      res.render("anthropology.ejs", newData);
    });
  });

  app.get("/history", function (req, res) {
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "History";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result });
      res.render("history.ejs", newData);
    });
  });

  app.get("/media", function (req, res) {
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Media";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result });
      res.render("media.ejs", newData);
    });
  });

  app.get("/politics", function (req, res) {
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Politics";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result });
      res.render("politics.ejs", newData);
    });
  });

  app.get("/sociology", function (req, res) {
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Sociology";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result });
      res.render("sociology.ejs", newData);
    });
  });

  app.get("/psychology", function (req, res) {
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Psychology";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result });
      res.render("psychology.ejs", newData);
    });
  });

  app.get("/education", function (req, res) {
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Education";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result });
      res.render("education.ejs", newData);
    });
  });

  app.get("/business", function (req, res) {
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Business";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result });
      res.render("business.ejs", newData);
    });
  });

  app.get("/management", function (req, res) {
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Management";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result });
      res.render("Management.ejs", newData);
    });
  });

  app.get("/law", function (req, res) {
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Law";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result });
      res.render("Law.ejs", newData);
    });
  });

  app.get("/computerscience", function (req, res) {
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Computer Science";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result });
      res.render("computerscience.ejs", newData);
    });
  });

  app.get("/computing", function (req, res) {
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Computing";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result });
      res.render("computing.ejs", newData);
    });
  });

  app.get("/gamescomputing", function (req, res) {
    let sqlquery = "SELECT * FROM posts WHERE topic_title = ?";
    let topic = "Games Computing";
    db.query(sqlquery, topic, function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      let newData = Object.assign({}, blogData, { posts: result });
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
