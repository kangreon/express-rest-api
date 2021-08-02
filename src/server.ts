import express from 'express';
import indexRoute from './routes/index';
import { errorHandler } from './middlewares/handle-error';

const app = express();
const port = 8084;

// app.use((err: any, req: any, res: any) => console.log(err, req, res));
app.use(indexRoute);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
