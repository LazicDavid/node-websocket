# Node Websocket Service


## Global Dependencies

Dependencies will need to be installed **globally**.

- [nvm](https://github.com/nvm-sh/nvm)

## Node version

```bash
# Automatically switch to Node version defined in `.nvmrc`
$ nvm use
```

## Local Dependencies

```bash
# Install local dependencies in `/FE` directory.
$ yarn
```

## Local browser test
Hosted on `localhost:3000/__test`

## Heroku logs
```bash
$ heroku logs -a htc-spectrum --tail
```


## Environment tasks

| Environment | Command           | Description |
| ----------- |:-----------------:| ----------- |
| Local       | **yarn local** | Run WS server locally.
| Production  | **yarn build**  | Run PROD build.

