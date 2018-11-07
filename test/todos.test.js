var superagent = require('superagent')

superagent
    .get('todos.demo.rootpath.io/todos/88721')
    .end(function(error, response){
        if(error){
            console.log('Error : ',error);
            return
        }
        console.log('Status code : ',response.status);
        console.log('Body : ', response.body);
    })