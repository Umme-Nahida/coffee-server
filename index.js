const express = require("express")
const app = express()
const port = 5000

app.get('/',(req, res)=>{
    res.send("coffee server is running")
})

app.listen(port,()=>{
    console.log(`coffee server is running on port ${port}`)
})