const express = require('express');
const connectDB  = require('./config/db'); 
const app = express();

connectDB();

app.get('/',(req,res)=>res.send('API is running')); //api -> 전송

app.use(express.json({   //미들웨이
    extended : false
}));
app.use(express.urlencoded({ extended: true }));

app.use('/api/user',require('./routes/api/user')); // api -> 이동   (/api/user url -> ./routes.. 로이동)
app.use('/api/posts',require('./routes/api/posts'));
app.use('/api/auth',require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log('server strat on  ${PORT}')); 