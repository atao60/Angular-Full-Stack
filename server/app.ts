import { config } from './config/config';

import * as express from 'express';
import { Application } from 'express';
import * as mongoose from 'mongoose';
import * as morgan from 'morgan';
import { join } from 'path';

import setRoutes from './routes';

const MONGOOSE_OPTIONS = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
};

const app: Application = express();
app.set('port', config.api.port);

app.use('/', express.static(join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (config.env !== 'test') {
  app.use(morgan('dev'));
}

mongoose.connect(config.mongodb.url, MONGOOSE_OPTIONS)
  .then(() => {
    console.log('Connected to MongoDB');

    setRoutes(app);

    app.get('/*', (req, res) => {
      res.sendFile(join(__dirname, '../public/index.html'));
    });

    if (!module.parent) {
      app.listen(app.get('port'), () => console.log(`MEAN Full Stack listening on port ${app.get('port')}`));
    }
  })
  .catch(err => console.error(err));

export { app };
