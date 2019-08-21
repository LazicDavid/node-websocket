import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Routes from './routes';

export default () => {

  const app = express();

  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  Routes(app);

  app.listen(process.env.PORT || 3000, () =>
    console.log(`:: Running API :: port ${process.env.PORT_API}`)
  );
};
