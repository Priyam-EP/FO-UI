function DummyImageContainer(e){if(this.src=e,log("DummyImageContainer for",e),!this.promise||!this.image){log("Initiating DummyImageContainer"),DummyImageContainer.prototype.image=new Image;var o=this.image;DummyImageContainer.prototype.promise=new Promise(function(e,m){o.onload=e,o.onerror=m,o.src=smallImage(),!0===o.complete&&e(o)})}}