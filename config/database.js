const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);



const db = mongoose.connection;

db.on('connected', function (){
    console.log(`You are connected to KrakenSD mongoDB ${db.host} : ${db.port}`)
});