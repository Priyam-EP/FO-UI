function SVGNodeContainer(e,i){this.src=e,this.image=null;var a=this;this.promise=i?new Promise(function(i,n){a.image=new Image,a.image.onload=i,a.image.onerror=n,a.image.src="data:image/svg+xml,"+(new XMLSerializer).serializeToString(e),!0===a.image.complete&&i(a.image)}):this.hasFabric().then(function(){return new Promise(function(i){html2canvas.fabric.parseSVGDocument(e,a.createCanvas.call(a,i))})})}SVGNodeContainer.prototype=Object.create(SVGContainer.prototype);