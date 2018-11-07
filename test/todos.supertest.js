var chai = require('chai')
var expect = chai.expect
var supertest = require('supertest')

var api = supertest('http://todos.demo.rootpath.io')
//   /todos?title=new%20todo&due=1990-10-18

describe('GET /todos/88721', function(done) {
    // tests to see if we get a 200 status code when we send a GET request
    it('returns a 200 status code', function(done) {
      api
        .get('/todos/88721') // make the request
        .expect(200) // expect a 200 response code
        .end(done) // pass the `done` callback so we know when this test is finished
    })
    it('returns the todos id', function(done) {
        api
          .get('/todos/88721') // make the request
          .expect(function(response) {
            // this expect callback gets given the response
            // we can use chai to make assertions about it in here
            expect(response.body.id).to.be.a('number')
          })
          .end(done) // pass the `done` callback so we know when this test is finished
      })
      it('checks thers is a string named title', function(done) {
        api
          .get('/todos/88721') 
          .expect(function(response) {
            expect(response.body.title).to.be.a('string')
          })
          .end(done) 
      })
})  

describe('POST /todos/', function(done) {
    it('adds a new todo',function(done){
        api
        .post('/todos?title=go%20to%20the%20shop&due=1990-10-18')
        .end(done)
    })

})
describe('PUT /todos/', function(done) {
    it('changes the last created todo',function(done){
        api
        .post('/todos/todos.lenght?title=go%20to%20the%20cinima&due=1990-10-18&notes=get bread')
        // .get('/todos/')
        .end(done)
    })

})

describe('DELETE /todos/89095', function(done){
    it('deletes a recently created todo', function(done){
        api
        .delete('/todos/89097')
        .end(done)
    })
})