'use strict'

/**
 * Important! Set the environment to test
 */

 process.env.NODE_ENV = 'test';

const http = require('http');
const request = require('request');
const chai = require('chai');
const userFixture = require('../fixtures/user');
const should = chai.should();

let app;
let appServer;
let mongoose;
let User;
let Contact;
let config;
let baseUrl;
let apiUrl;

describe('Conatccts endpoints test',function(){
    before((done) => {
        // boot app
        // start listening to requests
    });

    after(function(done){
        //close app
        // cleanup database
        // close connection to mongo 
    });

    this.afterEach((done) =>{
        //remove contacts
    })

    describe('Create contact',() => {
        it('should create a new contact',(done) =>{
            request({
                method: 'POST',
                url: `${apiUrl}/contacts`,
                form: {
                    'email':'jane.doe@test.com',
                    'name':'Jane Doe'
                },
                json:true
            },(err,res,body) => {
                if(err) throw err;

                res.statusCode.should.equal(201);
                body.email.should.equal('jane.doe@test.com');
                body.name.should.equal('Jane Doe');
                done();
            });
        });

        it('should get a list of contacts',(done) =>{
            request({
                method: 'GET',
                url: `${apiUrl}/contacts`,
                json:true
              }, (err, res, body) => {
                if (err) throw err;
        
                res.statusCode.should.equal(200);
                body.should.be.instanceof(Array);
                body.length.should.equal(2);
                body.should.contain.a.thing.with.property('email', 'jane.doe@test.com');
                body.should.contain.a.thing.with.property('email', 'john.doe@test.com');
                done();
        })
    });

    describe('Save Contact',() => {});
    describe('Get Contacts',() => {});
    describe('Get contact',function(){});
    describe('Update contact',function(){});
    describe('Delete contact',function(){});
});