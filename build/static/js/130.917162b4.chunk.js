"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[130],{25212:function(e,r,n){var i=n(1413),t=n(45987),a=n(52007),s=n.n(a),c=n(6907),o=n(72791),l=n(64554),u=n(80184),d=["children","title"],f=(0,o.forwardRef)((function(e,r){var n=e.children,a=e.title,s=void 0===a?"":a,o=(0,t.Z)(e,d);return(0,u.jsxs)(l.Z,(0,i.Z)((0,i.Z)({ref:r},o),{},{children:[(0,u.jsx)(c.q,{children:(0,u.jsx)("title",{children:s})}),n]}))}));f.propTypes={children:s().node.isRequired,title:s().string},r.Z=f},2130:function(e,r,n){n.r(r),n.d(r,{default:function(){return O}});var i=n(70885),t=n(72791),a=n(26445),s=n(64554),c=n(20890),o=n(61889),l=n(25212),u=n(1413),d=n(45987),f=n(75952),h=n(57621),x=n(9585),m=n(39504),j=n(72363),Z=n(56125),p=n(93044),v=n(47630),b=n(13400),k=n(82460),g=n(81131),_=n(80184),y=["expand"],C=(0,v.ZP)((function(e){e.expand;var r=(0,d.Z)(e,y);return(0,_.jsx)(b.Z,(0,u.Z)({},r))}))((function(e){var r=e.theme;return{transform:e.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:r.transitions.create("transform",{duration:r.transitions.duration.shortest})}}));var E=function(e){var r=e.customer,n=t.useState(!1),a=(0,i.Z)(n,2),o=a[0],l=a[1];return(0,_.jsxs)(h.Z,{sx:{maxWidth:"90%"},children:[(0,_.jsx)(x.Z,{avatar:(0,_.jsx)(p.Z,{sx:{bgcolor:k.Z[500]},"aria-label":"recipe",children:(0,f.I)(r.user[0])}),title:(0,f.I)(r.user),subheader:r.email}),(0,_.jsxs)(j.Z,{disableSpacing:!0,children:[(0,_.jsxs)(c.Z,{variant:"body2",children:["Expand to read ",(0,f.I)(r.user.split(" ")[0]),"'s feedbacks"]}),(0,_.jsx)(C,{expand:o,onClick:function(){l(!o)},"aria-expanded":o,"aria-label":"show more",children:(0,_.jsx)(g.Z,{})})]}),(0,_.jsx)(Z.Z,{in:o,timeout:"auto",unmountOnExit:!0,children:(0,_.jsx)(m.Z,{children:r.feedbacks.map((function(e,r){return(0,_.jsxs)(s.Z,{children:[(0,_.jsx)(c.Z,{paragraph:!0,children:(0,_.jsx)("strong",{children:"Feedback"})}),(0,_.jsx)(c.Z,{paragraph:!0,children:e.message})]},r)}))})})]})},w=n(14963),I=n(80408);var O=function(){var e=(0,t.useState)([]),r=(0,i.Z)(e,2),n=r[0],u=r[1],d=(0,w.$)().database;return(0,t.useEffect)((function(){(0,I.jM)((0,I.iH)(d,"VerifiedUsers/User"),(function(e){var r=e.val(),n=[];Object.keys(r).forEach((function(e){var i=r[e];i.uid=e,n.push(i)})),(0,I.jM)((0,I.iH)(d,"VerifiedUsers/Feedbacks"),(function(e){var r=e.val(),i=[];Object.keys(r).forEach((function(e){var n=r[e];n.uid=e,i.push(n)})),console.log(i);var t=[];n.forEach((function(e){var r=i.filter((function(r){return r.email.split("@")[0].normalize()===e.email.split("@")[0].normalize()}));e.feedbacks=r,t.push(e)})),u((function(e){return t}))}))}))}),[d]),console.log(n),(0,_.jsx)(l.Z,{title:"Droidcut | Customers",children:(0,_.jsxs)(a.Z,{children:[(0,_.jsx)(s.Z,{sx:{display:"flex",justifyContent:"start"},children:(0,_.jsx)(c.Z,{variant:"h4",children:"Customers"})}),(0,_.jsx)(o.ZP,{container:!0,spacing:3,sx:{mt:3},children:n.map((function(e){return(0,_.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,_.jsx)(E,{customer:e})},e.email)}))})]})})}}}]);
//# sourceMappingURL=130.917162b4.chunk.js.map