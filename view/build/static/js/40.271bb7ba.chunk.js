(self.webpackChunkcodeit=self.webpackChunkcodeit||[]).push([[40],{7040:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return Ce}});var n=o(2982),r=o(4165),a=o(5861),i=o(885),l=o(2791),s=o(7720),c="fileManager_fileManagerTitle__1brSK",d="fileManager_imageSize__bwq9N",u="fileManager_logs__Bf7tc",m="fileManager_fileManagerWrapper__Gh29A",p="fileManager_imageWrapper__15LLV",f="fileManager_imageIndex__zH4tn",v="fileManager_image__Px-j5",h="fileManager_ImageName__Jgloj",g="fileManager_noloadAll__3OLgR",x="fileManager_addItem__0Wl9P",Z="fileManager_addFileForm__FoJf-",S="fileManager_noImage__J52Fi",b="fileManager_yesImage__NJzvN",j="fileManager_imageDescription__1LxdQ",w="fileManager_customfileinput__3MFpy",_="fileManager_customfileinputempty__mjzG1",y="fileManager_alertMessage__XpXsf",M="fileManager_noAlertMessage__VTIRw",z=o(9478),C=o(7087),R=o(6015),N=o(4565),A=o(8349),I="modalFile_imgModalFile__HLKqC",k="modalFile_closeButton__w-+a4",L="modalFile_deleteButton__pO+Se",B="modalFile_downloadButton__4wBY5",F=o(5446),T=o(7205),P=o(788),O=o(7248),U=o(464),E=o(6468),W=o.n(E),D=o(184),V={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:420,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},H=function(e){var t=e.token,o=e.open,n=e.setOpen,s=e.imgInfo,c=e.imgStats,d=e.removeDeletedImage,u=e.setRefresh,m=(0,l.useState)(!1),p=(0,i.Z)(m,2),f=p[0],v=p[1],h=function(){v(!0)},g=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v(!1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.ZP.delete("/api/v1/images",{headers:{authorization:"Bearer "+t},data:{img:s}});case 2:return u((function(e){return!e})),e.next=5,g();case 5:n(!1),d(s);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,F.ZP)({url:"/api/v1/images/".concat(s),method:"GET",responseType:"blob"}).then((function(e){W()(e.data,s)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,D.jsxs)("div",{children:[(0,D.jsx)(A.Z,{open:o,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,D.jsxs)(R.Z,{sx:V,children:[(0,D.jsx)(N.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:"IMAGE INFO"}),(0,D.jsx)("img",{className:I,src:"".concat(z.Z,"/").concat(s)}),(0,D.jsxs)(N.Z,{id:"modal-modal-description",sx:{mt:2},children:[(0,D.jsxs)("div",{children:["Name : ",s]}),c?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)("div",{children:["Size : ",c.size," KB"]}),(0,D.jsxs)("div",{children:["Uploaded : ",c.date]})]}):"",(0,D.jsxs)("div",{children:[(0,D.jsx)("button",{onClick:function(){h()},className:L,children:"Delete"})," ","(Image will be Deleted)"]}),(0,D.jsxs)("div",{children:[(0,D.jsx)("button",{className:B,onClick:Z,children:"Donwload"})," (Download from Server)"]})]}),(0,D.jsx)("button",{className:k,onClick:function(){return n(!1)},children:"Close"})]})}),(0,D.jsx)("div",{children:(0,D.jsxs)(P.Z,{open:f,onClose:g,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,D.jsx)(U.Z,{id:"alert-dialog-title",children:'"Are you sure you want to delete this image ?"'}),(0,D.jsxs)(O.Z,{children:[(0,D.jsx)(T.Z,{onClick:g,children:"Disagree"}),(0,D.jsx)(T.Z,{onClick:x,autoFocus:!0,children:"Agree"})]})]})})]})},q=o(6989),G=o(4942),J=o(3366),K=o(7462),Y=o(8182),$=o(4419),X=o(2065),Q=o(6863),ee=o(5873),te=o(9853),oe=o(286),ne=o(5878),re=o(1217);function ae(e){return(0,re.Z)("MuiAlert",e)}var ie=(0,ne.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),le=o(3811),se=o(1245),ce=(0,se.Z)((0,D.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),de=(0,se.Z)((0,D.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),ue=(0,se.Z)((0,D.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),me=(0,se.Z)((0,D.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),pe=(0,se.Z)((0,D.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),fe=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],ve=(0,Q.ZP)(oe.Z,{name:"MuiAlert",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t[o.variant],t["".concat(o.variant).concat((0,te.Z)(o.color||o.severity))]]}})((function(e){var t=e.theme,o=e.ownerState,n="light"===t.palette.mode?X._j:X.$n,r="light"===t.palette.mode?X.$n:X._j,a=o.color||o.severity;return(0,K.Z)({},t.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},a&&"standard"===o.variant&&(0,G.Z)({color:t.vars?t.vars.palette.Alert["".concat(a,"Color")]:n(t.palette[a].light,.6),backgroundColor:t.vars?t.vars.palette.Alert["".concat(a,"StandardBg")]:r(t.palette[a].light,.9)},"& .".concat(ie.icon),t.vars?{color:t.vars.palette.Alert["".concat(a,"IconColor")]}:{color:"dark"===t.palette.mode?t.palette[a].main:t.palette[a].light}),a&&"outlined"===o.variant&&(0,G.Z)({color:t.vars?t.vars.palette.Alert["".concat(a,"Color")]:n(t.palette[a].light,.6),border:"1px solid ".concat((t.vars||t).palette[a].light)},"& .".concat(ie.icon),t.vars?{color:t.vars.palette.Alert["".concat(a,"IconColor")]}:{color:"dark"===t.palette.mode?t.palette[a].main:t.palette[a].light}),a&&"filled"===o.variant&&(0,K.Z)({fontWeight:t.typography.fontWeightMedium},t.vars?{color:t.vars.palette.Alert["".concat(a,"FilledColor")],backgroundColor:t.vars.palette.Alert["".concat(a,"FilledBg")]}:{backgroundColor:"dark"===t.palette.mode?t.palette[a].dark:t.palette[a].main,color:t.palette.getContrastText("dark"===t.palette.mode?t.palette[a].dark:t.palette[a].main)}))})),he=(0,Q.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:function(e,t){return t.icon}})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),ge=(0,Q.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:function(e,t){return t.message}})({padding:"8px 0",minWidth:0,overflow:"auto"}),xe=(0,Q.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:function(e,t){return t.action}})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),Ze={success:(0,D.jsx)(ce,{fontSize:"inherit"}),warning:(0,D.jsx)(de,{fontSize:"inherit"}),error:(0,D.jsx)(ue,{fontSize:"inherit"}),info:(0,D.jsx)(me,{fontSize:"inherit"})},Se=l.forwardRef((function(e,t){var o,n,r,a,i,l,s=(0,ee.Z)({props:e,name:"MuiAlert"}),c=s.action,d=s.children,u=s.className,m=s.closeText,p=void 0===m?"Close":m,f=s.color,v=s.components,h=void 0===v?{}:v,g=s.componentsProps,x=void 0===g?{}:g,Z=s.icon,S=s.iconMapping,b=void 0===S?Ze:S,j=s.onClose,w=s.role,_=void 0===w?"alert":w,y=s.severity,M=void 0===y?"success":y,z=s.slotProps,C=void 0===z?{}:z,R=s.slots,N=void 0===R?{}:R,A=s.variant,I=void 0===A?"standard":A,k=(0,J.Z)(s,fe),L=(0,K.Z)({},s,{color:f,severity:M,variant:I}),B=function(e){var t=e.variant,o=e.color,n=e.severity,r=e.classes,a={root:["root","".concat(t).concat((0,te.Z)(o||n)),"".concat(t)],icon:["icon"],message:["message"],action:["action"]};return(0,$.Z)(a,ae,r)}(L),F=null!=(o=null!=(n=N.closeButton)?n:h.CloseButton)?o:le.Z,T=null!=(r=null!=(a=N.closeIcon)?a:h.CloseIcon)?r:pe,P=null!=(i=C.closeButton)?i:x.closeButton,O=null!=(l=C.closeIcon)?l:x.closeIcon;return(0,D.jsxs)(ve,(0,K.Z)({role:_,elevation:0,ownerState:L,className:(0,Y.Z)(B.root,u),ref:t},k,{children:[!1!==Z?(0,D.jsx)(he,{ownerState:L,className:B.icon,children:Z||b[M]||Ze[M]}):null,(0,D.jsx)(ge,{ownerState:L,className:B.message,children:d}),null!=c?(0,D.jsx)(xe,{ownerState:L,className:B.action,children:c}):null,null==c&&j?(0,D.jsx)(xe,{ownerState:L,className:B.action,children:(0,D.jsx)(F,(0,K.Z)({size:"small","aria-label":p,title:p,color:"inherit",onClick:j},P,{children:(0,D.jsx)(T,(0,K.Z)({fontSize:"small"},O))}))}):null]}))}));function be(e){return(0,re.Z)("MuiAlertTitle",e)}(0,ne.Z)("MuiAlertTitle",["root"]);var je=["className"],we=(0,Q.ZP)(N.Z,{name:"MuiAlertTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{fontWeight:e.theme.typography.fontWeightMedium,marginTop:-2}})),_e=l.forwardRef((function(e,t){var o=(0,ee.Z)({props:e,name:"MuiAlertTitle"}),n=o.className,r=(0,J.Z)(o,je),a=o,i=function(e){var t=e.classes;return(0,$.Z)({root:["root"]},be,t)}(a);return(0,D.jsx)(we,(0,K.Z)({gutterBottom:!0,component:"div",ownerState:a,ref:t,className:(0,Y.Z)(i.root,n)},r))})),ye="imagesSize_imagesSize__6OoTq",Me=function(e){var t=e.refresh,o=(0,l.useState)(0),n=(0,i.Z)(o,2),r=n[0],a=n[1];return(0,l.useEffect)((function(){setTimeout((function(){(0,s.Yu)("/api/v1/images/get/all").then((function(e){return a(e.data.folder)}))}),500)}),[t]),(0,D.jsxs)("div",{className:ye,children:["Used :",(r/1e6).toFixed(2),"  MB"]})},ze=o(6871),Ce=function(){var e=(0,l.useState)([]),t=(0,i.Z)(e,2),o=t[0],R=t[1],N=(0,l.useState)(!1),A=(0,i.Z)(N,2),I=A[0],k=A[1],L=(0,l.useState)([]),B=(0,i.Z)(L,2),T=(B[0],B[1],(0,l.useState)({size:0,date:"no data"})),P=(0,i.Z)(T,2),O=P[0],U=P[1],E=(0,l.useContext)(q.V).token,W=(0,l.useState)("no data"),V=(0,i.Z)(W,2),G=V[0],J=V[1],K=(0,l.useState)(!1),Y=(0,i.Z)(K,2),$=Y[0],X=Y[1],Q=(0,l.useState)(""),ee=(0,i.Z)(Q,2),te=ee[0],oe=ee[1],ne=(0,l.useState)(!1),re=(0,i.Z)(ne,2),ae=re[0],ie=re[1],le=(0,l.useState)(!1),se=(0,i.Z)(le,2),ce=se[0],de=se[1],ue=(0,l.useState)(!1),me=(0,i.Z)(ue,2),pe=me[0],fe=me[1],ve=(0,ze.s0)(),he=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.$S)({img:t},"/api/v1/images",E).then((function(e){return U(e.data)}));case 2:J(t),k(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){(0,s.Yu)("/api/v1/images").then((function(e){return R(e.data.files)}))}),[]);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)("div",{className:c,children:["FILE MANAGER ",(0,D.jsxs)("span",{className:d,children:[(0,D.jsx)(Me,{refresh:pe}),(0,D.jsx)("span",{className:u,onClick:function(){ve("/Admin/Logs")},children:"History"})]})]}),(0,D.jsxs)("div",{className:ae?y:M,children:[" ",(0,D.jsxs)(Se,{severity:"success",children:[(0,D.jsx)(_e,{children:"Success"}),"Image Uploaded"]})]}),(0,D.jsx)("div",{children:(0,D.jsx)("button",{className:x,onClick:function(){return X((function(e){return!e}))},children:$?"Close":"Add New File"})}),(0,D.jsx)("div",{className:$?Z:g,children:(0,D.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),te){var t=new FormData;t.append("img",te);var o={headers:{authorization:"Bearer "+E}};F.ZP.post("/api/v1/mycloud",t,o),setTimeout((function(){R((function(e){return[].concat((0,n.Z)(e),[te.name])}))}),200),fe((function(e){return!e})),ie(!0),de(!0),setTimeout((function(){ie(!1),de(!1)}),4e3)}else alert("Please Upload Image")},children:(0,D.jsxs)("div",{id:"upload",children:[(0,D.jsx)("input",{type:"file",className:te?w:_,onChange:function(e){return oe(e.target.files[0])}}),(0,D.jsx)("div",{className:j,children:"(Up to 10mb and no conversion of format )"}),(0,D.jsx)("input",{className:te?b:S,disabled:ce,type:"submit",value:te?"Send":"Please Upload Image"})]})})}),(0,D.jsx)("div",{className:m,children:o.map((function(e,t){return console.log(e),(0,D.jsx)("div",{className:p,children:(0,D.jsxs)("div",{className:f,onClick:function(){return he(e)},children:[(0,D.jsx)(C.LazyLoadImage,{effect:"blur",className:v,src:"".concat(z.Z,"/").concat(e)}),(0,D.jsxs)("div",{className:h,children:["See Info ",(0,D.jsx)("div",{children:e})," "]})]})},e)}))}),(0,D.jsx)(H,{token:E,open:I,setOpen:k,imgInfo:G,imgStats:O,removeDeletedImage:function(e){var t=o.indexOf(e);t>-1&&(o.splice(t,1),R(o))},setRefresh:fe}),";"]})}},3811:function(e,t,o){"use strict";o.d(t,{Z:function(){return b}});var n=o(4942),r=o(3366),a=o(7462),i=o(2791),l=o(8182),s=o(4419),c=o(2065),d=o(6863),u=o(5873),m=o(4192),p=o(9853),f=o(5878),v=o(1217);function h(e){return(0,v.Z)("MuiIconButton",e)}var g=(0,f.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),x=o(184),Z=["edge","children","className","color","disabled","disableFocusRipple","size"],S=(0,d.ZP)(m.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,"default"!==o.color&&t["color".concat((0,p.Z)(o.color))],o.edge&&t["edge".concat((0,p.Z)(o.edge))],t["size".concat((0,p.Z)(o.size))]]}})((function(e){var t=e.theme,o=e.ownerState;return(0,a.Z)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!o.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,c.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===o.edge&&{marginLeft:"small"===o.size?-3:-12},"end"===o.edge&&{marginRight:"small"===o.size?-3:-12})}),(function(e){var t,o=e.theme,r=e.ownerState,i=null==(t=(o.vars||o).palette)?void 0:t[r.color];return(0,a.Z)({},"inherit"===r.color&&{color:"inherit"},"inherit"!==r.color&&"default"!==r.color&&(0,a.Z)({color:null==i?void 0:i.main},!r.disableRipple&&{"&:hover":(0,a.Z)({},i&&{backgroundColor:o.vars?"rgba(".concat(i.mainChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,c.Fq)(i.main,o.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===r.size&&{padding:5,fontSize:o.typography.pxToRem(18)},"large"===r.size&&{padding:12,fontSize:o.typography.pxToRem(28)},(0,n.Z)({},"&.".concat(g.disabled),{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled}))})),b=i.forwardRef((function(e,t){var o=(0,u.Z)({props:e,name:"MuiIconButton"}),n=o.edge,i=void 0!==n&&n,c=o.children,d=o.className,m=o.color,f=void 0===m?"default":m,v=o.disabled,g=void 0!==v&&v,b=o.disableFocusRipple,j=void 0!==b&&b,w=o.size,_=void 0===w?"medium":w,y=(0,r.Z)(o,Z),M=(0,a.Z)({},o,{edge:i,color:f,disabled:g,disableFocusRipple:j,size:_}),z=function(e){var t=e.classes,o=e.disabled,n=e.color,r=e.edge,a=e.size,i={root:["root",o&&"disabled","default"!==n&&"color".concat((0,p.Z)(n)),r&&"edge".concat((0,p.Z)(r)),"size".concat((0,p.Z)(a))]};return(0,s.Z)(i,h,t)}(M);return(0,x.jsx)(S,(0,a.Z)({className:(0,l.Z)(z.root,d),centerRipple:!0,focusRipple:!j,disabled:g,ref:t,ownerState:M},y,{children:c}))}))},1245:function(e,t,o){"use strict";o.d(t,{Z:function(){return Z}});var n=o(7462),r=o(2791),a=o(3366),i=o(8182),l=o(4419),s=o(9853),c=o(5873),d=o(6863),u=o(5878),m=o(1217);function p(e){return(0,m.Z)("MuiSvgIcon",e)}(0,u.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var f=o(184),v=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],h=(0,d.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,"inherit"!==o.color&&t["color".concat((0,s.Z)(o.color))],t["fontSize".concat((0,s.Z)(o.fontSize))]]}})((function(e){var t,o,n,r,a,i,l,s,c,d,u,m,p,f,v,h,g,x=e.theme,Z=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(t=x.transitions)||null==(o=t.create)?void 0:o.call(t,"fill",{duration:null==(n=x.transitions)||null==(r=n.duration)?void 0:r.shorter}),fontSize:{inherit:"inherit",small:(null==(a=x.typography)||null==(i=a.pxToRem)?void 0:i.call(a,20))||"1.25rem",medium:(null==(l=x.typography)||null==(s=l.pxToRem)?void 0:s.call(l,24))||"1.5rem",large:(null==(c=x.typography)||null==(d=c.pxToRem)?void 0:d.call(c,35))||"2.1875rem"}[Z.fontSize],color:null!=(u=null==(m=(x.vars||x).palette)||null==(p=m[Z.color])?void 0:p.main)?u:{action:null==(f=(x.vars||x).palette)||null==(v=f.action)?void 0:v.active,disabled:null==(h=(x.vars||x).palette)||null==(g=h.action)?void 0:g.disabled,inherit:void 0}[Z.color]}})),g=r.forwardRef((function(e,t){var o=(0,c.Z)({props:e,name:"MuiSvgIcon"}),r=o.children,d=o.className,u=o.color,m=void 0===u?"inherit":u,g=o.component,x=void 0===g?"svg":g,Z=o.fontSize,S=void 0===Z?"medium":Z,b=o.htmlColor,j=o.inheritViewBox,w=void 0!==j&&j,_=o.titleAccess,y=o.viewBox,M=void 0===y?"0 0 24 24":y,z=(0,a.Z)(o,v),C=(0,n.Z)({},o,{color:m,component:x,fontSize:S,instanceFontSize:e.fontSize,inheritViewBox:w,viewBox:M}),R={};w||(R.viewBox=M);var N=function(e){var t=e.color,o=e.fontSize,n=e.classes,r={root:["root","inherit"!==t&&"color".concat((0,s.Z)(t)),"fontSize".concat((0,s.Z)(o))]};return(0,l.Z)(r,p,n)}(C);return(0,f.jsxs)(h,(0,n.Z)({as:x,className:(0,i.Z)(N.root,d),focusable:"false",color:b,"aria-hidden":!_||void 0,role:_?"img":void 0,ref:t},R,z,{ownerState:C,children:[r,_?(0,f.jsx)("title",{children:_}):null]}))}));g.muiName="SvgIcon";var x=g;function Z(e,t){function o(o,r){return(0,f.jsx)(x,(0,n.Z)({"data-testid":"".concat(t,"Icon"),ref:r},o,{children:e}))}return o.muiName=x.muiName,r.memo(r.forwardRef(o))}},6468:function(e){e.exports=function(e,t,o,n){var r=new Blob("undefined"!==typeof n?[n,e]:[e],{type:o||"application/octet-stream"});if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(r,t);else{var a=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(r):window.webkitURL.createObjectURL(r),i=document.createElement("a");i.style.display="none",i.href=a,i.setAttribute("download",t),"undefined"===typeof i.download&&i.setAttribute("target","_blank"),document.body.appendChild(i),i.click(),setTimeout((function(){document.body.removeChild(i),window.URL.revokeObjectURL(a)}),200)}}}}]);
//# sourceMappingURL=40.271bb7ba.chunk.js.map