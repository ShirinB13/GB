const request = require("supertest");
const app = require("./index.js");
const mysql = require("mysql");

test("test database connection", (done) => {
  const db = mysql.createConnection({
    host: "localhost",
    user: "test_goldbubbleapp",
    password: "qwerty",
    database: "test_goldbubble",
  });
  db.connect((err) => {
    if (err) {
      done(err);
      return;
    }
    console.log("Connected to database");
    global.db = db;
    done();
  });
});

describe("./", function () {
  let server;

  beforeAll(async () => {
    server = await new Promise((resolve, reject) => {
      const s = app.listen(0, (err) => {
        if (err) {
          return reject(err);
        }
        resolve(s);
      });
    });
  });

  afterAll(async () => {
    await server.close();
  });

  it("responds with status 200", function (done) {
    request(app).get("/").expect(200, done);
  });
});

beforeAll(async () => {
  server = app.listen(0, () => {
    const address = server.address();
    console.log(`Server listening on port ${address.port}`);
  });
});

test("should allow access to /history page without logging in", async () => {
  const res = await request(app).get("/history");
  expect(res.statusCode).toEqual(200);
});
test("should allow access to /media page without logging in", async () => {
  const res = await request(app).get("/history");
  expect(res.statusCode).toEqual(200);
});
test("should allow access to /art page without logging in", async () => {
  const res = await request(app).get("/history");
  expect(res.statusCode).toEqual(200);
});
test("should allow access to /computing page without logging in", async () => {
  const res = await request(app).get("/history");
  expect(res.statusCode).toEqual(200);
});

describe("GET /search", () => {
  it("should redirect to /art when searching for art in the search tab", async () => {
    const res = await request(app).get("/search").query({ query: "art" });

    console.log(res.header);
    expect(res.status).toEqual(302);
    expect(res.header.location).toEqual("art");
  });
});
describe("GET /search", function () {
  it("should redirect to the correct page with query parameter", function (done) {
    const term = "art";
    const expectedUrl = term;

    request(app)
      .get("/search")
      .query({ query: term })
      .expect(302)
      .expect("Location", expectedUrl)
      .end(done);
  });
});

describe("GET /search", () => {
  it("should redirect to the correct URL when searching for any topic", async () => {
    const searchTerms = {
      art: "art",
      anthropology: "anthropology",
      business: "business",
      "computer science": "computerscience",
      computing: "computing",
      dance: "dance&performance",
      design: "design",
      education: "education",
      english: "english",
      game: "gamescomputing",
      history: "history",
      languages: "languages",
      law: "law",
      media: "media",
      music: "music",
      politics: "politics",
      psychology: "psychology",
      sociology: "sociology",
      theatre: "theatre",
      visual: "visualcultures",
      cultures: "visualcultures",
    };

    for (const [term, expectedUrl] of Object.entries(searchTerms)) {
      const res = await request(app)
        .get("/search")
        .query({ query: term })
        .expect(302);

      expect(res.header.location).toEqual(expectedUrl);
    }
  });
});

describe("addpost", () => {
  it("if user types in URL addpost it should redirect to /register", async () => {
    const response = await request(app)
      .get("/addpost")
      .set("Accept", "text/html");

    expect(response.status).toBe(302);
    expect(response.header.location).toBe("/register");
  });
});

describe("register", () => {
  it("should return an error when the user submits blank fields", async () => {
    const response = await request(app)
      .post("/register")
      .send({ username: "", psw: "" })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Username and password are required");
  });
});

describe("register", () => {
  it("should return an error when the user submits wrong password", async () => {
    const response = await request(app)
      .post("/register")
      .send({ username: "maya123", psw: "wrongpassword" })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Username and password are required");
  });
});

describe("signup", () => {
  it("should return an error when the user submits blank fields", async () => {
    const response = await request(app)
      .post("/registered")
      .send({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        plainTextPassword: "",
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("All the fields are required");
  });
});

describe("signup", () => {
  it("should return an error when the user submits a password that is too easy", async () => {
    const response = await request(app)
      .post("/registered")
      .send({
        firstname: "John",
        lastname: "Doe",
        username: "jdoe123",
        email: "jdoe@gold.ac.uk",
        plainTextPassword: "0",
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("All the fields are required");
  });
});

describe("signup", () => {
  it("should return an error when the user submits wrong email", async () => {
    const response = await request(app)
      .post("/registered")
      .send({
        firstname: "jane",
        lastname: "smith",
        username: "jsmith",
        email: "jsmith",
        plainTextPassword: "Password1",
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("All the fields are required");
  });
});
