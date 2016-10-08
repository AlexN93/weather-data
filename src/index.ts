/// <reference path="../typings/index.d.ts" />

angular
  .module('app', ['ui.router', 'geolocation'])
  .service('geoLocationService', GeoLocationService)
  .service('weatherLocationService', WeatherLocationService);
