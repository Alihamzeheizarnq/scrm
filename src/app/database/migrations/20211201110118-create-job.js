'use strict'
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Jobs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            queue: {
                allowNull: true,
                type: Sequelize.STRING,
            },
            payload: {
                allowNull: true,
                type: Sequelize.TEXT ,
            },
            class: {
                type: Sequelize.STRING,
            },
            reserved_at: {
                allowNull: true,
                type: Sequelize.DATE,
            },
            available_at: {
                allowNull: true,
                type: Sequelize.DATE,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        })
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Jobs')
    },
}
