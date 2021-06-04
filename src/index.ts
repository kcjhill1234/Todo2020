import path from 'path'
import dotenv from 'dotenv'
dotenv.config({
    path: path.join(__dirname, '..', '.env')
})
import express from "express"
import mongoose from 'mongoose'
import routes from "./routes"

const app = express()
const PORT = 3002

app.use(express.json());
app.use(routes)



mongoose.connect(process.env.DATABASE_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true}).then(()=> {
        app.listen(PORT, () => {
            console.log('server has stared');
        })
    });

// // app.listen(PORT, () => {
// //     console.log(process.env.DATABASE_CONNECTION);
// //     console.log("server has started")
// })
