'use strict';

const UserSchema = (sequelize, DataTypes) => sequelize.define('newas', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports=UserSchema;