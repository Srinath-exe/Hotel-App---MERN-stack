const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://srinath:1day24hours@cluster0.1tvavzf.mongodb.net/LYROOM-MERN'

mongoose.connect(mongoURL, {useUnifiedTopology:true , useNewUrlParser :true })

var connection = mongoose.connection

connection.on('error',()=> {
    console.log('Mongo DB Connection failed');
})

connection.on('connected',()=>{
    console.log('Mongo DB Connection successful');
})



module.exports = mongoose