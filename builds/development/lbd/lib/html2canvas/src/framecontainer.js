function FrameContainer(n,t,o){this.image=null,this.src=n;var e=this,i=getBounds(n);this.promise=(t?new Promise(function(t){"about:blank"===n.contentWindow.document.URL||null==n.contentWindow.document.documentElement?n.contentWindow.onload=n.onload=function(){t(n)}:t(n)}):this.proxyLoad(o.proxy,i,o)).then(function(n){return html2canvas(n.contentWindow.document.documentElement,{type:"view",width:n.width,height:n.height,proxy:o.proxy,javascriptEnabled:o.javascriptEnabled,removeContainer:o.removeContainer,allowTaint:o.allowTaint,imageTimeout:o.imageTimeout/2})}).then(function(n){return e.image=n})}FrameContainer.prototype.proxyLoad=function(n,t,o){var e=this.src;return loadUrlDocument(e.src,n,e.ownerDocument,t.width,t.height,o)};