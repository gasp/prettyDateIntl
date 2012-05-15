(function( $ ){
	var methods = {
//		lang : 'en',
		change : function(){
			
		},

		makedate : function(){
			return 'trolo'+text;
		},
		init : function(options){
// may extend ?


			//console.log(this);
			
			return this.each(function() { 
				console.log(makedate());
				
				var t = (this.title)? this.title:$(this).html();
				var date = 'trolo'+t;//makedate(t);
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
 
$(document).ready(function(){
    $('span').dateme();
})