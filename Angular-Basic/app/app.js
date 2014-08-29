(function(){
	// Declaration of an Angular Module, the string in the array indicate the module related to this one
	var app = angular.module('store', ['store-products']);

	// /////////////////////////////////////
	// Declaration of Angular Controllers //
	// /////////////////////////////////////

	// Wrapping the second argument into array allow the dependencies injection, the string '$http' indicate service built-in angular and his presence as a callback argument allow his use in the controller
	app.controller('StoreController', function(){
		var store = this;
		store.products = [];
		store.products = gems;

		// Initialize .products to an empty array prevent the crach of the application before our data return from our get request
		// store.product = [];
		store.getEval = function(gemEva){
			var evaStr = "";

			if(gemEva) {
				(gemEva < 2) ? (evaStr = gemEva + " Star") : (evaStr = gemEva + " Stars")
			} else {
				evaStr = "Some Stars"
			}
			
			return evaStr;
		};
		
	});

	///////////////////////////////////////////////////////////////////////////////
	// !! THESE CONTROLLERS WAS MOVED INTO THEIRE OWN DIRECTIVE IN product.js !! // 
	///////////////////////////////////////////////////////////////////////////////
	//
	// app.controller('PanelController', function(){
	//
	// });
	//
	// app.controller('GalleryController', function(){
	// 
	// });

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	///////////////////////////////////////////////// 
	// !! MOVE TO A JSON FILE FOR $HTTP REQUEST !! //
	// //////////////////////////////////////////////
	// 
	// Javascript gems Object for the StoreController
	
	var gems = [
		{ name        : 'Azurite'                                                                                                  ,
		  price       : 110.5                                                                                                      ,
		  description : 'Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.' ,
		  shine       : 8                                                                                                          ,
     	  rarity      : 7                                                                                                          ,
     	  color       : '#CCC'                                                                                                     ,
     	  faces       : 14                                                                                                         ,
		  canPurchase : true                                                                                                       ,
		  soldOut     : false                                                                                                      ,
     	  images      : [ "img/gem-02.gif" ,
       				  	  "img/gem-05.gif" ,
       			      	  "img/gem-09.gif"
    	  ]                                                                                                                        ,
		  reviews     : [
		  			{
		  				stars     : 5                      ,
		  				body      : 'I love this product!' ,
		  				author    : 'joe@thomas.com'       ,
		  				createdOn : 1397490980837
		  			} ,
		  			{
		  				stars     : 1                ,
		  				body      : 'This one sucks' ,
		  				author    : 'tim@hater.com'  ,
		  				createdOn : 1397490980837
		  			}
		  ]
		} ,
		{ name        : 'Bloodstone'                                                                                                ,
		  price       : 22.90                                                                                                       ,
		  description : 'Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.' ,
		  shine       : 9                                                                                                           ,
     	  rarity      : 7                                                                                                           ,
     	  color       : '#EEE'                                                                                                      ,
     	  faces       : 12                                                                                                          ,
		  canPurchase : true                                                                                                        ,
		  soldOut     : false                                                                                                       ,
     	  images      : [ "img/gem-01.gif" ,
       				  	  "img/gem-03.gif" ,
       			      	  "img/gem-04.gif"
    	  ]                                                                                                                         ,
		  reviews     : [
		  			{
		  				stars     : 3                                                                   ,
		  				body      : 'I think this gem was just OK, could honestly use more shine, IMO.' ,
		  				author    : 'JimmyDean@example.org'                                             ,
       				createdOn : 1397490980837
		  			} ,
		  			{
		  				stars     : 4                                  ,
		  				body      : 'Any gem with 12 faces is for me!' ,
		  				author    : 'gemsRock@example.org'             ,
       				createdOn : 1397490980837
		  			}
		  ]
		} ,
		{ name        : 'Zircon'                                                                                                                        ,
		  price       : 1100                                                                                                                            ,
		  description : 'Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.' ,
		  shine       : 70                                                                                                                              ,
     	  rarity      : 2                                                                                                                               ,
     	  color       : '#000'                                                                                                                          ,
     	  faces       : 6                                                                                                                               ,
		  canPurchase : true                                                                                                                            ,
		  soldOut     : false                                                                                                                           ,
     	  images      : [ "img/gem-06.gif" ,
       				  	  "img/gem-07.gif" ,
       			      	  "img/gem-08.gif"
    	  ]                                                                                                                                             ,
		  reviews     : [
		  			{
		  				stars     : 1                                                     ,
		  				body      : 'This gem is WAY too expensive for its rarity value.' ,
		  				author    : 'turtleguyy@example.org'                              ,
       				createdOn : 1397490980837
		  			} ,
		  			{
		  				stars     : 1                                  ,
       				body      : "BBW: High Shine != High Quality." ,
       				author    : "LouisW407@example.org"            ,
       				createdOn : 1397490980837
		  			} , 
		  			{
       				stars     : 1                          ,
       				body      : "Don't waste your rubles!" ,
       				author    : "nat@example.org"          ,
       				createdOn : 1397490980837
     				}
		  ]
		} ,
	];
})();	  