import express from 'express';
import indexRouter from './routes/index.js';
import urlsRouter from './routes/urls.js';
import connectDB from './config/db.js';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.port || 3333

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/api', urlsRouter);

connectDB();

mongoose.connection.once("open", () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on PORT ${PORT}`)
    })
})

