'use strict'
const { Model } = require('sequelize')
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init(
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            password: DataTypes.STRING,
            email: DataTypes.STRING,
            level: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'User',
        },

        {
            hooks: {
                beforeCreate: (user) => {
                    const salt = bcrypt.genSaltSync()
                    user.password = bcrypt.hashSync(user.password, salt)
                },
            },
        },
    )
    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password)
    }

    return User
}
