const express = require("express") ;

const mongoose = require("mongoose") ;
const employeeroutes = require("./routes/employeeRoutes") ;
const cors = require("cors") ;

const app = express() ;

mongoose.set("strictQuery", true) ;
mongoose.connect("mongodb+srv://suggalamohith:mohithatlas@cluster0.udbszso.mongodb.net/Company") ;

const db = mongoose.connection ;
db.on("open", () => {
    console.log("Database connected ") ;
}) ;

db.on("error", (err) => {
    console.log("Error while connecting to Database" , err) ;
}) ;

app.use(express.json()) ;
app.use(cors()) ;
app.use("/employee" , employeeroutes) ;
 

const port = 5050 ;

app.listen(port , () => {
    console.log("server started on port " , port ) ;
}) ; 