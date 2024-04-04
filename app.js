
const express = require('express')

const app =  express();

// adding middleware
// req, and res in object and next is a function
app.use((req , res, next )=>{

    console.log('in the middleware - 1');
    next();//  this allow the request to continue to the next middleware in line 
});

app.use((req , res, next )=>{

    console.log('in the middleware - 2')

    // sending response from here

    res.send( { name : "aman"})
    
});


app.listen(4100);


