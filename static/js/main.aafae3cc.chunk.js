(this["webpackJsonproxiler-internship-task"]=this["webpackJsonproxiler-internship-task"]||[]).push([[0],{126:function(e,t,n){},154:function(e,t,n){},162:function(e,t,n){},255:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),i=n(34),o=n.n(i),s=(n(154),n(46)),a=(n(162),n(1)),d=n(6),l=n(259),u=n(260),j=n(261),h=n(49),f=n(262),b=n(103),O=n.n(b),p="FETCH_TODO_REQUEST",x="FETCH_TODO_SUCCESS",g="FETCH_TODO_FAILURE",y="FETCH_USER_REQUEST",m="FETCH_USER_SUCCESS",v="FETCH_USER_FAILURE",S=function(){return{type:p}},C=function(){return{type:y}},E=function(){return function(e){e(S),O.a.get("https://jsonplaceholder.typicode.com/todos").then((function(t){var n=t.data;e(function(e){return{type:x,payload:e}}(n))})).catch((function(t){var n=t.message;e(function(e){return{type:g,payload:e}}(n))}))}},I=function(e,t){return function(n){n(C),O.a.get("https://jsonplaceholder.typicode.com/users/".concat(e)).then((function(e){var r=e.data;n(function(e,t){return{type:m,payload:{user:e,id:t}}}(r,t))})).catch((function(e){var t=e.message;n(function(e){return{type:v,payload:e}}(t))}))}},T=n(129),D=n.n(T),F=n(94),U=n(8),k=(l.a.Column,function(e){var t=Object(s.c)();Object(r.useEffect)((function(){e.loading||t(I(e.todos[0].userId,e.todos[0]))}),[e.loading]);var n,c=e.todos,i=Object(r.useState)(""),o=Object(d.a)(i,2),b=o[0],O=o[1],p=Object(r.useState)(""),x=Object(d.a)(p,2),g=x[0],y=x[1],m=null,v=function(e,t,n){t(),O(e[0]),y(n)},S=function(e){e(),O("")},C=[{title:"ToDo ID",dataIndex:"id",key:"id",width:"15%",sorter:function(e,t){return e.id-t.id}},Object(a.a)({title:"Title",dataIndex:"title",key:"title"},(n="title",{filterDropdown:function(e){var t=e.setSelectedKeys,r=e.selectedKeys,c=e.confirm,i=e.clearFilters;return Object(U.jsxs)("div",{style:{padding:8},children:[Object(U.jsx)(u.a,{ref:function(e){m=e},placeholder:"Search ".concat(n),value:r[0],onChange:function(e){return t(e.target.value?[e.target.value]:[])},onPressEnter:function(){return v(r,c,n)},style:{width:188,marginBottom:8,display:"block"}}),Object(U.jsxs)(j.b,{children:[Object(U.jsx)(h.a,{type:"primary",onClick:function(){return v(r,c,n)},icon:Object(U.jsx)(F.a,{}),size:"small",style:{width:90},children:"Search"}),Object(U.jsx)(h.a,{onClick:function(){return S(i)},size:"small",style:{width:90},children:"Reset"})]})]})},filterIcon:function(e){return Object(U.jsx)(F.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(e,t){return t[n]?t[n].toString().toLowerCase().includes(e.toLowerCase()):""},onFilterDropdownVisibleChange:function(e){e&&setTimeout((function(){return m.select()}),100)},render:function(e){return g===n?Object(U.jsx)(D.a,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[b],autoEscape:!0,textToHighlight:e?e.toString():""}):e}})),{title:"Status",dataIndex:"completed",key:"id",render:function(e){return Object(U.jsx)(f.a,{color:"blue",children:e?"Completed":"Pending"},"tag")}},{title:"Action",dataIndex:"userId",key:"userId",render:function(e,n){return Object(U.jsx)(h.a,{onClick:function(){return t(I(e,n))},children:"View User"})}}];return Object(U.jsxs)("div",{children:[Object(U.jsx)("h3",{children:"Todo List"}),Object(U.jsx)(l.a,{dataSource:c,loading:e.loading,columns:C})]})}),w=(n(126),function(){var e=Object(s.d)((function(e){return e.user.user})),t=Object(s.d)((function(e){return e.user.todoId}));return Object(U.jsxs)("div",{children:[Object(U.jsx)("h3",{children:"User Details"}),e&&t?Object(U.jsxs)("div",{className:"DetailBox",children:[Object(U.jsxs)("div",{className:"InfoItem",children:[Object(U.jsx)("h4",{children:"ToDo ID: "}),Object(U.jsx)("h4",{children:"ToDo Title: "}),Object(U.jsx)("h4",{children:"User ID: "}),Object(U.jsx)("h4",{children:"Name: "}),Object(U.jsx)("h4",{children:"Email: "})]}),Object(U.jsxs)("div",{className:"InfoData",children:[Object(U.jsxs)("p",{children:[t.id," "]}),Object(U.jsxs)("p",{children:[t.title," "]}),Object(U.jsxs)("p",{children:[e.id," "]}),Object(U.jsxs)("p",{children:[e.name," "]}),Object(U.jsxs)("p",{children:[e.email," "]})]})]}):""]})}),_=Object(s.b)((function(e){return{data:e.todo}}),(function(e){return{fetchList:function(){return e(E())}}}))((function(e){return Object(r.useEffect)((function(){e.fetchList()}),[]),Object(U.jsxs)("div",{className:"Home",children:[Object(U.jsx)("div",{className:"UserList",children:Object(U.jsx)(k,{todos:!e.data.loading&&e.data.list,loading:e.data.loading})}),Object(U.jsx)("div",{className:"UserDetails",children:Object(U.jsx)(w,{})})]})})),L=n(55),R=n(143),H={loading:!0,list:[],error:""},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(a.a)(Object(a.a)({},e),{},{loading:!0});case x:return{loading:!1,list:t.payload,error:""};case g:return{loading:!1,list:[],error:t.payload};default:return e}},A={loading:!0,error:"",user:null,todoId:null},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(a.a)(Object(a.a)({},e),{},{loading:!0});case m:return{loading:!1,user:t.payload.user,todoId:t.payload.id,error:""};case v:return{loading:!1,user:null,error:t.payload};default:return e}},P=Object(L.c)({todo:N,user:B}),z=Object(L.d)(P,Object(L.a)(R.a));var J=function(){return Object(U.jsx)(s.a,{store:z,children:Object(U.jsxs)("div",{className:"App",children:[Object(U.jsx)("h1",{children:"Roxiler Systems"}),Object(U.jsx)(_,{})]})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,263)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),i(e),o(e)}))};n(254);o.a.render(Object(U.jsx)(c.a.StrictMode,{children:Object(U.jsx)(J,{})}),document.getElementById("root")),K()}},[[255,1,2]]]);
//# sourceMappingURL=main.aafae3cc.chunk.js.map