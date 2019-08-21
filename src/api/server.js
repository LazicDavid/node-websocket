import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Routes from './routes';

export default async () => {

  const app = express();

  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  Routes(app);

  return app;
};
