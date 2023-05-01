const Students = require('../models/student.model');

const studentSignUp = async(req,res) =>{
    const stuObj = {
        name:req.body.name,
        password:req.body.password,
    }

    try{
        const data = await Students.create(stuObj);
        res
        .status(200)
        .send(`${stuObj.name} your data save`);
    }
    catch(err){
        res
        .status(500)
        .send(`Some error ${err}`);
    }
};


module.exports = {
    studentSignUp,
}