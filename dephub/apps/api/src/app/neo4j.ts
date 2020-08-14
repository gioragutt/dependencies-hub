import neo4j from 'neo4j-driver';
import { environment } from '../environments/environment';

const driver = neo4j.driver(environment.neo4jUrl);

export const session = driver.session();
export { neo4j };