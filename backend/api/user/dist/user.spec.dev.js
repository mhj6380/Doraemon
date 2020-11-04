"use strict";

var app = require("../../index");

var request = require("supertest");

var should = require("should");

var models = require("../../models");

describe("GET /users 는", function () {
  describe("성공시", function () {
    before(function () {
      return models.sequelize.sync({
        force: true
      });
    });
    it.only("유저 객체를 배열 형태로 반환 해야한다.", function (done) {
      request(app).get("/users").end(function (err, res) {
        // console.log(res.body);
        res.body.should.be.instanceOf(Array);
        done();
      });
    });
    it("limit 갯수 만큼만 가져와야 한다.", function (done) {
      request(app).get("/users?limit=2").end(function (err, res) {
        res.body.should.have.lengthOf(2);
        done();
      });
    });
    describe("실패시", function () {
      it("limit이 숫자형이 아닐경우 400", function (done) {
        request(app).get("/users?limit=two").expect(400).end(done);
      });
    });
  });
});
describe("GET /users/:id 은", function () {
  describe("성공시", function () {
    it("id가 1인 유저객체를 반환한다", function (done) {
      request(app).get("/users/1").end(function (err, res) {
        res.body.should.have.property("id", 1);
        done();
      });
    });
  });
  describe("실패시", function () {
    it("id가 숫자가 아닐경우 400을 응답한다.", function (done) {
      request(app).get("/users/one").expect(400).end(done);
    });
    it("id로 유저를 찾을 수 없을경우 404를 응답한다.", function (done) {
      request(app).get("/users/9999").expect(404).end(done);
    });
  });
});
describe("DELETE /users/:id 은", function () {
  describe("성공시", function () {
    it("204를 응답한다.", function (done) {
      request(app)["delete"]("/users/1").expect(204).end(done);
    });
  });
  describe("실패시", function () {
    it("id가 숫자가 아닐경우 400으로 응답한다.", function (done) {
      request(app)["delete"]("/users/one").expect(400).end(done);
    });
  });
});
describe("POST /users 은", function () {
  describe("성공시", function () {
    var name = "daniel",
        body;
    before(function (done) {
      request(app).post("/users").send({
        name: name
      }).expect(201).end(function (err, res) {
        body = res.body;
        done();
      });
    }); // 비동기 테스트 케이스가 아닐경우 done은 빼준다.

    it("생성된 유저 객체를 반환한다", function () {
      body.should.have.property("id");
    });
    it("입력한 name을 반환한다", function () {
      body.should.have.property("name", name);
    });
  });
  describe("실패시", function () {
    it("name params 누락시 400을 반환", function (done) {
      request(app).post("/users").send({}).expect(400).end(done);
    });
    it("name이 중복일경우 409를 반환한다", function (done) {
      request(app).post("/users").send({
        name: "daniel"
      }).expect(409).end(done);
    });
  });
});
describe("PUT /user/:id 은", function () {
  describe("성공시", function () {
    it("변경된 name을 응답한다", function (done) {
      var name = "chally";
      request(app).put("/users/3").send({
        name: name
      }).end(function (err, res) {
        res.body.should.have.property("name", name);
        done();
      });
    });
  });
  describe("실패시", function () {
    it("정수가 아닌 id일경우 400응답", function (done) {
      request(app).put("/users/one").expect(400).end(done);
    });
    it("name이 없을경우 400응답", function (done) {
      request(app).put("/users/1").send({}).expect(400).end(done);
    });
    it("없는 유저일 경우 404응답", function (done) {
      request(app).put("/users/9999").send({
        name: "foo"
      }).expect(404).end(done);
    });
    it("이름이 중복일 경우 409 응답", function (done) {
      request(app).put("/users/3").send({
        name: "hakgu2"
      }).expect(409).end(done);
    });
  });
});