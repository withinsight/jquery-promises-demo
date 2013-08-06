// Hybrid, responsive app foundation

	promiseDemo = {
		init: function() {
			var feedUrl = function( cat ) {
				return 'http://blog.ted.com/category/' + cat + '/?feed=json&jsonp=cb';
			}
			var technologyPromise = promiseDemo.ajax( feedUrl( 'technology' ), 'technology-feed' );
			var entertainmentPromise = technologyPromise.pipe( function() {
				return promiseDemo.ajax( feedUrl( 'entertainment' ), 'entertainment-feed' );
			});
			var designPromise = entertainmentPromise.pipe( function() {
				return promiseDemo.ajax( feedUrl( 'design' ), 'design-feed' );
			});
			var tedxPromise = designPromise.pipe( function() {
				return promiseDemo.ajax( feedUrl( 'tedx' ), 'tedx-feed' );
			});
		},
		ajax: function( url, cacheName ) {
			function call() {
				return $.ajax({
					dataType: 'jsonp',
					ifModified: true,
					isLocal: true,
					jsonpCallback: 'cb',
					timeout: 25000,
					url: url
				});
			}
			var ajaxPromise = call();
			ajaxPromise.fail( function( error ) {
				console.log( error );
			});
			ajaxPromise.done( function( data ) {
				promiseDemo.cache( cacheName, data );
			});
			return ajaxPromise;
		},
		cache: function( cacheName, data ) {
			$.totalStorage( cacheName, data );
			$( 'body' ).append('cached ' + cacheName + '<br />');
		}
	};

$( document ).ready( function() {
	promiseDemo.init();
});