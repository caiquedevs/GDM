/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
import routes from './routes';

const app = express();

routes(app);

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`🚀 Server started on http://localhost:${port}`);
});
