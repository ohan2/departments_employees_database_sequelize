// Import the Sequelize class and store it in a constant with the same name with capital S.
const Sequelize = require('sequelize');
// Import the Sequelize object of the config.js file that you created before.
const sequelize = require('../config.js');
// Create a constant to store the model returned from the define method of the Sequelize object.
const department = sequelize.define('department', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

// Export each of them to be used again in other modules.
module.exports = department;
