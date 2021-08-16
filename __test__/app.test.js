'use strict';
const server = require("../src/server");
const supertest = require("supertest");
const request = supertest(server.app);

describe('Server ',()=>{
    it('SignUp test',async()=>{
        const data=await request.post('/signup').send({
            username:"thaer",
            password:"test@1234"
        });
        expect(data.status).toEqual(200);
    });

    it('SignIn',async()=>{
        const data=await request.post('/signin').auth('thaer','test@1234');
        expect(data.status).toEqual(200);
    });

    it('SignIn Middleware not access',async()=>{
        const data=await request.post('/signin').auth('thaer2','test@12');
        expect(data.status).toEqual(200);
    });

    it('SignUp , SignIn',async()=>{
        const reqObj=await request.post('/signup').send({
            username:'thaer3',
            password:'test@1233'
        });
        const data=await request.post('/signin').send({
            username:'thaer3',
            password:'test@1233'
        }).auth(reqObj.body.username,'test@1233');
        expect(data.status).toEqual(200);
    })
})