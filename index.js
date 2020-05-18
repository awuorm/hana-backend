const server = require("./server");


const port = process.env.PORT || 5000;

server.get("*",(req,res) => {
    res.status(200).json("Hello from hana app");
})

server.listen(port,() => {
    console.log("listening on port",port);
})