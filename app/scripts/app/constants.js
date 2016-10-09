/* eslint-env browser */
/* global angular */
(function() {
  'use strict';
  angular.module('ecomm')
  	.constant('AppConstant',{
  		API: {
  			GET_PRODUCTS: 'https://hackerearth.0x10.info/api/nitro_deals?type=json&query=list_deals'
  		}
  	})
})();
