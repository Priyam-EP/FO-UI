!function(){require("wd"),require("http"),require("https"),require("url"),require("path");var n=require("base64-arraybuffer"),o=require("png-js"),c=require("bluebird"),i=(require("lodash"),require("humanize-duration")),e=require("fs"),l=require("./utils"),h=l.colors;c.promisifyAll(e);var s=8080;function f(t){return new c(function(e){var r=n.decode(t);new o(r).decodePixels(e)})}function g(e,r){for(var t=e.length,n=0,o=0;n<t;n++)r[n]-e[n]!=0&&o++;return 100-Math.round(o/e.length*1e4)/100}function d(e,r,t){return t=t||0,(n=e,o=r,c.resolve(n.then(l.loadTestPage(n,o,s)).then((a=n,function(){return c.props({dataUrl:a.waitForElementByCss(".html2canvas",15e3).then(function(e){return a.execute("return arguments[0].toDataURL('image/png').substring(22)",[e])}),screenshot:a.takeScreenshot()})})).then((u=o,function(r){return c.all([f(r.dataUrl),f(r.screenshot)]).spread(g).then(function(e){return{testCase:u,accuracy:e,dataUrl:r.dataUrl,screenshot:r.screenshot}})}))).cancellable()).timeout(6e4).catch(c.TimeoutError,function(){if(t<3)return console.log(h.violet,"Retry",t+1,r),d(e,r,t+1);throw new Error("Couldn't run test after 3 retries")});var n,o,u,a}exports.tests=function(e,r){var s="tests/cases";return(r?c.resolve([r]):l.getTests(s)).then(function(r){return c.map(e,function(e){var o=l.initBrowser(e),u=[e.browserName,e.version,e.platform].join("-"),a=0;return c.using(o,function(){return c.map(r,function(e,r,t){console.log(h.green,"STARTING","("+ ++a+"/"+t+")",u,e,h.clear);var n=Date.now();return d(o,e).then(function(e){console.log(h.green,"COMPLETE",i(Date.now()-n),"("+a+"/"+t+")",u,e.testCase.substring(s.length),e.accuracy.toFixed(2)+"%",h.clear)})},{concurrency:1}).settle().catch(function(e){throw console.log(h.red,"ERROR",u,e.message),e})})},{concurrency:3})})}}();