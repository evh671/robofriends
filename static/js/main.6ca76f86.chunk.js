(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),l=(n(12),n(1)),i=n(2),s=n(4),u=n(3),h=(n(13),function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"card-container tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?set=set1&size=200x200"),alt:"robot"}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,a)))}),m=(n(14),function(e){var t=e.robots;e.searchField;return r.a.createElement("div",{className:"card-list"},t.map((function(e){return r.a.createElement(h,{key:e.id,id:e.id,name:e.name,email:e.email})})))}),d=(n(15),function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"f2"},"ROBOFRIENDS"))}),f=(n(16),function(e){return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:e.searchChange}))}),b=(n(17),function(e){return r.a.createElement("div",{className:"scroll-cards"},e.children)}),E=(n(18),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Can't load cards."):this.props.children}}]),n}(a.Component)),v=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.searchField,n=e.robots,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return n.length?r.a.createElement("div",{className:"tc"},r.a.createElement(d,null),r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement(b,null,r.a.createElement(E,null,r.a.createElement(m,{robots:a,searchField:t})))):r.a.createElement("h1",null,"Loading...")}}]),n}(a.Component);n(19),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.6ca76f86.chunk.js.map