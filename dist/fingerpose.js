!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.fp=e():t.fp=e()}("undefined"!=typeof self?self:this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){},function(t,e){},function(t,e){},function(t,e,n){"use strict";n.r(e);var r={};function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.r(r),n.d(r,"VictoryGesture",(function(){return O})),n.d(r,"ThumbsUpGesture",(function(){return I})),n.d(r,"ThumbsDownGesture",(function(){return j})),n.d(r,"FistGesture",(function(){return U.a})),n.d(r,"LoveYouGesture",(function(){return N.a})),n.d(r,"OkayGesture",(function(){return F.a})),n.d(r,"PhoneGesture",(function(){return Y})),n.d(r,"FingerUpGesture",(function(){return X})),n.d(r,"FingerDownGesture",(function(){return rt})),n.d(r,"FingerRightGesture",(function(){return ut})),n.d(r,"FingerLeftGesture",(function(){return ht})),n.d(r,"ShakeHandGesture",(function(){return Dt}));var o={Thumb:0,Index:1,Middle:2,Ring:3,Pinky:4,all:[0,1,2,3,4],nameMapping:{0:"Thumb",1:"Index",2:"Middle",3:"Ring",4:"Pinky"},pointsMapping:{0:[[0,1],[1,2],[2,3],[3,4]],1:[[0,5],[5,6],[6,7],[7,8]],2:[[0,9],[9,10],[10,11],[11,12]],3:[[0,13],[13,14],[14,15],[15,16]],4:[[0,17],[17,18],[18,19],[19,20]]},getName:function(t){return void 0!==i(this.nameMapping[t])&&this.nameMapping[t]},getPoints:function(t){return void 0!==i(this.pointsMapping[t])&&this.pointsMapping[t]}},a={NoCurl:0,HalfCurl:1,FullCurl:2,nameMapping:{0:"No Curl",1:"Half Curl",2:"Full Curl"},getName:function(t){return void 0!==i(this.nameMapping[t])&&this.nameMapping[t]}},l={VerticalUp:0,VerticalDown:1,HorizontalLeft:2,HorizontalRight:3,DiagonalUpRight:4,DiagonalUpLeft:5,DiagonalDownRight:6,DiagonalDownLeft:7,nameMapping:{0:"Vertical Up",1:"Vertical Down",2:"Horizontal Left",3:"Horizontal Right",4:"Diagonal Up Right",5:"Diagonal Up Left",6:"Diagonal Down Right",7:"Diagonal Down Left"},getName:function(t){return void 0!==i(this.nameMapping[t])&&this.nameMapping[t]}};function u(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,o=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){a=!0,i=t},f:function(){try{o||null==r.return||r.return()}finally{if(a)throw i}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},{HALF_CURL_START_LIMIT:60,NO_CURL_START_LIMIT:130,DISTANCE_VOTE_POWER:1.1,SINGLE_ANGLE_VOTE_POWER:.9,TOTAL_ANGLE_VOTE_POWER:1.6},{},e)}var e,n,r;return e=t,(n=[{key:"estimate",value:function(t){var e,n=[],r=[],i=u(o.all);try{for(i.s();!(e=i.n()).done;){var a,l=e.value,c=o.getPoints(l),d=[],f=[],s=u(c);try{for(s.s();!(a=s.n()).done;){var h=a.value,g=t[h[0]],p=t[h[1]],y=this.getSlopes(g,p),v=y[0],D=y[1];d.push(v),f.push(D)}}catch(t){s.e(t)}finally{s.f()}n.push(d),r.push(f)}}catch(t){i.e(t)}finally{i.f()}var m,b=[],w=[],T=u(o.all);try{for(T.s();!(m=T.n()).done;){var C=m.value,R=C==o.Thumb?1:0,M=o.getPoints(C),O=t[M[R][0]],L=t[M[R+1][1]],S=t[M[3][1]],P=this.estimateFingerCurl(O,L,S),_=this.calculateFingerDirection(O,L,S,n[C].slice(R));b[C]=P,w[C]=_}}catch(t){T.e(t)}finally{T.f()}return{curls:b,directions:w}}},{key:"getSlopes",value:function(t,e){var n=this.calculateSlope(t[0],t[1],e[0],e[1]);return 2==t.length?n:[n,this.calculateSlope(t[1],t[2],e[1],e[2])]}},{key:"angleOrientationAt",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=0,r=0,i=0;return t>=75&&t<=105?n=1*e:t>=25&&t<=155?r=1*e:i=1*e,[n,r,i]}},{key:"estimateFingerCurl",value:function(t,e,n){var r=t[0]-e[0],i=t[0]-n[0],o=e[0]-n[0],l=t[1]-e[1],u=t[1]-n[1],c=e[1]-n[1],d=t[2]-e[2],f=t[2]-n[2],s=e[2]-n[2],h=Math.sqrt(r*r+l*l+d*d),g=Math.sqrt(i*i+u*u+f*f),p=Math.sqrt(o*o+c*c+s*s),y=(p*p+h*h-g*g)/(2*p*h);y>1?y=1:y<-1&&(y=-1);var v=Math.acos(y);return(v=57.2958*v%180)>this.options.NO_CURL_START_LIMIT?a.NoCurl:v>this.options.HALF_CURL_START_LIMIT?a.HalfCurl:a.FullCurl}},{key:"estimateHorizontalDirection",value:function(t,e,n,r){return r==Math.abs(t)?t>0?l.HorizontalLeft:l.HorizontalRight:r==Math.abs(e)?e>0?l.HorizontalLeft:l.HorizontalRight:n>0?l.HorizontalLeft:l.HorizontalRight}},{key:"estimateVerticalDirection",value:function(t,e,n,r){return r==Math.abs(t)?t<0?l.VerticalDown:l.VerticalUp:r==Math.abs(e)?e<0?l.VerticalDown:l.VerticalUp:n<0?l.VerticalDown:l.VerticalUp}},{key:"estimateDiagonalDirection",value:function(t,e,n,r,i,o,a,u){var c=this.estimateVerticalDirection(t,e,n,r),d=this.estimateHorizontalDirection(i,o,a,u);return c==l.VerticalUp?d==l.HorizontalLeft?l.DiagonalUpLeft:l.DiagonalUpRight:d==l.HorizontalLeft?l.DiagonalDownLeft:l.DiagonalDownRight}},{key:"calculateFingerDirection",value:function(t,e,n,r){var i=t[0]-e[0],o=t[0]-n[0],a=e[0]-n[0],l=t[1]-e[1],c=t[1]-n[1],d=e[1]-n[1],f=Math.max(Math.abs(i),Math.abs(o),Math.abs(a)),s=Math.max(Math.abs(l),Math.abs(c),Math.abs(d)),h=0,g=0,p=0,y=s/(f+1e-5);y>1.5?h+=this.options.DISTANCE_VOTE_POWER:y>.66?g+=this.options.DISTANCE_VOTE_POWER:p+=this.options.DISTANCE_VOTE_POWER;var v=Math.sqrt(i*i+l*l),D=Math.sqrt(o*o+c*c),m=Math.sqrt(a*a+d*d),b=Math.max(v,D,m),w=t[0],T=t[1],C=n[0],R=n[1];b==v?(C=n[0],R=n[1]):b==m&&(w=e[0],T=e[1]);var M=[w,T],O=[C,R],L=this.getSlopes(M,O),S=this.angleOrientationAt(L,this.options.TOTAL_ANGLE_VOTE_POWER);h+=S[0],g+=S[1],p+=S[2];var P,_=u(r);try{for(_.s();!(P=_.n()).done;){var I=P.value,A=this.angleOrientationAt(I,this.options.SINGLE_ANGLE_VOTE_POWER);h+=A[0],g+=A[1],p+=A[2]}}catch(t){_.e(t)}finally{_.f()}return h==Math.max(h,g,p)?this.estimateVerticalDirection(c,l,d,s):p==Math.max(g,p)?this.estimateHorizontalDirection(o,i,a,f):this.estimateDiagonalDirection(c,l,d,s,o,i,a,f)}},{key:"calculateSlope",value:function(t,e,n,r){var i=(e-r)/(t-n),o=180*Math.atan(i)/Math.PI;return o<=0?o=-o:o>0&&(o=180-o),o}}])&&s(e.prototype,n),r&&s(e,r),t}();function g(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,o=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){a=!0,i=t},f:function(){try{o||null==r.return||r.return()}finally{if(a)throw i}}}}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var D=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};y(this,t),this.estimator=new h(n),this.gestures=e}var e,n,r;return e=t,(n=[{key:"estimate",value:function(t,e){var n,r=[],i=this.estimator.estimate(t),u=[],c=g(o.all);try{for(c.s();!(n=c.n()).done;){var d=n.value;u.push([o.getName(d),a.getName(i.curls[d]),l.getName(i.directions[d])])}}catch(t){c.e(t)}finally{c.f()}var f,s=g(this.gestures);try{for(s.s();!(f=s.n()).done;){var h=f.value,p=h.matchAgainst(i.curls,i.directions);p>=e&&r.push({name:h.name,confidence:p})}}catch(t){s.e(t)}finally{s.f()}return{poseData:u,gestures:r}}}])&&v(e.prototype,n),r&&v(e,r),t}();function m(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,l=t[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}return n}(t,e)||w(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=w(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,o=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){a=!0,i=t},f:function(){try{o||null==r.return||r.return()}finally{if(a)throw i}}}}function w(t,e){if(t){if("string"==typeof t)return T(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(t,e):void 0}}function T(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var R=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=e,this.curls={},this.directions={},this.weights=[1,1,1,1,1],this.weightsRelative=[1,1,1,1,1]}var e,n,r;return e=t,(n=[{key:"addCurl",value:function(t,e,n){void 0===this.curls[t]&&(this.curls[t]=[]),this.curls[t].push([e,n])}},{key:"addDirection",value:function(t,e,n){void 0===this.directions[t]&&(this.directions[t]=[]),this.directions[t].push([e,n])}},{key:"setWeight",value:function(t,e){this.weights[t]=e;var n=this.weights.reduce((function(t,e){return t+e}),0);this.weightsRelative=this.weights.map((function(t){return 5*t/n}))}},{key:"matchAgainst",value:function(t,e){var n=0;for(var r in t){var i=t[r],o=this.curls[r];if(void 0!==o){var a,l=b(o);try{for(l.s();!(a=l.n()).done;){var u=m(a.value,2),c=u[0],d=u[1];if(i==c){n+=d*this.weightsRelative[r];break}}}catch(t){l.e(t)}finally{l.f()}}else n+=this.weightsRelative[r]}for(var f in e){var s=e[f],h=this.directions[f];if(void 0!==h){var g,p=b(h);try{for(p.s();!(g=p.n()).done;){var y=m(g.value,2),v=y[0],D=y[1];if(s==v){n+=D*this.weightsRelative[f];break}}}catch(t){p.e(t)}finally{p.f()}}else n+=this.weightsRelative[f]}return n}}])&&C(e.prototype,n),r&&C(e,r),t}(),M=new R("victory");M.addCurl(o.Thumb,a.HalfCurl,.5),M.addCurl(o.Thumb,a.NoCurl,.5),M.addDirection(o.Thumb,l.VerticalUp,1),M.addDirection(o.Thumb,l.DiagonalUpLeft,1),M.addCurl(o.Index,a.NoCurl,1),M.addDirection(o.Index,l.VerticalUp,.75),M.addDirection(o.Index,l.DiagonalUpLeft,1),M.addCurl(o.Middle,a.NoCurl,1),M.addDirection(o.Middle,l.VerticalUp,1),M.addDirection(o.Middle,l.DiagonalUpLeft,.75),M.addCurl(o.Ring,a.FullCurl,1),M.addDirection(o.Ring,l.VerticalUp,.2),M.addDirection(o.Ring,l.DiagonalUpLeft,1),M.addDirection(o.Ring,l.HorizontalLeft,.2),M.addCurl(o.Pinky,a.FullCurl,1),M.addDirection(o.Pinky,l.VerticalUp,.2),M.addDirection(o.Pinky,l.DiagonalUpLeft,1),M.addDirection(o.Pinky,l.HorizontalLeft,.2),M.setWeight(o.Index,2),M.setWeight(o.Middle,2);var O=M,L=new R("thumbs_up");L.addCurl(o.Thumb,a.NoCurl,1),L.addDirection(o.Thumb,l.VerticalUp,1),L.addDirection(o.Thumb,l.DiagonalUpLeft,.25),L.addDirection(o.Thumb,l.DiagonalUpRight,.25);for(var S=0,P=[o.Index,o.Middle,o.Ring,o.Pinky];S<P.length;S++){var _=P[S];L.addCurl(_,a.FullCurl,1),L.addDirection(_,l.HorizontalLeft,1),L.addDirection(_,l.HorizontalRight,1)}var I=L,A=new R("thumbs_down");A.addCurl(o.Thumb,a.NoCurl,1),A.addDirection(o.Thumb,l.VerticalDown,1),A.addDirection(o.Thumb,l.DiagonalDownLeft,.5),A.addDirection(o.Thumb,l.DiagonalDownRight,.25);for(var k=0,H=[o.Index,o.Middle,o.Ring,o.Pinky];k<H.length;k++){var V=H[k];A.addCurl(V,a.FullCurl,1),A.addDirection(V,l.HorizontalLeft,1),A.addDirection(V,l.HorizontalRight,1)}var j=A,E=n(0),U=n.n(E),x=n(1),N=n.n(x),z=n(2),F=n.n(z),G=new R("phone");G.addCurl(o.Thumb,a.NoCurl,1),G.addDirection(o.Thumb,l.VerticalUp,1),G.addDirection(o.Thumb,l.DiagonalDownLeft,.5),G.addDirection(o.Thumb,l.DiagonalDownRight,.5),G.addCurl(o.Pinky,a.NoCurl,1),G.addDirection(o.Pinky,l.HorizontalLeft,.5),G.addDirection(o.Pinky,l.DiagonalUpRight,.5),G.addDirection(o.Pinky,l.DiagonalDownRight,.5);for(var W=0,q=[o.Index,o.Middle,o.Ring];W<q.length;W++){var $=q[W];G.addCurl($,a.FullCurl,1),G.addDirection($,l.HorizontalLeft,1),G.addDirection($,l.HorizontalRight,1)}var Y=G,B=new R("finger_up");B.addCurl(o.Thumb,a.NoCurl,1),B.addDirection(o.Thumb,l.VerticalDown,1),B.addDirection(o.Thumb,l.DiagonalDownLeft,.5),B.addDirection(o.Thumb,l.DiagonalDownRight,.25);for(var J=0,K=[o.Index,o.Middle,o.Ring,o.Pinky];J<K.length;J++){var Q=K[J];B.addCurl(Q,a.FullCurl,1),B.addDirection(Q,l.HorizontalLeft,1),B.addDirection(Q,l.HorizontalRight,1)}var X=B,Z=new R("finger_down");Z.addCurl(o.Thumb,a.NoCurl,1),Z.addDirection(o.Thumb,l.VerticalDown,1),Z.addDirection(o.Thumb,l.DiagonalDownLeft,.5),Z.addDirection(o.Thumb,l.DiagonalDownRight,.5),Z.addCurl(o.Index,a.NoCurl,1),Z.addDirection(o.Index,l.VerticalDown,1),Z.addDirection(o.Index,l.DiagonalDownLeft,.5),Z.addDirection(o.Index,l.DiagonalDownRight,.5);for(var tt=0,et=[o.Middle,o.Ring,o.Pinky];tt<et.length;tt++){var nt=et[tt];Z.addCurl(nt,a.FullCurl,1),Z.addDirection(nt,l.VerticalDown,1)}var rt=Z,it=new R("finger_right");it.addCurl(o.Thumb,a.NoCurl,1),it.addDirection(o.Thumb,l.VerticalDown,1),it.addDirection(o.Thumb,l.DiagonalDownLeft,.5),it.addDirection(o.Thumb,l.DiagonalDownRight,.25);for(var ot=0,at=[o.Index,o.Middle,o.Ring,o.Pinky];ot<at.length;ot++){var lt=at[ot];it.addCurl(lt,a.FullCurl,1),it.addDirection(lt,l.HorizontalLeft,1),it.addDirection(lt,l.HorizontalRight,1)}var ut=it,ct=new R("finger_left");ct.addCurl(o.Thumb,a.NoCurl,1),ct.addDirection(o.Thumb,l.VerticalDown,1),ct.addDirection(o.Thumb,l.DiagonalDownLeft,.5),ct.addDirection(o.Thumb,l.DiagonalDownRight,.25);for(var dt=0,ft=[o.Index,o.Middle,o.Ring,o.Pinky];dt<ft.length;dt++){var st=ft[dt];ct.addCurl(st,a.FullCurl,1),ct.addDirection(st,l.HorizontalLeft,1),ct.addDirection(st,l.HorizontalRight,1)}var ht=ct,gt=new R("shake_hand");gt.addCurl(o.Thumb,a.NoCurl,1),gt.addDirection(o.Thumb,l.VerticalDown,1),gt.addDirection(o.Thumb,l.DiagonalDownLeft,.5),gt.addDirection(o.Thumb,l.DiagonalDownRight,.25);for(var pt=0,yt=[o.Index,o.Middle,o.Ring,o.Pinky];pt<yt.length;pt++){var vt=yt[pt];gt.addCurl(vt,a.FullCurl,1),gt.addDirection(vt,l.HorizontalLeft,1),gt.addDirection(vt,l.HorizontalRight,1)}var Dt=gt;e.default={GestureEstimator:D,GestureDescription:R,Finger:o,FingerCurl:a,FingerDirection:l,Gestures:r}}]).default}));