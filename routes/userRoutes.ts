import { Router } from 'express';
import { AppDataSource } from '../data-source';
import { User } from '../entity/User';

const router = Router();

router.get('/users', async (req, res) => {
  const users = await AppDataSource.getRepository(User).find();
  console.log(users)
  res.json(users);
});

router.post('/users', async (req, res) => {
  const user = AppDataSource.getRepository(User).create(req.body);
  const result = await AppDataSource.getRepository(User).save(user);
  console.log(result)
  res.send(result);
});

export default router;

