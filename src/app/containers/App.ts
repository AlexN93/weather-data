/// <reference path="../../../typings/index.d.ts" />

class App {}

angular
  .module('app')
  .component('app', {
    templateUrl: 'app/containers/App.html',
    controller: App
  });

/** commands - npm run serve, npm test */
