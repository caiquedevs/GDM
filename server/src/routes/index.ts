import bodyParser from 'body-parser';

import doctors from './doctor.routes';

export default function routes(app: any) {
  app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }));
  app.use(doctors);
}
