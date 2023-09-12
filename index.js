import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet'
import path from 'path';
import { randomUUID } from 'node:crypto';
import {startDb} from './src/config/database.js'
import router from './src/routes/foro.routes.js'

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(path.resolve(), 'src/views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json())
app.use(helmet({
    contentSecurityPolicy: false
}))

// Global Variables
// app.use((req, res, next) => {
//     next();
// });

// Routes
app.use('/', router)

// Static files
app.use(express.static(path.join(path.resolve(), 'src/public')));


// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
    startDb();
});