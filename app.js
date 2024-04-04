
const express = require('express')

const bodyParser =  require ('body-parser');

const app =  express();

app.use(bodyParser.urlencoded({extended: false}));
///this body parser use only for form body
// body parser - read data and put  in to the body

// adding middleware
// req, and res in object and next is a function
app.use('/add-product', (req , res, next )=>{
    
    //the submiited data will be sent to /product route
    res.send('<form action = "/product" method= "POST"><input type " text" name ="tittle"><input type="number"  name="productSize" ><button type ="submit">Add Product</button></form>')
});


app.use('/product', (req , res, next )=>{

    console.log(req.body);// extract data what the user send me 
    
    res.redirect('/');
});

app.use('/', (req , res, next )=>{

    console.log("Hello");// extract data what the user send me 
    res.send ("hello express")

});
app.listen(4100);


