const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models");
const { queryInterface } = sequelize;
const { hashPassword } = require("../helpers/bcrypt");
const { describe } = require("node:test");
const { signToken } = require("../helpers/jwt");

const user = {
  username: "user1",
  email: "user1@mail.com",
  password: hashPassword(`123456`),
  createdAt: new Date(),
  updatedAt: new Date(),
};


beforeAll(async () => {
  await queryInterface.bulkInsert("Users", [user], {});

});

describe("User Routes Test", () => {
  describe("POST /login", () => {
    describe("Success /login", () => {
      test("Should return an access_token object with status code 200", async () => {
        const loginCredentials = {
          email: "user1@mail.com",
          password: "123456",
        };

        let { body, status } = await request(app)
          .post("/login")
          .send(loginCredentials);

        expect(status).toBe(200);
        expect(body).toBeInstanceOf(Object);
        expect(body).toHaveProperty("access_token", expect.any(String));
        expect(body).not.toHaveProperty("password");
      });
    });

    describe("Failed /login", () => {
      describe("When email is not inputted", () => {
        test("Should return an error message with status code 401", async () => {
          const loginCredentials = {
            password: "123456",
          };

          let { body, status } = await request(app)
            .post("/login")
            .send(loginCredentials);

          console.log(body, status);
          expect(status).toBe(401);
          expect(body).toBeInstanceOf(Object);
          expect(body).toHaveProperty("message", "Email is required");
        });
      });

      describe("When password is not inputted", () => {
        test("Should return an error message with status code 401", async () => {
          const loginCredentials = {
            email: "admin123@gmail.com",
          };

          let { body, status } = await request(app)
            .post("/login")
            .send(loginCredentials);

          console.log(body, status);
          expect(status).toBe(401);
          expect(body).toBeInstanceOf(Object);
          expect(body).toHaveProperty("message", "Password is required");
        });
      });
      describe("When invalid/unregistered email is inputted", () => {
        test("Should return an error message with status code 401", async () => {
          const loginCredentials = {
            email: "unregistered@gmail.com",
            password: "123456",
          };

          let { body, status } = await request(app)
            .post("/login")
            .send(loginCredentials);

          console.log(body, status);
          expect(status).toBe(401);
          expect(body).toBeInstanceOf(Object);
          expect(body).toHaveProperty("message", "Invalid email/password!");
        });
      });
      describe("When wrong/unmatch password is inputted", () => {
        test("Should return an error message with status code 401", async () => {
          const loginCredentials = {
            email: "admin123@gmail.com",
            password: "wrongpass",
          };

          let { body, status } = await request(app)
            .post("/login")
            .send(loginCredentials);

          console.log(body, status);
          expect(status).toBe(401);
          expect(body).toBeInstanceOf(Object);
          expect(body).toHaveProperty("message", "Invalid email/password!");
        });
      });
    });
  });
});

afterAll(async () => {
  await queryInterface.bulkDelete("Users", null, {
    truncate: true,
    restartIdentity: true,
    cascade: true,
  });
});
