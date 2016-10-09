'use strict';var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} /* eslint-env browser */
(function () {
  'use strict';var

  CatalogService = function () {

    function CatalogService($http, $q, AppConstant) {_classCallCheck(this, CatalogService);
      this.$http = $http;
      this.$q = $q;
      this.AppConstant = AppConstant;
    }_createClass(CatalogService, [{ key: 'getProducts', value: function getProducts()

      {
        var defer = this.$q.defer();
        var promise = this.$http.get(this.AppConstant.API.GET_PRODUCTS);
        promise.then(function (result) {return defer.resolve(result.data.deals);});
        return defer.promise;
      } }]);return CatalogService;}();



  CatalogService.$inject = ['$http', '$q', 'AppConstant'];
  angular.module('ecomm.catalog').
  service('CatalogService', CatalogService);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2cuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJDYXRhbG9nU2VydmljZSIsIiRodHRwIiwiJHEiLCJBcHBDb25zdGFudCIsImRlZmVyIiwicHJvbWlzZSIsImdldCIsIkFQSSIsIkdFVF9QUk9EVUNUUyIsInRoZW4iLCJyZXNvbHZlIiwicmVzdWx0IiwiZGF0YSIsImRlYWxzIiwiJGluamVjdCIsImFuZ3VsYXIiLCJtb2R1bGUiLCJzZXJ2aWNlIl0sIm1hcHBpbmdzIjoid3NCQUFBO0FBQ0EsQ0FBQyxZQUFXO0FBQ1YsZUFEVTs7QUFHSkEsZ0JBSEk7O0FBS1IsNEJBQVlDLEtBQVosRUFBbUJDLEVBQW5CLEVBQXVCQyxXQUF2QixFQUFvQztBQUNsQyxXQUFLRixLQUFMLEdBQWFBLEtBQWI7QUFDQSxXQUFLQyxFQUFMLEdBQVVBLEVBQVY7QUFDQSxXQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNELEtBVE87O0FBV0s7QUFDWCxZQUFJQyxRQUFRLEtBQUtGLEVBQUwsQ0FBUUUsS0FBUixFQUFaO0FBQ0EsWUFBSUMsVUFBVSxLQUFLSixLQUFMLENBQVdLLEdBQVgsQ0FBZSxLQUFLSCxXQUFMLENBQWlCSSxHQUFqQixDQUFxQkMsWUFBcEMsQ0FBZDtBQUNBSCxnQkFBUUksSUFBUixDQUFhLDBCQUFVTCxNQUFNTSxPQUFOLENBQWNDLE9BQU9DLElBQVAsQ0FBWUMsS0FBMUIsQ0FBVixFQUFiO0FBQ0EsZUFBT1QsTUFBTUMsT0FBYjtBQUNELE9BaEJPOzs7O0FBb0JWTCxpQkFBZWMsT0FBZixHQUF5QixDQUFDLE9BQUQsRUFBVSxJQUFWLEVBQWdCLGFBQWhCLENBQXpCO0FBQ0FDLFVBQVFDLE1BQVIsQ0FBZSxlQUFmO0FBQ0dDLFNBREgsQ0FDVyxnQkFEWCxFQUM2QmpCLGNBRDdCO0FBRUQsQ0F2QkQiLCJmaWxlIjoiY2F0YWxvZy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWVudiBicm93c2VyICovXG4oZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBjbGFzcyBDYXRhbG9nU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgJHEsIEFwcENvbnN0YW50KSB7XG4gICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICB0aGlzLiRxID0gJHE7XG4gICAgICB0aGlzLkFwcENvbnN0YW50ID0gQXBwQ29uc3RhbnQ7XG4gICAgfVxuXG4gICAgZ2V0UHJvZHVjdHMoKXtcbiAgICAgIGxldCBkZWZlciA9IHRoaXMuJHEuZGVmZXIoKTtcbiAgICAgIGxldCBwcm9taXNlID0gdGhpcy4kaHR0cC5nZXQodGhpcy5BcHBDb25zdGFudC5BUEkuR0VUX1BST0RVQ1RTKTtcbiAgICAgIHByb21pc2UudGhlbihyZXN1bHQgPT4gZGVmZXIucmVzb2x2ZShyZXN1bHQuZGF0YS5kZWFscykpO1xuICAgICAgcmV0dXJuIGRlZmVyLnByb21pc2U7XG4gICAgfVxuXG4gIH1cblxuICBDYXRhbG9nU2VydmljZS4kaW5qZWN0ID0gWyckaHR0cCcsICckcScsICdBcHBDb25zdGFudCddO1xuICBhbmd1bGFyLm1vZHVsZSgnZWNvbW0uY2F0YWxvZycpXG4gICAgLnNlcnZpY2UoJ0NhdGFsb2dTZXJ2aWNlJywgQ2F0YWxvZ1NlcnZpY2UpO1xufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
