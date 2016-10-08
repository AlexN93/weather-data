/// <reference path="../../../typings/index.d.ts" />

class App {}

angular
  .module('app')
  .component('app', {
    templateUrl: 'app/containers/App.html',
    controller: App
  });

/** 1. Get location, it will automatically ask for permission, if not granted, display the message with the link and show the input */
/** 2. Make request either with data received from geolocation or input */
/** 3. Display data */
/** 4. Write tests, visual and other  */
/** commands - npm run serve, npm test */
