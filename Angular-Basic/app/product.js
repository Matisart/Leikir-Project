'use strict';

(function(){
	// Define a new module just for product stuff
	var app = angular.module('store-products', []);

	// ////////////////////////////////////////////
	// Declaration of a custom Angular Directive //
	// ////////////////////////////////////////////
	app.directive('productTitle', function(){
		return {
			// Restrict property take the values A,E,C or AEC they limit matche of a directive name A => attr, E => tag, C=> class
			restrict    : 'E' ,
			// TemplateUrl property allow to divide template into smaller files and use url to unite them
			templateUrl : 'product-title.html'
		};
	});

	app.directive('productPanels', function(){
		return{
			restrict     : 'E'                   ,
			templateUrl  : 'product-panels.html' ,
			controller   : function(){
				this.tab = 1;

				this.selectTab = function(tabIndex){
					this.tab = tabIndex;
				};
				this.isSelected = function(curTab){
					return this.tab === curTab;
				};		
			}                                    ,
			controllerAs : 'panel'
		};
	});

	app.directive('productGallery', function(){
		return {
			restrict         : 'E'                    ,
			templateUrl      : 'product-gallery.html' ,
			controller       : function(){
				this.current = 0;

				this.setCurrent = function(imgIndex){
					// The || 0 syntax mean : if undefined property = 0
					this.current = imgIndex || 0;
				}		
			}                                         ,
			controllerAs : 'gallery'
		};
	});
})();