const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 
const app = express();
const router = require("./routes/book-routes")

app.use(express.json())
app.use(cors()); {/*xml http will be blocked for security purposes. this is browser security, so we installed cors.installed through npm i cors*/}
app.use("/books",router)

mongoose.connect("mongodb+srv://admin:12345@cluster0.ll8occj.mongodb.net/Shrutesh-Book-Store?retryWrites=true&w=majority"
).then(()=>console.log("Connected to Database..."))
 .then(()=>{
    app.listen(5000)
 }).catch((err)=>console.log(err))