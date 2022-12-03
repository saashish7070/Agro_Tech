//Importing the required files and modules
const express = require('express')
const mongoose = require('mongoose')  
const routeApp = require('./routes/routeApp')
const app = express()


///Middleware
app.use(express.json())


//Connect to the database
mongoose.connect("mongodb+srv://admin:admin@agroculture.qa4obkd.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser : true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err
    console.log('Successfully connected to the mongodb database')
}
)

//Routes
app.use('/',routeApp)




//Listening the port
app.listen(8080,()=>{
    console.log(`The port is listening to the port 8080`)
})