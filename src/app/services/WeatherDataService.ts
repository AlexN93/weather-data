/// <reference path="../../../typings/index.d.ts" />

class WeatherDataService {

  static $inject = ['$http', '$log', '$q'];

  constructor(private $http: ng.IHttpService,
              private $log: ng.ILogService,
              private $q: ng.IQService) {
    this.$http = $http;
    this.$log = $log;
    this.$q = $q;
  }

  get(params: string): ng.IPromise<{}> {
    var self = this;
    var deferred = this.$q.defer();

    this.$http.get('http://api.openweathermap.org/data/2.5/weather?' + params + '&appid=' + API_KEY)
      .then((response) => {
        deferred.resolve(response.data);
      }, (errors) => {
        self.$log.debug(errors);
        deferred.reject(errors.data);
      });

    return deferred.promise;
  }
}
