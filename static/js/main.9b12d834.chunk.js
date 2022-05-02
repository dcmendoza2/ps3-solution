(this["webpackJsonpps3-solution"]=this["webpackJsonpps3-solution"]||[]).push([[0],{31:function(t,e,n){},32:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(12),s=n.n(r),o=(n(31),n(7)),i=(n(32),n(43)),l=n(48),d=n(44),j=a.a.createContext(),h=n(0);function x(){var t=Object(c.useContext)(j).studentNoDispatch,e=Object(c.useRef)({current:null});return Object(h.jsx)(i.a,{className:"my-2",children:Object(h.jsxs)(l.a,{onSubmit:function(n){n.preventDefault(),e.current.value.match(/20[0-9]{7}/)&&9===e.current.value.length?t({type:"update-student-no",payload:{studentNo:e.current.value,error:null}}):t({type:"add-error",payload:{error:"Student no. must match the format."}})},children:[Object(h.jsxs)(l.a.Group,{className:"mb-3",children:[Object(h.jsx)(l.a.Label,{children:"Student No."}),Object(h.jsx)(l.a.Control,{"aria-label":"Student No.",type:"text",placeholder:"201224564",ref:e})]}),Object(h.jsx)(d.a,{variant:"outline-secondary",type:"submit",children:"Submit"})]})})}var b=n(47);function u(t){var e=Object(c.useContext)(j),n=e.studentNoState,a=e.studentNoDispatch;return n.error?Object(h.jsx)(b.a,{variant:"danger",onClose:function(){return a({type:"clear-errors"})},className:"position-fixed top-1 start-50 translate-middle",dismissible:!0,children:n.error}):Object(h.jsx)(h.Fragment,{})}var O=n(49),p=n(6),f=n(13),m=n.n(f),y=[[5.9,224.195],[6,237.726],[6.1,257.709],[6.2,280.212],[6.3,295.437],[6.4,300.439],[6.5,303.815],[6.6,313.731],[6.7,324.778],[6.8,324.37],[6.9,311.781],[7,300.255],[7.1,295.71],[7.2,285.312]],I={5.9:116.85295762063781,6:164.8868037759409,6.1:227.5508648988752,6.2:203.5295662641567,6.3:94.98741474827936,6.4:21.839918254130186,6.5:62.154007141518754,6.6:125.915904296332,6.7:69.91458419448895,6.8:-79.9044509874781,6.9:-145.18498036662191,7:-72.77235759230521,7.1:-43.953575275023006,7.2:-187.21831940860267},F={5.9:93.00483213971866,6:741.5339170639686,6.1:314.1813537083296,6.2:-795.334885390728,6.3:-1142.8439043614303,6.4:-162.07892005759044,6.5:795.507844985566,6.6:192.7782176621911,6.7:-1268.2618290520115,6.8:-1370.8505912811274,6.9:180.4400136915608,7:903.7518744412882,7.1:-597.6224214320387,7.2:-1937.9963382650033},N={5.9:47.772778684950445,6:51.63391900936011,6.1:55.79090479002156,6.2:58.73095250642549,6.3:60.03376039392893,6.4:60.99941187459599,6.5:62.79427002949812,6.6:64.55778264486763,6.7:64.44820411266326,6.8:62.40132566332259,6.9:60.310363685995405,7:58.94526820210409,7.1:56.46561961979873,7.2:51.37461930711667},v=function(t){return t*t+t*t*t*Math.cos(t)-Math.sin(t)+t*Math.sin(t*t)},M=function(t){var e=t.x0,n=t.x1,c=t.x2,a=t.y0,r=t.y1,s=t.y2;return function(t){return a*((t-n)*(t-c)/((e-n)*(e-c)))+r*((t-e)*(t-c)/((n-e)*(n-c)))+s*((t-e)*(t-n)/((c-e)*(c-n)))}},g=function(t){var e=t.x0,n=t.x1,c=t.y0,a=t.y1;return function(t){return c*((n-t)/(n-e))+a*((t-e)/(n-e))}},_=function(t,e,n,c){for(var a=0,r=parseFloat(t);r.toFixed(10)<parseFloat(e);r=parseFloat((r+n).toFixed(10)))a+=c(r);return a},k=function(t,e,n,c){for(var a=c(t),r=t+n;r.toFixed(10)<parseFloat(e);r=parseFloat((r+n).toFixed(10)))a+=2*c(r);return a+=c(e)};function C(t){var e=parseFloat(Math.trunc(10*t.toInterpolate)/10),n=y.findIndex((function(t){return t[0]===e})),c=y.slice(n,n+3),a=[],r=[];if(0!==(null===c||void 0===c?void 0:c.length))for(var s=M({x0:c[0][0],x1:c[1][0],x2:c[2][0],y0:c[0][1],y1:c[1][1],y2:c[2][1]}),o=0;o<100;o++){var i=c[0][0]+o*(c[2][0]-c[0][0])/100;a.push(i),r.push(s(i.toFixed(6)))}return Object(h.jsxs)(h.Fragment,{children:[t.toInterpolate&&Object(h.jsx)(m.a,{config:{displayModeBar:!1,scrollZoom:!1,staticPlot:!0},data:[{x:c.map((function(t){return t[0]})),y:c.map((function(t){return t[1]})),type:"scatter",mode:"markers",marker:{color:"black"},name:"Given dataset"},{x:[c[0][0],c[1][0]],y:[c[0][1],c[0][1]],type:"scatter",line:{dash:"dot"},mode:"lines+markers",marker:{color:"red"},name:"PCLE"},{x:[c[1][0],c[2][0]],y:[c[1][1],c[1][1]],type:"scatter",line:{dash:"dot"},mode:"lines+markers",marker:{color:"red"},name:"PCLE",showlegend:!1},{x:[c[0][0],c[1][0]],y:[c[0][1],c[1][1]],type:"scatter",line:{shape:"linear",dash:"dash"},mode:"lines+markers",marker:{color:"green"},name:"Piecewise-Linear"},{x:[c[1][0],c[2][0]],y:[c[1][1],c[2][1]],type:"scatter",line:{shape:"linear",dash:"dash"},mode:"lines+markers",marker:{color:"green"},name:"Piecewise-Linear",showlegend:!1},{x:a,y:r,type:"scatter",line:{shape:"spline",dash:"longdash"},mode:"lines",marker:{color:"blue"},name:"Quadratic"}],layout:{shapes:[{line:{color:"black",dash:"solid",width:.5},type:"line",x0:t.toInterpolate,x1:t.toInterpolate,yref:"paper",y0:0,y1:1}]}}),!t.toInterpolate&&"Enter your student no."]})}function w(t){var e=parseFloat(Math.trunc(10*t.toInterpolate)/10),n=y.findIndex((function(t){return t[0]===e})),c=y.slice(n,n+3),a=c.length>0?M({x0:c[0][0],x1:c[1][0],x2:c[2][0],y0:c[0][1],y1:c[1][1],y2:c[2][1]}):null,r=c.length>0?g({x0:c[0][0],x1:c[1][0],y0:c[0][1],y1:c[1][1]}):null;return Object(h.jsxs)("div",{children:[t.toInterpolate&&Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:["PCLE: F(",t.toInterpolate,") ="," ",Object(h.jsx)("strong",{children:0!==(null===c||void 0===c?void 0:c.length)?c[0][1]:""})]}),Object(h.jsxs)("li",{children:["Picewise Linear: F(",t.toInterpolate,") ="," ",Object(h.jsx)("strong",{children:0!==(null===c||void 0===c?void 0:c.length)?r(t.toInterpolate).toFixed(6):""})]}),Object(h.jsxs)("li",{children:["Quadratic: F(",t.toInterpolate,") ="," ",Object(h.jsx)("strong",{children:0!==(null===c||void 0===c?void 0:c.length)?a(t.toInterpolate).toFixed(6):""})," "]})]}),!t.toInterpolate&&"Enter your student no."]})}function P(t){var e=parseFloat(Math.trunc(10*t.toInterpolate)/10),n=y.findIndex((function(t){return t[0]===e})),c=y.slice(n,n+3),a=c.length>0?M({x0:c[0][0],x1:c[1][0],x2:c[2][0],y0:c[0][1],y1:c[1][1],y2:c[2][1]}):null,r=c.length>0?g({x0:c[0][0],x1:c[1][0],y0:c[0][1],y1:c[1][1]}):null;return Object(h.jsxs)("div",{children:[t.toInterpolate&&Object(h.jsxs)("ul",{children:[Object(h.jsxs)("strong",{children:["f(",t.toInterpolate,") = ",v(t.toInterpolate).toFixed(6)]}),Object(h.jsxs)("li",{children:["PCLE: | F(",t.toInterpolate,") - f(",t.toInterpolate,") | ="," |",0!==(null===c||void 0===c?void 0:c.length)?c[0][1]:""," -"," ",v(t.toInterpolate).toFixed(6),"| =",Object(h.jsxs)("strong",{children:[" ",Math.abs(c[0][1]-v(t.toInterpolate)).toFixed(12)]})]}),Object(h.jsxs)("li",{children:["Picewise Linear: | F(",t.toInterpolate,") - f(",t.toInterpolate,") | ="," |",0!==(null===c||void 0===c?void 0:c.length)?r(t.toInterpolate).toFixed(6):"","- ",v(t.toInterpolate).toFixed(6),"| =",Object(h.jsxs)("strong",{children:[" ",Math.abs(r(t.toInterpolate)-v(t.toInterpolate)).toFixed(12)]})]}),Object(h.jsxs)("li",{children:["Quadratic: | F(",t.toInterpolate,") - f(",t.toInterpolate,") | ="," |",0!==(null===c||void 0===c?void 0:c.length)?a(t.toInterpolate).toFixed(6):"","- ",v(t.toInterpolate).toFixed(6),"| ="," ",Object(h.jsxs)("strong",{children:[" ",Math.abs(a(t.toInterpolate)-v(t.toInterpolate)).toFixed(12)]})]})]}),!t.toInterpolate&&"Enter your student no."]})}function S(){var t=Object(c.useContext)(j).studentNoState;return Object(h.jsxs)(O.a,{children:[Object(h.jsx)(O.a.Header,{children:"#1"}),Object(h.jsxs)(O.a.Body,{children:[Object(h.jsx)(O.a.Title,{children:"a) Graph the (i) Piecewise-Constant, Left-Endpoint interpolant, (ii) Piecewise-Linear interpolant, and (iii) Quadratic Interpolant."}),Object(h.jsx)(C,{toInterpolate:""!==t.studentNo?parseFloat("6."+t.studentNo.substring(4,9)):null}),Object(h.jsxs)(O.a.Title,{children:["b) Approximate \ud835\udc53(6.",""!==t.studentNo?t.studentNo.substring(4,9):"\ud835\udefc\ud835\udefd\ud835\udefe\ud835\udeff\ud835\udf16",") using: (i) Piecewise-Constant, Left-Endpoint, (ii) Piecewise-Linear, and (iii) Quadratic Interpolation."]}),Object(h.jsx)(w,{toInterpolate:""!==t.studentNo?parseFloat("6."+t.studentNo.substring(4,9)):null}),Object(h.jsxs)(O.a.Title,{children:["c) Compute the error for your interpolation for each interpolant if"," ",Object(h.jsx)(p.InlineMath,{math:"f(x) =\\sqrt{e^{-x^2}+2x+3} - \\sqrt[x]{e^{-x^2}+2x-3}"})]}),Object(h.jsx)(P,{toInterpolate:""!==t.studentNo?parseFloat("6."+t.studentNo.substring(4,9)):null})]})]})}var E=n(45),L=n(46);function T(t){for(var e=t.toInterpolate?function(t){for(var e=t.start,n=t.end,c=t.step,a=t.target,r=0,s=e;s<n&&!(s>=a);s=parseFloat((s+c).toFixed(4)))s>r&&(r=s);return[r,parseFloat((r+c).toFixed(4)),parseFloat((r+2*c).toFixed(4))]}({start:parseFloat(Math.trunc(10*t.toInterpolate)/10),end:parseFloat(Math.trunc(10+10*t.toInterpolate)/10),step:t.step,target:t.toInterpolate}):[0,0,0],n=Object(o.a)(e,3),c=n[0],a=n[1],r=n[2],s=v(c),l=v(a),d=v(r),j=[],x=[],b=M({x0:c,x1:a,x2:r,y0:s,y1:l,y2:d}),u=g({x0:c,x1:a,y0:s,y1:l}),O=0;O<100;O++){var p=c+O*(r-c)/100;j.push(p),x.push(b(p.toFixed(6)))}return Object(h.jsx)(h.Fragment,{children:t.toInterpolate&&Object(h.jsxs)(i.a,{children:[Object(h.jsx)(m.a,{config:{displayModeBar:!1,scrollZoom:!1,staticPlot:!0},layout:{shapes:[{line:{color:"black",dash:"solid",width:.5},type:"line",x0:t.toInterpolate,x1:t.toInterpolate,yref:"paper",y0:0,y1:1}]},data:[{x:[c,a,r],y:[s,l,d],type:"scatter",mode:"markers",marker:{color:"black"},name:"Generated data"},{x:[c,a],y:[s,s],type:"scatter",line:{dash:"dot"},mode:"lines+markers",marker:{color:"red"},name:"PCLE"},{x:[a,r],y:[l,l],type:"scatter",line:{dash:"dot"},mode:"lines+markers",marker:{color:"red"},name:"PCLE",showlegend:!1},{x:[c,a],y:[s,l],type:"scatter",line:{shape:"linear",dash:"dash"},mode:"lines+markers",marker:{color:"green"},name:"Piecewise-Linear"},{x:[a,r],y:[l,d],type:"scatter",line:{shape:"linear",dash:"dash"},mode:"lines+markers",marker:{color:"green"},name:"Piecewise-Linear",showlegend:!1},{x:j,y:x,type:"scatter",line:{shape:"spline",dash:"longdash"},mode:"lines",marker:{color:"blue"},name:"Quadratic"}]}),Object(h.jsx)(E.a,{children:Object(h.jsxs)(L.a,{className:"container",responsive:!0,striped:!0,size:"sm",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Interpolant"}),Object(h.jsx)("th",{children:"F(x)"}),Object(h.jsx)("th",{children:"Error"})]})}),Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"PCLE"}),Object(h.jsx)("td",{children:s.toFixed(6)}),Object(h.jsx)("td",{children:Math.abs(s-v(t.toInterpolate)).toFixed(12)})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Linear"}),Object(h.jsx)("td",{children:u(t.toInterpolate).toFixed(6)}),Object(h.jsx)("td",{children:Math.abs(u(t.toInterpolate)-v(t.toInterpolate)).toFixed(12)})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Quadratic"}),Object(h.jsx)("td",{children:b(t.toInterpolate).toFixed(6)}),Object(h.jsx)("td",{children:Math.abs(b(t.toInterpolate)-v(t.toInterpolate)).toFixed(12)})]})]})]})})]})})}function B(){var t=Object(c.useContext)(j).studentNoState;return Object(h.jsxs)(O.a,{children:[Object(h.jsx)(O.a.Header,{children:"#2"}),Object(h.jsxs)(O.a.Body,{children:[Object(h.jsx)(O.a.Title,{children:"h = 0.05"}),Object(h.jsx)(T,{step:.05,toInterpolate:""!==t.studentNo?parseFloat("6."+t.studentNo.substring(4,9)):null}),Object(h.jsx)(O.a.Title,{children:"h = 0.025"}),Object(h.jsx)(T,{step:.025,toInterpolate:""!==t.studentNo?parseFloat("6."+t.studentNo.substring(4,9)):null})]})]})}function z(){var t=Object(c.useContext)(j).studentNoState,e=parseFloat("6"+t.studentNo.substring(4,5))/10;return Object(h.jsxs)(O.a,{children:[Object(h.jsxs)(O.a.Header,{children:["#3",Object(h.jsx)(p.InlineMath,{math:"f'(".concat(""!==t.studentNo?e:"6.\\alpha",")")})]}),Object(h.jsxs)(O.a.Body,{children:[Object(h.jsx)(O.a.Title,{children:"Forward Difference"}),Object(h.jsxs)(L.a,{className:"container",responsive:!0,striped:!0,size:"sm",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"h"}),Object(h.jsx)("th",{children:"f'(x)"})]})}),Object(h.jsx)("tbody",{children:[.1,.05,.025].map((function(n){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:n}),Object(h.jsxs)("td",{children:[""!==t.studentNo&&Object(h.jsx)(p.InlineMath,{math:"f'(".concat(e,")= \\frac{f(").concat((e+n).toFixed(4),") - f(").concat(e,")}{").concat(n,"}= ").concat(((v(e+n)-v(e))/n).toFixed(6))}),""===t.studentNo&&Object(h.jsx)(p.InlineMath,{math:"f'(6.\\alpha) =\\frac{f(6.\\alpha + 0.1) - f(6.\\alpha)}{0.1}"})]})]},"forward-diff-".concat(n))}))})]}),Object(h.jsx)(O.a.Title,{children:"Backward Difference"}),Object(h.jsxs)(L.a,{className:"container",responsive:!0,striped:!0,size:"sm",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"h"}),Object(h.jsx)("th",{children:"f'(x)"})]})}),Object(h.jsx)("tbody",{children:[.1,.05,.025].map((function(n){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:n}),Object(h.jsxs)("td",{children:[""!==t.studentNo&&Object(h.jsx)(p.InlineMath,{math:"f'(".concat(e,")= \\frac{f(").concat(e,") - f(").concat((e-n).toFixed(4),")}{").concat(n,"}= ").concat(((v(e)-v(e-n))/n).toFixed(6))}),""===t.studentNo&&Object(h.jsx)(p.InlineMath,{math:"f'(6.\\alpha) =\\frac{f(6.\\alpha) - f(6.\\alpha - ".concat(n,")}{").concat(n,"}")})]})]},"backward-diff-".concat(n))}))})]}),Object(h.jsx)(O.a.Title,{children:"Central Difference"}),Object(h.jsxs)(L.a,{className:"container",responsive:!0,striped:!0,size:"sm",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"h"}),Object(h.jsx)("th",{children:"f'(x)"})]})}),Object(h.jsx)("tbody",{children:[.1,.05,.025].map((function(n){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:n}),Object(h.jsxs)("td",{children:[""!==t.studentNo&&Object(h.jsx)(p.InlineMath,{math:"f'(".concat(e,")= \\frac{f(").concat((e+n).toFixed(4),") - f(").concat((e-n).toFixed(4),")}{").concat(2*n,"}= ").concat(((v(e+n)-v(e-n))/(2*n)).toFixed(6))}),""===t.studentNo&&Object(h.jsx)(p.InlineMath,{math:"f'(6.\\alpha) =\\frac{f(6.\\alpha + ".concat(n,") - f(6.\\alpha - ").concat(n,")}{").concat(2*n,"}")})]})]},"central-diff-".concat(n))}))})]}),Object(h.jsx)(O.a.Title,{children:"Errors"}),Object(h.jsxs)(L.a,{className:"container",responsive:!0,striped:!0,size:"sm",children:[""!==t.studentNo&&Object(h.jsx)(p.InlineMath,{math:"f_a'(".concat(e,")= ").concat(I[e])}),Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"h"}),Object(h.jsx)("th",{children:"Forward"}),Object(h.jsx)("th",{children:"Backward"}),Object(h.jsx)("th",{children:"Center"})]})}),Object(h.jsx)("tbody",{children:[.1,.05,.025].map((function(n){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:n}),Object(h.jsxs)("td",{children:[""!==t.studentNo&&Object(h.jsx)(p.InlineMath,{math:"|f_a'(".concat(e,") - f'(").concat(e,")|= ").concat(Math.abs((v(e+n)-v(e))/n-I[e]).toFixed(6))}),""===t.studentNo&&Object(h.jsx)(p.InlineMath,{math:"|f_a'(6.\\alpha) - f'(6.\\alpha)| = |f_a'(6.\\alpha) - \\frac{f(6.\\alpha + ".concat(n,") - f(6.\\alpha)}{").concat(n,"}|")})]}),Object(h.jsxs)("td",{children:[""!==t.studentNo&&Object(h.jsx)(p.InlineMath,{math:"|f_a'(".concat(e,") - f'(").concat(e,")|= ").concat(Math.abs((v(e)-v(e-n))/n-I[e]).toFixed(6))}),""===t.studentNo&&Object(h.jsx)(p.InlineMath,{math:"|f_a'(6.\\alpha) - f'(6.\\alpha)| = |f_a'(6.\\alpha) - \\frac{f(6.\\alpha) - f(6.\\alpha - ".concat(n,")}{").concat(n,"}|")})]}),Object(h.jsxs)("td",{children:[""!==t.studentNo&&Object(h.jsx)(p.InlineMath,{math:"|f_a'(".concat(e,") - f'(").concat(e,")|= ").concat(Math.abs((v(e+n)-v(e-n))/(2*n)-I[e]).toFixed(6))}),""===t.studentNo&&Object(h.jsx)(p.InlineMath,{math:"|f_a'(6.\\alpha) - f'(6.\\alpha)| = |f_a'(6.\\alpha) - \\frac{f(6.\\alpha + ".concat(n,") - f(6.\\alpha - ").concat(n,")}{").concat(2*n,"}|")})]})]},"error-diff-".concat(n))}))})]})]})]})}function D(){var t=Object(c.useContext)(j).studentNoState,e=parseFloat("6"+t.studentNo.substring(4,5))/10;return Object(h.jsxs)(O.a,{children:[Object(h.jsxs)(O.a.Header,{children:["#4",Object(h.jsx)(p.InlineMath,{math:"f''(".concat(""!==t.studentNo?parseFloat("6."+t.studentNo.substring(4,5)):"6.\\alpha",")")})]}),Object(h.jsxs)(O.a.Body,{children:[Object(h.jsx)(O.a.Title,{children:"Central Difference"}),Object(h.jsxs)(L.a,{className:"container",responsive:!0,striped:!0,size:"sm",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"h"}),Object(h.jsx)("th",{children:"f''(x)"}),Object(h.jsxs)("th",{children:["error"," ",""!==t.studentNo&&Object(h.jsx)(p.InlineMath,{math:"f_a''(".concat(e,")= ").concat(F[e])})]})]})}),Object(h.jsx)("tbody",{children:[.1,.05,.025].map((function(n){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:n}),Object(h.jsxs)("td",{children:[""!==t.studentNo&&Object(h.jsx)(p.InlineMath,{math:"f''(".concat(e,")= \\frac{f(").concat((e+n).toFixed(4),") - f(").concat((e-n).toFixed(4),")}{").concat(2*n,"}= ").concat(((v(e+n)-2*v(e)+v(e-n))/(n*n)).toFixed(8))}),""===t.studentNo&&Object(h.jsx)(p.InlineMath,{math:"f''(6.\\alpha) =\\frac{f(6.\\alpha + ".concat(n,") - 2f(6.\\alpha) + f(6.\\alpha - ").concat(n,")}{").concat(n,"^2}")})]}),Object(h.jsxs)("td",{children:[""!==t.studentNo&&Object(h.jsx)(p.InlineMath,{math:"|f_a''(".concat(e,") - f''(").concat(e,")|=  ").concat(Math.abs(F[e]-(v(e+n)-2*v(e)+v(e-n))/(n*n)).toFixed(8))}),""===t.studentNo&&Object(h.jsx)(p.InlineMath,{math:"|f_a''(6.\\alpha) - f''(6.\\alpha)| = | f_a''(6.\\alpha) - \\frac{f(6.\\alpha + ".concat(n,") - 2f(6.\\alpha) + f(6.\\alpha - ").concat(n,")}{").concat(n,"^2}|")})]})]},"central-diff-".concat(n))}))})]})]})]})}function R(){var t=Object(c.useContext)(j).studentNoState,e=""!==t.studentNo?parseFloat("6."+t.studentNo.substring(4,5)):"6.\\alpha",n=""!==t.studentNo?parseFloat(parseFloat("6."+t.studentNo.substring(4,5))+.2).toFixed(1):"6.\\alpha + 0.2",a=parseFloat("6"+t.studentNo.substring(4,5))/10;return Object(h.jsxs)(O.a,{children:[Object(h.jsxs)(O.a.Header,{children:["#5",Object(h.jsx)(p.InlineMath,{math:"\\int_{".concat(e,"}^{").concat(n,"} f(x) dx")})]}),Object(h.jsxs)(O.a.Body,{children:[Object(h.jsx)(O.a.Title,{children:"Rectangle Rule (left)"}),Object(h.jsxs)(L.a,{className:"container",responsive:!0,striped:!0,size:"sm",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"h"}),Object(h.jsx)("th",{children:Object(h.jsx)(p.InlineMath,{math:"\\int_{".concat(e,"}^{").concat(n,"} f(x) dx")})})]})}),Object(h.jsx)("tbody",{children:[.1,.05,.025].map((function(c){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:c}),Object(h.jsxs)("td",{children:[""!==t.studentNo&&Object(h.jsx)(p.InlineMath,{math:"\\int_{".concat(e,"}^{").concat(n,"} f(x) dx = ").concat((c*_(e,n,c,v)).toFixed(6))}),""===t.studentNo&&Object(h.jsx)(p.InlineMath,{math:"\\int_{".concat(e,"}^{").concat(n,"} f(x) dx = \\sum {f(x_i)*").concat(c,"}")})]})]},"rectangle-rule-".concat(c))}))})]}),Object(h.jsx)(O.a.Title,{children:"Trapezoidal"}),Object(h.jsxs)(L.a,{className:"container",responsive:!0,striped:!0,size:"sm",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"h"}),Object(h.jsx)("th",{children:Object(h.jsx)(p.InlineMath,{math:"\\int_{".concat(e,"}^{").concat(n,"} f(x) dx")})})]})}),Object(h.jsx)("tbody",{children:[.1,.05,.025].map((function(c){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:c}),Object(h.jsxs)("td",{children:[""!==t.studentNo&&Object(h.jsx)(p.InlineMath,{math:"\\int_{".concat(e,"}^{").concat(n,"} f(x) dx = ").concat((.5*c*k(e,n,c,v)).toFixed(6))}),""===t.studentNo&&Object(h.jsx)(p.InlineMath,{math:"\\int_{".concat(e,"}^{").concat(n,"} f(x) dx = \\sum {(f(x_i) + f(x_{i + 1}))*\\frac{").concat(c,"}{2}}")})]})]},"trapezoid-rule-".concat(c))}))})]}),Object(h.jsx)(O.a.Title,{children:"Errors"}),Object(h.jsxs)(L.a,{className:"container",responsive:!0,striped:!0,size:"sm",children:[""!==t.studentNo&&Object(h.jsx)(p.InlineMath,{math:"{\\int_{".concat(e,"}^{").concat(n,"} f(x) dx}_a = ").concat(N[a])}),Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"h"}),Object(h.jsx)("th",{children:"Rectangle"}),Object(h.jsx)("th",{children:"Trapezoidal"})]})}),Object(h.jsx)("tbody",{children:[.1,.05,.025].map((function(c){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:c}),Object(h.jsxs)("td",{children:[""!==t.studentNo&&Object(h.jsx)(p.InlineMath,{math:"| {\\int_{".concat(e,"}^{").concat(n,"} f(x) dx}_a  -\\int_{").concat(e,"}^{").concat(n,"} f(x) dx|  = ").concat(Math.abs(N[a]-c*_(e,n,c,v)).toFixed(6))}),""===t.studentNo&&Object(h.jsx)(p.InlineMath,{math:"| {\\int_{".concat(e,"}^{").concat(n,"} f(x) dx}_a  -\\int_{").concat(e,"}^{").concat(n,"} f(x) dx| = |{\\int_{").concat(e,"}^{").concat(n,"} f(x) dx}_a -\\sum {f(x_i)*").concat(c,"}|")})]}),Object(h.jsxs)("td",{children:[""!==t.studentNo&&Object(h.jsx)(p.InlineMath,{math:"| {\\int_{".concat(e,"}^{").concat(n,"} f(x) dx}_a  -\\int_{").concat(e,"}^{").concat(n,"} f(x) dx| = ").concat(Math.abs(N[a]-.5*c*k(e,n,c,v)).toFixed(6))}),""===t.studentNo&&Object(h.jsx)(p.InlineMath,{math:"| {\\int_{".concat(e,"}^{").concat(n,"} f(x) dx}_a  -\\int_{").concat(e,"}^{").concat(n,"} f(x) dx| = |{\\int_{").concat(e,"}^{").concat(n,"} f(x) dx}_a -\\sum {(f(x_i) + f(x_{i + 1}))*\\frac{").concat(c,"}{2}}|")})]})]},"error-int-".concat(c))}))})]})]})]})}var Q=function(t,e){return 3+e-t},H=function(t,e){return 2*t-3*e},A=function(t,e){return(Math.pow(e,2)-Math.pow(t,2))*Math.sin(t)},G=function(t,e){return 2*e+Math.exp(-e*t)},J=function(t){for(var e=t.dy,n=t.h,c=Object(o.a)(t.bounds,2),a=c[0],r=c[1],s=t.y_a,i=[],l=[],d=a;d<r;d=parseFloat((d+n).toFixed(10)))l.push(d);i[0]=s;for(var j=0;j<l.length-1;j++)i[j+1]=i[j]+e(i[j],l[j])*n;return[i,l]},K=function(t){for(var e=t.dy,n=t.h,c=Object(o.a)(t.bounds,2),a=c[0],r=c[1],s=t.y_a,i=[],l=[],d=a;d<r;d=parseFloat((d+n).toFixed(10)))l.push(d);i[0]=s;for(var j=0;j<l.length-1;j++){var h=n*e(i[j],l[j]),x=n*e(i[j]+h/2,l[j]+n/2),b=n*e(i[j]+x/2,l[j]+n/2),u=n*e(i[j]+b,l[j]+n);i[j+1]=i[j]+h/6+x/3+b/3+u/6}return[i,l]};function Z(){var t=Object(c.useState)((function(){return Q})),e=Object(o.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(1),s=Object(o.a)(r,2),l=s[0],j=s[1],x=J({dy:n,h:.025,bounds:[0,1],y_a:l}),b=Object(o.a)(x,2),u=b[0],p=b[1],f=J({dy:n,h:.05,bounds:[0,1],y_a:l}),y=Object(o.a)(f,2),I=y[0],F=y[1],N=K({dy:n,h:.025,bounds:[0,1],y_a:l}),v=Object(o.a)(N,2),M=v[0],g=v[1],_=K({dy:n,h:.05,bounds:[0,1],y_a:l}),k=Object(o.a)(_,2),C=k[0],w=k[1];return Object(h.jsxs)(O.a,{className:"my-2",children:[Object(h.jsxs)(i.a,{children:[Object(h.jsx)(d.a,{onClick:function(){a((function(){return Q})),j(1)},children:"1A"}),Object(h.jsx)(d.a,{onClick:function(){a((function(){return H})),j(1)},children:"1B"}),Object(h.jsx)(d.a,{onClick:function(){a((function(){return A})),j(-1)},children:"2A"}),Object(h.jsx)(d.a,{onClick:function(){a((function(){return G})),j(1)},children:"2B"})]}),Object(h.jsx)(m.a,{config:{displayModeBar:!1,scrollZoom:!1,staticPlot:!0},data:[{x:p,y:u,name:"Euler h = 0.025",line:{shape:"linear",dash:"dash"},mode:"lines",type:"scatter"},{x:F,y:I,name:"Euler h = 0.05",line:{shape:"linear",dash:"dashdot"},mode:"lines",type:"scatter"},{x:g,y:M,line:{shape:"linear",dash:"longdash"},name:"RK4 h = 0.025",mode:"lines",type:"scatter"},{x:w,y:C,line:{shape:"linear",dash:"longdashdot"},name:"RK4 h = 0.05",mode:"lines",type:"scatter"}]}),Object(h.jsx)(i.a,{children:Object(h.jsxs)(L.a,{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"t"}),Object(h.jsx)("th",{children:"Euler h = 0.025"}),Object(h.jsx)("th",{children:"Euler h = 0.05"}),Object(h.jsx)("th",{children:"RK4 h = 0.025"}),Object(h.jsx)("th",{children:"RK4 h = 0.05"})]})}),Object(h.jsx)("tbody",{children:[.1,.2,.3,.4].map((function(t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:t}),Object(h.jsx)("td",{children:u[p.findIndex((function(e){return e===t}))].toFixed(6)}),Object(h.jsx)("td",{children:I[F.findIndex((function(e){return e===t}))].toFixed(6)}),Object(h.jsx)("td",{children:M[g.findIndex((function(e){return e===t}))].toFixed(6)}),Object(h.jsx)("td",{children:C[w.findIndex((function(e){return e===t}))].toFixed(6)})]},"".concat(t,"-row-ode"))}))})]})})]})}function q(){return Object(h.jsx)(i.a,{className:"my-2",children:Object(h.jsxs)(L.a,{responsive:!0,striped:!0,bordered:!0,size:"sm",className:"text-center",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"x"}),Object(h.jsx)("th",{children:"f(x)"})]})}),Object(h.jsx)("tbody",{children:y.map((function(t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:t[0]}),Object(h.jsx)("td",{children:t[1]})]},"".concat(t,"-set"))}))})]})})}n(39);var U=function(t,e){var n=JSON.parse(JSON.stringify(t));switch(e.type){case"clear-errors":n.error=null;break;case"add-error":n.error=e.payload.error;break;case"update-student-no":n=e.payload;break;case"clear-student-no":n.studentNo="";break;default:return}return n},V=n(23);var W=function(){var t=Object(c.useReducer)(U,{studentNo:"",error:null}),e=Object(o.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(!1),s=Object(o.a)(r,2),i=s[0],l=s[1];return Object(h.jsx)(j.Provider,{value:{studentNoState:n,studentNoDispatch:a},children:Object(h.jsxs)("div",{className:"App container my-5",children:[Object(h.jsx)(u,{errors:n.error}),Object(h.jsxs)(d.a,{onClick:function(){return l(!i)},children:[i?"Hide":"Show"," Dataset"]}),Object(h.jsx)(d.a,{className:"mx-2",onClick:function(){return a({type:"clear-student-no"})},children:"Clear Student No."}),Object(h.jsx)(x,{}),i&&Object(h.jsx)(q,{}),Object(h.jsxs)(V.a,{children:["PS3A:",Object(h.jsx)(S,{}),Object(h.jsx)(E.a,{className:"my-3"}),Object(h.jsx)(B,{}),Object(h.jsx)(E.a,{className:"my-3"}),Object(h.jsx)(z,{}),Object(h.jsx)(E.a,{className:"my-3"}),Object(h.jsx)(D,{}),Object(h.jsx)(E.a,{className:"my-3"}),Object(h.jsx)(R,{}),Object(h.jsx)(E.a,{className:"my-3"})]}),"PS3B:",Object(h.jsx)(Z,{})]})})};n(40);s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(W,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.9b12d834.chunk.js.map