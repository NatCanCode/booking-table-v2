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