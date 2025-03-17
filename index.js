const sequelize = require('./config.js');
const express = require('express');
const app = express();
const employee = require('./models/employee.js');
const department = require('./models/department.js');

const PORT = 3000;

// Authenticate connection
sequelize.authenticate()
.then(()=>{console.log('SUCCESS: connection established');})
.catch((err)=>{console.log(err);});

// Use the hasMany() method in the department model
department.hasMany(employee, {foreignKey: {allowNull: false}, onDelete: 'CASCADE'});

// Sync defined models and associations with database and convert them into tables
sequelize.sync().then((result)=>{
    console.log(result);
}).catch((err)=>{console.log(err);});

// Listen to port
app.listen(3000, ()=>{console.log(`Listening to port ${PORT}`);});