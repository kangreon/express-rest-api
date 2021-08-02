import { Router } from 'express';
import * as userController from '../controllers/user';

const user = Router({ mergeParams: true });

user.route('/').post(userController.create).get(userController.list);
user.route('/:user_id').get(userController.read).put(userController.update).delete(userController.destroy);

export default user;
