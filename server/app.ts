import { config } from 'dotenv';
import * as express from 'express';
import { Application } from 'express';
import * as mongoose from 'mongoose';
import * as morgan from 'morgan';
import { join } from 'path';
import { env } from 'process';

import setRoutes from './routes';

const app: Application = express();
config({ path: '.env' });
app.set('port', (env.PORT || 3000));

app.use('/', express.static(join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let mongodbURI: string;
if (env.NODE_ENV === 'test') {
  mongodbURI = env.MONGODB_TEST_URI;
} else {
  mongodbURI = env.MONGODB_URI;
  app.use(morgan('dev'));
}

// (mongoose as any).Promise = global.Promise;
mongoose.connect(mongodbURI, { useNewUrlParser: true })
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
