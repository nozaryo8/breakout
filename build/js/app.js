!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(e){return t[e]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="./",e(e.s=0)}([function(t,e,n){n(1);for(var r=document.getElementById("myCanvas"),o=r.getContext("2d"),i=r.width/2,l=r.height-30,f=2,a=-2,u=10,c=10,d=75,y=(r.width-d)/2,h=!1,s=!1,v=0,g=3,p=6,m=5,b=75,w=20,x=10,P=30,S=30,O=[],k=0;k<m;k++){O[k]=[];for(var A=0;A<p;A++)O[k][A]={x:0,y:0,status:1}}document.addEventListener("keydown",(function(t){"Right"==t.key||"ArrowRight"==t.key?h=!0:("Left"==t.key||"ArrowLeft"==t.key)&&(s=!0)}),!1),document.addEventListener("keyup",(function(t){"Right"==t.key||"ArrowRight"==t.key?h=!1:("Left"==t.key||"ArrowLeft"==t.key)&&(s=!1)}),!1),document.addEventListener("mousemove",(function(t){var e=t.clientX-r.offsetLeft;0<e&&e<r.width&&(y=e-d/2)}),!1),function t(){o.clearRect(0,0,r.width,r.height),o.beginPath(),o.arc(i,l,u,0,2*Math.PI),o.fillStyle="#0095DD",o.fill(),o.closePath(),function(){for(var t=0;t<m;t++)for(var e=0;e<p;e++)if(1==O[t][e].status){var n=t*(b+x)+S,r=e*(w+x)+P;O[t][e].x=n,O[t][e].y=r,o.beginPath(),o.rect(n,r,b,w),o.fillStyle="#0095DD",o.fill(),o.closePath()}}(),o.beginPath(),o.rect(y,r.height-c,d,c),o.fillStyle="#0095DD",o.fill(),o.closePath(),o.font="16px Arial",o.fillStyle="#0095DD",o.fillText("Score:"+v,8,20),o.font="16px Arial",o.fillStyle="#0095DD",o.fillText("Lives:"+g,r.width-65,20),function(){for(var t=0;t<m;t++)for(var e,n=0;n<p;n++)1==(e=O[t][n]).status&&i>e.x&&i<e.x+b&&l>e.y&&l<e.y+w&&(a=-a,e.status=0,++v==p*m&&(alert("YOU WIN, CONGRATULATIONS!"),document.location.reload()))}(),i+f>r.width-u|i+f<u&&(f=-f),l+a<u?a=-a:l+a>r.height-u&&(i>y&&i<y+d?a=-a:--g?(i=r.width/2,l=r.height-30,f=2,a=-2,y=(r.width-d)/2):(alert("GAME OVER"),document.location.reload())),h&&y<r.width-d?y+=7:s&&0<y&&(y-=7),i+=f,l+=a,requestAnimationFrame(t)}()},function(){}]);
//# sourceMappingURL=app.js.map