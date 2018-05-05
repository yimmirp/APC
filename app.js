const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const server = http.createServer(app);


//settings
app.set("port",process.env.PORT || 3000);
app.set("views", path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//middlewares
app.use((req,res,next)=>{
    console.log()
});



//start the server on port 3000
server.listen(app.get("port"), ()=>{
    console.log("server on port",app.get("port"));
});
