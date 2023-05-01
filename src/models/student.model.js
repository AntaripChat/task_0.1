const mongo = require('mongoose');

const studentSchema = new mongo.Schema({
    name:{
        type:String,
    },
    password:{
        type:String,
    }
});

const Students = mongo.model('StudentData',studentSchema);

module.exports = Students;