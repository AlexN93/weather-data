/// <reference path="../../../typings/index.d.ts" />

describe('WeatherDataService', () => {
  let $httpBackend, $rootScope;

  beforeEach(angular.mock.module('app'));

  beforeEach(angular.mock.module('weatherDataService'));

  beforeEach(inject(function (_$httpBackend_: ng.IHttpBackendService, _$rootScope_: ng.IRootScopeService) {
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
  }));

  it('WeatherDataService response should have a valid structure', inject(function (weatherData: WeatherDataService) {
    const params = 'lat=42.683529199999995&lon=26.309871599999997';
    const API_KEY =  '';
    const url = 'http://api.openweathermap.org/data/2.5/weather?' + params + '&appid=' + API_KEY;

    const responseMock = {};

    $httpBackend.whenGET(url).respond(responseMock );
    weatherData.get(params).then((response) => {
      expect(response).toBe(responseMock);
    });

    $httpBackend.flush();
    $httpBackend.verifyNoOutstandingRequest();
  }));
});
