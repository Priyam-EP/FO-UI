function NodeParser(e,t,n,r,o){log("Starting NodeParser"),this.renderer=t,this.options=o,this.range=null,this.support=n,this.renderQueue=[],this.stack=new StackingContext(!0,1,e.ownerDocument,null);var i=new NodeContainer(e,null);if(o.background&&t.rectangle(0,0,t.width,t.height,new Color(o.background)),e===e.ownerDocument.documentElement){var s=new NodeContainer(i.color("backgroundColor").isTransparent()?e.ownerDocument.body:e.ownerDocument.documentElement,null);t.rectangle(0,0,t.width,t.height,s.color("backgroundColor"))}i.visibile=i.isElementVisible(),this.createPseudoHideStyles(e.ownerDocument),this.disableAnimations(e.ownerDocument),this.nodes=flatten([i].concat(this.getChildren(i)).filter(function(e){return e.visible=e.isElementVisible()}).map(this.getPseudoElements,this)),this.fontMetrics=new FontMetrics,log("Fetched nodes, total:",this.nodes.length),log("Calculate overflow clips"),this.calculateOverflowClips(),log("Start fetching images"),this.images=r.fetch(this.nodes.filter(isElement)),this.ready=this.images.ready.then(bind(function(){return log("Images loaded, starting parsing"),log("Creating stacking contexts"),this.createStackingContexts(),log("Sorting stacking contexts"),this.sortStackingContexts(this.stack),this.parse(this.stack),log("Render queue created with "+this.renderQueue.length+" items"),new Promise(bind(function(e){o.async?"function"==typeof o.async?o.async.call(this,this.renderQueue,e):this.renderQueue.length>0?(this.renderIndex=0,this.asyncRenderer(this.renderQueue,e)):e():(this.renderQueue.forEach(this.paint,this),e())},this))},this))}function hasParentClip(e){return e.parent&&e.parent.clip.length}function toCamelCase(e){return e.replace(/(\-[a-z])/g,function(e){return e.toUpperCase().replace("-","")})}function ClearTransform(){}function calculateBorders(e,t,n,r){return e.map(function(o,i){if(o.width>0){var s=t.left,a=t.top,d=t.width,c=t.height-e[2].width;switch(i){case 0:c=e[0].width,o.args=drawSide({c1:[s,a],c2:[s+d,a],c3:[s+d-e[1].width,a+c],c4:[s+e[3].width,a+c]},r[0],r[1],n.topLeftOuter,n.topLeftInner,n.topRightOuter,n.topRightInner);break;case 1:s=t.left+t.width-e[1].width,d=e[1].width,o.args=drawSide({c1:[s+d,a],c2:[s+d,a+c+e[2].width],c3:[s,a+c],c4:[s,a+e[0].width]},r[1],r[2],n.topRightOuter,n.topRightInner,n.bottomRightOuter,n.bottomRightInner);break;case 2:a=a+t.height-e[2].width,c=e[2].width,o.args=drawSide({c1:[s+d,a+c],c2:[s,a+c],c3:[s+e[3].width,a],c4:[s+d-e[3].width,a]},r[2],r[3],n.bottomRightOuter,n.bottomRightInner,n.bottomLeftOuter,n.bottomLeftInner);break;case 3:d=e[3].width,o.args=drawSide({c1:[s,a+c+e[2].width],c2:[s,a],c3:[s+d,a+e[0].width],c4:[s+d,a+c]},r[3],r[0],n.bottomLeftOuter,n.bottomLeftInner,n.topLeftOuter,n.topLeftInner)}}return o})}function getCurvePoints(e,t,n,r){var o=(Math.sqrt(2)-1)/3*4,i=n*o,s=r*o,a=e+n,d=t+r;return{topLeft:bezierCurve({x:e,y:d},{x:e,y:d-s},{x:a-i,y:t},{x:a,y:t}),topRight:bezierCurve({x:e,y:t},{x:e+i,y:t},{x:a,y:d-s},{x:a,y:d}),bottomRight:bezierCurve({x:a,y:t},{x:a,y:t+s},{x:e+i,y:d},{x:e,y:d}),bottomLeft:bezierCurve({x:a,y:d},{x:a-i,y:d},{x:e,y:t+s},{x:e,y:t})}}function calculateCurvePoints(e,t,n){var r=e.left,o=e.top,i=e.width,s=e.height,a=t[0][0],d=t[0][1],c=t[1][0],l=t[1][1],u=t[2][0],h=t[2][1],p=t[3][0],f=t[3][1],g=i-c,m=s-h,b=i-u,y=s-f;return{topLeftOuter:getCurvePoints(r,o,a,d).topLeft.subdivide(.5),topLeftInner:getCurvePoints(r+n[3].width,o+n[0].width,Math.max(0,a-n[3].width),Math.max(0,d-n[0].width)).topLeft.subdivide(.5),topRightOuter:getCurvePoints(r+g,o,c,l).topRight.subdivide(.5),topRightInner:getCurvePoints(r+Math.min(g,i+n[3].width),o+n[0].width,g>i+n[3].width?0:c-n[3].width,l-n[0].width).topRight.subdivide(.5),bottomRightOuter:getCurvePoints(r+b,o+m,u,h).bottomRight.subdivide(.5),bottomRightInner:getCurvePoints(r+Math.min(b,i-n[3].width),o+Math.min(m,s+n[0].width),Math.max(0,u-n[1].width),h-n[2].width).bottomRight.subdivide(.5),bottomLeftOuter:getCurvePoints(r,o+y,p,f).bottomLeft.subdivide(.5),bottomLeftInner:getCurvePoints(r+n[3].width,o+y,Math.max(0,p-n[3].width),f-n[2].width).bottomLeft.subdivide(.5)}}function bezierCurve(e,t,n,r){var o=function(e,t,n){return{x:e.x+(t.x-e.x)*n,y:e.y+(t.y-e.y)*n}};return{start:e,startControl:t,endControl:n,end:r,subdivide:function(i){var s=o(e,t,i),a=o(t,n,i),d=o(n,r,i),c=o(s,a,i),l=o(a,d,i),u=o(c,l,i);return[bezierCurve(e,s,c,u),bezierCurve(u,l,d,r)]},curveTo:function(e){e.push(["bezierCurve",t.x,t.y,n.x,n.y,r.x,r.y])},curveToReversed:function(r){r.push(["bezierCurve",n.x,n.y,t.x,t.y,e.x,e.y])}}}function drawSide(e,t,n,r,o,i,s){var a=[];return t[0]>0||t[1]>0?(a.push(["line",r[1].start.x,r[1].start.y]),r[1].curveTo(a)):a.push(["line",e.c1[0],e.c1[1]]),n[0]>0||n[1]>0?(a.push(["line",i[0].start.x,i[0].start.y]),i[0].curveTo(a),a.push(["line",s[0].end.x,s[0].end.y]),s[0].curveToReversed(a)):(a.push(["line",e.c2[0],e.c2[1]]),a.push(["line",e.c3[0],e.c3[1]])),t[0]>0||t[1]>0?(a.push(["line",o[1].end.x,o[1].end.y]),o[1].curveToReversed(a)):a.push(["line",e.c4[0],e.c4[1]]),a}function parseCorner(e,t,n,r,o,i,s){t[0]>0||t[1]>0?(e.push(["line",r[0].start.x,r[0].start.y]),r[0].curveTo(e),r[1].curveTo(e)):e.push(["line",i,s]),(n[0]>0||n[1]>0)&&e.push(["line",o[0].start.x,o[0].start.y])}function negativeZIndex(e){return e.cssInt("zIndex")<0}function positiveZIndex(e){return e.cssInt("zIndex")>0}function zIndex0(e){return 0===e.cssInt("zIndex")}function inlineLevel(e){return-1!==["inline","inline-block","inline-table"].indexOf(e.css("display"))}function isStackingContext(e){return e instanceof StackingContext}function hasText(e){return e.node.data.trim().length>0}function noLetterSpacing(e){return/^(normal|none|0px)$/.test(e.parent.css("letterSpacing"))}function getBorderRadiusData(e){return["TopLeft","TopRight","BottomRight","BottomLeft"].map(function(t){var n=e.css("border"+t+"Radius").split(" ");return n.length<=1&&(n[1]=n[0]),n.map(asInt)})}function renderableNode(e){return e.nodeType===Node.TEXT_NODE||e.nodeType===Node.ELEMENT_NODE}function isPositionedForStacking(e){var t=e.css("position");return"auto"!==(-1!==["absolute","relative","fixed"].indexOf(t)?e.css("zIndex"):"auto")}function isPositioned(e){return"static"!==e.css("position")}function isFloating(e){return"none"!==e.css("float")}function isInlineBlock(e){return-1!==["inline-block","inline-table"].indexOf(e.css("display"))}function not(e){var t=this;return function(){return!e.apply(t,arguments)}}function isElement(e){return e.node.nodeType===Node.ELEMENT_NODE}function isPseudoElement(e){return!0===e.isPseudoElement}function isTextNode(e){return e.node.nodeType===Node.TEXT_NODE}function zIndexSort(e){return function(t,n){return t.cssInt("zIndex")+e.indexOf(t)/e.length-(n.cssInt("zIndex")+e.indexOf(n)/e.length)}}function hasOpacity(e){return e.getOpacity()<1}function bind(e,t){return function(){return e.apply(t,arguments)}}function asInt(e){return parseInt(e,10)}function getWidth(e){return e.width}function nonIgnoredElement(e){return e.node.nodeType!==Node.ELEMENT_NODE||-1===["SCRIPT","HEAD","TITLE","OBJECT","BR","OPTION"].indexOf(e.node.nodeName)}function flatten(e){return[].concat.apply([],e)}function stripQuotes(e){var t=e.substr(0,1);return t===e.substr(e.length-1)&&t.match(/'|"/)?e.substr(1,e.length-2):e}function getWords(e){for(var t,n=[],r=0,o=!1;e.length;)isWordBoundary(e[r])===o?((t=e.splice(0,r)).length&&n.push(window.html2canvas.punycode.ucs2.encode(t)),o=!o,r=0):r++,r>=e.length&&(t=e.splice(0,r)).length&&n.push(window.html2canvas.punycode.ucs2.encode(t));return n}function isWordBoundary(e){return-1!==[32,13,10,9,45].indexOf(e)}function hasUnicode(e){return/[^\u0000-\u00ff]/.test(e)}NodeParser.prototype.calculateOverflowClips=function(){this.nodes.forEach(function(e){if(isElement(e)){isPseudoElement(e)&&e.appendToDOM(),e.borders=this.parseBorders(e);var t="hidden"===e.css("overflow")?[e.borders.clip]:[],n=e.parseClip();n&&-1!==["absolute","fixed"].indexOf(e.css("position"))&&t.push([["rect",e.bounds.left+n.left,e.bounds.top+n.top,n.right-n.left,n.bottom-n.top]]),e.clip=hasParentClip(e)?e.parent.clip.concat(t):t,e.backgroundClip="hidden"!==e.css("overflow")?e.clip.concat([e.borders.clip]):e.clip,isPseudoElement(e)&&e.cleanDOM()}else isTextNode(e)&&(e.clip=hasParentClip(e)?e.parent.clip:[]);isPseudoElement(e)||(e.bounds=null)},this)},NodeParser.prototype.asyncRenderer=function(e,t,n){n=n||Date.now(),this.paint(e[this.renderIndex++]),e.length===this.renderIndex?t():n+20>Date.now()?this.asyncRenderer(e,t,n):setTimeout(bind(function(){this.asyncRenderer(e,t)},this),0)},NodeParser.prototype.createPseudoHideStyles=function(e){this.createStyles(e,"."+PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE+':before { content: "" !important; display: none !important; }.'+PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER+':after { content: "" !important; display: none !important; }')},NodeParser.prototype.disableAnimations=function(e){this.createStyles(e,"* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}")},NodeParser.prototype.createStyles=function(e,t){var n=e.createElement("style");n.innerHTML=t,e.body.appendChild(n)},NodeParser.prototype.getPseudoElements=function(e){var t=[[e]];if(e.node.nodeType===Node.ELEMENT_NODE){var n=this.getPseudoElement(e,":before"),r=this.getPseudoElement(e,":after");n&&t.push(n),r&&t.push(r)}return flatten(t)},NodeParser.prototype.getPseudoElement=function(e,t){var n=e.computedStyle(t);if(!n||!n.content||"none"===n.content||"-moz-alt-content"===n.content||"none"===n.display)return null;for(var r=stripQuotes(n.content),o="url"===r.substr(0,3),i=document.createElement(o?"img":"html2canvaspseudoelement"),s=new PseudoElementContainer(i,e,t),a=n.length-1;a>=0;a--){var d=toCamelCase(n.item(a));i.style[d]=n[d]}if(i.className=PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE+" "+PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER,o)return i.src=parseBackgrounds(r)[0].args[0],[s];var c=document.createTextNode(r);return i.appendChild(c),[s,new TextContainer(c,s)]},NodeParser.prototype.getChildren=function(e){return flatten([].filter.call(e.node.childNodes,renderableNode).map(function(t){var n=[t.nodeType===Node.TEXT_NODE?new TextContainer(t,e):new NodeContainer(t,e)].filter(nonIgnoredElement);return t.nodeType===Node.ELEMENT_NODE&&n.length&&"TEXTAREA"!==t.tagName?n[0].isElementVisible()?n.concat(this.getChildren(n[0])):[]:n},this))},NodeParser.prototype.newStackingContext=function(e,t){var n=new StackingContext(t,e.getOpacity(),e.node,e.parent);e.cloneTo(n),(t?n.getParentStack(this):n.parent.stack).contexts.push(n),e.stack=n},NodeParser.prototype.createStackingContexts=function(){this.nodes.forEach(function(e){isElement(e)&&(this.isRootElement(e)||hasOpacity(e)||isPositionedForStacking(e)||this.isBodyWithTransparentRoot(e)||e.hasTransform())?this.newStackingContext(e,!0):isElement(e)&&(isPositioned(e)&&zIndex0(e)||isInlineBlock(e)||isFloating(e))?this.newStackingContext(e,!1):e.assignStack(e.parent.stack)},this)},NodeParser.prototype.isBodyWithTransparentRoot=function(e){return"BODY"===e.node.nodeName&&e.parent.color("backgroundColor").isTransparent()},NodeParser.prototype.isRootElement=function(e){return null===e.parent},NodeParser.prototype.sortStackingContexts=function(e){e.contexts.sort(zIndexSort(e.contexts.slice(0))),e.contexts.forEach(this.sortStackingContexts,this)},NodeParser.prototype.parseTextBounds=function(e){return function(t,n,r){if("none"!==e.parent.css("textDecoration").substr(0,4)||0!==t.trim().length){if(this.support.rangeBounds&&!e.parent.hasTransform()){var o=r.slice(0,n).join("").length;return this.getRangeBounds(e.node,o,t.length)}if(e.node&&"string"==typeof e.node.data){var i=e.node.splitText(t.length),s=this.getWrapperBounds(e.node,e.parent.hasTransform());return e.node=i,s}}else this.support.rangeBounds&&!e.parent.hasTransform()||(e.node=e.node.splitText(t.length));return{}}},NodeParser.prototype.getWrapperBounds=function(e,t){var n=e.ownerDocument.createElement("html2canvaswrapper"),r=e.parentNode,o=e.cloneNode(!0);n.appendChild(e.cloneNode(!0)),r.replaceChild(n,e);var i=t?offsetBounds(n):getBounds(n);return r.replaceChild(o,n),i},NodeParser.prototype.getRangeBounds=function(e,t,n){var r=this.range||(this.range=e.ownerDocument.createRange());return r.setStart(e,t),r.setEnd(e,t+n),r.getBoundingClientRect()},NodeParser.prototype.parse=function(e){var t=e.contexts.filter(negativeZIndex),n=e.children.filter(isElement),r=n.filter(not(isFloating)),o=r.filter(not(isPositioned)).filter(not(inlineLevel)),i=n.filter(not(isPositioned)).filter(isFloating),s=r.filter(not(isPositioned)).filter(inlineLevel),a=e.contexts.concat(r.filter(isPositioned)).filter(zIndex0),d=e.children.filter(isTextNode).filter(hasText),c=e.contexts.filter(positiveZIndex);t.concat(o).concat(i).concat(s).concat(a).concat(d).concat(c).forEach(function(e){this.renderQueue.push(e),isStackingContext(e)&&(this.parse(e),this.renderQueue.push(new ClearTransform))},this)},NodeParser.prototype.paint=function(e){try{e instanceof ClearTransform?this.renderer.ctx.restore():isTextNode(e)?(isPseudoElement(e.parent)&&e.parent.appendToDOM(),this.paintText(e),isPseudoElement(e.parent)&&e.parent.cleanDOM()):this.paintNode(e)}catch(e){if(log(e),this.options.strict)throw e}},NodeParser.prototype.paintNode=function(e){isStackingContext(e)&&(this.renderer.setOpacity(e.opacity),this.renderer.ctx.save(),e.hasTransform()&&this.renderer.setTransform(e.parseTransform())),"INPUT"===e.node.nodeName&&"checkbox"===e.node.type?this.paintCheckbox(e):"INPUT"===e.node.nodeName&&"radio"===e.node.type?this.paintRadio(e):this.paintElement(e)},NodeParser.prototype.paintElement=function(e){var t=e.parseBounds();this.renderer.clip(e.backgroundClip,function(){this.renderer.renderBackground(e,t,e.borders.borders.map(getWidth))},this),this.renderer.clip(e.clip,function(){this.renderer.renderBorders(e.borders.borders)},this),this.renderer.clip(e.backgroundClip,function(){switch(e.node.nodeName){case"svg":case"IFRAME":var n=this.images.get(e.node);n?this.renderer.renderImage(e,t,e.borders,n):log("Error loading <"+e.node.nodeName+">",e.node);break;case"IMG":var r=this.images.get(e.node.src);r?this.renderer.renderImage(e,t,e.borders,r):log("Error loading <img>",e.node.src);break;case"CANVAS":this.renderer.renderImage(e,t,e.borders,{image:e.node});break;case"SELECT":case"INPUT":case"TEXTAREA":this.paintFormValue(e)}},this)},NodeParser.prototype.paintCheckbox=function(e){var t=e.parseBounds(),n=Math.min(t.width,t.height),r={width:n-1,height:n-1,top:t.top,left:t.left},o=[3,3],i=[o,o,o,o],s=[1,1,1,1].map(function(e){return{color:new Color("#A5A5A5"),width:e}}),a=calculateCurvePoints(r,i,s);this.renderer.clip(e.backgroundClip,function(){this.renderer.rectangle(r.left+1,r.top+1,r.width-2,r.height-2,new Color("#DEDEDE")),this.renderer.renderBorders(calculateBorders(s,r,a,i)),e.node.checked&&(this.renderer.font(new Color("#424242"),"normal","normal","bold",n-3+"px","arial"),this.renderer.text("✔",r.left+n/6,r.top+n-1))},this)},NodeParser.prototype.paintRadio=function(e){var t=e.parseBounds(),n=Math.min(t.width,t.height)-2;this.renderer.clip(e.backgroundClip,function(){this.renderer.circleStroke(t.left+1,t.top+1,n,new Color("#DEDEDE"),1,new Color("#A5A5A5")),e.node.checked&&this.renderer.circle(Math.ceil(t.left+n/4)+1,Math.ceil(t.top+n/4)+1,Math.floor(n/2),new Color("#424242"))},this)},NodeParser.prototype.paintFormValue=function(e){var t=e.getValue();if(t.length>0){var n=e.node.ownerDocument,r=n.createElement("html2canvaswrapper");["lineHeight","textAlign","fontFamily","fontWeight","fontSize","color","paddingLeft","paddingTop","paddingRight","paddingBottom","width","height","borderLeftStyle","borderTopStyle","borderLeftWidth","borderTopWidth","boxSizing","whiteSpace","wordWrap"].forEach(function(t){try{r.style[t]=e.css(t)}catch(e){log("html2canvas: Parse: Exception caught in renderFormValue: "+e.message)}});var o=e.parseBounds();r.style.position="fixed",r.style.left=o.left+"px",r.style.top=o.top+"px",r.textContent=t,n.body.appendChild(r),this.paintText(new TextContainer(r.firstChild,e)),n.body.removeChild(r)}},NodeParser.prototype.paintText=function(e){e.applyTextTransform();var t=window.html2canvas.punycode.ucs2.decode(e.node.data),n=this.options.letterRendering&&!noLetterSpacing(e)||hasUnicode(e.node.data)?t.map(function(e){return window.html2canvas.punycode.ucs2.encode([e])}):getWords(t),r=e.parent.fontWeight(),o=e.parent.css("fontSize"),i=e.parent.css("fontFamily"),s=e.parent.parseTextShadows();this.renderer.font(e.parent.color("color"),e.parent.css("fontStyle"),e.parent.css("fontVariant"),r,o,i),s.length?this.renderer.fontShadow(s[0].color,s[0].offsetX,s[0].offsetY,s[0].blur):this.renderer.clearShadow(),this.renderer.clip(e.parent.clip,function(){n.map(this.parseTextBounds(e),this).forEach(function(t,r){t&&(this.renderer.text(n[r],t.left,t.bottom),this.renderTextDecoration(e.parent,t,this.fontMetrics.getMetrics(i,o)))},this)},this)},NodeParser.prototype.renderTextDecoration=function(e,t,n){switch(e.css("textDecoration").split(" ")[0]){case"underline":this.renderer.rectangle(t.left,Math.round(t.top+n.baseline+n.lineWidth),t.width,1,e.color("color"));break;case"overline":this.renderer.rectangle(t.left,Math.round(t.top),t.width,1,e.color("color"));break;case"line-through":this.renderer.rectangle(t.left,Math.ceil(t.top+n.middle+n.lineWidth),t.width,1,e.color("color"))}};var borderColorTransforms={inset:[["darken",.6],["darken",.1],["darken",.1],["darken",.6]]};NodeParser.prototype.parseBorders=function(e){var t=e.parseBounds(),n=getBorderRadiusData(e),r=["Top","Right","Bottom","Left"].map(function(t,n){var r=e.css("border"+t+"Style"),o=e.color("border"+t+"Color");"inset"===r&&o.isBlack()&&(o=new Color([255,255,255,o.a]));var i=borderColorTransforms[r]?borderColorTransforms[r][n]:null;return{width:e.cssInt("border"+t+"Width"),color:i?o[i[0]](i[1]):o,args:null}}),o=calculateCurvePoints(t,n,r);return{clip:this.parseBackgroundClip(e,o,r,n,t),borders:calculateBorders(r,t,o,n)}},NodeParser.prototype.parseBackgroundClip=function(e,t,n,r,o){var i=[];switch(e.css("backgroundClip")){case"content-box":case"padding-box":parseCorner(i,r[0],r[1],t.topLeftInner,t.topRightInner,o.left+n[3].width,o.top+n[0].width),parseCorner(i,r[1],r[2],t.topRightInner,t.bottomRightInner,o.left+o.width-n[1].width,o.top+n[0].width),parseCorner(i,r[2],r[3],t.bottomRightInner,t.bottomLeftInner,o.left+o.width-n[1].width,o.top+o.height-n[2].width),parseCorner(i,r[3],r[0],t.bottomLeftInner,t.topLeftInner,o.left+n[3].width,o.top+o.height-n[2].width);break;default:parseCorner(i,r[0],r[1],t.topLeftOuter,t.topRightOuter,o.left,o.top),parseCorner(i,r[1],r[2],t.topRightOuter,t.bottomRightOuter,o.left+o.width,o.top),parseCorner(i,r[2],r[3],t.bottomRightOuter,t.bottomLeftOuter,o.left+o.width,o.top+o.height),parseCorner(i,r[3],r[0],t.bottomLeftOuter,t.topLeftOuter,o.left,o.top+o.height)}return i};