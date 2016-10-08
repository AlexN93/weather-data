/// <reference path="../../../typings/index.d.ts" />

class GeoLocationService {
  static $inject = ['$log', '$q', 'geolocation'];

  constructor(private $log: ng.ILogService,
              private $q: ng.IQService,
              private geolocation: any) {
    this.$log = $log;
    this.$q = $q;
    this.geolocation = geolocation;
  }

  get(): ng.IPromise<{}> {
    var self = this;
    var deferred = this.$q.defer();

    this.geolocation.getLocation()
      .then((location) => {
        deferred.resolve(location);
      }, (errors) => {
        self.$log.debug(errors);
        deferred.reject(errors.data);
      });

    return deferred.promise;
  }
}
