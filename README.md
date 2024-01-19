# booking-table-app
### Restaurant table booking app using NodeJS  


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


## Database:

| Tables           | SQL            | 
:-------------------------:|:-------------------------:
| ![Tables](https://github.com/NatCanCode/booking-table-v2/assets/77299658/b6f465f1-75fa-4f94-9f67-16a3feec3509) | <img width="636" alt="Screenshot 2023-10-31 at 18 39 54" src="https://github.com/NatCanCode/booking-table-v2/assets/77299658/99c145cb-ef14-433f-8e96-766a4c6556f8"> |



## Command lines
### Install Node.js:
```
brew install node@20 (version 20)
```
```
brew link node@20
```

### Install Express:
```
npm install express-generator -g
```
```
npx express project-name --no-view
```

### Launch the server after updates:
```
npm run start
```

### Automaticaly launch the server after every update:
```
node --watch
```


### Create four routes in index.js using the GET, POST, PUT, DELETE methods and test them with Postman:

| GET           | POST            | PUT           | DELETE            | 
:-------------------------:|:-------------------------:|:-------------------------:|:-------------------------:
| <img width="1440" alt="Screenshot 2023-11-02 at 09 29 52" src="https://github.com/NatCanCode/booking-table-v2/assets/77299658/670a2a2b-d45f-4003-a476-e95aafcbaeba">  | <img width="1440" alt="Screenshot 2023-10-31 at 19 17 14" src="https://github.com/NatCanCode/booking-table-v2/assets/77299658/eb6fea30-a599-4f77-b5de-9f77ed653fe0"> |  |  |
| <img width="1440" alt="Screenshot 2023-11-02 at 09 30 12" src="https://github.com/NatCanCode/booking-table-v2/assets/77299658/1886f7ca-2527-4f4c-aacd-8cba398dc162"> | <img width="1440" alt="Screenshot 2023-10-31 at 19 14 06" src="https://github.com/NatCanCode/booking-table-v2/assets/77299658/16414961-8f2a-4b25-820c-d460c61a979c"> |  |  | 


--------------------------------------------------------------------------------------------------------------

### Implement seed data using this resource can help: https://medium.com/@raphaelragul006/node-js-and-sequelize-orm-maintain-seed-data-execution-history-b79341ad350

### Create seed files using:
```
sequelize seed:generate --name create-reservation
```
```
sequelize seed:generate --name create-room
```
```
sequelize seed:generate --name create-spot
```
```
sequelize seed:generate --name create-user
```

### Then run the seeder:
```
sequelize db:seed:all
```
And, if needed:
```
sequelize db:seed:all --help
```
### Now go to your database (here TablePlus), refresh and check whether the seeds have been added.

--------------------------------------------------------------------------------------------------------------

### Install Prettier by running:
```
npx prettier . --write
```

### Then install ESLint following the official documentation https://eslint.org/docs/latest/use/getting-started
### Run:
```
npm init @eslint/config
```

### Add rules to the eslintrc.json file:
```
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
```
{
    "extends": "eslint:recommended"
}
```
All the rules marked “recommended” on the rules page will be turned on. 
Alternatively, you can use configurations that others have created by searching for “eslint-config” on https://www.npmjs.com/search?q=eslint-config 

### Test individual file by running:
```
npx eslint folder/file
```
```
npx eslint routes/reservation.js
```

### You can view all the CLI options by running:
```
npx eslint -h
```
--------------------------------------------------------------------------------------------------------------

### Next steps:
- [ ]  Design the front end
- [ ]  Code the front end
- [ ]  Link back and front end


