import cors, { CorsOptions } from "cors";
import express from "express";
import morgan from "morgan";
import swaggerUi from 'swagger-ui-express';
import db from "./config/db";
import swaggerSpec, { swaggerOptions } from "./config/swagger";
import router from "./routes/routes";

export const connectDB = async () =>{
    try{
        await db.authenticate()
        db.sync()
        // console.log(colors.magenta.bold('DB connected succefully'))
    }catch(err){
         console.log('Error connection DB')
    }
}

connectDB();
const server = express();

//Allow connections
const corsOptions : CorsOptions = {
    origin: (origin, callback) => {
        origin === process.env.FRONTEND_URL ? callback(null,true) : callback(new Error('CORS Error'))
    }

}

server.use(cors(corsOptions))
server.use(morgan('dev'))
//server.use(morgan('combined')) //mas completo

server.use(express.json())

server.use('/api/products', router)

//Docs
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerOptions))

export default server


