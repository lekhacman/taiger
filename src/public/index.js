import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import angular from 'angular';
import 'angular-sanitize';
import 'angular-ui-router';
import 'angular-ui-bootstrap';

import { RootCtrl } from './ctrl/root.ctrl';
import { Router } from './router';
import { HomeCtrl } from './ctrl/home.ctrl';
import { RepoCtrl } from './ctrl/repo.ctrl';
import { UserCtrl } from './ctrl/user.ctrl';

const rootModule = angular.module('root', [
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
]);
rootModule
  .config(Router)
  .controller('rootCtrl', RootCtrl)
  .controller('homeCtrl', HomeCtrl)
  .controller('userCtrl', UserCtrl)
  .controller('repoCtrl', RepoCtrl);
