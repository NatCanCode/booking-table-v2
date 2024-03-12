## Seeders

### Implement [seed data](https://medium.com/@raphaelragul006/node-js-and-sequelize-orm-maintain-seed-data-execution-history-b79341ad350) to populate the database

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

-------------------------------------------------------------------------------------------------