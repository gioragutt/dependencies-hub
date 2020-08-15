export interface Dependency {
  /**
   * Name of the module of the dependency.
   * For libraries, this will be the `group + name` combination.
   * There are special cases, like `compileProject`, which need to be handled differently.
   * 
   * That's a *TODO*.
   */
  moduleName: string;

  /**
   * Version of the dependency that was used.
   */
  version: string;

  /**
   * Type of the dependency: compile, implementation, testCompile, runtime, etc.
   */
  dependencyType: string;
}

export interface Module {
  /**
   * Absolute path from the root of the repository to the module (it's build.gradle file)
   */
  pathInRepo: string;

  /**
   * Name of the module. 
   * Combination of `group` from `build.gradle` and `rootProject.name` from `settings.gradle`.
   */
  moduleName: string;

  /**
   * Version of the module. 
   * 
   * For services:
   *    Scrapes will be done on either a tag, which would indicate the version,
   *    Or the master branch, which would mean that this is the `latest` version of the module.
   * 
   * For libraries:
   *    Will be taken from `build.gradle`
   */
  version: string;

  /**
   * List of recorded dependencies
   */
  dependencies: Dependency[]
}

export interface ScrapeResult {
  /**
   * Name of the repository
   */
  repositoryName: string;

  /**
   * Name of the git version (master, v0.1.0, a1b2c3)
   */
  gitVersion: string;

  /**
   * Type of the git version (branch, tag, commit hash)
   */
  gitVersionType: string;

  /**
   * Modules scraped in the repo
   */
  modules: Module[];
}