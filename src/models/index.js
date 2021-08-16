'use strict';

require("dotenv");
const UserSchema=require('./sign');
const POSTGRES_URL =
  process.env.NODE_ENV === "test"
    ? "sqlite:memory "
    : "postgres://localhost:5432/thaerbraizat";

const {Sequelize,DataTypes}=require('sequelize');

let sequelize=new Sequelize(POSTGRES_URL,{});

module.exports={
    users:UserSchema(sequelize,DataTypes),
    db:sequelize
}