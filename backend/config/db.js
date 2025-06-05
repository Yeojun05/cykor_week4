const mongoose = require('mongoose');//모듈 몽고스
const config = require('config'); // node module 에 있는 config
const db =config.get('mongoURL');


const connectDB =async()=>{
    try{
        await mongoose.connect(db,{
            useNewYrlParser : true
        });
        console.log("connected_mongo");
    }catch(err)
    {
        console.log(err.message);
        process.exit(1);
    }
}
module.exports = connectDB;