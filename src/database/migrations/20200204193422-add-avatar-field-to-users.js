module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('users', { 
        'users',
        'avatar_id',
        {
          type: Sequelize.INTEGER,
          references: { model: 'files', key: 'id'}
        },
      );
    }
    
  down: (queryInterface, Sequelize) => {

  },
};
