/* eslint-disable spaced-comment */
/*!
	devtools-detect
	Detect if DevTools is open
	https://github.com/sindresorhus/devtools-detect
	by Sindre Sorhus
	MIT License
*/
!function(){"use strict";var i={open:!1,orientation:null},t=160,r=function(n,o){window.dispatchEvent(new CustomEvent("devtoolschange",{detail:{open:n,orientation:o}}))};setInterval(function(){var n=window.outerWidth-window.innerWidth>t,o=window.outerHeight-window.innerHeight>t,e=n?"vertical":"horizontal";o&&n||!(window.Firebug&&window.Firebug.chrome&&window.Firebug.chrome.isInitialized||n||o)?(i.open&&r(!1,null),i.open=!1,i.orientation=null):(i.open&&i.orientation===e||r(!0,e),i.open=!0,i.orientation=e)},500),"undefined"!=typeof module&&module.exports?module.exports=i:window.devtools=i}();