import express from 'express';
import userRoutes from './routes/userRoutes';
import { AppDataSource } from './data-source';



const app = express();

app.use(express.json());
app.use('/api', userRoutes);

AppDataSource.initialize()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

