(this.webpackJsonpmemory=this.webpackJsonpmemory||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),o=n.n(i),s=n(8),c=n(1),l=n(2),u=n(3),d=n(4),m=n(5),f=n.n(m),h=(n(15),n(16),function(e){var t=e.card,n=e.feedback,a=e.index,i=e.onClick;return r.a.createElement("div",{className:"card ".concat(n),onClick:function(){return i(a)}},r.a.createElement("span",{className:"symbol"},"hidden"===n?"\u2753":t))}),g=(n(17),function(e){var t=e.guesses;return r.a.createElement("div",{className:"guesses"},t)}),p=(n(18),function(e){var t=e.entries;return r.a.createElement("table",{className:"hallOfFame"},r.a.createElement("tbody",null,t.map((function(e){var t=e.id,n=e.guesses,a=e.date,i=e.player;return r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"date"},a),r.a.createElement("td",{className:"guesses"},n),r.a.createElement("td",{className:"player"},i))}))))});function v(e,t){e.date=(new Date).toLocaleDateString(),e.id=Date.now();var n=JSON.parse(localStorage.getItem("::Memory::HallofFame")||"[]"),a=n.findIndex((function(t){return t.guesses>=e.guesses}));-1===a?n.push(e):n.splice(a,0,e),n.length>10&&n.splice(10,n.length),localStorage.setItem("::Memory::HallofFame",JSON.stringify(n)),t(n)}n(19);var y=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={winner:""},e.handleWinnerUpdate=function(t){e.setState({winner:t.target.value.toUpperCase()})},e.persistWinner=function(t){t.preventDefault(),v({guesses:e.props.guesses,player:e.state.winner},e.props.onStored)},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{className:"highScoreInput",onSubmit:this.persistWinner},r.a.createElement("p",null,r.a.createElement("label",null,"Bravo ! Entre ton pr\xe9nom :",r.a.createElement("input",{type:"text",autoComplete:"given-name",value:this.state.winner,onChange:this.handleWinnerUpdate})),r.a.createElement("button",{type:"submit"},"J\u2019ai gagn\xe9 !")))}}]),n}(a.Component),w=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={cards:e.generateCards(),currentPair:[],guesses:0,hallOfFame:null,matchedCardIndices:[]},e.displayHallOfFame=function(t){e.setState({hallOfFame:t})},e.handleCardClick=function(t){var n=e.state.currentPair;2!==n.length&&(0!==n.length?e.handleNewPairClosedBy(t):e.setState({currentPair:[t]}))},e}return Object(l.a)(n,[{key:"generateCards",value:function(){for(var e=[],t=f()("\ud83d\ude00\ud83c\udf89\ud83d\udc96\ud83c\udfa9\ud83d\udc36\ud83d\udc31\ud83e\udd84\ud83d\udc2c\ud83c\udf0d\ud83c\udf1b\ud83c\udf1e\ud83d\udcab\ud83c\udf4e\ud83c\udf4c\ud83c\udf53\ud83c\udf50\ud83c\udf5f\ud83c\udf7f");e.length<36;){var n=t.pop();e.push(n,n)}return f()(e)}},{key:"getFeedbackForCard",value:function(e){var t=this.state,n=t.currentPair,a=t.matchedCardIndices.includes(e);return n.length<2?a||e===n[0]?"visible":"hidden":n.includes(e)?a?"justMatched":"justMismatched":a?"visible":"hidden"}},{key:"handleNewPairClosedBy",value:function(e){var t=this,n=this.state,a=n.cards,r=n.currentPair,i=n.guesses,o=n.matchedCardIndices,c=[r[0],e],l=i+1,u=a[c[0]]===a[c[1]]&&c[0]!==c[1];this.setState({currentPair:c,guesses:l}),u&&this.setState({matchedCardIndices:[].concat(Object(s.a)(o),c)}),setTimeout((function(){return t.setState({currentPair:[]})}),750)}},{key:"render",value:function(){var e=this,t=this.state,n=t.cards,a=t.guesses,i=t.hallOfFame,o=t.matchedCardIndices.length===n.length;return r.a.createElement("div",{className:"memory"},r.a.createElement(g,{guesses:a}),n.map((function(t,n){return r.a.createElement(h,{card:t,feedback:e.getFeedbackForCard(n),index:n,key:n,onClick:e.handleCardClick})})),o&&(i?r.a.createElement(p,{entries:i}):r.a.createElement(y,{guesses:a,onStored:this.displayHallOfFame})))}}]),n}(a.Component),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(w,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/MEMORY",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/MEMORY","/service-worker.js");E?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):b(e)}))}}()}],[[9,1,2]]]);
//# sourceMappingURL=main.31bf8f55.chunk.js.map