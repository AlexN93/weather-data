/// <reference path="../../../typings/index.d.ts" />

class MainSection {
  static $inject = ['$scope', 'geoLocationService', 'weatherDataService'];

  submitted: boolean;
  formData: {location: string, hidden: boolean};
  location: any;
  weatherData: any;

  /** @ngInject */
  constructor(private $scope: any, private geoLocationService: GeoLocationService, private weatherDataService: WeatherDataService) {
    this.submitted = false;
    this.formData = {location: '', hidden: true};
    this.location = {coords: {}};
    this.weatherData = null;
    this.$scope = $scope;
    this.geoLocationService = geoLocationService;
    this.weatherDataService = weatherDataService;
    this.getGeoLocation();
  }

  getGeoLocation() {
    this.geoLocationService.get().then((response) => {
      this.location = response;
      console.log(response);
      if (this.location.coords) {
        this.getWeatherData('lat=' + this.location.coords.latitude + '&lon=' + this.location.coords.longitude);
      }
    }, (errors) => {
      this.formData.hidden = false;
    });
  }

  submit() {
    this.submitted = true;
    if (this.$scope.locationForm.$invalid) {
      return false;
    } else {
      this.formData.hidden = true;
      if (!isNaN(parseInt(this.formData.location[0], 10))) {
        this.getWeatherData('zip=' + this.formData.location);
      } else {
        this.getWeatherData('q=' + this.formData.location);
      }
    }
  }

  getWeatherData(params: string) {
    console.log(params);
    this.weatherDataService.get(params).then((response) => {
      this.weatherData = response;
      console.log(this.weatherData);
    }, (errors) => {
      console.log(errors);
      this.weatherData = '<h3>Something went wrong while retrieving the data</h3>';
    });
  }
}

angular
  .module('app')
  .component('mainSection', {
    templateUrl: 'app/components/MainSection.html',
    controller: MainSection,
    bindings: {
      text: '<'
    }
  });
