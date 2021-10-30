(this["webpackJsonpxsolla-frontend"]=this["webpackJsonpxsolla-frontend"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),c=n(8),i=n.n(c),r=(n(15),n(9)),o=n(10),u=n(2),l=n(3),h=n(5),d=n(4),v=(n(16),n(7),n(0)),p=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){return Object(u.a)(this,n),e.call(this,t)}return Object(l.a)(n,[{key:"createSelectOptions",value:function(){return this.props.cities.sort().filter((function(t,e,n){return n.lastIndexOf(t)===e})).map((function(t,e){return Object(v.jsx)("option",{value:t,children:t},"".concat(t,"-").concat(e))}))}},{key:"changeCity",value:function(t){this.props.updateCity(t.target.value)}},{key:"render",value:function(){var t=this;return Object(v.jsx)("select",{onChange:function(e){return t.changeCity(e)},className:"select-city",children:this.createSelectOptions()})}}]),n}(s.a.Component),f=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){return Object(u.a)(this,n),e.call(this,t)}return Object(l.a)(n,[{key:"createMonthesOptions",value:function(){return this.props.monthes.sort().filter((function(t,e,n){return n.lastIndexOf(t)===e})).map((function(t){return new Date(Date.UTC(2021,t-1,10)).toLocaleDateString("en-US",{month:"long"})})).map((function(t){return Object(v.jsx)("option",{value:t,children:t},t)}))}},{key:"changeMonth",value:function(t){this.props.updateMonth(t.target.value)}},{key:"render",value:function(){var t=this;return Object(v.jsx)("select",{onChange:function(e){return t.changeMonth(e)},children:this.createMonthesOptions()})}}]),n}(s.a.Component),j=(n(18),"no-fill"),g="active",m=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).saveCard=function(t){var e,n;"event-save-icon"===t.target.className.baseVal?(e=t.target.children[0].className.baseVal,n=t.target.parentNode.id):(e=t.target.className.baseVal,n=t.target.parentNode.parentNode.id),e===j||"undefined"===e?(e=g,a.props.updateSaved(n,g)):(e=j,a.props.updateSaved(n,j))},a}return Object(l.a)(n,[{key:"createCard",value:function(t,e,n,a){var s,c=e.split(".")[0];return this.props.savedCards.forEach((function(e){e.id===t&&(s=e.value)})),Object(v.jsxs)("div",{className:"card-event",style:{backgroundImage:"url(".concat(a,")")},id:t,children:[Object(v.jsx)("div",{className:"event-month",children:c}),Object(v.jsx)("span",{children:n}),Object(v.jsx)("svg",{onClick:this.saveCard,viewBox:"0 0 16 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"event-save-icon",children:Object(v.jsx)("path",{className:"".concat(s),d:"M15 19L8 14L1 19V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H13C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3V19Z",stroke:"white",strokeWidth:"2"})})]},t)}},{key:"createAllCards",value:function(t,e){var n=this;return this.props.events.map((function(a){var s=new Date(Date.UTC(2021,+String(a.date).split(".")[1]-1,10)).toLocaleDateString("en-US",{month:"long"});if(a.city===t&&e===s)return n.createCard(a.id,a.date,a.name,a.image)}))}},{key:"render",value:function(){return Object(v.jsx)("div",{className:"cards-container",children:this.createAllCards(this.props.city,this.props.month)})}}]),n}(s.a.Component),O="saved",b=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).fetchEvents=function(){a.setState(Object(o.a)({},a.state)),fetch("https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json").then((function(t){return t.json()})).then((function(t){return a.setState({events:t})})).catch((function(t){return console.log(t)}))},a.updateMonth=function(t){a.setState({month:t})},a.updateCity=function(t){a.setState({city:t})},a.updateSaved=function(t,e){var n=Object(r.a)(a.state.saved),s=!1;n.forEach((function(n){n.id===t&&(n.value=e,s=!0)})),s||n.push({id:t,value:e}),a.setState({saved:n}),localStorage.setItem(O,JSON.stringify(n))},a.getDataFromLocalStorage=function(){JSON.parse(localStorage.getItem(O))&&a.setState({saved:JSON.parse(localStorage.getItem(O))})},a.state={events:[],city:"Amsterdam",month:"February",saved:JSON.parse(localStorage.getItem(O))?JSON.parse(localStorage.getItem(O)):[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.fetchEvents()}},{key:"getCities",value:function(){return this.state.events.map((function(t){return t.city}))}},{key:"getMonthes",value:function(){return this.state.events.map((function(t){return String(t.date).split(".")[1]}))}},{key:"render",value:function(){return Object(v.jsx)("div",{className:"app",children:Object(v.jsxs)("div",{className:"events-container",children:[Object(v.jsx)("h1",{children:"Event Listing"}),Object(v.jsxs)("div",{className:"event-info",children:[Object(v.jsx)("span",{className:"city-title",children:"City:"}),Object(v.jsx)(p,{cities:this.getCities(),updateCity:this.updateCity}),Object(v.jsx)("span",{children:"Month:"}),Object(v.jsx)(f,{monthes:this.getMonthes(),updateMonth:this.updateMonth})]}),Object(v.jsx)(m,{events:this.state.events,city:this.state.city,month:this.state.month,updateSaved:this.updateSaved,savedCards:this.state.saved})]})})}}]),n}(s.a.Component),y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),s(t),c(t),i(t)}))};i.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(b,{})}),document.getElementById("root")),y()},7:function(t,e,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.39784fe6.chunk.js.map