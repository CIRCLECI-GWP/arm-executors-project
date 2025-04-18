var request = require("supertest"),
  assert = require("assert"),
  helloWorld = require("../app.js"),
  base_url = "http://localhost:5000";

describe("Welcome to CI/CD Server", function () {
  describe("GET /", function () {
    it("returns status code 200", function (done) {
      request(base_url)
        .get("/")
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          helloWorld.close();
          done();
        });
    });
  });

  describe("welcomeMessage", function () {
    it("Validate Message", function () {
      var res = helloWorld.welcomeMessage();
      var message = "Welcome to CI/CD 101 using CircleCI!";
      assert.equal(res, message);
    });
  });
});
