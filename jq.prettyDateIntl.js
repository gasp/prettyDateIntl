(function( $ ){
	var methods = {
//		lang : 'en',
		change : function(){
			
		},

		makedate : function(text){
			return 'trolo'+text;
		},
		init : function(options){			
			return this.each(function() { 
				var t = (this.title)? this.title:$(this).html();
				var date = methods.makedate(t);
				if ( date )
					jQuery(this).text( date );
			});
		}
	}
	$.fn.dateme = function( method ) {  

		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on the plugin' );
		}
 
		function prettyDate(text){
			return 'trolo'+text;
		}
 
	};
})( jQuery );
