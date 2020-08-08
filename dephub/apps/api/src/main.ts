/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as neo4j from 'neo4j-driver';

const app = express();

const driver = neo4j.driver('bolt://localhost:db');

const session = driver.session();

app.get('/api', async (req, res) => {
  res.json(await session.run('MATCH (n) RETURN n'));
});

app.get('/modules', async (req, res) => {
  const query = `
    MATCH (lib:Module)<-[vl:VERSION_OF]-(lv:ModuleVersion)<-[d:DEPENDS_ON_LIBRARY]-(sv)-[:VERSION_OF]->(s)
    RETURN s.name as Service, lib.name as Library, lv.version as LibraryVersion, sv.version as ServiceVersion
  `;

  const response = await session.run(query);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
