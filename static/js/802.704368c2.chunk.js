(self.webpackChunkksandrworks=self.webpackChunkksandrworks||[]).push([[802],{5889:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return R}});var r=t(1413),i=t(5861),u=t(885),s=t(7757),o=t.n(s),a=t(2791),c=t(8814),l=t(184),d=function(e){var n=e.number;return(0,l.jsx)("div",{children:(0,l.jsxs)("span",{className:"remaining-posts",children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u043f\u043e\u0441\u0442\u043e\u0432: ",n,(0,l.jsx)("br",{})," (\u0434\u043e \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u0442\u0430\u0440\u0438\u0444\u0430)"]})})},f=t(9195),m=t(1297),p=t(3174),h=t(4483),b=t(8687),v=t(7896),g=t(8719),x=t(2425),y=t(4878),j=t(8698),w=t(5255),C=t(6780),S=function(){var e,n,t,r,s=(0,a.useState)(null),c=(0,u.Z)(s,2),d=c[0],f=c[1],m=(0,a.useState)(null),p=(0,u.Z)(m,2),v=p[0],S=p[1],k=(0,a.useState)(!0),N=(0,u.Z)(k,2),O=N[0],_=N[1],E=(0,x.rC)(),R=E.data,F=E.isSuccess,A=E.error,P=E.refetch,z=(0,x.bi)(),D=(0,u.Z)(z,1)[0],Q=(0,x.hS)(),Z=(0,u.Z)(Q,2),M=Z[0],q=Z[1].error,I=(0,x.ri)(),L=(0,u.Z)(I,2),T=L[0],V=L[1].isSuccess,K=(0,x.cA)(),H=(0,u.Z)(K,2),B=H[0],U=H[1],W=U.data,G=U.error,X=U.isSuccess,Y=(0,x.AZ)(),J=(0,u.Z)(Y,2),$=J[0],ee=J[1],ne=ee.data,te=ee.error,re=ee.isSuccess,ie=(0,x.C4)(),ue=(0,u.Z)(ie,1)[0],se=(0,x.pS)(),oe=(0,u.Z)(se,2),ae=oe[0],ce=oe[1],le=ce.data,de=ce.error,fe=ce.isSuccess,me=(0,b.useSelector)((function(e){return e.modalFb.isOpenProcess})),pe=(0,b.useSelector)((function(e){return e.favorites.favorites})),he=function(){var e=(0,i.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=pe.map((function(e){return{text1:e.text1,text2:e.text2.join(" ")}})),e.next=3,D({data:n});case 3:return e.abrupt("return",B().unwrap());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),be=function(){var e,n;if(F&&((null===R||void 0===R||null===(e=R.method)||void 0===e||!e.isEnd)&&(null===R||void 0===R||null===(n=R.method)||void 0===n||!n.done)&&(200===d||null===d))){var t=R.method.method;if(""===t)return setTimeout((function(){return he()}),2e3);if("Com"===t)return setTimeout((function(){return B().unwrap()}),6e4);if("Rep"===t)return setTimeout((function(){return $().unwrap()}),2e3);if("Del"===t)return setTimeout((function(){return ae().unwrap()}),2e3)}},ve=(0,a.useCallback)((function(){be()}),[R]);(0,a.useEffect)((function(){return document.body.style.overflow="hidden",function(){document.body.style.overflow="auto"}}),[]),(0,a.useEffect)((function(){V&&R.method.done&&_(!1)}),[V,R]),(0,a.useEffect)((function(){if(be(),A)return f(null)}),[R,A]),(0,a.useEffect)((function(){(X||re||fe)&&f(W?W.status:ne?ne.status:le.status)}),[X,re,fe]),(0,a.useEffect)((function(){(G||te||de)&&(f(G?null===G||void 0===G?void 0:G.status:te?null===te||void 0===te?void 0:te.status:null===de||void 0===de?void 0:de.status),S(G?G.data.message:te?te.data.message:de.data.message))}),[G,te,de]);var ge=(0,b.useDispatch)(),xe=function(){var e=(0,i.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T().unwrap();case 2:_(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ye=function(){var e=(0,i.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue();case 2:return e.abrupt("return",ge((0,g.k8)()));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),je=function(){var e=(0,i.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(401!==d){e.next=5;break}return e.next=3,C.FacebookLoginClient.login((function(e){return M({accessToken:e.authResponse.accessToken,userId:e.authResponse.userID})}),{auth_type:"rerequest",scope:"rerequest"});case 3:f(200),S(null);case 5:return 401!==d&&200!==d&&(f(200),S(null)),e.next=8,P();case 8:return e.abrupt("return",ve());case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,l.jsxs)("div",{className:"modal",children:[(0,l.jsxs)("div",{className:"modal__body modal__body-process ".concat(me?"open":""),children:[(0,l.jsx)("div",{className:"modal__body_top flex justify-content-between align-center border-bottom",children:(0,l.jsx)("h1",{className:"title",children:"\u0421\u0442\u0430\u0442\u0443\u0441"})}),v&&(0,l.jsx)("h3",{className:"error-message mt-20 mb-20",children:v}),(0,l.jsxs)("p",{children:["\u0411\u043b\u043e\u043a ",null===(e=R.method)||void 0===e?void 0:e.status," \u0438\u0437 ",pe.length]}),(0,l.jsx)(j.Z,{completed:null===(n=R.method)||void 0===n?void 0:n.percent,animateOnRender:!0,baseBgColor:"#F3F3F3FF",bgColor:null===v?"#0066EAFF":"#6c757d",height:"30px",width:"100%",margin:"10px auto"}),(0,l.jsxs)("div",{className:"modal__body_main-btn flex",children:[(v||R.method.done)&&(0,l.jsx)("button",{style:{maxWidth:"50px"},className:"btn blue-btn",onClick:function(){return je()},children:(0,l.jsx)(h.G,{icon:w.QD})}),((null===(t=R.method)||void 0===t?void 0:t.isEnd)||(null===(r=R.method)||void 0===r?void 0:r.done)||v)&&(0,l.jsx)("button",{style:{maxWidth:"100px"},className:"btn blue-btn",onClick:function(){return ye()},children:"\u0412\u044b\u0445\u043e\u0434"}),!R.method.done&&!R.method.isEnd&&!v&&(0,l.jsxs)("button",{style:{maxWidth:"200px",justifyContent:"center"},className:"btn blue-btn flex align-center",onClick:function(){return xe()},disabled:V&&!R.method.done&&O,children:[(0,l.jsx)("span",{style:{display:"block",marginRight:10},children:"\u041e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0446\u0435\u0441\u0441"}),V&&!R.method.done&&O&&(0,l.jsx)(y.Z,{width:20,height:20})]}),!!q&&(0,l.jsx)("h3",{className:"error-message",children:q.data.message})]})]}),"}"]})},k=t(9071),N=t(5025),O=a.lazy((function(){return Promise.all([t.e(717),t.e(213)]).then(t.bind(t,1213))})),_=a.lazy((function(){return t.e(572).then(t.bind(t,5572))})),E=a.lazy((function(){return Promise.all([t.e(717),t.e(513)]).then(t.bind(t,513))})),R=function(){var e=(0,a.useRef)(),n=(0,a.useRef)(),t=(0,f.cI)(),s=t.register,j=t.handleSubmit,w=(0,x.U6)(),C=(0,u.Z)(w,2),R=C[0],F=C[1],A=(0,x.X_)("fulfilled"===F.status?null:k.skipToken).data,P=(0,a.useState)(!0),z=(0,u.Z)(P,2),D=z[0],Q=z[1],Z=(0,b.useSelector)((function(e){return e.favorites.favorites})),M=(0,b.useSelector)((function(e){return e.modalFb.isOpenProcess})),q=(0,b.useSelector)((function(e){return e.facebook.user.fbPage})),I=(0,b.useSelector)((function(e){return e.instagramPosts.currentPostId})),L=(0,b.useDispatch)(),T=function(){if(e.current.value&&n.current.value){var t=[e.current.value,n.current.value];L((0,v.IO)(t)),e.current.value="",n.current.value="",e.current.focus()}},V=function(e){"Enter"===e.key&&T()};return(0,a.useEffect)((function(){A&&L((0,v.Ql)(A))}),[A,L]),(0,a.useEffect)((function(){q&&Z.length&&null!==I?Q(!1):Q(!0)}),[Z,q,I]),(0,l.jsxs)(l.Fragment,{children:[window.FB?null:(0,l.jsx)(N.Z,{hidden:!0}),(0,l.jsx)(c.Z,{title:"\u0425\u0435\u0448\u0442\u0435\u0433\u0438",icon:p.olY}),(0,l.jsxs)("div",{className:"hashtag",children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"hashtag__block mb-25",children:[(0,l.jsxs)("div",{className:"top mb-20",children:[(0,l.jsx)("h1",{className:"title mb-20",children:"\u0425\u0435\u0448\u0442\u0435\u0433\u0438"}),(0,l.jsx)("p",{className:"border-bottom gray-text",children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u043e\u0441\u0442\u0430\u0432\u0438\u0442 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043f\u043e\u0434 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u043c \u0432\u0430\u043c\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435\u043c, \u0430 \u043f\u043e\u0434 \u043f\u0435\u0440\u0432\u044b\u043c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u043c \u0440\u0430\u0437\u043c\u0435\u0441\u0442\u0438\u0442 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c\u0438 \u0432\u0430\u043c\u0438 \u0445\u044d\u0448\u0442\u0435\u0433\u0430\u043c\u0438. \u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u043f\u0435\u0440\u0432\u044b\u0439 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043b\u0435\u043d."})]}),(0,l.jsxs)("div",{className:"main colm-2 all-btn-strong justify-content-between",children:[(0,l.jsxs)("div",{className:"hashtag__block_inputs mr-25 flex-column justify-content-between",children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"input-field",children:[(0,l.jsx)("input",{type:"text",id:"comment1",className:"w-100",ref:e,onKeyDown:function(e){return V(e)}}),(0,l.jsx)("label",{htmlFor:"comment1",children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 1"})]}),(0,l.jsxs)("div",{className:"input-field",children:[(0,l.jsx)("input",{type:"text",id:"comment2",className:"w-100",ref:n,onKeyDown:function(e){return V(e)}}),(0,l.jsx)("label",{htmlFor:"comment2",children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 2"})]}),(0,l.jsxs)("div",{className:"button-group flex mb-20",children:[(0,l.jsx)("form",{className:"hashtag__form",onChange:j((function(e){window.File&&window.FileReader&&window.FileList&&window.Blob||alert("\u0424\u0430\u0439\u043b\u043e\u0432\u044b\u0435 API \u043d\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0432 \u044d\u0442\u043e\u043c \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435.");var n=e.files[0];if(!n.type.match("text.*"))return alert(n.name+" is not a valid text file.");var t=new FileReader;t.readAsText(n),t.onload=(0,i.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R({file:t.result});case 2:case"end":return e.stop()}}),e)})))})),children:(0,l.jsxs)("label",{className:"btn blue-btn-invert",children:["\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a",(0,l.jsx)("input",(0,r.Z)((0,r.Z)({},s("files")),{},{type:"file",accept:".txt"}))]})}),(0,l.jsx)("button",{className:"button blue-btn btn-fav",onClick:function(){return T()},children:(0,l.jsx)(h.G,{icon:m.Tab})})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("button",{className:"blue-btn mb-20",onClick:function(){return L((0,g.nQ)())},disabled:D,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0432 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443"}),(0,l.jsx)(d,{number:30})]})]}),(0,l.jsx)("div",{className:"hashtag__block_slider flex justify-content-end",children:(0,l.jsx)(E,{isSendId:!0})})]})]}),(0,l.jsxs)("div",{className:"hashtag__block",children:[(0,l.jsx)("div",{className:"top border-bottom pb-25 mb-20",children:(0,l.jsx)("h1",{className:"title",children:"\u041f\u0440\u043e\u0446\u0435\u0441\u0441\u044b"})}),(0,l.jsx)("div",{className:"main",children:(0,l.jsxs)("ul",{className:"hashtag__list",children:[(0,l.jsx)("li",{children:(0,l.jsx)("div",{children:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0435\u0440\u0435\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0442\u043e\u043a\u0435\u043d. \u0421\u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u044d\u0442\u043e \u043f\u043e \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u043a\u043d\u043e\u043f\u043a\u0435"})}),(0,l.jsx)("li",{children:(0,l.jsx)("div",{children:"\u041f\u0440\u043e\u0446\u0435\u0441\u0441 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u043f\u0430\u0443\u0437\u0435"})})]})})]})]}),(0,l.jsx)("div",{children:(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(y.Z,{width:50,height:50}),children:(0,l.jsx)(_,{})})})]}),M&&(0,l.jsx)(S,{}),(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(y.Z,{width:50,height:50}),children:(0,l.jsx)(O,{})})]})}},9523:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t="arrows-rotate",r=[128472,"refresh","sync"],i="f021",u="M464 16c-17.67 0-32 14.31-32 32v74.09C392.1 66.52 327.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.89 5.5 34.88-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c50.5 0 96.26 24.55 124.4 64H336c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32V48C496 30.31 481.7 16 464 16zM441.8 289.6c-16.92-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-50.5 0-96.25-24.55-124.4-64H176c17.67 0 32-14.31 32-32s-14.33-32-32-32h-128c-17.67 0-32 14.31-32 32v144c0 17.69 14.33 32 32 32s32-14.31 32-32v-74.09C119.9 445.5 184.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z";n.definition={prefix:"fas",iconName:t,icon:[512,512,r,i,u]},n.faArrowsRotate=n.definition,n.prefix="fas",n.iconName=t,n.width=512,n.height=512,n.ligatures=r,n.unicode=i,n.svgPathData=u,n.aliases=r},5255:function(e,n,t){"use strict";var r=t(9523);n.DF={prefix:r.prefix,iconName:r.iconName,icon:[r.width,r.height,r.aliases,r.unicode,r.svgPathData]},n.QD=n.DF,r.prefix,r.iconName,r.width,r.height,r.aliases,r.unicode,r.svgPathData,r.aliases},8698:function(e,n,t){var r=t(2791),i=t(2007);function u(e){if(e&&e.__esModule)return e;var n=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}})),n.default=e,Object.freeze(n)}var s=u(r),o=u(i),a=function(e){var n,t=e.bgColor,r=e.completed,i=e.baseBgColor,u=e.height,o=e.width,a=e.margin,c=e.padding,l=e.borderRadius,d=e.labelAlignment,f=e.labelColor,m=e.labelSize,p=e.isLabelVisible,h=e.transitionDuration,b=e.transitionTimingFunction,v=e.className,g=e.dir,x=e.ariaValuemin,y=e.ariaValuemax,j=e.ariaValuetext,w=e.maxCompleted,C=e.customLabel,S=e.animateOnRender,k=e.barContainerClassName,N=e.completedClassName,O=e.labelClassName,_=e.initCompletedOnAnimation,E=void 0===_?0:_,R="left"===(n=d)?"flex-start":"center"===n?"center":"right"===n?"flex-end":null,F="number"===typeof E?"".concat(E,"%"):E,A=function(e,n){if(e){var t=Number(n)/e;return t>1?"100%":"".concat(100*t,"%")}return F}(w,r),P=s.useState(F),z=P[0],D=P[1],Q={height:u,background:i,borderRadius:l,padding:c,width:o,margin:a},Z={height:u,width:S?z:A,background:t,transition:"width ".concat(h||"1s"," ").concat(b||"ease-in-out"),borderRadius:"inherit",display:"flex",alignItems:"center",justifyContent:"outside"!==d&&R?R:"normal"},M={padding:"outside"===d?"0 0 0 5px":"5px",color:f,fontWeight:"bold",fontSize:m,display:p?"initial":"none"},q={display:"outside"===d?"flex":"initial",alignItems:"outside"===d?"center":"initial"},I="number"===typeof r?"".concat(r,"%"):"".concat(r),L=C||I;return s.useEffect((function(){S&&requestAnimationFrame((function(){return D(A)}))}),[A,S]),s.createElement("div",{style:v?void 0:q,className:v,dir:g,role:"progressbar","aria-valuenow":parseFloat(L),"aria-valuemin":x,"aria-valuemax":y,"aria-valuetext":"".concat(null===j?L:j)},s.createElement("div",{style:k?void 0:Q,className:k},s.createElement("div",{style:N?void 0:Z,className:N},"outside"!==d&&s.createElement("span",{style:O?void 0:M,className:O},L))),"outside"===d&&s.createElement("span",{style:O?void 0:M,className:O},L))};a.propTypes={completed:o.oneOfType([o.string,o.number]).isRequired,bgColor:o.string,baseBgColor:o.string,height:o.string,width:o.string,borderRadius:o.string,margin:o.string,padding:o.string,labelAlignment:o.oneOf(["left","center","right","outside"]),labelColor:o.string,labelSize:o.string,isLabelVisible:o.bool,className:o.string,dir:o.oneOf(["rtl","ltr","auto"]),maxCompleted:o.number,customLabel:o.string,animateOnRender:o.bool,barContainerClassName:o.string,completedClassName:o.string,labelClassName:o.string,initCompletedOnAnimation:o.oneOfType([o.string,o.number])},a.defaultProps={bgColor:"#6a1b9a",height:"20px",width:"100%",borderRadius:"50px",labelAlignment:"right",baseBgColor:"#e0e0de",labelColor:"#fff",labelSize:"15px",isLabelVisible:!0,dir:"ltr",ariaValuemin:0,ariaValuemax:100,ariaValuetext:null,maxCompleted:100,animateOnRender:!1,initCompletedOnAnimation:0},n.Z=a},9071:function(e,n,t){var r=this&&this.__spreadArray||function(e,n){for(var t=0,r=n.length,i=e.length;t<r;t++,i++)e[i]=n[t];return e},i=Object.create,u=Object.defineProperty,s=Object.defineProperties,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,d=Object.getPrototypeOf,f=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=function(e,n,t){return n in e?u(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t},h=function(e,n){for(var t in n||(n={}))f.call(n,t)&&p(e,t,n[t]);if(l)for(var r=0,i=l(n);r<i.length;r++)m.call(n,t=i[r])&&p(e,t,n[t]);return e},b=function(e,n){return s(e,a(n))},v=function(e){return u(e,"__esModule",{value:!0})},g=function(e,n,t){if(n&&"object"==typeof n||"function"==typeof n)for(var r=function(r){f.call(e,r)||"default"===r||u(e,r,{get:function(){return n[r]},enumerable:!(t=o(n,r))||t.enumerable})},i=0,s=c(n);i<s.length;i++)r(s[i]);return e},x=function(e){return g(v(u(null!=e?i(d(e)):{},"default",e&&e.__esModule&&"default"in e?{get:function(){return e.default},enumerable:!0}:{value:e,enumerable:!0})),e)};v(n),function(e,n){for(var t in n)u(e,t,{get:n[t],enumerable:!0})}(n,{ApiProvider:function(){return B},createApi:function(){return U},reactHooksModule:function(){return L}});var y=x(t(255)),j=x(t(5273)),w=x(t(2791)),C=x(t(255)),S=x(t(8687)),k=x(t(2791));function N(e,n,t,r){var i=(0,k.useMemo)((function(){return{queryArgs:e,serialized:"object"==typeof e?n({queryArgs:e,endpointDefinition:t,endpointName:r}):e}}),[e,n,t,r]),u=(0,k.useRef)(i);return(0,k.useEffect)((function(){u.current.serialized!==i.serialized&&(u.current=i)}),[i]),u.current.serialized===i.serialized?u.current.queryArgs:e}var O=Symbol(),_=x(t(2791)),E=x(t(8687));function R(e){var n=(0,_.useRef)(e);return(0,_.useEffect)((function(){(0,E.shallowEqual)(n.current,e)||(n.current=e)}),[e]),(0,E.shallowEqual)(n.current,e)?n.current:e}var F,A,P="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?w.useLayoutEffect:w.useEffect,z=function(e){return e},D=function(e){return e},Q=function(e){return e.isUninitialized?b(h({},e),{isUninitialized:!1,isFetching:!0,isLoading:void 0===e.data,status:C.QueryStatus.pending}):e};function Z(e){return e.replace(e[0],e[0].toUpperCase())}function M(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];Object.assign.apply(Object,r([e],n))}(A=F||(F={})).query="query",A.mutation="mutation";var q=x(t(8687)),I=Symbol(),L=function(e){var n=void 0===e?{}:e,t=n.batch,r=void 0===t?q.batch:t,i=n.useDispatch,u=void 0===i?q.useDispatch:i,s=n.useSelector,o=void 0===s?q.useSelector:s,a=n.useStore,c=void 0===a?q.useStore:a,l=n.unstable__sideEffectsInRender,d=void 0!==l&&l;return{name:I,init:function(e,n,t){var i=e,s=function(e){var n=e.api,t=e.moduleOptions,r=t.batch,i=t.useDispatch,u=t.useSelector,s=t.useStore,o=e.serializeQueryArgs,a=e.context,c=t.unstable__sideEffectsInRender?function(e){return e()}:w.useEffect;return{buildQueryHooks:function(e){var t=function(t,r){var s=void 0===r?{}:r,l=s.refetchOnReconnect,d=s.refetchOnFocus,f=s.refetchOnMountOrArgChange,m=s.skip,p=void 0!==m&&m,h=s.pollingInterval,b=void 0===h?0:h,v=n.endpoints[e].initiate,g=i(),x=N(p?C.skipToken:t,o,a.endpointDefinitions[e],e),y=R({refetchOnReconnect:l,refetchOnFocus:d,pollingInterval:b}),j=(0,w.useRef)(),S=j.current||{},k=S.queryCacheKey,O=S.requestId,_=u((function(e){var t;return!!k&&!!O&&!(null==(t=e[n.reducerPath].subscriptions[k])?void 0:t[O])}));return c((function(){j.current=void 0}),[_]),c((function(){var e,n=j.current;if(x===C.skipToken)return null==n||n.unsubscribe(),void(j.current=void 0);var t=null==(e=j.current)?void 0:e.subscriptionOptions;if(n&&n.arg===x)y!==t&&n.updateSubscriptionOptions(y);else{null==n||n.unsubscribe();var r=g(v(x,{subscriptionOptions:y,forceRefetch:f}));j.current=r}}),[g,v,f,x,y,_]),(0,w.useEffect)((function(){return function(){var e;null==(e=j.current)||e.unsubscribe(),j.current=void 0}}),[]),(0,w.useMemo)((function(){return{refetch:function(){var e;null==(e=j.current)||e.refetch()}}}),[])},d=function(t){var u=void 0===t?{}:t,s=u.refetchOnReconnect,o=u.refetchOnFocus,a=u.pollingInterval,l=void 0===a?0:a,d=n.endpoints[e].initiate,f=i(),m=(0,w.useState)(O),p=m[0],h=m[1],b=(0,w.useRef)(),v=R({refetchOnReconnect:s,refetchOnFocus:o,pollingInterval:l});c((function(){var e,n,t=null==(e=b.current)?void 0:e.subscriptionOptions;v!==t&&(null==(n=b.current)||n.updateSubscriptionOptions(v))}),[v]);var g=(0,w.useRef)(v);c((function(){g.current=v}),[v]);var x=(0,w.useCallback)((function(e,n){var t;return void 0===n&&(n=!1),r((function(){var r;null==(r=b.current)||r.unsubscribe(),b.current=t=f(d(e,{subscriptionOptions:g.current,forceRefetch:!n})),h(e)})),t}),[f,d]);return(0,w.useEffect)((function(){return function(){var e;null==(e=null==b?void 0:b.current)||e.unsubscribe()}}),[]),(0,w.useEffect)((function(){p===O||b.current||x(p,!0)}),[p,x]),(0,w.useMemo)((function(){return[x,p]}),[x,p])},f=function(t,r){var i=void 0===r?{}:r,c=i.skip,d=i.selectFromResult,f=void 0===d?z:d,m=n.endpoints[e].select,p=N(void 0!==c&&c?C.skipToken:t,o,a.endpointDefinitions[e],e),h=(0,w.useRef)(),b=(0,w.useMemo)((function(){return(0,j.createSelector)([m(p),function(e,n){return n},function(e){return p}],l)}),[m,p]),v=(0,w.useMemo)((function(){return(0,j.createSelector)([b],f)}),[b,f]),g=u((function(e){return v(e,h.current)}),S.shallowEqual),x=s(),y=b(x.getState(),h.current);return P((function(){h.current=y}),[y]),g};return{useQueryState:f,useQuerySubscription:t,useLazyQuerySubscription:d,useLazyQuery:function(e){var n=d(e),t=n[0],r=n[1],i=f(r,b(h({},e),{skip:r===O})),u=(0,w.useMemo)((function(){return{lastArg:r}}),[r]);return(0,w.useMemo)((function(){return[t,i,u]}),[t,i,u])},useQuery:function(e,n){var r=t(e,n),i=f(e,h({selectFromResult:e===C.skipToken||(null==n?void 0:n.skip)?void 0:Q},n));return(0,w.useMemo)((function(){return h(h({},i),r)}),[i,r])}}},buildMutationHook:function(e){return function(t){var s=void 0===t?{}:t,o=s.selectFromResult,a=void 0===o?D:o,c=s.fixedCacheKey,l=n.endpoints[e],d=l.select,f=l.initiate,m=i(),p=(0,w.useState)(),v=p[0],g=p[1];(0,w.useEffect)((function(){return function(){(null==v?void 0:v.arg.fixedCacheKey)||null==v||v.reset()}}),[v]);var x=(0,w.useCallback)((function(e){var n=m(f(e,{fixedCacheKey:c}));return g(n),n}),[m,f,c]),y=(v||{}).requestId,C=(0,w.useMemo)((function(){return(0,j.createSelector)([d({fixedCacheKey:c,requestId:null==v?void 0:v.requestId})],a)}),[d,v,a,c]),k=u(C,S.shallowEqual),N=null==c?null==v?void 0:v.arg.originalArgs:void 0,O=(0,w.useCallback)((function(){r((function(){v&&g(void 0),c&&m(n.internalActions.removeMutationResult({requestId:y,fixedCacheKey:c}))}))}),[m,c,v,y]),_=(0,w.useMemo)((function(){return b(h({},k),{originalArgs:N,reset:O})}),[k,N,O]);return(0,w.useMemo)((function(){return[x,_]}),[x,_])}},usePrefetch:function(e,t){var r=i(),u=R(t);return(0,w.useCallback)((function(t,i){return r(n.util.prefetch(e,t,h(h({},u),i)))}),[e,r,u])}};function l(e,n,t){if((null==n?void 0:n.endpointName)&&e.isUninitialized){var r=n.endpointName,i=a.endpointDefinitions[r];o({queryArgs:n.originalArgs,endpointDefinition:i,endpointName:r})===o({queryArgs:t,endpointDefinition:i,endpointName:r})&&(n=void 0)}var u=e.isSuccess?e.data:null==n?void 0:n.data;void 0===u&&(u=e.data);var s=void 0!==u,c=e.isLoading,l=!s&&c,d=e.isSuccess||c&&s;return b(h({},e),{data:u,currentData:e.data,isFetching:c,isLoading:l,isSuccess:d})}}({api:e,moduleOptions:{batch:r,useDispatch:u,useSelector:o,useStore:c,unstable__sideEffectsInRender:d},serializeQueryArgs:n.serializeQueryArgs,context:t}),a=s.buildQueryHooks,l=s.buildMutationHook;return M(i,{usePrefetch:s.usePrefetch}),M(t,{batch:r}),{injectEndpoint:function(n,t){if(t.type===F.query){var r=a(n),u=r.useQuery,s=r.useLazyQuery;M(i.endpoints[n],{useQuery:u,useLazyQuery:s,useLazyQuerySubscription:r.useLazyQuerySubscription,useQueryState:r.useQueryState,useQuerySubscription:r.useQuerySubscription}),e["use"+Z(n)+"Query"]=u,e["useLazy"+Z(n)+"Query"]=s}else if(t.type===F.mutation){var o=l(n);M(i.endpoints[n],{useMutation:o}),e["use"+Z(n)+"Mutation"]=o}}}}}};g(n,x(t(255)));var T=x(t(5273)),V=x(t(2791)),K=x(t(8687)),H=x(t(255));function B(e){var n=V.default.useState((function(){var n;return(0,T.configureStore)({reducer:(n={},n[e.api.reducerPath]=e.api.reducer,n),middleware:function(n){return n().concat(e.api.middleware)}})}))[0];return(0,H.setupListeners)(n.dispatch,e.setupListeners),V.default.createElement(K.Provider,{store:n,context:e.context},e.children)}var U=(0,y.buildCreateApi)((0,y.coreModule)(),L())}}]);
//# sourceMappingURL=802.704368c2.chunk.js.map