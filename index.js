const sequelize = require('./config.js');
const express = require('express');
const app = express();
//Import models
const Employee = require('./models/employee.js');
const Department = require('./models/department.js');

// Define associations after both models are loaded
Department.hasMany(Employee, {
    foreignKey: {
        name: 'department_id',
        allowNull: false
    }, 
    onDelete: 'CASCADE',
    constraints: true
});

Employee.belongsTo(Department, {
    foreignKey: {
        name: 'department_id',
        allowNull: false
    },
    constraints: true
});

const PORT = 3000;

// Sync defined models and associations with database and convert them into tables
sequelize.sync().then((result)=>{
    console.log(result);
}).catch((err)=>{console.log(err);});

// Listen to port
app.listen(3000, ()=>{console.log(`Listening to port ${PORT}`);});