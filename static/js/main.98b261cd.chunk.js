(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,n){e.exports={modal:"modal_modal__2bhYs"}},107:function(e,t,n){e.exports=n(221)},115:function(e,t){},117:function(e,t){},155:function(e,t){},156:function(e,t){},214:function(e,t,n){},221:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(102),o=n.n(c),r=n(16),i=n(17),u=n(20),s=n(18),m=n(21),d=n(54),p=n.n(d),h=n(28),f=n.n(h),b=l.a.createContext(),E=function(e){function t(e){var n;Object(r.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).login=function(e){f.a.save("auth",e),n.setLoginState(!0)},n.logout=function(){f.a.remove("auth"),n.setLoginState(!1)},n.setLoginState=function(e){var t=f.a.load("auth");n.setState({token:t,loggedIn:e})};var a=new URLSearchParams(window.location.search),l=f.a.load("auth"),c=a.get("token")||l||null;return console.log(c),n.state={loggedIn:!!c,token:c,login:n.login,logout:n.logout},console.log(n.state),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(b.Provider,{value:this.state},this.props.children)}}]),t}(l.a.Component),g=n(5),v=n(55),j=n.n(v),O=n(103),C=function(){var e=Object(a.useState)(null),t=Object(g.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)({}),o=Object(g.a)(c,2),r=o[0],i=o[1],u=Object(a.useState)(null),s=Object(g.a)(u,2),m=s[0],d=s[1],p=Object(a.useState)(!1),h=Object(g.a)(p,2),f=h[0],b=h[1];return Object(a.useEffect)(function(){!function(){var e=Object(O.a)(j.a.mark(function e(){var t,a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return b(!0),e.prev=3,n.options.headers={"Content-Type":"application/json"},e.next=7,fetch(n.url,n.options);case 7:return t=e.sent,e.next=10,t.json();case 10:a=e.sent,i(a),b(!1),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),d(e.t0);case 18:case"end":return e.stop()}},e,null,[[3,15]])}));return function(){return e.apply(this,arguments)}}()()},[n]),{request:l,response:r,error:m,isLoading:f}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e?t:null},S=function(e){return l.a.Children.map(e.children,function(t){return l.a.cloneElement(t,{condition:e.condition})})},x=function(e){return y(e.condition,e.children)},k=function(e){return y(e.condition,e.children)},D=n(19),w=n(104),T=function(e){var t=Object(a.useState)({}),n=Object(g.a)(t,2),l=n[0],c=n[1];return{handleChange:function(e){e.persist(),c(function(t){return Object(w.a)({},t,Object(D.a)({},e.target.name,e.target.value))})},handleSubmit:function(t){t&&t.preventDefault(),e(l)},values:l}},_=function(e){var t=T(e.handleSubmit),n=t.handleChange,a=t.handleSubmit;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Add Item"),l.a.createElement("form",{onSubmit:a},l.a.createElement("label",null,l.a.createElement("span",null,"To Do Item"),l.a.createElement("input",{name:"text",placeholder:"Add To Do List Item",onChange:n})),l.a.createElement("label",null,l.a.createElement("span",null,"Difficulty Rating"),l.a.createElement("input",{type:"range",min:"1",max:"5",name:"difficulty",onChange:n})),l.a.createElement("label",null,l.a.createElement("span",null,"Assigned To"),l.a.createElement("input",{type:"text",name:"assignee",placeholder:"Assigned To",onChange:n})),l.a.createElement("button",null,"Add Item")))},I=l.a.createContext();var N=function(e){var t=Object(a.useState)(!1),n=Object(g.a)(t,2),c=n[0],o=n[1],r=Object(a.useState)(5),i=Object(g.a)(r,2),u={hideCompleted:c,pageSize:i[0],setHideCompleted:o,setPageSize:i[1]};return l.a.createElement(I.Provider,{value:u},e.children)},L=function(e){return e.condition?e.children:null},A=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=!1,t={};try{t=this.context.token?p.a.verify(this.context.token,"supersecret"):{},console.log(t),e=this.context.loggedIn&&(!this.props.capability||t.capabilities.includes(this.props.capability))}catch(n){}return l.a.createElement(L,{condition:e},l.a.createElement("div",null,this.props.children))}}]),t}(l.a.Component);A.contextType=b;var F=A,J=function(e){var t=e.list||[],n=Object(a.useContext)(I),c=n.pageSize,o=[];return Object(a.useEffect)(function(){t.length<c&&o.push(t);for(var e=0;e<t.length;e+=c){var n=t.slice(e,e+c);o.push(n)}console.log(o),console.log("use effect")}),l.a.createElement("ul",null,l.a.createElement(k,{condition:!n.hideCompleted},t.filter(function(e){return!e.complete}).map(function(t){return l.a.createElement("li",{className:"complete-".concat(t.complete.toString()),key:t._id},l.a.createElement(F,{capability:"read"},l.a.createElement("span",{onClick:function(){return e.handleComplete(t._id)}},t.text)),l.a.createElement("button",{onClick:function(){return e.handleDetails(t._id)}},"Details"),l.a.createElement(F,{capability:"delete"},l.a.createElement("button",{onClick:function(){return e.handleDelete(t._id)}},"Delete")))})),l.a.createElement(k,{condition:n.hideCompleted},t.map(function(t){return l.a.createElement("li",{className:"complete-".concat(t.complete.toString()),key:t._id},l.a.createElement(F,{capability:"read"},l.a.createElement("span",{onClick:function(){return e.handleComplete(t._id)}},t.text)),l.a.createElement("button",{onClick:function(){return e.handleDetails(t._id)}},"Details"),l.a.createElement(F,{capability:"delete"},l.a.createElement("button",{onClick:function(){return e.handleDelete(t._id)}},"Delete")))})),l.a.createElement("button",{name:"displayCompleted",onClick:function(){return n.setHideCompleted(!n.hideCompleted)}},"Toggle Completed"),l.a.createElement(S,{condition:o.length>1},l.a.createElement(x,null,l.a.createElement("button",{name:"next"},"Next"))))},P=n(105),z=n.n(P),H=function(e){return l.a.createElement("div",{className:z.a.modal},l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement("span",{className:"title"},e.title),l.a.createElement("button",{onClick:e.close},"X")),l.a.createElement("div",null,e.children)))},q=function(e){var t=e.item||{};return l.a.createElement(H,{title:"To Do Item",close:e.handleDetails},l.a.createElement("div",{className:"todo-details"},l.a.createElement("header",null,l.a.createElement("span",null,"Assigned To: ",t.assignee),l.a.createElement("span",null,"Due: ",t.due)),l.a.createElement("div",{className:"item"},t.text)))},R=(n(214),"https://api-js401.herokuapp.com/api/v1/todo"),B=function(){var e=Object(a.useState)([]),t=Object(g.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),r=Object(g.a)(o,2),i=r[0],u=r[1],s=Object(a.useState)({}),m=Object(g.a)(s,2),d=m[0],p=m[1],h=C(),f=h.request,b=h.response,E=(h.error,h.isLoading,Object(a.useContext)(I));Object(a.useEffect)(function(){document.title="".concat(n.filter(function(e){return!e.complete}).length," items to Complete")});var v=function(e){u(!i);var t=n.filter(function(t){return t._id===e})[0];p(t)},j=function(){f({url:R,options:{method:"get"}})};return Object(a.useEffect)(function(){j()},[]),Object(a.useEffect)(function(){b.count>=0?c(b.results):j()},[b]),l.a.createElement(l.a.Fragment,null,l.a.createElement(F,{capability:"read"},l.a.createElement("header",null,l.a.createElement("h2",null,"There are ",n.filter(function(e){return!e.complete}).length," Items To Complete"))),l.a.createElement(F,null,l.a.createElement("section",{className:"todo"},l.a.createElement("div",null,l.a.createElement(F,{capability:"create"},l.a.createElement(_,{handleSubmit:function(e){var t={url:R,options:{method:"post",body:JSON.stringify(e)}};console.log(t.options.body),f(t)}}))),l.a.createElement("div",null,l.a.createElement(J,{list:n,context:E,handleComplete:function(e){var t=n.filter(function(t){return t._id===e})[0]||{};t.complete=!t.complete;var a={url:"".concat(R,"/").concat(e),options:{method:"put",body:JSON.stringify(t)}};f(a)},handleDelete:function(e){var t={url:"".concat(R,"/").concat(e),options:{method:"delete"}};f(t)},handleDetails:v})))),l.a.createElement(k,{condition:i},l.a.createElement(q,{handleDetails:v,item:d})))},U=n(106),X=n.n(U),Y="https://api-js401.herokuapp.com",G=function(e){return e.condition?e.children:null},K=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(D.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),X.a.post("".concat(Y,"/signin")).auth(n.state.username,n.state.password).set("mode","cors").then(function(e){var t=e.text;n.context.login(t)}).catch(function(e){return console.error(e)})},n.state={username:"",password:""},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"login"},l.a.createElement(G,{condition:this.context.loggedIn},l.a.createElement("button",{onClick:this.context.logout},"Log Out ")),l.a.createElement(G,{condition:!this.context.loggedIn},l.a.createElement("h1",{id:"loginH"},"Sign-in Todoodles"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{placeholder:"username",name:"username",onChange:this.handleChange}),l.a.createElement("input",{placeholder:"password",name:"password",onChange:this.handleChange}),l.a.createElement("input",{type:"submit",value:"login"})))))}}]),t}(l.a.Component);K.contextType=b;var M=K;function Q(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,null,l.a.createElement(M,null),l.a.createElement(B,null)))}var V=document.getElementById("root");o.a.render(l.a.createElement(function(){return l.a.createElement(E,null,l.a.createElement(Q,null))},null),V)}},[[107,1,2]]]);
//# sourceMappingURL=main.98b261cd.chunk.js.map