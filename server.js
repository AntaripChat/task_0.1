const app = require('./app');
const mongo = require('mongoose');

const {PORT} = require('./src/config/server.config');
const {MONGO_DB} = require('./src/config/db.congig');

//Connect mongodb

mongo.connect(MONGO_DB)
.then(()=>{
    console.log('DB connect');
})
.catch((err)=>{
    console.log(`Some error ${err}`);
})

//Routes

require('./src/routes/student.route')(app);



app.listen(PORT,()=>console.log(`Running on ${PORT}`));