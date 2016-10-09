/* eslint-env browser */
(function() {
  'use strict';

  class ProductListController {
  }
  angular.module('ecomm.catalog')
    .component('productList', {
      templateUrl: 'scripts/app/catalog/product-list.tpl.html',
      controller: ProductListController,
      replace: true,
      bindings: {
        results: '='
      }
    });
})();
