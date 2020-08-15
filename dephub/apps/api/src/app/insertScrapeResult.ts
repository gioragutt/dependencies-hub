import { insertScrapeResult, ScrapeResult } from '@dephub/scrape-gradle-from-tfs-repo';
import { session } from './neo4j';

const scrapeResult: ScrapeResult = {
  gitVersion: 'master',
  gitVersionType: 'branch',
  repositoryName: 'KakiRepo',
  modules: [
    {
      moduleName: 'ModuleOne',
      pathInRepo: '/ModuleOne',
      version: 'latest',
      dependencies: []
    },
    {
      moduleName: 'ModuleTwo',
      pathInRepo: '/ModuleTwo',
      version: 'latest',
      dependencies: []
    }
  ]
};

insertScrapeResult(scrapeResult, session);