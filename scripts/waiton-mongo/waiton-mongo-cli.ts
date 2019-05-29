import { config } from '../../server/config/config';

import { argv, env, exit } from 'process';

import { waitOnMongo } from './waiton-mongo';

const MONGO_URL = argv[2] || env.MONGO_URL;
const TIMEOUT = +(argv[3] || env.TIMEOUT);

const url = MONGO_URL ? MONGO_URL : config.mongodbURL;

if (!url) {
  console.error("MONGO_URL is not provided either as first paramater or as env variable, or through MONGO_HOST");
  exit(1);
}

const options = (TIMEOUT != null) ? { timeout: TIMEOUT } : undefined;

waitOnMongo(url, options, (error: Error) => {
  if (error) {
    throw error;
  } 

  console.log('Mongo is running: connected with success');
  exit(0);
  
});