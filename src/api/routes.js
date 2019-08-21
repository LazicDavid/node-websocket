import { resolve } from 'path';

export default app => {

  app.get('/__test', (req, res) =>
    res.sendFile(resolve(__dirname, '../views/test-client.html'))
  );

  app.use('/api', (req, res) =>
    res.json({ succes: true, test: 'test' })
  );

  app.use((req, res) =>
    res.json({ message: 'Not Found', status: 404 })
  );
};
