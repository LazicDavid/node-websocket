import { resolve } from 'path';
import { config } from 'dotenv';
import { Api } from '@api';
import { Socket } from '@socket';

config({
  path: resolve(__dirname, '../config/.env')
});

Api().then(Socket);

