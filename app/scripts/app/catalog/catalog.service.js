/* eslint-env browser */
(function() {
  'use strict';

  class CatalogService {

    constructor($http, $q, AppConstant) {
      this.$http = $http;
      this.$q = $q;
      this.AppConstant = AppConstant;
    }

    getProducts(){
      let defer = this.$q.defer();
      let promise = this.$http.get(this.AppConstant.API.GET_PRODUCTS);
      promise.then(result => defer.resolve(result.data.deals));
      return defer.promise;
    }

  }

  CatalogService.$inject = ['$http', '$q', 'AppConstant'];
  angular.module('ecomm.catalog')
    .service('CatalogService', CatalogService);
})();
