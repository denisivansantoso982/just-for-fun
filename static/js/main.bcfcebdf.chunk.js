(this.webpackJsonpMyReactApp=this.webpackJsonpMyReactApp||[]).push([[0],{33:function(e,t,a){e.exports=a(64)},38:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),o=a.n(c),l=(a(38),a(5)),u=a(6),s=a(8),i=a(7),m=a(14),p=a(1),h=a(12),d=a.n(h),f=a(15),b=a(16),v=a.n(b),j=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"loader-wrapper"},r.a.createElement("span",{className:"loader"},r.a.createElement("span",{className:"loader-inner"})))}}]),a}(n.Component),E=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={loading:!0,data:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v()({method:"GET",baseURL:"https://jsonplaceholder.typicode.com/photos",timeout:6e4});case 3:for(t=e.sent,a=0;a<t.data.length;a++)this.state.data.push(t.data[a]);this.setState({loading:!1}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0.message);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.data,n=a.length>0&&a.map((function(e,t){return r.a.createElement("div",{className:"list-data",key:e.id},r.a.createElement("p",{className:"index"},++t,"."),r.a.createElement("p",{className:"title"},e.title))}));return t?r.a.createElement(j,null):r.a.createElement("div",null,r.a.createElement("h1",{className:"App"},"Home Page"),n,r.a.createElement("br",null))}}]),a}(n.Component),g=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={data:[],loading:!0},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v()({method:"GET",baseURL:"https://jsonplaceholder.typicode.com/photos",timeout:6e4,params:1});case 3:for(t=e.sent,a=0;a<t.data.length;a++)this.state.data.push(t.data[a]);this.setState({loading:!1}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0.message);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.data;return t?r.a.createElement(j,null):r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Landing Page"),r.a.createElement("p",null,"Data length : ",a.length))}}]),a}(n.Component),O=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"404, Not Found"))}}]),a}(n.Component),y=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{className:"App-link",to:"/just-for-fun/home"},"Home")),r.a.createElement("li",null,r.a.createElement(m.b,{className:"App-link",to:"/just-for-fun/landingPage"},"Landing Page"))))}}]),a}(n.Component),k=(a(63),function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(y,null),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/just-for-fun/"},r.a.createElement(p.a,{from:"/just-for-fun/",to:"/just-for-fun/home"})),r.a.createElement(p.b,{path:"/just-for-fun/home",component:E}),r.a.createElement(p.b,{path:"/just-for-fun/landingPage",component:g}),r.a.createElement(p.b,{component:O})))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.bcfcebdf.chunk.js.map