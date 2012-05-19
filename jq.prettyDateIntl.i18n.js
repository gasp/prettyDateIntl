(function( $ ){	
	var pack = {
		en:{},
		fr:{}
	};
	pack.en_EN={'now':'just now','minutes ago':'%d minutes ago','test':'test EN'}
	pack.en_US={'now':'now','minutes ago':'%d minutes ago','test':'test EN'}
	pack.fr_FR={'now':'à l\'instant','minutes ago':'il y a %d minutes','test':'test FR'};
	pack.de_DE={'now':'ein augenblick','test':'test DE'};
	
	$(document).data('plugin_dateme',pack);
})( jQuery );