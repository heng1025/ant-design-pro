(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[5103],{64335:function(D,U,l){"use strict";var F=l(67294),j=(0,F.createContext)({});U.Z=j},85224:function(D,U,l){"use strict";var F=l(84305),j=l(69224),p=l(67294),w=l(94184),Z=l.n(w),V=l(97435),R=l(56264),$=l.n(R),K=l(64335),o=["children","className","extra","style","renderContent"];function T(){return T=Object.assign||function(i){for(var s=1;s<arguments.length;s++){var u=arguments[s];for(var g in u)Object.prototype.hasOwnProperty.call(u,g)&&(i[g]=u[g])}return i},T.apply(this,arguments)}function I(i,s){var u=Object.keys(i);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(i);s&&(g=g.filter(function(N){return Object.getOwnPropertyDescriptor(i,N).enumerable})),u.push.apply(u,g)}return u}function H(i){for(var s=1;s<arguments.length;s++){var u=arguments[s]!=null?arguments[s]:{};s%2?I(Object(u),!0).forEach(function(g){G(i,g,u[g])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(u)):I(Object(u)).forEach(function(g){Object.defineProperty(i,g,Object.getOwnPropertyDescriptor(u,g))})}return i}function G(i,s,u){return s in i?Object.defineProperty(i,s,{value:u,enumerable:!0,configurable:!0,writable:!0}):i[s]=u,i}function M(i,s){if(i==null)return{};var u=J(i,s),g,N;if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(i);for(N=0;N<S.length;N++)g=S[N],!(s.indexOf(g)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,g)||(u[g]=i[g]))}return u}function J(i,s){if(i==null)return{};var u={},g=Object.keys(i),N,S;for(S=0;S<g.length;S++)N=g[S],!(s.indexOf(N)>=0)&&(u[N]=i[N]);return u}var f=function(s){var u=s.children,g=s.className,N=s.extra,S=s.style,k=s.renderContent,z=M(s,o),ge=(0,p.useContext)(j.ZP.ConfigContext),re=ge.getPrefixCls,ce=s.prefixCls||re("pro"),Q="".concat(ce,"-footer-bar"),O=(0,p.useContext)(K.Z),L=(0,p.useMemo)(function(){var X=O.hasSiderMenu,he=O.isMobile,se=O.siderWidth;if(!!X)return se?he?"100%":"calc(100% - ".concat(se,"px)"):"100%"},[O.collapsed,O.hasSiderMenu,O.isMobile,O.siderWidth]),q=p.createElement(p.Fragment,null,p.createElement("div",{className:"".concat(Q,"-left")},N),p.createElement("div",{className:"".concat(Q,"-right")},u));return(0,p.useEffect)(function(){return!O||!(O==null?void 0:O.setHasFooterToolbar)?function(){}:(O==null||O.setHasFooterToolbar(!0),function(){var X;O==null||(X=O.setHasFooterToolbar)===null||X===void 0||X.call(O,!1)})},[]),p.createElement("div",T({className:Z()(g,"".concat(Q)),style:H({width:L},S)},(0,V.Z)(z,["prefixCls"])),k?k(H(H(H({},s),O),{},{leftWidth:L}),q):q)};U.Z=f},21349:function(D,U,l){"use strict";var F=l(84305),j=l(69224),p=l(53645),w=l.n(p),Z=l(67294),V=l(94184),R=l.n(V),$=l(64335),K=function(T){var I=(0,Z.useContext)($.Z),H=T.children,G=T.contentWidth,M=T.className,J=T.style,f=(0,Z.useContext)(j.ZP.ConfigContext),i=f.getPrefixCls,s=T.prefixCls||i("pro"),u=G||I.contentWidth,g="".concat(s,"-grid-content");return Z.createElement("div",{className:R()(g,M,{wide:u==="Fixed"}),style:J},Z.createElement("div",{className:"".concat(s,"-grid-content-children")},H))};U.Z=K},15103:function(D,U,l){"use strict";l.d(U,{H_:function(){return Ot},yy:function(){return qe},ZP:function(){return xt}});var F=l(65056),j=l(70883),p=l(22122),w=l(96156),Z=l(6610),V=l(5991),R=l(10379),$=l(60446),K=l(90484),o=l(67294),T=l(94184),I=l.n(T),H=l(98423),G=l(4084),M=l(65632),J=l(85061),f=l(75164);function i(n){var e,r=function(c){return function(){e=null,n.apply(void 0,(0,J.Z)(c))}},t=function(){if(e==null){for(var c=arguments.length,v=new Array(c),d=0;d<c;d++)v[d]=arguments[d];e=(0,f.Z)(r(v))}};return t.cancel=function(){return f.Z.cancel(e)},t}function s(){return function(e,r,t){var a=t.value,c=!1;return{configurable:!0,get:function(){if(c||this===e.prototype||this.hasOwnProperty(r))return a;var d=i(a.bind(this));return c=!0,Object.defineProperty(this,r,{value:d,configurable:!0,writable:!0}),c=!1,d}}}}var u=l(64019);function g(n){return n!==window?n.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function N(n,e,r){if(r!==void 0&&e.top>n.top-r)return r+e.top}function S(n,e,r){if(r!==void 0&&e.bottom<n.bottom+r){var t=window.innerHeight-e.bottom;return r+t}}var k=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],z=[];function ge(){return z}function re(n,e){if(!!n){var r=z.find(function(t){return t.target===n});r?r.affixList.push(e):(r={target:n,affixList:[e],eventHandlers:{}},z.push(r),k.forEach(function(t){r.eventHandlers[t]=(0,u.Z)(n,t,function(){r.affixList.forEach(function(a){a.lazyUpdatePosition()})})}))}}function ce(n){var e=z.find(function(r){var t=r.affixList.some(function(a){return a===n});return t&&(r.affixList=r.affixList.filter(function(a){return a!==n})),t});e&&e.affixList.length===0&&(z=z.filter(function(r){return r!==e}),k.forEach(function(r){var t=e.eventHandlers[r];t&&t.remove&&t.remove()}))}var Q=function(n,e,r,t){var a=arguments.length,c=a<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,r):t,v;if((typeof Reflect=="undefined"?"undefined":(0,K.Z)(Reflect))==="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(n,e,r,t);else for(var d=n.length-1;d>=0;d--)(v=n[d])&&(c=(a<3?v(c):a>3?v(e,r,c):v(e,r))||c);return a>3&&c&&Object.defineProperty(e,r,c),c};function O(){return typeof window!="undefined"?window:null}var L;(function(n){n[n.None=0]="None",n[n.Prepare=1]="Prepare"})(L||(L={}));var q=function(n){(0,R.Z)(r,n);var e=(0,$.Z)(r);function r(){var t;return(0,Z.Z)(this,r),t=e.apply(this,arguments),t.state={status:L.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var a=t.props.offsetBottom,c=t.props.offsetTop;return a===void 0&&c===void 0&&(c=0),c},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(a){t.placeholderNode=a},t.saveFixedNode=function(a){t.fixedNode=a},t.measure=function(){var a=t.state,c=a.status,v=a.lastAffix,d=t.props.onChange,m=t.getTargetFunc();if(!(c!==L.Prepare||!t.fixedNode||!t.placeholderNode||!m)){var y=t.getOffsetTop(),P=t.getOffsetBottom(),E=m();if(!!E){var h={status:L.None},b=g(E),C=g(t.placeholderNode),A=N(C,b,y),x=S(C,b,P);A!==void 0?(h.affixStyle={position:"fixed",top:A,width:C.width,height:C.height},h.placeholderStyle={width:C.width,height:C.height}):x!==void 0&&(h.affixStyle={position:"fixed",bottom:x,width:C.width,height:C.height},h.placeholderStyle={width:C.width,height:C.height}),h.lastAffix=!!h.affixStyle,d&&v!==h.lastAffix&&d(h.lastAffix),t.setState(h)}}},t.prepareMeasure=function(){if(t.setState({status:L.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var a},t.render=function(){var a=t.context.getPrefixCls,c=t.state,v=c.affixStyle,d=c.placeholderStyle,m=t.props,y=m.prefixCls,P=m.children,E=I()((0,w.Z)({},a("affix",y),!!v)),h=(0,H.Z)(t.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return o.createElement(G.Z,{onResize:function(){t.updatePosition()}},o.createElement("div",(0,p.Z)({},h,{ref:t.savePlaceholderNode}),v&&o.createElement("div",{style:d,"aria-hidden":"true"}),o.createElement("div",{className:E,ref:t.saveFixedNode,style:v},o.createElement(G.Z,{onResize:function(){t.updatePosition()}},P))))},t}return(0,V.Z)(r,[{key:"getTargetFunc",value:function(){var a=this.context.getTargetContainer,c=this.props.target;return c!==void 0?c:a||O}},{key:"componentDidMount",value:function(){var a=this,c=this.getTargetFunc();c&&(this.timeout=setTimeout(function(){re(c(),a),a.updatePosition()}))}},{key:"componentDidUpdate",value:function(a){var c=this.state.prevTarget,v=this.getTargetFunc(),d=null;v&&(d=v()||null),c!==d&&(ce(this),d&&(re(d,this),this.updatePosition()),this.setState({prevTarget:d})),(a.offsetTop!==this.props.offsetTop||a.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),ce(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var a=this.getTargetFunc(),c=this.state.affixStyle;if(a&&c){var v=this.getOffsetTop(),d=this.getOffsetBottom(),m=a();if(m&&this.placeholderNode){var y=g(m),P=g(this.placeholderNode),E=N(P,y,v),h=S(P,y,d);if(E!==void 0&&c.top===E||h!==void 0&&c.bottom===h)return}}this.prepareMeasure()}}]),r}(o.Component);q.contextType=M.E_,Q([s()],q.prototype,"updatePosition",null),Q([s()],q.prototype,"lazyUpdatePosition",null);var X=q,he=l(84305),se=l(69224),Pe=l(59903),Ee=l(81262),Ie=l(30887),Le=l(59250),We=l(94233),Oe=l(28481),fe=l(28991),Ce={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},xe=Ce,pe=l(27029),be=function(e,r){return o.createElement(pe.Z,(0,fe.Z)((0,fe.Z)({},e),{},{ref:r,icon:xe}))};be.displayName="ArrowLeftOutlined";var Re=o.forwardRef(be),Te={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},Ne=Te,De=function(e,r){return o.createElement(pe.Z,(0,fe.Z)((0,fe.Z)({},e),{},{ref:r,icon:Ne}))};De.displayName="ArrowRightOutlined";var Ue=o.forwardRef(De),Ke=l(50344),Be=l(57254),_e=l(81555),Fe=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r},Me=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,c=e.children,v=e.overlay,d=e.dropdownProps,m=Fe(e,["prefixCls","separator","children","overlay","dropdownProps"]),y=o.useContext(M.E_),P=y.getPrefixCls,E=P("breadcrumb",r),h=function(A){return v?o.createElement(_e.Z,(0,p.Z)({overlay:v,placement:"bottomCenter"},d),o.createElement("span",{className:"".concat(E,"-overlay-link")},A,o.createElement(Be.Z,null))):A},b;return"href"in m?b=o.createElement("a",(0,p.Z)({className:"".concat(E,"-link")},m),c):b=o.createElement("span",(0,p.Z)({className:"".concat(E,"-link")},m),c),b=h(b),c?o.createElement("span",null,b,a&&o.createElement("span",{className:"".concat(E,"-separator")},a)):null};Me.__ANT_BREADCRUMB_ITEM=!0;var ye=Me,Se=function(e){var r=e.children,t=o.useContext(M.E_),a=t.getPrefixCls,c=a("breadcrumb");return o.createElement("span",{className:"".concat(c,"-separator")},r||"/")};Se.__ANT_BREADCRUMB_SEPARATOR=!0;var Ae=Se,oe=l(99210),ee=l(21687),ne=l(96159),He=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r};function ze(n,e){if(!n.breadcrumbName)return null;var r=Object.keys(e).join("|"),t=n.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),function(a,c){return e[c]||a});return t}function $e(n,e,r,t){var a=r.indexOf(n)===r.length-1,c=ze(n,e);return a?o.createElement("span",null,c):o.createElement("a",{href:"#/".concat(t.join("/"))},c)}var we=function(e,r){return e=(e||"").replace(/^\//,""),Object.keys(r).forEach(function(t){e=e.replace(":".concat(t),r[t])}),e},Ge=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",t=arguments.length>2?arguments[2]:void 0,a=(0,J.Z)(e),c=we(r,t);return c&&a.push(c),a},ve=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,c=e.style,v=e.className,d=e.routes,m=e.children,y=e.itemRender,P=y===void 0?$e:y,E=e.params,h=E===void 0?{}:E,b=He(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),C=o.useContext(M.E_),A=C.getPrefixCls,x=C.direction,W,le=A("breadcrumb",r);if(d&&d.length>0){var te=[];W=d.map(function(B){var Y=we(B.path,h);Y&&te.push(Y);var ue;return B.children&&B.children.length&&(ue=o.createElement(oe.Z,null,B.children.map(function(me){return o.createElement(oe.Z.Item,{key:me.path||me.breadcrumbName},P(me,h,d,Ge(te,me.path,h)))}))),o.createElement(ye,{overlay:ue,separator:a,key:Y||B.breadcrumbName},P(B,h,d,te))})}else m&&(W=(0,Ke.Z)(m).map(function(B,Y){return B&&((0,ee.Z)(B.type&&(B.type.__ANT_BREADCRUMB_ITEM===!0||B.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,ne.Tm)(B,{separator:a,key:Y}))}));var _=I()(le,(0,w.Z)({},"".concat(le,"-rtl"),x==="rtl"),v);return o.createElement("div",(0,p.Z)({className:_,style:c},b),W)};ve.Item=ye,ve.Separator=Ae;var de=ve,Ze=de,tt=l(51890),rt=l(34952),nt=l(42051),at=function(e,r,t){return!r||!t?null:o.createElement(nt.Z,{componentName:"PageHeader"},function(a){var c=a.back;return o.createElement("div",{className:"".concat(e,"-back")},o.createElement(rt.Z,{onClick:function(d){t==null||t(d)},className:"".concat(e,"-back-button"),"aria-label":c},r))})},ot=function(e){return o.createElement(Ze,e)},it=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:r==="rtl"?o.createElement(Ue,null):o.createElement(Re,null)},lt=function(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",a=r.title,c=r.avatar,v=r.subTitle,d=r.tags,m=r.extra,y=r.onBack,P="".concat(e,"-heading"),E=a||v||d||m;if(!E)return null;var h=it(r,t),b=at(e,h,y),C=b||c||E;return o.createElement("div",{className:P},C&&o.createElement("div",{className:"".concat(P,"-left")},b,c&&o.createElement(tt.C,c),a&&o.createElement("span",{className:"".concat(P,"-title"),title:typeof a=="string"?a:void 0},a),v&&o.createElement("span",{className:"".concat(P,"-sub-title"),title:typeof v=="string"?v:void 0},v),d&&o.createElement("span",{className:"".concat(P,"-tags")},d)),m&&o.createElement("span",{className:"".concat(P,"-extra")},m))},ct=function(e,r){return r?o.createElement("div",{className:"".concat(e,"-footer")},r):null},st=function(e,r){return o.createElement("div",{className:"".concat(e,"-content")},r)},ft=function(e){var r=o.useState(!1),t=(0,Oe.Z)(r,2),a=t[0],c=t[1],v=function(m){var y=m.width;c(y<768)};return o.createElement(M.C,null,function(d){var m,y=d.getPrefixCls,P=d.pageHeader,E=d.direction,h=e.prefixCls,b=e.style,C=e.footer,A=e.children,x=e.breadcrumb,W=e.breadcrumbRender,le=e.className,te=!0;"ghost"in e?te=e.ghost:P&&"ghost"in P&&(te=P.ghost);var _=y("page-header",h),B=function(){var Ye;return((Ye=x)===null||Ye===void 0?void 0:Ye.routes)?ot(x):null},Y=B(),ue=x&&"props"in x,me=(W==null?void 0:W(e,Y))||Y,et=ue?x:me,Rt=I()(_,le,(m={"has-breadcrumb":!!et,"has-footer":!!C},(0,w.Z)(m,"".concat(_,"-ghost"),te),(0,w.Z)(m,"".concat(_,"-rtl"),E==="rtl"),(0,w.Z)(m,"".concat(_,"-compact"),a),m));return o.createElement(G.Z,{onResize:v},o.createElement("div",{className:Rt,style:b},et,lt(_,e,E),A&&st(_,A),ct(_,C)))})},dt=ft,Tt=l(18106),Ve=l(51752),ke=l(64335),ut=l(21349),vt=l(85224),Nt=l(12395),mt=l(83832),gt=l(9960),ht=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","breadcrumbRender"],pt=["children","loading","className","style","footer","affixProps","ghost","fixedHeader"];function Je(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),r.push.apply(r,t)}return r}function ae(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Je(Object(r),!0).forEach(function(t){Xe(n,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):Je(Object(r)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))})}return n}function Xe(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function Qe(n,e){if(n==null)return{};var r=bt(n,e),t,a;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(a=0;a<c.length;a++)t=c[a],!(e.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,t)||(r[t]=n[t]))}return r}function bt(n,e){if(n==null)return{};var r={},t=Object.keys(n),a,c;for(c=0;c<t.length;c++)a=t[c],!(e.indexOf(a)>=0)&&(r[a]=n[a]);return r}function ie(){return ie=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},ie.apply(this,arguments)}function je(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?je=function(r){return typeof r}:je=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},je(n)}function yt(n){return je(n)==="object"?n:{spinning:n}}var Pt=function(e){var r=e.tabList,t=e.tabActiveKey,a=e.onTabChange,c=e.tabBarExtraContent,v=e.tabProps,d=e.prefixedClassName;return r&&r.length?o.createElement(Ve.Z,ie({className:"".concat(d,"-tabs"),activeKey:t,onChange:function(y){a&&a(y)},tabBarExtraContent:c},v),r.map(function(m,y){return o.createElement(Ve.Z.TabPane,ie({},m,{tab:m.tab,key:m.key||y}))})):null},Et=function(e,r,t){return!e&&!r?null:o.createElement("div",{className:"".concat(t,"-detail")},o.createElement("div",{className:"".concat(t,"-main")},o.createElement("div",{className:"".concat(t,"-row")},e&&o.createElement("div",{className:"".concat(t,"-content")},e),r&&o.createElement("div",{className:"".concat(t,"-extraContent")},r))))},Ot=function(e){var r=(0,o.useContext)(ke.Z);return o.createElement("div",{style:{height:"100%",display:"flex",alignItems:"center"}},o.createElement(Ze,ie({},r==null?void 0:r.breadcrumb,r==null?void 0:r.breadcrumbProps,e)))},qe=function(e){var r,t=(0,o.useContext)(ke.Z),a=e.title,c=e.content,v=e.pageHeaderRender,d=e.header,m=e.prefixedClassName,y=e.extraContent,P=e.style,E=e.prefixCls,h=e.breadcrumbRender,b=Qe(e,ht);if(v===!1)return null;if(v)return o.createElement(o.Fragment,null," ",v(ae(ae({},e),t)));var C=a;!a&&a!==!1&&(C=t.title);var A=ae(ae(ae({},t),{},{title:C},b),{},{footer:Pt(ae(ae({},b),{},{breadcrumbRender:h,prefixedClassName:m}))},d),x=A.breadcrumb,W=!x||h===!1||!(x==null?void 0:x.itemRender)&&!(x==null||(r=x.routes)===null||r===void 0?void 0:r.length);return["title","subTitle","extra","tags","footer","avatar","backIcon"].every(function(le){return!A[le]})&&W&&!c&&!y?null:o.createElement("div",{className:"".concat(m,"-warp")},o.createElement(dt,ie({},A,{breadcrumb:h===!1?void 0:ae(ae({},A.breadcrumb),t.breadcrumbProps),prefixCls:E}),(d==null?void 0:d.children)||Et(c,y,m)))},Ct=function(e){var r,t=e.children,a=e.loading,c=a===void 0?!1:a,v=e.className,d=e.style,m=e.footer,y=e.affixProps,P=e.ghost,E=e.fixedHeader,h=Qe(e,pt),b=(0,o.useContext)(ke.Z),C=(0,o.useContext)(se.ZP.ConfigContext),A=C.getPrefixCls,x=e.prefixCls||A("pro"),W="".concat(x,"-page-container"),le=I()(W,v,(r={},Xe(r,"".concat(x,"-page-container-ghost"),P),Xe(r,"".concat(x,"-page-container-with-footer"),m),r)),te=(0,o.useMemo)(function(){return t?o.createElement(o.Fragment,null,o.createElement("div",{className:"".concat(W,"-children-content")},t),b.hasFooterToolbar&&o.createElement("div",{style:{height:48,marginTop:24}})):null},[t,W,b.hasFooterToolbar]),_=o.createElement(qe,ie({},h,{ghost:P,prefixCls:void 0,prefixedClassName:W})),B=(0,o.useMemo)(function(){var Y=yt(c),ue=Y.spinning?o.createElement(mt.Z,Y):te;return e.waterMarkProps||b.waterMarkProps?o.createElement(gt.Z,e.waterMarkProps||b.waterMarkProps,ue):ue},[te,c,e.waterMarkProps,b.waterMarkProps]);return o.createElement("div",{style:d,className:le},E&&_?o.createElement(X,ie({offsetTop:b.hasHeader&&b.fixedHeader?b.headerHeight:0},y),_):_,B&&o.createElement(ut.Z,null,B),m&&o.createElement(vt.Z,{prefixCls:x},m))},xt=Ct},9960:function(D,U,l){"use strict";var F=l(84305),j=l(69224),p=l(67294),w=l(94184),Z=l.n(w);function V(f,i){var s=Object.keys(f);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(f);i&&(u=u.filter(function(g){return Object.getOwnPropertyDescriptor(f,g).enumerable})),s.push.apply(s,u)}return s}function R(f){for(var i=1;i<arguments.length;i++){var s=arguments[i]!=null?arguments[i]:{};i%2?V(Object(s),!0).forEach(function(u){$(f,u,s[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(f,Object.getOwnPropertyDescriptors(s)):V(Object(s)).forEach(function(u){Object.defineProperty(f,u,Object.getOwnPropertyDescriptor(s,u))})}return f}function $(f,i,s){return i in f?Object.defineProperty(f,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):f[i]=s,f}function K(f,i){return G(f)||H(f,i)||T(f,i)||o()}function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(f,i){if(!!f){if(typeof f=="string")return I(f,i);var s=Object.prototype.toString.call(f).slice(8,-1);if(s==="Object"&&f.constructor&&(s=f.constructor.name),s==="Map"||s==="Set")return Array.from(f);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return I(f,i)}}function I(f,i){(i==null||i>f.length)&&(i=f.length);for(var s=0,u=new Array(i);s<i;s++)u[s]=f[s];return u}function H(f,i){var s=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(s!=null){var u=[],g=!0,N=!1,S,k;try{for(s=s.call(f);!(g=(S=s.next()).done)&&(u.push(S.value),!(i&&u.length===i));g=!0);}catch(z){N=!0,k=z}finally{try{!g&&s.return!=null&&s.return()}finally{if(N)throw k}}return u}}function G(f){if(Array.isArray(f))return f}var M=function(i){if(!i)return 1;var s=i.backingStorePixelRatio||i.webkitBackingStorePixelRatio||i.mozBackingStorePixelRatio||i.msBackingStorePixelRatio||i.oBackingStorePixelRatio||i.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/s},J=function(i){var s=i.children,u=i.style,g=i.className,N=i.markStyle,S=i.markClassName,k=i.zIndex,z=k===void 0?9:k,ge=i.gapX,re=ge===void 0?212:ge,ce=i.gapY,Q=ce===void 0?222:ce,O=i.width,L=O===void 0?120:O,q=i.height,X=q===void 0?64:q,he=i.rotate,se=he===void 0?-22:he,Pe=i.image,Ee=i.content,Ie=i.offsetLeft,Le=i.offsetTop,We=i.fontStyle,Oe=We===void 0?"normal":We,fe=i.fontWeight,Ce=fe===void 0?"normal":fe,xe=i.fontColor,pe=xe===void 0?"rgba(0,0,0,.15)":xe,be=i.fontSize,Re=be===void 0?16:be,Te=i.fontFamily,Ne=Te===void 0?"sans-serif":Te,De=i.prefixCls,Ue=(0,p.useContext)(j.ZP.ConfigContext),Ke=Ue.getPrefixCls,Be=Ke("pro-layout-watermark",De),_e=Z()("".concat(Be,"-wrapper"),g),Fe=Z()(Be,S),Me=(0,p.useState)(""),ye=K(Me,2),Se=ye[0],Ae=ye[1];return(0,p.useEffect)(function(){var oe=document.createElement("canvas"),ee=oe.getContext("2d"),ne=M(ee),He="".concat((re+L)*ne,"px"),ze="".concat((Q+X)*ne,"px"),$e=Ie||re/2,we=Le||Q/2;if(oe.setAttribute("width",He),oe.setAttribute("height",ze),ee){ee.translate($e*ne,we*ne),ee.rotate(Math.PI/180*Number(se));var Ge=L*ne,ve=X*ne;if(Pe){var de=new Image;de.crossOrigin="anonymous",de.referrerPolicy="no-referrer",de.src=Pe,de.onload=function(){ee.drawImage(de,0,0,Ge,ve),Ae(oe.toDataURL())}}else if(Ee){var Ze=Number(Re)*ne;ee.font="".concat(Oe," normal ").concat(Ce," ").concat(Ze,"px/").concat(ve,"px ").concat(Ne),ee.fillStyle=pe,ee.fillText(Ee,0,0),Ae(oe.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[re,Q,Ie,Le,se,Oe,Ce,L,X,Ne,pe,Pe,Ee,Re]),p.createElement("div",{style:R({position:"relative"},u),className:_e},s,p.createElement("div",{className:Fe,style:R({zIndex:z,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(re+L,"px"),pointerEvents:"none",backgroundRepeat:"repeat",backgroundImage:"url('".concat(Se,"')")},N)}))};U.Z=J},56264:function(D){D.exports={"ant-pro-footer-bar":"ant-pro-footer-bar","ant-pro-footer-bar-left":"ant-pro-footer-bar-left","ant-pro-footer-bar-right":"ant-pro-footer-bar-right"}},53645:function(D){D.exports={"ant-pro-grid-content":"ant-pro-grid-content",wide:"wide"}},12395:function(D){D.exports={"ant-pro-page-container-children-content":"ant-pro-page-container-children-content","ant-pro-page-container-warp":"ant-pro-page-container-warp","ant-tabs-nav":"ant-tabs-nav","ant-pro-page-container-ghost":"ant-pro-page-container-ghost","ant-pro-page-container-main":"ant-pro-page-container-main","ant-pro-page-container-detail":"ant-pro-page-container-detail","ant-pro-page-container-row":"ant-pro-page-container-row","ant-pro-page-container-title-content":"ant-pro-page-container-title-content","ant-pro-page-container-title":"ant-pro-page-container-title","ant-pro-page-container-content":"ant-pro-page-container-content","ant-pro-page-container-extraContent":"ant-pro-page-container-extraContent","ant-pro-page-container-logo":"ant-pro-page-container-logo","ant-pro-page-container-action":"ant-pro-page-container-action"}},70883:function(D){D.exports={"ant-affix":"ant-affix"}},81262:function(D){D.exports={"ant-breadcrumb":"ant-breadcrumb",anticon:"anticon","ant-breadcrumb-separator":"ant-breadcrumb-separator","ant-breadcrumb-link":"ant-breadcrumb-link","ant-breadcrumb-overlay-link":"ant-breadcrumb-overlay-link","ant-breadcrumb-rtl":"ant-breadcrumb-rtl"}},59903:function(D){D.exports={"ant-page-header":"ant-page-header","ant-page-header-ghost":"ant-page-header-ghost","has-breadcrumb":"has-breadcrumb","has-footer":"has-footer","ant-page-header-back":"ant-page-header-back","ant-page-header-back-button":"ant-page-header-back-button","ant-divider-vertical":"ant-divider-vertical","ant-breadcrumb":"ant-breadcrumb","ant-page-header-heading":"ant-page-header-heading","ant-page-header-heading-left":"ant-page-header-heading-left","ant-page-header-heading-title":"ant-page-header-heading-title","ant-avatar":"ant-avatar","ant-page-header-heading-sub-title":"ant-page-header-heading-sub-title","ant-page-header-heading-extra":"ant-page-header-heading-extra","ant-page-header-content":"ant-page-header-content","ant-page-header-footer":"ant-page-header-footer","ant-tabs":"ant-tabs","ant-tabs-nav":"ant-tabs-nav","ant-tabs-tab":"ant-tabs-tab","ant-page-header-compact":"ant-page-header-compact","ant-page-header-rtl":"ant-page-header-rtl","ant-page-header-heading-tags":"ant-page-header-heading-tags","ant-tabs-bar":"ant-tabs-bar"}},34952:function(D,U,l){"use strict";var F=l(22122),j=l(67294),p=l(15105),w=function(R,$){var K={};for(var o in R)Object.prototype.hasOwnProperty.call(R,o)&&$.indexOf(o)<0&&(K[o]=R[o]);if(R!=null&&typeof Object.getOwnPropertySymbols=="function")for(var T=0,o=Object.getOwnPropertySymbols(R);T<o.length;T++)$.indexOf(o[T])<0&&Object.prototype.propertyIsEnumerable.call(R,o[T])&&(K[o[T]]=R[o[T]]);return K},Z={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},V=j.forwardRef(function(R,$){var K=function(f){var i=f.keyCode;i===p.Z.ENTER&&f.preventDefault()},o=function(f){var i=f.keyCode,s=R.onClick;i===p.Z.ENTER&&s&&s()},T=R.style,I=R.noStyle,H=R.disabled,G=w(R,["style","noStyle","disabled"]),M={};return I||(M=(0,F.Z)({},Z)),H&&(M.pointerEvents="none"),M=(0,F.Z)((0,F.Z)({},M),T),j.createElement("div",(0,F.Z)({role:"button",tabIndex:0,ref:$},G,{onKeyDown:K,onKeyUp:o,style:M}))});U.Z=V},97435:function(D,U){"use strict";function l(F,j){for(var p=Object.assign({},F),w=0;w<j.length;w+=1){var Z=j[w];delete p[Z]}return p}U.Z=l}}]);