import './config'; // Load environment variables
import 'express-async-errors'; // Enable default error handling for async errors
import express, { Express } from 'express';
import {
  registerUser,
  logIn,
  getAllUsers,
  getUserProfileData,
  // updateUserEmail,
} from './controllers/UserController';

const app: Express = express();
app.use(express.json());

const { PORT } = process.env;

app.get('/api/users', getAllUsers);
app.post('/api/users', registerUser); // Create an account
app.post('/api/login', logIn); // Log in to an account
app.get('/api/users/:userId', getUserProfileData);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
