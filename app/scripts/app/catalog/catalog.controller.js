/* eslint-env browser */
(function() {
  'use strict';

  class CatalogController {

    constructor(CatalogService) {
      this.CatalogService = CatalogService;
      this.getProducts();
    }

    getProducts(){
    	let promise = this.CatalogService.getProducts();
    	promise.then(products => this.products = products);
    }

  }

  CatalogController.$inject = ['CatalogService'];
  angular.module('ecomm.catalog')
    .controller('CatalogController', CatalogController);
})();
