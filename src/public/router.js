import { ReposResolver } from './resolvers/repos.resolver';
import { ReadmeResolver } from './resolvers/readme.resolver';

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
export function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state({
      name: 'home',
      url: '/',
      template: require('./templates/home.html'),
      controller: 'homeCtrl',
    })
    .state({
      name: 'user',
      url: '/:username',
      template: require('./templates/user.html'),
      controller: 'userCtrl',
      resolve: {
        repos: ReposResolver,
      },
    })
    .state({
      name: 'user.repo',
      url: '/:repo',
      template: require('./templates/repo.html'),
      controller: 'repoCtrl',
      resolve: {
        readme: ReadmeResolver,
      },
    });
  $urlRouterProvider.otherwise('/');
}
