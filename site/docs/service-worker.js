"use strict";var precacheConfig=[["./cn.html","3d1d8cec589d70c1a560aae3d6642222"],["./index.html","747b26d4399533f1c8ff2974ed927e13"],["./static/css/cn.fb9dfd08.css","956b8f005795c2569d823cddbc15d24c"],["./static/css/index.fb9dfd08.css","414d16d757eb45e170251798229d649f"],["./static/js/0.ca615135.chunk.js","221ed87baea21f62bd7a6b060ac9cb02"],["./static/js/1.401a75f3.chunk.js","feeb874a84800468a2ab26ef2636ec38"],["./static/js/10.1c050e58.chunk.js","0bc7440d942839cbb58fcb3f86d682a2"],["./static/js/11.8e1bb513.chunk.js","bfc8d568296de10675a2ff8efce5e374"],["./static/js/12.c67b68a5.chunk.js","10adc78779c16baa013d7fff2826dc7d"],["./static/js/13.b9bab8f5.chunk.js","23e207da0e764fb98bfef5e7d9081ad0"],["./static/js/14.a4d27e11.chunk.js","1a1213ba0ae533d22a2a69f4cf5e77fc"],["./static/js/15.874f4109.chunk.js","5511a9e360779b4cd20e89abe773aacc"],["./static/js/16.a9eedaec.chunk.js","580f5733749b45e2e2939f515af549dc"],["./static/js/17.512a230b.chunk.js","d8946d92a53dacd47f8da08a01ddb8bc"],["./static/js/18.2c278e14.chunk.js","d1e66c1c56991b0f74b110cfae658424"],["./static/js/19.2b2360b3.chunk.js","243210947dfc26938bdd17bc259727fd"],["./static/js/2.76b65d3a.chunk.js","736cf4fbd0ba0fcef5a61682257eff9e"],["./static/js/20.81307a8d.chunk.js","819e22b56d841149d311e3eaaf89782a"],["./static/js/21.800ab423.chunk.js","73f4c64cd2ac341b3a4bf565ab78cf83"],["./static/js/22.9f29e06e.chunk.js","f353af3a7811f081b3187886d5841917"],["./static/js/23.52f3d16c.chunk.js","57d2fcd66cc9e424c19fd0873b6eaa8a"],["./static/js/24.b6777991.chunk.js","70e269958b26723a129d94139f1d3012"],["./static/js/25.7f82d96b.chunk.js","d2332459a7297f7e45b2ee3910ae783a"],["./static/js/26.b9530d2d.chunk.js","62469b22a6290507894a881b1d2f64a8"],["./static/js/27.ebea434c.chunk.js","26b59be0dc9e50df5dfeb1da89bc6b87"],["./static/js/3.ca4d3e56.chunk.js","6da66080b36d3eccb1340da95917ebcb"],["./static/js/4.35a06e84.chunk.js","1dad283270e49a94edd64c7a980abb0a"],["./static/js/5.c9e00c1c.chunk.js","9c52a5d12258fd946c2a4303f9aa917b"],["./static/js/6.edc5aa44.chunk.js","c3a8e61b1a88cfb5d94c3bd2b77f0f93"],["./static/js/7.fe79c68a.chunk.js","df15d4e0ee138e5797029804a8005f80"],["./static/js/8.b67630cb.chunk.js","b864ae19830b8f9bb782ce4824d5e728"],["./static/js/9.13c87bcd.chunk.js","07b0fa9d321e7799f1ba11b6e12da1af"],["./static/js/cn.09bb0e17.js","75a0b3d8c31a60109b03602d17e9ee70"],["./static/js/index.ef615b88.js","f1da016b5e7df4726ef61af3e040d171"],["./static/media/omi-logo2019.923166c3.svg","923166c362dce831a15c447b19a622f9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),s=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var s="./index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});