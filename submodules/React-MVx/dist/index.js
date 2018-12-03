!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react"),require("type-r"),require("prop-types")):"function"==typeof define&&define.amd?define(["exports","react","type-r","prop-types"],e):e(t.ReactMVx={},t.React,t.Nested,t.PropTypes)}(this,function(t,e,n,r){"use strict";function o(t,e){function n(){this.constructor=t}k(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function i(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s}function s(t,e){var r=this.prototype,s=t.state,u=t.State;if("function"==typeof s&&(u=s,s=void 0),s){var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.attributes=s,e=i([n.define],e)}(u||r.State||n.Record);r.State=a}else u&&(r.State=u);(s||u)&&this.mixins.merge([C,S])}function u(t,e){var r=t.store,s=t.Store;if(r&&r instanceof n.Store)this.prototype.store=r,this.mixins.merge([R,w]);else if(r||t.Store){if("function"==typeof r&&(s=r,r=void 0),r){var u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.attrbutes=r,e=i([n.define],e)}(s||this.prototype.Store||n.Store);this.prototype.Store=u}else s&&(this.prototype.Store=s);this.mixins.merge([T,S,w])}}function a(t){var e,r,o,i={},s=n.Record.defaults(t).prototype;return s.forEachAttr(s._attributes,function(t,n){if("id"!==n){var s=t.value,u=t.type,a=t.options;if(i[n]=p(u,a.isRequired),a._onChange&&(r||(r={}),r[n]=c(a._onChange)),a.changeHandlers&&a.changeHandlers.length&&(o||(o={}),o[n]=a.changeHandlers),a.changeEvents){o||(o={});var l=o[n]||(o[n]=[]),h="string"==typeof a.changeEvents?a.changeEvents:null;l.push(function(t,e,n){e&&n.stopListening(e),t&&n.listenTo(t,h||t._changeEventName,n.asyncUpdate)})}void 0!==s&&(e||(e={}),e[n]=t.convert(s,void 0,null,{}))}}),{propTypes:i,defaults:e,watchers:r,changeHandlers:o}}function c(t){return"function"==typeof t?t:function(e,n){this[t]&&this[t](e,n)}}function p(t,e){var n=l(t);return e?n.isRequired:n}function l(t){switch(t){case Number:case Number.integer:return r.number;case String:return r.string;case Boolean:return r.bool;case Array:return r.array;case Function:return r.func;case Object:return r.object;case j:return r.node;case O:return r.element;case void 0:case null:return r.any;default:return r.instanceOf(t)}}function h(t,e){var r=t.context,o=t.childContext,i=this.prototype;r&&(i._context=n.tools.defaults(r,e.prototype._context||{}),this.contextTypes=a(r).propTypes),o&&(i._childContext=n.tools.defaults(o,e.prototype._childContext),this.childContextTypes=a(o).propTypes)}function f(t){var e=Object.keys(t),n=new Function("p","s","\n        var v;\n        this._s = s && s._changeToken;\n        "+e.map(function(t){return"\n            this."+t+" = ( ( v = p."+t+") && v._changeToken ) || v;\n        "}).join("")+"\n    ");return n.prototype._hasChanges=new Function("p","s","\n        var v;\n        return ( ( s && s._changeToken ) !== this._s ) "+e.map(function(t){return" ||\n            this."+t+" !== ( ( ( v = p."+t+") && v._changeToken ) || v )\n        "}).join("")+";\n    "),n}function v(){this._propsChangeTokens=new this.PropsChangeTokens(this.props,this.state)}function d(t,e){var r=t.props,o=t.pureRender,i=this.prototype;if(r){i._props=n.tools.defaults(r,e.prototype._props||{});var s=a(r),u=s.propTypes,c=s.defaults,p=s.watchers,l=s.changeHandlers;this.propTypes=u,c&&(this.defaultProps=c),p&&(i._watchers=p,this.mixins.merge([M])),l&&(i._changeHandlers=l,this.mixins.merge([A])),i.pureRender&&(i.PropsChangeTokens=f(r))}o&&this.mixins.merge([U])}function y(t,e,n){var r=t._changeHandlers;for(var o in r)if(e[o]!==n[o])for(var i=0,s=r[o];i<s.length;i++)(0,s[i])(n[o],e[o],t)}function m(t,e){u.call(this,t,e),s.call(this,t,e),h.call(this,t,e),d.call(this,t,e),n.Messenger.onDefine.call(this,t,e)}function g(t){if(t&&"object"==typeof t)switch(Object.getPrototypeOf(t)){case D:return V;case W:return L}return E}function _(t){return t._links||(t._links=new t.AttributesCopy({}))}function x(t,e,n){var r=t[n],o=e[n];return r&&r.value===o?r:t[n]=new I(e,n,o)}function b(){return!1}var k=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},C={_initializeState:function(){var t=this.state=this.props.__keepState||new this.State;t._owner=this,t._ownerKey="state"},context:{_nestedStore:n.Store},getStore:function(){var t,e;return(t=this.context)&&t._nestedStore||(e=this.state)&&e._defaultStore},componentWillUnmount:function(){var t=this.state;t._owner=t._ownerKey=void 0,this._preventDispose||t.dispose(),this.state=void 0}},S={_onChildrenChange:function(){},componentDidMount:function(){this._onChildrenChange=this.asyncUpdate}},w={childContext:{_nestedStore:n.Store},getChildContext:function(){return{_nestedStore:this.store}},getStore:function(){return this.store},get:function(t){var e=C.getStore.call(this,t);return e&&e.get(t)}},R={componentDidMount:function(){this.listenTo(this.store,"change",this.asyncUpdate)}},T={componentWillMount:function(){var t=this.store=new this.Store;t._owner=this,t._ownerKey="store"},componentWillUnmount:function(){this.store._ownerKey=this.store._owner=void 0,this.store.dispose(),this.store=void 0}},j=function(){return function(){}}(),O=function(){return function(){}}(),P=f({}),U={shouldComponentUpdate:function(t){return this._propsChangeTokens._hasChanges(t,this.state)},componentDidMount:v,componentDidUpdate:v},A={componentDidMount:function(){y(this,{},this.props)},componentDidUpdate:function(t){y(this,t,this.props)},componentWillUnmount:function(){y(this,this.props,{})}},M={componentWillReceiveProps:function(t){var e=this,n=e._watchers,r=e.props;for(var o in n)t[o]!==r[o]&&n[o].call(this,t[o],o)},componentWillMount:function(){var t=this,e=t._watchers,n=t.props;for(var r in e)e[r].call(this,n[r],r)}},D=Array.prototype,W=Object.prototype,E={clone:function(t){return t},map:function(t,e){return[]},remove:function(t){return t}},L={map:function(t,e){var n=[];for(var r in t.value){var o=e(t.at(r),r);void 0===o||n.push(o)}return n},remove:function(t,e){return delete t[e],t},clone:function(t){var e={};for(var n in t)e[n]=t[n];return e}},V={clone:function(t){return t.slice()},remove:function(t,e){return t.splice(e,1),t},map:function(t,e){for(var n=t.value.length,r=Array(n),o=0,i=0;o<n;o++){var s=e(t.at(o),o);void 0===s||(r[i++]=s)}return r.length===i||(r.length=i),r}},q=function(){function t(t){this.value=t}return t.value=function(t,e){return new H(t,e)},Object.defineProperty(t.prototype,"validationError",{get:function(){return this.error},enumerable:!0,configurable:!0}),t.prototype.onChange=function(t){var e=this;return new F(this,function(n){t(n),e.set(n)})},Object.defineProperty(t.prototype,"props",{get:function(){var t=this;return"boolean"==typeof this.value?{checked:this.value,onChange:function(e){return t.set(Boolean(e.target.checked))}}:{value:this.value,onChange:function(e){return t.set(e.target.value)}}},enumerable:!0,configurable:!0}),t.prototype.requestChange=function(t){this.set(t)},t.prototype.update=function(t,e){var n=t(this.clone(),e);void 0===n||this.set(n)},t.prototype.pipe=function(t){var e=this;return new F(this,function(n){var r=t(n,e.value);void 0===r||e.set(r)})},t.prototype.action=function(t){var e=this;return function(n){return e.update(t,n)}},t.prototype.equals=function(t){return new N(this,t)},t.prototype.enabled=function(t){return new B(this,t||"")},t.prototype.contains=function(t){return new K(this,t)},t.prototype.push=function(){var t=V.clone(this.value);Array.prototype.push.apply(t,arguments),this.set(t)},t.prototype.unshift=function(){var t=V.clone(this.value);Array.prototype.unshift.apply(t,arguments),this.set(t)},t.prototype.splice=function(){var t=V.clone(this.value);Array.prototype.splice.apply(t,arguments),this.set(t)},t.prototype.map=function(t){return g(this.value).map(this,t)},t.prototype.removeAt=function(t){var e=this.value,n=g(e);this.set(n.remove(n.clone(e),t))},t.prototype.at=function(t){return new G(this,t)},t.prototype.clone=function(){var t=this.value;return g(t).clone(t)},t.prototype.pick=function(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e];t[n]=new G(this,n)}return t},t.prototype.check=function(t,e){return this.error||t(this.value)||(this.error=e||t.error||z),this},t}(),H=function(t){function e(e,n){var r=t.call(this,e)||this;return r.set=n,r}return o(e,t),e.prototype.set=function(t){},e}(q),F=function(t){function e(e,n){var r=t.call(this,e.value)||this;r.set=n;var o=e.error;return o&&(r.error=o),r}return o(e,t),e.prototype.set=function(t){},e}(q),N=function(t){function e(e,n){var r=t.call(this,e.value===n)||this;return r.parent=e,r.truthyValue=n,r}return o(e,t),e.prototype.set=function(t){this.parent.set(t?this.truthyValue:null)},e}(q),B=function(t){function e(e,n){var r=t.call(this,null!=e.value)||this;return r.parent=e,r.defaultValue=n,r}return o(e,t),e.prototype.set=function(t){this.parent.set(t?this.defaultValue:null)},e}(q),K=function(t){function e(e,n){var r=t.call(this,e.value.indexOf(n)>=0)||this;return r.parent=e,r.element=n,r}return o(e,t),e.prototype.set=function(t){var e=this,n=Boolean(t);if(this.value!==n){var r=this.parent.value,o=t?r.concat(this.element):r.filter(function(t){return t!==e.element});this.parent.set(o)}},e}(q),z="Invalid value",G=function(t){function e(e,n){var r=t.call(this,e.value[n])||this;return r.parent=e,r.key=n,r}return o(e,t),e.prototype.remove=function(){this.parent.removeAt(this.key)},e.prototype.set=function(t){var e=this;this.value!==t&&this.parent.update(function(n){return n[e.key]=t,n})},e}(q);n.Mixable.mixins.populate(q),n.MixinsState.get(n.Record).merge([{linkAt:function(t){return x(_(this),this,t)},linkPath:function(t,e){return new J(this,t,e)},linkAll:function(){var t=_(this);if(arguments.length)for(var e=0;e<arguments.length;e++)x(t,this,arguments[e]);else{var n=this.attributes;for(var r in n)void 0===n[r]||x(t,this,r)}return t}}]);var I=function(t){function e(e,n,r){var o=t.call(this,r)||this;return o.record=e,o.attr=n,o}return o(e,t),e.prototype.set=function(t){this.record[this.attr]=t},Object.defineProperty(e.prototype,"error",{get:function(){return void 0===this._error?this.record.getValidationError(this.attr):this._error},set:function(t){this._error=t},enumerable:!0,configurable:!0}),e}(q),J=function(t){function e(e,n,r){var o=t.call(this,e.deepGet(n))||this;return o.record=e,o.path=n,o.options=r,o}return o(e,t),Object.defineProperty(e.prototype,"error",{get:function(){return void 0===this._error&&(this._error=this.record.deepValidationError(this.path)||null),this._error},set:function(t){this._error=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_changeToken",{get:function(){return this.record._changeToken},enumerable:!0,configurable:!0}),e.prototype.set=function(t){this.record.deepSet(this.path,t,this.options)},e}(q);n.MixinsState.get(n.Record.Collection).merge([{linkContains:function(t){return new Q(this,t)},linkAt:function(t){var e=this;return q.value(this[t],function(n){return e[t]=n})}}]);var Q=function(t){function e(e,n){var r=t.call(this,Boolean(e.get(n)))||this;return r.collection=e,r.record=n,r}return o(e,t),e.prototype.set=function(t){this.collection.toggle(this.record,t)},e}(q),X=function(t){function e(e,n){var r=t.call(this,e,n)||this;return r._initializeState(),r}return o(e,t),e.prototype.linkAt=function(t){return this.state.linkAt(t)},e.prototype.linkAll=function(){var t=this.state;return t.linkAll.apply(t,arguments)},e.prototype.linkPath=function(t){return this.state.linkPath(t)},Object.defineProperty(e.prototype,"links",{get:function(){return this.state._links},enumerable:!0,configurable:!0}),e.prototype._initializeState=function(){this.state=null},e.prototype.assignToState=function(t,e){this.state.assignFrom((n={},n[e]=t,n));var n},e.prototype.componentWillUnmount=function(){this.dispose()},e.prototype.transaction=function(t){var e=this.shouldComponentUpdate,n=e!==b;n&&(this.shouldComponentUpdate=b);var r=this,o=r.state,i=r.store,s=i?function(e){return i.transaction(function(){return t(e)})}:t;o?o.transaction(s):s(o),n&&(this.shouldComponentUpdate=e,this.asyncUpdate())},e.prototype.asyncUpdate=function(){this.shouldComponentUpdate===b||this._disposed||this.forceUpdate()},e.onDefine=m,e=i([n.define({PropsChangeTokens:P}),n.definitions({state:n.mixinRules.merge,State:n.mixinRules.value,store:n.mixinRules.merge,Store:n.mixinRules.value,props:n.mixinRules.merge,context:n.mixinRules.merge,childContext:n.mixinRules.merge,pureRender:n.mixinRules.protoValue}),n.mixinRules({componentWillMount:n.mixinRules.classLast,componentDidMount:n.mixinRules.classLast,componentWillReceiveProps:n.mixinRules.classLast,componentWillUpdate:n.mixinRules.classLast,componentDidUpdate:n.mixinRules.classLast,componentWillUnmount:n.mixinRules.classFirst,shouldComponentUpdate:n.mixinRules.some,getChildContext:n.mixinRules.defaults}),n.mixins(n.Messenger)],e)}(e.Component);Object.defineProperty(X.prototype,"isMounted",{value:function(){return!this._disposed}});var Y=Object.create(e);Y.default=Y,Y.define=n.define,Y.mixins=n.mixins,Y.Node=j.value(null),Y.Element=O.value(null),Y.Link=q,Y.Component=X;var Z=Y.assignToState=function(t){return function(e){var n=e&&e instanceof q?e.value:e;this.state.assignFrom((r={},r[t]=n,r)),n&&n._changeToken&&(this.state[t]._changeToken=n._changeToken);var r}};t.default=Y,t.define=n.define,t.mixins=n.mixins,t.Node=j,t.Element=O,t.Link=q,t.Component=X,t.assignToState=Z,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=index.js.map