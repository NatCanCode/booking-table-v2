# booking-table-app
### Restaurant table booking app using NodeJS  

## Set up
### Requirements:
- [x]  npm
- [x]  nodeJS


### Installation using command lines
#### Clone the project and install dependencies:
```bash
git clone https://github.com/NatCanCode/booking-table-v2.git
cd booking-table-v2
npm install
```

#### Create the .env file:
```bash
touch .env
```

#### Install .env package:
```bash
npm i dotenv
```

#### Add configurations to the .env file:
```bash
PORT=3000
HOST_DEV=your_localhost
USER_DEV=your_user
PASSWORD_DEV=your_password
DATABASE_DEV=database_development
ENVIRONMENT=development
```
#### Add configurations to the .gitignore file:
```bash
.env
.env.test
```

#### Create the DATABASE with sequelize-cli, migrate the models and seeds:
```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

#### Start the server:
```bash
npm run start
```


-------------------------------------------------------------------------------------------------

## Creation of an API using:
- [x]  Node.js
- [x]  Express
- [x]  API Rest (CRUD)
- [x]  PostgreSQL
- [x]  Sequelize
- [x]  Authentification
- [x]  Test (Jest and Supertest)  


## Tools:
- [x]  VSCode
- [x]  terminal
- [x]  Chrome and Safari
- [x]  TablePlus
- [x]  Postman


## Resources:
- [x]  [Node.js](https://nodejs.org/api/)
- [x]  [Express](https://expressjs.com/en/5x/api.html)
- [x]  [Seed data](https://medium.com/@raphaelragul006/node-js-and-sequelize-orm-maintain-seed-data-execution-history-b79341ad350)
- [x]  [ESLint](https://eslint.org/docs/latest/use/getting-started)
- [x]  [CRUD & REST APIs](https://nordicapis.com/crud-vs-rest-whats-the-difference/)


## Database:

| Tables           | SQL            | 
|:-------------------------:|:-------------------------:
| <img width="615" alt="tables" src="https://github.com/NatCanCode/booking-table-v2/assets/77299658/91894b35-e7f6-4ad0-9050-41741883e508"> | <img width="636" alt="Screenshot 2023-10-31 at 18 39 54" src="https://github.com/NatCanCode/booking-table-v2/assets/77299658/99c145cb-ef14-433f-8e96-766a4c6556f8"> |


## Command lines
### Install Node.js:
```bash
brew install node@20 (version 20)
```
```bash
brew link node@20
```

### Install Express:
```bash
npm install express-generator -g
```
```bash
npx express project-name --no-view
```

### Launch the server after updates:
```bash
npm run start
```

### Automaticaly launch the server after every update:
```bash
node --watch
```


### Create four routes in index.js using the GET, POST, PUT, DELETE methods and test them with Postman:

| GET           | POST            | PUT           | DELETE            | 
:-------------------------:|:-------------------------:|:-------------------------:|:-------------------------:
| <img width="1440" alt="Screenshot 2023-11-02 at 09 29 52" src="https://github.com/NatCanCode/booking-table-v2/assets/77299658/670a2a2b-d45f-4003-a476-e95aafcbaeba">  | <img width="1440" alt="Screenshot 2023-10-31 at 19 17 14" src="https://github.com/NatCanCode/booking-table-v2/assets/77299658/eb6fea30-a599-4f77-b5de-9f77ed653fe0"> |  |  |
| <img width="1440" alt="Screenshot 2023-11-02 at 09 30 12" src="https://github.com/NatCanCode/booking-table-v2/assets/77299658/1886f7ca-2527-4f4c-aacd-8cba398dc162"> | <img width="1440" alt="Screenshot 2023-10-31 at 19 14 06" src="https://github.com/NatCanCode/booking-table-v2/assets/77299658/16414961-8f2a-4b25-820c-d460c61a979c"> |  |  | 


-------------------------------------------------------------------------------------------------

## Seeders

### Implement [seed data](https://medium.com/@raphaelragul006/node-js-and-sequelize-orm-maintain-seed-data-execution-history-b79341ad350) to populate the database:

### Create seed files using:
```bash
sequelize seed:generate --name create-reservation
```
```bash
sequelize seed:generate --name create-room
```
```bash
sequelize seed:generate --name create-spot
```
```bash
sequelize seed:generate --name create-user
```
### Update each seeder file checking your model syntax with:
```js
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Reservations', [{
        date: new Date(),
        name: "Surprise dinner",
        note: "By the window please",
        status: 1,
        userId: 10,
        spotId: 7,
        roomId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }],
    {});
  },
  async down (queryInterface, Sequelize) {
await queryInterface.bulkDelete('Reservations', null, {});
  }
};
```

### Then run the seeder:
```bash
sequelize db:seed:all
```
| TERMINAL           | 
:-------------------:|
| <img width="655" alt="Screenshot 2024-01-19 at 18 26 41" src="https://github.com/NatCanCode/booking-table-v2/assets/77299658/c57bdcfb-1627-4ed6-a8f8-d528a70b8596"> |

And, if needed:
```bash
sequelize db:seed:all --help
```
### Now go to your database (here TablePlus), refresh and check whether the seeds have been added:
| TABLEPLUS DATABASE | 
:-------------------:|
| <img width="1229" alt="Screenshot 2024-01-19 at 18 39 54" src="https://github.com/NatCanCode/booking-table-v2/assets/77299658/238b3b67-3c8a-484e-91de-2778e8490183"> |

## Prettier & ESLint

### Install Prettier by running:
```bash
npx prettier . --write
```

### Install [ESLint](https://eslint.org/docs/latest/use/getting-started) by running:
```bash
npm init @eslint/config
```
| TERMINAL           | 
:-------------------:|
| <img width="661" alt="ESLintConfig" src="https://github.com/NatCanCode/booking-table-v2/assets/77299658/91377a1c-ccec-434a-a4c7-be65573b2405"> |

### Add rules to the eslintrc.json file:
```js
"rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
}
```
The first value is the error level of the rule and can be one of these values:
"off" or 0 - turn the rule off
"warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
"error" or 2 - turn the rule on as an error (exit code will be 1)

### Add this other rule to the eslintrc.json file:
```js
{
    "extends": "eslint:recommended"
}
```
All the rules marked “recommended” on the rules page will be turned on. 
Alternatively, you can use configurations that others have created by searching for “eslint-config” on https://www.npmjs.com/search?q=eslint-config 

### Test individual file by running:
```bash
npx eslint folder/file
```
```bash
npx eslint routes/reservation.js
```

### You can view all the CLI options by running:
```bash
npx eslint -h
```
-------------------------------------------------------------------------------------------------

## Next steps:
- [ ]  Design the front end
- [ ]  Code the front end
- [ ]  Link back and front end


