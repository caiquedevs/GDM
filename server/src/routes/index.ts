import cors from 'cors';
import bodyParser from 'body-parser';

import doctors from './doctor.routes';
import specialty from './specialty.routes';

const corsOptions = {
  origin: 'http://localhost:8081',
};

export default function routes(app: any) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors(corsOptions));
  app.use(doctors, specialty);
}
