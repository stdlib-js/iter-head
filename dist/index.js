"use strict";var g=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var l=g(function(w,f){
var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,q=require('@stdlib/assert-is-function/dist'),x=require('@stdlib/assert-is-iterator-like/dist'),n=require('@stdlib/symbol-iterator/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function v(r,e){var i,u,a;if(!x(r))throw new TypeError(s('0P546',r));if(!p(e))throw new TypeError(s('0P545',e));return a=0,i={},o(i,"next",c),o(i,"return",m),n&&q(r[n])&&o(i,n,d),i;function c(){var t;return a+=1,u||a>e?{done:!0}:(t=r.next(),t.done?(u=!0,t):{value:t.value,done:!1})}function m(t){return u=!0,arguments.length?{value:t,done:!0}:{done:!0}}function d(){return v(r[n](),e)}}f.exports=v
});var y=l();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
