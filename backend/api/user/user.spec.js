const app = require("../../index");
const request = require("supertest");
const should = require("should");
const models = require("../../models");

describe("GET /users 는", () => {
  describe("성공시", () => {
    before(() => {
      return models.sequelize.sync({ force: true });
    });
    it.only("유저 객체를 배열 형태로 반환 해야한다.", (done) => {
      request(app)
        .get("/users")
        .end((err, res) => {
          // console.log(res.body);
          res.body.should.be.instanceOf(Array);
          done();
        });
    });

    it("limit 갯수 만큼만 가져와야 한다.", (done) => {
      request(app)
        .get("/users?limit=2")
        .end((err, res) => {
          res.body.should.have.lengthOf(2);
          done();
        });
    });

    describe("실패시", () => {
      it("limit이 숫자형이 아닐경우 400", (done) => {
        request(app).get("/users?limit=two").expect(400).end(done);
      });
    });
  });
});

describe("GET /users/:id 은", () => {
  describe("성공시", () => {
    it("id가 1인 유저객체를 반환한다", (done) => {
      request(app)
        .get("/users/1")
        .end((err, res) => {
          res.body.should.have.property("id", 1);
          done();
        });
    });
  });

  describe("실패시", () => {
    it("id가 숫자가 아닐경우 400을 응답한다.", (done) => {
      request(app).get("/users/one").expect(400).end(done);
    });
    it("id로 유저를 찾을 수 없을경우 404를 응답한다.", (done) => {
      request(app).get("/users/9999").expect(404).end(done);
    });
  });
});

describe("DELETE /users/:id 은", () => {
  describe("성공시", () => {
    it("204를 응답한다.", (done) => {
      request(app).delete("/users/1").expect(204).end(done);
    });
  });

  describe("실패시", () => {
    it("id가 숫자가 아닐경우 400으로 응답한다.", (done) => {
      request(app).delete("/users/one").expect(400).end(done);
    });
  });
});

describe("POST /users 은", () => {
  describe("성공시", () => {
    let name = "daniel",
      body;
    before((done) => {
      request(app)
        .post("/users")
        .send({ name })
        .expect(201)
        .end((err, res) => {
          body = res.body;
          done();
        });
    });
    // 비동기 테스트 케이스가 아닐경우 done은 빼준다.
    it("생성된 유저 객체를 반환한다", () => {
      body.should.have.property("id");
    });
    it("입력한 name을 반환한다", () => {
      body.should.have.property("name", name);
    });
  });
  describe("실패시", () => {
    it("name params 누락시 400을 반환", (done) => {
      request(app).post("/users").send({}).expect(400).end(done);
    });

    it("name이 중복일경우 409를 반환한다", (done) => {
      request(app)
        .post("/users")
        .send({ name: "daniel" })
        .expect(409)
        .end(done);
    });
  });
});

describe("PUT /user/:id 은", () => {
  describe("성공시", () => {
    it("변경된 name을 응답한다", (done) => {
      const name = "chally";

      request(app)
        .put("/users/3")
        .send({ name })
        .end((err, res) => {
          res.body.should.have.property("name", name);
          done();
        });
    });
  });
  describe("실패시", () => {
    it("정수가 아닌 id일경우 400응답", (done) => {
      request(app).put("/users/one").expect(400).end(done);
    });
    it("name이 없을경우 400응답", (done) => {
      request(app).put("/users/1").send({}).expect(400).end(done);
    });

    it("없는 유저일 경우 404응답", (done) => {
      request(app)
        .put("/users/9999")
        .send({ name: "foo" })
        .expect(404)
        .end(done);
    });

    it("이름이 중복일 경우 409 응답", (done) => {
      request(app)
        .put("/users/3")
        .send({ name: "hakgu2" })
        .expect(409)
        .end(done);
    });
  });
});
