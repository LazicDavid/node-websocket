import websocket from 'ws';

const INTERVAL = 5000;
const chapters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

export default () => {

  const wss = new websocket.Server({
    port: process.env.PORT_SOCKET
  });

  const queue = ws => {
    function* sequence () {
      yield* chapters;
    }

    let iterator = sequence();

    return () => {
      const next = iterator.next();

      if (!next.done) {
        ws.send(next.value);
      } else {
        iterator = sequence();
        ws.send(iterator.next().value);
      }
    };
  };

  wss.on('connection', ws => {
    console.log(`:: Running WebSocket :: port ${process.env.PORT_SOCKET}`);

    ws.on('message', message => {
      console.log(`Received message => ${message}`);
    });

    setInterval(queue(ws), INTERVAL);
  });
};
