!function(e,t){"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e)}):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(0,function(e){e.fn.selectpicker.defaults={noneSelectedText:"Aucune sélection",noneResultsText:"Aucun résultat pour {0}",countSelectedText:function(e,t){return 1<e?"{0} éléments sélectionnés":"{0} élément sélectionné"},maxOptionsText:function(e,t){return[1<e?"Limite atteinte ({n} éléments max)":"Limite atteinte ({n} élément max)",1<t?"Limite du groupe atteinte ({n} éléments max)":"Limite du groupe atteinte ({n} élément max)"]},multipleSeparator:", ",selectAllText:"Tout Sélectionner",deselectAllText:"Tout Dé-selectionner"}});