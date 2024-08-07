const express = require('express');
const cors = require('cors');
var createError = require('http-errors')
const mongoose = require('mongoose');
const app = express();
const userRouter = require('./routes/userroutes');

const data = [{
    name : "sathish"
}]

app.use(cors());
app.use(express.json());
app.use('/user' ,userRouter)
// app.get('/user', (req,res,next)=> {
//     try {
//         res.status(200).json({
//             userlist: data,
//             message: "Data fetched successfully"
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: "An error occurred while fetching data",
//             error: error.message
//         });
//     }
// })

app.use((req,res,next)=> {
    // const err = new Error ('Url Not Found');
    // err.status = 404;
    // next(err);   default error handler 
    // createError([status], [error], [properties]) syntax 
    next(createError(404, 'entered url not found'));
});

app.use((err, req, res, next) => {
    console.error('Error occurred:', err);
    res.status(err.status || 500).send({
      error: {
        status: err.status || 500,
        message: err.message,
        // stack: err.stack
      }
    });
  });

  mongoose.connect('mongodb://localhost:27017/userformdb')
  .then(() => console.log('Connected!'))
  .catch((error)=> console.log('not connected '));

app.listen(4000 , ()=> {
   console.log('server is running on 4000')
})