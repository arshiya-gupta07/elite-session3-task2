const path = require('path')
const express= require('express');
const app= express();

app.listen(5000, ()=> console.log('Server started at port 5000'))

app.get('/', (request , resolve) => {
    resolve.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/number', (request , resolve) => {
    resolve.sendFile(path.join(__dirname, 'public', 'no.html'));
})

const check= require('./check.js')
app.get('/number/:num', (request , resolve) => {
    let a= request.params.num   
    let result= check.evenOdd(a)
    resolve.send(`<h1>The number ${a} is ${result}</h1>`);
})
 //console.log(path.resolve('/index.js'))













