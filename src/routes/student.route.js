const {studentSignUp} = require('../controllers/studentAuth.con');

module.exports = (app)=>{
    app.post('/api/student/signup',studentSignUp); //route for signup
}