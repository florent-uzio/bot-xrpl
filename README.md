# XRPL transaction monitoring

## Description

Example to monitor transaction on the XRPL.

Once the application is started, all the transactions validated in a ledger with the Source Tag 74920348 will be fetched and the transaction hash will be recorded in a local SQL Lite database.

A GET API is provided to retrieve all the hashes recorded in the DB.

## Installation

Make sure to have Node.js 18 or later installed.

Then run inside the root directory of this project.

```bash
$ npm install
```

## Running the app

Init the DB:

```bash
$ npm run prisma:dev:migrate-dev
```

```bash
# development
$ npm run start

# watch mode in development (automatically reloads when a file changes)
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API Endpoints

One API to retrieve the transaction hashes once the application isrunning.

```
GET http://localhost:3000/vmt/hashes
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
