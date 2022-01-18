"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[455],{41758:function(e,r,t){t.d(r,{Z:function(){return d}});var n=t(45987),i=t(1413),a=t(47630),o=t(12065),l=t(80184),c=["color","variant","children"],s=(0,a.ZP)("span")((function(e){var r=e.theme,t=e.ownerState,n=t.color,a=t.variant;return(0,i.Z)({height:22,minWidth:22,lineHeight:0,borderRadius:8,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",padding:r.spacing(0,1),color:r.palette.grey[800],fontSize:r.typography.pxToRem(12),fontFamily:r.typography.fontFamily,backgroundColor:r.palette.grey[300],fontWeight:r.typography.fontWeightBold},"default"!==n?(0,i.Z)((0,i.Z)((0,i.Z)({},"filled"===a&&(0,i.Z)({},function(e){return{color:r.palette[e].contrastText,backgroundColor:r.palette[e].main}}(n))),"outlined"===a&&(0,i.Z)({},function(e){return{color:r.palette[e].main,backgroundColor:"transparent",border:"1px solid ".concat(r.palette[e].main)}}(n))),"ghost"===a&&(0,i.Z)({},function(e){return{color:r.palette[e].dark,backgroundColor:(0,o.Fq)(r.palette[e].main,.16)}}(n))):(0,i.Z)((0,i.Z)({},"outlined"===a&&{backgroundColor:"transparent",color:r.palette.text.primary,border:"1px solid ".concat(r.palette.grey[50032])}),"ghost"===a&&{color:r.palette.text.secondary,backgroundColor:r.palette.grey[50016]}))}));function d(e){var r=e.color,t=void 0===r?"default":r,a=e.variant,o=void 0===a?"ghost":a,d=e.children,u=(0,n.Z)(e,c);return(0,l.jsx)(s,(0,i.Z)((0,i.Z)({ownerState:{color:t,variant:o}},u),{},{children:d}))}},25212:function(e,r,t){var n=t(1413),i=t(45987),a=t(52007),o=t.n(a),l=t(6907),c=t(72791),s=t(64554),d=t(80184),u=["children","title"],h=(0,c.forwardRef)((function(e,r){var t=e.children,a=e.title,o=void 0===a?"":a,c=(0,i.Z)(e,u);return(0,d.jsxs)(s.Z,(0,n.Z)((0,n.Z)({ref:r},c),{},{children:[(0,d.jsx)(l.q,{children:(0,d.jsx)("title",{children:o})}),t]}))}));h.propTypes={children:o().node.isRequired,title:o().string},r.Z=h},7579:function(e,r,t){t.d(r,{Z:function(){return p}});var n=t(1413),i=t(45987),a=t(34358),o=t(47630),l=t(12065),c=t(64554),s=t(80184),d=["children","sx"],u=(0,o.ZP)("div")({flexGrow:1,height:"100%",overflow:"hidden"}),h=(0,o.ZP)(a.Z)((function(e){var r=e.theme;return{maxHeight:"100%","& .simplebar-scrollbar":{"&:before":{backgroundColor:(0,l.Fq)(r.palette.grey[600],.48)},"&.simplebar-visible:before":{opacity:1}},"& .simplebar-track.simplebar-vertical":{width:10},"& .simplebar-track.simplebar-horizontal .simplebar-scrollbar":{height:6},"& .simplebar-mask":{zIndex:"inherit"}}}));function p(e){var r=e.children,t=e.sx,a=(0,i.Z)(e,d);return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(0,s.jsx)(c.Z,(0,n.Z)((0,n.Z)({sx:(0,n.Z)({overflowX:"auto"},t)},a),{},{children:r})):(0,s.jsx)(u,{children:(0,s.jsx)(h,(0,n.Z)((0,n.Z)({timeout:500,clickOnTrack:!1,sx:t},a),{},{children:r}))})}},45455:function(e,r,t){t.r(r),t.d(r,{default:function(){return O}});var n=t(70885),i=t(72791),a=t(29388),o=t(17254),l=t(48652);function c(e,r){var t=e.toLowerCase();return 0===r?(0,l.l)(t):t}var s=t(28938),d=t(26445),u=t(64554),h=t(20890),p=t(57621),Z=t(79836),g=t(53382),f=t(53994),x=t(39281),m=t(56890),j=t(63033),b=t(35855),v=t(47630),y=t(34663),k=t(25212),w=t(7579),C=t(41758),P=t(14963),S=t(80408),_=t(30012),H=t(80184),I=(0,v.ZP)(y.Z)((function(e){return{height:96,display:"flex",justifyContent:"space-between",padding:e.theme.spacing(0,1,0,3)}}));var O=function(){var e=(0,P.$)(),r=e.database,t=e.username,l=i.useState([]),v=(0,n.Z)(l,2),y=v[0],O=v[1],R=i.useState(0),T=(0,n.Z)(R,2),q=T[0],B=T[1],F=i.useState(5),W=(0,n.Z)(F,2),z=W[0],A=W[1],E=i.useState([]),M=(0,n.Z)(E,2),L=M[0],N=M[1];return i.useEffect((function(){(0,S.jM)((0,S.iH)(r,"VerifiedUsers/Schedule/History"),(function(e){var r=e.val(),n=new _.Z;n.convertObjectToArray(r),O((function(e){return n.getUserHistory(t)}))}))}),[r,t]),i.useEffect((function(){var e=function(e,r,t){return e.slice(r*t,r*t+t)}(y,q,z);N((function(r){return e}))}),[q,z,y]),(0,H.jsx)(k.Z,{title:"Droidcut | History",children:(0,H.jsxs)(d.Z,{children:[(0,H.jsx)(u.Z,{sx:{display:"flex",justifyContent:"start",alignItems:"center",mb:5},children:(0,H.jsx)(h.Z,{variant:"h4",children:"History"})}),(0,H.jsxs)(p.Z,{children:[(0,H.jsx)(I,{children:(0,H.jsx)(h.Z,{component:"div",variant:"subtitle1",children:"History List"})}),(0,H.jsx)(w.Z,{children:(0,H.jsx)(x.Z,{sx:{minWidth:800},children:(0,H.jsxs)(Z.Z,{"aria-label":"simple table",children:[(0,H.jsx)(m.Z,{children:(0,H.jsxs)(b.Z,{children:[(0,H.jsx)(f.Z,{children:"Customer Name"}),(0,H.jsx)(f.Z,{align:"right",children:"Haircut"}),(0,H.jsx)(f.Z,{align:"right",children:"Contact Number"}),(0,H.jsx)(f.Z,{align:"right",children:"Schedule"}),(0,H.jsx)(f.Z,{align:"right",children:"Status"})]})}),(0,H.jsx)(g.Z,{children:L.map((function(e,r){return(0,H.jsxs)(b.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,H.jsx)(f.Z,{component:"th",scope:"row",children:(0,s.e)(e.scheduled_by)}),(0,H.jsx)(f.Z,{align:"right",children:(0,s.e)(e.haircut)}),(0,H.jsx)(f.Z,{align:"right",children:e.contact_number}),(0,H.jsx)(f.Z,{align:"right",children:e.schedule_datetime}),(0,H.jsx)(f.Z,{align:"right",children:(0,H.jsx)(C.Z,{variant:"ghost",color:"Cancelled"===e.status?"error":"success",children:(t=e.status,void 0===n&&(n={}),(0,o.B)(t,(0,a.pi)({delimiter:" ",transform:c},n)))})})]},r);var t,n}))})]})})}),(0,H.jsx)(u.Z,{p:2,children:(0,H.jsx)(j.Z,{component:"div",count:y.length,onPageChange:function(e,r){B(r)},onRowsPerPageChange:function(e){A(parseInt(e.target.value))},page:q,rowsPerPage:z,rowsPerPageOptions:[5,10,25,30]})})]})]})})}}}]);
//# sourceMappingURL=455.2f93cf41.chunk.js.map