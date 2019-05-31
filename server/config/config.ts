import * as Joi from '@hapi/joi';
import { config as envConfig } from 'dotenv';

envConfig(); // will load values from .env to process.env

// define validation for all the env vars
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .description("The application environment")
    .allow(['development', 'production', 'test', 'provision'])
    .default('development'),
  API_CONTEXT: Joi.string()
    .description("API Server Context Path")
    .default('/api'),
  API_HOST: Joi.string()
    .description("API Server Host")
    .default('localhost'),
  API_PORT: Joi.number()
    .description("API Server Port")
    .default(3000),
  API_PATH: Joi.string()
    .description("API Server Redirection Path")
    .default(''),
  MONGOOSE_DEBUG: Joi.boolean()
    .when('NODE_ENV', {
      is: Joi.string().equal('development'),
      then: Joi.boolean().default(true),
      otherwise: Joi.boolean().default(false)
    }),
  SECRET_TOKEN: Joi.string().required()
    .description("JWT Secret required to sign"),
  MONGO_HOST: Joi.string().required()
    .description('Mongo DB host uri'),
  MONGO_PORT: Joi.number()
    .default((context: Joi.ObjectSchema) => context['API_PORT'] + 1,
      "Mongo DB port: by default API server port + 1"
    ),
  MONGO_DB_NAME: Joi.string()
    .description("Mongo DB name")
    .default('meanfullstack'),
  MONGO_TEST_DB_NAME: Joi.string()
    .description("Mongo DB name for testing")
    .default('test')
}).unknown()
  .required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Configuration validation error: ${error.message}`);
}

// ATM doesn't manage security: use only localhost or possibly LAN
const apiURL = [
  'http://',
  envVars.API_HOST,
  ':',
  envVars.API_PORT,
  envVars.API_PATH && envVars.API_PATH[0] !== '/' ? '/' : '',
  envVars.API_PATH
].join('');

const apiProxy = {
  [envVars.API_CONTEXT]: {
    "target": apiURL,
    "secure": false
  }
};

const mongodbURL = [
  'mongodb://',
  envVars.MONGO_HOST,
  ':',
  envVars.MONGO_PORT,
  '/',
  (envVars.NODE_ENV === 'test') ? envVars.MONGO_TEST_DB_NAME : envVars.MONGO_DB_NAME
].join('');

export const config = {
  env: envVars.NODE_ENV,
  mongooseDebug: envVars.MONGOOSE_DEBUG,
  jwtSecret: envVars.SECRET_TOKEN,
  frontend: envVars.MEAN_FRONTEND || 'angular',
  mongodb: {
    port: envVars.MONGO_PORT,
    url: mongodbURL
  },
  api: {
    port: envVars.API_PORT,
    proxy: apiProxy
  }
};
