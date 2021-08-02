import userRoute from './user';
import { Router } from 'express';
import { errorHandler } from '../middlewares/handle-error';

const index = Router({ mergeParams: true });
const api = Router({ mergeParams: true });

api.use('/user', userRoute);

index.use('/api', api);

export default index;
