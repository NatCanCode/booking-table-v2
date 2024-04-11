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



// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDUzMTc0NjAsImV4cCI6MTcwNTMyMTA2MH0.NpNk1VfRrDXDytPZsOPiPsT-pAQOrverRly4wUF-JSU";

// /*----------------------------------------------------------------------------RESERVATIONS-------------------------------------------------------------------------------------------*/

// // GET
// describe("GET /api/reservations", () => {
//   it("should return a 401 error", async () => {
//     const res = await request(app)
//       .get("/api/reservations")
//       .expect("Content-Type", /json/)
//       .expect(401);
//   });
// });

// describe("GET /api/reservations", () => {
//   it("should return a 200 error", async () => {
//     const res = await request(app)
//       .get("/api/reservations")
//       .set("Authorization", token)
//       .expect("Content-Type", /json/)
//       .expect(200);
//   });
// });

// // POST
// describe("POST /api/reservations", () => {
//   it("should return a 401 error", async () => {
//     const res = await request(app)
//       .post("/api/reservations")
//       .send({
//         date: "supertest",
//         name: "supertest",
//         note: "supertest",
//         status: 1,
//         userId: 99,
//         spotId: 99,
//         roomId: 99,
//       })
//       .expect(401);
//   });
// });

// describe("POST /api/reservations", () => {
//   it("should return a 200 error", async () => {
//     const res = await request(app)
//       .post("/api/reservations")
//       .set("Authorization", token)
//       .send({
//         date: "2023-10-26T09:12:18.345Z",
//         name: "DataTypes",
//         note: "DataTypes",
//         status: 1,
//         userId: 99,
//         spotId: 99,
//         roomId: 99,
//       })
//       .expect("Content-Type", /json/)
//       .expect(201);
//   });
// });

// // PUT
// // DELETE

// /*---------------------------------------------------------------------------------------ROOMS------------------------------------------------------------------------------------*/

// // GET
// describe("GET /api/rooms", () => {
//   it("should return a 401 error", async () => {
//     const res = await request(app)
//       .get("/api/rooms")
//       .expect("Content-Type", /json/)
//       .expect(401);
//   });
// });

// describe("GET /api/rooms", () => {
//   it("should return a 200 error", async () => {
//     const res = await request(app)
//       .get("/api/rooms")
//       .set("Authorization", token)
//       .expect("Content-Type", /json/)
//       .expect(200);
//   });
// });

// // POST
// describe("POST /api/rooms", () => {
//   it("should return a 401 error", async () => {
//     const res = await request(app)
//       .post("/api/rooms")
//       .send({
//         name: "supertest",
//       })
//       .expect(401);
//   });
// });

// describe("POST /api/rooms", () => {
//   it("should return a 200 error", async () => {
//     const res = await request(app)
//       .post("/api/rooms")
//       .set("Authorization", token)
//       .send({
//         name: "supertest",
//       })
//       .expect(201);
//   });
// });

// // PUT

// // DELETE

// /*------------------------------------------------------------------------------------------SPOTS---------------------------------------------------------------------------------*/

// // GET
// describe("GET /api/spots", () => {
//   it("should return a 401 error", async () => {
//     const res = await request(app)
//       .get("/api/spots")
//       .expect("Content-Type", /json/)
//       .expect(401);
//   });
// });

// describe("GET /api/spots", () => {
//   it("should return a 200 error", async () => {
//     const res = await request(app)
//       .get("/api/spots")
//       .set("Authorization", token)
//       .expect("Content-Type", /json/)
//       .expect(200);
//   });
// });

// // POST
// describe("POST /api/spots", () => {
//   it("should return a 401 error", async () => {
//     const res = await request(app)
//       .post("/api/spots")
//       .send({
//         name: "supertest",
//       })
//       .expect(401);
//   });
// });

// describe("POST /api/spots", () => {
//   it("should return a 200 error", async () => {
//     const res = await request(app)
//       .post("/api/spots")
//       .set("Authorization", token)
//       .send({
//         name: "supertest",
//       });
//   });
// });

// // PUT
// // DELETE

// /*--------------------------------------------------------------------------------------USERS-------------------------------------------------------------------------------------*/

// // GET
// describe("GET /api/users", () => {
//   it("should return a 401 error", async () => {
//     const res = await request(app)
//       .get("/api/users")
//       .expect("Content-Type", /json/)
//       .expect(401);
//   });
// });

// describe("GET /api/users", () => {
//   it("should return a 200 error", async () => {
//     const res = await request(app)
//       .get("/api/users")
//       .set("Authorization", token)
//       .expect("Content-Type", /json/)
//       .expect(200);
//   });
// });


// // PUT
// // DELETE

// /*--------------------------------------------------------------------------------------SIGNIN-------------------------------------------------------------------------------------*/
// // describe("POST /auth/signin", () => {
// //   it("should return status 200", async () => {
// //     const res = await request(app)
// //       .post("/auth/signin")
// //       .send({
// //         email: "esteban@testeeeeeee.fr",
// //         password: "testarktik",
// //       })
// //       .expect(201);
// //   });
// // });

// // /*--------------------------------------------------------------------------------------SIGNUP-------------------------------------------------------------------------------------*/ describe("POST /auth/signin", () => {
// //   it("should return status 200", async () => {
// //     const res = await request(app)
// //       .post("/auth/signup")
// //       .send({
// //         firstname: "estebán",
// //         lastname: "semellier",
// //         password: "testarktik",
// //         role: "admin",
// //         email: "esteban@test.fr",
// //         phoneNumber: "0761401011",
// //       })
// //       .expect(201);
// //   });
// // });