"use strict";var g=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw (e=0, t)}};};var l=g(function(w,f){
var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,q=require('@stdlib/assert-is-function/dist'),x=require('@stdlib/assert-is-iterator-like/dist'),n=require('@stdlib/symbol-iterator/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function v(r,e){var t,u,a;if(!x(r))throw new TypeError(s('0P546',r));if(!p(e))throw new TypeError(s('0P545',e));return a=0,t={},o(t,"next",c),o(t,"return",m),n&&q(r[n])&&o(t,n,d),t;function c(){var i;return a+=1,u||a>e?{done:!0}:(i=r.next(),i.done?(u=!0,i):{value:i.value,done:!1})}function m(i){return u=!0,arguments.length?{value:i,done:!0}:{done:!0}}function d(){return v(r[n](),e)}}f.exports=v
});var y=l();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
