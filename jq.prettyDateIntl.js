(function( $ ){	
	var pack = {
		en:{},
		fr:{}
	};
	pack.en_EN={'now':'just now','test':'test EN'}
	pack.en_US={'now':'now','test':'test EN'}
	pack.fr_FR={'now':'à l\'instant','test':'test FR'};
	
	console.log($.data(document));
	
	var methods = {
		lang : function(codelang){
			var lang = codelang||'en-EN';
 			// make sure that the language code is in the aa-AA format
			lang = lang.replace(/-/, '_').toLowerCase();
			if (lang.length > 3) {
				lang = lang.substring(0, 3) + lang.substring(3).toUpperCase();
			}
			else{
				lang=lang+'_'+lang.toUpperCase();
			}
			return lang;
		},
		// set automatically the language depending on the browser
		auto : function(){
			return (navigator.language /* Mozilla */ ||
				navigator.userLanguage /* IE */);
		},
		change : function(lang){
//			how to call auto() and lang() ?
//			if(!lang) lang=auto();
//			$.dateme.lang=lang(lang);
		},

		makedate : function(text,lang){
			
			var translated = eval("pack."+lang+"['now']");
			return lang+' '+translated+' '+text;
		},
		init : function(options){	
			var settings = $.extend( {
			      'lang'         : 'en_US'
			    }, options);
				settings.lang = methods.lang(settings.lang);
				
			return this.each(function() { 
				var t = (this.title)? this.title:$(this).html();
				var date = methods.makedate( t, settings.lang );
				if ( date )
					jQuery(this).text( date ).attr({'title':t});

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
 
	};
})( jQuery );