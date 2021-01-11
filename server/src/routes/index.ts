import cors from 'cors';
import bodyParser from 'body-parser';

import doctors from './doctor.routes';
import specialty from './specialty.routes';

const corsOptions = {
  origin: '*',
};

export default function routes(app: any) {
  app.use(cors(corsOptions));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(doctors, specialty);
}
