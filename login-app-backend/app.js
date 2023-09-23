console.log("hello world")
const express = require("express")
const app = express()
//get request
app.get("/", (req, res) => {
    console.log('here')
    res.status(200).json({message:"Error"})
})
//Tạo dữ liệu POST
app.
app.listen(3000)