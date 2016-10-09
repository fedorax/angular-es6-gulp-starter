'use strict';var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} /* eslint-env browser */
(function () {
  'use strict';var

  CatalogController = function () {

    function CatalogController(CatalogService) {_classCallCheck(this, CatalogController);
      this.CatalogService = CatalogService;
      this.getProducts();
    }_createClass(CatalogController, [{ key: 'getProducts', value: function getProducts()

      {var _this = this;
        var promise = this.CatalogService.getProducts();
        promise.then(function (products) {return _this.products = products;});
      } }]);return CatalogController;}();



  CatalogController.$inject = ['CatalogService'];
  angular.module('ecomm.catalog').
  controller('CatalogController', CatalogController);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2cuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJDYXRhbG9nQ29udHJvbGxlciIsIkNhdGFsb2dTZXJ2aWNlIiwiZ2V0UHJvZHVjdHMiLCJwcm9taXNlIiwidGhlbiIsInByb2R1Y3RzIiwiJGluamVjdCIsImFuZ3VsYXIiLCJtb2R1bGUiLCJjb250cm9sbGVyIl0sIm1hcHBpbmdzIjoid3NCQUFBO0FBQ0EsQ0FBQyxZQUFXO0FBQ1YsZUFEVTs7QUFHSkEsbUJBSEk7O0FBS1IsK0JBQVlDLGNBQVosRUFBNEI7QUFDMUIsV0FBS0EsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxXQUFLQyxXQUFMO0FBQ0QsS0FSTzs7QUFVSztBQUNaLFlBQUlDLFVBQVUsS0FBS0YsY0FBTCxDQUFvQkMsV0FBcEIsRUFBZDtBQUNBQyxnQkFBUUMsSUFBUixDQUFhLDRCQUFZLE1BQUtDLFFBQUwsR0FBZ0JBLFFBQTVCLEVBQWI7QUFDQSxPQWJPOzs7O0FBaUJWTCxvQkFBa0JNLE9BQWxCLEdBQTRCLENBQUMsZ0JBQUQsQ0FBNUI7QUFDQUMsVUFBUUMsTUFBUixDQUFlLGVBQWY7QUFDR0MsWUFESCxDQUNjLG1CQURkLEVBQ21DVCxpQkFEbkM7QUFFRCxDQXBCRCIsImZpbGUiOiJjYXRhbG9nLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cbihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGNsYXNzIENhdGFsb2dDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKENhdGFsb2dTZXJ2aWNlKSB7XG4gICAgICB0aGlzLkNhdGFsb2dTZXJ2aWNlID0gQ2F0YWxvZ1NlcnZpY2U7XG4gICAgICB0aGlzLmdldFByb2R1Y3RzKCk7XG4gICAgfVxuXG4gICAgZ2V0UHJvZHVjdHMoKXtcbiAgICBcdGxldCBwcm9taXNlID0gdGhpcy5DYXRhbG9nU2VydmljZS5nZXRQcm9kdWN0cygpO1xuICAgIFx0cHJvbWlzZS50aGVuKHByb2R1Y3RzID0+IHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cyk7XG4gICAgfVxuXG4gIH1cblxuICBDYXRhbG9nQ29udHJvbGxlci4kaW5qZWN0ID0gWydDYXRhbG9nU2VydmljZSddO1xuICBhbmd1bGFyLm1vZHVsZSgnZWNvbW0uY2F0YWxvZycpXG4gICAgLmNvbnRyb2xsZXIoJ0NhdGFsb2dDb250cm9sbGVyJywgQ2F0YWxvZ0NvbnRyb2xsZXIpO1xufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
