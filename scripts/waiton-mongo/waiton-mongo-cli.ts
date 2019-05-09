import { argv, env, exit } from 'process';

import { waitOnMongo } from './waiton-mongo';

const MONGO_URL = argv[2] || env.MONGO_URL;
const TIMEOUT = +(argv[3] || env.TIMEOUT);

if (!MONGO_URL) {
  console.error("MONGO_URL is not provided either using first paramater or as a env variable");
  exit(1);
}

waitOnMongo(MONGO_URL, { timeout: TIMEOUT }, function (error: Error) {
  if (error) {
    throw error;
  } else {
    console.log('Mongo is running: connected with success');
    exit(0);
  }
});