import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import PostRoutes from './routes/Post.js';
const app = express();
app.use(bodyParser.json({limit:"30mb" , extended : true }));
app.use(bodyParser.urlencoded({limit:"30mb" , extended : true }));
app.use(cors());
app.use('/posts',PostRoutes);
const MONGO_URL='mongodb+srv://sadaf:sadaf@cluster0.jjvxsrh.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));


mongoose.set('strictQuery', false);
