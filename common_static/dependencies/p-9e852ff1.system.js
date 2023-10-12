/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
System.register([],(function(t){"use strict";return{execute:function(){var e=function(){function t(){this.gestureId=0;this.requestedStart=new Map;this.disabledGestures=new Map;this.disabledScroll=new Set}t.prototype.createGesture=function(t){var e;return new i(this,this.newID(),t.name,(e=t.priority)!==null&&e!==void 0?e:0,!!t.disableScroll)};t.prototype.createBlocker=function(t){if(t===void 0){t={}}return new r(this,this.newID(),t.disable,!!t.disableScroll)};t.prototype.start=function(t,e,i){if(!this.canStart(t)){this.requestedStart.delete(e);return false}this.requestedStart.set(e,i);return true};t.prototype.capture=function(t,e,i){if(!this.start(t,e,i)){return false}var r=this.requestedStart;var s=-1e4;r.forEach((function(t){s=Math.max(s,t)}));if(s===i){this.capturedId=e;r.clear();var n=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});document.dispatchEvent(n);return true}r.delete(e);return false};t.prototype.release=function(t){this.requestedStart.delete(t);if(this.capturedId===t){this.capturedId=undefined}};t.prototype.disableGesture=function(t,e){var i=this.disabledGestures.get(t);if(i===undefined){i=new Set;this.disabledGestures.set(t,i)}i.add(e)};t.prototype.enableGesture=function(t,e){var i=this.disabledGestures.get(t);if(i!==undefined){i.delete(e)}};t.prototype.disableScroll=function(t){this.disabledScroll.add(t);if(this.disabledScroll.size===1){document.body.classList.add(s)}};t.prototype.enableScroll=function(t){this.disabledScroll.delete(t);if(this.disabledScroll.size===0){document.body.classList.remove(s)}};t.prototype.canStart=function(t){if(this.capturedId!==undefined){return false}if(this.isDisabled(t)){return false}return true};t.prototype.isCaptured=function(){return this.capturedId!==undefined};t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0};t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);if(e&&e.size>0){return true}return false};t.prototype.newID=function(){this.gestureId++;return this.gestureId};return t}();var i=function(){function t(t,e,i,r,s){this.id=e;this.name=i;this.disableScroll=s;this.priority=r*1e6+e;this.ctrl=t}t.prototype.canStart=function(){if(!this.ctrl){return false}return this.ctrl.canStart(this.name)};t.prototype.start=function(){if(!this.ctrl){return false}return this.ctrl.start(this.name,this.id,this.priority)};t.prototype.capture=function(){if(!this.ctrl){return false}var t=this.ctrl.capture(this.name,this.id,this.priority);if(t&&this.disableScroll){this.ctrl.disableScroll(this.id)}return t};t.prototype.release=function(){if(this.ctrl){this.ctrl.release(this.id);if(this.disableScroll){this.ctrl.enableScroll(this.id)}}};t.prototype.destroy=function(){this.release();this.ctrl=undefined};return t}();var r=function(){function t(t,e,i,r){this.id=e;this.disable=i;this.disableScroll=r;this.ctrl=t}t.prototype.block=function(){if(!this.ctrl){return}if(this.disable){for(var t=0,e=this.disable;t<e.length;t++){var i=e[t];this.ctrl.disableGesture(i,this.id)}}if(this.disableScroll){this.ctrl.disableScroll(this.id)}};t.prototype.unblock=function(){if(!this.ctrl){return}if(this.disable){for(var t=0,e=this.disable;t<e.length;t++){var i=e[t];this.ctrl.enableGesture(i,this.id)}}if(this.disableScroll){this.ctrl.enableScroll(this.id)}};t.prototype.destroy=function(){this.unblock();this.ctrl=undefined};return t}();var s="backdrop-no-scroll";var n=t("G",new e)}}}));