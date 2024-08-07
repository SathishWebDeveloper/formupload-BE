const mongoose = require('mongoose');
const User = require('../models/usermodels');


module.exports = {
    createUserList : async(req,res,next) => {
        try {
            const { name, age, qualify } = req.body;
            const profileImage = req.file.path;
             console.log('req', name,age,qualify,profileImage)
            //  console.log('file', req.body.file);
             res.send('post it success')
        }
        catch(error){
            console.log('error' );
        }
    }
}