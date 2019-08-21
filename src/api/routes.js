import express from 'express';
import { resolve } from 'path';

export default app => {

  app.use('/__test', express.static(resolve(__dirname, '../views')));

  app.get('/__test', (req, res) => {
    res.sendFile(resolve(__dirname, '../views/test-client.html'));
  });

  app.use('/api', (req, res) => {
    res.json({ succes: true, test: 'test' });
  });

  app.use((req, res) =>
    res.json({ message: 'Not Found', status: 404 }));
};
