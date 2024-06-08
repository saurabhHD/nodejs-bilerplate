import dotenv from 'dotenv';
import connectDB from './db/index.js'
import { app } from './app.js';

// dotenv configration
dotenv.config({
    path : './.env'
})

const PORT = process.env.PORT || 8080

// stablish connection to database
connectDB()
.then(() => {
    app.listen(PORT, ()=> {
        console.log(`Server is runing at port : ${PORT}`);
    })
})
.catch((err) => {
    console.log('MongoDB connection faild ', err)
})