(this["webpackJsonpphrases-breaking-bad"]=this["webpackJsonpphrases-breaking-bad"]||[]).push([[0],{10:function(n,e,t){n.exports=t(17)},15:function(n,e,t){},17:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(6),i=t.n(o),c=(t(15),t(4)),u=t.n(c),s=t(7),l=t(3),f=t(1),d=t(2);function m(){var n=Object(f.a)(["\n    padding: 2rem;\n    border-radius: .1rem;\n    background-color: transparent;\n    max-width:30rem;\n    border:solid 2px black;    \n    @media (min-width: 992px) {\n        margin-top: 14rem;\n    }\n    h2 {\n        font-family: Arial, Helvetica, sans-serif;\n        text-align: center;\n        position: relative;\n        padding-left: 4rem;\n        color:white;\n        &::before {\n            content: open-quote;\n            font-size: 8rem;\n            color: white;\n            position: absolute;\n            left: -1rem;\n            top: -2rem;\n        }\n    }\n    p {\n        font-family: Verdana, Geneva, Tahoma, sans-serif;\n        font-size: 1rem;\n        font-weight:lighter;\n        font-style:italic;\n        text-align: right;\n        color: white;\n        margin-top: 2rem;\n    }\n"]);return m=function(){return n},n}var p=d.a.div(m()),b=function(n){var e=n.phrases;return a.a.createElement(p,null,a.a.createElement("h2",null,e.quote),a.a.createElement("p",null,e.author))};function h(){var n=Object(f.a)(["\n  width:20rem;\n  display:flex;\n  flex-direction:row;\n  justify-content:space-around;\n  align-content:center;\n  align-items:center;\n"]);return h=function(){return n},n}function g(){var n=Object(f.a)(["\n  background: -webkit-linear-gradient(\n    top left,\n    #007d35 0%,\n    #007d35 40%,\n    #0f574e 100%\n  );\n  background-size: 300px;\n  font-family: Arial, Helvetica, sans-serif;\n  color: #fff;\n  width:8rem;\n  margin-top:2rem;\n  padding: 2;\n  font-size: 1.2em;\n  border: 2px solid black;\n  transition: background-size 0.8s ease;\n  height:4rem;\n  :hover {\n    cursor: pointer;\n    background-size: 400px;\n  }\n"]);return g=function(){return n},n}function v(){var n=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  padding-top: 5rem;\n  flex-direction: column;\n"]);return v=function(){return n},n}var w=d.a.div(v()),k=d.a.button(g()),j=d.a.div(h()),x=function(n){var e=function(n){var e=Object(r.useState)(new Audio("https://www.mboxdrive.com/breaking-bad.mp3")),t=Object(l.a)(e,1)[0],a=Object(r.useState)(!1),o=Object(l.a)(a,2),i=o[0],c=o[1];return Object(r.useEffect)((function(){i?t.play():t.pause()}),[i,t]),Object(r.useEffect)((function(){return t.addEventListener("ended",(function(){return c(!1)})),function(){t.removeEventListener("ended",(function(){return c(!1)}))}}),[t]),[i,function(){return c(!i)}]}(),t=Object(l.a)(e,2),o=t[0],i=t[1],c=Object(r.useState)({}),f=Object(l.a)(c,2),d=f[0],m=f[1],p=function(){var n=Object(s.a)(u.a.mark((function n(){var e,t;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,m(t[0]);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(r.useEffect)((function(){p()}),[]),a.a.createElement(w,null,a.a.createElement(b,{phrases:d}),a.a.createElement(j,null,a.a.createElement(k,{onClick:p},"Get Phrase"),a.a.createElement(k,{onClick:i},o?"Pause":"Play")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.668e8735.chunk.js.map