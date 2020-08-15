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
      dependencies: [
        {
          moduleName: 'org.test.lib-module-one',
          version: '0.1.0',
          dependencyType: 'implementation',
        },
      ],
    },
    {
      moduleName: 'ModuleTwo',
      pathInRepo: '/ModuleTwo',
      version: 'latest',
      dependencies: [
        {
          moduleName: 'org.test.lib-module-one',
          version: '0.1.0',
          dependencyType: 'implementation',
        },
      ],
    },
    {
      moduleName: 'org.test.lib-module-one',
      pathInRepo: './LibModuleOne',
      version: '0.1.0',
      dependencies: [],
    },
  ],
};

insertScrapeResult(scrapeResult, session);