const mongoose = require("mongoose")


const Connection= (uri) => mongoose.connect(uri,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).
then(()=>{
    console.log("connected successfully");
}).catch((error)=>{
    console.log("not connected", error);
})
module.exports = {Connection};