(this.webpackJsonptop_memory_card_game=this.webpackJsonptop_memory_card_game||[]).push([[0],{14:function(e,c,r){"use strict";r.r(c);var t=r(0),a=r(1),n=r.n(a),s=r(6),o=r.n(s),i=r(3);var d=function(e){var c=e.score,r=e.hiScore;return Object(t.jsxs)("header",{children:[Object(t.jsx)("h1",{children:"Memory Card Game"}),Object(t.jsx)("h2",{children:"The Big Brain Game Of 2020"}),Object(t.jsxs)("div",{id:"score-board",children:[Object(t.jsxs)("p",{children:["Current Score: ",c]}),Object(t.jsxs)("p",{children:["High Score: ",r]})]}),Object(t.jsx)("hr",{})]})},j=r(7),l=r(8);var h=function(e){var c=e.name,r=e.desc,a=e.url,n=e.select;return Object(t.jsxs)("li",{onClick:function(){return n(c)},children:[Object(t.jsx)("img",{alt:r,src:a}),Object(t.jsx)("h4",{children:c})]})};var u=function(e){var c=e.score,r=e.setScore,n=e.hiScore,s=e.setHiScore,o=Object(a.useState)([]),d=Object(i.a)(o,2),u=d[0],b=d[1],O=Object(a.useState)([]),m=Object(i.a)(O,2),v=m[0],x=m[1];return Object(a.useEffect)((function(){var a,o=function(e){v.includes(e)?(c>n&&s(c),r(0),x([])):(x((function(c){return[].concat(Object(l.a)(c),[e])})),r((function(e){return e+1})))},i=[],d=Object(j.a)(e.cards);try{for(d.s();!(a=d.n()).done;){var u=a.value,O=void 0;do{O=Math.floor(Math.random()*e.cards.length)}while(void 0!==i[O]);i[O]=Object(t.jsx)(h,{name:u.name,desc:u.desc,url:u.url,select:o},u.name)}}catch(m){d.e(m)}finally{d.f()}b(i)}),[e.cards,v,c,r,n,s]),Object(t.jsx)("div",{id:"card-list",children:Object(t.jsx)("ul",{children:u})})},b=[{name:"Chris Bolas",desc:"A cool guy",url:"http://via.placeholder.com/200"},{name:"Christina Mitchell",desc:"My amazing lady",url:"http://via.placeholder.com/200"},{name:"Darude Storm",desc:"A pretty rad song.",url:"http://via.placeholder.com/200"}];var O=function(){var e=Object(a.useState)(0),c=Object(i.a)(e,2),r=c[0],n=c[1],s=Object(a.useState)(0),o=Object(i.a)(s,2),j=o[0],l=o[1];return Object(t.jsxs)("div",{children:[Object(t.jsx)(d,{score:r,hiScore:j}),Object(t.jsx)(u,{cards:b,score:r,setScore:n,hiScore:j,setHiScore:l})]})};o.a.render(Object(t.jsx)(n.a.StrictMode,{children:Object(t.jsx)(O,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f0aa51f8.chunk.js.map