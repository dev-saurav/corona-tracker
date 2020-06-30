(this["webpackJsonpcorona-tracker"]=this["webpackJsonpcorona-tracker"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__3fAV9",card:"Cards_card__2G4UW",infected:"Cards_infected__1l909",recovered:"Cards_recovered__1C0YS",deaths:"Cards_deaths__2pHzL"}},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(73),o=a.n(c),s=a(6),u=a.n(s),l=a(10),i=a(74),d=a(75),m=a(85),p=a(84),f=a(225),v=a(229),h=a(226),b=a(227),E=a(32),y=a.n(E),g=a(13),x=a.n(g),_=a(33),C=a.n(_),O=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return console.log(a),a?r.a.createElement("div",{className:x.a.container},r.a.createElement(f.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,style:{borderBottom:"10px solid rgba(0, 0, 255, 0.5)"},className:C()(x.a.card,x.a.infected)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(b.a,{varient:"h5"},r.a.createElement(y.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{varient:"body2"},"No. of active cases of COVID-19"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,style:{borderBottom:"10px solid rgba(0, 255, 0, 0.5)"},className:C()(x.a.card,x.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(b.a,{varient:"h5"},r.a.createElement(y.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{varient:"body2"},"No. of recovered cases of COVID-19"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,style:{borderBottom:"10px solid rgba(255, 0, 0, 0.5)"},className:C()(x.a.card,x.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(b.a,{varient:"h5"},r.a.createElement(y.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{varient:"body2"},"No. of deaths due to COVID-19"))))):"loading..."},w=a(31),j=a(34),k=a.n(j),S="https://covid19.mathdro.id/api",D=function(){var e=Object(l.a)(u.a.mark((function e(t){var a,n,r,c,o,s,l,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=S,t&&(a="".concat(S,"/countries/").concat(t)),e.prev=2,e.next=5,k.a.get(a);case 5:return n=e.sent,r=n.data,c=r.deaths,o=r.recovered,s=r.confirmed,l=r.lastUpdate,i={deaths:c,recovered:o,confirmed:s,lastUpdate:l},console.log(i),e.abrupt("return",i);case 16:e.prev=16,e.t0=e.catch(2),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(S,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(S,"/countries"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.countries);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=a(45),V=a(81),U=a.n(V),z=function(e){var t=e.data,a=t.confirmed,c=t.deaths,o=t.recovered,s=e.country,i=Object(n.useState)([]),d=Object(w.a)(i,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=m.length?r.a.createElement(B.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null,v=a?r.a.createElement(B.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{lables:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,o.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(s)}}}):null;return r.a.createElement("div",{className:U.a.container},s?v:f)},A=a(230),G=a(228),J=a(82),M=a.n(J),P=function(e){var t=e.handleCountrySelect,a=Object(n.useState)([]),c=Object(w.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(A.a,{className:M.a.formControl},r.a.createElement(G.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e){return r.a.createElement("option",{value:e.name},e.name)}))))},Q=a(46),R=a.n(Q),F=a(83),H=a.n(F),L=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountrySelect=function(){var t=Object(l.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(a),t.next=3,D(a);case 3:n=t.sent,e.setState({data:n,country:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data;return r.a.createElement("div",{className:R.a.container},r.a.createElement("img",{src:H.a,classNames:R.a.coronaImg,alt:"COVID-19"}),r.a.createElement(O,{data:e}),r.a.createElement(P,{handleCountrySelect:this.handleCountrySelect}),r.a.createElement(z,{data:this.state.data,country:this.state.country}))}}]),a}(n.Component);o.a.render(r.a.createElement(L,null),document.getElementById("root"))},46:function(e,t,a){e.exports={container:"app_container__Mxukc",coronaImg:"app_coronaImg__19kj0"}},81:function(e,t,a){e.exports={container:"Chart_container__nFQtI"}},82:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__QctBz"}},83:function(e,t,a){e.exports=a.p+"static/media/corona.d7265326.png"},87:function(e,t,a){e.exports=a(207)}},[[87,1,2]]]);
//# sourceMappingURL=main.e3ac96a3.chunk.js.map