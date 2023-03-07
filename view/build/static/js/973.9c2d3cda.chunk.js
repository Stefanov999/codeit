"use strict";(self.webpackChunkcodeit=self.webpackChunkcodeit||[]).push([[973],{7248:function(e,r,o){o.d(r,{Z:function(){return h}});var n=o(3366),a=o(7462),t=o(2791),i=o(8182),l=o(4419),c=o(6863),s=o(5873),p=o(5878),d=o(1217);function u(e){return(0,d.Z)("MuiDialogActions",e)}(0,p.Z)("MuiDialogActions",["root","spacing"]);var f=o(184),m=["className","disableSpacing"],v=(0,c.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,r){var o=e.ownerState;return[r.root,!o.disableSpacing&&r.spacing]}})((function(e){var r=e.ownerState;return(0,a.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!r.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),h=t.forwardRef((function(e,r){var o=(0,s.Z)({props:e,name:"MuiDialogActions"}),t=o.className,c=o.disableSpacing,p=void 0!==c&&c,d=(0,n.Z)(o,m),h=(0,a.Z)({},o,{disableSpacing:p}),Z=function(e){var r=e.classes,o={root:["root",!e.disableSpacing&&"spacing"]};return(0,l.Z)(o,u,r)}(h);return(0,f.jsx)(v,(0,a.Z)({className:(0,i.Z)(Z.root,t),ownerState:h,ref:r},d))}))},464:function(e,r,o){var n=o(7462),a=o(3366),t=o(2791),i=o(8182),l=o(4419),c=o(4565),s=o(6863),p=o(5873),d=o(5186),u=o(3053),f=o(184),m=["className","id"],v=(0,s.ZP)(c.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,r){return r.root}})({padding:"16px 24px",flex:"0 0 auto"}),h=t.forwardRef((function(e,r){var o=(0,p.Z)({props:e,name:"MuiDialogTitle"}),c=o.className,s=o.id,h=(0,a.Z)(o,m),Z=o,x=function(e){var r=e.classes;return(0,l.Z)({root:["root"]},d.a,r)}(Z),g=t.useContext(u.Z).titleId,b=void 0===g?s:g;return(0,f.jsx)(v,(0,n.Z)({component:"h2",className:(0,i.Z)(x.root,c),ownerState:Z,ref:r,variant:"h6",id:b},h))}));r.Z=h},5186:function(e,r,o){o.d(r,{a:function(){return t}});var n=o(5878),a=o(1217);function t(e){return(0,a.Z)("MuiDialogTitle",e)}var i=(0,n.Z)("MuiDialogTitle",["root"]);r.Z=i},788:function(e,r,o){o.d(r,{Z:function(){return M}});var n=o(4942),a=o(3366),t=o(7462),i=o(2791),l=o(8182),c=o(4419),s=o(6248),p=o(9853),d=o(8349),u=o(7428),f=o(286),m=o(5873),v=o(6863),h=o(5878),Z=o(1217);function x(e){return(0,Z.Z)("MuiDialog",e)}var g=(0,h.Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),b=o(3053),S=o(5112),W=o(4142),k=o(184),w=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],y=(0,v.ZP)(S.Z,{name:"MuiDialog",slot:"Backdrop",overrides:function(e,r){return r.backdrop}})({zIndex:-1}),D=(0,v.ZP)(d.Z,{name:"MuiDialog",slot:"Root",overridesResolver:function(e,r){return r.root}})({"@media print":{position:"absolute !important"}}),P=(0,v.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:function(e,r){var o=e.ownerState;return[r.container,r["scroll".concat((0,p.Z)(o.scroll))]]}})((function(e){var r=e.ownerState;return(0,t.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===r.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===r.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})})),C=(0,v.ZP)(f.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:function(e,r){var o=e.ownerState;return[r.paper,r["scrollPaper".concat((0,p.Z)(o.scroll))],r["paperWidth".concat((0,p.Z)(String(o.maxWidth)))],o.fullWidth&&r.paperFullWidth,o.fullScreen&&r.paperFullScreen]}})((function(e){var r=e.theme,o=e.ownerState;return(0,t.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===o.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===o.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!o.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===o.maxWidth&&(0,n.Z)({maxWidth:"px"===r.breakpoints.unit?Math.max(r.breakpoints.values.xs,444):"".concat(r.breakpoints.values.xs).concat(r.breakpoints.unit)},"&.".concat(g.paperScrollBody),(0,n.Z)({},r.breakpoints.down(Math.max(r.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})),o.maxWidth&&"xs"!==o.maxWidth&&(0,n.Z)({maxWidth:"".concat(r.breakpoints.values[o.maxWidth]).concat(r.breakpoints.unit)},"&.".concat(g.paperScrollBody),(0,n.Z)({},r.breakpoints.down(r.breakpoints.values[o.maxWidth]+64),{maxWidth:"calc(100% - 64px)"})),o.fullWidth&&{width:"calc(100% - 64px)"},o.fullScreen&&(0,n.Z)({margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0},"&.".concat(g.paperScrollBody),{margin:0,maxWidth:"100%"}))})),M=i.forwardRef((function(e,r){var o=(0,m.Z)({props:e,name:"MuiDialog"}),n=(0,W.Z)(),d={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},v=o["aria-describedby"],h=o["aria-labelledby"],Z=o.BackdropComponent,g=o.BackdropProps,S=o.children,M=o.className,B=o.disableEscapeKeyDown,R=void 0!==B&&B,N=o.fullScreen,T=void 0!==N&&N,j=o.fullWidth,A=void 0!==j&&j,F=o.maxWidth,I=void 0===F?"sm":F,E=o.onBackdropClick,K=o.onClose,X=o.open,Y=o.PaperComponent,H=void 0===Y?f.Z:Y,L=o.PaperProps,z=void 0===L?{}:L,q=o.scroll,G=void 0===q?"paper":q,J=o.TransitionComponent,O=void 0===J?u.Z:J,Q=o.transitionDuration,U=void 0===Q?d:Q,V=o.TransitionProps,$=(0,a.Z)(o,w),_=(0,t.Z)({},o,{disableEscapeKeyDown:R,fullScreen:T,fullWidth:A,maxWidth:I,scroll:G}),ee=function(e){var r=e.classes,o=e.scroll,n=e.maxWidth,a=e.fullWidth,t=e.fullScreen,i={root:["root"],container:["container","scroll".concat((0,p.Z)(o))],paper:["paper","paperScroll".concat((0,p.Z)(o)),"paperWidth".concat((0,p.Z)(String(n))),a&&"paperFullWidth",t&&"paperFullScreen"]};return(0,c.Z)(i,x,r)}(_),re=i.useRef(),oe=(0,s.Z)(h),ne=i.useMemo((function(){return{titleId:oe}}),[oe]);return(0,k.jsx)(D,(0,t.Z)({className:(0,l.Z)(ee.root,M),closeAfterTransition:!0,components:{Backdrop:y},componentsProps:{backdrop:(0,t.Z)({transitionDuration:U,as:Z},g)},disableEscapeKeyDown:R,onClose:K,open:X,ref:r,onClick:function(e){re.current&&(re.current=null,E&&E(e),K&&K(e,"backdropClick"))},ownerState:_},$,{children:(0,k.jsx)(O,(0,t.Z)({appear:!0,in:X,timeout:U,role:"presentation"},V,{children:(0,k.jsx)(P,{className:(0,l.Z)(ee.container),onMouseDown:function(e){re.current=e.target===e.currentTarget},ownerState:_,children:(0,k.jsx)(C,(0,t.Z)({as:H,elevation:24,role:"dialog","aria-describedby":v,"aria-labelledby":oe},z,{className:(0,l.Z)(ee.paper,z.className),ownerState:_,children:(0,k.jsx)(b.Z.Provider,{value:ne,children:S})}))})}))}))}))},3053:function(e,r,o){var n=(0,o(2791).createContext)({});r.Z=n},6248:function(e,r,o){var n;o.d(r,{Z:function(){return c}});var a=o(885),t=o(2791),i=0;var l=(n||(n=o.t(t,2))).useId;function c(e){if(void 0!==l){var r=l();return null!=e?e:r}return function(e){var r=t.useState(e),o=(0,a.Z)(r,2),n=o[0],l=o[1],c=e||n;return t.useEffect((function(){null==n&&l("mui-".concat(i+=1))}),[n]),c}(e)}}}]);
//# sourceMappingURL=973.9c2d3cda.chunk.js.map