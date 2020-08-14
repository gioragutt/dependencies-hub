/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { createApiEndpoint as _ } from '@dephub/express-utils';
import express from 'express';
import { searchModules } from './app/searchModules';
import { environment } from './environments/environment';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));

app.get(
  '/modules',
  _(async ({ query: { pageSize, page } }) =>
    searchModules({
      page: Number(page || '0'),
      pageSize: Number(pageSize || '10'),
    }),
  ),
);

const port = environment.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
