'use strict';

require("dotenv");
const UserSchema=require('./sign');
const POSTGRES_URL =
  process.env.NODE_ENV === "test"
    ? "sqlite:memory"
    : "postgres://localhost:5432/thaerbraizat";

const {Sequelize,DataTypes}=require('sequelize');

const DATABASE_CONFIG = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: true,
    rejectUnauthorized: false,
  }
} : {}

let sequelize=new Sequelize(POSTGRES_URL,DATABASE_CONFIG);


module.exports={
    users:UserSchema(sequelize,DataTypes),
    db:sequelize
}