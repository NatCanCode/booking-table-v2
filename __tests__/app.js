const request = require('supertest');
const app = require('../app');
const {Sequelize, DataTypes} = require("sequelize");
const {Reservation} = require('../db')
const {User} = require('../db')
const {Room} = require('../db')
const {Spot} = require('../db')

describe('GET /api/reservations', () => {
  it('should return a 401 error', async () => {
    const res = await request(app)
      .get('/api/reservations')
      .expect('Content-Type', /json/)
      .expect(401);
  });
});

// Reservation.findAll()
describe('Reservation entity', () => {
  it('should return all the reservations', async () => {
    expect.assertions(1);
    try {
      const reservations = await Reservation.findAll()
      expect(reservations.length).toBeDefined()
    } catch (e) {
      console.log(e)
      throw e
    }
  })
  return 
})

// User.findAll()
describe('User entity', () => {
  it('should return all the users', async () => {
    expect.assertions(1);
    try {
      const users = await User.findAll()
      expect(users.length).toBeDefined()
    } catch (e) {
      console.log(e)
      throw e
    }
  })
  return 
})

// Room.findAll()
describe('Room entity', () => {
  it('should return all the rooms', async () => {
    expect.assertions(1);
    try {
      const rooms = await Room.findAll()
      expect(rooms.length).toBeDefined()
    } catch (e) {
      console.log(e)
      throw e
    }
  })
  return 
})

// Spot.findAll()
describe('Spot entity', () => {
  it('should return all the rooms', async () => {
    expect.assertions(1);
    try {
      const spots = await Spot.findAll()
      expect(spots.length).toBeDefined()
    } catch (e) {
      console.log(e)
      throw e
    }
  })
  return 
})

// let token = "";

// beforeAll(async () => {
//   const signInResponse = await request(app)
//     .post("/auth/signin")
//     .send({
//       email: "client@gmail.com",
//       password: "1234",
//     })
//     .expect("Content-Type", /json/)
//     .expect(200);

//   // Extract token from the response
//   token = signInResponse.body.jwt;
// });

// describe("GET /api/users", () => {
//   it("should return a 200 status when user connected", async () => {
//     await request(app)
//       .get("/api/users")
//       .set("Authorization", token) 
//       .expect("Content-Type", /json/)
//       .expect(200);
//   });
// });
