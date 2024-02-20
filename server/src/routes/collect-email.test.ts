import { afterAll, beforeAll, expect, test } from "vitest";
import request from "supertest";
import { app } from "@/app";

beforeAll(async () => {
  await app.ready();
});
  
afterAll(async () => {
  await app.close();
});


test("The user should be able to register their email.", async () => {
  const response = await request(app.server).post("/register").send({
    email: "henrique@gmail.com.br"
  });

  expect(response.statusCode).toEqual(201);
});

test("The user should not be able to register an email that already exists.", async () => {

  const response = await request(app.server).post("/register").send({
    email: "henrique@gmail.com.br"
  });

  expect(response.statusCode).toEqual(400);
});

