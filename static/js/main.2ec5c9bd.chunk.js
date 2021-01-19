(this.webpackJsonpbattleship=this.webpackJsonpbattleship||[]).push([[0],{36:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n(0),r=n.n(a),o=n(14),s=n.n(o),c=n(8),u=n(3),l=n(19),d=n(26);n(36);var b=function(t,e){var n=[];return{length:t,boardPosition:e,hitPosition:n,hit:function(t){n.push(t)},isSunk:function(){return e.sort().join("")===n.sort().join("")}}};var h=function(){for(var t=new Array(100),e=0;e<100;e++)t[e]="";var n=[b(2,[]),b(3,[]),b(3,[]),b(4,[]),b(5,[])],i=[];return{board:t,misses:i,ships:n,placeShip:function(e,n,i){var a="y"===n?10:1;if(function(e,n,i){var a=!0;if(e<0)a=!1;else if(0!==n.boardPosition.length)a=!1;else for(var r=0;r<n.length*i;r+=i)("ship"===t[e+r]||1===i&&e%10+r>9||10===i&&e+(10*n.length-10)>99)&&(a=!1);return a}(e,i,a)){for(var r=0;r<i.length*a;r+=a)t[e+r]="ship",i.boardPosition.push(e+r);return!0}return!1},receiveAttack:function(e){if("ship"===t[e]){var a=n.findIndex((function(t){return t.boardPosition.includes(e)}));n[a].hit(e),t[e]="hit"}else i.push(e),t[e]="miss"},areAllSunk:function(){return n.every((function(t){return!0===t.isSunk()}))}}};var j=function(t){for(var e=0;e<=4;e++){var n=1===Math.floor(2*Math.random())?"x":"y",i=Math.floor(100*Math.random()),a=t.ships[e].length,r=[];if("x"===n){for(var o=0;o<a;o++)r.push(i+o);for(;!(i%10+a<=9&&r.every((function(e){return""===t.board[e]})));){i=Math.floor(100*Math.random()),r=[];for(var s=0;s<a;s++)r.push(i+s)}}else{for(var c=0;c<10*a;c+=10)r.push(i+c);for(;!(i+(10*a-10)<=99&&r.every((function(e){return""===t.board[e]})));){i=Math.floor(100*Math.random()),r=[];for(var u=0;u<10*a;u+=10)r.push(i+u)}}t.placeShip(i,n,t.ships[e])}};var f=function(t){return{name:t,gameboard:h(),autoPlaceShips:j,fire:function(t,e){var n=e.board[t];if(""!==n&&"ship"!==n)return!1;e.receiveAttack(t)}}};var p=function(){var t,e,n,i;function a(t,e){return e.findIndex((function(e){return e.boardPosition.includes(t)}))}return{name:"COM",gameboard:h(),autoPlaceShips:j,fire:function(r){var o=t?function(a){function r(e){if("miss"!==a.board[t+e]&&"hit"!==a.board[t+e]&&t+e<100)return!(1===e&&t%10+1>9)&&(!(-1===e&&t%10-1<0)&&!("ship"===a.board[t+e]&&!a.ships[i].boardPosition.includes(t+e)))}if(!function(t,e){return e.filter((function(t){return t.isSunk()})).some((function(e){return e.boardPosition.includes(t)}))}(t,a.ships)){var o=[1,-1,10,-10];return"miss"!==a.board[t+e]&&"hit"!==a.board[t+e]&&t+e<100&&a.ships[i].boardPosition.includes(t+e)||("ship"===a.board[n-e]&&e&&a.ships[i].boardPosition.includes(n-e)?(t=n,e=-e):e=o.find((function(t){return r(t)}))),void 0===e&&(t=void 0,n=void 0),t+e}t=void 0,n=void 0,e=void 0}(r):Math.floor(100*Math.random());if(!t)for(;""!==r.board[o]&&"ship"!==r.board[o];)o=Math.floor(100*Math.random());return r.receiveAttack(o),"hit"===r.board[o]&&(t=o,n||(n=o,i=a(o,r.ships))),o},setCurrentTarget:function(r,o){t=r,n=r,e=void 0,i=a(r,o)}}};var O=function(t){var e=Object(a.useState)(""),n=Object(u.a)(e,2),r=n[0],o=n[1],s=Object(a.useState)(!1),c=Object(u.a)(s,2),l=c[0],d=c[1];return Object(i.jsx)("div",{id:"initializeGameContainer",children:Object(i.jsxs)("div",{id:"initializeGame",children:[Object(i.jsx)("h1",{children:"BATTLESHIP"}),Object(i.jsx)("p",{children:l?"Name Required":""}),Object(i.jsx)("input",{type:"text",placeholder:"Your Name",value:r,onChange:function(t){o(t.target.value)},onKeyDown:function(e){13===e.keyCode&&t.initializePlayer(r)}}),Object(i.jsx)("button",{onClick:function(){/^[a-zA-Z]/.test(r)?t.initializePlayer(r):d(!0)},children:"Continue"})]})})};var m=function(t){return Object(i.jsxs)("div",{id:"gameText",children:[Object(i.jsx)("h1",{children:t.h1}),Object(i.jsx)("p",{children:t.p})]})},v=n(40);var x=function(t){var e=Object(v.a)({accept:"ship",drop:function(e){return t.placeShip(t.id,t.axis,e.id,e.pos)}}),n=Object(u.a)(e,2)[1],a=[];return function(){switch(t.content){case"hit":var e=t.ships.filter((function(t){return t.isSunk()})).some((function(e){return e.boardPosition.includes(t.id)}))?"sunk":"hit";a[0]=e;break;case"ship":var i=t.p2?null:function(){for(var e,n=0;n<5;n++)if(t.ships[n].boardPosition.includes(t.id)){e="ship ".concat(n);break}return e}();a[0]=i;break;default:var r=t.p2?null:n;a[1]=r}}(),Object(i.jsx)("span",{className:a[0],ref:a[1],onClick:""===t.content||"ship"===t.content?t.listener:null,children:function(){switch(t.content){case"miss":case"hit":return"\u2b24";default:return""}}()})};var g=function(t){return Object(i.jsx)("div",{className:"board ".concat(t.class),children:t.isEnemy?t.board.map((function(e,n){return Object(i.jsx)(x,{id:n,content:e,p2:!0,listener:function(){return t.updateCell(n)},ships:t.ships},n)})):t.board.map((function(e,n){return Object(i.jsx)(x,{id:n,content:e,p2:!1,ships:t.ships,axis:t.axis,placeShip:t.placeShip},n)}))})};var S=function(t){return Object(i.jsx)("div",{id:"gameOverContainer",children:Object(i.jsxs)("div",{id:"gameOverCard",children:[Object(i.jsxs)("h1",{children:[t.winner," Wins!"]}),Object(i.jsx)("button",{onClick:function(){return t.startOver()},children:"Play Again?"})]})})},y=n(41);var P=function(t){var e=Object(a.useState)(0),n=Object(u.a)(e,2),r=n[0],o=n[1],s=Object(y.a)({item:{type:"ship",length:t.length,id:t.id,pos:r},collect:function(t){return{isDragging:!!t.isDragging()}}}),c=Object(u.a)(s,2)[1];return Object(i.jsx)("div",{className:"shipContainer ".concat(t.axis," ").concat(t.length),ref:c,onMouseDown:function(t){return o(t.target.getAttribute("data-key"))},onTouchStart:function(t){return o(t.target.getAttribute("data-key"))},children:function(){for(var e=[],n=0;n<t.length;n++)e.push(Object(i.jsx)("span",{className:"ship ".concat(t.id),"data-key":n},n));return e}()})};var k=function(t){return Object(i.jsxs)("div",{id:"shipsWrapper",children:[Object(i.jsx)("button",{id:"rotateButton",onClick:function(){return t.changeAxis()},children:"\ud83d\uddd8Rotate"}),Object(i.jsxs)("div",{id:"shipsContainer",children:[t.shipNumArray.includes("0")?null:Object(i.jsx)(P,{id:"0",length:"2",axis:t.axis}),t.shipNumArray.includes("1")?null:Object(i.jsx)(P,{id:"1",length:"3",axis:t.axis}),t.shipNumArray.includes("2")?null:Object(i.jsx)(P,{id:"2",length:"3",axis:t.axis}),t.shipNumArray.includes("3")?null:Object(i.jsx)(P,{id:"3",length:"4",axis:t.axis}),t.shipNumArray.includes("4")?null:Object(i.jsx)(P,{id:"4",length:"5",axis:t.axis})]})]})};var A=function(t){var e=Object(l.b)(),n=e.display,a=e.item,r=e.style;return n?Object(i.jsx)("div",{className:"shipContainer ".concat(t.axis," ").concat(a.length),style:r,children:function(){for(var t=[],e=0;e<a.length;e++)t.push(Object(i.jsx)("span",{className:"ship ".concat(a.id)},e));return t}()}):null};var C,M,N,T=function(t){var e=0;return Object(i.jsx)("div",{id:"animation",onAnimationEnd:function(){2===(e+=1)&&t.setPlayAnimation(!1)}})};var w=function(){var t=Object(a.useState)(!1),e=Object(u.a)(t,2),n=e[0],r=e[1],o=Object(a.useState)(!1),s=Object(u.a)(o,2),b=s[0],h=s[1],j=Object(a.useState)(!1),v=Object(u.a)(j,2),x=v[0],y=v[1],P=Object(a.useState)(!1),w=Object(u.a)(P,2),B=w[0],z=w[1],D=Object(a.useState)(!1),E=Object(u.a)(D,2),G=E[0],I=E[1],Y=Object(a.useState)("y"),J=Object(u.a)(Y,2),R=J[0],W=J[1],q=Object(a.useState)(!1),H=Object(u.a)(q,2),K=H[0],L=H[1],Z=Object(a.useState)(!0),F=Object(u.a)(Z,2),Q=F[0],U=F[1],V=Object(a.useState)(["Place Your Ships","(Drag Ship on to The Board to Place)"]),X=Object(u.a)(V,2),$=X[0],_=X[1],tt=Object(a.useState)([]),et=Object(u.a)(tt,2),nt=et[0],it=et[1];function at(t,e){!0===e?(M.fire(C.gameboard),r(Object(c.a)(C.gameboard.board)),rt()):(C.fire(t,M.gameboard),h(Object(c.a)(M.gameboard.board)),rt(!0))}function rt(t){C.gameboard.areAllSunk()||M.gameboard.areAllSunk()?(N=M.gameboard.areAllSunk()?C.name:M.name,U(!0),I(!0)):t?(_(["".concat(M.name,"'s Turn"),""]),U(!1),setTimeout((function(){at(null,!0)}),400)):(_(["".concat(C.name,"'s Turn"),""]),U(!0))}function ot(){C=f(C.name),r(Object(c.a)(C.gameboard.board))}return Object(i.jsxs)("div",{className:"App",children:[!1===n?Object(i.jsx)(O,{initializePlayer:function(t){C=f(t),L(!0),setTimeout((function(){r(C.gameboard.board)}),200)}}):null,!1!==n?Object(i.jsx)(m,{h1:$[0],p:$[1]}):null,Object(i.jsx)(l.a,{options:d.a,children:Object(i.jsxs)("div",{id:"boardsContainer",children:[!1!==n?Object(i.jsx)(g,{board:n,axis:R,placeShip:B?null:function(t,e,n,i){t-=i="x"===e?i:10*i,C.gameboard.placeShip(t,e,C.gameboard.ships[n])&&(it([].concat(Object(c.a)(nt),[n])),4===nt.length&&(it([]),y(!0),z(!0)),r(Object(c.a)(C.gameboard.board)))},isEnemy:!1,ships:C.gameboard.ships}):null,!1!==b?Object(i.jsx)(g,{board:b,updateCell:at,isEnemy:!0,ships:M.gameboard.ships,class:Q?null:"off"}):null,!1!==n&&!1===B?Object(i.jsx)(k,{axis:R,changeAxis:function(){W("y"===R?"x":"y")},shipNumArray:nt}):null,Object(i.jsx)(A,{axis:R})]})}),!1!==n&&!1===b?Object(i.jsx)("button",{id:"autoPlaceButton",onClick:function(){0===nt.length&&(ot(),C.autoPlaceShips(C.gameboard),z(!0),y(!0),r(Object(c.a)(C.gameboard.board)))},children:"Auto Place"}):null,!0===x?Object(i.jsx)("button",{id:"startGameButton",onClick:function(){(M=p()).autoPlaceShips(M.gameboard),L(!0),setTimeout((function(){_(["".concat(C.name,"'s Turn"),""]),h(Object(c.a)(M.gameboard.board))}),200),y(!1)},children:"Start Game"}):null,G?Object(i.jsx)(S,{winner:N,startOver:function(){ot(),L(!0),setTimeout((function(){h(!1),z(!1),I(!1),_(["Place Your Ships","(Drag Ship on to The Board to Place)"])}),200)}}):null,K?Object(i.jsx)(T,{setPlayAnimation:L}):null]})};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(w,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.2ec5c9bd.chunk.js.map