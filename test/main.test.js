const mainHandler = require("../routes/main.js");
const mysql = require("mysql");

describe("DELETE /posts/:postId", function () {
  let connection;

  beforeAll(function (done) {
    connection = mysql.createConnection({
      host: "localhost",
      user: "test_goldbubbleapp",
      password: "qwerty",
      database: "test_goldbubble",
    });
    connection.connect(done);
  });

  beforeEach(function (done) {
    const user = { username: "testuser", firstname: "Test", surname: "User" };
    connection.query(
      "INSERT INTO test_users SET ?",
      user,
      function (err, result) {
        if (err) throw err;
        const postId = 1234;
        const username = "testuser";
        const testPost = { post_id: postId, username: username };
        connection.query("INSERT INTO test_posts SET ?", testPost, done);
      }
    );
  });

  afterEach(function (done) {
    connection.query(
      "DELETE FROM test_posts WHERE post_id = 1234 AND username = 'testuser'",
      function (err, result) {
        if (err) throw err;
        connection.query(
          "DELETE FROM test_users WHERE username = 'testuser'",
          done
        );
      }
    );
  });

  afterAll(function (done) {
    connection.end(done);
  });

  it("should delete the post with the given ID", function (done) {
    const postId = 1234;
    const username = "testuser";
    const req = {
      params: { postId },
      query: { username },
      session: { user: { username } },
    };
    const res = {
      send: function (message) {
        console.log("Post deleted successfully");
        connection.query(
          "SELECT * FROM test_posts WHERE post_id = ?",
          postId,
          function (error, results, fields) {
            if (error) throw error;
            expect(results.length).toBe(0);
            done();
          }
        );
      },
      status: function (statusCode) {
        console.log("Status code:", statusCode);
        expect(statusCode).toBe(200);
        return this;
      },
    };
    mainHandler.deletePost(req, res);
  });
});
