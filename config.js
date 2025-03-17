// Import sequelize
const Sequelize = require('sequelize');
// Create sequelize instance with constructor parameters
const sequelize = new Sequelize('departments_employees_db', 'root', 'Primal-Seventeen-Whiff7', {dialect: 'mysql'});
  
// Export the module
module.exports = sequelize;