// Import the Sequelize class and store it in a constant with the same name with capital S.
const Sequelize = require('sequelize');
// Import the Sequelize object of the config.js file that you created before.
const sequelize = require('../config.js');
// Create a constant to store the model returned from the define method of the Sequelize object.
const Employee = sequelize.define('employee', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    FirstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    LastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Salary: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

// Export each of them to be used again in other modules.
module.exports = Employee;
