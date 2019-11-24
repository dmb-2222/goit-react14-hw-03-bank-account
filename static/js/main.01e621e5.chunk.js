(this["webpackJsonpgoit-react14-hw-03-bank-account"]=this["webpackJsonpgoit-react14-hw-03-bank-account"]||[]).push([[0],{107:function(t,e){},109:function(t,e){},144:function(t,e){},145:function(t,e){},193:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),o=a(21),c=a.n(o),i=a(52),l=a(29),u=a(30),s=a(32),h=a(31),m=a(33),b=a(22),p=a.n(b),d=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(r)))).state={value:""},a.handleInput=function(t){a.setState({value:+t.target.value})},a.hadleTransaction=function(t){var e=t.target.name,n=a.state.value,r=e;a.props[r](n,r),a.setState({value:""})},a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.state.value;return r.a.createElement("section",{className:p.a.controls},r.a.createElement("form",{onSubmit:function(t){return t.preventDefault()}},r.a.createElement("input",{type:"number",className:p.a.input,onChange:this.handleInput,value:t}),r.a.createElement("button",{type:"submit",className:p.a.button,name:"deposit",onClick:this.hadleTransaction},"Deposit"),r.a.createElement("button",{type:"submit",className:p.a.button,name:"withdraw",onClick:this.hadleTransaction},"Withdraw")))}}]),e}(r.a.Component),f=a(34),y=a.n(f),v=function(t){var e=t.balance,a=t.history,n=a.filter((function(t){return"deposit"===t.type})).reduce((function(t,e){return t+Number(e.amount)}),0),o=a.filter((function(t){return"withdraw"===t.type})).reduce((function(t,e){return t+Number(e.amount)}),0);return r.a.createElement("section",{className:y.a.balance},r.a.createElement("span",{className:y.a.deposite},"\u2b06 ",n,"$"),r.a.createElement("span",{className:y.a.withdraw},"\u2b07 ",o,"$"),r.a.createElement("span",null,"Balance: ",e,"$"))},E=a(90),k=a.n(E),w=function(t){var e=t.history,a=void 0===e?[]:e;return r.a.createElement("table",{className:k.a.history},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Transaction"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Date"))),r.a.createElement("tbody",null,a.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.type),r.a.createElement("td",null,t.amount,"$"),r.a.createElement("td",null,t.date))}))))},_=a(91),O=a.n(_),g=a(92),N=a.n(g),C=a(35),j=(a(188),{setBankHistory:function(t){localStorage.setItem("bankHistory",JSON.stringify(t))},getBankHistory:function(){return JSON.parse(localStorage.getItem("bankHistory"))},clearLS:function(){localStorage.clear()}}),S=j.getBankHistory(),D=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(r)))).state={history:[],balance:0},a.noMoney=function(){return Object(C.b)("\u041d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!",{autoClose:5e3})},a.unCorrectInput=function(){return Object(C.b)("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!",{autoClose:5e3})},a.createNewOperation=function(t,e){var a=(new Date).toLocaleString();return{id:O.a.generate(),type:t,amount:e,date:a}},a.handleCkickDeposit=function(t,e){if(t>0){var n=a.createNewOperation(e,t);a.setState((function(t){return{history:[n].concat(Object(i.a)(t.history)),balance:t.balance+=Number(n.amount)}}))}else a.unCorrectInput()},a.handleCkickWithdraw=function(t,e){if(t>0){var n=a.createNewOperation(e,t);a.setState((function(e){return a.state.balance>=t?{balance:e.balance-=Number(n.amount),history:[n].concat(Object(i.a)(e.history))}:a.noMoney()}))}else a.unCorrectInput()},a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){S&&this.setState({history:S.history,balance:S.balance})}},{key:"componentDidUpdate",value:function(t,e){e.history!==this.state.history&&j.setBankHistory(this.state)}},{key:"render",value:function(){var t=this.state,e=t.history,a=t.balance;return r.a.createElement("div",{className:N.a.dashboard},r.a.createElement(d,{deposit:this.handleCkickDeposit,withdraw:this.handleCkickWithdraw}),r.a.createElement(C.a,null),r.a.createElement(v,{balance:a,history:e}),r.a.createElement(w,{history:e}))}}]),e}(r.a.Component),B=function(){return r.a.createElement(D,null)};c.a.render(r.a.createElement(B,null),document.getElementById("root"))},22:function(t,e,a){t.exports={controls:"Controls_controls__Qiv2m",button:"Controls_button__71hZR",input:"Controls_input__3ATxJ"}},34:function(t,e,a){t.exports={balance:"Balance_balance__pjz2f",deposite:"Balance_deposite__1_6vQ",withdraw:"Balance_withdraw__2EcOR"}},90:function(t,e,a){t.exports={history:"TransactionHistory_history__1nvyg"}},92:function(t,e,a){t.exports={dashboard:"Dashboard_dashboard__26muD"}},95:function(t,e,a){t.exports=a(193)}},[[95,1,2]]]);
//# sourceMappingURL=main.01e621e5.chunk.js.map