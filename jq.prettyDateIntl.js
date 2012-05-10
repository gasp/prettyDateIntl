(function( $ ){
	var methods = {
		init : function(){},
		set : function(){}
	}
	$.fn.dateme = function( options ) {  
 
		var settings = $.extend( {
			'lang'         : 'en',
		}, options);

/* 
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on the plugin' );
		}
 */
		return this.each(function() {        
 
			var t = (this.title)? this.title:$(this).html();
			
			var date = prettyDate(t);
				if ( date )
					jQuery(this).text( date );
 
		});
 
		function prettyDate(text){
			return 'trolo'+text;
		}
 
	};
})( jQuery );
 
$(document).ready(function(){
    $('span').dateme();
})