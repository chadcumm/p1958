import{A as Ei,C as wa,E as Pi,b as ur,c as Ci,e as En,g as U1,h as ji,j as Re,m as ki,p as Y1,q as H1,s as Ni,u as Pn,v as Ai,x as j5,z as _i}from"./chunk-HCP3YZHC.js";import"./chunk-3M7RLJMQ.js";import{X as Si,d as $0}from"./chunk-GTQNPUMZ.js";import{e as f4}from"./chunk-SL3Q6CWM.js";import"./chunk-LB57KM7K.js";import{$ as yi,A as Xs,B as v8,C as Ys,D as Zs,E as ei,F as ai,G as ni,H as ti,I as ri,J as ci,K as li,L as oi,M as C5,N as si,O as ii,R as fi,S as ui,T as di,U as pi,V as vi,W as mi,X as hi,Y as gi,Z as zi,_ as bi,a as x5,aa as Mi,b as or,ba as xi,c as Fs,ca as Li,d as d8,da as wi,e as Bs,h as La,i as Is,j as sr,k as ir,l as fr,m as t6,n as L5,o as Us,p as Hs,q as Ws,r as Vs,t as Js,u as Gs,v as Ks,w as Qs,y as p8,z as w5}from"./chunk-C7V345I4.js";import{a as O4,b as c3,d as n1,g as lr}from"./chunk-7RJXRMKA.js";var Ii=n1(T5=>{"use strict";var Bi={b:"\b",f:"\f",n:`
`,r:"\r",t:"	",'"':'"',"/":"/","\\":"\\"},uh=97;T5.parse=function(e,a,n){var t={},c=0,l=0,o=0,s=n&&n.bigint&&typeof BigInt<"u";return{data:i("",!0),pointers:t};function i(k,$){f();var U;S(k,"value");var O=p();switch(O){case"t":v("rue"),U=!0;break;case"f":v("alse"),U=!1;break;case"n":v("ull"),U=null;break;case'"':U=u();break;case"[":U=h(k);break;case"{":U=m(k);break;default:g(),"-0123456789".indexOf(O)>=0?U=d():E()}return S(k,"valueEnd"),f(),$&&o<e.length&&E(),U}function f(){e:for(;o<e.length;){switch(e[o]){case" ":l++;break;case"	":l+=4;break;case"\r":l=0;break;case`
`:l=0,c++;break;default:break e}o++}}function u(){for(var k="",$;$=p(),$!='"';)$=="\\"?($=p(),$ in Bi?k+=Bi[$]:$=="u"?k+=y():P()):k+=$;return k}function d(){var k="",$=!0;e[o]=="-"&&(k+=p()),k+=e[o]=="0"?p():L(),e[o]=="."&&(k+=p()+L(),$=!1),(e[o]=="e"||e[o]=="E")&&(k+=p(),(e[o]=="+"||e[o]=="-")&&(k+=p()),k+=L(),$=!1);var U=+k;return s&&$&&(U>Number.MAX_SAFE_INTEGER||U<Number.MIN_SAFE_INTEGER)?BigInt(k):U}function h(k){f();var $=[],U=0;if(p()=="]")return $;for(g();;){var O=k+"/"+U;$.push(i(O)),f();var c2=p();if(c2=="]")break;c2!=","&&P(),f(),U++}return $}function m(k){f();var $={};if(p()=="}")return $;for(g();;){var U=x();p()!='"'&&P();var O=u(),c2=k+"/"+P5(O);j(c2,"key",U),S(c2,"keyEnd"),f(),p()!=":"&&P(),f(),$[O]=i(c2),f();var u2=p();if(u2=="}")break;u2!=","&&P(),f()}return $}function v(k){for(var $=0;$<k.length;$++)p()!==k[$]&&P()}function p(){I();var k=e[o];return o++,l++,k}function g(){o--,l--}function y(){for(var k=4,$=0;k--;){$<<=4;var U=p().toLowerCase();U>="a"&&U<="f"?$+=U.charCodeAt()-uh+10:U>="0"&&U<="9"?$+=+U:P()}return String.fromCharCode($)}function L(){for(var k="";e[o]>="0"&&e[o]<="9";)k+=p();if(k.length)return k;I(),E()}function S(k,$){j(k,$,x())}function j(k,$,U){t[k]=t[k]||{},t[k][$]=U}function x(){return{line:c,column:l,pos:o}}function E(){throw new SyntaxError("Unexpected token "+e[o]+" in JSON at position "+o)}function P(){g(),E()}function I(){if(o>=e.length)throw new SyntaxError("Unexpected end of JSON input")}};T5.stringify=function(e,a,n){if(!mr(e))return;var t=0,c,l,o=typeof n=="object"?n.space:n;switch(typeof o){case"number":var s=o>10?10:o<0?0:Math.floor(o);o=s&&j(s," "),c=s,l=s;break;case"string":o=o.slice(0,10),c=0,l=0;for(var i=0;i<o.length;i++){var f=o[i];switch(f){case" ":l++;break;case"	":l+=4;break;case"\r":l=0;break;case`
`:l=0,t++;break;default:throw new Error("whitespace characters not allowed in JSON")}c++}break;default:o=void 0}var u="",d={},h=0,m=0,v=0,p=n&&n.es6&&typeof Map=="function";return g(e,0,""),{json:u,pointers:d};function g(x,E,P){switch(S(P,"value"),typeof x){case"number":case"bigint":case"boolean":y(""+x);break;case"string":y(hr(x));break;case"object":x===null?y("null"):typeof x.toJSON=="function"?y(hr(x.toJSON())):Array.isArray(x)?I():p?x.constructor.BYTES_PER_ELEMENT?I():x instanceof Map?$():x instanceof Set?$(!0):k():k()}S(P,"valueEnd");function I(){if(x.length){y("[");for(var U=E+1,O=0;O<x.length;O++){O&&y(","),L(U);var c2=mr(x[O])?x[O]:null,u2=P+"/"+O;g(c2,U,u2)}L(E),y("]")}else y("[]")}function k(){var U=Object.keys(x);if(U.length){y("{");for(var O=E+1,c2=0;c2<U.length;c2++){var u2=U[c2],l2=x[u2];if(mr(l2)){c2&&y(",");var S2=P+"/"+P5(u2);L(O),S(S2,"key"),y(hr(u2)),S(S2,"keyEnd"),y(":"),o&&y(" "),g(l2,O,S2)}}L(E),y("}")}else y("{}")}function $(U){if(x.size){y("{");for(var O=E+1,c2=!0,u2=x.entries(),l2=u2.next();!l2.done;){var S2=l2.value,q2=S2[0],f2=U?!0:S2[1];if(mr(f2)){c2||y(","),c2=!1;var o2=P+"/"+P5(q2);L(O),S(o2,"key"),y(hr(q2)),S(o2,"keyEnd"),y(":"),o&&y(" "),g(f2,O,o2)}l2=u2.next()}L(E),y("}")}else y("{}")}}function y(x){m+=x.length,v+=x.length,u+=x}function L(x){if(o){for(u+=`
`+j(x,o),h++,m=0;x--;)t?(h+=t,m=l):m+=l,v+=c;v+=1}}function S(x,E){d[x]=d[x]||{},d[x][E]={line:h,column:m,pos:v}}function j(x,E){return Array(x+1).join(E)}};var dh=["number","bigint","boolean","string","object"];function mr(e){return dh.indexOf(typeof e)>=0}var ph=/"|\\/g,vh=/[\b]/g,mh=/\f/g,hh=/\n/g,gh=/\r/g,zh=/\t/g;function hr(e){return e=e.replace(ph,"\\$&").replace(mh,"\\f").replace(vh,"\\b").replace(hh,"\\n").replace(gh,"\\r").replace(zh,"\\t"),'"'+e+'"'}var bh=/~/g,yh=/\//g;function P5(e){return e.replace(bh,"~0").replace(yh,"~1")}});var S9=n1((dN,j9)=>{"use strict";var C9=function(e,a){var n,t,c=1,l=0,o=0,s=String.alphabet;function i(f,u,d){if(d){for(n=u;d=i(f,n),d<76&&d>65;)++n;return+f.slice(u-1,n)}return d=s&&s.indexOf(f.charAt(u)),d>-1?d+76:(d=f.charCodeAt(u)||0,d<45||d>127?d:d<46?65:d<48?d-1:d<58?d+18:d<65?d-11:d<91?d+11:d<97?d-37:d<123?d+5:d-63)}if((e+="")!=(a+="")){for(;c;)if(t=i(e,l++),c=i(a,o++),t<76&&c<76&&t>66&&c>66&&(t=i(e,l,l),c=i(a,o,l=n),o=n),t!=c)return t<c?-1:1}return 0};try{j9.exports=C9}catch{String.naturalCompare=C9}});var Xn=n1(R4=>{"use strict";Object.defineProperty(R4,"__esModule",{value:!0});R4.regexpCode=R4.getEsmExportName=R4.getProperty=R4.safeStringify=R4.stringify=R4.strConcat=R4.addCodeArg=R4.str=R4._=R4.nil=R4._Code=R4.Name=R4.IDENTIFIER=R4._CodeOrName=void 0;var Kn=class{};R4._CodeOrName=Kn;R4.IDENTIFIER=/^[a-z$_][a-z$_0-9]*$/i;var Aa=class extends Kn{constructor(a){if(super(),!R4.IDENTIFIER.test(a))throw new Error("CodeGen: name must be a valid identifier");this.str=a}toString(){return this.str}emptyStr(){return!1}get names(){return{[this.str]:1}}};R4.Name=Aa;var ce=class extends Kn{constructor(a){super(),this._items=typeof a=="string"?[a]:a}toString(){return this.str}emptyStr(){if(this._items.length>1)return!1;let a=this._items[0];return a===""||a==='""'}get str(){var a;return(a=this._str)!==null&&a!==void 0?a:this._str=this._items.reduce((n,t)=>`${n}${t}`,"")}get names(){var a;return(a=this._names)!==null&&a!==void 0?a:this._names=this._items.reduce((n,t)=>(t instanceof Aa&&(n[t.str]=(n[t.str]||0)+1),n),{})}};R4._Code=ce;R4.nil=new ce("");function N9(e,...a){let n=[e[0]],t=0;for(;t<a.length;)rl(n,a[t]),n.push(e[++t]);return new ce(n)}R4._=N9;var tl=new ce("+");function A9(e,...a){let n=[Qn(e[0])],t=0;for(;t<a.length;)n.push(tl),rl(n,a[t]),n.push(tl,Qn(e[++t]));return tg(n),new ce(n)}R4.str=A9;function rl(e,a){a instanceof ce?e.push(...a._items):a instanceof Aa?e.push(a):e.push(lg(a))}R4.addCodeArg=rl;function tg(e){let a=1;for(;a<e.length-1;){if(e[a]===tl){let n=rg(e[a-1],e[a+1]);if(n!==void 0){e.splice(a-1,3,n);continue}e[a++]="+"}a++}}function rg(e,a){if(a==='""')return e;if(e==='""')return a;if(typeof e=="string")return a instanceof Aa||e[e.length-1]!=='"'?void 0:typeof a!="string"?`${e.slice(0,-1)}${a}"`:a[0]==='"'?e.slice(0,-1)+a.slice(1):void 0;if(typeof a=="string"&&a[0]==='"'&&!(e instanceof Aa))return`"${e}${a.slice(1)}`}function cg(e,a){return a.emptyStr()?e:e.emptyStr()?a:A9`${e}${a}`}R4.strConcat=cg;function lg(e){return typeof e=="number"||typeof e=="boolean"||e===null?e:Qn(Array.isArray(e)?e.join(","):e)}function og(e){return new ce(Qn(e))}R4.stringify=og;function Qn(e){return JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}R4.safeStringify=Qn;function sg(e){return typeof e=="string"&&R4.IDENTIFIER.test(e)?new ce(`.${e}`):N9`[${e}]`}R4.getProperty=sg;function ig(e){if(typeof e=="string"&&R4.IDENTIFIER.test(e))return new ce(`${e}`);throw new Error(`CodeGen: invalid export name: ${e}, use explicit $id name mapping`)}R4.getEsmExportName=ig;function fg(e){return new ce(e.toString())}R4.regexpCode=fg});var ol=n1(q3=>{"use strict";Object.defineProperty(q3,"__esModule",{value:!0});q3.ValueScope=q3.ValueScopeName=q3.Scope=q3.varKinds=q3.UsedValueState=void 0;var R3=Xn(),cl=class extends Error{constructor(a){super(`CodeGen: "code" for ${a} not defined`),this.value=a.value}},Lr=(function(e){return e[e.Started=0]="Started",e[e.Completed=1]="Completed",e})(Lr||(q3.UsedValueState=Lr={}));q3.varKinds={const:new R3.Name("const"),let:new R3.Name("let"),var:new R3.Name("var")};var wr=class{constructor({prefixes:a,parent:n}={}){this._names={},this._prefixes=a,this._parent=n}toName(a){return a instanceof R3.Name?a:this.name(a)}name(a){return new R3.Name(this._newName(a))}_newName(a){let n=this._names[a]||this._nameGroup(a);return`${a}${n.index++}`}_nameGroup(a){var n,t;if(!((t=(n=this._parent)===null||n===void 0?void 0:n._prefixes)===null||t===void 0)&&t.has(a)||this._prefixes&&!this._prefixes.has(a))throw new Error(`CodeGen: prefix "${a}" is not allowed in this scope`);return this._names[a]={prefix:a,index:0}}};q3.Scope=wr;var Cr=class extends R3.Name{constructor(a,n){super(n),this.prefix=a}setValue(a,{property:n,itemIndex:t}){this.value=a,this.scopePath=(0,R3._)`.${new R3.Name(n)}[${t}]`}};q3.ValueScopeName=Cr;var ug=(0,R3._)`\n`,ll=class extends wr{constructor(a){super(a),this._values={},this._scope=a.scope,this.opts=c3(O4({},a),{_n:a.lines?ug:R3.nil})}get(){return this._scope}name(a){return new Cr(a,this._newName(a))}value(a,n){var t;if(n.ref===void 0)throw new Error("CodeGen: ref must be passed in value");let c=this.toName(a),{prefix:l}=c,o=(t=n.key)!==null&&t!==void 0?t:n.ref,s=this._values[l];if(s){let u=s.get(o);if(u)return u}else s=this._values[l]=new Map;s.set(o,c);let i=this._scope[l]||(this._scope[l]=[]),f=i.length;return i[f]=n.ref,c.setValue(n,{property:l,itemIndex:f}),c}getValue(a,n){let t=this._values[a];if(t)return t.get(n)}scopeRefs(a,n=this._values){return this._reduceValues(n,t=>{if(t.scopePath===void 0)throw new Error(`CodeGen: name "${t}" has no value`);return(0,R3._)`${a}${t.scopePath}`})}scopeCode(a=this._values,n,t){return this._reduceValues(a,c=>{if(c.value===void 0)throw new Error(`CodeGen: name "${c}" has no value`);return c.value.code},n,t)}_reduceValues(a,n,t={},c){let l=R3.nil;for(let o in a){let s=a[o];if(!s)continue;let i=t[o]=t[o]||new Map;s.forEach(f=>{if(i.has(f))return;i.set(f,Lr.Started);let u=n(f);if(u){let d=this.opts.es5?q3.varKinds.var:q3.varKinds.const;l=(0,R3._)`${l}${d} ${f} = ${u};${this.opts._n}`}else if(u=c?.(f))l=(0,R3._)`${l}${u}${this.opts._n}`;else throw new cl(f);i.set(f,Lr.Completed)})}return l}};q3.ValueScope=ll});var v4=n1(u4=>{"use strict";Object.defineProperty(u4,"__esModule",{value:!0});u4.or=u4.and=u4.not=u4.CodeGen=u4.operators=u4.varKinds=u4.ValueScopeName=u4.ValueScope=u4.Scope=u4.Name=u4.regexpCode=u4.stringify=u4.getProperty=u4.nil=u4.strConcat=u4.str=u4._=void 0;var C4=Xn(),Me=ol(),F6=Xn();Object.defineProperty(u4,"_",{enumerable:!0,get:function(){return F6._}});Object.defineProperty(u4,"str",{enumerable:!0,get:function(){return F6.str}});Object.defineProperty(u4,"strConcat",{enumerable:!0,get:function(){return F6.strConcat}});Object.defineProperty(u4,"nil",{enumerable:!0,get:function(){return F6.nil}});Object.defineProperty(u4,"getProperty",{enumerable:!0,get:function(){return F6.getProperty}});Object.defineProperty(u4,"stringify",{enumerable:!0,get:function(){return F6.stringify}});Object.defineProperty(u4,"regexpCode",{enumerable:!0,get:function(){return F6.regexpCode}});Object.defineProperty(u4,"Name",{enumerable:!0,get:function(){return F6.Name}});var Ar=ol();Object.defineProperty(u4,"Scope",{enumerable:!0,get:function(){return Ar.Scope}});Object.defineProperty(u4,"ValueScope",{enumerable:!0,get:function(){return Ar.ValueScope}});Object.defineProperty(u4,"ValueScopeName",{enumerable:!0,get:function(){return Ar.ValueScopeName}});Object.defineProperty(u4,"varKinds",{enumerable:!0,get:function(){return Ar.varKinds}});u4.operators={GT:new C4._Code(">"),GTE:new C4._Code(">="),LT:new C4._Code("<"),LTE:new C4._Code("<="),EQ:new C4._Code("==="),NEQ:new C4._Code("!=="),NOT:new C4._Code("!"),OR:new C4._Code("||"),AND:new C4._Code("&&"),ADD:new C4._Code("+")};var o6=class{optimizeNodes(){return this}optimizeNames(a,n){return this}},sl=class extends o6{constructor(a,n,t){super(),this.varKind=a,this.name=n,this.rhs=t}render({es5:a,_n:n}){let t=a?Me.varKinds.var:this.varKind,c=this.rhs===void 0?"":` = ${this.rhs}`;return`${t} ${this.name}${c};`+n}optimizeNames(a,n){if(a[this.name.str])return this.rhs&&(this.rhs=b8(this.rhs,a,n)),this}get names(){return this.rhs instanceof C4._CodeOrName?this.rhs.names:{}}},Sr=class extends o6{constructor(a,n,t){super(),this.lhs=a,this.rhs=n,this.sideEffects=t}render({_n:a}){return`${this.lhs} = ${this.rhs};`+a}optimizeNames(a,n){if(!(this.lhs instanceof C4.Name&&!a[this.lhs.str]&&!this.sideEffects))return this.rhs=b8(this.rhs,a,n),this}get names(){let a=this.lhs instanceof C4.Name?{}:O4({},this.lhs.names);return Nr(a,this.rhs)}},il=class extends Sr{constructor(a,n,t,c){super(a,t,c),this.op=n}render({_n:a}){return`${this.lhs} ${this.op}= ${this.rhs};`+a}},fl=class extends o6{constructor(a){super(),this.label=a,this.names={}}render({_n:a}){return`${this.label}:`+a}},ul=class extends o6{constructor(a){super(),this.label=a,this.names={}}render({_n:a}){return`break${this.label?` ${this.label}`:""};`+a}},dl=class extends o6{constructor(a){super(),this.error=a}render({_n:a}){return`throw ${this.error};`+a}get names(){return this.error.names}},pl=class extends o6{constructor(a){super(),this.code=a}render({_n:a}){return`${this.code};`+a}optimizeNodes(){return`${this.code}`?this:void 0}optimizeNames(a,n){return this.code=b8(this.code,a,n),this}get names(){return this.code instanceof C4._CodeOrName?this.code.names:{}}},Yn=class extends o6{constructor(a=[]){super(),this.nodes=a}render(a){return this.nodes.reduce((n,t)=>n+t.render(a),"")}optimizeNodes(){let{nodes:a}=this,n=a.length;for(;n--;){let t=a[n].optimizeNodes();Array.isArray(t)?a.splice(n,1,...t):t?a[n]=t:a.splice(n,1)}return a.length>0?this:void 0}optimizeNames(a,n){let{nodes:t}=this,c=t.length;for(;c--;){let l=t[c];l.optimizeNames(a,n)||(dg(a,l.names),t.splice(c,1))}return t.length>0?this:void 0}get names(){return this.nodes.reduce((a,n)=>_a(a,n.names),{})}},s6=class extends Yn{render(a){return"{"+a._n+super.render(a)+"}"+a._n}},vl=class extends Yn{},ml=(()=>{class e extends s6{}return e.kind="else",e})(),jr=(()=>{class e extends s6{constructor(n,t){super(t),this.condition=n}render(n){let t=`if(${this.condition})`+super.render(n);return this.else&&(t+="else "+this.else.render(n)),t}optimizeNodes(){super.optimizeNodes();let n=this.condition;if(n===!0)return this.nodes;let t=this.else;if(t){let c=t.optimizeNodes();t=this.else=Array.isArray(c)?new ml(c):c}if(t)return n===!1?t instanceof e?t:t.nodes:this.nodes.length?this:new e(O9(n),t instanceof e?[t]:t.nodes);if(!(n===!1||!this.nodes.length))return this}optimizeNames(n,t){var c;if(this.else=(c=this.else)===null||c===void 0?void 0:c.optimizeNames(n,t),!!(super.optimizeNames(n,t)||this.else))return this.condition=b8(this.condition,n,t),this}get names(){let n=super.names;return Nr(n,this.condition),this.else&&_a(n,this.else.names),n}}return e.kind="if",e})(),_r=(()=>{class e extends s6{}return e.kind="for",e})(),hl=class extends _r{constructor(a){super(),this.iteration=a}render(a){return`for(${this.iteration})`+super.render(a)}optimizeNames(a,n){if(super.optimizeNames(a,n))return this.iteration=b8(this.iteration,a,n),this}get names(){return _a(super.names,this.iteration.names)}},gl=class extends _r{constructor(a,n,t,c){super(),this.varKind=a,this.name=n,this.from=t,this.to=c}render(a){let n=a.es5?Me.varKinds.var:this.varKind,{name:t,from:c,to:l}=this;return`for(${n} ${t}=${c}; ${t}<${l}; ${t}++)`+super.render(a)}get names(){let a=Nr(super.names,this.from);return Nr(a,this.to)}},kr=class extends _r{constructor(a,n,t,c){super(),this.loop=a,this.varKind=n,this.name=t,this.iterable=c}render(a){return`for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})`+super.render(a)}optimizeNames(a,n){if(super.optimizeNames(a,n))return this.iterable=b8(this.iterable,a,n),this}get names(){return _a(super.names,this.iterable.names)}},_9=(()=>{class e extends s6{constructor(n,t,c){super(),this.name=n,this.args=t,this.async=c}render(n){return`${this.async?"async ":""}function ${this.name}(${this.args})`+super.render(n)}}return e.kind="func",e})(),E9=(()=>{class e extends Yn{render(n){return"return "+super.render(n)}}return e.kind="return",e})(),zl=class extends s6{render(a){let n="try"+super.render(a);return this.catch&&(n+=this.catch.render(a)),this.finally&&(n+=this.finally.render(a)),n}optimizeNodes(){var a,n;return super.optimizeNodes(),(a=this.catch)===null||a===void 0||a.optimizeNodes(),(n=this.finally)===null||n===void 0||n.optimizeNodes(),this}optimizeNames(a,n){var t,c;return super.optimizeNames(a,n),(t=this.catch)===null||t===void 0||t.optimizeNames(a,n),(c=this.finally)===null||c===void 0||c.optimizeNames(a,n),this}get names(){let a=super.names;return this.catch&&_a(a,this.catch.names),this.finally&&_a(a,this.finally.names),a}},P9=(()=>{class e extends s6{constructor(n){super(),this.error=n}render(n){return`catch(${this.error})`+super.render(n)}}return e.kind="catch",e})(),T9=(()=>{class e extends s6{render(n){return"finally"+super.render(n)}}return e.kind="finally",e})(),bl=class{constructor(a,n={}){this._values={},this._blockStarts=[],this._constants={},this.opts=c3(O4({},n),{_n:n.lines?`
`:""}),this._extScope=a,this._scope=new Me.Scope({parent:a}),this._nodes=[new vl]}toString(){return this._root.render(this.opts)}name(a){return this._scope.name(a)}scopeName(a){return this._extScope.name(a)}scopeValue(a,n){let t=this._extScope.value(a,n);return(this._values[t.prefix]||(this._values[t.prefix]=new Set)).add(t),t}getScopeValue(a,n){return this._extScope.getValue(a,n)}scopeRefs(a){return this._extScope.scopeRefs(a,this._values)}scopeCode(){return this._extScope.scopeCode(this._values)}_def(a,n,t,c){let l=this._scope.toName(n);return t!==void 0&&c&&(this._constants[l.str]=t),this._leafNode(new sl(a,l,t)),l}const(a,n,t){return this._def(Me.varKinds.const,a,n,t)}let(a,n,t){return this._def(Me.varKinds.let,a,n,t)}var(a,n,t){return this._def(Me.varKinds.var,a,n,t)}assign(a,n,t){return this._leafNode(new Sr(a,n,t))}add(a,n){return this._leafNode(new il(a,u4.operators.ADD,n))}code(a){return typeof a=="function"?a():a!==C4.nil&&this._leafNode(new pl(a)),this}object(...a){let n=["{"];for(let[t,c]of a)n.length>1&&n.push(","),n.push(t),(t!==c||this.opts.es5)&&(n.push(":"),(0,C4.addCodeArg)(n,c));return n.push("}"),new C4._Code(n)}if(a,n,t){if(this._blockNode(new jr(a)),n&&t)this.code(n).else().code(t).endIf();else if(n)this.code(n).endIf();else if(t)throw new Error('CodeGen: "else" body without "then" body');return this}elseIf(a){return this._elseNode(new jr(a))}else(){return this._elseNode(new ml)}endIf(){return this._endBlockNode(jr,ml)}_for(a,n){return this._blockNode(a),n&&this.code(n).endFor(),this}for(a,n){return this._for(new hl(a),n)}forRange(a,n,t,c,l=this.opts.es5?Me.varKinds.var:Me.varKinds.let){let o=this._scope.toName(a);return this._for(new gl(l,o,n,t),()=>c(o))}forOf(a,n,t,c=Me.varKinds.const){let l=this._scope.toName(a);if(this.opts.es5){let o=n instanceof C4.Name?n:this.var("_arr",n);return this.forRange("_i",0,(0,C4._)`${o}.length`,s=>{this.var(l,(0,C4._)`${o}[${s}]`),t(l)})}return this._for(new kr("of",c,l,n),()=>t(l))}forIn(a,n,t,c=this.opts.es5?Me.varKinds.var:Me.varKinds.const){if(this.opts.ownProperties)return this.forOf(a,(0,C4._)`Object.keys(${n})`,t);let l=this._scope.toName(a);return this._for(new kr("in",c,l,n),()=>t(l))}endFor(){return this._endBlockNode(_r)}label(a){return this._leafNode(new fl(a))}break(a){return this._leafNode(new ul(a))}return(a){let n=new E9;if(this._blockNode(n),this.code(a),n.nodes.length!==1)throw new Error('CodeGen: "return" should have one node');return this._endBlockNode(E9)}try(a,n,t){if(!n&&!t)throw new Error('CodeGen: "try" without "catch" and "finally"');let c=new zl;if(this._blockNode(c),this.code(a),n){let l=this.name("e");this._currNode=c.catch=new P9(l),n(l)}return t&&(this._currNode=c.finally=new T9,this.code(t)),this._endBlockNode(P9,T9)}throw(a){return this._leafNode(new dl(a))}block(a,n){return this._blockStarts.push(this._nodes.length),a&&this.code(a).endBlock(n),this}endBlock(a){let n=this._blockStarts.pop();if(n===void 0)throw new Error("CodeGen: not in self-balancing block");let t=this._nodes.length-n;if(t<0||a!==void 0&&t!==a)throw new Error(`CodeGen: wrong number of nodes: ${t} vs ${a} expected`);return this._nodes.length=n,this}func(a,n=C4.nil,t,c){return this._blockNode(new _9(a,n,t)),c&&this.code(c).endFunc(),this}endFunc(){return this._endBlockNode(_9)}optimize(a=1){for(;a-- >0;)this._root.optimizeNodes(),this._root.optimizeNames(this._root.names,this._constants)}_leafNode(a){return this._currNode.nodes.push(a),this}_blockNode(a){this._currNode.nodes.push(a),this._nodes.push(a)}_endBlockNode(a,n){let t=this._currNode;if(t instanceof a||n&&t instanceof n)return this._nodes.pop(),this;throw new Error(`CodeGen: not in block "${n?`${a.kind}/${n.kind}`:a.kind}"`)}_elseNode(a){let n=this._currNode;if(!(n instanceof jr))throw new Error('CodeGen: "else" without "if"');return this._currNode=n.else=a,this}get _root(){return this._nodes[0]}get _currNode(){let a=this._nodes;return a[a.length-1]}set _currNode(a){let n=this._nodes;n[n.length-1]=a}};u4.CodeGen=bl;function _a(e,a){for(let n in a)e[n]=(e[n]||0)+(a[n]||0);return e}function Nr(e,a){return a instanceof C4._CodeOrName?_a(e,a.names):e}function b8(e,a,n){if(e instanceof C4.Name)return t(e);if(!c(e))return e;return new C4._Code(e._items.reduce((l,o)=>(o instanceof C4.Name&&(o=t(o)),o instanceof C4._Code?l.push(...o._items):l.push(o),l),[]));function t(l){let o=n[l.str];return o===void 0||a[l.str]!==1?l:(delete a[l.str],o)}function c(l){return l instanceof C4._Code&&l._items.some(o=>o instanceof C4.Name&&a[o.str]===1&&n[o.str]!==void 0)}}function dg(e,a){for(let n in a)e[n]=(e[n]||0)-(a[n]||0)}function O9(e){return typeof e=="boolean"||typeof e=="number"||e===null?!e:(0,C4._)`!${yl(e)}`}u4.not=O9;var pg=R9(u4.operators.AND);function vg(...e){return e.reduce(pg)}u4.and=vg;var mg=R9(u4.operators.OR);function hg(...e){return e.reduce(mg)}u4.or=hg;function R9(e){return(a,n)=>a===C4.nil?n:n===C4.nil?a:(0,C4._)`${yl(a)} ${e} ${yl(n)}`}function yl(e){return e instanceof C4.Name?e:(0,C4._)`(${e})`}});var q4=n1(m4=>{"use strict";Object.defineProperty(m4,"__esModule",{value:!0});m4.checkStrictMode=m4.getErrorPath=m4.Type=m4.useFunc=m4.setEvaluated=m4.evaluatedPropsToName=m4.mergeEvaluated=m4.eachItem=m4.unescapeJsonPointer=m4.escapeJsonPointer=m4.escapeFragment=m4.unescapeFragment=m4.schemaRefOrVal=m4.schemaHasRulesButRef=m4.schemaHasRules=m4.checkUnknownRules=m4.alwaysValidSchema=m4.toHash=void 0;var v0=v4(),gg=Xn();function zg(e){let a={};for(let n of e)a[n]=!0;return a}m4.toHash=zg;function bg(e,a){return typeof a=="boolean"?a:Object.keys(a).length===0?!0:(D9(e,a),!F9(a,e.self.RULES.all))}m4.alwaysValidSchema=bg;function D9(e,a=e.schema){let{opts:n,self:t}=e;if(!n.strictSchema||typeof a=="boolean")return;let c=t.RULES.keywords;for(let l in a)c[l]||U9(e,`unknown keyword: "${l}"`)}m4.checkUnknownRules=D9;function F9(e,a){if(typeof e=="boolean")return!e;for(let n in e)if(a[n])return!0;return!1}m4.schemaHasRules=F9;function yg(e,a){if(typeof e=="boolean")return!e;for(let n in e)if(n!=="$ref"&&a.all[n])return!0;return!1}m4.schemaHasRulesButRef=yg;function Mg({topSchemaRef:e,schemaPath:a},n,t,c){if(!c){if(typeof n=="number"||typeof n=="boolean")return n;if(typeof n=="string")return(0,v0._)`${n}`}return(0,v0._)`${e}${a}${(0,v0.getProperty)(t)}`}m4.schemaRefOrVal=Mg;function xg(e){return B9(decodeURIComponent(e))}m4.unescapeFragment=xg;function Lg(e){return encodeURIComponent(xl(e))}m4.escapeFragment=Lg;function xl(e){return typeof e=="number"?`${e}`:e.replace(/~/g,"~0").replace(/\//g,"~1")}m4.escapeJsonPointer=xl;function B9(e){return e.replace(/~1/g,"/").replace(/~0/g,"~")}m4.unescapeJsonPointer=B9;function wg(e,a){if(Array.isArray(e))for(let n of e)a(n);else a(e)}m4.eachItem=wg;function q9({mergeNames:e,mergeToName:a,mergeValues:n,resultToName:t}){return(c,l,o,s)=>{let i=o===void 0?l:o instanceof v0.Name?(l instanceof v0.Name?e(c,l,o):a(c,l,o),o):l instanceof v0.Name?(a(c,o,l),l):n(l,o);return s===v0.Name&&!(i instanceof v0.Name)?t(c,i):i}}m4.mergeEvaluated={props:q9({mergeNames:(e,a,n)=>e.if((0,v0._)`${n} !== true && ${a} !== undefined`,()=>{e.if((0,v0._)`${a} === true`,()=>e.assign(n,!0),()=>e.assign(n,(0,v0._)`${n} || {}`).code((0,v0._)`Object.assign(${n}, ${a})`))}),mergeToName:(e,a,n)=>e.if((0,v0._)`${n} !== true`,()=>{a===!0?e.assign(n,!0):(e.assign(n,(0,v0._)`${n} || {}`),Ll(e,n,a))}),mergeValues:(e,a)=>e===!0?!0:O4(O4({},e),a),resultToName:I9}),items:q9({mergeNames:(e,a,n)=>e.if((0,v0._)`${n} !== true && ${a} !== undefined`,()=>e.assign(n,(0,v0._)`${a} === true ? true : ${n} > ${a} ? ${n} : ${a}`)),mergeToName:(e,a,n)=>e.if((0,v0._)`${n} !== true`,()=>e.assign(n,a===!0?!0:(0,v0._)`${n} > ${a} ? ${n} : ${a}`)),mergeValues:(e,a)=>e===!0?!0:Math.max(e,a),resultToName:(e,a)=>e.var("items",a)})};function I9(e,a){if(a===!0)return e.var("props",!0);let n=e.var("props",(0,v0._)`{}`);return a!==void 0&&Ll(e,n,a),n}m4.evaluatedPropsToName=I9;function Ll(e,a,n){Object.keys(n).forEach(t=>e.assign((0,v0._)`${a}${(0,v0.getProperty)(t)}`,!0))}m4.setEvaluated=Ll;var $9={};function Cg(e,a){return e.scopeValue("func",{ref:a,code:$9[a.code]||($9[a.code]=new gg._Code(a.code))})}m4.useFunc=Cg;var Ml=(function(e){return e[e.Num=0]="Num",e[e.Str=1]="Str",e})(Ml||(m4.Type=Ml={}));function jg(e,a,n){if(e instanceof v0.Name){let t=a===Ml.Num;return n?t?(0,v0._)`"[" + ${e} + "]"`:(0,v0._)`"['" + ${e} + "']"`:t?(0,v0._)`"/" + ${e}`:(0,v0._)`"/" + ${e}.replace(/~/g, "~0").replace(/\\//g, "~1")`}return n?(0,v0.getProperty)(e).toString():"/"+xl(e)}m4.getErrorPath=jg;function U9(e,a,n=e.opts.strictSchema){if(n){if(a=`strict mode: ${a}`,n===!0)throw new Error(a);e.self.logger.warn(a)}}m4.checkStrictMode=U9});var i6=n1(wl=>{"use strict";Object.defineProperty(wl,"__esModule",{value:!0});var C3=v4(),Sg={data:new C3.Name("data"),valCxt:new C3.Name("valCxt"),instancePath:new C3.Name("instancePath"),parentData:new C3.Name("parentData"),parentDataProperty:new C3.Name("parentDataProperty"),rootData:new C3.Name("rootData"),dynamicAnchors:new C3.Name("dynamicAnchors"),vErrors:new C3.Name("vErrors"),errors:new C3.Name("errors"),this:new C3.Name("this"),self:new C3.Name("self"),scope:new C3.Name("scope"),json:new C3.Name("json"),jsonPos:new C3.Name("jsonPos"),jsonLen:new C3.Name("jsonLen"),jsonPart:new C3.Name("jsonPart")};wl.default=Sg});var Zn=n1(j3=>{"use strict";Object.defineProperty(j3,"__esModule",{value:!0});j3.extendErrors=j3.resetErrorsCount=j3.reportExtraError=j3.reportError=j3.keyword$DataError=j3.keywordError=void 0;var _4=v4(),Er=q4(),E3=i6();j3.keywordError={message:({keyword:e})=>(0,_4.str)`must pass "${e}" keyword validation`};j3.keyword$DataError={message:({keyword:e,schemaType:a})=>a?(0,_4.str)`"${e}" keyword must be ${a} ($data)`:(0,_4.str)`"${e}" keyword is invalid ($data)`};function kg(e,a=j3.keywordError,n,t){let{it:c}=e,{gen:l,compositeRule:o,allErrors:s}=c,i=V9(e,a,n);t??(o||s)?H9(l,i):W9(c,(0,_4._)`[${i}]`)}j3.reportError=kg;function Ng(e,a=j3.keywordError,n){let{it:t}=e,{gen:c,compositeRule:l,allErrors:o}=t,s=V9(e,a,n);H9(c,s),l||o||W9(t,E3.default.vErrors)}j3.reportExtraError=Ng;function Ag(e,a){e.assign(E3.default.errors,a),e.if((0,_4._)`${E3.default.vErrors} !== null`,()=>e.if(a,()=>e.assign((0,_4._)`${E3.default.vErrors}.length`,a),()=>e.assign(E3.default.vErrors,null)))}j3.resetErrorsCount=Ag;function _g({gen:e,keyword:a,schemaValue:n,data:t,errsCount:c,it:l}){if(c===void 0)throw new Error("ajv implementation error");let o=e.name("err");e.forRange("i",c,E3.default.errors,s=>{e.const(o,(0,_4._)`${E3.default.vErrors}[${s}]`),e.if((0,_4._)`${o}.instancePath === undefined`,()=>e.assign((0,_4._)`${o}.instancePath`,(0,_4.strConcat)(E3.default.instancePath,l.errorPath))),e.assign((0,_4._)`${o}.schemaPath`,(0,_4.str)`${l.errSchemaPath}/${a}`),l.opts.verbose&&(e.assign((0,_4._)`${o}.schema`,n),e.assign((0,_4._)`${o}.data`,t))})}j3.extendErrors=_g;function H9(e,a){let n=e.const("err",a);e.if((0,_4._)`${E3.default.vErrors} === null`,()=>e.assign(E3.default.vErrors,(0,_4._)`[${n}]`),(0,_4._)`${E3.default.vErrors}.push(${n})`),e.code((0,_4._)`${E3.default.errors}++`)}function W9(e,a){let{gen:n,validateName:t,schemaEnv:c}=e;c.$async?n.throw((0,_4._)`new ${e.ValidationError}(${a})`):(n.assign((0,_4._)`${t}.errors`,a),n.return(!1))}var Ea={keyword:new _4.Name("keyword"),schemaPath:new _4.Name("schemaPath"),params:new _4.Name("params"),propertyName:new _4.Name("propertyName"),message:new _4.Name("message"),schema:new _4.Name("schema"),parentSchema:new _4.Name("parentSchema")};function V9(e,a,n){let{createErrors:t}=e.it;return t===!1?(0,_4._)`{}`:Eg(e,a,n)}function Eg(e,a,n={}){let{gen:t,it:c}=e,l=[Pg(c,n),Tg(e,n)];return Og(e,a,l),t.object(...l)}function Pg({errorPath:e},{instancePath:a}){let n=a?(0,_4.str)`${e}${(0,Er.getErrorPath)(a,Er.Type.Str)}`:e;return[E3.default.instancePath,(0,_4.strConcat)(E3.default.instancePath,n)]}function Tg({keyword:e,it:{errSchemaPath:a}},{schemaPath:n,parentSchema:t}){let c=t?a:(0,_4.str)`${a}/${e}`;return n&&(c=(0,_4.str)`${c}${(0,Er.getErrorPath)(n,Er.Type.Str)}`),[Ea.schemaPath,c]}function Og(e,{params:a,message:n},t){let{keyword:c,data:l,schemaValue:o,it:s}=e,{opts:i,propertyName:f,topSchemaRef:u,schemaPath:d}=s;t.push([Ea.keyword,c],[Ea.params,typeof a=="function"?a(e):a||(0,_4._)`{}`]),i.messages&&t.push([Ea.message,typeof n=="function"?n(e):n]),i.verbose&&t.push([Ea.schema,o],[Ea.parentSchema,(0,_4._)`${u}${d}`],[E3.default.data,l]),f&&t.push([Ea.propertyName,f])}});var G9=n1(y8=>{"use strict";Object.defineProperty(y8,"__esModule",{value:!0});y8.boolOrEmptySchema=y8.topBoolOrEmptySchema=void 0;var Rg=Zn(),qg=v4(),$g=i6(),Dg={message:"boolean schema is false"};function Fg(e){let{gen:a,schema:n,validateName:t}=e;n===!1?J9(e,!1):typeof n=="object"&&n.$async===!0?a.return($g.default.data):(a.assign((0,qg._)`${t}.errors`,null),a.return(!0))}y8.topBoolOrEmptySchema=Fg;function Bg(e,a){let{gen:n,schema:t}=e;t===!1?(n.var(a,!1),J9(e)):n.var(a,!0)}y8.boolOrEmptySchema=Bg;function J9(e,a){let{gen:n,data:t}=e,c={gen:n,keyword:"false schema",data:t,schema:!1,schemaCode:!1,schemaValue:!1,params:{},it:e};(0,Rg.reportError)(c,Dg,void 0,a)}});var Cl=n1(M8=>{"use strict";Object.defineProperty(M8,"__esModule",{value:!0});M8.getRules=M8.isJSONType=void 0;var Ig=["string","number","integer","boolean","null","object","array"],Ug=new Set(Ig);function Hg(e){return typeof e=="string"&&Ug.has(e)}M8.isJSONType=Hg;function Wg(){let e={number:{type:"number",rules:[]},string:{type:"string",rules:[]},array:{type:"array",rules:[]},object:{type:"object",rules:[]}};return{types:c3(O4({},e),{integer:!0,boolean:!0,null:!0}),rules:[{rules:[]},e.number,e.string,e.array,e.object],post:{rules:[]},all:{},keywords:{}}}M8.getRules=Wg});var jl=n1(B6=>{"use strict";Object.defineProperty(B6,"__esModule",{value:!0});B6.shouldUseRule=B6.shouldUseGroup=B6.schemaHasRulesForType=void 0;function Vg({schema:e,self:a},n){let t=a.RULES.types[n];return t&&t!==!0&&K9(e,t)}B6.schemaHasRulesForType=Vg;function K9(e,a){return a.rules.some(n=>Q9(e,n))}B6.shouldUseGroup=K9;function Q9(e,a){var n;return e[a.keyword]!==void 0||((n=a.definition.implements)===null||n===void 0?void 0:n.some(t=>e[t]!==void 0))}B6.shouldUseRule=Q9});var et=n1(S3=>{"use strict";Object.defineProperty(S3,"__esModule",{value:!0});S3.reportTypeError=S3.checkDataTypes=S3.checkDataType=S3.coerceAndCheckDataType=S3.getJSONTypes=S3.getSchemaTypes=S3.DataType=void 0;var Jg=Cl(),Gg=jl(),Kg=Zn(),Z1=v4(),X9=q4(),x8=(function(e){return e[e.Correct=0]="Correct",e[e.Wrong=1]="Wrong",e})(x8||(S3.DataType=x8={}));function Qg(e){let a=Y9(e.type);if(a.includes("null")){if(e.nullable===!1)throw new Error("type: null contradicts nullable: false")}else{if(!a.length&&e.nullable!==void 0)throw new Error('"nullable" cannot be used without "type"');e.nullable===!0&&a.push("null")}return a}S3.getSchemaTypes=Qg;function Y9(e){let a=Array.isArray(e)?e:e?[e]:[];if(a.every(Jg.isJSONType))return a;throw new Error("type must be JSONType or JSONType[]: "+a.join(","))}S3.getJSONTypes=Y9;function Xg(e,a){let{gen:n,data:t,opts:c}=e,l=Yg(a,c.coerceTypes),o=a.length>0&&!(l.length===0&&a.length===1&&(0,Gg.schemaHasRulesForType)(e,a[0]));if(o){let s=kl(a,t,c.strictNumbers,x8.Wrong);n.if(s,()=>{l.length?Zg(e,a,l):Nl(e)})}return o}S3.coerceAndCheckDataType=Xg;var Z9=new Set(["string","number","integer","boolean","null"]);function Yg(e,a){return a?e.filter(n=>Z9.has(n)||a==="array"&&n==="array"):[]}function Zg(e,a,n){let{gen:t,data:c,opts:l}=e,o=t.let("dataType",(0,Z1._)`typeof ${c}`),s=t.let("coerced",(0,Z1._)`undefined`);l.coerceTypes==="array"&&t.if((0,Z1._)`${o} == 'object' && Array.isArray(${c}) && ${c}.length == 1`,()=>t.assign(c,(0,Z1._)`${c}[0]`).assign(o,(0,Z1._)`typeof ${c}`).if(kl(a,c,l.strictNumbers),()=>t.assign(s,c))),t.if((0,Z1._)`${s} !== undefined`);for(let f of n)(Z9.has(f)||f==="array"&&l.coerceTypes==="array")&&i(f);t.else(),Nl(e),t.endIf(),t.if((0,Z1._)`${s} !== undefined`,()=>{t.assign(c,s),ez(e,s)});function i(f){switch(f){case"string":t.elseIf((0,Z1._)`${o} == "number" || ${o} == "boolean"`).assign(s,(0,Z1._)`"" + ${c}`).elseIf((0,Z1._)`${c} === null`).assign(s,(0,Z1._)`""`);return;case"number":t.elseIf((0,Z1._)`${o} == "boolean" || ${c} === null
              || (${o} == "string" && ${c} && ${c} == +${c})`).assign(s,(0,Z1._)`+${c}`);return;case"integer":t.elseIf((0,Z1._)`${o} === "boolean" || ${c} === null
              || (${o} === "string" && ${c} && ${c} == +${c} && !(${c} % 1))`).assign(s,(0,Z1._)`+${c}`);return;case"boolean":t.elseIf((0,Z1._)`${c} === "false" || ${c} === 0 || ${c} === null`).assign(s,!1).elseIf((0,Z1._)`${c} === "true" || ${c} === 1`).assign(s,!0);return;case"null":t.elseIf((0,Z1._)`${c} === "" || ${c} === 0 || ${c} === false`),t.assign(s,null);return;case"array":t.elseIf((0,Z1._)`${o} === "string" || ${o} === "number"
              || ${o} === "boolean" || ${c} === null`).assign(s,(0,Z1._)`[${c}]`)}}}function ez({gen:e,parentData:a,parentDataProperty:n},t){e.if((0,Z1._)`${a} !== undefined`,()=>e.assign((0,Z1._)`${a}[${n}]`,t))}function Sl(e,a,n,t=x8.Correct){let c=t===x8.Correct?Z1.operators.EQ:Z1.operators.NEQ,l;switch(e){case"null":return(0,Z1._)`${a} ${c} null`;case"array":l=(0,Z1._)`Array.isArray(${a})`;break;case"object":l=(0,Z1._)`${a} && typeof ${a} == "object" && !Array.isArray(${a})`;break;case"integer":l=o((0,Z1._)`!(${a} % 1) && !isNaN(${a})`);break;case"number":l=o();break;default:return(0,Z1._)`typeof ${a} ${c} ${e}`}return t===x8.Correct?l:(0,Z1.not)(l);function o(s=Z1.nil){return(0,Z1.and)((0,Z1._)`typeof ${a} == "number"`,s,n?(0,Z1._)`isFinite(${a})`:Z1.nil)}}S3.checkDataType=Sl;function kl(e,a,n,t){if(e.length===1)return Sl(e[0],a,n,t);let c,l=(0,X9.toHash)(e);if(l.array&&l.object){let o=(0,Z1._)`typeof ${a} != "object"`;c=l.null?o:(0,Z1._)`!${a} || ${o}`,delete l.null,delete l.array,delete l.object}else c=Z1.nil;l.number&&delete l.integer;for(let o in l)c=(0,Z1.and)(c,Sl(o,a,n,t));return c}S3.checkDataTypes=kl;var az={message:({schema:e})=>`must be ${e}`,params:({schema:e,schemaValue:a})=>typeof e=="string"?(0,Z1._)`{type: ${e}}`:(0,Z1._)`{type: ${a}}`};function Nl(e){let a=nz(e);(0,Kg.reportError)(a,az)}S3.reportTypeError=Nl;function nz(e){let{gen:a,data:n,schema:t}=e,c=(0,X9.schemaRefOrVal)(e,t,"type");return{gen:a,keyword:"type",data:n,schema:t.type,schemaCode:c,schemaValue:c,parentSchema:t,params:{},it:e}}});var af=n1(Pr=>{"use strict";Object.defineProperty(Pr,"__esModule",{value:!0});Pr.assignDefaults=void 0;var L8=v4(),tz=q4();function rz(e,a){let{properties:n,items:t}=e.schema;if(a==="object"&&n)for(let c in n)ef(e,c,n[c].default);else a==="array"&&Array.isArray(t)&&t.forEach((c,l)=>ef(e,l,c.default))}Pr.assignDefaults=rz;function ef(e,a,n){let{gen:t,compositeRule:c,data:l,opts:o}=e;if(n===void 0)return;let s=(0,L8._)`${l}${(0,L8.getProperty)(a)}`;if(c){(0,tz.checkStrictMode)(e,`default is ignored for: ${s}`);return}let i=(0,L8._)`${s} === undefined`;o.useDefaults==="empty"&&(i=(0,L8._)`${i} || ${s} === null || ${s} === ""`),t.if(i,(0,L8._)`${s} = ${(0,L8.stringify)(n)}`)}});var le=n1(o0=>{"use strict";Object.defineProperty(o0,"__esModule",{value:!0});o0.validateUnion=o0.validateArray=o0.usePattern=o0.callValidateCode=o0.schemaProperties=o0.allSchemaProperties=o0.noPropertyInData=o0.propertyInData=o0.isOwnProperty=o0.hasPropFunc=o0.reportMissingProp=o0.checkMissingProp=o0.checkReportMissingProp=void 0;var j0=v4(),Al=q4(),I6=i6(),cz=q4();function lz(e,a){let{gen:n,data:t,it:c}=e;n.if(El(n,t,a,c.opts.ownProperties),()=>{e.setParams({missingProperty:(0,j0._)`${a}`},!0),e.error()})}o0.checkReportMissingProp=lz;function oz({gen:e,data:a,it:{opts:n}},t,c){return(0,j0.or)(...t.map(l=>(0,j0.and)(El(e,a,l,n.ownProperties),(0,j0._)`${c} = ${l}`)))}o0.checkMissingProp=oz;function sz(e,a){e.setParams({missingProperty:a},!0),e.error()}o0.reportMissingProp=sz;function nf(e){return e.scopeValue("func",{ref:Object.prototype.hasOwnProperty,code:(0,j0._)`Object.prototype.hasOwnProperty`})}o0.hasPropFunc=nf;function _l(e,a,n){return(0,j0._)`${nf(e)}.call(${a}, ${n})`}o0.isOwnProperty=_l;function iz(e,a,n,t){let c=(0,j0._)`${a}${(0,j0.getProperty)(n)} !== undefined`;return t?(0,j0._)`${c} && ${_l(e,a,n)}`:c}o0.propertyInData=iz;function El(e,a,n,t){let c=(0,j0._)`${a}${(0,j0.getProperty)(n)} === undefined`;return t?(0,j0.or)(c,(0,j0.not)(_l(e,a,n))):c}o0.noPropertyInData=El;function tf(e){return e?Object.keys(e).filter(a=>a!=="__proto__"):[]}o0.allSchemaProperties=tf;function fz(e,a){return tf(a).filter(n=>!(0,Al.alwaysValidSchema)(e,a[n]))}o0.schemaProperties=fz;function uz({schemaCode:e,data:a,it:{gen:n,topSchemaRef:t,schemaPath:c,errorPath:l},it:o},s,i,f){let u=f?(0,j0._)`${e}, ${a}, ${t}${c}`:a,d=[[I6.default.instancePath,(0,j0.strConcat)(I6.default.instancePath,l)],[I6.default.parentData,o.parentData],[I6.default.parentDataProperty,o.parentDataProperty],[I6.default.rootData,I6.default.rootData]];o.opts.dynamicRef&&d.push([I6.default.dynamicAnchors,I6.default.dynamicAnchors]);let h=(0,j0._)`${u}, ${n.object(...d)}`;return i!==j0.nil?(0,j0._)`${s}.call(${i}, ${h})`:(0,j0._)`${s}(${h})`}o0.callValidateCode=uz;var dz=(0,j0._)`new RegExp`;function pz({gen:e,it:{opts:a}},n){let t=a.unicodeRegExp?"u":"",{regExp:c}=a.code,l=c(n,t);return e.scopeValue("pattern",{key:l.toString(),ref:l,code:(0,j0._)`${c.code==="new RegExp"?dz:(0,cz.useFunc)(e,c)}(${n}, ${t})`})}o0.usePattern=pz;function vz(e){let{gen:a,data:n,keyword:t,it:c}=e,l=a.name("valid");if(c.allErrors){let s=a.let("valid",!0);return o(()=>a.assign(s,!1)),s}return a.var(l,!0),o(()=>a.break()),l;function o(s){let i=a.const("len",(0,j0._)`${n}.length`);a.forRange("i",0,i,f=>{e.subschema({keyword:t,dataProp:f,dataPropType:Al.Type.Num},l),a.if((0,j0.not)(l),s)})}}o0.validateArray=vz;function mz(e){let{gen:a,schema:n,keyword:t,it:c}=e;if(!Array.isArray(n))throw new Error("ajv implementation error");if(n.some(i=>(0,Al.alwaysValidSchema)(c,i))&&!c.opts.unevaluated)return;let o=a.let("valid",!1),s=a.name("_valid");a.block(()=>n.forEach((i,f)=>{let u=e.subschema({keyword:t,schemaProp:f,compositeRule:!0},s);a.assign(o,(0,j0._)`${o} || ${s}`),e.mergeValidEvaluated(u,s)||a.if((0,j0.not)(o))})),e.result(o,()=>e.reset(),()=>e.error(!0))}o0.validateUnion=mz});var lf=n1($e=>{"use strict";Object.defineProperty($e,"__esModule",{value:!0});$e.validateKeywordUsage=$e.validSchemaType=$e.funcKeywordCode=$e.macroKeywordCode=void 0;var P3=v4(),Pa=i6(),hz=le(),gz=Zn();function zz(e,a){let{gen:n,keyword:t,schema:c,parentSchema:l,it:o}=e,s=a.macro.call(o.self,c,l,o),i=cf(n,t,s);o.opts.validateSchema!==!1&&o.self.validateSchema(s,!0);let f=n.name("valid");e.subschema({schema:s,schemaPath:P3.nil,errSchemaPath:`${o.errSchemaPath}/${t}`,topSchemaRef:i,compositeRule:!0},f),e.pass(f,()=>e.error(!0))}$e.macroKeywordCode=zz;function bz(e,a){var n;let{gen:t,keyword:c,schema:l,parentSchema:o,$data:s,it:i}=e;Mz(i,a);let f=!s&&a.compile?a.compile.call(i.self,l,o,i):a.validate,u=cf(t,c,f),d=t.let("valid");e.block$data(d,h),e.ok((n=a.valid)!==null&&n!==void 0?n:d);function h(){if(a.errors===!1)p(),a.modifying&&rf(e),g(()=>e.error());else{let y=a.async?m():v();a.modifying&&rf(e),g(()=>yz(e,y))}}function m(){let y=t.let("ruleErrs",null);return t.try(()=>p((0,P3._)`await `),L=>t.assign(d,!1).if((0,P3._)`${L} instanceof ${i.ValidationError}`,()=>t.assign(y,(0,P3._)`${L}.errors`),()=>t.throw(L))),y}function v(){let y=(0,P3._)`${u}.errors`;return t.assign(y,null),p(P3.nil),y}function p(y=a.async?(0,P3._)`await `:P3.nil){let L=i.opts.passContext?Pa.default.this:Pa.default.self,S=!("compile"in a&&!s||a.schema===!1);t.assign(d,(0,P3._)`${y}${(0,hz.callValidateCode)(e,u,L,S)}`,a.modifying)}function g(y){var L;t.if((0,P3.not)((L=a.valid)!==null&&L!==void 0?L:d),y)}}$e.funcKeywordCode=bz;function rf(e){let{gen:a,data:n,it:t}=e;a.if(t.parentData,()=>a.assign(n,(0,P3._)`${t.parentData}[${t.parentDataProperty}]`))}function yz(e,a){let{gen:n}=e;n.if((0,P3._)`Array.isArray(${a})`,()=>{n.assign(Pa.default.vErrors,(0,P3._)`${Pa.default.vErrors} === null ? ${a} : ${Pa.default.vErrors}.concat(${a})`).assign(Pa.default.errors,(0,P3._)`${Pa.default.vErrors}.length`),(0,gz.extendErrors)(e)},()=>e.error())}function Mz({schemaEnv:e},a){if(a.async&&!e.$async)throw new Error("async keyword in sync schema")}function cf(e,a,n){if(n===void 0)throw new Error(`keyword "${a}" failed to compile`);return e.scopeValue("keyword",typeof n=="function"?{ref:n}:{ref:n,code:(0,P3.stringify)(n)})}function xz(e,a,n=!1){return!a.length||a.some(t=>t==="array"?Array.isArray(e):t==="object"?e&&typeof e=="object"&&!Array.isArray(e):typeof e==t||n&&typeof e>"u")}$e.validSchemaType=xz;function Lz({schema:e,opts:a,self:n,errSchemaPath:t},c,l){if(Array.isArray(c.keyword)?!c.keyword.includes(l):c.keyword!==l)throw new Error("ajv implementation error");let o=c.dependencies;if(o?.some(s=>!Object.prototype.hasOwnProperty.call(e,s)))throw new Error(`parent schema must have dependencies of ${l}: ${o.join(",")}`);if(c.validateSchema&&!c.validateSchema(e[l])){let i=`keyword "${l}" value is invalid at path "${t}": `+n.errorsText(c.validateSchema.errors);if(a.validateSchema==="log")n.logger.error(i);else throw new Error(i)}}$e.validateKeywordUsage=Lz});var sf=n1(U6=>{"use strict";Object.defineProperty(U6,"__esModule",{value:!0});U6.extendSubschemaMode=U6.extendSubschemaData=U6.getSubschema=void 0;var De=v4(),of=q4();function wz(e,{keyword:a,schemaProp:n,schema:t,schemaPath:c,errSchemaPath:l,topSchemaRef:o}){if(a!==void 0&&t!==void 0)throw new Error('both "keyword" and "schema" passed, only one allowed');if(a!==void 0){let s=e.schema[a];return n===void 0?{schema:s,schemaPath:(0,De._)`${e.schemaPath}${(0,De.getProperty)(a)}`,errSchemaPath:`${e.errSchemaPath}/${a}`}:{schema:s[n],schemaPath:(0,De._)`${e.schemaPath}${(0,De.getProperty)(a)}${(0,De.getProperty)(n)}`,errSchemaPath:`${e.errSchemaPath}/${a}/${(0,of.escapeFragment)(n)}`}}if(t!==void 0){if(c===void 0||l===void 0||o===void 0)throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');return{schema:t,schemaPath:c,topSchemaRef:o,errSchemaPath:l}}throw new Error('either "keyword" or "schema" must be passed')}U6.getSubschema=wz;function Cz(e,a,{dataProp:n,dataPropType:t,data:c,dataTypes:l,propertyName:o}){if(c!==void 0&&n!==void 0)throw new Error('both "data" and "dataProp" passed, only one allowed');let{gen:s}=a;if(n!==void 0){let{errorPath:f,dataPathArr:u,opts:d}=a,h=s.let("data",(0,De._)`${a.data}${(0,De.getProperty)(n)}`,!0);i(h),e.errorPath=(0,De.str)`${f}${(0,of.getErrorPath)(n,t,d.jsPropertySyntax)}`,e.parentDataProperty=(0,De._)`${n}`,e.dataPathArr=[...u,e.parentDataProperty]}if(c!==void 0){let f=c instanceof De.Name?c:s.let("data",c,!0);i(f),o!==void 0&&(e.propertyName=o)}l&&(e.dataTypes=l);function i(f){e.data=f,e.dataLevel=a.dataLevel+1,e.dataTypes=[],a.definedProperties=new Set,e.parentData=a.data,e.dataNames=[...a.dataNames,f]}}U6.extendSubschemaData=Cz;function jz(e,{jtdDiscriminator:a,jtdMetadata:n,compositeRule:t,createErrors:c,allErrors:l}){t!==void 0&&(e.compositeRule=t),c!==void 0&&(e.createErrors=c),l!==void 0&&(e.allErrors=l),e.jtdDiscriminator=a,e.jtdMetadata=n}U6.extendSubschemaMode=jz});var Pl=n1((EN,ff)=>{"use strict";ff.exports=function e(a,n){if(a===n)return!0;if(a&&n&&typeof a=="object"&&typeof n=="object"){if(a.constructor!==n.constructor)return!1;var t,c,l;if(Array.isArray(a)){if(t=a.length,t!=n.length)return!1;for(c=t;c--!==0;)if(!e(a[c],n[c]))return!1;return!0}if(a.constructor===RegExp)return a.source===n.source&&a.flags===n.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===n.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===n.toString();if(l=Object.keys(a),t=l.length,t!==Object.keys(n).length)return!1;for(c=t;c--!==0;)if(!Object.prototype.hasOwnProperty.call(n,l[c]))return!1;for(c=t;c--!==0;){var o=l[c];if(!e(a[o],n[o]))return!1}return!0}return a!==a&&n!==n}});var df=n1((PN,uf)=>{"use strict";var H6=uf.exports=function(e,a,n){typeof a=="function"&&(n=a,a={}),n=a.cb||n;var t=typeof n=="function"?n:n.pre||function(){},c=n.post||function(){};Tr(a,t,c,e,"",e)};H6.keywords={additionalItems:!0,items:!0,contains:!0,additionalProperties:!0,propertyNames:!0,not:!0,if:!0,then:!0,else:!0};H6.arrayKeywords={items:!0,allOf:!0,anyOf:!0,oneOf:!0};H6.propsKeywords={$defs:!0,definitions:!0,properties:!0,patternProperties:!0,dependencies:!0};H6.skipKeywords={default:!0,enum:!0,const:!0,required:!0,maximum:!0,minimum:!0,exclusiveMaximum:!0,exclusiveMinimum:!0,multipleOf:!0,maxLength:!0,minLength:!0,pattern:!0,format:!0,maxItems:!0,minItems:!0,uniqueItems:!0,maxProperties:!0,minProperties:!0};function Tr(e,a,n,t,c,l,o,s,i,f){if(t&&typeof t=="object"&&!Array.isArray(t)){a(t,c,l,o,s,i,f);for(var u in t){var d=t[u];if(Array.isArray(d)){if(u in H6.arrayKeywords)for(var h=0;h<d.length;h++)Tr(e,a,n,d[h],c+"/"+u+"/"+h,l,c,u,t,h)}else if(u in H6.propsKeywords){if(d&&typeof d=="object")for(var m in d)Tr(e,a,n,d[m],c+"/"+u+"/"+Sz(m),l,c,u,t,m)}else(u in H6.keywords||e.allKeys&&!(u in H6.skipKeywords))&&Tr(e,a,n,d,c+"/"+u,l,c,u,t)}n(t,c,l,o,s,i,f)}}function Sz(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}});var at=n1($3=>{"use strict";Object.defineProperty($3,"__esModule",{value:!0});$3.getSchemaRefs=$3.resolveUrl=$3.normalizeId=$3._getFullPath=$3.getFullPath=$3.inlineRef=void 0;var kz=q4(),Nz=Pl(),Az=df(),_z=new Set(["type","format","pattern","maxLength","minLength","maxProperties","minProperties","maxItems","minItems","maximum","minimum","uniqueItems","multipleOf","required","enum","const"]);function Ez(e,a=!0){return typeof e=="boolean"?!0:a===!0?!Tl(e):a?pf(e)<=a:!1}$3.inlineRef=Ez;var Pz=new Set(["$ref","$recursiveRef","$recursiveAnchor","$dynamicRef","$dynamicAnchor"]);function Tl(e){for(let a in e){if(Pz.has(a))return!0;let n=e[a];if(Array.isArray(n)&&n.some(Tl)||typeof n=="object"&&Tl(n))return!0}return!1}function pf(e){let a=0;for(let n in e){if(n==="$ref")return 1/0;if(a++,!_z.has(n)&&(typeof e[n]=="object"&&(0,kz.eachItem)(e[n],t=>a+=pf(t)),a===1/0))return 1/0}return a}function vf(e,a="",n){n!==!1&&(a=w8(a));let t=e.parse(a);return mf(e,t)}$3.getFullPath=vf;function mf(e,a){return e.serialize(a).split("#")[0]+"#"}$3._getFullPath=mf;var Tz=/#\/?$/;function w8(e){return e?e.replace(Tz,""):""}$3.normalizeId=w8;function Oz(e,a,n){return n=w8(n),e.resolve(a,n)}$3.resolveUrl=Oz;var Rz=/^[a-z_][-a-z0-9._]*$/i;function qz(e,a){if(typeof e=="boolean")return{};let{schemaId:n,uriResolver:t}=this.opts,c=w8(e[n]||a),l={"":c},o=vf(t,c,!1),s={},i=new Set;return Az(e,{allKeys:!0},(d,h,m,v)=>{if(v===void 0)return;let p=o+h,g=l[v];typeof d[n]=="string"&&(g=y.call(this,d[n])),L.call(this,d.$anchor),L.call(this,d.$dynamicAnchor),l[h]=g;function y(S){let j=this.opts.uriResolver.resolve;if(S=w8(g?j(g,S):S),i.has(S))throw u(S);i.add(S);let x=this.refs[S];return typeof x=="string"&&(x=this.refs[x]),typeof x=="object"?f(d,x.schema,S):S!==w8(p)&&(S[0]==="#"?(f(d,s[S],S),s[S]=d):this.refs[S]=p),S}function L(S){if(typeof S=="string"){if(!Rz.test(S))throw new Error(`invalid anchor "${S}"`);y.call(this,`#${S}`)}}}),s;function f(d,h,m){if(h!==void 0&&!Nz(d,h))throw u(m)}function u(d){return new Error(`reference "${d}" resolves to more than one schema`)}}$3.getSchemaRefs=qz});var rt=n1(W6=>{"use strict";Object.defineProperty(W6,"__esModule",{value:!0});W6.getData=W6.KeywordCxt=W6.validateFunctionCode=void 0;var yf=G9(),hf=et(),Rl=jl(),Or=et(),$z=af(),tt=lf(),Ol=sf(),v1=v4(),F1=i6(),Dz=at(),f6=q4(),nt=Zn();function Fz(e){if(Lf(e)&&(wf(e),xf(e))){Uz(e);return}Mf(e,()=>(0,yf.topBoolOrEmptySchema)(e))}W6.validateFunctionCode=Fz;function Mf({gen:e,validateName:a,schema:n,schemaEnv:t,opts:c},l){c.code.es5?e.func(a,(0,v1._)`${F1.default.data}, ${F1.default.valCxt}`,t.$async,()=>{e.code((0,v1._)`"use strict"; ${gf(n,c)}`),Iz(e,c),e.code(l)}):e.func(a,(0,v1._)`${F1.default.data}, ${Bz(c)}`,t.$async,()=>e.code(gf(n,c)).code(l))}function Bz(e){return(0,v1._)`{${F1.default.instancePath}="", ${F1.default.parentData}, ${F1.default.parentDataProperty}, ${F1.default.rootData}=${F1.default.data}${e.dynamicRef?(0,v1._)`, ${F1.default.dynamicAnchors}={}`:v1.nil}}={}`}function Iz(e,a){e.if(F1.default.valCxt,()=>{e.var(F1.default.instancePath,(0,v1._)`${F1.default.valCxt}.${F1.default.instancePath}`),e.var(F1.default.parentData,(0,v1._)`${F1.default.valCxt}.${F1.default.parentData}`),e.var(F1.default.parentDataProperty,(0,v1._)`${F1.default.valCxt}.${F1.default.parentDataProperty}`),e.var(F1.default.rootData,(0,v1._)`${F1.default.valCxt}.${F1.default.rootData}`),a.dynamicRef&&e.var(F1.default.dynamicAnchors,(0,v1._)`${F1.default.valCxt}.${F1.default.dynamicAnchors}`)},()=>{e.var(F1.default.instancePath,(0,v1._)`""`),e.var(F1.default.parentData,(0,v1._)`undefined`),e.var(F1.default.parentDataProperty,(0,v1._)`undefined`),e.var(F1.default.rootData,F1.default.data),a.dynamicRef&&e.var(F1.default.dynamicAnchors,(0,v1._)`{}`)})}function Uz(e){let{schema:a,opts:n,gen:t}=e;Mf(e,()=>{n.$comment&&a.$comment&&jf(e),Gz(e),t.let(F1.default.vErrors,null),t.let(F1.default.errors,0),n.unevaluated&&Hz(e),Cf(e),Xz(e)})}function Hz(e){let{gen:a,validateName:n}=e;e.evaluated=a.const("evaluated",(0,v1._)`${n}.evaluated`),a.if((0,v1._)`${e.evaluated}.dynamicProps`,()=>a.assign((0,v1._)`${e.evaluated}.props`,(0,v1._)`undefined`)),a.if((0,v1._)`${e.evaluated}.dynamicItems`,()=>a.assign((0,v1._)`${e.evaluated}.items`,(0,v1._)`undefined`))}function gf(e,a){let n=typeof e=="object"&&e[a.schemaId];return n&&(a.code.source||a.code.process)?(0,v1._)`/*# sourceURL=${n} */`:v1.nil}function Wz(e,a){if(Lf(e)&&(wf(e),xf(e))){Vz(e,a);return}(0,yf.boolOrEmptySchema)(e,a)}function xf({schema:e,self:a}){if(typeof e=="boolean")return!e;for(let n in e)if(a.RULES.all[n])return!0;return!1}function Lf(e){return typeof e.schema!="boolean"}function Vz(e,a){let{schema:n,gen:t,opts:c}=e;c.$comment&&n.$comment&&jf(e),Kz(e),Qz(e);let l=t.const("_errs",F1.default.errors);Cf(e,l),t.var(a,(0,v1._)`${l} === ${F1.default.errors}`)}function wf(e){(0,f6.checkUnknownRules)(e),Jz(e)}function Cf(e,a){if(e.opts.jtd)return zf(e,[],!1,a);let n=(0,hf.getSchemaTypes)(e.schema),t=(0,hf.coerceAndCheckDataType)(e,n);zf(e,n,!t,a)}function Jz(e){let{schema:a,errSchemaPath:n,opts:t,self:c}=e;a.$ref&&t.ignoreKeywordsWithRef&&(0,f6.schemaHasRulesButRef)(a,c.RULES)&&c.logger.warn(`$ref: keywords ignored in schema at path "${n}"`)}function Gz(e){let{schema:a,opts:n}=e;a.default!==void 0&&n.useDefaults&&n.strictSchema&&(0,f6.checkStrictMode)(e,"default is ignored in the schema root")}function Kz(e){let a=e.schema[e.opts.schemaId];a&&(e.baseId=(0,Dz.resolveUrl)(e.opts.uriResolver,e.baseId,a))}function Qz(e){if(e.schema.$async&&!e.schemaEnv.$async)throw new Error("async schema in sync schema")}function jf({gen:e,schemaEnv:a,schema:n,errSchemaPath:t,opts:c}){let l=n.$comment;if(c.$comment===!0)e.code((0,v1._)`${F1.default.self}.logger.log(${l})`);else if(typeof c.$comment=="function"){let o=(0,v1.str)`${t}/$comment`,s=e.scopeValue("root",{ref:a.root});e.code((0,v1._)`${F1.default.self}.opts.$comment(${l}, ${o}, ${s}.schema)`)}}function Xz(e){let{gen:a,schemaEnv:n,validateName:t,ValidationError:c,opts:l}=e;n.$async?a.if((0,v1._)`${F1.default.errors} === 0`,()=>a.return(F1.default.data),()=>a.throw((0,v1._)`new ${c}(${F1.default.vErrors})`)):(a.assign((0,v1._)`${t}.errors`,F1.default.vErrors),l.unevaluated&&Yz(e),a.return((0,v1._)`${F1.default.errors} === 0`))}function Yz({gen:e,evaluated:a,props:n,items:t}){n instanceof v1.Name&&e.assign((0,v1._)`${a}.props`,n),t instanceof v1.Name&&e.assign((0,v1._)`${a}.items`,t)}function zf(e,a,n,t){let{gen:c,schema:l,data:o,allErrors:s,opts:i,self:f}=e,{RULES:u}=f;if(l.$ref&&(i.ignoreKeywordsWithRef||!(0,f6.schemaHasRulesButRef)(l,u))){c.block(()=>kf(e,"$ref",u.all.$ref.definition));return}i.jtd||Zz(e,a),c.block(()=>{for(let h of u.rules)d(h);d(u.post)});function d(h){(0,Rl.shouldUseGroup)(l,h)&&(h.type?(c.if((0,Or.checkDataType)(h.type,o,i.strictNumbers)),bf(e,h),a.length===1&&a[0]===h.type&&n&&(c.else(),(0,Or.reportTypeError)(e)),c.endIf()):bf(e,h),s||c.if((0,v1._)`${F1.default.errors} === ${t||0}`))}}function bf(e,a){let{gen:n,schema:t,opts:{useDefaults:c}}=e;c&&(0,$z.assignDefaults)(e,a.type),n.block(()=>{for(let l of a.rules)(0,Rl.shouldUseRule)(t,l)&&kf(e,l.keyword,l.definition,a.type)})}function Zz(e,a){e.schemaEnv.meta||!e.opts.strictTypes||(eb(e,a),e.opts.allowUnionTypes||ab(e,a),nb(e,e.dataTypes))}function eb(e,a){if(a.length){if(!e.dataTypes.length){e.dataTypes=a;return}a.forEach(n=>{Sf(e.dataTypes,n)||ql(e,`type "${n}" not allowed by context "${e.dataTypes.join(",")}"`)}),rb(e,a)}}function ab(e,a){a.length>1&&!(a.length===2&&a.includes("null"))&&ql(e,"use allowUnionTypes to allow union type keyword")}function nb(e,a){let n=e.self.RULES.all;for(let t in n){let c=n[t];if(typeof c=="object"&&(0,Rl.shouldUseRule)(e.schema,c)){let{type:l}=c.definition;l.length&&!l.some(o=>tb(a,o))&&ql(e,`missing type "${l.join(",")}" for keyword "${t}"`)}}}function tb(e,a){return e.includes(a)||a==="number"&&e.includes("integer")}function Sf(e,a){return e.includes(a)||a==="integer"&&e.includes("number")}function rb(e,a){let n=[];for(let t of e.dataTypes)Sf(a,t)?n.push(t):a.includes("integer")&&t==="number"&&n.push("integer");e.dataTypes=n}function ql(e,a){let n=e.schemaEnv.baseId+e.errSchemaPath;a+=` at "${n}" (strictTypes)`,(0,f6.checkStrictMode)(e,a,e.opts.strictTypes)}var Rr=class{constructor(a,n,t){if((0,tt.validateKeywordUsage)(a,n,t),this.gen=a.gen,this.allErrors=a.allErrors,this.keyword=t,this.data=a.data,this.schema=a.schema[t],this.$data=n.$data&&a.opts.$data&&this.schema&&this.schema.$data,this.schemaValue=(0,f6.schemaRefOrVal)(a,this.schema,t,this.$data),this.schemaType=n.schemaType,this.parentSchema=a.schema,this.params={},this.it=a,this.def=n,this.$data)this.schemaCode=a.gen.const("vSchema",Nf(this.$data,a));else if(this.schemaCode=this.schemaValue,!(0,tt.validSchemaType)(this.schema,n.schemaType,n.allowUndefined))throw new Error(`${t} value must be ${JSON.stringify(n.schemaType)}`);("code"in n?n.trackErrors:n.errors!==!1)&&(this.errsCount=a.gen.const("_errs",F1.default.errors))}result(a,n,t){this.failResult((0,v1.not)(a),n,t)}failResult(a,n,t){this.gen.if(a),t?t():this.error(),n?(this.gen.else(),n(),this.allErrors&&this.gen.endIf()):this.allErrors?this.gen.endIf():this.gen.else()}pass(a,n){this.failResult((0,v1.not)(a),void 0,n)}fail(a){if(a===void 0){this.error(),this.allErrors||this.gen.if(!1);return}this.gen.if(a),this.error(),this.allErrors?this.gen.endIf():this.gen.else()}fail$data(a){if(!this.$data)return this.fail(a);let{schemaCode:n}=this;this.fail((0,v1._)`${n} !== undefined && (${(0,v1.or)(this.invalid$data(),a)})`)}error(a,n,t){if(n){this.setParams(n),this._error(a,t),this.setParams({});return}this._error(a,t)}_error(a,n){(a?nt.reportExtraError:nt.reportError)(this,this.def.error,n)}$dataError(){(0,nt.reportError)(this,this.def.$dataError||nt.keyword$DataError)}reset(){if(this.errsCount===void 0)throw new Error('add "trackErrors" to keyword definition');(0,nt.resetErrorsCount)(this.gen,this.errsCount)}ok(a){this.allErrors||this.gen.if(a)}setParams(a,n){n?Object.assign(this.params,a):this.params=a}block$data(a,n,t=v1.nil){this.gen.block(()=>{this.check$data(a,t),n()})}check$data(a=v1.nil,n=v1.nil){if(!this.$data)return;let{gen:t,schemaCode:c,schemaType:l,def:o}=this;t.if((0,v1.or)((0,v1._)`${c} === undefined`,n)),a!==v1.nil&&t.assign(a,!0),(l.length||o.validateSchema)&&(t.elseIf(this.invalid$data()),this.$dataError(),a!==v1.nil&&t.assign(a,!1)),t.else()}invalid$data(){let{gen:a,schemaCode:n,schemaType:t,def:c,it:l}=this;return(0,v1.or)(o(),s());function o(){if(t.length){if(!(n instanceof v1.Name))throw new Error("ajv implementation error");let i=Array.isArray(t)?t:[t];return(0,v1._)`${(0,Or.checkDataTypes)(i,n,l.opts.strictNumbers,Or.DataType.Wrong)}`}return v1.nil}function s(){if(c.validateSchema){let i=a.scopeValue("validate$data",{ref:c.validateSchema});return(0,v1._)`!${i}(${n})`}return v1.nil}}subschema(a,n){let t=(0,Ol.getSubschema)(this.it,a);(0,Ol.extendSubschemaData)(t,this.it,a),(0,Ol.extendSubschemaMode)(t,a);let c=c3(O4(O4({},this.it),t),{items:void 0,props:void 0});return Wz(c,n),c}mergeEvaluated(a,n){let{it:t,gen:c}=this;t.opts.unevaluated&&(t.props!==!0&&a.props!==void 0&&(t.props=f6.mergeEvaluated.props(c,a.props,t.props,n)),t.items!==!0&&a.items!==void 0&&(t.items=f6.mergeEvaluated.items(c,a.items,t.items,n)))}mergeValidEvaluated(a,n){let{it:t,gen:c}=this;if(t.opts.unevaluated&&(t.props!==!0||t.items!==!0))return c.if(n,()=>this.mergeEvaluated(a,v1.Name)),!0}};W6.KeywordCxt=Rr;function kf(e,a,n,t){let c=new Rr(e,n,a);"code"in n?n.code(c,t):c.$data&&n.validate?(0,tt.funcKeywordCode)(c,n):"macro"in n?(0,tt.macroKeywordCode)(c,n):(n.compile||n.validate)&&(0,tt.funcKeywordCode)(c,n)}var cb=/^\/(?:[^~]|~0|~1)*$/,lb=/^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;function Nf(e,{dataLevel:a,dataNames:n,dataPathArr:t}){let c,l;if(e==="")return F1.default.rootData;if(e[0]==="/"){if(!cb.test(e))throw new Error(`Invalid JSON-pointer: ${e}`);c=e,l=F1.default.rootData}else{let f=lb.exec(e);if(!f)throw new Error(`Invalid JSON-pointer: ${e}`);let u=+f[1];if(c=f[2],c==="#"){if(u>=a)throw new Error(i("property/index",u));return t[a-u]}if(u>a)throw new Error(i("data",u));if(l=n[a-u],!c)return l}let o=l,s=c.split("/");for(let f of s)f&&(l=(0,v1._)`${l}${(0,v1.getProperty)((0,f6.unescapeJsonPointer)(f))}`,o=(0,v1._)`${o} && ${l}`);return o;function i(f,u){return`Cannot access ${f} ${u} levels up, current level is ${a}`}}W6.getData=Nf});var qr=n1(Dl=>{"use strict";Object.defineProperty(Dl,"__esModule",{value:!0});var $l=class extends Error{constructor(a){super("validation failed"),this.errors=a,this.ajv=this.validation=!0}};Dl.default=$l});var ct=n1(Il=>{"use strict";Object.defineProperty(Il,"__esModule",{value:!0});var Fl=at(),Bl=class extends Error{constructor(a,n,t,c){super(c||`can't resolve reference ${t} from id ${n}`),this.missingRef=(0,Fl.resolveUrl)(a,n,t),this.missingSchema=(0,Fl.normalizeId)((0,Fl.getFullPath)(a,this.missingRef))}};Il.default=Bl});var Dr=n1(oe=>{"use strict";Object.defineProperty(oe,"__esModule",{value:!0});oe.resolveSchema=oe.getCompilingSchema=oe.resolveRef=oe.compileSchema=oe.SchemaEnv=void 0;var xe=v4(),ob=qr(),Ta=i6(),Le=at(),Af=q4(),sb=rt(),C8=class{constructor(a){var n;this.refs={},this.dynamicAnchors={};let t;typeof a.schema=="object"&&(t=a.schema),this.schema=a.schema,this.schemaId=a.schemaId,this.root=a.root||this,this.baseId=(n=a.baseId)!==null&&n!==void 0?n:(0,Le.normalizeId)(t?.[a.schemaId||"$id"]),this.schemaPath=a.schemaPath,this.localRefs=a.localRefs,this.meta=a.meta,this.$async=t?.$async,this.refs={}}};oe.SchemaEnv=C8;function Hl(e){let a=_f.call(this,e);if(a)return a;let n=(0,Le.getFullPath)(this.opts.uriResolver,e.root.baseId),{es5:t,lines:c}=this.opts.code,{ownProperties:l}=this.opts,o=new xe.CodeGen(this.scope,{es5:t,lines:c,ownProperties:l}),s;e.$async&&(s=o.scopeValue("Error",{ref:ob.default,code:(0,xe._)`require("ajv/dist/runtime/validation_error").default`}));let i=o.scopeName("validate");e.validateName=i;let f={gen:o,allErrors:this.opts.allErrors,data:Ta.default.data,parentData:Ta.default.parentData,parentDataProperty:Ta.default.parentDataProperty,dataNames:[Ta.default.data],dataPathArr:[xe.nil],dataLevel:0,dataTypes:[],definedProperties:new Set,topSchemaRef:o.scopeValue("schema",this.opts.code.source===!0?{ref:e.schema,code:(0,xe.stringify)(e.schema)}:{ref:e.schema}),validateName:i,ValidationError:s,schema:e.schema,schemaEnv:e,rootId:n,baseId:e.baseId||n,schemaPath:xe.nil,errSchemaPath:e.schemaPath||(this.opts.jtd?"":"#"),errorPath:(0,xe._)`""`,opts:this.opts,self:this},u;try{this._compilations.add(e),(0,sb.validateFunctionCode)(f),o.optimize(this.opts.code.optimize);let d=o.toString();u=`${o.scopeRefs(Ta.default.scope)}return ${d}`,this.opts.code.process&&(u=this.opts.code.process(u,e));let m=new Function(`${Ta.default.self}`,`${Ta.default.scope}`,u)(this,this.scope.get());if(this.scope.value(i,{ref:m}),m.errors=null,m.schema=e.schema,m.schemaEnv=e,e.$async&&(m.$async=!0),this.opts.code.source===!0&&(m.source={validateName:i,validateCode:d,scopeValues:o._values}),this.opts.unevaluated){let{props:v,items:p}=f;m.evaluated={props:v instanceof xe.Name?void 0:v,items:p instanceof xe.Name?void 0:p,dynamicProps:v instanceof xe.Name,dynamicItems:p instanceof xe.Name},m.source&&(m.source.evaluated=(0,xe.stringify)(m.evaluated))}return e.validate=m,e}catch(d){throw delete e.validate,delete e.validateName,u&&this.logger.error("Error compiling schema, function code:",u),d}finally{this._compilations.delete(e)}}oe.compileSchema=Hl;function ib(e,a,n){var t;n=(0,Le.resolveUrl)(this.opts.uriResolver,a,n);let c=e.refs[n];if(c)return c;let l=db.call(this,e,n);if(l===void 0){let o=(t=e.localRefs)===null||t===void 0?void 0:t[n],{schemaId:s}=this.opts;o&&(l=new C8({schema:o,schemaId:s,root:e,baseId:a}))}if(l!==void 0)return e.refs[n]=fb.call(this,l)}oe.resolveRef=ib;function fb(e){return(0,Le.inlineRef)(e.schema,this.opts.inlineRefs)?e.schema:e.validate?e:Hl.call(this,e)}function _f(e){for(let a of this._compilations)if(ub(a,e))return a}oe.getCompilingSchema=_f;function ub(e,a){return e.schema===a.schema&&e.root===a.root&&e.baseId===a.baseId}function db(e,a){let n;for(;typeof(n=this.refs[a])=="string";)a=n;return n||this.schemas[a]||$r.call(this,e,a)}function $r(e,a){let n=this.opts.uriResolver.parse(a),t=(0,Le._getFullPath)(this.opts.uriResolver,n),c=(0,Le.getFullPath)(this.opts.uriResolver,e.baseId,void 0);if(Object.keys(e.schema).length>0&&t===c)return Ul.call(this,n,e);let l=(0,Le.normalizeId)(t),o=this.refs[l]||this.schemas[l];if(typeof o=="string"){let s=$r.call(this,e,o);return typeof s?.schema!="object"?void 0:Ul.call(this,n,s)}if(typeof o?.schema=="object"){if(o.validate||Hl.call(this,o),l===(0,Le.normalizeId)(a)){let{schema:s}=o,{schemaId:i}=this.opts,f=s[i];return f&&(c=(0,Le.resolveUrl)(this.opts.uriResolver,c,f)),new C8({schema:s,schemaId:i,root:e,baseId:c})}return Ul.call(this,n,o)}}oe.resolveSchema=$r;var pb=new Set(["properties","patternProperties","enum","dependencies","definitions"]);function Ul(e,{baseId:a,schema:n,root:t}){var c;if(((c=e.fragment)===null||c===void 0?void 0:c[0])!=="/")return;for(let s of e.fragment.slice(1).split("/")){if(typeof n=="boolean")return;let i=n[(0,Af.unescapeFragment)(s)];if(i===void 0)return;n=i;let f=typeof n=="object"&&n[this.opts.schemaId];!pb.has(s)&&f&&(a=(0,Le.resolveUrl)(this.opts.uriResolver,a,f))}let l;if(typeof n!="boolean"&&n.$ref&&!(0,Af.schemaHasRulesButRef)(n,this.RULES)){let s=(0,Le.resolveUrl)(this.opts.uriResolver,a,n.$ref);l=$r.call(this,t,s)}let{schemaId:o}=this.opts;if(l=l||new C8({schema:n,schemaId:o,root:t,baseId:a}),l.schema!==l.root.schema)return l}});var Ef=n1((FN,vb)=>{vb.exports={$id:"https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",description:"Meta-schema for $data reference (JSON AnySchema extension proposal)",type:"object",required:["$data"],properties:{$data:{type:"string",anyOf:[{format:"relative-json-pointer"},{format:"json-pointer"}]}},additionalProperties:!1}});var Vl=n1((BN,Rf)=>{"use strict";var mb=RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu),Tf=RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);function Wl(e){let a="",n=0,t=0;for(t=0;t<e.length;t++)if(n=e[t].charCodeAt(0),n!==48){if(!(n>=48&&n<=57||n>=65&&n<=70||n>=97&&n<=102))return"";a+=e[t];break}for(t+=1;t<e.length;t++){if(n=e[t].charCodeAt(0),!(n>=48&&n<=57||n>=65&&n<=70||n>=97&&n<=102))return"";a+=e[t]}return a}var hb=RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);function Pf(e){return e.length=0,!0}function gb(e,a,n){if(e.length){let t=Wl(e);if(t!=="")a.push(t);else return n.error=!0,!1;e.length=0}return!0}function zb(e){let a=0,n={error:!1,address:"",zone:""},t=[],c=[],l=!1,o=!1,s=gb;for(let i=0;i<e.length;i++){let f=e[i];if(!(f==="["||f==="]"))if(f===":"){if(l===!0&&(o=!0),!s(c,t,n))break;if(++a>7){n.error=!0;break}i>0&&e[i-1]===":"&&(l=!0),t.push(":");continue}else if(f==="%"){if(!s(c,t,n))break;s=Pf}else{c.push(f);continue}}return c.length&&(s===Pf?n.zone=c.join(""):o?t.push(c.join("")):t.push(Wl(c))),n.address=t.join(""),n}function Of(e){if(bb(e,":")<2)return{host:e,isIPV6:!1};let a=zb(e);if(a.error)return{host:e,isIPV6:!1};{let n=a.address,t=a.address;return a.zone&&(n+="%"+a.zone,t+="%25"+a.zone),{host:n,isIPV6:!0,escapedHost:t}}}function bb(e,a){let n=0;for(let t=0;t<e.length;t++)e[t]===a&&n++;return n}function yb(e){let a=e,n=[],t=-1,c=0;for(;c=a.length;){if(c===1){if(a===".")break;if(a==="/"){n.push("/");break}else{n.push(a);break}}else if(c===2){if(a[0]==="."){if(a[1]===".")break;if(a[1]==="/"){a=a.slice(2);continue}}else if(a[0]==="/"&&(a[1]==="."||a[1]==="/")){n.push("/");break}}else if(c===3&&a==="/.."){n.length!==0&&n.pop(),n.push("/");break}if(a[0]==="."){if(a[1]==="."){if(a[2]==="/"){a=a.slice(3);continue}}else if(a[1]==="/"){a=a.slice(2);continue}}else if(a[0]==="/"&&a[1]==="."){if(a[2]==="/"){a=a.slice(2);continue}else if(a[2]==="."&&a[3]==="/"){a=a.slice(3),n.length!==0&&n.pop();continue}}if((t=a.indexOf("/",1))===-1){n.push(a);break}else n.push(a.slice(0,t)),a=a.slice(t)}return n.join("")}function Mb(e,a){let n=a!==!0?escape:unescape;return e.scheme!==void 0&&(e.scheme=n(e.scheme)),e.userinfo!==void 0&&(e.userinfo=n(e.userinfo)),e.host!==void 0&&(e.host=n(e.host)),e.path!==void 0&&(e.path=n(e.path)),e.query!==void 0&&(e.query=n(e.query)),e.fragment!==void 0&&(e.fragment=n(e.fragment)),e}function xb(e){let a=[];if(e.userinfo!==void 0&&(a.push(e.userinfo),a.push("@")),e.host!==void 0){let n=unescape(e.host);if(!Tf(n)){let t=Of(n);t.isIPV6===!0?n=`[${t.escapedHost}]`:n=e.host}a.push(n)}return(typeof e.port=="number"||typeof e.port=="string")&&(a.push(":"),a.push(String(e.port))),a.length?a.join(""):void 0}Rf.exports={nonSimpleDomain:hb,recomposeAuthority:xb,normalizeComponentEncoding:Mb,removeDotSegments:yb,isIPv4:Tf,isUUID:mb,normalizeIPv6:Of,stringArrayToHexStripped:Wl}});var Bf=n1((IN,Ff)=>{"use strict";var{isUUID:Lb}=Vl(),wb=/([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu,Cb=["http","https","ws","wss","urn","urn:uuid"];function jb(e){return Cb.indexOf(e)!==-1}function Jl(e){return e.secure===!0?!0:e.secure===!1?!1:e.scheme?e.scheme.length===3&&(e.scheme[0]==="w"||e.scheme[0]==="W")&&(e.scheme[1]==="s"||e.scheme[1]==="S")&&(e.scheme[2]==="s"||e.scheme[2]==="S"):!1}function qf(e){return e.host||(e.error=e.error||"HTTP URIs must have a host."),e}function $f(e){let a=String(e.scheme).toLowerCase()==="https";return(e.port===(a?443:80)||e.port==="")&&(e.port=void 0),e.path||(e.path="/"),e}function Sb(e){return e.secure=Jl(e),e.resourceName=(e.path||"/")+(e.query?"?"+e.query:""),e.path=void 0,e.query=void 0,e}function kb(e){if((e.port===(Jl(e)?443:80)||e.port==="")&&(e.port=void 0),typeof e.secure=="boolean"&&(e.scheme=e.secure?"wss":"ws",e.secure=void 0),e.resourceName){let[a,n]=e.resourceName.split("?");e.path=a&&a!=="/"?a:void 0,e.query=n,e.resourceName=void 0}return e.fragment=void 0,e}function Nb(e,a){if(!e.path)return e.error="URN can not be parsed",e;let n=e.path.match(wb);if(n){let t=a.scheme||e.scheme||"urn";e.nid=n[1].toLowerCase(),e.nss=n[2];let c=`${t}:${a.nid||e.nid}`,l=Gl(c);e.path=void 0,l&&(e=l.parse(e,a))}else e.error=e.error||"URN can not be parsed.";return e}function Ab(e,a){if(e.nid===void 0)throw new Error("URN without nid cannot be serialized");let n=a.scheme||e.scheme||"urn",t=e.nid.toLowerCase(),c=`${n}:${a.nid||t}`,l=Gl(c);l&&(e=l.serialize(e,a));let o=e,s=e.nss;return o.path=`${t||a.nid}:${s}`,a.skipEscape=!0,o}function _b(e,a){let n=e;return n.uuid=n.nss,n.nss=void 0,!a.tolerant&&(!n.uuid||!Lb(n.uuid))&&(n.error=n.error||"UUID is not valid."),n}function Eb(e){let a=e;return a.nss=(e.uuid||"").toLowerCase(),a}var Df={scheme:"http",domainHost:!0,parse:qf,serialize:$f},Pb={scheme:"https",domainHost:Df.domainHost,parse:qf,serialize:$f},Fr={scheme:"ws",domainHost:!0,parse:Sb,serialize:kb},Tb={scheme:"wss",domainHost:Fr.domainHost,parse:Fr.parse,serialize:Fr.serialize},Ob={scheme:"urn",parse:Nb,serialize:Ab,skipNormalize:!0},Rb={scheme:"urn:uuid",parse:_b,serialize:Eb,skipNormalize:!0},Br={http:Df,https:Pb,ws:Fr,wss:Tb,urn:Ob,"urn:uuid":Rb};Object.setPrototypeOf(Br,null);function Gl(e){return e&&(Br[e]||Br[e.toLowerCase()])||void 0}Ff.exports={wsIsSecure:Jl,SCHEMES:Br,isValidSchemeName:jb,getSchemeHandler:Gl}});var Hf=n1((UN,Ur)=>{"use strict";var{normalizeIPv6:qb,removeDotSegments:lt,recomposeAuthority:$b,normalizeComponentEncoding:Ir,isIPv4:Db,nonSimpleDomain:Fb}=Vl(),{SCHEMES:Bb,getSchemeHandler:If}=Bf();function Ib(e,a){return typeof e=="string"?e=Fe(u6(e,a),a):typeof e=="object"&&(e=u6(Fe(e,a),a)),e}function Ub(e,a,n){let t=n?Object.assign({scheme:"null"},n):{scheme:"null"},c=Uf(u6(e,t),u6(a,t),t,!0);return t.skipEscape=!0,Fe(c,t)}function Uf(e,a,n,t){let c={};return t||(e=u6(Fe(e,n),n),a=u6(Fe(a,n),n)),n=n||{},!n.tolerant&&a.scheme?(c.scheme=a.scheme,c.userinfo=a.userinfo,c.host=a.host,c.port=a.port,c.path=lt(a.path||""),c.query=a.query):(a.userinfo!==void 0||a.host!==void 0||a.port!==void 0?(c.userinfo=a.userinfo,c.host=a.host,c.port=a.port,c.path=lt(a.path||""),c.query=a.query):(a.path?(a.path[0]==="/"?c.path=lt(a.path):((e.userinfo!==void 0||e.host!==void 0||e.port!==void 0)&&!e.path?c.path="/"+a.path:e.path?c.path=e.path.slice(0,e.path.lastIndexOf("/")+1)+a.path:c.path=a.path,c.path=lt(c.path)),c.query=a.query):(c.path=e.path,a.query!==void 0?c.query=a.query:c.query=e.query),c.userinfo=e.userinfo,c.host=e.host,c.port=e.port),c.scheme=e.scheme),c.fragment=a.fragment,c}function Hb(e,a,n){return typeof e=="string"?(e=unescape(e),e=Fe(Ir(u6(e,n),!0),c3(O4({},n),{skipEscape:!0}))):typeof e=="object"&&(e=Fe(Ir(e,!0),c3(O4({},n),{skipEscape:!0}))),typeof a=="string"?(a=unescape(a),a=Fe(Ir(u6(a,n),!0),c3(O4({},n),{skipEscape:!0}))):typeof a=="object"&&(a=Fe(Ir(a,!0),c3(O4({},n),{skipEscape:!0}))),e.toLowerCase()===a.toLowerCase()}function Fe(e,a){let n={host:e.host,scheme:e.scheme,userinfo:e.userinfo,port:e.port,path:e.path,query:e.query,nid:e.nid,nss:e.nss,uuid:e.uuid,fragment:e.fragment,reference:e.reference,resourceName:e.resourceName,secure:e.secure,error:""},t=Object.assign({},a),c=[],l=If(t.scheme||n.scheme);l&&l.serialize&&l.serialize(n,t),n.path!==void 0&&(t.skipEscape?n.path=unescape(n.path):(n.path=escape(n.path),n.scheme!==void 0&&(n.path=n.path.split("%3A").join(":")))),t.reference!=="suffix"&&n.scheme&&c.push(n.scheme,":");let o=$b(n);if(o!==void 0&&(t.reference!=="suffix"&&c.push("//"),c.push(o),n.path&&n.path[0]!=="/"&&c.push("/")),n.path!==void 0){let s=n.path;!t.absolutePath&&(!l||!l.absolutePath)&&(s=lt(s)),o===void 0&&s[0]==="/"&&s[1]==="/"&&(s="/%2F"+s.slice(2)),c.push(s)}return n.query!==void 0&&c.push("?",n.query),n.fragment!==void 0&&c.push("#",n.fragment),c.join("")}var Wb=/^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;function u6(e,a){let n=Object.assign({},a),t={scheme:void 0,userinfo:void 0,host:"",port:void 0,path:"",query:void 0,fragment:void 0},c=!1;n.reference==="suffix"&&(n.scheme?e=n.scheme+":"+e:e="//"+e);let l=e.match(Wb);if(l){if(t.scheme=l[1],t.userinfo=l[3],t.host=l[4],t.port=parseInt(l[5],10),t.path=l[6]||"",t.query=l[7],t.fragment=l[8],isNaN(t.port)&&(t.port=l[5]),t.host)if(Db(t.host)===!1){let i=qb(t.host);t.host=i.host.toLowerCase(),c=i.isIPV6}else c=!0;t.scheme===void 0&&t.userinfo===void 0&&t.host===void 0&&t.port===void 0&&t.query===void 0&&!t.path?t.reference="same-document":t.scheme===void 0?t.reference="relative":t.fragment===void 0?t.reference="absolute":t.reference="uri",n.reference&&n.reference!=="suffix"&&n.reference!==t.reference&&(t.error=t.error||"URI is not a "+n.reference+" reference.");let o=If(n.scheme||t.scheme);if(!n.unicodeSupport&&(!o||!o.unicodeSupport)&&t.host&&(n.domainHost||o&&o.domainHost)&&c===!1&&Fb(t.host))try{t.host=URL.domainToASCII(t.host.toLowerCase())}catch(s){t.error=t.error||"Host's domain name can not be converted to ASCII: "+s}(!o||o&&!o.skipNormalize)&&(e.indexOf("%")!==-1&&(t.scheme!==void 0&&(t.scheme=unescape(t.scheme)),t.host!==void 0&&(t.host=unescape(t.host))),t.path&&(t.path=escape(unescape(t.path))),t.fragment&&(t.fragment=encodeURI(decodeURIComponent(t.fragment)))),o&&o.parse&&o.parse(t,n)}else t.error=t.error||"URI can not be parsed.";return t}var Kl={SCHEMES:Bb,normalize:Ib,resolve:Ub,resolveComponent:Uf,equal:Hb,serialize:Fe,parse:u6};Ur.exports=Kl;Ur.exports.default=Kl;Ur.exports.fastUri=Kl});var Vf=n1(Ql=>{"use strict";Object.defineProperty(Ql,"__esModule",{value:!0});var Wf=Hf();Wf.code='require("ajv/dist/runtime/uri").default';Ql.default=Wf});var eu=n1(h3=>{"use strict";Object.defineProperty(h3,"__esModule",{value:!0});h3.CodeGen=h3.Name=h3.nil=h3.stringify=h3.str=h3._=h3.KeywordCxt=void 0;var Vb=rt();Object.defineProperty(h3,"KeywordCxt",{enumerable:!0,get:function(){return Vb.KeywordCxt}});var j8=v4();Object.defineProperty(h3,"_",{enumerable:!0,get:function(){return j8._}});Object.defineProperty(h3,"str",{enumerable:!0,get:function(){return j8.str}});Object.defineProperty(h3,"stringify",{enumerable:!0,get:function(){return j8.stringify}});Object.defineProperty(h3,"nil",{enumerable:!0,get:function(){return j8.nil}});Object.defineProperty(h3,"Name",{enumerable:!0,get:function(){return j8.Name}});Object.defineProperty(h3,"CodeGen",{enumerable:!0,get:function(){return j8.CodeGen}});var Jb=qr(),Xf=ct(),Gb=Cl(),ot=Dr(),Kb=v4(),st=at(),Hr=et(),Yl=q4(),Jf=Ef(),Qb=Vf(),Yf=(e,a)=>new RegExp(e,a);Yf.code="new RegExp";var Xb=["removeAdditional","useDefaults","coerceTypes"],Yb=new Set(["validate","serialize","parse","wrapper","root","schema","keyword","pattern","formats","validate$data","func","obj","Error"]),Zb={errorDataPath:"",format:"`validateFormats: false` can be used instead.",nullable:'"nullable" keyword is supported by default.',jsonPointers:"Deprecated jsPropertySyntax can be used instead.",extendRefs:"Deprecated ignoreKeywordsWithRef can be used instead.",missingRefs:"Pass empty schema with $id that should be ignored to ajv.addSchema.",processCode:"Use option `code: {process: (code, schemaEnv: object) => string}`",sourceCode:"Use option `code: {source: true}`",strictDefaults:"It is default now, see option `strict`.",strictKeywords:"It is default now, see option `strict`.",uniqueItems:'"uniqueItems" keyword is always validated.',unknownFormats:"Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",cache:"Map is used as cache, schema object as key.",serialize:"Map is used as cache, schema object as key.",ajvErrors:"It is default now."},ey={ignoreKeywordsWithRef:"",jsPropertySyntax:"",unicode:'"minLength"/"maxLength" account for unicode characters by default.'},Gf=200;function ay(e){var a,n,t,c,l,o,s,i,f,u,d,h,m,v,p,g,y,L,S,j,x,E,P,I,k;let $=e.strict,U=(a=e.code)===null||a===void 0?void 0:a.optimize,O=U===!0||U===void 0?1:U||0,c2=(t=(n=e.code)===null||n===void 0?void 0:n.regExp)!==null&&t!==void 0?t:Yf,u2=(c=e.uriResolver)!==null&&c!==void 0?c:Qb.default;return{strictSchema:(o=(l=e.strictSchema)!==null&&l!==void 0?l:$)!==null&&o!==void 0?o:!0,strictNumbers:(i=(s=e.strictNumbers)!==null&&s!==void 0?s:$)!==null&&i!==void 0?i:!0,strictTypes:(u=(f=e.strictTypes)!==null&&f!==void 0?f:$)!==null&&u!==void 0?u:"log",strictTuples:(h=(d=e.strictTuples)!==null&&d!==void 0?d:$)!==null&&h!==void 0?h:"log",strictRequired:(v=(m=e.strictRequired)!==null&&m!==void 0?m:$)!==null&&v!==void 0?v:!1,code:e.code?c3(O4({},e.code),{optimize:O,regExp:c2}):{optimize:O,regExp:c2},loopRequired:(p=e.loopRequired)!==null&&p!==void 0?p:Gf,loopEnum:(g=e.loopEnum)!==null&&g!==void 0?g:Gf,meta:(y=e.meta)!==null&&y!==void 0?y:!0,messages:(L=e.messages)!==null&&L!==void 0?L:!0,inlineRefs:(S=e.inlineRefs)!==null&&S!==void 0?S:!0,schemaId:(j=e.schemaId)!==null&&j!==void 0?j:"$id",addUsedSchema:(x=e.addUsedSchema)!==null&&x!==void 0?x:!0,validateSchema:(E=e.validateSchema)!==null&&E!==void 0?E:!0,validateFormats:(P=e.validateFormats)!==null&&P!==void 0?P:!0,unicodeRegExp:(I=e.unicodeRegExp)!==null&&I!==void 0?I:!0,int32range:(k=e.int32range)!==null&&k!==void 0?k:!0,uriResolver:u2}}var it=class{constructor(a={}){this.schemas={},this.refs={},this.formats={},this._compilations=new Set,this._loading={},this._cache=new Map,a=this.opts=O4(O4({},a),ay(a));let{es5:n,lines:t}=this.opts.code;this.scope=new Kb.ValueScope({scope:{},prefixes:Yb,es5:n,lines:t}),this.logger=oy(a.logger);let c=a.validateFormats;a.validateFormats=!1,this.RULES=(0,Gb.getRules)(),Kf.call(this,Zb,a,"NOT SUPPORTED"),Kf.call(this,ey,a,"DEPRECATED","warn"),this._metaOpts=cy.call(this),a.formats&&ty.call(this),this._addVocabularies(),this._addDefaultMetaSchema(),a.keywords&&ry.call(this,a.keywords),typeof a.meta=="object"&&this.addMetaSchema(a.meta),ny.call(this),a.validateFormats=c}_addVocabularies(){this.addKeyword("$async")}_addDefaultMetaSchema(){let{$data:a,meta:n,schemaId:t}=this.opts,c=Jf;t==="id"&&(c=O4({},Jf),c.id=c.$id,delete c.$id),n&&a&&this.addMetaSchema(c,c[t],!1)}defaultMeta(){let{meta:a,schemaId:n}=this.opts;return this.opts.defaultMeta=typeof a=="object"?a[n]||a:void 0}validate(a,n){let t;if(typeof a=="string"){if(t=this.getSchema(a),!t)throw new Error(`no schema with key or ref "${a}"`)}else t=this.compile(a);let c=t(n);return"$async"in t||(this.errors=t.errors),c}compile(a,n){let t=this._addSchema(a,n);return t.validate||this._compileSchemaEnv(t)}compileAsync(a,n){if(typeof this.opts.loadSchema!="function")throw new Error("options.loadSchema should be a function");let{loadSchema:t}=this.opts;return c.call(this,a,n);async function c(u,d){await l.call(this,u.$schema);let h=this._addSchema(u,d);return h.validate||o.call(this,h)}async function l(u){u&&!this.getSchema(u)&&await c.call(this,{$ref:u},!0)}async function o(u){try{return this._compileSchemaEnv(u)}catch(d){if(!(d instanceof Xf.default))throw d;return s.call(this,d),await i.call(this,d.missingSchema),o.call(this,u)}}function s({missingSchema:u,missingRef:d}){if(this.refs[u])throw new Error(`AnySchema ${u} is loaded but ${d} cannot be resolved`)}async function i(u){let d=await f.call(this,u);this.refs[u]||await l.call(this,d.$schema),this.refs[u]||this.addSchema(d,u,n)}async function f(u){let d=this._loading[u];if(d)return d;try{return await(this._loading[u]=t(u))}finally{delete this._loading[u]}}}addSchema(a,n,t,c=this.opts.validateSchema){if(Array.isArray(a)){for(let o of a)this.addSchema(o,void 0,t,c);return this}let l;if(typeof a=="object"){let{schemaId:o}=this.opts;if(l=a[o],l!==void 0&&typeof l!="string")throw new Error(`schema ${o} must be string`)}return n=(0,st.normalizeId)(n||l),this._checkUnique(n),this.schemas[n]=this._addSchema(a,t,n,c,!0),this}addMetaSchema(a,n,t=this.opts.validateSchema){return this.addSchema(a,n,!0,t),this}validateSchema(a,n){if(typeof a=="boolean")return!0;let t;if(t=a.$schema,t!==void 0&&typeof t!="string")throw new Error("$schema must be a string");if(t=t||this.opts.defaultMeta||this.defaultMeta(),!t)return this.logger.warn("meta-schema not available"),this.errors=null,!0;let c=this.validate(t,a);if(!c&&n){let l="schema is invalid: "+this.errorsText();if(this.opts.validateSchema==="log")this.logger.error(l);else throw new Error(l)}return c}getSchema(a){let n;for(;typeof(n=Qf.call(this,a))=="string";)a=n;if(n===void 0){let{schemaId:t}=this.opts,c=new ot.SchemaEnv({schema:{},schemaId:t});if(n=ot.resolveSchema.call(this,c,a),!n)return;this.refs[a]=n}return n.validate||this._compileSchemaEnv(n)}removeSchema(a){if(a instanceof RegExp)return this._removeAllSchemas(this.schemas,a),this._removeAllSchemas(this.refs,a),this;switch(typeof a){case"undefined":return this._removeAllSchemas(this.schemas),this._removeAllSchemas(this.refs),this._cache.clear(),this;case"string":{let n=Qf.call(this,a);return typeof n=="object"&&this._cache.delete(n.schema),delete this.schemas[a],delete this.refs[a],this}case"object":{let n=a;this._cache.delete(n);let t=a[this.opts.schemaId];return t&&(t=(0,st.normalizeId)(t),delete this.schemas[t],delete this.refs[t]),this}default:throw new Error("ajv.removeSchema: invalid parameter")}}addVocabulary(a){for(let n of a)this.addKeyword(n);return this}addKeyword(a,n){let t;if(typeof a=="string")t=a,typeof n=="object"&&(this.logger.warn("these parameters are deprecated, see docs for addKeyword"),n.keyword=t);else if(typeof a=="object"&&n===void 0){if(n=a,t=n.keyword,Array.isArray(t)&&!t.length)throw new Error("addKeywords: keyword must be string or non-empty array")}else throw new Error("invalid addKeywords parameters");if(iy.call(this,t,n),!n)return(0,Yl.eachItem)(t,l=>Xl.call(this,l)),this;uy.call(this,n);let c=c3(O4({},n),{type:(0,Hr.getJSONTypes)(n.type),schemaType:(0,Hr.getJSONTypes)(n.schemaType)});return(0,Yl.eachItem)(t,c.type.length===0?l=>Xl.call(this,l,c):l=>c.type.forEach(o=>Xl.call(this,l,c,o))),this}getKeyword(a){let n=this.RULES.all[a];return typeof n=="object"?n.definition:!!n}removeKeyword(a){let{RULES:n}=this;delete n.keywords[a],delete n.all[a];for(let t of n.rules){let c=t.rules.findIndex(l=>l.keyword===a);c>=0&&t.rules.splice(c,1)}return this}addFormat(a,n){return typeof n=="string"&&(n=new RegExp(n)),this.formats[a]=n,this}errorsText(a=this.errors,{separator:n=", ",dataVar:t="data"}={}){return!a||a.length===0?"No errors":a.map(c=>`${t}${c.instancePath} ${c.message}`).reduce((c,l)=>c+n+l)}$dataMetaSchema(a,n){let t=this.RULES.all;a=JSON.parse(JSON.stringify(a));for(let c of n){let l=c.split("/").slice(1),o=a;for(let s of l)o=o[s];for(let s in t){let i=t[s];if(typeof i!="object")continue;let{$data:f}=i.definition,u=o[s];f&&u&&(o[s]=Zf(u))}}return a}_removeAllSchemas(a,n){for(let t in a){let c=a[t];(!n||n.test(t))&&(typeof c=="string"?delete a[t]:c&&!c.meta&&(this._cache.delete(c.schema),delete a[t]))}}_addSchema(a,n,t,c=this.opts.validateSchema,l=this.opts.addUsedSchema){let o,{schemaId:s}=this.opts;if(typeof a=="object")o=a[s];else{if(this.opts.jtd)throw new Error("schema must be object");if(typeof a!="boolean")throw new Error("schema must be object or boolean")}let i=this._cache.get(a);if(i!==void 0)return i;t=(0,st.normalizeId)(o||t);let f=st.getSchemaRefs.call(this,a,t);return i=new ot.SchemaEnv({schema:a,schemaId:s,meta:n,baseId:t,localRefs:f}),this._cache.set(i.schema,i),l&&!t.startsWith("#")&&(t&&this._checkUnique(t),this.refs[t]=i),c&&this.validateSchema(a,!0),i}_checkUnique(a){if(this.schemas[a]||this.refs[a])throw new Error(`schema with key or id "${a}" already exists`)}_compileSchemaEnv(a){if(a.meta?this._compileMetaSchema(a):ot.compileSchema.call(this,a),!a.validate)throw new Error("ajv implementation error");return a.validate}_compileMetaSchema(a){let n=this.opts;this.opts=this._metaOpts;try{ot.compileSchema.call(this,a)}finally{this.opts=n}}};it.ValidationError=Jb.default;it.MissingRefError=Xf.default;h3.default=it;function Kf(e,a,n,t="error"){for(let c in e){let l=c;l in a&&this.logger[t](`${n}: option ${c}. ${e[l]}`)}}function Qf(e){return e=(0,st.normalizeId)(e),this.schemas[e]||this.refs[e]}function ny(){let e=this.opts.schemas;if(e)if(Array.isArray(e))this.addSchema(e);else for(let a in e)this.addSchema(e[a],a)}function ty(){for(let e in this.opts.formats){let a=this.opts.formats[e];a&&this.addFormat(e,a)}}function ry(e){if(Array.isArray(e)){this.addVocabulary(e);return}this.logger.warn("keywords option as map is deprecated, pass array");for(let a in e){let n=e[a];n.keyword||(n.keyword=a),this.addKeyword(n)}}function cy(){let e=O4({},this.opts);for(let a of Xb)delete e[a];return e}var ly={log(){},warn(){},error(){}};function oy(e){if(e===!1)return ly;if(e===void 0)return console;if(e.log&&e.warn&&e.error)return e;throw new Error("logger must implement log, warn and error methods")}var sy=/^[a-z_$][a-z0-9_$:-]*$/i;function iy(e,a){let{RULES:n}=this;if((0,Yl.eachItem)(e,t=>{if(n.keywords[t])throw new Error(`Keyword ${t} is already defined`);if(!sy.test(t))throw new Error(`Keyword ${t} has invalid name`)}),!!a&&a.$data&&!("code"in a||"validate"in a))throw new Error('$data keyword must have "code" or "validate" function')}function Xl(e,a,n){var t;let c=a?.post;if(n&&c)throw new Error('keyword with "post" flag cannot have "type"');let{RULES:l}=this,o=c?l.post:l.rules.find(({type:i})=>i===n);if(o||(o={type:n,rules:[]},l.rules.push(o)),l.keywords[e]=!0,!a)return;let s={keyword:e,definition:c3(O4({},a),{type:(0,Hr.getJSONTypes)(a.type),schemaType:(0,Hr.getJSONTypes)(a.schemaType)})};a.before?fy.call(this,o,s,a.before):o.rules.push(s),l.all[e]=s,(t=a.implements)===null||t===void 0||t.forEach(i=>this.addKeyword(i))}function fy(e,a,n){let t=e.rules.findIndex(c=>c.keyword===n);t>=0?e.rules.splice(t,0,a):(e.rules.push(a),this.logger.warn(`rule ${n} is not defined`))}function uy(e){let{metaSchema:a}=e;a!==void 0&&(e.$data&&this.opts.$data&&(a=Zf(a)),e.validateSchema=this.compile(a,!0))}var dy={$ref:"https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"};function Zf(e){return{anyOf:[e,dy]}}});var au=n1(Zl=>{"use strict";Object.defineProperty(Zl,"__esModule",{value:!0});var py={keyword:"id",code(){throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID')}};Zl.default=py});var cu=n1(Oa=>{"use strict";Object.defineProperty(Oa,"__esModule",{value:!0});Oa.callRef=Oa.getValidate=void 0;var vy=ct(),nu=le(),D3=v4(),S8=i6(),tu=Dr(),Wr=q4(),my={keyword:"$ref",schemaType:"string",code(e){let{gen:a,schema:n,it:t}=e,{baseId:c,schemaEnv:l,validateName:o,opts:s,self:i}=t,{root:f}=l;if((n==="#"||n==="#/")&&c===f.baseId)return d();let u=tu.resolveRef.call(i,f,c,n);if(u===void 0)throw new vy.default(t.opts.uriResolver,c,n);if(u instanceof tu.SchemaEnv)return h(u);return m(u);function d(){if(l===f)return Vr(e,o,l,l.$async);let v=a.scopeValue("root",{ref:f});return Vr(e,(0,D3._)`${v}.validate`,f,f.$async)}function h(v){let p=ru(e,v);Vr(e,p,v,v.$async)}function m(v){let p=a.scopeValue("schema",s.code.source===!0?{ref:v,code:(0,D3.stringify)(v)}:{ref:v}),g=a.name("valid"),y=e.subschema({schema:v,dataTypes:[],schemaPath:D3.nil,topSchemaRef:p,errSchemaPath:n},g);e.mergeEvaluated(y),e.ok(g)}}};function ru(e,a){let{gen:n}=e;return a.validate?n.scopeValue("validate",{ref:a.validate}):(0,D3._)`${n.scopeValue("wrapper",{ref:a})}.validate`}Oa.getValidate=ru;function Vr(e,a,n,t){let{gen:c,it:l}=e,{allErrors:o,schemaEnv:s,opts:i}=l,f=i.passContext?S8.default.this:D3.nil;t?u():d();function u(){if(!s.$async)throw new Error("async schema referenced by sync schema");let v=c.let("valid");c.try(()=>{c.code((0,D3._)`await ${(0,nu.callValidateCode)(e,a,f)}`),m(a),o||c.assign(v,!0)},p=>{c.if((0,D3._)`!(${p} instanceof ${l.ValidationError})`,()=>c.throw(p)),h(p),o||c.assign(v,!1)}),e.ok(v)}function d(){e.result((0,nu.callValidateCode)(e,a,f),()=>m(a),()=>h(a))}function h(v){let p=(0,D3._)`${v}.errors`;c.assign(S8.default.vErrors,(0,D3._)`${S8.default.vErrors} === null ? ${p} : ${S8.default.vErrors}.concat(${p})`),c.assign(S8.default.errors,(0,D3._)`${S8.default.vErrors}.length`)}function m(v){var p;if(!l.opts.unevaluated)return;let g=(p=n?.validate)===null||p===void 0?void 0:p.evaluated;if(l.props!==!0)if(g&&!g.dynamicProps)g.props!==void 0&&(l.props=Wr.mergeEvaluated.props(c,g.props,l.props));else{let y=c.var("props",(0,D3._)`${v}.evaluated.props`);l.props=Wr.mergeEvaluated.props(c,y,l.props,D3.Name)}if(l.items!==!0)if(g&&!g.dynamicItems)g.items!==void 0&&(l.items=Wr.mergeEvaluated.items(c,g.items,l.items));else{let y=c.var("items",(0,D3._)`${v}.evaluated.items`);l.items=Wr.mergeEvaluated.items(c,y,l.items,D3.Name)}}}Oa.callRef=Vr;Oa.default=my});var lu=n1(e7=>{"use strict";Object.defineProperty(e7,"__esModule",{value:!0});var hy=au(),gy=cu(),zy=["$schema","$id","$defs","$vocabulary",{keyword:"$comment"},"definitions",hy.default,gy.default];e7.default=zy});var ou=n1(a7=>{"use strict";Object.defineProperty(a7,"__esModule",{value:!0});var Jr=v4(),V6=Jr.operators,Gr={maximum:{okStr:"<=",ok:V6.LTE,fail:V6.GT},minimum:{okStr:">=",ok:V6.GTE,fail:V6.LT},exclusiveMaximum:{okStr:"<",ok:V6.LT,fail:V6.GTE},exclusiveMinimum:{okStr:">",ok:V6.GT,fail:V6.LTE}},by={message:({keyword:e,schemaCode:a})=>(0,Jr.str)`must be ${Gr[e].okStr} ${a}`,params:({keyword:e,schemaCode:a})=>(0,Jr._)`{comparison: ${Gr[e].okStr}, limit: ${a}}`},yy={keyword:Object.keys(Gr),type:"number",schemaType:"number",$data:!0,error:by,code(e){let{keyword:a,data:n,schemaCode:t}=e;e.fail$data((0,Jr._)`${n} ${Gr[a].fail} ${t} || isNaN(${n})`)}};a7.default=yy});var su=n1(n7=>{"use strict";Object.defineProperty(n7,"__esModule",{value:!0});var ft=v4(),My={message:({schemaCode:e})=>(0,ft.str)`must be multiple of ${e}`,params:({schemaCode:e})=>(0,ft._)`{multipleOf: ${e}}`},xy={keyword:"multipleOf",type:"number",schemaType:"number",$data:!0,error:My,code(e){let{gen:a,data:n,schemaCode:t,it:c}=e,l=c.opts.multipleOfPrecision,o=a.let("res"),s=l?(0,ft._)`Math.abs(Math.round(${o}) - ${o}) > 1e-${l}`:(0,ft._)`${o} !== parseInt(${o})`;e.fail$data((0,ft._)`(${t} === 0 || (${o} = ${n}/${t}, ${s}))`)}};n7.default=xy});var fu=n1(t7=>{"use strict";Object.defineProperty(t7,"__esModule",{value:!0});function iu(e){let a=e.length,n=0,t=0,c;for(;t<a;)n++,c=e.charCodeAt(t++),c>=55296&&c<=56319&&t<a&&(c=e.charCodeAt(t),(c&64512)===56320&&t++);return n}t7.default=iu;iu.code='require("ajv/dist/runtime/ucs2length").default'});var uu=n1(r7=>{"use strict";Object.defineProperty(r7,"__esModule",{value:!0});var Ra=v4(),Ly=q4(),wy=fu(),Cy={message({keyword:e,schemaCode:a}){let n=e==="maxLength"?"more":"fewer";return(0,Ra.str)`must NOT have ${n} than ${a} characters`},params:({schemaCode:e})=>(0,Ra._)`{limit: ${e}}`},jy={keyword:["maxLength","minLength"],type:"string",schemaType:"number",$data:!0,error:Cy,code(e){let{keyword:a,data:n,schemaCode:t,it:c}=e,l=a==="maxLength"?Ra.operators.GT:Ra.operators.LT,o=c.opts.unicode===!1?(0,Ra._)`${n}.length`:(0,Ra._)`${(0,Ly.useFunc)(e.gen,wy.default)}(${n})`;e.fail$data((0,Ra._)`${o} ${l} ${t}`)}};r7.default=jy});var du=n1(c7=>{"use strict";Object.defineProperty(c7,"__esModule",{value:!0});var Sy=le(),Kr=v4(),ky={message:({schemaCode:e})=>(0,Kr.str)`must match pattern "${e}"`,params:({schemaCode:e})=>(0,Kr._)`{pattern: ${e}}`},Ny={keyword:"pattern",type:"string",schemaType:"string",$data:!0,error:ky,code(e){let{data:a,$data:n,schema:t,schemaCode:c,it:l}=e,o=l.opts.unicodeRegExp?"u":"",s=n?(0,Kr._)`(new RegExp(${c}, ${o}))`:(0,Sy.usePattern)(e,t);e.fail$data((0,Kr._)`!${s}.test(${a})`)}};c7.default=Ny});var pu=n1(l7=>{"use strict";Object.defineProperty(l7,"__esModule",{value:!0});var ut=v4(),Ay={message({keyword:e,schemaCode:a}){let n=e==="maxProperties"?"more":"fewer";return(0,ut.str)`must NOT have ${n} than ${a} properties`},params:({schemaCode:e})=>(0,ut._)`{limit: ${e}}`},_y={keyword:["maxProperties","minProperties"],type:"object",schemaType:"number",$data:!0,error:Ay,code(e){let{keyword:a,data:n,schemaCode:t}=e,c=a==="maxProperties"?ut.operators.GT:ut.operators.LT;e.fail$data((0,ut._)`Object.keys(${n}).length ${c} ${t}`)}};l7.default=_y});var vu=n1(o7=>{"use strict";Object.defineProperty(o7,"__esModule",{value:!0});var dt=le(),pt=v4(),Ey=q4(),Py={message:({params:{missingProperty:e}})=>(0,pt.str)`must have required property '${e}'`,params:({params:{missingProperty:e}})=>(0,pt._)`{missingProperty: ${e}}`},Ty={keyword:"required",type:"object",schemaType:"array",$data:!0,error:Py,code(e){let{gen:a,schema:n,schemaCode:t,data:c,$data:l,it:o}=e,{opts:s}=o;if(!l&&n.length===0)return;let i=n.length>=s.loopRequired;if(o.allErrors?f():u(),s.strictRequired){let m=e.parentSchema.properties,{definedProperties:v}=e.it;for(let p of n)if(m?.[p]===void 0&&!v.has(p)){let g=o.schemaEnv.baseId+o.errSchemaPath,y=`required property "${p}" is not defined at "${g}" (strictRequired)`;(0,Ey.checkStrictMode)(o,y,o.opts.strictRequired)}}function f(){if(i||l)e.block$data(pt.nil,d);else for(let m of n)(0,dt.checkReportMissingProp)(e,m)}function u(){let m=a.let("missing");if(i||l){let v=a.let("valid",!0);e.block$data(v,()=>h(m,v)),e.ok(v)}else a.if((0,dt.checkMissingProp)(e,n,m)),(0,dt.reportMissingProp)(e,m),a.else()}function d(){a.forOf("prop",t,m=>{e.setParams({missingProperty:m}),a.if((0,dt.noPropertyInData)(a,c,m,s.ownProperties),()=>e.error())})}function h(m,v){e.setParams({missingProperty:m}),a.forOf(m,t,()=>{a.assign(v,(0,dt.propertyInData)(a,c,m,s.ownProperties)),a.if((0,pt.not)(v),()=>{e.error(),a.break()})},pt.nil)}}};o7.default=Ty});var mu=n1(s7=>{"use strict";Object.defineProperty(s7,"__esModule",{value:!0});var vt=v4(),Oy={message({keyword:e,schemaCode:a}){let n=e==="maxItems"?"more":"fewer";return(0,vt.str)`must NOT have ${n} than ${a} items`},params:({schemaCode:e})=>(0,vt._)`{limit: ${e}}`},Ry={keyword:["maxItems","minItems"],type:"array",schemaType:"number",$data:!0,error:Oy,code(e){let{keyword:a,data:n,schemaCode:t}=e,c=a==="maxItems"?vt.operators.GT:vt.operators.LT;e.fail$data((0,vt._)`${n}.length ${c} ${t}`)}};s7.default=Ry});var Qr=n1(i7=>{"use strict";Object.defineProperty(i7,"__esModule",{value:!0});var hu=Pl();hu.code='require("ajv/dist/runtime/equal").default';i7.default=hu});var gu=n1(u7=>{"use strict";Object.defineProperty(u7,"__esModule",{value:!0});var f7=et(),g3=v4(),qy=q4(),$y=Qr(),Dy={message:({params:{i:e,j:a}})=>(0,g3.str)`must NOT have duplicate items (items ## ${a} and ${e} are identical)`,params:({params:{i:e,j:a}})=>(0,g3._)`{i: ${e}, j: ${a}}`},Fy={keyword:"uniqueItems",type:"array",schemaType:"boolean",$data:!0,error:Dy,code(e){let{gen:a,data:n,$data:t,schema:c,parentSchema:l,schemaCode:o,it:s}=e;if(!t&&!c)return;let i=a.let("valid"),f=l.items?(0,f7.getSchemaTypes)(l.items):[];e.block$data(i,u,(0,g3._)`${o} === false`),e.ok(i);function u(){let v=a.let("i",(0,g3._)`${n}.length`),p=a.let("j");e.setParams({i:v,j:p}),a.assign(i,!0),a.if((0,g3._)`${v} > 1`,()=>(d()?h:m)(v,p))}function d(){return f.length>0&&!f.some(v=>v==="object"||v==="array")}function h(v,p){let g=a.name("item"),y=(0,f7.checkDataTypes)(f,g,s.opts.strictNumbers,f7.DataType.Wrong),L=a.const("indices",(0,g3._)`{}`);a.for((0,g3._)`;${v}--;`,()=>{a.let(g,(0,g3._)`${n}[${v}]`),a.if(y,(0,g3._)`continue`),f.length>1&&a.if((0,g3._)`typeof ${g} == "string"`,(0,g3._)`${g} += "_"`),a.if((0,g3._)`typeof ${L}[${g}] == "number"`,()=>{a.assign(p,(0,g3._)`${L}[${g}]`),e.error(),a.assign(i,!1).break()}).code((0,g3._)`${L}[${g}] = ${v}`)})}function m(v,p){let g=(0,qy.useFunc)(a,$y.default),y=a.name("outer");a.label(y).for((0,g3._)`;${v}--;`,()=>a.for((0,g3._)`${p} = ${v}; ${p}--;`,()=>a.if((0,g3._)`${g}(${n}[${v}], ${n}[${p}])`,()=>{e.error(),a.assign(i,!1).break(y)})))}}};u7.default=Fy});var zu=n1(p7=>{"use strict";Object.defineProperty(p7,"__esModule",{value:!0});var d7=v4(),By=q4(),Iy=Qr(),Uy={message:"must be equal to constant",params:({schemaCode:e})=>(0,d7._)`{allowedValue: ${e}}`},Hy={keyword:"const",$data:!0,error:Uy,code(e){let{gen:a,data:n,$data:t,schemaCode:c,schema:l}=e;t||l&&typeof l=="object"?e.fail$data((0,d7._)`!${(0,By.useFunc)(a,Iy.default)}(${n}, ${c})`):e.fail((0,d7._)`${l} !== ${n}`)}};p7.default=Hy});var bu=n1(v7=>{"use strict";Object.defineProperty(v7,"__esModule",{value:!0});var mt=v4(),Wy=q4(),Vy=Qr(),Jy={message:"must be equal to one of the allowed values",params:({schemaCode:e})=>(0,mt._)`{allowedValues: ${e}}`},Gy={keyword:"enum",schemaType:"array",$data:!0,error:Jy,code(e){let{gen:a,data:n,$data:t,schema:c,schemaCode:l,it:o}=e;if(!t&&c.length===0)throw new Error("enum must have non-empty array");let s=c.length>=o.opts.loopEnum,i,f=()=>i??(i=(0,Wy.useFunc)(a,Vy.default)),u;if(s||t)u=a.let("valid"),e.block$data(u,d);else{if(!Array.isArray(c))throw new Error("ajv implementation error");let m=a.const("vSchema",l);u=(0,mt.or)(...c.map((v,p)=>h(m,p)))}e.pass(u);function d(){a.assign(u,!1),a.forOf("v",l,m=>a.if((0,mt._)`${f()}(${n}, ${m})`,()=>a.assign(u,!0).break()))}function h(m,v){let p=c[v];return typeof p=="object"&&p!==null?(0,mt._)`${f()}(${n}, ${m}[${v}])`:(0,mt._)`${n} === ${p}`}}};v7.default=Gy});var yu=n1(m7=>{"use strict";Object.defineProperty(m7,"__esModule",{value:!0});var Ky=ou(),Qy=su(),Xy=uu(),Yy=du(),Zy=pu(),eM=vu(),aM=mu(),nM=gu(),tM=zu(),rM=bu(),cM=[Ky.default,Qy.default,Xy.default,Yy.default,Zy.default,eM.default,aM.default,nM.default,{keyword:"type",schemaType:["string","array"]},{keyword:"nullable",schemaType:"boolean"},tM.default,rM.default];m7.default=cM});var g7=n1(ht=>{"use strict";Object.defineProperty(ht,"__esModule",{value:!0});ht.validateAdditionalItems=void 0;var qa=v4(),h7=q4(),lM={message:({params:{len:e}})=>(0,qa.str)`must NOT have more than ${e} items`,params:({params:{len:e}})=>(0,qa._)`{limit: ${e}}`},oM={keyword:"additionalItems",type:"array",schemaType:["boolean","object"],before:"uniqueItems",error:lM,code(e){let{parentSchema:a,it:n}=e,{items:t}=a;if(!Array.isArray(t)){(0,h7.checkStrictMode)(n,'"additionalItems" is ignored when "items" is not an array of schemas');return}Mu(e,t)}};function Mu(e,a){let{gen:n,schema:t,data:c,keyword:l,it:o}=e;o.items=!0;let s=n.const("len",(0,qa._)`${c}.length`);if(t===!1)e.setParams({len:a.length}),e.pass((0,qa._)`${s} <= ${a.length}`);else if(typeof t=="object"&&!(0,h7.alwaysValidSchema)(o,t)){let f=n.var("valid",(0,qa._)`${s} <= ${a.length}`);n.if((0,qa.not)(f),()=>i(f)),e.ok(f)}function i(f){n.forRange("i",a.length,s,u=>{e.subschema({keyword:l,dataProp:u,dataPropType:h7.Type.Num},f),o.allErrors||n.if((0,qa.not)(f),()=>n.break())})}}ht.validateAdditionalItems=Mu;ht.default=oM});var z7=n1(gt=>{"use strict";Object.defineProperty(gt,"__esModule",{value:!0});gt.validateTuple=void 0;var xu=v4(),Xr=q4(),sM=le(),iM={keyword:"items",type:"array",schemaType:["object","array","boolean"],before:"uniqueItems",code(e){let{schema:a,it:n}=e;if(Array.isArray(a))return Lu(e,"additionalItems",a);n.items=!0,!(0,Xr.alwaysValidSchema)(n,a)&&e.ok((0,sM.validateArray)(e))}};function Lu(e,a,n=e.schema){let{gen:t,parentSchema:c,data:l,keyword:o,it:s}=e;u(c),s.opts.unevaluated&&n.length&&s.items!==!0&&(s.items=Xr.mergeEvaluated.items(t,n.length,s.items));let i=t.name("valid"),f=t.const("len",(0,xu._)`${l}.length`);n.forEach((d,h)=>{(0,Xr.alwaysValidSchema)(s,d)||(t.if((0,xu._)`${f} > ${h}`,()=>e.subschema({keyword:o,schemaProp:h,dataProp:h},i)),e.ok(i))});function u(d){let{opts:h,errSchemaPath:m}=s,v=n.length,p=v===d.minItems&&(v===d.maxItems||d[a]===!1);if(h.strictTuples&&!p){let g=`"${o}" is ${v}-tuple, but minItems or maxItems/${a} are not specified or different at path "${m}"`;(0,Xr.checkStrictMode)(s,g,h.strictTuples)}}}gt.validateTuple=Lu;gt.default=iM});var wu=n1(b7=>{"use strict";Object.defineProperty(b7,"__esModule",{value:!0});var fM=z7(),uM={keyword:"prefixItems",type:"array",schemaType:["array"],before:"uniqueItems",code:e=>(0,fM.validateTuple)(e,"items")};b7.default=uM});var ju=n1(y7=>{"use strict";Object.defineProperty(y7,"__esModule",{value:!0});var Cu=v4(),dM=q4(),pM=le(),vM=g7(),mM={message:({params:{len:e}})=>(0,Cu.str)`must NOT have more than ${e} items`,params:({params:{len:e}})=>(0,Cu._)`{limit: ${e}}`},hM={keyword:"items",type:"array",schemaType:["object","boolean"],before:"uniqueItems",error:mM,code(e){let{schema:a,parentSchema:n,it:t}=e,{prefixItems:c}=n;t.items=!0,!(0,dM.alwaysValidSchema)(t,a)&&(c?(0,vM.validateAdditionalItems)(e,c):e.ok((0,pM.validateArray)(e)))}};y7.default=hM});var Su=n1(M7=>{"use strict";Object.defineProperty(M7,"__esModule",{value:!0});var se=v4(),Yr=q4(),gM={message:({params:{min:e,max:a}})=>a===void 0?(0,se.str)`must contain at least ${e} valid item(s)`:(0,se.str)`must contain at least ${e} and no more than ${a} valid item(s)`,params:({params:{min:e,max:a}})=>a===void 0?(0,se._)`{minContains: ${e}}`:(0,se._)`{minContains: ${e}, maxContains: ${a}}`},zM={keyword:"contains",type:"array",schemaType:["object","boolean"],before:"uniqueItems",trackErrors:!0,error:gM,code(e){let{gen:a,schema:n,parentSchema:t,data:c,it:l}=e,o,s,{minContains:i,maxContains:f}=t;l.opts.next?(o=i===void 0?1:i,s=f):o=1;let u=a.const("len",(0,se._)`${c}.length`);if(e.setParams({min:o,max:s}),s===void 0&&o===0){(0,Yr.checkStrictMode)(l,'"minContains" == 0 without "maxContains": "contains" keyword ignored');return}if(s!==void 0&&o>s){(0,Yr.checkStrictMode)(l,'"minContains" > "maxContains" is always invalid'),e.fail();return}if((0,Yr.alwaysValidSchema)(l,n)){let p=(0,se._)`${u} >= ${o}`;s!==void 0&&(p=(0,se._)`${p} && ${u} <= ${s}`),e.pass(p);return}l.items=!0;let d=a.name("valid");s===void 0&&o===1?m(d,()=>a.if(d,()=>a.break())):o===0?(a.let(d,!0),s!==void 0&&a.if((0,se._)`${c}.length > 0`,h)):(a.let(d,!1),h()),e.result(d,()=>e.reset());function h(){let p=a.name("_valid"),g=a.let("count",0);m(p,()=>a.if(p,()=>v(g)))}function m(p,g){a.forRange("i",0,u,y=>{e.subschema({keyword:"contains",dataProp:y,dataPropType:Yr.Type.Num,compositeRule:!0},p),g()})}function v(p){a.code((0,se._)`${p}++`),s===void 0?a.if((0,se._)`${p} >= ${o}`,()=>a.assign(d,!0).break()):(a.if((0,se._)`${p} > ${s}`,()=>a.assign(d,!1).break()),o===1?a.assign(d,!0):a.if((0,se._)`${p} >= ${o}`,()=>a.assign(d,!0)))}}};M7.default=zM});var Au=n1(Be=>{"use strict";Object.defineProperty(Be,"__esModule",{value:!0});Be.validateSchemaDeps=Be.validatePropertyDeps=Be.error=void 0;var x7=v4(),bM=q4(),zt=le();Be.error={message:({params:{property:e,depsCount:a,deps:n}})=>{let t=a===1?"property":"properties";return(0,x7.str)`must have ${t} ${n} when property ${e} is present`},params:({params:{property:e,depsCount:a,deps:n,missingProperty:t}})=>(0,x7._)`{property: ${e},
    missingProperty: ${t},
    depsCount: ${a},
    deps: ${n}}`};var yM={keyword:"dependencies",type:"object",schemaType:"object",error:Be.error,code(e){let[a,n]=MM(e);ku(e,a),Nu(e,n)}};function MM({schema:e}){let a={},n={};for(let t in e){if(t==="__proto__")continue;let c=Array.isArray(e[t])?a:n;c[t]=e[t]}return[a,n]}function ku(e,a=e.schema){let{gen:n,data:t,it:c}=e;if(Object.keys(a).length===0)return;let l=n.let("missing");for(let o in a){let s=a[o];if(s.length===0)continue;let i=(0,zt.propertyInData)(n,t,o,c.opts.ownProperties);e.setParams({property:o,depsCount:s.length,deps:s.join(", ")}),c.allErrors?n.if(i,()=>{for(let f of s)(0,zt.checkReportMissingProp)(e,f)}):(n.if((0,x7._)`${i} && (${(0,zt.checkMissingProp)(e,s,l)})`),(0,zt.reportMissingProp)(e,l),n.else())}}Be.validatePropertyDeps=ku;function Nu(e,a=e.schema){let{gen:n,data:t,keyword:c,it:l}=e,o=n.name("valid");for(let s in a)(0,bM.alwaysValidSchema)(l,a[s])||(n.if((0,zt.propertyInData)(n,t,s,l.opts.ownProperties),()=>{let i=e.subschema({keyword:c,schemaProp:s},o);e.mergeValidEvaluated(i,o)},()=>n.var(o,!0)),e.ok(o))}Be.validateSchemaDeps=Nu;Be.default=yM});var Eu=n1(L7=>{"use strict";Object.defineProperty(L7,"__esModule",{value:!0});var _u=v4(),xM=q4(),LM={message:"property name must be valid",params:({params:e})=>(0,_u._)`{propertyName: ${e.propertyName}}`},wM={keyword:"propertyNames",type:"object",schemaType:["object","boolean"],error:LM,code(e){let{gen:a,schema:n,data:t,it:c}=e;if((0,xM.alwaysValidSchema)(c,n))return;let l=a.name("valid");a.forIn("key",t,o=>{e.setParams({propertyName:o}),e.subschema({keyword:"propertyNames",data:o,dataTypes:["string"],propertyName:o,compositeRule:!0},l),a.if((0,_u.not)(l),()=>{e.error(!0),c.allErrors||a.break()})}),e.ok(l)}};L7.default=wM});var C7=n1(w7=>{"use strict";Object.defineProperty(w7,"__esModule",{value:!0});var Zr=le(),we=v4(),CM=i6(),ec=q4(),jM={message:"must NOT have additional properties",params:({params:e})=>(0,we._)`{additionalProperty: ${e.additionalProperty}}`},SM={keyword:"additionalProperties",type:["object"],schemaType:["boolean","object"],allowUndefined:!0,trackErrors:!0,error:jM,code(e){let{gen:a,schema:n,parentSchema:t,data:c,errsCount:l,it:o}=e;if(!l)throw new Error("ajv implementation error");let{allErrors:s,opts:i}=o;if(o.props=!0,i.removeAdditional!=="all"&&(0,ec.alwaysValidSchema)(o,n))return;let f=(0,Zr.allSchemaProperties)(t.properties),u=(0,Zr.allSchemaProperties)(t.patternProperties);d(),e.ok((0,we._)`${l} === ${CM.default.errors}`);function d(){a.forIn("key",c,g=>{!f.length&&!u.length?v(g):a.if(h(g),()=>v(g))})}function h(g){let y;if(f.length>8){let L=(0,ec.schemaRefOrVal)(o,t.properties,"properties");y=(0,Zr.isOwnProperty)(a,L,g)}else f.length?y=(0,we.or)(...f.map(L=>(0,we._)`${g} === ${L}`)):y=we.nil;return u.length&&(y=(0,we.or)(y,...u.map(L=>(0,we._)`${(0,Zr.usePattern)(e,L)}.test(${g})`))),(0,we.not)(y)}function m(g){a.code((0,we._)`delete ${c}[${g}]`)}function v(g){if(i.removeAdditional==="all"||i.removeAdditional&&n===!1){m(g);return}if(n===!1){e.setParams({additionalProperty:g}),e.error(),s||a.break();return}if(typeof n=="object"&&!(0,ec.alwaysValidSchema)(o,n)){let y=a.name("valid");i.removeAdditional==="failing"?(p(g,y,!1),a.if((0,we.not)(y),()=>{e.reset(),m(g)})):(p(g,y),s||a.if((0,we.not)(y),()=>a.break()))}}function p(g,y,L){let S={keyword:"additionalProperties",dataProp:g,dataPropType:ec.Type.Str};L===!1&&Object.assign(S,{compositeRule:!0,createErrors:!1,allErrors:!1}),e.subschema(S,y)}}};w7.default=SM});var Ou=n1(S7=>{"use strict";Object.defineProperty(S7,"__esModule",{value:!0});var kM=rt(),Pu=le(),j7=q4(),Tu=C7(),NM={keyword:"properties",type:"object",schemaType:"object",code(e){let{gen:a,schema:n,parentSchema:t,data:c,it:l}=e;l.opts.removeAdditional==="all"&&t.additionalProperties===void 0&&Tu.default.code(new kM.KeywordCxt(l,Tu.default,"additionalProperties"));let o=(0,Pu.allSchemaProperties)(n);for(let d of o)l.definedProperties.add(d);l.opts.unevaluated&&o.length&&l.props!==!0&&(l.props=j7.mergeEvaluated.props(a,(0,j7.toHash)(o),l.props));let s=o.filter(d=>!(0,j7.alwaysValidSchema)(l,n[d]));if(s.length===0)return;let i=a.name("valid");for(let d of s)f(d)?u(d):(a.if((0,Pu.propertyInData)(a,c,d,l.opts.ownProperties)),u(d),l.allErrors||a.else().var(i,!0),a.endIf()),e.it.definedProperties.add(d),e.ok(i);function f(d){return l.opts.useDefaults&&!l.compositeRule&&n[d].default!==void 0}function u(d){e.subschema({keyword:"properties",schemaProp:d,dataProp:d},i)}}};S7.default=NM});var Du=n1(k7=>{"use strict";Object.defineProperty(k7,"__esModule",{value:!0});var Ru=le(),ac=v4(),qu=q4(),$u=q4(),AM={keyword:"patternProperties",type:"object",schemaType:"object",code(e){let{gen:a,schema:n,data:t,parentSchema:c,it:l}=e,{opts:o}=l,s=(0,Ru.allSchemaProperties)(n),i=s.filter(p=>(0,qu.alwaysValidSchema)(l,n[p]));if(s.length===0||i.length===s.length&&(!l.opts.unevaluated||l.props===!0))return;let f=o.strictSchema&&!o.allowMatchingProperties&&c.properties,u=a.name("valid");l.props!==!0&&!(l.props instanceof ac.Name)&&(l.props=(0,$u.evaluatedPropsToName)(a,l.props));let{props:d}=l;h();function h(){for(let p of s)f&&m(p),l.allErrors?v(p):(a.var(u,!0),v(p),a.if(u))}function m(p){for(let g in f)new RegExp(p).test(g)&&(0,qu.checkStrictMode)(l,`property ${g} matches pattern ${p} (use allowMatchingProperties)`)}function v(p){a.forIn("key",t,g=>{a.if((0,ac._)`${(0,Ru.usePattern)(e,p)}.test(${g})`,()=>{let y=i.includes(p);y||e.subschema({keyword:"patternProperties",schemaProp:p,dataProp:g,dataPropType:$u.Type.Str},u),l.opts.unevaluated&&d!==!0?a.assign((0,ac._)`${d}[${g}]`,!0):!y&&!l.allErrors&&a.if((0,ac.not)(u),()=>a.break())})})}}};k7.default=AM});var Fu=n1(N7=>{"use strict";Object.defineProperty(N7,"__esModule",{value:!0});var _M=q4(),EM={keyword:"not",schemaType:["object","boolean"],trackErrors:!0,code(e){let{gen:a,schema:n,it:t}=e;if((0,_M.alwaysValidSchema)(t,n)){e.fail();return}let c=a.name("valid");e.subschema({keyword:"not",compositeRule:!0,createErrors:!1,allErrors:!1},c),e.failResult(c,()=>e.reset(),()=>e.error())},error:{message:"must NOT be valid"}};N7.default=EM});var Bu=n1(A7=>{"use strict";Object.defineProperty(A7,"__esModule",{value:!0});var PM=le(),TM={keyword:"anyOf",schemaType:"array",trackErrors:!0,code:PM.validateUnion,error:{message:"must match a schema in anyOf"}};A7.default=TM});var Iu=n1(_7=>{"use strict";Object.defineProperty(_7,"__esModule",{value:!0});var nc=v4(),OM=q4(),RM={message:"must match exactly one schema in oneOf",params:({params:e})=>(0,nc._)`{passingSchemas: ${e.passing}}`},qM={keyword:"oneOf",schemaType:"array",trackErrors:!0,error:RM,code(e){let{gen:a,schema:n,parentSchema:t,it:c}=e;if(!Array.isArray(n))throw new Error("ajv implementation error");if(c.opts.discriminator&&t.discriminator)return;let l=n,o=a.let("valid",!1),s=a.let("passing",null),i=a.name("_valid");e.setParams({passing:s}),a.block(f),e.result(o,()=>e.reset(),()=>e.error(!0));function f(){l.forEach((u,d)=>{let h;(0,OM.alwaysValidSchema)(c,u)?a.var(i,!0):h=e.subschema({keyword:"oneOf",schemaProp:d,compositeRule:!0},i),d>0&&a.if((0,nc._)`${i} && ${o}`).assign(o,!1).assign(s,(0,nc._)`[${s}, ${d}]`).else(),a.if(i,()=>{a.assign(o,!0),a.assign(s,d),h&&e.mergeEvaluated(h,nc.Name)})})}}};_7.default=qM});var Uu=n1(E7=>{"use strict";Object.defineProperty(E7,"__esModule",{value:!0});var $M=q4(),DM={keyword:"allOf",schemaType:"array",code(e){let{gen:a,schema:n,it:t}=e;if(!Array.isArray(n))throw new Error("ajv implementation error");let c=a.name("valid");n.forEach((l,o)=>{if((0,$M.alwaysValidSchema)(t,l))return;let s=e.subschema({keyword:"allOf",schemaProp:o},c);e.ok(c),e.mergeEvaluated(s)})}};E7.default=DM});var Vu=n1(P7=>{"use strict";Object.defineProperty(P7,"__esModule",{value:!0});var tc=v4(),Wu=q4(),FM={message:({params:e})=>(0,tc.str)`must match "${e.ifClause}" schema`,params:({params:e})=>(0,tc._)`{failingKeyword: ${e.ifClause}}`},BM={keyword:"if",schemaType:["object","boolean"],trackErrors:!0,error:FM,code(e){let{gen:a,parentSchema:n,it:t}=e;n.then===void 0&&n.else===void 0&&(0,Wu.checkStrictMode)(t,'"if" without "then" and "else" is ignored');let c=Hu(t,"then"),l=Hu(t,"else");if(!c&&!l)return;let o=a.let("valid",!0),s=a.name("_valid");if(i(),e.reset(),c&&l){let u=a.let("ifClause");e.setParams({ifClause:u}),a.if(s,f("then",u),f("else",u))}else c?a.if(s,f("then")):a.if((0,tc.not)(s),f("else"));e.pass(o,()=>e.error(!0));function i(){let u=e.subschema({keyword:"if",compositeRule:!0,createErrors:!1,allErrors:!1},s);e.mergeEvaluated(u)}function f(u,d){return()=>{let h=e.subschema({keyword:u},s);a.assign(o,s),e.mergeValidEvaluated(h,o),d?a.assign(d,(0,tc._)`${u}`):e.setParams({ifClause:u})}}}};function Hu(e,a){let n=e.schema[a];return n!==void 0&&!(0,Wu.alwaysValidSchema)(e,n)}P7.default=BM});var Ju=n1(T7=>{"use strict";Object.defineProperty(T7,"__esModule",{value:!0});var IM=q4(),UM={keyword:["then","else"],schemaType:["object","boolean"],code({keyword:e,parentSchema:a,it:n}){a.if===void 0&&(0,IM.checkStrictMode)(n,`"${e}" without "if" is ignored`)}};T7.default=UM});var Gu=n1(O7=>{"use strict";Object.defineProperty(O7,"__esModule",{value:!0});var HM=g7(),WM=wu(),VM=z7(),JM=ju(),GM=Su(),KM=Au(),QM=Eu(),XM=C7(),YM=Ou(),ZM=Du(),ex=Fu(),ax=Bu(),nx=Iu(),tx=Uu(),rx=Vu(),cx=Ju();function lx(e=!1){let a=[ex.default,ax.default,nx.default,tx.default,rx.default,cx.default,QM.default,XM.default,KM.default,YM.default,ZM.default];return e?a.push(WM.default,JM.default):a.push(HM.default,VM.default),a.push(GM.default),a}O7.default=lx});var Ku=n1(R7=>{"use strict";Object.defineProperty(R7,"__esModule",{value:!0});var X0=v4(),ox={message:({schemaCode:e})=>(0,X0.str)`must match format "${e}"`,params:({schemaCode:e})=>(0,X0._)`{format: ${e}}`},sx={keyword:"format",type:["number","string"],schemaType:"string",$data:!0,error:ox,code(e,a){let{gen:n,data:t,$data:c,schema:l,schemaCode:o,it:s}=e,{opts:i,errSchemaPath:f,schemaEnv:u,self:d}=s;if(!i.validateFormats)return;c?h():m();function h(){let v=n.scopeValue("formats",{ref:d.formats,code:i.code.formats}),p=n.const("fDef",(0,X0._)`${v}[${o}]`),g=n.let("fType"),y=n.let("format");n.if((0,X0._)`typeof ${p} == "object" && !(${p} instanceof RegExp)`,()=>n.assign(g,(0,X0._)`${p}.type || "string"`).assign(y,(0,X0._)`${p}.validate`),()=>n.assign(g,(0,X0._)`"string"`).assign(y,p)),e.fail$data((0,X0.or)(L(),S()));function L(){return i.strictSchema===!1?X0.nil:(0,X0._)`${o} && !${y}`}function S(){let j=u.$async?(0,X0._)`(${p}.async ? await ${y}(${t}) : ${y}(${t}))`:(0,X0._)`${y}(${t})`,x=(0,X0._)`(typeof ${y} == "function" ? ${j} : ${y}.test(${t}))`;return(0,X0._)`${y} && ${y} !== true && ${g} === ${a} && !${x}`}}function m(){let v=d.formats[l];if(!v){L();return}if(v===!0)return;let[p,g,y]=S(v);p===a&&e.pass(j());function L(){if(i.strictSchema===!1){d.logger.warn(x());return}throw new Error(x());function x(){return`unknown format "${l}" ignored in schema at path "${f}"`}}function S(x){let E=x instanceof RegExp?(0,X0.regexpCode)(x):i.code.formats?(0,X0._)`${i.code.formats}${(0,X0.getProperty)(l)}`:void 0,P=n.scopeValue("formats",{key:l,ref:x,code:E});return typeof x=="object"&&!(x instanceof RegExp)?[x.type||"string",x.validate,(0,X0._)`${P}.validate`]:["string",x,P]}function j(){if(typeof v=="object"&&!(v instanceof RegExp)&&v.async){if(!u.$async)throw new Error("async format in sync schema");return(0,X0._)`await ${y}(${t})`}return typeof g=="function"?(0,X0._)`${y}(${t})`:(0,X0._)`${y}.test(${t})`}}}};R7.default=sx});var Qu=n1(q7=>{"use strict";Object.defineProperty(q7,"__esModule",{value:!0});var ix=Ku(),fx=[ix.default];q7.default=fx});var Xu=n1(k8=>{"use strict";Object.defineProperty(k8,"__esModule",{value:!0});k8.contentVocabulary=k8.metadataVocabulary=void 0;k8.metadataVocabulary=["title","description","default","deprecated","readOnly","writeOnly","examples"];k8.contentVocabulary=["contentMediaType","contentEncoding","contentSchema"]});var Zu=n1($7=>{"use strict";Object.defineProperty($7,"__esModule",{value:!0});var ux=lu(),dx=yu(),px=Gu(),vx=Qu(),Yu=Xu(),mx=[ux.default,dx.default,(0,px.default)(),vx.default,Yu.metadataVocabulary,Yu.contentVocabulary];$7.default=mx});var ad=n1(rc=>{"use strict";Object.defineProperty(rc,"__esModule",{value:!0});rc.DiscrError=void 0;var ed=(function(e){return e.Tag="tag",e.Mapping="mapping",e})(ed||(rc.DiscrError=ed={}))});var td=n1(F7=>{"use strict";Object.defineProperty(F7,"__esModule",{value:!0});var N8=v4(),D7=ad(),nd=Dr(),hx=ct(),gx=q4(),zx={message:({params:{discrError:e,tagName:a}})=>e===D7.DiscrError.Tag?`tag "${a}" must be string`:`value of tag "${a}" must be in oneOf`,params:({params:{discrError:e,tag:a,tagName:n}})=>(0,N8._)`{error: ${e}, tag: ${n}, tagValue: ${a}}`},bx={keyword:"discriminator",type:"object",schemaType:"object",error:zx,code(e){let{gen:a,data:n,schema:t,parentSchema:c,it:l}=e,{oneOf:o}=c;if(!l.opts.discriminator)throw new Error("discriminator: requires discriminator option");let s=t.propertyName;if(typeof s!="string")throw new Error("discriminator: requires propertyName");if(t.mapping)throw new Error("discriminator: mapping is not supported");if(!o)throw new Error("discriminator: requires oneOf keyword");let i=a.let("valid",!1),f=a.const("tag",(0,N8._)`${n}${(0,N8.getProperty)(s)}`);a.if((0,N8._)`typeof ${f} == "string"`,()=>u(),()=>e.error(!1,{discrError:D7.DiscrError.Tag,tag:f,tagName:s})),e.ok(i);function u(){let m=h();a.if(!1);for(let v in m)a.elseIf((0,N8._)`${f} === ${v}`),a.assign(i,d(m[v]));a.else(),e.error(!1,{discrError:D7.DiscrError.Mapping,tag:f,tagName:s}),a.endIf()}function d(m){let v=a.name("valid"),p=e.subschema({keyword:"oneOf",schemaProp:m},v);return e.mergeEvaluated(p,N8.Name),v}function h(){var m;let v={},p=y(c),g=!0;for(let j=0;j<o.length;j++){let x=o[j];if(x?.$ref&&!(0,gx.schemaHasRulesButRef)(x,l.self.RULES)){let P=x.$ref;if(x=nd.resolveRef.call(l.self,l.schemaEnv.root,l.baseId,P),x instanceof nd.SchemaEnv&&(x=x.schema),x===void 0)throw new hx.default(l.opts.uriResolver,l.baseId,P)}let E=(m=x?.properties)===null||m===void 0?void 0:m[s];if(typeof E!="object")throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${s}"`);g=g&&(p||y(x)),L(E,j)}if(!g)throw new Error(`discriminator: "${s}" must be required`);return v;function y({required:j}){return Array.isArray(j)&&j.includes(s)}function L(j,x){if(j.const)S(j.const,x);else if(j.enum)for(let E of j.enum)S(E,x);else throw new Error(`discriminator: "properties/${s}" must have "const" or "enum"`)}function S(j,x){if(typeof j!="string"||j in v)throw new Error(`discriminator: "${s}" values must be unique strings`);v[j]=x}}}};F7.default=bx});var rd=n1((PA,yx)=>{yx.exports={$schema:"http://json-schema.org/draft-07/schema#",$id:"http://json-schema.org/draft-07/schema#",title:"Core schema meta-schema",definitions:{schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},nonNegativeInteger:{type:"integer",minimum:0},nonNegativeIntegerDefault0:{allOf:[{$ref:"#/definitions/nonNegativeInteger"},{default:0}]},simpleTypes:{enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}},type:["object","boolean"],properties:{$id:{type:"string",format:"uri-reference"},$schema:{type:"string",format:"uri"},$ref:{type:"string",format:"uri-reference"},$comment:{type:"string"},title:{type:"string"},description:{type:"string"},default:!0,readOnly:{type:"boolean",default:!1},examples:{type:"array",items:!0},multipleOf:{type:"number",exclusiveMinimum:0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{$ref:"#/definitions/nonNegativeInteger"},minLength:{$ref:"#/definitions/nonNegativeIntegerDefault0"},pattern:{type:"string",format:"regex"},additionalItems:{$ref:"#"},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:!0},maxItems:{$ref:"#/definitions/nonNegativeInteger"},minItems:{$ref:"#/definitions/nonNegativeIntegerDefault0"},uniqueItems:{type:"boolean",default:!1},contains:{$ref:"#"},maxProperties:{$ref:"#/definitions/nonNegativeInteger"},minProperties:{$ref:"#/definitions/nonNegativeIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{$ref:"#"},definitions:{type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#"},propertyNames:{format:"regex"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},propertyNames:{$ref:"#"},const:!0,enum:{type:"array",items:!0,minItems:1,uniqueItems:!0},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},format:{type:"string"},contentMediaType:{type:"string"},contentEncoding:{type:"string"},if:{$ref:"#"},then:{$ref:"#"},else:{$ref:"#"},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}},default:!0}});var ld=n1((S0,B7)=>{"use strict";Object.defineProperty(S0,"__esModule",{value:!0});S0.MissingRefError=S0.ValidationError=S0.CodeGen=S0.Name=S0.nil=S0.stringify=S0.str=S0._=S0.KeywordCxt=S0.Ajv=void 0;var Mx=eu(),xx=Zu(),Lx=td(),cd=rd(),wx=["/properties"],cc="http://json-schema.org/draft-07/schema",A8=class extends Mx.default{_addVocabularies(){super._addVocabularies(),xx.default.forEach(a=>this.addVocabulary(a)),this.opts.discriminator&&this.addKeyword(Lx.default)}_addDefaultMetaSchema(){if(super._addDefaultMetaSchema(),!this.opts.meta)return;let a=this.opts.$data?this.$dataMetaSchema(cd,wx):cd;this.addMetaSchema(a,cc,!1),this.refs["http://json-schema.org/schema"]=cc}defaultMeta(){return this.opts.defaultMeta=super.defaultMeta()||(this.getSchema(cc)?cc:void 0)}};S0.Ajv=A8;B7.exports=S0=A8;B7.exports.Ajv=A8;Object.defineProperty(S0,"__esModule",{value:!0});S0.default=A8;var Cx=rt();Object.defineProperty(S0,"KeywordCxt",{enumerable:!0,get:function(){return Cx.KeywordCxt}});var _8=v4();Object.defineProperty(S0,"_",{enumerable:!0,get:function(){return _8._}});Object.defineProperty(S0,"str",{enumerable:!0,get:function(){return _8.str}});Object.defineProperty(S0,"stringify",{enumerable:!0,get:function(){return _8.stringify}});Object.defineProperty(S0,"nil",{enumerable:!0,get:function(){return _8.nil}});Object.defineProperty(S0,"Name",{enumerable:!0,get:function(){return _8.Name}});Object.defineProperty(S0,"CodeGen",{enumerable:!0,get:function(){return _8.CodeGen}});var jx=qr();Object.defineProperty(S0,"ValidationError",{enumerable:!0,get:function(){return jx.default}});var Sx=ct();Object.defineProperty(S0,"MissingRefError",{enumerable:!0,get:function(){return Sx.default}})});var od=n1(lc=>{"use strict";(function(e){"use strict";function a(w){return w!==null?Object.prototype.toString.call(w)==="[object Array]":!1}function n(w){return w!==null?Object.prototype.toString.call(w)==="[object Object]":!1}function t(w,C){if(w===C)return!0;var _=Object.prototype.toString.call(w);if(_!==Object.prototype.toString.call(C))return!1;if(a(w)===!0){if(w.length!==C.length)return!1;for(var D=0;D<w.length;D++)if(t(w[D],C[D])===!1)return!1;return!0}if(n(w)===!0){var n2={};for(var C2 in w)if(hasOwnProperty.call(w,C2)){if(t(w[C2],C[C2])===!1)return!1;n2[C2]=!0}for(var A2 in C)if(hasOwnProperty.call(C,A2)&&n2[A2]!==!0)return!1;return!0}return!1}function c(w){if(w===""||w===!1||w===null)return!0;if(a(w)&&w.length===0)return!0;if(n(w)){for(var C in w)if(w.hasOwnProperty(C))return!1;return!0}else return!1}function l(w){for(var C=Object.keys(w),_=[],D=0;D<C.length;D++)_.push(w[C[D]]);return _}function o(w,C){var _={};for(var D in w)_[D]=w[D];for(var n2 in C)_[n2]=C[n2];return _}var s;typeof String.prototype.trimLeft=="function"?s=function(w){return w.trimLeft()}:s=function(w){return w.match(/^\s*(.*)/)[1]};var i=0,f=1,u=2,d=3,h=4,m=5,v=6,p=7,g=8,y=9,L={0:"number",1:"any",2:"string",3:"array",4:"object",5:"boolean",6:"expression",7:"null",8:"Array<number>",9:"Array<string>"},S="EOF",j="UnquotedIdentifier",x="QuotedIdentifier",E="Rbracket",P="Rparen",I="Comma",k="Colon",$="Rbrace",U="Number",O="Current",c2="Expref",u2="Pipe",l2="Or",S2="And",q2="EQ",f2="GT",o2="LT",d2="GTE",P2="LTE",Q2="NE",y2="Flatten",s2="Star",z2="Filter",o1="Dot",E1="Not",m2="Lbrace",G="Lbracket",b2="Lparen",H="Literal",v2={".":o1,"*":s2,",":I,":":k,"{":m2,"}":$,"]":E,"(":b2,")":P,"@":O},Q={"<":!0,">":!0,"=":!0,"!":!0},O2={" ":!0,"	":!0,"\n":!0};function t2(w){return w>="a"&&w<="z"||w>="A"&&w<="Z"||w==="_"}function W(w){return w>="0"&&w<="9"||w==="-"}function b1(w){return w>="a"&&w<="z"||w>="A"&&w<="Z"||w>="0"&&w<="9"||w==="_"}function i1(){}i1.prototype={tokenize:function(w){var C=[];this._current=0;for(var _,D,n2;this._current<w.length;)if(t2(w[this._current]))_=this._current,D=this._consumeUnquotedIdentifier(w),C.push({type:j,value:D,start:_});else if(v2[w[this._current]]!==void 0)C.push({type:v2[w[this._current]],value:w[this._current],start:this._current}),this._current++;else if(W(w[this._current]))n2=this._consumeNumber(w),C.push(n2);else if(w[this._current]==="[")n2=this._consumeLBracket(w),C.push(n2);else if(w[this._current]==='"')_=this._current,D=this._consumeQuotedIdentifier(w),C.push({type:x,value:D,start:_});else if(w[this._current]==="'")_=this._current,D=this._consumeRawStringLiteral(w),C.push({type:H,value:D,start:_});else if(w[this._current]==="`"){_=this._current;var C2=this._consumeLiteral(w);C.push({type:H,value:C2,start:_})}else if(Q[w[this._current]]!==void 0)C.push(this._consumeOperator(w));else if(O2[w[this._current]]!==void 0)this._current++;else if(w[this._current]==="&")_=this._current,this._current++,w[this._current]==="&"?(this._current++,C.push({type:S2,value:"&&",start:_})):C.push({type:c2,value:"&",start:_});else if(w[this._current]==="|")_=this._current,this._current++,w[this._current]==="|"?(this._current++,C.push({type:l2,value:"||",start:_})):C.push({type:u2,value:"|",start:_});else{var A2=new Error("Unknown character:"+w[this._current]);throw A2.name="LexerError",A2}return C},_consumeUnquotedIdentifier:function(w){var C=this._current;for(this._current++;this._current<w.length&&b1(w[this._current]);)this._current++;return w.slice(C,this._current)},_consumeQuotedIdentifier:function(w){var C=this._current;this._current++;for(var _=w.length;w[this._current]!=='"'&&this._current<_;){var D=this._current;w[D]==="\\"&&(w[D+1]==="\\"||w[D+1]==='"')?D+=2:D++,this._current=D}return this._current++,JSON.parse(w.slice(C,this._current))},_consumeRawStringLiteral:function(w){var C=this._current;this._current++;for(var _=w.length;w[this._current]!=="'"&&this._current<_;){var D=this._current;w[D]==="\\"&&(w[D+1]==="\\"||w[D+1]==="'")?D+=2:D++,this._current=D}this._current++;var n2=w.slice(C+1,this._current-1);return n2.replace("\\'","'")},_consumeNumber:function(w){var C=this._current;this._current++;for(var _=w.length;W(w[this._current])&&this._current<_;)this._current++;var D=parseInt(w.slice(C,this._current));return{type:U,value:D,start:C}},_consumeLBracket:function(w){var C=this._current;return this._current++,w[this._current]==="?"?(this._current++,{type:z2,value:"[?",start:C}):w[this._current]==="]"?(this._current++,{type:y2,value:"[]",start:C}):{type:G,value:"[",start:C}},_consumeOperator:function(w){var C=this._current,_=w[C];if(this._current++,_==="!")return w[this._current]==="="?(this._current++,{type:Q2,value:"!=",start:C}):{type:E1,value:"!",start:C};if(_==="<")return w[this._current]==="="?(this._current++,{type:P2,value:"<=",start:C}):{type:o2,value:"<",start:C};if(_===">")return w[this._current]==="="?(this._current++,{type:d2,value:">=",start:C}):{type:f2,value:">",start:C};if(_==="="&&w[this._current]==="=")return this._current++,{type:q2,value:"==",start:C}},_consumeLiteral:function(w){this._current++;for(var C=this._current,_=w.length,D;w[this._current]!=="`"&&this._current<_;){var n2=this._current;w[n2]==="\\"&&(w[n2+1]==="\\"||w[n2+1]==="`")?n2+=2:n2++,this._current=n2}var C2=s(w.slice(C,this._current));return C2=C2.replace("\\`","`"),this._looksLikeJSON(C2)?D=JSON.parse(C2):D=JSON.parse('"'+C2+'"'),this._current++,D},_looksLikeJSON:function(w){var C='[{"',_=["true","false","null"],D="-0123456789";if(w==="")return!1;if(C.indexOf(w[0])>=0)return!0;if(_.indexOf(w)>=0)return!0;if(D.indexOf(w[0])>=0)try{return JSON.parse(w),!0}catch{return!1}else return!1}};var j2={};j2[S]=0,j2[j]=0,j2[x]=0,j2[E]=0,j2[P]=0,j2[I]=0,j2[$]=0,j2[U]=0,j2[O]=0,j2[c2]=0,j2[u2]=1,j2[l2]=2,j2[S2]=3,j2[q2]=5,j2[f2]=5,j2[o2]=5,j2[d2]=5,j2[P2]=5,j2[Q2]=5,j2[y2]=9,j2[s2]=20,j2[z2]=21,j2[o1]=40,j2[E1]=45,j2[m2]=50,j2[G]=55,j2[b2]=60;function x1(){}x1.prototype={parse:function(w){this._loadTokens(w),this.index=0;var C=this.expression(0);if(this._lookahead(0)!==S){var _=this._lookaheadToken(0),D=new Error("Unexpected token type: "+_.type+", value: "+_.value);throw D.name="ParserError",D}return C},_loadTokens:function(w){var C=new i1,_=C.tokenize(w);_.push({type:S,value:"",start:w.length}),this.tokens=_},expression:function(w){var C=this._lookaheadToken(0);this._advance();for(var _=this.nud(C),D=this._lookahead(0);w<j2[D];)this._advance(),_=this.led(D,_),D=this._lookahead(0);return _},_lookahead:function(w){return this.tokens[this.index+w].type},_lookaheadToken:function(w){return this.tokens[this.index+w]},_advance:function(){this.index++},nud:function(w){var C,_,D;switch(w.type){case H:return{type:"Literal",value:w.value};case j:return{type:"Field",name:w.value};case x:var n2={type:"Field",name:w.value};if(this._lookahead(0)===b2)throw new Error("Quoted identifier not allowed for function names.");return n2;case E1:return _=this.expression(j2.Not),{type:"NotExpression",children:[_]};case s2:return C={type:"Identity"},_=null,this._lookahead(0)===E?_={type:"Identity"}:_=this._parseProjectionRHS(j2.Star),{type:"ValueProjection",children:[C,_]};case z2:return this.led(w.type,{type:"Identity"});case m2:return this._parseMultiselectHash();case y2:return C={type:y2,children:[{type:"Identity"}]},_=this._parseProjectionRHS(j2.Flatten),{type:"Projection",children:[C,_]};case G:return this._lookahead(0)===U||this._lookahead(0)===k?(_=this._parseIndexExpression(),this._projectIfSlice({type:"Identity"},_)):this._lookahead(0)===s2&&this._lookahead(1)===E?(this._advance(),this._advance(),_=this._parseProjectionRHS(j2.Star),{type:"Projection",children:[{type:"Identity"},_]}):this._parseMultiselectList();case O:return{type:O};case c2:return D=this.expression(j2.Expref),{type:"ExpressionReference",children:[D]};case b2:for(var C2=[];this._lookahead(0)!==P;)this._lookahead(0)===O?(D={type:O},this._advance()):D=this.expression(0),C2.push(D);return this._match(P),C2[0];default:this._errorToken(w)}},led:function(w,C){var _;switch(w){case o1:var D=j2.Dot;return this._lookahead(0)!==s2?(_=this._parseDotRHS(D),{type:"Subexpression",children:[C,_]}):(this._advance(),_=this._parseProjectionRHS(D),{type:"ValueProjection",children:[C,_]});case u2:return _=this.expression(j2.Pipe),{type:u2,children:[C,_]};case l2:return _=this.expression(j2.Or),{type:"OrExpression",children:[C,_]};case S2:return _=this.expression(j2.And),{type:"AndExpression",children:[C,_]};case b2:for(var n2=C.name,C2=[],A2,e2;this._lookahead(0)!==P;)this._lookahead(0)===O?(A2={type:O},this._advance()):A2=this.expression(0),this._lookahead(0)===I&&this._match(I),C2.push(A2);return this._match(P),e2={type:"Function",name:n2,children:C2},e2;case z2:var r2=this.expression(0);return this._match(E),this._lookahead(0)===y2?_={type:"Identity"}:_=this._parseProjectionRHS(j2.Filter),{type:"FilterProjection",children:[C,_,r2]};case y2:var s1={type:y2,children:[C]},e1=this._parseProjectionRHS(j2.Flatten);return{type:"Projection",children:[s1,e1]};case q2:case Q2:case f2:case d2:case o2:case P2:return this._parseComparator(C,w);case G:var U2=this._lookaheadToken(0);return U2.type===U||U2.type===k?(_=this._parseIndexExpression(),this._projectIfSlice(C,_)):(this._match(s2),this._match(E),_=this._parseProjectionRHS(j2.Star),{type:"Projection",children:[C,_]});default:this._errorToken(this._lookaheadToken(0))}},_match:function(w){if(this._lookahead(0)===w)this._advance();else{var C=this._lookaheadToken(0),_=new Error("Expected "+w+", got: "+C.type);throw _.name="ParserError",_}},_errorToken:function(w){var C=new Error("Invalid token ("+w.type+'): "'+w.value+'"');throw C.name="ParserError",C},_parseIndexExpression:function(){if(this._lookahead(0)===k||this._lookahead(1)===k)return this._parseSliceExpression();var w={type:"Index",value:this._lookaheadToken(0).value};return this._advance(),this._match(E),w},_projectIfSlice:function(w,C){var _={type:"IndexExpression",children:[w,C]};return C.type==="Slice"?{type:"Projection",children:[_,this._parseProjectionRHS(j2.Star)]}:_},_parseSliceExpression:function(){for(var w=[null,null,null],C=0,_=this._lookahead(0);_!==E&&C<3;){if(_===k)C++,this._advance();else if(_===U)w[C]=this._lookaheadToken(0).value,this._advance();else{var D=this._lookahead(0),n2=new Error("Syntax error, unexpected token: "+D.value+"("+D.type+")");throw n2.name="Parsererror",n2}_=this._lookahead(0)}return this._match(E),{type:"Slice",children:w}},_parseComparator:function(w,C){var _=this.expression(j2[C]);return{type:"Comparator",name:C,children:[w,_]}},_parseDotRHS:function(w){var C=this._lookahead(0),_=[j,x,s2];if(_.indexOf(C)>=0)return this.expression(w);if(C===G)return this._match(G),this._parseMultiselectList();if(C===m2)return this._match(m2),this._parseMultiselectHash()},_parseProjectionRHS:function(w){var C;if(j2[this._lookahead(0)]<10)C={type:"Identity"};else if(this._lookahead(0)===G)C=this.expression(w);else if(this._lookahead(0)===z2)C=this.expression(w);else if(this._lookahead(0)===o1)this._match(o1),C=this._parseDotRHS(w);else{var _=this._lookaheadToken(0),D=new Error("Sytanx error, unexpected token: "+_.value+"("+_.type+")");throw D.name="ParserError",D}return C},_parseMultiselectList:function(){for(var w=[];this._lookahead(0)!==E;){var C=this.expression(0);if(w.push(C),this._lookahead(0)===I&&(this._match(I),this._lookahead(0)===E))throw new Error("Unexpected token Rbracket")}return this._match(E),{type:"MultiSelectList",children:w}},_parseMultiselectHash:function(){for(var w=[],C=[j,x],_,D,n2,C2;;){if(_=this._lookaheadToken(0),C.indexOf(_.type)<0)throw new Error("Expecting an identifier token, got: "+_.type);if(D=_.value,this._advance(),this._match(k),n2=this.expression(0),C2={type:"KeyValuePair",name:D,value:n2},w.push(C2),this._lookahead(0)===I)this._match(I);else if(this._lookahead(0)===$){this._match($);break}}return{type:"MultiSelectHash",children:w}}};function I2(w){this.runtime=w}I2.prototype={search:function(w,C){return this.visit(w,C)},visit:function(w,C){var _,D,n2,C2,A2,e2,r2,s1,e1,U2;switch(w.type){case"Field":return C!==null&&n(C)?(e2=C[w.name],e2===void 0?null:e2):null;case"Subexpression":for(n2=this.visit(w.children[0],C),U2=1;U2<w.children.length;U2++)if(n2=this.visit(w.children[1],n2),n2===null)return null;return n2;case"IndexExpression":return r2=this.visit(w.children[0],C),s1=this.visit(w.children[1],r2),s1;case"Index":if(!a(C))return null;var J2=w.value;return J2<0&&(J2=C.length+J2),n2=C[J2],n2===void 0&&(n2=null),n2;case"Slice":if(!a(C))return null;var q1=w.children.slice(0),S4=this.computeSliceParams(C.length,q1),E4=S4[0],$1=S4[1],g4=S4[2];if(n2=[],g4>0)for(U2=E4;U2<$1;U2+=g4)n2.push(C[U2]);else for(U2=E4;U2>$1;U2+=g4)n2.push(C[U2]);return n2;case"Projection":var V1=this.visit(w.children[0],C);if(!a(V1))return null;for(e1=[],U2=0;U2<V1.length;U2++)D=this.visit(w.children[1],V1[U2]),D!==null&&e1.push(D);return e1;case"ValueProjection":if(V1=this.visit(w.children[0],C),!n(V1))return null;e1=[];var Q1=l(V1);for(U2=0;U2<Q1.length;U2++)D=this.visit(w.children[1],Q1[U2]),D!==null&&e1.push(D);return e1;case"FilterProjection":if(V1=this.visit(w.children[0],C),!a(V1))return null;var p4=[],p1=[];for(U2=0;U2<V1.length;U2++)_=this.visit(w.children[2],V1[U2]),c(_)||p4.push(V1[U2]);for(var z4=0;z4<p4.length;z4++)D=this.visit(w.children[1],p4[z4]),D!==null&&p1.push(D);return p1;case"Comparator":switch(C2=this.visit(w.children[0],C),A2=this.visit(w.children[1],C),w.name){case q2:n2=t(C2,A2);break;case Q2:n2=!t(C2,A2);break;case f2:n2=C2>A2;break;case d2:n2=C2>=A2;break;case o2:n2=C2<A2;break;case P2:n2=C2<=A2;break;default:throw new Error("Unknown comparator: "+w.name)}return n2;case y2:var S1=this.visit(w.children[0],C);if(!a(S1))return null;var X2=[];for(U2=0;U2<S1.length;U2++)D=S1[U2],a(D)?X2.push.apply(X2,D):X2.push(D);return X2;case"Identity":return C;case"MultiSelectList":if(C===null)return null;for(e1=[],U2=0;U2<w.children.length;U2++)e1.push(this.visit(w.children[U2],C));return e1;case"MultiSelectHash":if(C===null)return null;e1={};var X1;for(U2=0;U2<w.children.length;U2++)X1=w.children[U2],e1[X1.name]=this.visit(X1.value,C);return e1;case"OrExpression":return _=this.visit(w.children[0],C),c(_)&&(_=this.visit(w.children[1],C)),_;case"AndExpression":return C2=this.visit(w.children[0],C),c(C2)===!0?C2:this.visit(w.children[1],C);case"NotExpression":return C2=this.visit(w.children[0],C),c(C2);case"Literal":return w.value;case u2:return r2=this.visit(w.children[0],C),this.visit(w.children[1],r2);case O:return C;case"Function":var D1=[];for(U2=0;U2<w.children.length;U2++)D1.push(this.visit(w.children[U2],C));return this.runtime.callFunction(w.name,D1);case"ExpressionReference":var W4=w.children[0];return W4.jmespathType=c2,W4;default:throw new Error("Unknown node type: "+w.type)}},computeSliceParams:function(w,C){var _=C[0],D=C[1],n2=C[2],C2=[null,null,null];if(n2===null)n2=1;else if(n2===0){var A2=new Error("Invalid slice, step cannot be 0");throw A2.name="RuntimeError",A2}var e2=n2<0;return _===null?_=e2?w-1:0:_=this.capSliceRange(w,_,n2),D===null?D=e2?-1:w:D=this.capSliceRange(w,D,n2),C2[0]=_,C2[1]=D,C2[2]=n2,C2},capSliceRange:function(w,C,_){return C<0?(C+=w,C<0&&(C=_<0?-1:0)):C>=w&&(C=_<0?w-1:w),C}};function V2(w){this._interpreter=w,this.functionTable={abs:{_func:this._functionAbs,_signature:[{types:[i]}]},avg:{_func:this._functionAvg,_signature:[{types:[g]}]},ceil:{_func:this._functionCeil,_signature:[{types:[i]}]},contains:{_func:this._functionContains,_signature:[{types:[u,d]},{types:[f]}]},ends_with:{_func:this._functionEndsWith,_signature:[{types:[u]},{types:[u]}]},floor:{_func:this._functionFloor,_signature:[{types:[i]}]},length:{_func:this._functionLength,_signature:[{types:[u,d,h]}]},map:{_func:this._functionMap,_signature:[{types:[v]},{types:[d]}]},max:{_func:this._functionMax,_signature:[{types:[g,y]}]},merge:{_func:this._functionMerge,_signature:[{types:[h],variadic:!0}]},max_by:{_func:this._functionMaxBy,_signature:[{types:[d]},{types:[v]}]},sum:{_func:this._functionSum,_signature:[{types:[g]}]},starts_with:{_func:this._functionStartsWith,_signature:[{types:[u]},{types:[u]}]},min:{_func:this._functionMin,_signature:[{types:[g,y]}]},min_by:{_func:this._functionMinBy,_signature:[{types:[d]},{types:[v]}]},type:{_func:this._functionType,_signature:[{types:[f]}]},keys:{_func:this._functionKeys,_signature:[{types:[h]}]},values:{_func:this._functionValues,_signature:[{types:[h]}]},sort:{_func:this._functionSort,_signature:[{types:[y,g]}]},sort_by:{_func:this._functionSortBy,_signature:[{types:[d]},{types:[v]}]},join:{_func:this._functionJoin,_signature:[{types:[u]},{types:[y]}]},reverse:{_func:this._functionReverse,_signature:[{types:[u,d]}]},to_array:{_func:this._functionToArray,_signature:[{types:[f]}]},to_string:{_func:this._functionToString,_signature:[{types:[f]}]},to_number:{_func:this._functionToNumber,_signature:[{types:[f]}]},not_null:{_func:this._functionNotNull,_signature:[{types:[f],variadic:!0}]}}}V2.prototype={callFunction:function(w,C){var _=this.functionTable[w];if(_===void 0)throw new Error("Unknown function: "+w+"()");return this._validateArgs(w,C,_._signature),_._func.call(this,C)},_validateArgs:function(w,C,_){var D;if(_[_.length-1].variadic){if(C.length<_.length)throw D=_.length===1?" argument":" arguments",new Error("ArgumentError: "+w+"() takes at least"+_.length+D+" but received "+C.length)}else if(C.length!==_.length)throw D=_.length===1?" argument":" arguments",new Error("ArgumentError: "+w+"() takes "+_.length+D+" but received "+C.length);for(var n2,C2,A2,e2=0;e2<_.length;e2++){A2=!1,n2=_[e2].types,C2=this._getTypeName(C[e2]);for(var r2=0;r2<n2.length;r2++)if(this._typeMatches(C2,n2[r2],C[e2])){A2=!0;break}if(!A2){var s1=n2.map(function(e1){return L[e1]}).join(",");throw new Error("TypeError: "+w+"() expected argument "+(e2+1)+" to be type "+s1+" but received type "+L[C2]+" instead.")}}},_typeMatches:function(w,C,_){if(C===f)return!0;if(C===y||C===g||C===d){if(C===d)return w===d;if(w===d){var D;C===g?D=i:C===y&&(D=u);for(var n2=0;n2<_.length;n2++)if(!this._typeMatches(this._getTypeName(_[n2]),D,_[n2]))return!1;return!0}}else return w===C},_getTypeName:function(w){switch(Object.prototype.toString.call(w)){case"[object String]":return u;case"[object Number]":return i;case"[object Array]":return d;case"[object Boolean]":return m;case"[object Null]":return p;case"[object Object]":return w.jmespathType===c2?v:h}},_functionStartsWith:function(w){return w[0].lastIndexOf(w[1])===0},_functionEndsWith:function(w){var C=w[0],_=w[1];return C.indexOf(_,C.length-_.length)!==-1},_functionReverse:function(w){var C=this._getTypeName(w[0]);if(C===u){for(var _=w[0],D="",n2=_.length-1;n2>=0;n2--)D+=_[n2];return D}else{var C2=w[0].slice(0);return C2.reverse(),C2}},_functionAbs:function(w){return Math.abs(w[0])},_functionCeil:function(w){return Math.ceil(w[0])},_functionAvg:function(w){for(var C=0,_=w[0],D=0;D<_.length;D++)C+=_[D];return C/_.length},_functionContains:function(w){return w[0].indexOf(w[1])>=0},_functionFloor:function(w){return Math.floor(w[0])},_functionLength:function(w){return n(w[0])?Object.keys(w[0]).length:w[0].length},_functionMap:function(w){for(var C=[],_=this._interpreter,D=w[0],n2=w[1],C2=0;C2<n2.length;C2++)C.push(_.visit(D,n2[C2]));return C},_functionMerge:function(w){for(var C={},_=0;_<w.length;_++){var D=w[_];for(var n2 in D)C[n2]=D[n2]}return C},_functionMax:function(w){if(w[0].length>0){var C=this._getTypeName(w[0][0]);if(C===i)return Math.max.apply(Math,w[0]);for(var _=w[0],D=_[0],n2=1;n2<_.length;n2++)D.localeCompare(_[n2])<0&&(D=_[n2]);return D}else return null},_functionMin:function(w){if(w[0].length>0){var C=this._getTypeName(w[0][0]);if(C===i)return Math.min.apply(Math,w[0]);for(var _=w[0],D=_[0],n2=1;n2<_.length;n2++)_[n2].localeCompare(D)<0&&(D=_[n2]);return D}else return null},_functionSum:function(w){for(var C=0,_=w[0],D=0;D<_.length;D++)C+=_[D];return C},_functionType:function(w){switch(this._getTypeName(w[0])){case i:return"number";case u:return"string";case d:return"array";case h:return"object";case m:return"boolean";case v:return"expref";case p:return"null"}},_functionKeys:function(w){return Object.keys(w[0])},_functionValues:function(w){for(var C=w[0],_=Object.keys(C),D=[],n2=0;n2<_.length;n2++)D.push(C[_[n2]]);return D},_functionJoin:function(w){var C=w[0],_=w[1];return _.join(C)},_functionToArray:function(w){return this._getTypeName(w[0])===d?w[0]:[w[0]]},_functionToString:function(w){return this._getTypeName(w[0])===u?w[0]:JSON.stringify(w[0])},_functionToNumber:function(w){var C=this._getTypeName(w[0]),_;return C===i?w[0]:C===u&&(_=+w[0],!isNaN(_))?_:null},_functionNotNull:function(w){for(var C=0;C<w.length;C++)if(this._getTypeName(w[C])!==p)return w[C];return null},_functionSort:function(w){var C=w[0].slice(0);return C.sort(),C},_functionSortBy:function(w){var C=w[0].slice(0);if(C.length===0)return C;var _=this._interpreter,D=w[1],n2=this._getTypeName(_.visit(D,C[0]));if([i,u].indexOf(n2)<0)throw new Error("TypeError");for(var C2=this,A2=[],e2=0;e2<C.length;e2++)A2.push([e2,C[e2]]);A2.sort(function(s1,e1){var U2=_.visit(D,s1[1]),J2=_.visit(D,e1[1]);if(C2._getTypeName(U2)!==n2)throw new Error("TypeError: expected "+n2+", received "+C2._getTypeName(U2));if(C2._getTypeName(J2)!==n2)throw new Error("TypeError: expected "+n2+", received "+C2._getTypeName(J2));return U2>J2?1:U2<J2?-1:s1[0]-e1[0]});for(var r2=0;r2<A2.length;r2++)C[r2]=A2[r2][1];return C},_functionMaxBy:function(w){for(var C=w[1],_=w[0],D=this.createKeyFunction(C,[i,u]),n2=-1/0,C2,A2,e2=0;e2<_.length;e2++)A2=D(_[e2]),A2>n2&&(n2=A2,C2=_[e2]);return C2},_functionMinBy:function(w){for(var C=w[1],_=w[0],D=this.createKeyFunction(C,[i,u]),n2=1/0,C2,A2,e2=0;e2<_.length;e2++)A2=D(_[e2]),A2<n2&&(n2=A2,C2=_[e2]);return C2},createKeyFunction:function(w,C){var _=this,D=this._interpreter,n2=function(C2){var A2=D.visit(w,C2);if(C.indexOf(_._getTypeName(A2))<0){var e2="TypeError: expected one of "+C+", received "+_._getTypeName(A2);throw new Error(e2)}return A2};return n2}};function m1(w){var C=new x1,_=C.parse(w);return _}function F2(w){var C=new i1;return C.tokenize(w)}function O1(w,C){var _=new x1,D=new V2,n2=new I2(D);D._interpreter=n2;var C2=_.parse(C);return n2.search(C2,w)}e.tokenize=F2,e.compile=m1,e.search=O1,e.strictDeepEqual=t})(typeof lc>"u"?lc.jmespath={}:lc)});function p0(e){return Array.isArray(e)}function y0(e){return e!==null&&typeof e=="object"&&(e.constructor===void 0||e.constructor.name==="Object")}function S5(e){return e&&typeof e=="object"?e.op==="add":!1}function k5(e){return e&&typeof e=="object"?e.op==="remove":!1}function dr(e){return e&&typeof e=="object"?e.op==="replace":!1}function pr(e){return e&&typeof e=="object"?e.op==="copy":!1}function O6(e){return e&&typeof e=="object"?e.op==="move":!1}function Ti(e,a){return JSON.stringify(e)===JSON.stringify(a)}function Zm(e,a){return e===a}function N5(e){return e.slice(0,e.length-1)}function Oi(e){return e[e.length-1]}function Ri(e,a){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Zm;if(e.length<a.length)return!1;for(let t=0;t<a.length;t++)if(!n(e[t],a[t]))return!1;return!0}function A5(e){return typeof e=="object"&&e!==null}function _5(e){if(p0(e)){let a=e.slice();return Object.getOwnPropertySymbols(e).forEach(n=>{a[n]=e[n]}),a}if(y0(e)){let a=O4({},e);return Object.getOwnPropertySymbols(e).forEach(n=>{a[n]=e[n]}),a}return e}function E5(e,a,n){if(e[a]===n)return e;let t=_5(e);return t[a]=n,t}function W2(e,a){let n=e,t=0;for(;t<a.length;)y0(n)?n=n[a[t]]:p0(n)?n=n[Number.parseInt(a[t])]:n=void 0,t++;return n}function m3(e,a,n){let t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(a.length===0)return n;let c=a[0],l=m3(e?e[c]:void 0,a.slice(1),n,t);if(y0(e)||p0(e))return E5(e,c,l);if(t){let o=eh.test(c)?[]:{};return o[c]=l,o}throw new Error("Path does not exist")}var eh=/^\d+$/;function Tn(e,a,n){if(a.length===0)return n(e);if(!A5(e))throw new Error("Path doesn't exist");let t=a[0],c=Tn(e[t],a.slice(1),n);return E5(e,t,c)}function Ca(e,a){if(a.length===0)return e;if(!A5(e))throw new Error("Path does not exist");if(a.length===1){let c=a[0];if(!(c in e))return e;let l=_5(e);return p0(l)&&l.splice(Number.parseInt(c),1),y0(l)&&delete l[c],l}let n=a[0],t=Ca(e[n],a.slice(1));return E5(e,n,t)}function On(e,a,n){let t=a.slice(0,a.length-1),c=a[a.length-1];return Tn(e,t,l=>{if(!Array.isArray(l))throw new TypeError(`Array expected at path ${JSON.stringify(t)}`);let o=_5(l);return o.splice(Number.parseInt(c),0,n),o})}function d3(e,a){return e===void 0?!1:a.length===0?!0:e===null?!1:d3(e[a[0]],a.slice(1))}function w3(e){let a=e.split("/");return a.shift(),a.map(n=>n.replace(/~1/g,"/").replace(/~0/g,"~"))}function c1(e){return e.map(qi).join("")}function qi(e){return`/${String(e).replace(/~/g,"~0").replace(/\//g,"~1")}`}function Rn(e,a){return e+qi(a)}function O3(e,a,n){let t=e;for(let c=0;c<a.length;c++){sh(a[c]);let l=a[c];if(n?.before){let i=n.before(t,l);if(i!==void 0){if(i.document!==void 0&&(t=i.document),i.json!==void 0)throw new Error('Deprecation warning: returned object property ".json" has been renamed to ".document"');i.operation!==void 0&&(l=i.operation)}}let o=t,s=_3(t,l.path);if(l.op==="add")t=th(t,s,l.value);else if(l.op==="remove")t=nh(t,s);else if(l.op==="replace")t=ah(t,s,l.value);else if(l.op==="copy")t=rh(t,s,qn(l.from));else if(l.op==="move")t=ch(t,s,qn(l.from));else if(l.op==="test")lh(t,s,l.value);else throw new Error(`Unknown JSONPatch operation ${JSON.stringify(l)}`);if(n?.after){let i=n.after(t,l,o);i!==void 0&&(t=i)}}return t}function ah(e,a,n){return d3(e,a)?m3(e,a,n):e}function nh(e,a){return Ca(e,a)}function th(e,a,n){return m8(e,a)?On(e,a,n):m3(e,a,n)}function rh(e,a,n){let t=W2(e,n);return m8(e,a)?On(e,a,t):m3(e,a,t)}function ch(e,a,n){let t=W2(e,n),c=Ca(e,n);return m8(c,a)?On(c,a,t):m3(c,a,t)}function lh(e,a,n){if(n===void 0)throw new Error(`Test failed: no value provided (path: "${c1(a)}")`);if(!d3(e,a))throw new Error(`Test failed: path not found (path: "${c1(a)}")`);let t=W2(e,a);if(!Ti(t,n))throw new Error(`Test failed, value differs (path: "${c1(a)}")`)}function m8(e,a){if(a.length===0)return!1;let n=W2(e,N5(a));return Array.isArray(n)}function oh(e,a){if(Oi(a)!=="-")return a;let n=N5(a),t=W2(e,n);return n.concat(t.length)}function sh(e){if(!["add","remove","replace","copy","move","test"].includes(e.op))throw new Error(`Unknown JSONPatch op ${JSON.stringify(e.op)}`);if(typeof e.path!="string")throw new Error(`Required property "path" missing or not a string in operation ${JSON.stringify(e)}`);if((e.op==="copy"||e.op==="move")&&typeof e.from!="string")throw new Error(`Required property "from" missing or not a string in operation ${JSON.stringify(e)}`)}function _3(e,a){return oh(e,w3(a))}function qn(e){return w3(e)}function vr(e,a,n){let t=[];return O3(e,a,{before:(l,o)=>{let s,i=_3(l,o.path);if(o.op==="add")s=Fi(l,i);else if(o.op==="remove")s=Di(l,i);else if(o.op==="replace")s=$i(l,i);else if(o.op==="copy")s=ih(l,i);else if(o.op==="move")s=fh(l,i,qn(o.from));else if(o.op==="test")s=[];else throw new Error(`Unknown JSONPatch operation ${JSON.stringify(o)}`);let f;if(n?.before){let u=n.before(l,o,s);if(u?.revertOperations&&(s=u.revertOperations),u?.document&&(f=u.document),u?.json)throw new Error('Deprecation warning: returned object property ".json" has been renamed to ".document"')}if(t=s.concat(t),f!==void 0)return{document:f}}}),t}function $i(e,a){return d3(e,a)?[{op:"replace",path:c1(a),value:W2(e,a)}]:[]}function Di(e,a){return[{op:"add",path:c1(a),value:W2(e,a)}]}function Fi(e,a){return m8(e,a)||!d3(e,a)?[{op:"remove",path:c1(a)}]:$i(e,a)}function ih(e,a){return Fi(e,a)}function fh(e,a,n){if(a.length<n.length&&Ri(n,a))return[{op:"replace",path:c1(a),value:e}];let t={op:"move",from:c1(a),path:c1(n)};return!m8(e,a)&&d3(e,a)?[t,...Di(e,a)]:[t]}var cs=lr(Ii(),1);var r6=class extends Error{constructor(a,n){super(`${a} at position ${n}`),this.position=n}};function Ui(e){return/^[0-9A-Fa-f]$/.test(e)}function q6(e){return e>="0"&&e<="9"}function Hi(e){return e>=" "}function $n(e){return`,:[]/{}()
+`.includes(e)}function O5(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="_"||e==="$"}function R5(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="_"||e==="$"||e>="0"&&e<="9"}var q5=/^(http|https|ftp|mailto|file|data|irc):\/\/$/,$5=/^[A-Za-z0-9-._~:/?#@!$&'()*+;=]$/;function D5(e){return`,[]/{}
+`.includes(e)}function F5(e){return Dn(e)||Mh.test(e)}var Mh=/^[[{\w-]$/;function Wi(e){return e===`
`||e==="\r"||e==="	"||e==="\b"||e==="\f"}function R6(e,a){let n=e.charCodeAt(a);return n===32||n===10||n===9||n===13}function Vi(e,a){let n=e.charCodeAt(a);return n===32||n===9||n===13}function Ji(e,a){let n=e.charCodeAt(a);return n===160||n>=8192&&n<=8202||n===8239||n===8287||n===12288}function Dn(e){return B5(e)||gr(e)}function B5(e){return e==='"'||e==="\u201C"||e==="\u201D"}function I5(e){return e==='"'}function gr(e){return e==="'"||e==="\u2018"||e==="\u2019"||e==="`"||e==="\xB4"}function U5(e){return e==="'"}function h8(e,a){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,t=e.lastIndexOf(a);return t!==-1?e.substring(0,t)+(n?"":e.substring(t+1)):e}function te(e,a){let n=e.length;if(!R6(e,n-1))return e+a;for(;R6(e,n-1);)n--;return e.substring(0,n)+a+e.substring(n)}function Gi(e,a,n){return e.substring(0,a)+e.substring(a+n)}function Ki(e){return/[,\n][ \t\r]*$/.test(e)}var xh={"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},Lh={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"};function re(e){let a=0,n="";f(["```","[```","{```"]),l()||u2(),f(["```","```]","```}"]);let c=d(",");for(c&&o(),F5(e[a])&&Ki(n)?(c||(n=te(n,",")),y()):c&&(n=h8(n,","));e[a]==="}"||e[a]==="]";)a++,o();if(a>=e.length)return n;c2();function l(){o();let f2=p()||g()||L()||j()||x()||P(!1)||I();return o(),f2}function o(){let f2=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,o2=a,d2=s(f2);do d2=i(),d2&&(d2=s(f2));while(d2);return a>o2}function s(f2){let o2=f2?R6:Vi,d2="";for(;;)if(o2(e,a))d2+=e[a],a++;else if(Ji(e,a))d2+=" ",a++;else break;return d2.length>0?(n+=d2,!0):!1}function i(){if(e[a]==="/"&&e[a+1]==="*"){for(;a<e.length&&!wh(e,a);)a++;return a+=2,!0}if(e[a]==="/"&&e[a+1]==="/"){for(;a<e.length&&e[a]!==`
`;)a++;return!0}return!1}function f(f2){if(u(f2)){if(O5(e[a]))for(;a<e.length&&R5(e[a]);)a++;return o(),!0}return!1}function u(f2){s(!0);for(let o2 of f2){let d2=a+o2.length;if(e.slice(a,d2)===o2)return a=d2,!0}return!1}function d(f2){return e[a]===f2?(n+=e[a],a++,!0):!1}function h(f2){return e[a]===f2?(a++,!0):!1}function m(){return h("\\")}function v(){return o(),e[a]==="."&&e[a+1]==="."&&e[a+2]==="."?(a+=3,o(),h(","),!0):!1}function p(){if(e[a]==="{"){n+="{",a++,o(),h(",")&&o();let f2=!0;for(;a<e.length&&e[a]!=="}";){let o2;if(f2?(o2=!0,f2=!1):(o2=d(","),o2||(n=te(n,",")),o()),v(),!(L()||P(!0))){e[a]==="}"||e[a]==="{"||e[a]==="]"||e[a]==="["||e[a]===void 0?n=h8(n,","):l2();break}o();let P2=d(":"),Q2=a>=e.length;P2||(F5(e[a])||Q2?n=te(n,":"):S2()),l()||(P2||Q2?n+="null":S2())}return e[a]==="}"?(n+="}",a++):n=te(n,"}"),!0}return!1}function g(){if(e[a]==="["){n+="[",a++,o(),h(",")&&o();let f2=!0;for(;a<e.length&&e[a]!=="]";)if(f2?f2=!1:d(",")||(n=te(n,",")),v(),!l()){n=h8(n,",");break}return e[a]==="]"?(n+="]",a++):n=te(n,"]"),!0}return!1}function y(){let f2=!0,o2=!0;for(;o2;)f2?f2=!1:d(",")||(n=te(n,",")),o2=l();o2||(n=h8(n,",")),n=`[
${n}
]`}function L(){let f2=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,o2=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1,d2=e[a]==="\\";if(d2&&(a++,d2=!0),Dn(e[a])){let P2=I5(e[a])?I5:U5(e[a])?U5:gr(e[a])?gr:B5,Q2=a,y2=n.length,s2='"';for(a++;;){if(a>=e.length){let z2=k(a-1);return!f2&&$n(e.charAt(z2))?(a=Q2,n=n.substring(0,y2),L(!0)):(s2=te(s2,'"'),n+=s2,!0)}if(a===o2)return s2=te(s2,'"'),n+=s2,!0;if(P2(e[a])){let z2=a,o1=s2.length;if(s2+='"',a++,n+=s2,o(!1),f2||a>=e.length||$n(e[a])||Dn(e[a])||q6(e[a]))return S(),!0;let E1=k(z2-1),m2=e.charAt(E1);if(m2===",")return a=Q2,n=n.substring(0,y2),L(!1,E1);if($n(m2))return a=Q2,n=n.substring(0,y2),L(!0);n=n.substring(0,y2),a=z2+1,s2=`${s2.substring(0,o1)}\\${s2.substring(o1)}`}else if(f2&&D5(e[a])){if(e[a-1]===":"&&q5.test(e.substring(Q2+1,a+2)))for(;a<e.length&&$5.test(e[a]);)s2+=e[a],a++;return s2=te(s2,'"'),n+=s2,S(),!0}else if(e[a]==="\\"){let z2=e.charAt(a+1);if(Lh[z2]!==void 0)s2+=e.slice(a,a+2),a+=2;else if(z2==="u"){let E1=2;for(;E1<6&&Ui(e[a+E1]);)E1++;E1===6?(s2+=e.slice(a,a+6),a+=6):a+E1>=e.length?a=e.length:q2()}else s2+=z2,a+=2}else{let z2=e.charAt(a);z2==='"'&&e[a-1]!=="\\"?(s2+=`\\${z2}`,a++):Wi(z2)?(s2+=xh[z2],a++):(Hi(z2)||O(z2),s2+=z2,a++)}d2&&m()}}return!1}function S(){let f2=!1;for(o();e[a]==="+";){f2=!0,a++,o(),n=h8(n,'"',!0);let o2=n.length;L()?n=Gi(n,o2,1):n=te(n,'"')}return f2}function j(){let f2=a;if(e[a]==="-"){if(a++,$())return U(f2),!0;if(!q6(e[a]))return a=f2,!1}for(;q6(e[a]);)a++;if(e[a]==="."){if(a++,$())return U(f2),!0;if(!q6(e[a]))return a=f2,!1;for(;q6(e[a]);)a++}if(e[a]==="e"||e[a]==="E"){if(a++,(e[a]==="-"||e[a]==="+")&&a++,$())return U(f2),!0;if(!q6(e[a]))return a=f2,!1;for(;q6(e[a]);)a++}if(!$())return a=f2,!1;if(a>f2){let o2=e.slice(f2,a),d2=/^0\d/.test(o2);return n+=d2?`"${o2}"`:o2,!0}return!1}function x(){return E("true","true")||E("false","false")||E("null","null")||E("True","true")||E("False","false")||E("None","null")}function E(f2,o2){return e.slice(a,a+f2.length)===f2?(n+=o2,a+=f2.length,!0):!1}function P(f2){let o2=a;if(O5(e[a])){for(;a<e.length&&R5(e[a]);)a++;let d2=a;for(;R6(e,d2);)d2++;if(e[d2]==="(")return a=d2+1,l(),e[a]===")"&&(a++,e[a]===";"&&a++),!0}for(;a<e.length&&!D5(e[a])&&!Dn(e[a])&&(!f2||e[a]!==":");)a++;if(e[a-1]===":"&&q5.test(e.substring(o2,a+2)))for(;a<e.length&&$5.test(e[a]);)a++;if(a>o2){for(;R6(e,a-1)&&a>0;)a--;let d2=e.slice(o2,a);return n+=d2==="undefined"?"null":JSON.stringify(d2),e[a]==='"'&&a++,!0}}function I(){if(e[a]==="/"){let f2=a;for(a++;a<e.length&&(e[a]!=="/"||e[a-1]==="\\");)a++;return a++,n+=JSON.stringify(e.substring(f2,a)),!0}}function k(f2){let o2=f2;for(;o2>0&&R6(e,o2);)o2--;return o2}function $(){return a>=e.length||$n(e[a])||R6(e,a)}function U(f2){n+=`${e.slice(f2,a)}0`}function O(f2){throw new r6(`Invalid character ${JSON.stringify(f2)}`,a)}function c2(){throw new r6(`Unexpected character ${JSON.stringify(e[a])}`,a)}function u2(){throw new r6("Unexpected end of json string",e.length)}function l2(){throw new r6("Object key expected",a)}function S2(){throw new r6("Colon expected",a)}function q2(){let f2=e.slice(a,a+6);throw new r6(`Invalid unicode character "${f2}"`,a)}}function wh(e,a){return e[a]==="*"&&e[a+1]==="/"}var $6=e=>Array.isArray(e),Ch=e=>e!==null&&typeof e=="object"&&!$6(e),jh=e=>typeof e=="string",ja=(e,a)=>e===a?!0:e!==null&&a!==null&&typeof e=="object"&&typeof a=="object"&&Object.keys(e).length===Object.keys(a).length&&Object.entries(e).every(([n,t])=>ja(t,a[n])),Qi=(e,a)=>{let n=e?.[a];if(n!==void 0){if(!Object.hasOwn(e,a)||Array.isArray(e)&&!/^\d+$/.test(a)||typeof e!="object")throw new TypeError(`Unsupported property "${a}"`);return n}};function K0(e){return(...a)=>{let n=a.map(l=>Q0(l)),t=n[0],c=n[1];return n.length===1?l=>e(t(l)):n.length===2?l=>e(t(l),c(l)):l=>e(...n.map(o=>o(l)))}}var In={boolean:0,number:1,string:2},Xi=3,e9=(e,a)=>typeof e==typeof a&&typeof e in In?e>a:!1,Sh=(e,a)=>ja(e,a)||e9(e,a),a9=(e,a)=>typeof e==typeof a&&typeof e in In?e<a:!1,kh=(e,a)=>ja(e,a)||a9(e,a),Bn={pipe:(...e)=>{let a=e.map(n=>Q0(n));return n=>a.reduce((t,c)=>c(t),n)},object:e=>{let a=Object.keys(e).map(n=>[n,Q0(e[n])]);return n=>{let t={};for(let[c,l]of a)t[c]=l(n);return t}},array:(...e)=>{let a=e.map(n=>Q0(n));return n=>a.map(t=>t(n))},get:(...e)=>{if(e.length===0)return a=>a??null;if(e.length===1){let a=e[0];return n=>Qi(n,a)??null}return a=>{let n=a;for(let t of e)n=Qi(n,t);return n??null}},map:e=>{let a=Q0(e);return n=>n.map(a)},mapObject:e=>{let a=Q0(e);return n=>{let t={};for(let c of Object.keys(n)){let l=a({key:c,value:n[c]});t[l.key]=l.value}return t}},mapKeys:e=>{let a=Q0(e);return n=>{let t={};for(let c of Object.keys(n)){let l=a(c);t[l]=n[c]}return t}},mapValues:e=>{let a=Q0(e);return n=>{let t={};for(let c of Object.keys(n))t[c]=a(n[c]);return t}},filter:e=>{let a=Q0(e);return n=>n.filter(t=>Yi(a(t)))},sort:(e=["get"],a)=>{let n=Q0(e),t=a==="desc"?-1:1;function c(l,o){let s=n(l),i=n(o);if(typeof s!=typeof i){let f=In[typeof s]??Xi,u=In[typeof i]??Xi;return f>u?t:f<u?-t:0}return typeof s in In?s>i?t:s<i?-t:0:0}return l=>l.slice().sort(c)},reverse:()=>e=>e.toReversed(),pick:(...e)=>{let a=e.map(([t,...c])=>[c[c.length-1],Bn.get(...c)]),n=(t,c)=>{let l={};for(let[o,s]of c)l[o]=s(t);return l};return t=>$6(t)?t.map(c=>n(c,a)):n(t,a)},groupBy:e=>{let a=Q0(e);return n=>{let t={};for(let c of n){let l=a(c);t[l]?t[l].push(c):t[l]=[c]}return t}},keyBy:e=>{let a=Q0(e);return n=>{let t={};for(let c of n){let l=a(c);l in t||(t[l]=c)}return t}},flatten:()=>e=>e.flat(),join:(e="")=>a=>a.join(e),split:K0((e,a)=>a!==void 0?e.split(a):e.trim().split(/\s+/)),substring:K0((e,a,n)=>e.slice(Math.max(a,0),n)),uniq:()=>e=>{let a=[];for(let n of e)a.findIndex(t=>ja(t,n))===-1&&a.push(n);return a},uniqBy:e=>a=>Object.values(Bn.keyBy(e)(a)),limit:e=>a=>a.slice(0,Math.max(e,0)),size:()=>e=>e.length,keys:()=>Object.keys,values:()=>Object.values,prod:()=>e=>Fn(e,(a,n)=>a*n),sum:()=>e=>$6(e)?e.reduce((a,n)=>a+n,0):H5(),average:()=>e=>$6(e)?e.length>0?e.reduce((a,n)=>a+n)/e.length:null:H5(),min:()=>e=>Fn(e,(a,n)=>Math.min(a,n)),max:()=>e=>Fn(e,(a,n)=>Math.max(a,n)),and:K0((...e)=>Fn(e,(a,n)=>!!(a&&n))),or:K0((...e)=>Fn(e,(a,n)=>!!(a||n))),not:K0(e=>!e),exists:e=>{let a=e.slice(1),n=a.pop(),t=Bn.get(...a);return c=>{let l=t(c);return!!l&&Object.hasOwnProperty.call(l,n)}},if:(e,a,n)=>{let t=Q0(e),c=Q0(a),l=Q0(n);return o=>Yi(t(o))?c(o):l(o)},in:(e,a)=>{let n=Q0(e),t=Q0(a);return c=>{let l=n(c);return t(c).findIndex(o=>ja(o,l))!==-1}},"not in":(e,a)=>{let n=Bn.in(e,a);return t=>!n(t)},regex:(e,a,n)=>{let t=new RegExp(a,n),c=Q0(e);return l=>t.test(c(l))},match:(e,a,n)=>{let t=new RegExp(a,n),c=Q0(e);return l=>{let o=c(l).match(t);return o?Zi(o):null}},matchAll:(e,a,n)=>{let t=new RegExp(a,`${n??""}g`),c=Q0(e);return l=>Array.from(c(l).matchAll(t)).map(Zi)},eq:K0(ja),gt:K0(e9),gte:K0(Sh),lt:K0(a9),lte:K0(kh),ne:K0((e,a)=>!ja(e,a)),add:K0((e,a)=>e+a),subtract:K0((e,a)=>e-a),multiply:K0((e,a)=>e*a),divide:K0((e,a)=>e/a),mod:K0((e,a)=>e%a),pow:K0((e,a)=>e**a),abs:K0(Math.abs),round:K0((e,a=0)=>+`${Math.round(+`${e}e${a}`)}e${-a}`),number:K0(e=>{let a=Number(e);return Number.isNaN(Number(e))?null:a}),string:K0(String)},Yi=e=>e!==null&&e!==0&&e!==!1,Fn=(e,a)=>($6(e)||H5(),e.length===0?null:e.reduce(a)),Zi=e=>{let[a,...n]=e,t=e.groups;return n.length?t?{value:a,groups:n,namedGroups:t}:{value:a,groups:n}:{value:a}},H5=()=>{W5("Array expected")},W5=e=>{throw new TypeError(e)},zr=[];function Q0(e,a){zr.unshift(O4(O4(O4({},Bn),zr[0]),a?.functions));try{let n=$6(e)?Nh(e,zr[0]):Ch(e)?W5(`Function notation ["object", {...}] expected but got ${JSON.stringify(e)}`):()=>e;return t=>{try{return n(t)}catch(c){throw c.jsonquery=[{data:t,query:e},...c.jsonquery??[]],c}}}finally{zr.shift()}}function Nh(e,a){let[n,...t]=e,c=a[n];return c||W5(`Unknown function '${n}'`),c(...t)}var n9=[{pow:"^"},{multiply:"*",divide:"/",mod:"%"},{add:"+",subtract:"-"},{gt:">",gte:">=",lt:"<",lte:"<=",in:"in","not in":"not in"},{eq:"==",ne:"!="},{and:"and"},{or:"or"},{pipe:"|"}],Ah=["|","and","or"],t9=["|","and","or","*","/","%","+","-"];function r9(e,a){if(!$6(a))throw new Error("Invalid custom operators");return a.reduce(_h,e)}function _h(e,{name:a,op:n,at:t,after:c,before:l}){if(t)return e.map(i=>Object.values(i).includes(t)?c3(O4({},i),{[a]:n}):i);let o=c??l,s=e.findIndex(i=>Object.values(i).includes(o));if(s!==-1)return e.toSpliced(s+(c?1:0),0,{[a]:n});throw new Error("Invalid custom operator")}var Eh=/^[a-zA-Z_$][a-zA-Z\d_$]*$/,Ph=/^[a-zA-Z_$][a-zA-Z\d_$]*/,Th=/^"(?:[^"\\]|\\.)*"/,Oh=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/,Rh=/^(0|[1-9][0-9]*)/,qh=/^(true|false|null)/,$h=/^[ \n\t\r]+/;function V5(e,a){let n=a?.operators??[],t=r9(n9,n),c=Object.assign({},...t),l=Ah.concat(n.filter($=>$.vararg).map($=>$.op)),o=t9.concat(n.filter($=>$.leftAssociative).map($=>$.op)),s=($=t.length-1)=>{let U=t[$];if(!U)return f();let O=e[I]==="(",c2=s($-1);for(;;){if(x(),e[I]==="."&&"pipe"in U){let o2=u();c2=c2[0]==="pipe"?[...c2,o2]:["pipe",c2,o2];continue}let u2=I,l2=i(U);if(!l2)break;let S2=s($-1),q2=c2[0],f2=l2===q2&&!O;if(f2&&!o.includes(c[l2])){I=u2;break}c2=f2&&l.includes(c[l2])?[...c2,S2]:[l2,c2,S2]}return c2},i=$=>{let U=Object.keys($).sort((O,c2)=>c2.length-O.length);for(let O of U){let c2=$[O];if(e.substring(I,I+c2.length)===c2)return I+=c2.length,x(),O}},f=()=>{if(x(),e[I]==="("){I++;let $=s();return E(")"),$}return u()},u=()=>{if(e[I]==="."){let $=[];for(;e[I]===".";)I++,$.push(v()??p()??y()??P("Property expected")),x();return["get",...$]}return d()},d=()=>{let $=I,U=p();if(x(),!U||e[I]!=="(")return I=$,h();I++,x();let O=e[I]!==")"?[s()]:[];for(;I<e.length&&e[I]!==")";)x(),E(","),O.push(s());return E(")"),[U,...O]},h=()=>{if(e[I]==="{"){I++,x();let $={},U=!0;for(;I<e.length&&e[I]!=="}";){U?U=!1:(E(","),x());let O=v()??p()??y()??P("Key expected");x(),E(":"),$[O]=s()}return E("}"),["object",$]}return m()},m=()=>{if(e[I]==="["){I++,x();let $=[],U=!0;for(;I<e.length&&e[I]!=="]";)U?U=!1:(E(","),x()),$.push(s());return E("]"),["array",...$]}return v()??g()??L()},v=()=>j(Th,JSON.parse),p=()=>j(Ph,$=>$),g=()=>j(Oh,JSON.parse),y=()=>j(Rh,JSON.parse),L=()=>{let $=j(qh,JSON.parse);if($!==void 0)return $;P("Value expected")},S=()=>{x(),I<e.length&&P(`Unexpected part '${e.substring(I)}'`)},j=($,U)=>{let O=e.substring(I).match($);if(O)return I+=O[0].length,U(O[0])},x=()=>j($h,$=>$),E=$=>{e[I]!==$&&P(`Character '${$}' expected`),I++},P=($,U=I)=>{throw new SyntaxError(`${$} (pos: ${U})`)},I=0,k=s();return S(),k}var Dh=40,Fh="  ",c9=(e,a)=>{let n=a?.indentation??Fh,t=a?.operators??[],c=r9(n9,t),l=Object.assign({},...c),o=t9.concat(t.filter(m=>m.leftAssociative).map(m=>m.op)),s=(m,v,p=!1)=>$6(m)?i(m,v,p):JSON.stringify(m),i=(m,v,p)=>{let[g,...y]=m;if(g==="get"&&y.length>0)return u(y);if(g==="object")return f(y[0],v);if(g==="array"){let x=y.map(E=>s(E,v));return h(x,["[",", ","]"],[`[
${v+n}`,`,
${v+n}`,`
${v}]`])}let L=l[g];if(L){let x=p?"(":"",E=p?")":"",P=y.map((I,k)=>{let $=I?.[0],U=c.findIndex(u2=>g in u2),O=c.findIndex(u2=>$ in u2),c2=U<O||U===O&&k>0||g===$&&!o.includes(L);return s(I,v+n,c2)});return h(P,[x,` ${L} `,E],[x,`
${v+n}${L} `,E])}let S=y.length===1?v:v+n,j=y.map(x=>s(x,S));return h(j,[`${g}(`,", ",")"],y.length===1?[`${g}(`,`,
${v}`,")"]:[`${g}(
${S}`,`,
${S}`,`
${v})`])},f=(m,v)=>{let p=v+n,g=Object.entries(m).map(([y,L])=>`${d(y)}: ${s(L,p)}`);return h(g,["{ ",", "," }"],[`{
${p}`,`,
${p}`,`
${v}}`])},u=m=>m.map(v=>`.${d(v)}`).join(""),d=m=>Eh.test(m)?m:JSON.stringify(m),h=(m,[v,p,g],[y,L,S])=>v.length+m.reduce((j,x)=>j+x.length+p.length,0)-p.length+g.length<=(a?.maxLineLength??Dh)?v+m.join(p)+g:y+m.join(L)+S;return s(e,"")};function l9(e,a,n){return Q0(jh(a)?V5(a,n):a,n)(e)}var o9={prefix:"far",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M464 256a208 208 0 1 1 -416 0 208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0 256 256 0 1 0 -512 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]};var Bh={prefix:"far",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zm230.7 89.9c7.8-10.7 22.8-13.1 33.5-5.3 10.7 7.8 13.1 22.8 5.3 33.5L211.4 366.1c-4.1 5.7-10.5 9.3-17.5 9.8-7 .5-13.9-2-18.8-6.9l-55.9-55.9c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l36 36 105.6-145.2z"]},J5=Bh;var s9={prefix:"far",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M296.5 291.1C321 265.2 336 230.4 336 192 336 112.5 271.5 48 192 48S48 112.5 48 192c0 38.4 15 73.2 39.5 99.1 21.3 22.4 44.9 54 53.3 92.9l102.4 0c8.4-39 32-70.5 53.3-92.9zm34.8 33C307.7 349 288 379.4 288 413.7l0 18.3c0 44.2-35.8 80-80 80l-32 0c-44.2 0-80-35.8-80-80l0-18.3C96 379.4 76.3 349 52.7 324.1 20 289.7 0 243.2 0 192 0 86 86 0 192 0S384 86 384 192c0 51.2-20 97.7-52.7 132.1zM144 184c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6 39.4-88 88-88 13.3 0 24 10.7 24 24s-10.7 24-24 24c-22.1 0-40 17.9-40 40z"]};var G5={prefix:"far",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]};var i9={prefix:"fas",iconName:"rotate",icon:[512,512,[128260,"sync-alt"],"f2f1","M480.1 192l7.9 0c13.3 0 24-10.7 24-24l0-144c0-9.7-5.8-18.5-14.8-22.2S477.9 .2 471 7L419.3 58.8C375 22.1 318 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1C79.2 135.5 159.3 64 256 64 300.4 64 341.2 79 373.7 104.3L327 151c-6.9 6.9-8.9 17.2-5.2 26.2S334.3 192 344 192l136.1 0zm29.4 100.5c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-44.4 0-85.2-15-117.7-40.3L185 361c6.9-6.9 8.9-17.2 5.2-26.2S177.7 320 168 320L24 320c-13.3 0-24 10.7-24 24L0 488c0 9.7 5.8 18.5 14.8 22.2S34.1 511.8 41 505l51.8-51.8C137 489.9 194 512 256 512 385 512 491.7 416.6 509.4 292.5z"]};var K5={prefix:"fas",iconName:"paste",icon:[512,512,["file-clipboard"],"f0ea","M64 0C28.7 0 0 28.7 0 64L0 384c0 35.3 28.7 64 64 64l112 0 0-224c0-61.9 50.1-112 112-112l64 0 0-48c0-35.3-28.7-64-64-64L64 0zM248 112l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24zm40 48c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l160 0c35.3 0 64-28.7 64-64l0-165.5c0-17-6.7-33.3-18.7-45.3l-58.5-58.5c-12-12-28.3-18.7-45.3-18.7L288 160z"]};var Ih={prefix:"fas",iconName:"crop-simple",icon:[512,512,["crop-alt"],"f565","M128 32c0-17.7-14.3-32-32-32S64 14.3 64 32l0 32-32 0C14.3 64 0 78.3 0 96s14.3 32 32 32l32 0 0 256c0 35.3 28.7 64 64 64l208 0 0-64-208 0 0-352zM384 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-256c0-35.3-28.7-64-64-64l-208 0 0 64 208 0 0 352z"]},f9=Ih;var Un={prefix:"fas",iconName:"filter",icon:[512,512,[],"f0b0","M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"]};var Uh={prefix:"fas",iconName:"square-caret-down",icon:[448,512,["caret-square-down"],"f150","M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9S110.5 192 120 192l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z"]},u9=Uh;var g8={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M249.3 235.8c10.2 12.6 9.5 31.1-2.2 42.8l-128 128c-9.2 9.2-22.9 11.9-34.9 6.9S64.5 396.9 64.5 384l0-256c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l128 128 2.2 2.4z"]};var Hh={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Hn=Hh;var d9={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z"]},p9={prefix:"fas",iconName:"caret-left",icon:[256,512,[],"f0d9","M7.7 235.8c-10.3 12.6-9.5 31.1 2.2 42.8l128 128c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-256c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-128 128-2.2 2.4z"]};var v9={prefix:"fas",iconName:"chevron-up",icon:[448,512,[],"f077","M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]};var m9={prefix:"fas",iconName:"circle-notch",icon:[512,512,[],"f1ce","M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8-79.3 23.6-137.1 97.1-137.1 184.1 0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256 512 397.4 397.4 512 256 512S0 397.4 0 256c0-116 77.1-213.9 182.9-245.4 16.9-5 34.8 4.6 39.8 21.5z"]};var Wh={prefix:"fas",iconName:"ellipsis-vertical",icon:[128,512,["ellipsis-v"],"f142","M64 144a56 56 0 1 1 0-112 56 56 0 1 1 0 112zm0 224c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56zm56-112c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56z"]},Q5=Wh;var Vh={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},h9=Vh;var X5={prefix:"fas",iconName:"clone",icon:[512,512,[],"f24d","M288 448l-224 0 0-224 48 0 0-64-48 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-48-64 0 0 48zm-64-96l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L224 0c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64z"]};var Jh={prefix:"fas",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM342 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L189.1 315.2 137 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.9 7.5 18.8 7s13.4-4.1 17.5-9.8L347.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z"]},Y5=Jh;var Gh={prefix:"fas",iconName:"square-caret-up",icon:[448,512,["caret-square-up"],"f151","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM224 160c6.7 0 13 2.8 17.6 7.7l104 112c6.5 7 8.2 17.2 4.4 25.9S337.5 320 328 320l-208 0c-9.5 0-18.2-5.7-22-14.4s-2.1-18.9 4.4-25.9l104-112c4.5-4.9 10.9-7.7 17.6-7.7z"]},g9=Gh;var Wn={prefix:"fas",iconName:"code",icon:[576,512,[],"f121","M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z"]};var Z5={prefix:"fas",iconName:"angle-right",icon:[256,512,[8250],"f105","M247.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L179.2 256 41.9 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]};var Kh={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]},z9=Kh;var b9={prefix:"fas",iconName:"up-right-and-down-left-from-center",icon:[512,512,["expand-alt"],"f424","M344 0L488 0c13.3 0 24 10.7 24 24l0 144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87-39-39c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512L24 512c-13.3 0-24-10.7-24-24L0 344c0-9.7 5.8-18.5 14.8-22.2S34.1 320.2 41 327l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2S177.7 512 168 512z"]};var c6={prefix:"fas",iconName:"wrench",icon:[576,512,[128295],"f0ad","M509.4 98.6c7.6-7.6 20.3-5.7 24.1 4.3 6.8 17.7 10.5 37 10.5 57.1 0 88.4-71.6 160-160 160-17.5 0-34.4-2.8-50.2-8L146.9 498.9c-28.1 28.1-73.7 28.1-101.8 0s-28.1-73.7 0-101.8L232 210.2c-5.2-15.8-8-32.6-8-50.2 0-88.4 71.6-160 160-160 20.1 0 39.4 3.7 57.1 10.5 10 3.8 11.8 16.5 4.3 24.1l-88.7 88.7c-3 3-4.7 7.1-4.7 11.3l0 41.4c0 8.8 7.2 16 16 16l41.4 0c4.2 0 8.3-1.7 11.3-4.7l88.7-88.7z"]},br={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M136.7 5.9C141.1-7.2 153.3-16 167.1-16l113.9 0c13.8 0 26 8.8 30.4 21.9L320 32 416 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 8.7-26.1zM32 144l384 0 0 304c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-304zm88 64c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24z"]};var yr={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"]};var y9={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]},M9=y9;var Vn=y9;var Sa={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M352.9 21.2L308 66.1 445.9 204 490.8 159.1C504.4 145.6 512 127.2 512 108s-7.6-37.6-21.2-51.1L455.1 21.2C441.6 7.6 423.2 0 404 0s-37.6 7.6-51.1 21.2zM274.1 100L58.9 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6L412 237.9 274.1 100z"]};var x9={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]};var L9={prefix:"fas",iconName:"angle-down",icon:[384,512,[8964],"f107","M169.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 306.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]};var Qh={prefix:"fas",iconName:"arrow-down-short-wide",icon:[576,512,["sort-amount-desc","sort-amount-down-alt"],"f884","M246.6 374.6l-96 96c-12.5 12.5-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L96 370.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 306.7 41.4-41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3zM320 32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]};var Jn=Qh;var Xh={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.2-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z"]},D6=Xh;var Yh={prefix:"fas",iconName:"scissors",icon:[512,512,[9984,9986,9988,"cut"],"f0c4","M192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6-28.3-28.3-74.1-28.3-102.4 0L256 192 216.5 152.5c4.9-12.6 7.5-26.2 7.5-40.5 0-61.9-50.1-112-112-112S0 50.1 0 112 50.1 224 112 224c14.3 0 27.9-2.7 40.5-7.5L192 256zm97.9 97.9L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0 7.1-7.1 7.1-18.5 0-25.6l-145.3-145.3-64 64zM64 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},ka=Yh;var Gn={prefix:"fas",iconName:"arrow-right-arrow-left",icon:[512,512,[8644,"exchange"],"f0ec","M502.6 150.6l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L402.7 160 32 160c-17.7 0-32-14.3-32-32S14.3 96 32 96l370.7 0-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3zm-397.3 352l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L109.3 352 480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32l-370.7 0 41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0z"]};var el={prefix:"fas",iconName:"caret-up",icon:[320,512,[],"f0d8","M140.3 135.2c12.6-10.3 31.1-9.5 42.8 2.2l128 128c9.2 9.2 11.9 22.9 6.9 34.9S301.4 320 288.5 320l-256 0c-12.9 0-24.6-7.8-29.6-19.8S.7 274.5 9.9 265.4l128-128 2.4-2.2z"]};var w9={prefix:"fas",iconName:"down-left-and-up-right-to-center",icon:[512,512,["compress-alt"],"f422","M439.5 7c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2S450.2 240 440.5 240l-144 0c-13.3 0-24-10.7-24-24l0-144c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87zM72.5 272l144 0c13.3 0 24 10.7 24 24l0 144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87-39-39c-6.9-6.9-8.9-17.2-5.2-26.2S62.8 272 72.5 272z"]};var Na={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]};var l6={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"]};var Zh={prefix:"fas",iconName:"arrow-rotate-right",icon:[512,512,[8635,"arrow-right-rotate","arrow-rotate-forward","redo"],"f01e","M436.7 74.7L448 85.4 448 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l47.9 0-7.6-7.2c-.2-.2-.4-.4-.6-.6-75-75-196.5-75-271.5 0s-75 196.5 0 271.5 196.5 75 271.5 0c8.2-8.2 15.5-16.9 21.9-26.1 10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7-100 100-262.1 100-362 0S-25 175 75 75c99.9-99.9 261.7-100 361.7-.3z"]};var Mr=Zh;var qe={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M140.3 376.8c12.6 10.2 31.1 9.5 42.8-2.2l128-128c9.2-9.2 11.9-22.9 6.9-34.9S301.4 192 288.5 192l-256 0c-12.9 0-24.6 7.8-29.6 19.8S.7 237.5 9.9 246.6l128 128 2.4 2.2z"]};var eg={prefix:"fas",iconName:"arrow-rotate-left",icon:[512,512,[8634,"arrow-left-rotate","arrow-rotate-back","arrow-rotate-backward","undo"],"f0e2","M256 64c-56.8 0-107.9 24.7-143.1 64l47.1 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 192c-17.7 0-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0S64 14.3 64 32l0 54.7C110.9 33.6 179.5 0 256 0 397.4 0 512 114.6 512 256S397.4 512 256 512c-87 0-163.9-43.4-210.1-109.7-10.1-14.5-6.6-34.4 7.9-44.6s34.4-6.6 44.6 7.9c34.8 49.8 92.4 82.3 157.6 82.3 106 0 192-86 192-192S362 64 256 64z"]};var xr=eg;var al={prefix:"fas",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32z"]};var nl={prefix:"fas",iconName:"arrow-down",icon:[384,512,[8595],"f063","M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]};var _p=lr(S9(),1);var k9=Number.isNaN||function(a){return typeof a=="number"&&a!==a};function ag(e,a){return!!(e===a||k9(e)&&k9(a))}function ng(e,a){if(e.length!==a.length)return!1;for(var n=0;n<e.length;n++)if(!ag(e[n],a[n]))return!1;return!0}function z8(e,a){a===void 0&&(a=ng);var n=null;function t(){for(var c=[],l=0;l<arguments.length;l++)c[l]=arguments[l];if(n&&n.lastThis===this&&a(c,n.lastArgs))return n.lastResult;var o=e.apply(this,c);return n={lastResult:o,lastArgs:c,lastThis:this},o}return t.clear=function(){n=null},t}var Ep=lr(ld(),1),Pp=lr(od(),1);var U7=class{add(a,n,t){if(typeof arguments[0]!="string")for(let c in arguments[0])this.add(c,arguments[0][c],arguments[1]);else(Array.isArray(a)?a:[a]).forEach(function(c){this[c]=this[c]||[],n&&this[c][t?"unshift":"push"](n)},this)}run(a,n){this[a]=this[a]||[],this[a].forEach(function(t){t.call(n&&n.context?n.context:n,n)})}},H7=class{constructor(a){this.jsep=a,this.registered={}}register(){for(var a=arguments.length,n=new Array(a),t=0;t<a;t++)n[t]=arguments[t];n.forEach(c=>{if(typeof c!="object"||!c.name||!c.init)throw new Error("Invalid JSEP plugin format");this.registered[c.name]||(c.init(this.jsep),this.registered[c.name]=c)})}},F3=class e{static get version(){return"1.4.0"}static toString(){return"JavaScript Expression Parser (JSEP) v"+e.version}static addUnaryOp(a){return e.max_unop_len=Math.max(a.length,e.max_unop_len),e.unary_ops[a]=1,e}static addBinaryOp(a,n,t){return e.max_binop_len=Math.max(a.length,e.max_binop_len),e.binary_ops[a]=n,t?e.right_associative.add(a):e.right_associative.delete(a),e}static addIdentifierChar(a){return e.additional_identifier_chars.add(a),e}static addLiteral(a,n){return e.literals[a]=n,e}static removeUnaryOp(a){return delete e.unary_ops[a],a.length===e.max_unop_len&&(e.max_unop_len=e.getMaxKeyLen(e.unary_ops)),e}static removeAllUnaryOps(){return e.unary_ops={},e.max_unop_len=0,e}static removeIdentifierChar(a){return e.additional_identifier_chars.delete(a),e}static removeBinaryOp(a){return delete e.binary_ops[a],a.length===e.max_binop_len&&(e.max_binop_len=e.getMaxKeyLen(e.binary_ops)),e.right_associative.delete(a),e}static removeAllBinaryOps(){return e.binary_ops={},e.max_binop_len=0,e}static removeLiteral(a){return delete e.literals[a],e}static removeAllLiterals(){return e.literals={},e}get char(){return this.expr.charAt(this.index)}get code(){return this.expr.charCodeAt(this.index)}constructor(a){this.expr=a,this.index=0}static parse(a){return new e(a).parse()}static getMaxKeyLen(a){return Math.max(0,...Object.keys(a).map(n=>n.length))}static isDecimalDigit(a){return a>=48&&a<=57}static binaryPrecedence(a){return e.binary_ops[a]||0}static isIdentifierStart(a){return a>=65&&a<=90||a>=97&&a<=122||a>=128&&!e.binary_ops[String.fromCharCode(a)]||e.additional_identifier_chars.has(String.fromCharCode(a))}static isIdentifierPart(a){return e.isIdentifierStart(a)||e.isDecimalDigit(a)}throwError(a){let n=new Error(a+" at character "+this.index);throw n.index=this.index,n.description=a,n}runHook(a,n){if(e.hooks[a]){let t={context:this,node:n};return e.hooks.run(a,t),t.node}return n}searchHook(a){if(e.hooks[a]){let n={context:this};return e.hooks[a].find(function(t){return t.call(n.context,n),n.node}),n.node}}gobbleSpaces(){let a=this.code;for(;a===e.SPACE_CODE||a===e.TAB_CODE||a===e.LF_CODE||a===e.CR_CODE;)a=this.expr.charCodeAt(++this.index);this.runHook("gobble-spaces")}parse(){this.runHook("before-all");let a=this.gobbleExpressions(),n=a.length===1?a[0]:{type:e.COMPOUND,body:a};return this.runHook("after-all",n)}gobbleExpressions(a){let n=[],t,c;for(;this.index<this.expr.length;)if(t=this.code,t===e.SEMCOL_CODE||t===e.COMMA_CODE)this.index++;else if(c=this.gobbleExpression())n.push(c);else if(this.index<this.expr.length){if(t===a)break;this.throwError('Unexpected "'+this.char+'"')}return n}gobbleExpression(){let a=this.searchHook("gobble-expression")||this.gobbleBinaryExpression();return this.gobbleSpaces(),this.runHook("after-expression",a)}gobbleBinaryOp(){this.gobbleSpaces();let a=this.expr.substr(this.index,e.max_binop_len),n=a.length;for(;n>0;){if(e.binary_ops.hasOwnProperty(a)&&(!e.isIdentifierStart(this.code)||this.index+a.length<this.expr.length&&!e.isIdentifierPart(this.expr.charCodeAt(this.index+a.length))))return this.index+=n,a;a=a.substr(0,--n)}return!1}gobbleBinaryExpression(){let a,n,t,c,l,o,s,i,f;if(o=this.gobbleToken(),!o||(n=this.gobbleBinaryOp(),!n))return o;for(l={value:n,prec:e.binaryPrecedence(n),right_a:e.right_associative.has(n)},s=this.gobbleToken(),s||this.throwError("Expected expression after "+n),c=[o,l,s];n=this.gobbleBinaryOp();){if(t=e.binaryPrecedence(n),t===0){this.index-=n.length;break}l={value:n,prec:t,right_a:e.right_associative.has(n)},f=n;let u=d=>l.right_a&&d.right_a?t>d.prec:t<=d.prec;for(;c.length>2&&u(c[c.length-2]);)s=c.pop(),n=c.pop().value,o=c.pop(),a={type:e.BINARY_EXP,operator:n,left:o,right:s},c.push(a);a=this.gobbleToken(),a||this.throwError("Expected expression after "+f),c.push(l,a)}for(i=c.length-1,a=c[i];i>1;)a={type:e.BINARY_EXP,operator:c[i-1].value,left:c[i-2],right:a},i-=2;return a}gobbleToken(){let a,n,t,c;if(this.gobbleSpaces(),c=this.searchHook("gobble-token"),c)return this.runHook("after-token",c);if(a=this.code,e.isDecimalDigit(a)||a===e.PERIOD_CODE)return this.gobbleNumericLiteral();if(a===e.SQUOTE_CODE||a===e.DQUOTE_CODE)c=this.gobbleStringLiteral();else if(a===e.OBRACK_CODE)c=this.gobbleArray();else{for(n=this.expr.substr(this.index,e.max_unop_len),t=n.length;t>0;){if(e.unary_ops.hasOwnProperty(n)&&(!e.isIdentifierStart(this.code)||this.index+n.length<this.expr.length&&!e.isIdentifierPart(this.expr.charCodeAt(this.index+n.length)))){this.index+=t;let l=this.gobbleToken();return l||this.throwError("missing unaryOp argument"),this.runHook("after-token",{type:e.UNARY_EXP,operator:n,argument:l,prefix:!0})}n=n.substr(0,--t)}e.isIdentifierStart(a)?(c=this.gobbleIdentifier(),e.literals.hasOwnProperty(c.name)?c={type:e.LITERAL,value:e.literals[c.name],raw:c.name}:c.name===e.this_str&&(c={type:e.THIS_EXP})):a===e.OPAREN_CODE&&(c=this.gobbleGroup())}return c?(c=this.gobbleTokenProperty(c),this.runHook("after-token",c)):this.runHook("after-token",!1)}gobbleTokenProperty(a){this.gobbleSpaces();let n=this.code;for(;n===e.PERIOD_CODE||n===e.OBRACK_CODE||n===e.OPAREN_CODE||n===e.QUMARK_CODE;){let t;if(n===e.QUMARK_CODE){if(this.expr.charCodeAt(this.index+1)!==e.PERIOD_CODE)break;t=!0,this.index+=2,this.gobbleSpaces(),n=this.code}this.index++,n===e.OBRACK_CODE?(a={type:e.MEMBER_EXP,computed:!0,object:a,property:this.gobbleExpression()},a.property||this.throwError('Unexpected "'+this.char+'"'),this.gobbleSpaces(),n=this.code,n!==e.CBRACK_CODE&&this.throwError("Unclosed ["),this.index++):n===e.OPAREN_CODE?a={type:e.CALL_EXP,arguments:this.gobbleArguments(e.CPAREN_CODE),callee:a}:(n===e.PERIOD_CODE||t)&&(t&&this.index--,this.gobbleSpaces(),a={type:e.MEMBER_EXP,computed:!1,object:a,property:this.gobbleIdentifier()}),t&&(a.optional=!0),this.gobbleSpaces(),n=this.code}return a}gobbleNumericLiteral(){let a="",n,t;for(;e.isDecimalDigit(this.code);)a+=this.expr.charAt(this.index++);if(this.code===e.PERIOD_CODE)for(a+=this.expr.charAt(this.index++);e.isDecimalDigit(this.code);)a+=this.expr.charAt(this.index++);if(n=this.char,n==="e"||n==="E"){for(a+=this.expr.charAt(this.index++),n=this.char,(n==="+"||n==="-")&&(a+=this.expr.charAt(this.index++));e.isDecimalDigit(this.code);)a+=this.expr.charAt(this.index++);e.isDecimalDigit(this.expr.charCodeAt(this.index-1))||this.throwError("Expected exponent ("+a+this.char+")")}return t=this.code,e.isIdentifierStart(t)?this.throwError("Variable names cannot start with a number ("+a+this.char+")"):(t===e.PERIOD_CODE||a.length===1&&a.charCodeAt(0)===e.PERIOD_CODE)&&this.throwError("Unexpected period"),{type:e.LITERAL,value:parseFloat(a),raw:a}}gobbleStringLiteral(){let a="",n=this.index,t=this.expr.charAt(this.index++),c=!1;for(;this.index<this.expr.length;){let l=this.expr.charAt(this.index++);if(l===t){c=!0;break}else if(l==="\\")switch(l=this.expr.charAt(this.index++),l){case"n":a+=`
`;break;case"r":a+="\r";break;case"t":a+="	";break;case"b":a+="\b";break;case"f":a+="\f";break;case"v":a+="\v";break;default:a+=l}else a+=l}return c||this.throwError('Unclosed quote after "'+a+'"'),{type:e.LITERAL,value:a,raw:this.expr.substring(n,this.index)}}gobbleIdentifier(){let a=this.code,n=this.index;for(e.isIdentifierStart(a)?this.index++:this.throwError("Unexpected "+this.char);this.index<this.expr.length&&(a=this.code,e.isIdentifierPart(a));)this.index++;return{type:e.IDENTIFIER,name:this.expr.slice(n,this.index)}}gobbleArguments(a){let n=[],t=!1,c=0;for(;this.index<this.expr.length;){this.gobbleSpaces();let l=this.code;if(l===a){t=!0,this.index++,a===e.CPAREN_CODE&&c&&c>=n.length&&this.throwError("Unexpected token "+String.fromCharCode(a));break}else if(l===e.COMMA_CODE){if(this.index++,c++,c!==n.length){if(a===e.CPAREN_CODE)this.throwError("Unexpected token ,");else if(a===e.CBRACK_CODE)for(let o=n.length;o<c;o++)n.push(null)}}else if(n.length!==c&&c!==0)this.throwError("Expected comma");else{let o=this.gobbleExpression();(!o||o.type===e.COMPOUND)&&this.throwError("Expected comma"),n.push(o)}}return t||this.throwError("Expected "+String.fromCharCode(a)),n}gobbleGroup(){this.index++;let a=this.gobbleExpressions(e.CPAREN_CODE);if(this.code===e.CPAREN_CODE)return this.index++,a.length===1?a[0]:a.length?{type:e.SEQUENCE_EXP,expressions:a}:!1;this.throwError("Unclosed (")}gobbleArray(){return this.index++,{type:e.ARRAY_EXP,elements:this.gobbleArguments(e.CBRACK_CODE)}}},kx=new U7;Object.assign(F3,{hooks:kx,plugins:new H7(F3),COMPOUND:"Compound",SEQUENCE_EXP:"SequenceExpression",IDENTIFIER:"Identifier",MEMBER_EXP:"MemberExpression",LITERAL:"Literal",THIS_EXP:"ThisExpression",CALL_EXP:"CallExpression",UNARY_EXP:"UnaryExpression",BINARY_EXP:"BinaryExpression",ARRAY_EXP:"ArrayExpression",TAB_CODE:9,LF_CODE:10,CR_CODE:13,SPACE_CODE:32,PERIOD_CODE:46,COMMA_CODE:44,SQUOTE_CODE:39,DQUOTE_CODE:34,OPAREN_CODE:40,CPAREN_CODE:41,OBRACK_CODE:91,CBRACK_CODE:93,QUMARK_CODE:63,SEMCOL_CODE:59,COLON_CODE:58,unary_ops:{"-":1,"!":1,"~":1,"+":1},binary_ops:{"||":1,"??":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10,"**":11},right_associative:new Set(["**"]),additional_identifier_chars:new Set(["$","_"]),literals:{true:!0,false:!1,null:null},this_str:"this"});F3.max_unop_len=F3.getMaxKeyLen(F3.unary_ops);F3.max_binop_len=F3.getMaxKeyLen(F3.binary_ops);var d6=e=>new F3(e).parse(),Nx=Object.getOwnPropertyNames(class{});Object.getOwnPropertyNames(F3).filter(e=>!Nx.includes(e)&&d6[e]===void 0).forEach(e=>{d6[e]=F3[e]});d6.Jsep=F3;var Ax="ConditionalExpression",_x={name:"ternary",init(e){e.hooks.add("after-expression",function(n){if(n.node&&this.code===e.QUMARK_CODE){this.index++;let t=n.node,c=this.gobbleExpression();if(c||this.throwError("Expected expression"),this.gobbleSpaces(),this.code===e.COLON_CODE){this.index++;let l=this.gobbleExpression();if(l||this.throwError("Expected expression"),n.node={type:Ax,test:t,consequent:c,alternate:l},t.operator&&e.binary_ops[t.operator]<=.9){let o=t;for(;o.right.operator&&e.binary_ops[o.right.operator]<=.9;)o=o.right;n.node.test=o.right,o.right=n.node,n.node=t}}else this.throwError("Expected :")}})}};d6.plugins.register(_x);var sd=47,Ex=92,Px={name:"regex",init(e){e.hooks.add("gobble-token",function(n){if(this.code===sd){let t=++this.index,c=!1;for(;this.index<this.expr.length;){if(this.code===sd&&!c){let l=this.expr.slice(t,this.index),o="";for(;++this.index<this.expr.length;){let i=this.code;if(i>=97&&i<=122||i>=65&&i<=90||i>=48&&i<=57)o+=this.char;else break}let s;try{s=new RegExp(l,o)}catch(i){this.throwError(i.message)}return n.node={type:e.LITERAL,value:s,raw:this.expr.slice(t-1,this.index)},n.node=this.gobbleTokenProperty(n.node),n.node}this.code===e.OBRACK_CODE?c=!0:c&&this.code===e.CBRACK_CODE&&(c=!1),this.index+=this.code===Ex?2:1}this.throwError("Unclosed Regex")}})}},I7=43,Tx=45,E8={name:"assignment",assignmentOperators:new Set(["=","*=","**=","/=","%=","+=","-=","<<=",">>=",">>>=","&=","^=","|=","||=","&&=","??="]),updateOperators:[I7,Tx],assignmentPrecedence:.9,init(e){let a=[e.IDENTIFIER,e.MEMBER_EXP];E8.assignmentOperators.forEach(t=>e.addBinaryOp(t,E8.assignmentPrecedence,!0)),e.hooks.add("gobble-token",function(c){let l=this.code;E8.updateOperators.some(o=>o===l&&o===this.expr.charCodeAt(this.index+1))&&(this.index+=2,c.node={type:"UpdateExpression",operator:l===I7?"++":"--",argument:this.gobbleTokenProperty(this.gobbleIdentifier()),prefix:!0},(!c.node.argument||!a.includes(c.node.argument.type))&&this.throwError(`Unexpected ${c.node.operator}`))}),e.hooks.add("after-token",function(c){if(c.node){let l=this.code;E8.updateOperators.some(o=>o===l&&o===this.expr.charCodeAt(this.index+1))&&(a.includes(c.node.type)||this.throwError(`Unexpected ${c.node.operator}`),this.index+=2,c.node={type:"UpdateExpression",operator:l===I7?"++":"--",argument:c.node,prefix:!1})}}),e.hooks.add("after-expression",function(c){c.node&&n(c.node)});function n(t){E8.assignmentOperators.has(t.operator)?(t.type="AssignmentExpression",n(t.left),n(t.right)):t.operator||Object.values(t).forEach(c=>{c&&typeof c=="object"&&n(c)})}}};d6.plugins.register(Px,E8);d6.addUnaryOp("typeof");d6.addLiteral("null",null);d6.addLiteral("undefined",void 0);var Ox=new Set(["constructor","__proto__","__defineGetter__","__defineSetter__"]),s0={evalAst(e,a){switch(e.type){case"BinaryExpression":case"LogicalExpression":return s0.evalBinaryExpression(e,a);case"Compound":return s0.evalCompound(e,a);case"ConditionalExpression":return s0.evalConditionalExpression(e,a);case"Identifier":return s0.evalIdentifier(e,a);case"Literal":return s0.evalLiteral(e,a);case"MemberExpression":return s0.evalMemberExpression(e,a);case"UnaryExpression":return s0.evalUnaryExpression(e,a);case"ArrayExpression":return s0.evalArrayExpression(e,a);case"CallExpression":return s0.evalCallExpression(e,a);case"AssignmentExpression":return s0.evalAssignmentExpression(e,a);default:throw SyntaxError("Unexpected expression",e)}},evalBinaryExpression(e,a){return{"||":(t,c)=>t||c(),"&&":(t,c)=>t&&c(),"|":(t,c)=>t|c(),"^":(t,c)=>t^c(),"&":(t,c)=>t&c(),"==":(t,c)=>t==c(),"!=":(t,c)=>t!=c(),"===":(t,c)=>t===c(),"!==":(t,c)=>t!==c(),"<":(t,c)=>t<c(),">":(t,c)=>t>c(),"<=":(t,c)=>t<=c(),">=":(t,c)=>t>=c(),"<<":(t,c)=>t<<c(),">>":(t,c)=>t>>c(),">>>":(t,c)=>t>>>c(),"+":(t,c)=>t+c(),"-":(t,c)=>t-c(),"*":(t,c)=>t*c(),"/":(t,c)=>t/c(),"%":(t,c)=>t%c()}[e.operator](s0.evalAst(e.left,a),()=>s0.evalAst(e.right,a))},evalCompound(e,a){let n;for(let t=0;t<e.body.length;t++){e.body[t].type==="Identifier"&&["var","let","const"].includes(e.body[t].name)&&e.body[t+1]&&e.body[t+1].type==="AssignmentExpression"&&(t+=1);let c=e.body[t];n=s0.evalAst(c,a)}return n},evalConditionalExpression(e,a){return s0.evalAst(e.test,a)?s0.evalAst(e.consequent,a):s0.evalAst(e.alternate,a)},evalIdentifier(e,a){if(Object.hasOwn(a,e.name))return a[e.name];throw ReferenceError(`${e.name} is not defined`)},evalLiteral(e){return e.value},evalMemberExpression(e,a){let n=String(e.computed?s0.evalAst(e.property):e.property.name),t=s0.evalAst(e.object,a);if(t==null)throw TypeError(`Cannot read properties of ${t} (reading '${n}')`);if(!Object.hasOwn(t,n)&&Ox.has(n))throw TypeError(`Cannot read properties of ${t} (reading '${n}')`);let c=t[n];return typeof c=="function"?c.bind(t):c},evalUnaryExpression(e,a){return{"-":t=>-s0.evalAst(t,a),"!":t=>!s0.evalAst(t,a),"~":t=>~s0.evalAst(t,a),"+":t=>+s0.evalAst(t,a),typeof:t=>typeof s0.evalAst(t,a)}[e.operator](e.argument)},evalArrayExpression(e,a){return e.elements.map(n=>s0.evalAst(n,a))},evalCallExpression(e,a){let n=e.arguments.map(c=>s0.evalAst(c,a));return s0.evalAst(e.callee,a)(...n)},evalAssignmentExpression(e,a){if(e.left.type!=="Identifier")throw SyntaxError("Invalid left-hand side in assignment");let n=e.left.name,t=s0.evalAst(e.right,a);return a[n]=t,a[n]}},W7=class{constructor(a){this.code=a,this.ast=d6(this.code)}runInNewContext(a){let n=Object.assign(Object.create(null),a);return s0.evalAst(this.ast,n)}};function J6(e,a){return e=e.slice(),e.push(a),e}function V7(e,a){return a=a.slice(),a.unshift(e),a}var J7=class extends Error{constructor(a){super('JSONPath should not be called with "new" (it prevents return of (unwrapped) scalar values)'),this.avoidNew=!0,this.value=a,this.name="NewError"}};function $4(e,a,n,t,c){if(!(this instanceof $4))try{return new $4(e,a,n,t,c)}catch(o){if(!o.avoidNew)throw o;return o.value}typeof e=="string"&&(c=t,t=n,n=a,a=e,e=null);let l=e&&typeof e=="object";if(e=e||{},this.json=e.json||n,this.path=e.path||a,this.resultType=e.resultType||"value",this.flatten=e.flatten||!1,this.wrap=Object.hasOwn(e,"wrap")?e.wrap:!0,this.sandbox=e.sandbox||{},this.eval=e.eval===void 0?"safe":e.eval,this.ignoreEvalErrors=typeof e.ignoreEvalErrors>"u"?!1:e.ignoreEvalErrors,this.parent=e.parent||null,this.parentProperty=e.parentProperty||null,this.callback=e.callback||t||null,this.otherTypeCallback=e.otherTypeCallback||c||function(){throw new TypeError("You must supply an otherTypeCallback callback option with the @other() operator.")},e.autostart!==!1){let o={path:l?e.path:a};l?"json"in e&&(o.json=e.json):o.json=n;let s=this.evaluate(o);if(!s||typeof s!="object")throw new J7(s);return s}}$4.prototype.evaluate=function(e,a,n,t){let c=this.parent,l=this.parentProperty,{flatten:o,wrap:s}=this;if(this.currResultType=this.resultType,this.currEval=this.eval,this.currSandbox=this.sandbox,n=n||this.callback,this.currOtherTypeCallback=t||this.otherTypeCallback,a=a||this.json,e=e||this.path,e&&typeof e=="object"&&!Array.isArray(e)){if(!e.path&&e.path!=="")throw new TypeError('You must supply a "path" property when providing an object argument to JSONPath.evaluate().');if(!Object.hasOwn(e,"json"))throw new TypeError('You must supply a "json" property when providing an object argument to JSONPath.evaluate().');({json:a}=e),o=Object.hasOwn(e,"flatten")?e.flatten:o,this.currResultType=Object.hasOwn(e,"resultType")?e.resultType:this.currResultType,this.currSandbox=Object.hasOwn(e,"sandbox")?e.sandbox:this.currSandbox,s=Object.hasOwn(e,"wrap")?e.wrap:s,this.currEval=Object.hasOwn(e,"eval")?e.eval:this.currEval,n=Object.hasOwn(e,"callback")?e.callback:n,this.currOtherTypeCallback=Object.hasOwn(e,"otherTypeCallback")?e.otherTypeCallback:this.currOtherTypeCallback,c=Object.hasOwn(e,"parent")?e.parent:c,l=Object.hasOwn(e,"parentProperty")?e.parentProperty:l,e=e.path}if(c=c||null,l=l||null,Array.isArray(e)&&(e=$4.toPathString(e)),!e&&e!==""||!a)return;let i=$4.toPathArray(e);i[0]==="$"&&i.length>1&&i.shift(),this._hasParentSelector=null;let f=this._trace(i,a,["$"],c,l,n).filter(function(u){return u&&!u.isParentSelector});return f.length?!s&&f.length===1&&!f[0].hasArrExpr?this._getPreferredOutput(f[0]):f.reduce((u,d)=>{let h=this._getPreferredOutput(d);return o&&Array.isArray(h)?u=u.concat(h):u.push(h),u},[]):s?[]:void 0};$4.prototype._getPreferredOutput=function(e){let a=this.currResultType;switch(a){case"all":{let n=Array.isArray(e.path)?e.path:$4.toPathArray(e.path);return e.pointer=$4.toPointer(n),e.path=typeof e.path=="string"?e.path:$4.toPathString(e.path),e}case"value":case"parent":case"parentProperty":return e[a];case"path":return $4.toPathString(e[a]);case"pointer":return $4.toPointer(e.path);default:throw new TypeError("Unknown result type")}};$4.prototype._handleCallback=function(e,a,n){if(a){let t=this._getPreferredOutput(e);e.path=typeof e.path=="string"?e.path:$4.toPathString(e.path),a(t,n,e)}};$4.prototype._trace=function(e,a,n,t,c,l,o,s){let i;if(!e.length)return i={path:n,value:a,parent:t,parentProperty:c,hasArrExpr:o},this._handleCallback(i,l,"value"),i;let f=e[0],u=e.slice(1),d=[];function h(m){Array.isArray(m)?m.forEach(v=>{d.push(v)}):d.push(m)}if((typeof f!="string"||s)&&a&&Object.hasOwn(a,f))h(this._trace(u,a[f],J6(n,f),a,f,l,o));else if(f==="*")this._walk(a,m=>{h(this._trace(u,a[m],J6(n,m),a,m,l,!0,!0))});else if(f==="..")h(this._trace(u,a,n,t,c,l,o)),this._walk(a,m=>{typeof a[m]=="object"&&h(this._trace(e.slice(),a[m],J6(n,m),a,m,l,!0))});else{if(f==="^")return this._hasParentSelector=!0,{path:n.slice(0,-1),expr:u,isParentSelector:!0};if(f==="~")return i={path:J6(n,f),value:c,parent:t,parentProperty:null},this._handleCallback(i,l,"property"),i;if(f==="$")h(this._trace(u,a,n,null,null,l,o));else if(/^(-?\d*):(-?\d*):?(\d*)$/u.test(f))h(this._slice(f,u,a,n,t,c,l));else if(f.indexOf("?(")===0){if(this.currEval===!1)throw new Error("Eval [?(expr)] prevented in JSONPath expression.");let m=f.replace(/^\?\((.*?)\)$/u,"$1"),v=/@.?([^?]*)[['](\??\(.*?\))(?!.\)\])[\]']/gu.exec(m);v?this._walk(a,p=>{let g=[v[2]],y=v[1]?a[p][v[1]]:a[p];this._trace(g,y,n,t,c,l,!0).length>0&&h(this._trace(u,a[p],J6(n,p),a,p,l,!0))}):this._walk(a,p=>{this._eval(m,a[p],p,n,t,c)&&h(this._trace(u,a[p],J6(n,p),a,p,l,!0))})}else if(f[0]==="("){if(this.currEval===!1)throw new Error("Eval [(expr)] prevented in JSONPath expression.");h(this._trace(V7(this._eval(f,a,n.at(-1),n.slice(0,-1),t,c),u),a,n,t,c,l,o))}else if(f[0]==="@"){let m=!1,v=f.slice(1,-2);switch(v){case"scalar":(!a||!["object","function"].includes(typeof a))&&(m=!0);break;case"boolean":case"string":case"undefined":case"function":typeof a===v&&(m=!0);break;case"integer":Number.isFinite(a)&&!(a%1)&&(m=!0);break;case"number":Number.isFinite(a)&&(m=!0);break;case"nonFinite":typeof a=="number"&&!Number.isFinite(a)&&(m=!0);break;case"object":a&&typeof a===v&&(m=!0);break;case"array":Array.isArray(a)&&(m=!0);break;case"other":m=this.currOtherTypeCallback(a,n,t,c);break;case"null":a===null&&(m=!0);break;default:throw new TypeError("Unknown value type "+v)}if(m)return i={path:n,value:a,parent:t,parentProperty:c},this._handleCallback(i,l,"value"),i}else if(f[0]==="`"&&a&&Object.hasOwn(a,f.slice(1))){let m=f.slice(1);h(this._trace(u,a[m],J6(n,m),a,m,l,o,!0))}else if(f.includes(",")){let m=f.split(",");for(let v of m)h(this._trace(V7(v,u),a,n,t,c,l,!0))}else!s&&a&&Object.hasOwn(a,f)&&h(this._trace(u,a[f],J6(n,f),a,f,l,o,!0))}if(this._hasParentSelector)for(let m=0;m<d.length;m++){let v=d[m];if(v&&v.isParentSelector){let p=this._trace(v.expr,a,v.path,t,c,l,o);if(Array.isArray(p)){d[m]=p[0];let g=p.length;for(let y=1;y<g;y++)m++,d.splice(m,0,p[y])}else d[m]=p}}return d};$4.prototype._walk=function(e,a){if(Array.isArray(e)){let n=e.length;for(let t=0;t<n;t++)a(t)}else e&&typeof e=="object"&&Object.keys(e).forEach(n=>{a(n)})};$4.prototype._slice=function(e,a,n,t,c,l,o){if(!Array.isArray(n))return;let s=n.length,i=e.split(":"),f=i[2]&&Number.parseInt(i[2])||1,u=i[0]&&Number.parseInt(i[0])||0,d=i[1]&&Number.parseInt(i[1])||s;u=u<0?Math.max(0,u+s):Math.min(s,u),d=d<0?Math.max(0,d+s):Math.min(s,d);let h=[];for(let m=u;m<d;m+=f)this._trace(V7(m,a),n,t,c,l,o,!0).forEach(p=>{h.push(p)});return h};$4.prototype._eval=function(e,a,n,t,c,l){this.currSandbox._$_parentProperty=l,this.currSandbox._$_parent=c,this.currSandbox._$_property=n,this.currSandbox._$_root=this.json,this.currSandbox._$_v=a;let o=e.includes("@path");o&&(this.currSandbox._$_path=$4.toPathString(t.concat([n])));let s=this.currEval+"Script:"+e;if(!$4.cache[s]){let i=e.replaceAll("@parentProperty","_$_parentProperty").replaceAll("@parent","_$_parent").replaceAll("@property","_$_property").replaceAll("@root","_$_root").replaceAll(/@([.\s)[])/gu,"_$_v$1");if(o&&(i=i.replaceAll("@path","_$_path")),this.currEval==="safe"||this.currEval===!0||this.currEval===void 0)$4.cache[s]=new this.safeVm.Script(i);else if(this.currEval==="native")$4.cache[s]=new this.vm.Script(i);else if(typeof this.currEval=="function"&&this.currEval.prototype&&Object.hasOwn(this.currEval.prototype,"runInNewContext")){let f=this.currEval;$4.cache[s]=new f(i)}else if(typeof this.currEval=="function")$4.cache[s]={runInNewContext:f=>this.currEval(i,f)};else throw new TypeError(`Unknown "eval" property "${this.currEval}"`)}try{return $4.cache[s].runInNewContext(this.currSandbox)}catch(i){if(this.ignoreEvalErrors)return!1;throw new Error("jsonPath: "+i.message+": "+e)}};$4.cache={};$4.toPathString=function(e){let a=e,n=a.length,t="$";for(let c=1;c<n;c++)/^(~|\^|@.*?\(\))$/u.test(a[c])||(t+=/^[0-9*]+$/u.test(a[c])?"["+a[c]+"]":"['"+a[c]+"']");return t};$4.toPointer=function(e){let a=e,n=a.length,t="";for(let c=1;c<n;c++)/^(~|\^|@.*?\(\))$/u.test(a[c])||(t+="/"+a[c].toString().replaceAll("~","~0").replaceAll("/","~1"));return t};$4.toPathArray=function(e){let{cache:a}=$4;if(a[e])return a[e].concat();let n=[],c=e.replaceAll(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/gu,";$&;").replaceAll(/[['](\??\(.*?\))[\]'](?!.\])/gu,function(l,o){return"[#"+(n.push(o)-1)+"]"}).replaceAll(/\[['"]([^'\]]*)['"]\]/gu,function(l,o){return"['"+o.replaceAll(".","%@%").replaceAll("~","%%@@%%")+"']"}).replaceAll("~",";~;").replaceAll(/['"]?\.['"]?(?![^[]*\])|\[['"]?/gu,";").replaceAll("%@%",".").replaceAll("%%@@%%","~").replaceAll(/(?:;)?(\^+)(?:;)?/gu,function(l,o){return";"+o.split("").join(";")+";"}).replaceAll(/;;;|;;/gu,";..;").replaceAll(/;$|'?\]|'$/gu,"").split(";").map(function(l){let o=l.match(/#(\d+)/u);return!o||!o[1]?l:n[o[1]]});return a[e]=c,a[e].concat()};$4.prototype.safeVm={Script:W7};var Rx=function(e,a,n){let t=e.length;for(let c=0;c<t;c++){let l=e[c];n(l)&&a.push(e.splice(c--,1)[0])}},G7=class{constructor(a){this.code=a}runInNewContext(a){let n=this.code,t=Object.keys(a),c=[];Rx(t,c,f=>typeof a[f]=="function");let l=t.map(f=>a[f]);n=c.reduce((f,u)=>{let d=a[u].toString();return/function/u.test(d)||(d="function "+d),"var "+u+"="+d+";"+f},"")+n,!/(['"])use strict\1/u.test(n)&&!t.includes("arguments")&&(n="var arguments = undefined;"+n),n=n.replace(/;\s*$/u,"");let s=n.lastIndexOf(";"),i=s!==-1?n.slice(0,s+1)+" return "+n.slice(s+1):" return "+n;return new Function(...t,i)(...l)}};$4.prototype.vm={Script:G7};function qx(e,a=e.state){let n=new Set;for(let{from:t,to:c}of e.visibleRanges){let l=t;for(;l<=c;){let o=a.doc.lineAt(l);n.has(o)||n.add(o),l=o.to+1}}return n}function K7(e){let a=e.selection.main.head;return e.doc.lineAt(a)}function id(e,a){let n=0;e:for(let t=0;t<e.length;t++)switch(e[t]){case" ":case"\xA0":{n+=1;continue e}case"	":{n+=a-n%a;continue e}case"\r":continue e;default:break e}return n}var sc=Fs.define({combine(e){return Is(e,{highlightActiveBlock:!0,hideFirstIndent:!1,markerType:"fullScope",thickness:1})}}),Q7=class{constructor(a,n,t,c){this.lines=a,this.state=n,this.map=new Map,this.unitWidth=t,this.markerType=c;for(let l of this.lines)this.add(l);this.state.facet(sc).highlightActiveBlock&&this.findAndSetActiveLines()}has(a){return this.map.has(typeof a=="number"?a:a.number)}get(a){let n=this.map.get(typeof a=="number"?a:a.number);if(!n)throw new Error("Line not found in indentation map");return n}set(a,n,t){let c=!a.text.trim().length,l={line:a,col:n,level:t,empty:c};return this.map.set(l.line.number,l),l}add(a){if(this.has(a))return this.get(a);if(!a.length||!a.text.trim().length){if(a.number===1)return this.set(a,0,0);if(a.number===this.state.doc.lines){let o=this.closestNonEmpty(a,-1);return this.set(a,0,o.level)}let c=this.closestNonEmpty(a,-1),l=this.closestNonEmpty(a,1);return c.level>=l.level&&this.markerType!=="codeOnly"?this.set(a,0,c.level):c.empty&&c.level===0&&l.level!==0?this.set(a,0,0):l.level>c.level?this.set(a,0,c.level+1):this.set(a,0,l.level)}let n=id(a.text,this.state.tabSize),t=Math.floor(n/this.unitWidth);return this.set(a,n,t)}closestNonEmpty(a,n){let t=a.number+n;for(;n===-1?t>=1:t<=this.state.doc.lines;){if(this.has(t)){let o=this.get(t);if(!o.empty)return o}let l=this.state.doc.line(t);if(l.text.trim().length){let o=id(l.text,this.state.tabSize),s=Math.floor(o/this.unitWidth);return this.set(l,o,s)}t+=n}let c=this.state.doc.line(n===-1?1:this.state.doc.lines);return this.set(c,0,0)}findAndSetActiveLines(){let a=K7(this.state);if(!this.has(a))return;let n=this.get(a);if(this.has(n.line.number+1)){let l=this.get(n.line.number+1);l.level>n.level&&(n=l)}if(this.has(n.line.number-1)){let l=this.get(n.line.number-1);l.level>n.level&&(n=l)}if(n.level===0)return;n.active=n.level;let t,c;for(t=n.line.number;t>1;t--){if(!this.has(t-1))continue;let l=this.get(t-1);if(l.level<n.level)break;l.active=n.level}for(c=n.line.number;c<this.state.doc.lines;c++){if(!this.has(c+1))continue;let l=this.get(c+1);if(l.level<n.level)break;l.active=n.level}}};function $x(e){let a={light:"#F0F1F2",dark:"#2B3245",activeLight:"#E4E5E6",activeDark:"#3C445C"},n=a;return e&&(n=Object.assign(Object.assign({},a),e)),t6.baseTheme({"&light":{"--indent-marker-bg-color":n.light,"--indent-marker-active-bg-color":n.activeLight},"&dark":{"--indent-marker-bg-color":n.dark,"--indent-marker-active-bg-color":n.activeDark},".cm-line":{position:"relative"},".cm-indent-markers::before":{content:'""',position:"absolute",top:0,left:"2px",right:0,bottom:0,background:"var(--indent-markers)",pointerEvents:"none",zIndex:"-1"}})}function oc(e,a,n,t,c){return`${`repeating-linear-gradient(to right, var(${e}) 0 ${a}px, transparent ${a}px ${n}ch)`} ${t*n}.5ch/calc(${n*c}ch - 1px) no-repeat`}function Dx(e,a,n,t,c){let{level:l,active:o}=e;if(c=c??t,n&&l===0)return[];let s=n?1:0,i=[];if(o!==void 0){let f=o-s-1;f>0&&i.push(oc("--indent-marker-bg-color",t,a,s,f)),i.push(oc("--indent-marker-active-bg-color",c,a,o-1,1)),o!==l&&i.push(oc("--indent-marker-bg-color",t,a,o,l-o))}else i.push(oc("--indent-marker-bg-color",t,a,s,l-s));return i.join(",")}var X7=class{constructor(a){this.view=a,this.unitWidth=v8(a.state),this.currentLineNumber=K7(a.state).number,this.generate(a.state)}update(a){let n=v8(a.state),t=n!==this.unitWidth;t&&(this.unitWidth=n);let c=K7(a.state).number,l=c!==this.currentLineNumber;this.currentLineNumber=c;let o=a.state.facet(sc).highlightActiveBlock&&l;(a.docChanged||a.viewportChanged||t||o)&&this.generate(a.state)}generate(a){let n=new sr,t=qx(this.view,a),{hideFirstIndent:c,markerType:l,thickness:o,activeThickness:s}=a.facet(sc),i=new Q7(t,a,this.unitWidth,l);for(let f of t){let u=i.get(f.number);if(!u?.level)continue;let d=Dx(u,this.unitWidth,c,o,s);n.add(f.from,f.from,ir.line({class:"cm-indent-markers",attributes:{style:`--indent-markers: ${d}`}}))}this.decorations=n.finish()}};function fd(e={}){return[sc.of(e),$x(e.colors),fr.fromClass(X7,{decorations:a=>a.decorations})]}var Fx=["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"],Bx=["mainAxis","crossAxis","limiter"];function kp(e,a){if(e==null)return{};var n,t,c=(function(o,s){if(o==null)return{};var i={};for(var f in o)if({}.hasOwnProperty.call(o,f)){if(s.indexOf(f)!==-1)continue;i[f]=o[f]}return i})(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function ud(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),n.push.apply(n,t)}return n}function N2(e){for(var a=1;a<arguments.length;a++){var n=arguments[a]!=null?arguments[a]:{};a%2?ud(Object(n),!0).forEach(function(t){He(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ud(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function dd(e,a,n,t,c,l,o){try{var s=e[l](o),i=s.value}catch(f){return void n(f)}s.done?a(i):Promise.resolve(i).then(t,c)}function z1(e){return function(){var a=this,n=arguments;return new Promise(function(t,c){var l=e.apply(a,n);function o(i){dd(l,t,c,o,s,"next",i)}function s(i){dd(l,t,c,o,s,"throw",i)}o(void 0)})}}function Np(e,a){Ap(e,a),a.add(e)}function e0(e,a,n){Ap(e,a),a.set(e,n)}function Ap(e,a){if(a.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function y4(e,a,n){return e.set(Z0(e,a),n),n}function k2(e,a){return e.get(Z0(e,a))}function Z0(e,a,n){if(typeof e=="function"?e===a:e.has(a))return arguments.length<3?a:n;throw new TypeError("Private element is not present on this object")}function He(e,a,n){return(a=(function(t){var c=(function(l,o){if(typeof l!="object"||!l)return l;var s=l[Symbol.toPrimitive];if(s!==void 0){var i=s.call(l,o||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(l)})(t,"string");return typeof c=="symbol"?c:c+""})(a))in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}var pd,Y7,vd,Z7;typeof window<"u"&&((Y7=(pd=(Z7=(vd=window).__svelte)!==null&&Z7!==void 0?Z7:vd.__svelte={}).v)!==null&&Y7!==void 0?Y7:pd.v=new Set).add("5");var gn=!1;gn=!0;var z3=Symbol(),Ix=!1,Jt=Array.isArray,Ux=Array.prototype.indexOf,Sc=Array.from,Hx=Object.defineProperty,C6=Object.getOwnPropertyDescriptor,Tp=Object.getOwnPropertyDescriptors,Wx=Object.prototype,Vx=Array.prototype,ls=Object.getPrototypeOf,md=Object.isExtensible;function bt(e){return typeof e=="function"}var Jx=()=>{};function Gx(e){return e()}function So(e){for(var a=0;a<e.length;a++)e[a]()}function Op(){var e,a;return{promise:new Promise((n,t)=>{e=n,a=t}),resolve:e,reject:a}}var Kx=1<<24,zn=16,c5=32,Rp=64,os=128,Ae=512,b3=1024,_e=2048,A6=4096,Ge=8192,bn=16384,ss=32768,Ya=65536,Qx=1<<17,qp=1<<18,$p=1<<19,m6=1<<25,Rc=32768,ko=1<<21,sa=1<<23,Ke=Symbol("$state"),Dp=Symbol("legacy props"),Xx=Symbol(""),V8=new class extends Error{constructor(){super(...arguments),He(this,"name","StaleReactionError"),He(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};function Gt(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Fp(e){return e===this.v}function Bp(e,a){return e!=e?a==a:e!==a||e!==null&&typeof e=="object"||typeof e=="function"}function Ip(e){return!Bp(e,this.v)}var X4=null;function cn(e){X4=e}function ga(e){return Up().get(e)}function f1(e){X4={p:X4,i:!1,c:null,e:null,s:e,x:null,l:gn&&!(arguments.length>1&&arguments[1]!==void 0&&arguments[1])?{s:null,u:null,$:[]}:null}}function u1(e){var a=X4,n=a.e;if(n!==null)for(var t of(a.e=null,n))ov(t);return e!==void 0&&(a.x=e),a.i=!0,X4=a.p,e??{}}function yn(){return!gn||X4!==null&&X4.l===null}function Up(e){var a,n;return X4===null&&Gt(),(n=(a=X4).c)!==null&&n!==void 0?n:a.c=new Map((function(t){for(var c=t.p;c!==null;){var l=c.c;if(l!==null)return l;c=c.p}return null})(X4)||void 0)}var Wa=[];function Hp(){var e=Wa;Wa=[],So(e)}function Za(e){if(Wa.length===0&&!At){var a=Wa;queueMicrotask(()=>{a===Wa&&Hp()})}Wa.push(e)}function Yx(){for(;Wa.length>0;)Hp()}function Wp(e){var a=F4;if(a===null)return D4.f|=sa,e;if((a.f&ss)===0){if((a.f&os)===0)throw e;a.b.error(e)}else ln(e,a)}function ln(e,a){for(;a!==null;){if((a.f&os)!==0)try{return void a.b.error(e)}catch(n){e=n}a=a.parent}throw e}var kc=new Set,K4=null,Va=null,ve=null,pe=[],l5=null,No=!1,At=!1,qc=new WeakMap,ic=new WeakMap,Ba=new WeakMap,Ia=new WeakMap,fc=new WeakMap,Nc=new WeakMap,Ac=new WeakMap,Q3=new WeakSet,e8=class e{constructor(){Np(this,Q3),He(this,"committed",!1),He(this,"current",new Map),He(this,"previous",new Map),e0(this,qc,new Set),e0(this,ic,new Set),e0(this,Ba,0),e0(this,Ia,0),e0(this,fc,null),e0(this,Nc,[]),e0(this,Ac,[]),He(this,"skipped_effects",new Set),He(this,"is_fork",!1)}is_deferred(){return this.is_fork||k2(Ia,this)>0}process(a){pe=[],Va=null,this.apply();var n,t={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(var c of a)Z0(Q3,this,Vp).call(this,c,t);this.is_fork||Z0(Q3,this,Zx).call(this),this.is_deferred()?(Z0(Q3,this,Y8).call(this,t.effects),Z0(Q3,this,Y8).call(this,t.render_effects),Z0(Q3,this,Y8).call(this,t.block_effects)):(Va=this,K4=null,hd(t.render_effects),hd(t.effects),Va=null,(n=k2(fc,this))===null||n===void 0||n.resolve()),ve=null}capture(a,n){var t;this.previous.has(a)||this.previous.set(a,n),(a.f&sa)===0&&(this.current.set(a,a.v),(t=ve)===null||t===void 0||t.set(a,a.v))}activate(){K4=this,this.apply()}deactivate(){K4===this&&(K4=null,ve=null)}flush(){if(this.activate(),pe.length>0){if(Gp(),K4!==null&&K4!==this)return}else k2(Ba,this)===0&&this.process([]);this.deactivate()}discard(){for(var a of k2(ic,this))a(this);k2(ic,this).clear()}increment(a){y4(Ba,this,k2(Ba,this)+1),a&&y4(Ia,this,k2(Ia,this)+1)}decrement(a){y4(Ba,this,k2(Ba,this)-1),a&&y4(Ia,this,k2(Ia,this)-1),this.revive()}revive(){for(var a of k2(Nc,this))M3(a,_e),a8(a);for(var n of k2(Ac,this))M3(n,A6),a8(n);y4(Nc,this,[]),y4(Ac,this,[]),this.flush()}oncommit(a){k2(qc,this).add(a)}ondiscard(a){k2(ic,this).add(a)}settled(){var a;return((a=k2(fc,this))!==null&&a!==void 0?a:y4(fc,this,Op())).promise}static ensure(){if(K4===null){var a=K4=new e;kc.add(K4),At||e.enqueue(()=>{K4===a&&a.flush()})}return K4}static enqueue(a){Za(a)}apply(){}};function Vp(e,a){e.f^=b3;for(var n=e.first;n!==null;){var t,c=n.f,l=!!(96&c),o=l&&(c&b3)!==0||(c&Ge)!==0||this.skipped_effects.has(n);if((n.f&os)!==0&&(t=n.b)!==null&&t!==void 0&&t.is_pending()&&(a={parent:a,effect:n,effects:[],render_effects:[],block_effects:[]}),!o&&n.fn!==null){l?n.f^=b3:4&c?a.effects.push(n):Ln(n)&&((n.f&zn)!==0&&a.block_effects.push(n),sn(n));var s=n.first;if(s!==null){n=s;continue}}var i=n.parent;for(n=n.next;n===null&&i!==null;)i===a.effect&&(Z0(Q3,this,Y8).call(this,a.effects),Z0(Q3,this,Y8).call(this,a.render_effects),Z0(Q3,this,Y8).call(this,a.block_effects),a=a.parent),n=i.next,i=i.parent}}function Y8(e){for(var a of e)((a.f&_e)!==0?k2(Nc,this):k2(Ac,this)).push(a),Z0(Q3,this,Jp).call(this,a.deps),M3(a,b3)}function Jp(e){if(e!==null)for(var a of e)2&a.f&&(a.f&Rc)!==0&&(a.f^=Rc,Z0(Q3,this,Jp).call(this,a.deps))}function Zx(){if(k2(Ia,this)===0){for(var e of k2(qc,this))e();k2(qc,this).clear()}k2(Ba,this)===0&&Z0(Q3,this,eL).call(this)}function eL(){if(kc.size>1){this.previous.clear();var e=ve,a=!0,n={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(var t of kc)if(t!==this){var c=[];for(var[l,o]of this.current){if(t.current.has(l)){if(!a||o===t.current.get(l))continue;t.current.set(l,o)}c.push(l)}if(c.length!==0){var s=[...t.current.keys()].filter(m=>!this.current.has(m));if(s.length>0){var i=pe;pe=[];var f=new Set,u=new Map;for(var d of c)Kp(d,s,f,u);if(pe.length>0){for(var h of(K4=t,t.apply(),pe))Z0(Q3,t,Vp).call(t,h,n);t.deactivate()}pe=i}}}else a=!1;K4=null,ve=e}this.committed=!0,kc.delete(this)}function t0(e){var a=At;At=!0;try{for(;;){var n;if(Yx(),pe.length===0&&((n=K4)===null||n===void 0||n.flush(),pe.length===0))return void(l5=null);Gp()}}finally{At=a}}function Gp(){var e=Ga;No=!0;try{var a=0;for($c(!0);pe.length>0;){var n=e8.ensure();a++>1e3&&aL(),n.process(pe),ia.clear()}}finally{No=!1,$c(e),l5=null}}function aL(){try{(function(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")})()}catch(e){ln(e,l5)}}var g6=null;function hd(e){var a=e.length;if(a!==0){for(var n=0;n<a;){var t,c=e[n++];if(!(24576&c.f)&&Ln(c)&&(g6=new Set,sn(c),c.deps===null&&c.first===null&&c.nodes===null&&(c.teardown===null&&c.ac===null?dv(c):c.fn=null),((t=g6)===null||t===void 0?void 0:t.size)>0)){for(var l of(ia.clear(),g6))if(!(24576&l.f)){for(var o=[l],s=l.parent;s!==null;)g6.has(s)&&(g6.delete(s),o.push(s)),s=s.parent;for(var i=o.length-1;i>=0;i--){var f=o[i];24576&f.f||sn(f)}}g6.clear()}}g6=null}}function Kp(e,a,n,t){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(var c of e.reactions){var l=c.f;2&l?Kp(c,a,n,t):4194320&l&&(l&_e)===0&&Qp(c,a,t)&&(M3(c,_e),a8(c))}}function Qp(e,a,n){var t=n.get(e);if(t!==void 0)return t;if(e.deps!==null)for(var c of e.deps){if(a.includes(c))return!0;if(2&c.f&&Qp(c,a,n))return n.set(c,!0),!0}return n.set(e,!1),!1}function a8(e){for(var a=l5=e;a.parent!==null;){var n=(a=a.parent).f;if(No&&a===F4&&(n&zn)!==0&&(n&qp)===0)return;if(96&n){if((n&b3)===0)return;a.f^=b3}}pe.push(a)}var Z6=new WeakMap,ra=new WeakMap,nL=new WeakMap,Ua=new WeakMap,eo=new WeakMap,ta=new WeakMap,ea=new WeakMap,y6=new WeakMap,G6=new WeakMap,Ja=new WeakMap,Z8=new WeakMap,P8=new WeakMap,en=new WeakMap,yt=new WeakMap,T8=new WeakMap,gd=new WeakMap,Q6=new WeakSet,Ao=class{constructor(a,n,t){var c,l,o,s;Np(this,Q6),He(this,"parent",void 0),e0(this,Z6,!1),e0(this,ra,void 0),e0(this,nL,null),e0(this,Ua,void 0),e0(this,eo,void 0),e0(this,ta,void 0),e0(this,ea,null),e0(this,y6,null),e0(this,G6,null),e0(this,Ja,null),e0(this,Z8,null),e0(this,P8,0),e0(this,en,0),e0(this,yt,!1),e0(this,T8,null),e0(this,gd,(c=()=>(y4(T8,this,_6(k2(P8,this))),()=>{y4(T8,this,null)}),o=0,s=_6(0),()=>{Pt()&&(r(s),Mn(()=>(o===0&&(l=F(()=>c(()=>_t(s)))),o+=1,()=>{Za(()=>{var i;(o-=1)==0&&((i=l)===null||i===void 0||i(),l=void 0,_t(s))})})))})),y4(ra,this,a),y4(Ua,this,n),y4(eo,this,t),this.parent=F4.b,y4(Z6,this,!!k2(Ua,this).pending),y4(ta,this,xn(()=>{F4.b=this;var i=Z0(Q6,this,tL).call(this);try{y4(ea,this,Qe(()=>t(i)))}catch(f){this.error(f)}return k2(en,this)>0?Z0(Q6,this,bd).call(this):y4(Z6,this,!1),()=>{var f;(f=k2(Z8,this))===null||f===void 0||f.remove()}},589952))}is_pending(){return k2(Z6,this)||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!k2(Ua,this).pending}update_pending_count(a){Z0(Q6,this,Xp).call(this,a),y4(P8,this,k2(P8,this)+a),k2(T8,this)&&n8(k2(T8,this),k2(P8,this))}get_effect_pending(){return k2(gd,this).call(this),r(k2(T8,this))}error(a){var n=k2(Ua,this).onerror,t=k2(Ua,this).failed;if(k2(yt,this)||!n&&!t)throw a;k2(ea,this)&&(y3(k2(ea,this)),y4(ea,this,null)),k2(y6,this)&&(y3(k2(y6,this)),y4(y6,this,null)),k2(G6,this)&&(y3(k2(G6,this)),y4(G6,this,null));var c=!1,l=!1,o=()=>{c?console.warn("https://svelte.dev/e/svelte_boundary_reset_noop"):(c=!0,l&&(function(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")})(),e8.ensure(),y4(P8,this,0),k2(G6,this)!==null&&on(k2(G6,this),()=>{y4(G6,this,null)}),y4(Z6,this,this.has_pending_snippet()),y4(ea,this,Z0(Q6,this,zd).call(this,()=>(y4(yt,this,!1),Qe(()=>k2(eo,this).call(this,k2(ra,this)))))),k2(en,this)>0?Z0(Q6,this,bd).call(this):y4(Z6,this,!1))},s=D4;try{W3(null),l=!0,n?.(a,o),l=!1}catch(i){ln(i,k2(ta,this)&&k2(ta,this).parent)}finally{W3(s)}t&&Za(()=>{y4(G6,this,Z0(Q6,this,zd).call(this,()=>{e8.ensure(),y4(yt,this,!0);try{return Qe(()=>{t(k2(ra,this),()=>a,()=>o)})}catch(i){return ln(i,k2(ta,this).parent),null}finally{y4(yt,this,!1)}}))})}};function tL(){var e=k2(ra,this);return k2(Z6,this)&&(y4(Z8,this,fa()),k2(ra,this).before(k2(Z8,this)),e=k2(Z8,this)),e}function zd(e){var a=F4,n=D4,t=X4;ge(k2(ta,this)),W3(k2(ta,this)),cn(k2(ta,this).ctx);try{return e()}catch(c){return Wp(c),null}finally{ge(a),W3(n),cn(t)}}function bd(){var e=k2(Ua,this).pending;k2(ea,this)!==null&&(y4(Ja,this,document.createDocumentFragment()),k2(Ja,this).append(k2(Z8,this)),mv(k2(ea,this),k2(Ja,this))),k2(y6,this)===null&&y4(y6,this,Qe(()=>e(k2(ra,this))))}function Xp(e){var a;this.has_pending_snippet()?(y4(en,this,k2(en,this)+e),k2(en,this)===0&&(y4(Z6,this,!1),k2(y6,this)&&on(k2(y6,this),()=>{y4(y6,this,null)}),k2(Ja,this)&&(k2(ra,this).before(k2(Ja,this)),y4(Ja,this,null)))):this.parent&&Z0(Q6,a=this.parent,Xp).call(a,e)}function Yp(e,a,n,t){var c=yn()?Kt:Z2;if(n.length!==0||e.length!==0){var l=K4,o=F4,s=(function(){var f=F4,u=D4,d=X4,h=K4;return function(){var m=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];ge(f),W3(u),cn(d),m&&h?.activate()}})();e.length>0?Promise.all(e).then(()=>{s();try{return i()}finally{l?.deactivate(),uc()}}):i()}else t(a.map(c));function i(){Promise.all(n.map(f=>(function(u){var d=F4;d===null&&(function(){throw new Error("https://svelte.dev/e/async_derived_orphan")})();var h=d.b,m=void 0,v=_6(z3),p=!D4,g=new Map;return(function(y){Pe(4718592,y,!0)})(()=>{var y=Op();m=y.promise;try{Promise.resolve(u()).then(y.resolve,y.reject).then(()=>{L===K4&&L.committed&&L.deactivate(),uc()})}catch(E){y.reject(E),uc()}var L=K4;if(p){var S,j=!h.is_pending();h.update_pending_count(1),L.increment(j),(S=g.get(L))===null||S===void 0||S.reject(V8),g.delete(L),g.set(L,y)}var x=function(E){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0;if(L.activate(),P)P!==V8&&(v.f|=sa,n8(v,P));else for(var[I,k]of((v.f&sa)!==0&&(v.f^=sa),n8(v,E),g)){if(g.delete(I),I===L)break;k.reject(V8)}p&&(h.update_pending_count(-1),L.decrement(j))};y.promise.then(x,E=>x(null,E||"unknown"))}),s5(()=>{for(var y of g.values())y.reject(V8)}),new Promise(y=>{function L(S){function j(){S===m?y(v):L(m)}S.then(j,j)}L(m)})})(f))).then(f=>{s();try{t([...a.map(c),...f])}catch(u){(o.f&bn)===0&&ln(u,o)}l?.deactivate(),uc()}).catch(f=>{ln(f,o)})}}function uc(){ge(null),W3(null),cn(null)}function Kt(e){var a=D4!==null&&2&D4.f?D4:null;return F4!==null&&(F4.f|=$p),{ctx:X4,deps:null,effects:null,equals:Fp,f:2050,fn:e,reactions:null,rv:0,v:z3,wv:0,parent:a??F4,ac:null}}function I3(e){var a=Kt(e);return hv(a),a}function Z2(e){var a=Kt(e);return a.equals=Ip,a}function Zp(e){var a=e.effects;if(a!==null){e.effects=null;for(var n=0;n<a.length;n+=1)y3(a[n])}}function is(e){var a,n=F4;ge((function(t){for(var c=t.parent;c!==null;){if(!(2&c.f))return(c.f&bn)===0?c:null;c=c.parent}return null})(e));try{e.f&=-32769,Zp(e),a=yv(e)}finally{ge(n)}return a}function ev(e){var a,n,t=is(e);e.equals(t)||((a=K4)!==null&&a!==void 0&&a.is_fork||(e.v=t),e.wv=zv()),i8||(ve!==null?(Pt()||(n=K4)!==null&&n!==void 0&&n.is_fork)&&ve.set(e,t):M3(e,(e.f&Ae)===0?A6:b3))}var j6,av,nv,tv,ao=new Set,ia=new Map,yd=!1;function _6(e,a){return{f:0,v:e,reactions:null,equals:Fp,rv:0,wv:0}}function h6(e,a){var n=_6(e);return hv(n),n}function R(e){var a,n,t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],c=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],l=_6(e);return t||(l.equals=Ip),gn&&c&&X4!==null&&X4.l!==null&&((n=(a=X4.l).s)!==null&&n!==void 0?n:a.s=[]).push(l),l}function Y3(e,a){return z(e,F(()=>r(e))),a}function z(e,a){var n,t=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return D4===null||Ve&&(D4.f&Qx)===0||!yn()||!(4325394&D4.f)||(n=S6)!==null&&n!==void 0&&n.includes(e)||(function(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")})(),n8(e,t?J8(a):a)}function n8(e,a){if(!e.equals(a)){var n=e.v;i8?ia.set(e,a):ia.set(e,n),e.v=a;var t=e8.ensure();t.capture(e,n),2&e.f&&((e.f&_e)!==0&&is(e),M3(e,(e.f&Ae)!==0?b3:A6)),e.wv=zv(),rv(e,_e),!yn()||F4===null||(F4.f&b3)===0||96&F4.f||(ie===null?(function(c){ie=c})([e]):ie.push(e)),!t.is_fork&&ao.size>0&&!yd&&(function(){yd=!1;var c=Ga;$c(!0);var l=Array.from(ao);try{for(var o of l)(o.f&b3)!==0&&M3(o,A6),Ln(o)&&sn(o)}finally{$c(c)}ao.clear()})()}return a}function Md(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,n=r(e),t=a===1?n++:n--;return z(e,n),t}function _t(e){z(e,e.v+1)}function rv(e,a){var n=e.reactions;if(n!==null)for(var t=yn(),c=n.length,l=0;l<c;l++){var o=n[l],s=o.f;if(t||o!==F4){var i=(s&_e)===0;if(i&&M3(o,a),2&s){var f,u=o;(f=ve)===null||f===void 0||f.delete(u),(s&Rc)===0&&(s&Ae&&(o.f|=Rc),rv(u,A6))}else i&&((s&zn)!==0&&g6!==null&&g6.add(o),a8(o))}}}function J8(e){if(typeof e!="object"||e===null||Ke in e)return e;var a=ls(e);if(a!==Wx&&a!==Vx)return e;var n=new Map,t=Jt(e),c=h6(0),l=Ka,o=s=>{if(Ka===l)return s();var i=D4,f=Ka;W3(null),Cd(l);var u=s();return W3(i),Cd(f),u};return t&&n.set("length",h6(e.length)),new Proxy(e,{defineProperty(s,i,f){"value"in f&&f.configurable!==!1&&f.enumerable!==!1&&f.writable!==!1||(function(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")})();var u=n.get(i);return u===void 0?u=o(()=>{var d=h6(f.value);return n.set(i,d),d}):z(u,f.value,!0),!0},deleteProperty(s,i){var f=n.get(i);if(f===void 0){if(i in s){var u=o(()=>h6(z3));n.set(i,u),_t(c)}}else z(f,z3),_t(c);return!0},get(s,i,f){var u;if(i===Ke)return e;var d=n.get(i),h=i in s;if(d===void 0&&(!h||(u=C6(s,i))!==null&&u!==void 0&&u.writable)&&(d=o(()=>h6(J8(h?s[i]:z3))),n.set(i,d)),d!==void 0){var m=r(d);return m===z3?void 0:m}return Reflect.get(s,i,f)},getOwnPropertyDescriptor(s,i){var f=Reflect.getOwnPropertyDescriptor(s,i);if(f&&"value"in f){var u=n.get(i);u&&(f.value=r(u))}else if(f===void 0){var d=n.get(i),h=d?.v;if(d!==void 0&&h!==z3)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return f},has(s,i){var f;if(i===Ke)return!0;var u=n.get(i),d=u!==void 0&&u.v!==z3||Reflect.has(s,i);return(u!==void 0||F4!==null&&(!d||(f=C6(s,i))!==null&&f!==void 0&&f.writable))&&(u===void 0&&(u=o(()=>h6(d?J8(s[i]):z3)),n.set(i,u)),r(u)===z3)?!1:d},set(s,i,f,u){var d,h=n.get(i),m=i in s;if(t&&i==="length")for(var v=f;v<h.v;v+=1){var p=n.get(v+"");p!==void 0?z(p,z3):v in s&&(p=o(()=>h6(z3)),n.set(v+"",p))}h===void 0?(!m||(d=C6(s,i))!==null&&d!==void 0&&d.writable)&&(z(h=o(()=>h6(void 0)),J8(f)),n.set(i,h)):(m=h.v!==z3,z(h,o(()=>J8(f))));var g=Reflect.getOwnPropertyDescriptor(s,i);if(g!=null&&g.set&&g.set.call(u,f),!m){if(t&&typeof i=="string"){var y=n.get("length"),L=Number(i);Number.isInteger(L)&&L>=y.v&&z(y,L+1)}_t(c)}return!0},ownKeys(s){r(c);var i=Reflect.ownKeys(s).filter(d=>{var h=n.get(d);return h===void 0||h.v!==z3});for(var[f,u]of n)u.v===z3||f in s||i.push(f);return i},setPrototypeOf(){(function(){throw new Error("https://svelte.dev/e/state_prototype_fixed")})()}})}function xd(e){try{if(e!==null&&typeof e=="object"&&Ke in e)return e[Ke]}catch{}return e}function rL(e,a){return Object.is(xd(e),xd(a))}function fa(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return document.createTextNode(e)}function Z3(e){return nv.call(e)}function Qt(e){return tv.call(e)}function q(e,a){return Z3(e)}function Y2(e){var a=Z3(e);return a instanceof Comment&&a.data===""?Qt(a):a}function J(e){for(var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,n=e;a--;)n=Qt(n);return n}var Ld=!1;function o5(e){var a=D4,n=F4;W3(null),ge(null);try{return e()}finally{W3(a),ge(n)}}function cv(e,a,n){var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:n;e.addEventListener(a,()=>o5(n));var c=e.__on_r;e.__on_r=c?()=>{c(),t(!0)}:()=>t(!0),Ld||(Ld=!0,document.addEventListener("reset",l=>{Promise.resolve().then(()=>{if(!l.defaultPrevented)for(var o of l.target.elements){var s;(s=o.__on_r)===null||s===void 0||s.call(o)}})},{capture:!0}))}function lv(e){F4===null&&(D4===null&&(function(){throw new Error("https://svelte.dev/e/effect_orphan")})(),(function(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")})()),i8&&(function(){throw new Error("https://svelte.dev/e/effect_in_teardown")})()}function Pe(e,a,n){var t=F4;t!==null&&(t.f&Ge)!==0&&(e|=Ge);var c={ctx:X4,deps:null,nodes:null,f:e|_e|Ae,first:null,fn:a,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};if(n)try{sn(c),c.f|=ss}catch(i){throw y3(c),i}else a!==null&&a8(c);var l=c;if(n&&l.deps===null&&l.teardown===null&&l.nodes===null&&l.first===l.last&&(l.f&$p)===0&&(l=l.first,(e&zn)!==0&&(e&Ya)!==0&&l!==null&&(l.f|=Ya)),l!==null&&(l.parent=t,t!==null&&(function(i,f){var u=f.last;u===null?f.last=f.first=i:(u.next=i,i.prev=u,f.last=i)})(l,t),D4!==null&&2&D4.f&&(e&Rp)===0)){var o,s=D4;((o=s.effects)!==null&&o!==void 0?o:s.effects=[]).push(l)}return c}function Pt(){return D4!==null&&!Ve}function s5(e){var a=Pe(8,null,!1);return M3(a,b3),a.teardown=e,a}function _o(e){lv();var a=F4.f;if(!(!D4&&(a&c5)!==0&&(a&ss)===0))return ov(e);var n,t=X4;((n=t.e)!==null&&n!==void 0?n:t.e=[]).push(e)}function ov(e){return Pe(1048580,e,!1)}function o3(e){return Pe(4,e,!1)}function Y(e,a){var n={effect:null,ran:!1,deps:e};X4.l.$.push(n),n.effect=Mn(()=>{e(),n.ran||(n.ran=!0,F(a))})}function L4(){var e=X4;Mn(()=>{for(var a of e.l.$){a.deps();var n=a.effect;(n.f&b3)!==0&&M3(n,A6),Ln(n)&&sn(n),a.ran=!1}})}function Mn(e){return Pe(8|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e,!0)}function E2(e){Yp(arguments.length>3&&arguments[3]!==void 0?arguments[3]:[],arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],a=>{Pe(8,()=>e(...a.map(r)),!0)})}function xn(e){return Pe(zn|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e,!0)}function sv(e){return Pe(Kx|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e,!0)}function Qe(e){return Pe(524320,e,!0)}function iv(e){var a=e.teardown;if(a!==null){var n=i8,t=D4;wd(!0),W3(null);try{a.call(null)}finally{wd(n),W3(t)}}}function fv(e){var a=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n=e.first;e.first=e.last=null;for(var t,c=function(){var l=n.ac;l!==null&&o5(()=>{l.abort(V8)}),t=n.next,(n.f&Rp)!==0?n.parent=null:y3(n,a),n=t};n!==null;)c()}function y3(e){var a=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],n=!1;!a&&(e.f&qp)===0||e.nodes===null||e.nodes.end===null||(uv(e.nodes.start,e.nodes.end),n=!0),fv(e,a&&!n),Dc(e,0),M3(e,bn);var t=e.nodes&&e.nodes.t;if(t!==null)for(var c of t)c.stop();iv(e);var l=e.parent;l!==null&&l.first!==null&&dv(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=null}function uv(e,a){for(;e!==null;){var n=e===a?null:Qt(e);e.remove(),e=n}}function dv(e){var a=e.parent,n=e.prev,t=e.next;n!==null&&(n.next=t),t!==null&&(t.prev=n),a!==null&&(a.first===e&&(a.first=t),a.last===e&&(a.last=n))}function on(e,a){var n=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],t=[];pv(e,t,!0);var c=()=>{n&&y3(e),a&&a()},l=t.length;if(l>0){var o=()=>--l||c();for(var s of t)s.out(o)}else c()}function pv(e,a,n){if((e.f&Ge)===0){e.f^=Ge;var t=e.nodes&&e.nodes.t;if(t!==null)for(var c of t)(c.is_global||n)&&a.push(c);for(var l=e.first;l!==null;){var o=l.next;pv(l,a,((l.f&Ya)!==0||(l.f&c5)!==0&&(e.f&zn)!==0)&&n),l=o}}}function Eo(e){vv(e,!0)}function vv(e,a){if((e.f&Ge)!==0){e.f^=Ge,(e.f&b3)===0&&(M3(e,_e),a8(e));for(var n=e.first;n!==null;){var t=n.next;vv(n,((n.f&Ya)!==0||(n.f&c5)!==0)&&a),n=t}var c=e.nodes&&e.nodes.t;if(c!==null)for(var l of c)(l.is_global||a)&&l.in()}}function mv(e,a){if(e.nodes)for(var n=e.nodes.start,t=e.nodes.end;n!==null;){var c=n===t?null:Qt(n);a.append(n),n=c}}var I8=null;function cL(e){for(var a of(function(n){var t=I8;try{if(I8=new Set,F(n),t!==null)for(var c of I8)t.add(c);return I8}finally{I8=t}})(e))n8(a,a.v)}var Ga=!1;function $c(e){Ga=e}var i8=!1;function wd(e){i8=e}var D4=null,Ve=!1;function W3(e){D4=e}var F4=null;function ge(e){F4=e}var S6=null;function hv(e){D4!==null&&(S6===null?S6=[e]:S6.push(e))}var T3=null,K3=0,ie=null,gv=1,Tt=0,Ka=Tt;function Cd(e){Ka=e}function zv(){return++gv}function Ln(e){var a=e.f;if((a&_e)!==0)return!0;if(2&a&&(e.f&=-32769),(a&A6)!==0){var n=e.deps;if(n!==null)for(var t=n.length,c=0;c<t;c++){var l=n[c];if(Ln(l)&&ev(l),l.wv>e.wv)return!0}(a&Ae)!==0&&ve===null&&M3(e,b3)}return!1}function bv(e,a){var n,t=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],c=e.reactions;if(c!==null&&((n=S6)===null||n===void 0||!n.includes(e)))for(var l=0;l<c.length;l++){var o=c[l];2&o.f?bv(o,a,!1):a===o&&(t?M3(o,_e):(o.f&b3)!==0&&M3(o,A6),a8(o))}}function yv(e){var a=T3,n=K3,t=ie,c=D4,l=S6,o=X4,s=Ve,i=Ka,f=e.f;T3=null,K3=0,ie=null,D4=96&f?null:e,S6=null,cn(e.ctx),Ve=!1,Ka=++Tt,e.ac!==null&&(o5(()=>{e.ac.abort(V8)}),e.ac=null);try{e.f|=ko;var u=(0,e.fn)(),d=e.deps;if(T3!==null){var h;if(Dc(e,K3),d!==null&&K3>0)for(d.length=K3+T3.length,h=0;h<T3.length;h++)d[K3+h]=T3[h];else e.deps=d=T3;if(Pt()&&(e.f&Ae)!==0)for(h=K3;h<d.length;h++){var m,v;((v=(m=d[h]).reactions)!==null&&v!==void 0?v:m.reactions=[]).push(e)}}else d!==null&&K3<d.length&&(Dc(e,K3),d.length=K3);if(yn()&&ie!==null&&!Ve&&d!==null&&!(6146&e.f))for(h=0;h<ie.length;h++)bv(ie[h],e);return c!==null&&c!==e&&(Tt++,ie!==null&&(t===null?t=ie:t.push(...ie))),(e.f&sa)!==0&&(e.f^=sa),u}catch(p){return Wp(p)}finally{e.f^=ko,T3=a,K3=n,ie=t,D4=c,S6=l,cn(o),Ve=s,Ka=i}}function lL(e,a){var n=a.reactions;if(n!==null){var t=Ux.call(n,e);if(t!==-1){var c=n.length-1;c===0?n=a.reactions=null:(n[t]=n[c],n.pop())}}n===null&&2&a.f&&(T3===null||!T3.includes(a))&&(M3(a,A6),(a.f&Ae)!==0&&(a.f^=Ae,a.f&=-32769),Zp(a),Dc(a,0))}function Dc(e,a){var n=e.deps;if(n!==null)for(var t=a;t<n.length;t++)lL(e,n[t])}function sn(e){var a=e.f;if((a&bn)===0){M3(e,b3);var n=F4,t=Ga;F4=e,Ga=!0;try{16777232&a?(function(l){for(var o=l.first;o!==null;){var s=o.next;(o.f&c5)===0&&y3(o),o=s}})(e):fv(e),iv(e);var c=yv(e);e.teardown=typeof c=="function"?c:null,e.wv=gv}finally{Ga=t,F4=n}}}function Mv(){return xv.apply(this,arguments)}function xv(){return(xv=z1(function*(){yield Promise.resolve(),t0()})).apply(this,arguments)}function r(e){var a,n,t,c,l,o=!!(2&e.f);if((a=I8)===null||a===void 0||a.add(e),D4!==null&&!Ve&&!(F4!==null&&(F4.f&bn)!==0||(l=S6)!==null&&l!==void 0&&l.includes(e))){var s=D4.deps;if((D4.f&ko)!==0)e.rv<Tt&&(e.rv=Tt,T3===null&&s!==null&&s[K3]===e?K3++:T3===null?T3=[e]:T3.includes(e)||T3.push(e));else{var i,f;((f=(i=D4).deps)!==null&&f!==void 0?f:i.deps=[]).push(e);var u=e.reactions;u===null?e.reactions=[D4]:u.includes(D4)||u.push(D4)}}if(i8){if(ia.has(e))return ia.get(e);if(o){var d=e,h=d.v;return((d.f&b3)===0&&d.reactions!==null||wv(d))&&(h=is(d)),ia.set(d,h),h}}else o&&((n=ve)===null||n===void 0||!n.has(e)||(t=K4)!==null&&t!==void 0&&t.is_fork&&!Pt())&&(Ln(d=e)&&ev(d),Ga&&Pt()&&(d.f&Ae)===0&&Lv(d));if((c=ve)!==null&&c!==void 0&&c.has(e))return ve.get(e);if((e.f&sa)!==0)throw e.v;return e.v}function Lv(e){if(e.deps!==null)for(var a of(e.f^=Ae,e.deps)){var n;((n=a.reactions)!==null&&n!==void 0?n:a.reactions=[]).push(e),2&a.f&&(a.f&Ae)===0&&Lv(a)}}function wv(e){if(e.v===z3)return!0;if(e.deps===null)return!1;for(var a of e.deps)if(ia.has(a)||2&a.f&&wv(a))return!0;return!1}function F(e){var a=Ve;try{return Ve=!0,e()}finally{Ve=a}}var oL=-7169;function M3(e,a){e.f=e.f&oL|a}function M(e){if(typeof e=="object"&&e&&!(e instanceof EventTarget)){if(Ke in e)Po(e);else if(!Array.isArray(e))for(var a in e){var n=e[a];typeof n=="object"&&n&&Ke in n&&Po(n)}}}function Po(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;if(!(typeof e!="object"||e===null||e instanceof EventTarget||a.has(e))){for(var n in a.add(e),e instanceof Date&&e.getTime(),e)try{Po(e[n],a)}catch{}var t=ls(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){var c=Tp(t);for(var l in c){var o=c[l].get;if(o)try{o.call(e)}catch{}}}}}var Cv=new Set,To=new Set;function jv(e,a,n){var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};function c(l){if(t.capture||jt.call(a,l),!l.cancelBubble)return o5(()=>n?.call(this,l))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Za(()=>{a.addEventListener(e,c,t)}):a.addEventListener(e,c,t),c}function w2(e,a,n,t,c){var l={capture:t,passive:c},o=jv(e,a,n,l);(a===document.body||a===window||a===document||a instanceof HTMLMediaElement)&&s5(()=>{a.removeEventListener(e,o,l)})}function Xt(e){for(var a=0;a<e.length;a++)Cv.add(e[a]);for(var n of To)n(e)}function jt(e){var a,n=this,t=n.ownerDocument,c=e.type,l=((a=e.composedPath)===null||a===void 0?void 0:a.call(e))||[],o=l[0]||e.target,s=0,i=e===e&&e.__root;if(i){var f=l.indexOf(i);if(f!==-1&&(n===document||n===window))return void(e.__root=n);var u=l.indexOf(n);if(u===-1)return;f<=u&&(s=f)}if((o=l[s]||e.target)!==n){Hx(e,"currentTarget",{configurable:!0,get:()=>o||t});var d=D4,h=F4;W3(null),ge(null);try{for(var m,v=[];o!==null;){var p=o.assignedSlot||o.parentNode||o.host||null;try{var g=o["__"+c];g==null||o.disabled&&e.target!==o||g.call(o,e)}catch(S){m?v.push(S):m=S}if(e.cancelBubble||p===n||p===null)break;o=p}if(m){var y=function(S){queueMicrotask(()=>{throw S})};for(var L of v)y(L);throw m}}finally{e.__root=n,delete e.currentTarget,W3(d),ge(h)}}}function fs(e){var a=document.createElement("template");return a.innerHTML=e.replaceAll("<!>","<!---->"),a.content}function t8(e,a){var n=F4;n.nodes===null&&(n.nodes={start:e,end:a,a:null,t:null})}function a2(e,a){var n,t=!!(1&a),c=!!(2&a),l=!e.startsWith("<!>");return()=>{n===void 0&&(n=fs(l?e:"<!>"+e),t||(n=Z3(n)));var o=c||av?document.importNode(n,!0):n.cloneNode(!0);return t?t8(Z3(o),o.lastChild):t8(o,o),o}}function za(e,a){return(function(n,t){var c,l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"svg",o=!n.startsWith("<!>"),s=!!(1&t),i="<".concat(l,">").concat(o?n:"<!>"+n,"</").concat(l,">");return()=>{if(!c){var f=Z3(fs(i));if(s)for(c=document.createDocumentFragment();Z3(f);)c.appendChild(Z3(f));else c=Z3(f)}var u=c.cloneNode(!0);return s?t8(Z3(u),u.lastChild):t8(u,u),u}})(e,a,"svg")}function s3(){var e=fa((arguments.length>0&&arguments[0]!==void 0?arguments[0]:"")+"");return t8(e,e),e}function W1(){var e=document.createDocumentFragment(),a=document.createComment(""),n=fa();return e.append(a,n),t8(a,n),e}function T(e,a){e!==null&&e.before(a)}var sL=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"],iL={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"},fL=["touchstart","touchmove"];function uL(e){return fL.includes(e)}function d1(e,a){var n,t=a==null?"":typeof a=="object"?a+"":a;t!==((n=e.__t)!==null&&n!==void 0?n:e.__t=e.nodeValue)&&(e.__t=t,e.nodeValue=t+"")}function dL(e,a){return(function(n,t){var{target:c,anchor:l,props:o={},events:s,context:i,intro:f=!0}=t;(function(){if(j6===void 0){j6=window,av=/Firefox/.test(navigator.userAgent);var v=Element.prototype,p=Node.prototype,g=Text.prototype;nv=C6(p,"firstChild").get,tv=C6(p,"nextSibling").get,md(v)&&(v.__click=void 0,v.__className=void 0,v.__attributes=null,v.__style=void 0,v.__e=void 0),md(g)&&(g.__t=void 0)}})();var u=new Set,d=v=>{for(var p=0;p<v.length;p++){var g=v[p];if(!u.has(g)){u.add(g);var y=uL(g);c.addEventListener(g,jt,{passive:y});var L=O8.get(g);L===void 0?(document.addEventListener(g,jt,{passive:y}),O8.set(g,1)):O8.set(g,L+1)}}};d(Sc(Cv)),To.add(d);var h=void 0,m=(function(v){e8.ensure();var p=Pe(524352,v,!0);return function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise(y=>{g.outro?on(p,()=>{y3(p),y(void 0)}):(y3(p),y(void 0))})}})(()=>{var v=l??c.appendChild(fa());return(function(p,g,y){new Ao(p,g,y)})(v,{pending:()=>{}},p=>{i&&(f1({}),X4.c=i),s&&(o.$$events=s),h=n(p,o)||{},i&&u1()}),()=>{for(var p of u){c.removeEventListener(p,jt);var g=O8.get(p);--g===0?(document.removeEventListener(p,jt),O8.delete(p)):O8.set(p,g)}var y;To.delete(d),v!==l&&((y=v.parentNode)===null||y===void 0||y.removeChild(v))}});return Oo.set(h,m),h})(e,a)}var O8=new Map,Oo=new WeakMap,R8,p6=new WeakMap,$a=new WeakMap,v6=new WeakMap,Mt=new WeakMap,no=new WeakMap,jd=new WeakMap,pL=new WeakMap,fn=class{constructor(a){var n=this,t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];He(this,"anchor",void 0),e0(this,p6,new Map),e0(this,$a,new Map),e0(this,v6,new Map),e0(this,Mt,new Set),e0(this,no,!0),e0(this,jd,()=>{var c=K4;if(k2(p6,this).has(c)){var l=k2(p6,this).get(c),o=k2($a,this).get(l);if(o)Eo(o),k2(Mt,this).delete(l);else{var s=k2(v6,this).get(l);s&&(k2($a,this).set(l,s.effect),k2(v6,this).delete(l),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),o=s.effect)}for(var[i,f]of k2(p6,this)){if(k2(p6,this).delete(i),i===c)break;var u=k2(v6,this).get(f);u&&(y3(u.effect),k2(v6,this).delete(f))}var d=function(v,p){if(v===l||k2(Mt,n).has(v))return 1;var g=()=>{if(Array.from(k2(p6,n).values()).includes(v)){var y=document.createDocumentFragment();mv(p,y),y.append(fa()),k2(v6,n).set(v,{effect:p,fragment:y})}else y3(p);k2(Mt,n).delete(v),k2($a,n).delete(v)};k2(no,n)||!o?(k2(Mt,n).add(v),on(p,g,!1)):g()};for(var[h,m]of k2($a,this))d(h,m)}}),e0(this,pL,c=>{k2(p6,this).delete(c);var l=Array.from(k2(p6,this).values());for(var[o,s]of k2(v6,this))l.includes(o)||(y3(s.effect),k2(v6,this).delete(o))}),this.anchor=a,y4(no,this,t)}ensure(a,n){var t=K4;!n||k2($a,this).has(a)||k2(v6,this).has(a)||k2($a,this).set(a,Qe(()=>n(this.anchor))),k2(p6,this).set(t,a),k2(jd,this).call(this)}};function x3(e){X4===null&&Gt(),gn&&X4.l!==null?Sv(X4).m.push(e):_o(()=>{var a=F(e);if(typeof a=="function")return a})}function ze(e){X4===null&&Gt(),x3(()=>()=>F(e))}function vL(){var e=X4;return e===null&&Gt(),(a,n,t)=>{var c,l=(c=e.s.$$events)===null||c===void 0?void 0:c[a];if(l){var o=Jt(l)?l.slice():[l],s=(function(f,u){var{bubbles:d=!1,cancelable:h=!1}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return new CustomEvent(f,{detail:u,bubbles:d,cancelable:h})})(a,n,t);for(var i of o)i.call(e.x,s);return!s.defaultPrevented}return!0}}function mL(e){X4===null&&Gt(),X4.l===null&&(function(){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")})(),Sv(X4).b.push(e)}function Sv(e){var a,n=e.l;return(a=n.u)!==null&&a!==void 0?a:n.u={a:[],b:[],m:[]}}function i2(e,a){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],t=new fn(e);function c(l,o){t.ensure(l,o)}xn(()=>{var l=!1;a(function(o){l=!0,c(!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],o)}),l||c(!1,null)},n?Ya:0)}function kv(e,a,n){var t=new fn(e),c=!yn();xn(()=>{var l=a();c&&l!==null&&typeof l=="object"&&(l={}),t.ensure(l,n)})}function T0(e,a){return a}function to(e){for(var a=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],n=0;n<e.length;n++)y3(e[n],a)}function x0(e,a,n,t,c){var l=arguments.length>5&&arguments[5]!==void 0?arguments[5]:null,o=e,s=new Map;!(4&a)||(o=e.appendChild(fa()));var i,f=null,u=Z2(()=>{var p=n();return Jt(p)?p:p==null?[]:Sc(p)}),d=!0;function h(){v.fallback=f,(function(p,g,y,L,S){var j,x,E,P,I,k=!!(8&L),$=g.length,U=p.items,O=p.effect.first,c2=null,u2=[],l2=[];if(k)for(I=0;I<$;I+=1){var S2;E=S(g[I],I),((P=U.get(E).e).f&m6)===0&&((S2=P.nodes)===null||S2===void 0||(S2=S2.a)===null||S2===void 0||S2.measure(),(x??(x=new Set)).add(P))}for(I=0;I<$;I+=1){if(E=S(g[I],I),P=U.get(E).e,p.outrogroups!==null)for(var q2 of p.outrogroups)q2.pending.delete(P),q2.done.delete(P);if((P.f&m6)!==0){if(P.f^=m6,P!==O){var f2=c2?c2.next:O;P===p.effect.last&&(p.effect.last=P.prev),P.prev&&(P.prev.next=P.next),P.next&&(P.next.prev=P.prev),K6(p,c2,P),K6(p,P,f2),xt(P,f2,y),u2=[],l2=[],O=(c2=P).next;continue}xt(P,null,y)}var o2;if((P.f&Ge)!==0&&(Eo(P),k&&((o2=P.nodes)===null||o2===void 0||(o2=o2.a)===null||o2===void 0||o2.unfix(),(x??(x=new Set)).delete(P))),P!==O){if(j!==void 0&&j.has(P)){if(u2.length<l2.length){var d2,P2=l2[0];c2=P2.prev;var Q2=u2[0],y2=u2[u2.length-1];for(d2=0;d2<u2.length;d2+=1)xt(u2[d2],P2,y);for(d2=0;d2<l2.length;d2+=1)j.delete(l2[d2]);K6(p,Q2.prev,y2.next),K6(p,c2,Q2),K6(p,y2,P2),O=P2,c2=y2,I-=1,u2=[],l2=[]}else j.delete(P),xt(P,O,y),K6(p,P.prev,P.next),K6(p,P,c2===null?p.effect.first:c2.next),K6(p,c2,P),c2=P;continue}for(u2=[],l2=[];O!==null&&O!==P;)(j??(j=new Set)).add(O),l2.push(O),O=O.next;if(O===null)continue}(P.f&m6)===0&&u2.push(P),c2=P,O=P.next}if(p.outrogroups!==null){for(var s2 of p.outrogroups){var z2;s2.pending.size===0&&(to(Sc(s2.done)),(z2=p.outrogroups)===null||z2===void 0||z2.delete(s2))}p.outrogroups.size===0&&(p.outrogroups=null)}if(O!==null||j!==void 0){var o1=[];if(j!==void 0)for(P of j)(P.f&Ge)===0&&o1.push(P);for(;O!==null;)(O.f&Ge)===0&&O!==p.fallback&&o1.push(O),O=O.next;var E1=o1.length;if(E1>0){var m2=4&L&&$===0?y:null;if(k){for(I=0;I<E1;I+=1){var G;(G=o1[I].nodes)===null||G===void 0||(G=G.a)===null||G===void 0||G.measure()}for(I=0;I<E1;I+=1){var b2;(b2=o1[I].nodes)===null||b2===void 0||(b2=b2.a)===null||b2===void 0||b2.fix()}}(function(H,v2,Q){for(var O2,t2=v2.length,W=v2.length,b1=function(){var m1=v2[i1];on(m1,()=>{if(O2){if(O2.pending.delete(m1),O2.done.add(m1),O2.pending.size===0){var F2=H.outrogroups;to(Sc(O2.done)),F2.delete(O2),F2.size===0&&(H.outrogroups=null)}}else W-=1},!1)},i1=0;i1<t2;i1++)b1();if(W===0){var j2=Q!==null;if(j2){var x1=Q,I2=x1.parentNode;I2.textContent="",I2.append(x1),H.items.clear()}to(v2,!j2)}else{var V2;O2={pending:new Set(v2),done:new Set},((V2=H.outrogroups)!==null&&V2!==void 0?V2:H.outrogroups=new Set).add(O2)}})(p,o1,m2)}}k&&Za(()=>{if(x!==void 0)for(P of x){var H;(H=P.nodes)===null||H===void 0||(H=H.a)===null||H===void 0||H.apply()}})})(v,i,o,a,t),f!==null&&(i.length===0?(f.f&m6)===0?Eo(f):(f.f^=m6,xt(f,null,o)):on(f,()=>{f=null}))}var m=xn(()=>{for(var p=(i=r(u)).length,g=new Set,y=0;y<p;y+=1){var L=i[y],S=t(L,y),j=d?null:s.get(S);j?(j.v&&n8(j.v,L),j.i&&n8(j.i,y)):(j=hL(s,d?o:R8??(R8=fa()),L,S,y,c,a,n),d||(j.e.f|=m6),s.set(S,j)),g.add(S)}p===0&&l&&!f&&(d?f=Qe(()=>l(o)):(f=Qe(()=>l(R8??(R8=fa())))).f|=m6),d||h(),r(u)}),v={effect:m,items:s,outrogroups:null,fallback:f};d=!1}function hL(e,a,n,t,c,l,o,s){var i=1&o?16&o?_6(n):R(n,!1,!1):null,f=2&o?_6(c):null;return{v:i,i:f,e:Qe(()=>(l(a,i??n,f??c,s),()=>{e.delete(t)}))}}function xt(e,a,n){if(e.nodes)for(var t=e.nodes.start,c=e.nodes.end,l=a&&(a.f&m6)===0?a.nodes.start:n;t!==null;){var o=Qt(t);if(l.before(t),t===c)return;t=o}}function K6(e,a,n){a===null?e.effect.first=n:a.next=n,n===null?e.effect.last=a:n.prev=a}function Nv(e,a){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],t=arguments.length>3&&arguments[3]!==void 0&&arguments[3],c=e,l="";E2(()=>{var o,s=F4;if(l!==(l=(o=a())!==null&&o!==void 0?o:"")&&(s.nodes!==null&&(uv(s.nodes.start,s.nodes.end),s.nodes=null),l!=="")){var i=l+"";n?i="<svg>".concat(i,"</svg>"):t&&(i="<math>".concat(i,"</math>"));var f=fs(i);if((n||t)&&(f=Z3(f)),t8(Z3(f),f.lastChild),n||t)for(;Z3(f);)c.before(Z3(f));else c.before(f)}})}function k0(e,a,n,t,c){var l,o=(l=a.$$slots)===null||l===void 0?void 0:l[n],s=!1;o===!0&&(o=a[n==="default"?"children":n],s=!0),o===void 0?c!==null&&c(e):o(e,s?()=>t:t)}function Av(e,a,n){var t=new fn(e);xn(()=>{var c,l=(c=a())!==null&&c!==void 0?c:null;t.ensure(l,l&&(o=>n(o,l)))},Ya)}function A3(e,a,n){o3(()=>{var t=F(()=>a(e,n?.())||{});if(n&&t!=null&&t.update){var c=!1,l={};Mn(()=>{var o=n();M(o),c&&Bp(l,o)&&(l=o,t.update(o))}),c=!0}if(t!=null&&t.destroy)return()=>t.destroy()})}function gL(e,a){var n,t=void 0;sv(()=>{t!==(t=a())&&(n&&(y3(n),n=null),t&&(n=Qe(()=>{o3(()=>t(e))})))})}function _v(e){var a,n,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var c=e.length;for(a=0;a<c;a++)e[a]&&(n=_v(e[a]))&&(t&&(t+=" "),t+=n)}else for(n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function va(e){return typeof e=="object"?(function(){for(var a,n,t=0,c="",l=arguments.length;t<l;t++)(a=arguments[t])&&(n=_v(a))&&(c&&(c+=" "),c+=n);return c})(e):e??""}var Sd=[...` 	
\r\f\xA0\v\uFEFF`];function kd(e){var a=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?" !important;":";",n="";for(var t in e){var c=e[t];c!=null&&c!==""&&(n+=" "+t+": "+c+a)}return n}function ro(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function A1(e,a,n,t,c,l){var o=e.__className;if(o!==n||o===void 0){var s=(function(u,d,h){var m=u==null?"":""+u;if(d&&(m=m?m+" "+d:d),h){for(var v in h)if(h[v])m=m?m+" "+v:v;else if(m.length)for(var p=v.length,g=0;(g=m.indexOf(v,g))>=0;){var y=g+p;g!==0&&!Sd.includes(m[g-1])||y!==m.length&&!Sd.includes(m[y])?g=y:m=(g===0?"":m.substring(0,g))+m.substring(y+1)}}return m===""?null:m})(n,t,l);s==null?e.removeAttribute("class"):a?e.className=s:e.setAttribute("class",s),e.__className=n}else if(l&&c!==l)for(var i in l){var f=!!l[i];c!=null&&f===!!c[i]||e.classList.toggle(i,f)}return l}function co(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,t=arguments.length>3?arguments[3]:void 0;for(var c in n){var l=n[c];a[c]!==l&&(n[c]==null?e.style.removeProperty(c):e.style.setProperty(c,l,t))}}function me(e,a,n,t){if(e.__style!==a){var c=(function(l,o){if(o){var s,i,f="";if(Array.isArray(o)?(s=o[0],i=o[1]):s=o,l){l=String(l).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var u=!1,d=0,h=!1,m=[];s&&m.push(...Object.keys(s).map(ro)),i&&m.push(...Object.keys(i).map(ro));for(var v=0,p=-1,g=l.length,y=0;y<g;y++){var L=l[y];if(h?L==="/"&&l[y-1]==="*"&&(h=!1):u?u===L&&(u=!1):L==="/"&&l[y+1]==="*"?h=!0:L==='"'||L==="'"?u=L:L==="("?d++:L===")"&&d--,!h&&u===!1&&d===0){if(L===":"&&p===-1)p=y;else if(L===";"||y===g-1){if(p!==-1){var S=ro(l.substring(v,p).trim());m.includes(S)||(L!==";"&&y++,f+=" "+l.substring(v,y).trim()+";")}v=y+1,p=-1}}}}return s&&(f+=kd(s)),i&&(f+=kd(i,!0)),(f=f.trim())===""?null:f}return l==null?null:String(l)})(a,t);c==null?e.removeAttribute("style"):e.style.cssText=c,e.__style=a}else t&&(Array.isArray(t)?(co(e,n?.[0],t[0]),co(e,n?.[1],t[1],"important")):co(e,n,t));return t}function Fc(e,a){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(e.multiple){if(a==null)return;if(!Jt(a))return void console.warn("https://svelte.dev/e/select_multiple_invalid_value");for(var t of e.options)t.selected=a.includes(Et(t))}else{for(t of e.options)if(rL(Et(t),a))return void(t.selected=!0);n&&a===void 0||(e.selectedIndex=-1)}}function Ev(e){var a=new MutationObserver(()=>{Fc(e,e.__value)});a.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),s5(()=>{a.disconnect()})}function Et(e){return"__value"in e?e.__value:e.value}var U8=Symbol("class"),Lt=Symbol("style"),Pv=Symbol("is custom element"),Tv=Symbol("is html");function r8(e,a){var n=us(e);n.value!==(n.value=a??void 0)&&(e.value!==a||a===0&&e.nodeName==="PROGRESS")&&(e.value=a??"")}function j4(e,a,n,t){var c=us(e);c[a]!==(c[a]=n)&&(a==="loading"&&(e[Xx]=n),n==null?e.removeAttribute(a):typeof n!="string"&&Ov(e).includes(a)?e[a]=n:e.setAttribute(a,n))}function zL(e,a,n,t){var c,l=us(e),o=l[Pv],s=!l[Tv],i=a||{},f=e.tagName==="OPTION";for(var u in a)u in n||(n[u]=null);n.class?n.class=va(n.class):(t||n[U8])&&(n.class=null),n[Lt]&&((c=n.style)!==null&&c!==void 0||(n.style=null));var d,h,m,v,p,g,y=Ov(e),L=function(j){var x=n[j];if(f&&j==="value"&&x==null)return e.value=e.__value="",i[j]=x,0;if(j==="class")return d=e.namespaceURI==="http://www.w3.org/1999/xhtml",A1(e,d,x,t,a?.[U8],n[U8]),i[j]=x,i[U8]=n[U8],0;if(j==="style")return me(e,x,a?.[Lt],n[Lt]),i[j]=x,i[Lt]=n[Lt],0;if(x===(h=i[j])&&(x!==void 0||!e.hasAttribute(j))||(i[j]=x,(m=j[0]+j[1])==="$$"))return 0;if(m==="on"){var E={},P="$$"+j,I=j.slice(2);if(v=(function(u2){return sL.includes(u2)})(I),(function(u2){return u2.endsWith("capture")&&u2!=="gotpointercapture"&&u2!=="lostpointercapture"})(I)&&(I=I.slice(0,-7),E.capture=!0),!v&&h){if(x!=null)return 0;e.removeEventListener(I,i[P],E),i[P]=null}if(x!=null)if(v)e["__".concat(I)]=x,Xt([I]);else{let u2=function(l2){i[j].call(this,l2)};var c2=u2;i[P]=jv(I,e,u2,E)}else v&&(e["__".concat(I)]=void 0)}else if(j==="style")j4(e,j,x);else if(j==="autofocus")(function(u2,l2){if(l2){var S2=document.body;u2.autofocus=!0,Za(()=>{document.activeElement===S2&&u2.focus()})}})(e,!!x);else if(o||j!=="__value"&&(j!=="value"||x==null))if(j==="selected"&&f)(function(u2,l2){l2?u2.hasAttribute("selected")||u2.setAttribute("selected",""):u2.removeAttribute("selected")})(e,x);else if(p=j,s||(p=(function(u2){var l2;return u2=u2.toLowerCase(),(l2=iL[u2])!==null&&l2!==void 0?l2:u2})(p)),g=p==="defaultValue"||p==="defaultChecked",x!=null||o||g)g||y.includes(p)&&(o||typeof x!="string")?(e[p]=x,p in l&&(l[p]=z3)):typeof x!="function"&&j4(e,p,x);else if(l[j]=null,p==="value"||p==="checked"){var k=e,$=a===void 0;if(p==="value"){var U=k.defaultValue;k.removeAttribute(p),k.defaultValue=U,k.value=k.__value=$?U:null}else{var O=k.defaultChecked;k.removeAttribute(p),k.defaultChecked=O,k.checked=!!$&&O}}else e.removeAttribute(j);else e.value=e.__value=x};for(var S in n)L(S);return i}function _c(e,a){var n=arguments.length>5?arguments[5]:void 0,t=arguments.length>6&&arguments[6]!==void 0&&arguments[6],c=arguments.length>7&&arguments[7]!==void 0&&arguments[7];Yp(arguments.length>4&&arguments[4]!==void 0?arguments[4]:[],arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],arguments.length>3&&arguments[3]!==void 0?arguments[3]:[],l=>{var o=void 0,s={},i=e.nodeName==="SELECT",f=!1;if(sv(()=>{var d=a(...l.map(r)),h=zL(e,o,d,n,t,c);for(var m of(f&&i&&"value"in d&&Fc(e,d.value),Object.getOwnPropertySymbols(s)))d[m]||y3(s[m]);for(var v of Object.getOwnPropertySymbols(d)){var p=d[v];v.description!=="@attach"||o&&p===o[v]||(s[v]&&y3(s[v]),s[v]=Qe(()=>gL(e,()=>p))),h[v]=p}o=h}),i){var u=e;o3(()=>{Fc(u,o.value,!0),Ev(u)})}f=!0})}function us(e){var a;return(a=e.__attributes)!==null&&a!==void 0?a:e.__attributes={[Pv]:e.nodeName.includes("-"),[Tv]:e.namespaceURI==="http://www.w3.org/1999/xhtml"}}var Nd=new Map;function Ov(e){var a,n=e.getAttribute("is")||e.nodeName,t=Nd.get(n);if(t)return t;Nd.set(n,t=[]);for(var c=e,l=Element.prototype;l!==c;){for(var o in a=Tp(c))a[o].set&&t.push(o);c=ls(c)}return t}function Bc(e,a){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:a,t=new WeakSet;cv(e,"input",(function(){var c=z1(function*(l){var o=l?e.defaultValue:e.value;if(o=lo(e)?oo(o):o,n(o),K4!==null&&t.add(K4),yield Mv(),o!==(o=a())){var s=e.selectionStart,i=e.selectionEnd,f=e.value.length;if(e.value=o??"",i!==null){var u=e.value.length;s===i&&i===f&&u>f?(e.selectionStart=u,e.selectionEnd=u):(e.selectionStart=s,e.selectionEnd=Math.min(i,u))}}});return function(l){return c.apply(this,arguments)}})()),F(a)==null&&e.value&&(n(lo(e)?oo(e.value):e.value),K4!==null&&t.add(K4)),Mn(()=>{var c=a();if(e===document.activeElement){var l=Va??K4;if(t.has(l))return}lo(e)&&c===oo(e.value)||(e.type!=="date"||c||e.value)&&c!==e.value&&(e.value=c??"")})}function lo(e){var a=e.type;return a==="number"||a==="range"}function oo(e){return e===""?null:+e}function M1(e,a,n){var t=C6(e,a);t&&t.set&&(e[a]=n,s5(()=>{e[a]=null}))}function Ad(e,a){return e===a||e?.[Ke]===a}function r0(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;return o3(()=>{var t,c;return Mn(()=>{t=c,c=[],F(()=>{e!==n(...c)&&(a(e,...c),t&&Ad(n(...t),e)&&a(null,...t))})}),()=>{Za(()=>{c&&Ad(n(...c),e)&&a(null,...c)})}}),e}function z6(e){return function(){for(var a=arguments.length,n=new Array(a),t=0;t<a;t++)n[t]=arguments[t];return n[0].stopPropagation(),e?.apply(this,n)}}function X6(e){return function(){for(var a=arguments.length,n=new Array(a),t=0;t<a;t++)n[t]=arguments[t];return n[0].preventDefault(),e?.apply(this,n)}}function _1(){var e=arguments.length>0&&arguments[0]!==void 0&&arguments[0],a=X4,n=a.l.u;if(n){var t,c=()=>M(a.s);if(e){var l=0,o={},s=Kt(()=>{var i=!1,f=a.s;for(var u in f)f[u]!==o[u]&&(o[u]=f[u],i=!0);return i&&l++,l});c=()=>r(s)}n.b.length&&(t=()=>{_d(a,c),So(n.b)},lv(),Pe(1048584,t,!0)),_o(()=>{var i=F(()=>n.m.map(Gx));return()=>{for(var f of i)typeof f=="function"&&f()}}),n.a.length&&_o(()=>{_d(a,c),So(n.a)})}}function _d(e,a){if(e.l.s)for(var n of e.l.s)r(n);a()}function i5(e){var a=_6(0);return function(){return arguments.length===1?(z(a,r(a)+1),arguments[0]):(r(a),e())}}function St(e,a){var n,t=(n=e.$$events)===null||n===void 0?void 0:n[a.type],c=Jt(t)?t.slice():t==null?[]:[t];for(var l of c)l.call(this,a)}var dc=!1,bL={get(e,a){if(!e.exclude.includes(a))return r(e.version),a in e.special?e.special[a]():e.props[a]},set(e,a,n){if(!(a in e.special)){var t=F4;try{ge(e.parent_effect),e.special[a]=b({get[a](){return e.props[a]}},a,4)}finally{ge(t)}}return e.special[a](n),Md(e.version),!0},getOwnPropertyDescriptor(e,a){if(!e.exclude.includes(a))return a in e.props?{enumerable:!0,configurable:!0,value:e.props[a]}:void 0},deleteProperty:(e,a)=>(e.exclude.includes(a)||(e.exclude.push(a),Md(e.version)),!0),has:(e,a)=>!e.exclude.includes(a)&&a in e.props,ownKeys:e=>Reflect.ownKeys(e.props).filter(a=>!e.exclude.includes(a))};function pc(e,a){return new Proxy({props:e,exclude:a,special:{},version:_6(0),parent_effect:F4},bL)}var yL={get(e,a){for(var n=e.props.length;n--;){var t=e.props[n];if(bt(t)&&(t=t()),typeof t=="object"&&t!==null&&a in t)return t[a]}},set(e,a,n){for(var t=e.props.length;t--;){var c=e.props[t];bt(c)&&(c=c());var l=C6(c,a);if(l&&l.set)return l.set(n),!0}return!1},getOwnPropertyDescriptor(e,a){for(var n=e.props.length;n--;){var t=e.props[n];if(bt(t)&&(t=t()),typeof t=="object"&&t!==null&&a in t){var c=C6(t,a);return c&&!c.configurable&&(c.configurable=!0),c}}},has(e,a){if(a===Ke||a===Dp)return!1;for(var n of e.props)if(bt(n)&&(n=n()),n!=null&&a in n)return!0;return!1},ownKeys(e){var a=[];for(var n of e.props)if(bt(n)&&(n=n()),n){for(var t in n)a.includes(t)||a.push(t);for(var c of Object.getOwnPropertySymbols(n))a.includes(c)||a.push(c)}return a}};function ua(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return new Proxy({props:a},yL)}function b(e,a,n,t){var c,l,o=!gn||!!(2&n),s=!!(8&n),i=!!(16&n),f=t,u=!0,d=()=>(u&&(u=!1,f=i?F(t):t),f);if(s){var h,m,v=Ke in e||Dp in e;c=(h=(m=C6(e,a))===null||m===void 0?void 0:m.set)!==null&&h!==void 0?h:v&&a in e?x=>e[a]=x:void 0}var p,g=!1;if(s?[l,g]=(function(x){var E=dc;try{return dc=!1,[x(),dc]}finally{dc=E}})(()=>e[a]):l=e[a],l===void 0&&t!==void 0&&(l=d(),c&&(o&&(function(){throw new Error("https://svelte.dev/e/props_invalid_value")})(),c(l))),p=o?()=>{var x=e[a];return x===void 0?d():(u=!0,x)}:()=>{var x=e[a];return x!==void 0&&(f=void 0),x===void 0?f:x},o&&!(4&n))return p;if(c){var y=e.$$legacy;return function(x,E){return arguments.length>0?(o&&E&&!y&&!g||c(E?p():x),x):p()}}var L=!1,S=(1&n?Kt:Z2)(()=>(L=!1,p()));s&&r(S);var j=F4;return function(x,E){if(arguments.length>0){var P=E?r(S):o&&s?J8(x):x;return z(S,P),L=!0,f!==void 0&&(f=P),x}return i8&&L||(j.f&bn)!==0?S.v:r(S)}}function t3(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:(function(t){var c=(function(l){try{if(typeof window<"u"&&window.localStorage!==void 0)return window.localStorage[l]}catch{}})("debug");return c!=null&&c.endsWith("*")?t.startsWith(c.slice(0,-1)):t===c})(e);if(!a)return ML;var n=(function(t){for(var c=0,l=0;l<t.length;l++)c=(c<<5)-c+t.charCodeAt(l),c|=0;return Ed[Math.abs(c)%Ed.length]})(e);return function(){for(var t=arguments.length,c=new Array(t),l=0;l<t;l++)c[l]=arguments[l];console.log("%c".concat(e),"color:".concat(n),...c)}}function ML(){}var Ed=["#0000CC","#0099FF","#009400","#8dd200","#CCCC00","#CC9933","#ae04e7","#ff35d7","#FF3333","#FF6600","#FF9933","#FFCC33"],xL=0;function G8(){return++xL}function p3(e){return parseInt(e,10)}function ds(e){return LL.test(e)}var LL=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;function d4(e){return typeof e=="object"&&e!==null&&(e.constructor===void 0||e.constructor.name==="Object")}function M0(e){return typeof e=="object"&&e!==null&&(e.constructor===void 0||e.constructor.name==="Object"||e.constructor.name==="Array")}function wL(e){return e===!0||e===!1}function Ro(e){if(typeof e=="number")return e>9466848e5&&isFinite(e)&&Math.floor(e)===e&&!isNaN(new Date(e).valueOf());if(typeof e=="bigint")return Ro(Number(e));try{var a=e&&e.valueOf();if(a!==e)return Ro(a)}catch{return!1}return!1}function Rv(e){(vc=vc||window.document.createElement("div")).style.color="",vc.style.color=e;var a=vc.style.color;return a!==""?a.replace(/\s+/g,"").toLowerCase():void 0}var vc=void 0;function CL(e){return typeof e=="string"&&e.length<99&&!!Rv(e)}function ps(e,a){if(typeof e=="number"||typeof e=="string"||typeof e=="boolean"||e===void 0)return typeof e;if(typeof e=="bigint")return"number";if(e===null)return"null";if(Array.isArray(e))return"array";if(d4(e))return"object";var n=a.stringify(e);return n&&ds(n)?"number":n==="true"||n==="false"?"boolean":n==="null"?"null":"unknown"}var jL=/^https?:\/\/\S+$/;function f5(e){return typeof e=="string"&&jL.test(e)}function wn(e,a){if(e==="")return"";var n=e.trim();return n==="null"?null:n==="true"||n!=="false"&&(ds(n)?a.parse(n):e)}function qv(e){return SL.test(e)}var SL=/^-?[0-9]+$/,kL=[];function Pd(e,a){if(e.length!==a.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==a[n])return!1;return!0}function qo(e){var a=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n={};if(!Array.isArray(e))throw new TypeError("Array expected");function t(o,s){(!Array.isArray(o)&&!d4(o)||a&&s.length>0)&&(n[c1(s)]=!0),d4(o)&&Object.keys(o).forEach(i=>{t(o[i],s.concat(i))})}for(var c=Math.min(e.length,1e4),l=0;l<c;l++)t(e[l],kL);return Object.keys(n).sort().map(w3)}function $v(e,a,n){if(!(a<=e))for(var t=e;t<a;t++)n(t)}function Ic(e,a){return e.length>a?e.slice(0,a):e}function Td(e){return N2({},e)}function Od(e){return Object.values(e)}function Rd(e,a,n,t){var c=e.slice(0),l=c.splice(a,n);return c.splice.apply(c,[a+t,0,...l]),c}function NL(e,a,n){return e.slice(0,a).concat(n).concat(e.slice(a))}function Yt(e,a){try{return a.parse(e)}catch{return a.parse(re(e))}}function Dv(e,a){try{return Yt(e,a)}catch{return}}function Zt(e,a){e=e.replace(Bv,"");try{return a(e)}catch{}try{return a("{"+e+"}")}catch{}try{return a("["+e+"]")}catch{}throw new Error("Failed to parse partial JSON")}function Fv(e){e=e.replace(Bv,"");try{return re(e)}catch{}try{var a=re("["+e+"]");return a.substring(1,a.length-1)}catch{}try{var n=re("{"+e+"}");return n.substring(1,n.length-1)}catch{}throw new Error("Failed to repair partial JSON")}var Bv=/,\s*$/;function un(e,a){var n=$d.exec(a);if(n){var t=p3(n[2]),c=(function(m,v){for(var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,g=arguments.length>3&&arguments[3]!==void 0?arguments[3]:m.length,y=0,L=p;L<g;L++)m.charAt(L)===v&&y++;return y})(e,`
`,0,t),l=t-e.lastIndexOf(`
`,t)-1;return{position:t,line:c,column:l,message:a.replace($d,()=>"line ".concat(c+1," column ").concat(l+1))}}var o=PL.exec(a),s=o?p3(o[1]):void 0,i=s!==void 0?s-1:void 0,f=TL.exec(a),u=f?p3(f[1]):void 0,d=u!==void 0?u-1:void 0,h=i!==void 0&&d!==void 0?(function(m,v,p){for(var g=m.indexOf(`
`),y=1;y<v&&g!==-1;)g=m.indexOf(`
`,g+1),y++;return g!==-1?g+p+1:void 0})(e,i,d):void 0;return{position:h,line:i,column:d,message:a.replace(/^JSON.parse: /,"").replace(/ of the JSON data$/,"")}}function so(e,a){try{var n=cs.default.parse(e),t=c1(a),c=n.pointers[t];if(c)return{path:a,line:c.key?c.key.line:c.value?c.value.line:0,column:c.key?c.key.column:c.value?c.value.column:0,from:c.key?c.key.pos:c.value?c.value.pos:0,to:c.keyEnd?c.keyEnd.pos:c.valueEnd?c.valueEnd.pos:0}}catch(l){console.error(l)}return{path:a,line:0,column:0,from:0,to:0}}function io(e){return d4(e)?e.json!==void 0?e.text!==void 0?'Content must contain either a property "json" or a property "text" but not both':void 0:e.text===void 0?'Content must contain either a property "json" or a property "text"':typeof e.text!="string"?'Content "text" property must be a string containing a JSON document. Did you mean to use the "json" property instead?':void 0:"Content must be an object"}function c_(e){return d4(e)&&(e.json!==void 0||typeof e.text=="string")}function Ot(e){return d4(e)&&typeof e.text=="string"}function Rt(e){return d4(e)&&e.json!==void 0}function AL(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:JSON;return Ot(e)?e:{text:n.stringify(e.json,null,a)}}function qd(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:JSON;return Rt(e)?e:{json:a.parse(e.text)}}function $o(e,a,n){return AL(e,a,n).text}function _L(e,a){return EL(e,a)>a}function EL(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0;if(Ot(e))return e.text.length;var n=e.json,t=0;return(function c(l){if(Array.isArray(l)){if((t+=l.length-1+2)>a)return;for(var o=0;o<l.length;o++)if(c(l[o]),t>a)return}else if(d4(l)){var s=Object.keys(l);t+=2+s.length+(s.length-1);for(var i=0;i<s.length;i++){var f=s[i],u=l[f];t+=f.length+2,c(u)}}else t+=typeof l=="string"?l.length+2:String(l).length})(n),t}var $d=/(position|char) (\d+)/,PL=/line (\d+)/,TL=/column (\d+)/;function vs(e,a){return e.parse===a.parse&&e.stringify===a.stringify}function Dd(e){var a=e.substring(0,999).trim();return!a.includes(`
`)&&OL.test(a)}var H0,H4,je,he,Se,de,da,OL=/[,:]\S/;function ms(e){var{escapeControlCharacters:a,escapeUnicodeCharacters:n}=e;return a?n?RL:qL:n?$L:DL}(function(e){e.text="text",e.tree="tree",e.table="table"})(H0||(H0={})),(function(e){e.after="after",e.inside="inside",e.key="key",e.value="value",e.multi="multi",e.text="text"})(H4||(H4={})),(function(e){e.after="after",e.key="key",e.value="value",e.inside="inside"})(je||(je={})),(function(e){e.info="info",e.warning="warning",e.error="error"})(he||(he={})),(function(e){e.key="key",e.value="value"})(Se||(Se={})),(function(e){e.asc="asc",e.desc="desc"})(de||(de={})),(function(e){e.no="no",e.self="self",e.nextInside="nextInside"})(da||(da={}));var RL={escapeValue:e=>Iv(Wv(String(e))),unescapeValue:e=>Vv(Uv(e))},qL={escapeValue:e=>Wv(String(e)),unescapeValue:e=>Vv(e)},$L={escapeValue:e=>Iv(String(e)),unescapeValue:e=>Uv(e)},DL={escapeValue:e=>String(e),unescapeValue:e=>e};function Iv(e){return e.replace(/[^\x20-\x7F]/g,a=>{var n;return a==="\b"||a==="\f"||a===`
`||a==="\r"||a==="	"?a:"\\u"+("000"+((n=a.codePointAt(0))===null||n===void 0?void 0:n.toString(16))).slice(-4)})}function Uv(e){return e.replace(/\\u[a-fA-F0-9]{4}/g,a=>{try{var n=JSON.parse('"'+a+'"');return Hv[n]||n}catch{return a}})}var Hv={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},FL={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"};function Wv(e){return e.replace(/["\b\f\n\r\t\\]/g,a=>Hv[a]||a)}function Vv(e){return e.replace(/\\["bfnrt\\]/g,a=>FL[a]||a)}function dn(e){return typeof e!="string"?String(e):e.endsWith(`
`)?e+`
`:e}function Jv(e,a){return Cn(e,n=>n.nodeName.toUpperCase()===a.toUpperCase())}function ca(e,a,n){return Cn(e,t=>(function(c,l,o){return typeof c.getAttribute=="function"&&c.getAttribute(l)===o})(t,a,n))}function Cn(e,a){return!!hs(e,a)}function hs(e,a){for(var n=e;n&&!a(n);)n=n.parentNode;return n}function er(e){var a,n;return(a=e==null||(n=e.ownerDocument)===null||n===void 0?void 0:n.defaultView)!==null&&a!==void 0?a:void 0}function gs(e){var a=er(e),n=a?.document.activeElement;return!!n&&Cn(n,t=>t===e)}function Gv(e,a){return hs(e,n=>n.nodeName===a)}function fo(e){return ca(e,"data-type","selectable-key")?H4.key:ca(e,"data-type","selectable-value")?H4.value:ca(e,"data-type","insert-selection-area-inside")?H4.inside:ca(e,"data-type","insert-selection-area-after")?H4.after:H4.multi}function Ec(e){return encodeURIComponent(c1(e))}function Kv(e){var a,n=hs(e,c=>!(c==null||!c.hasAttribute)&&c.hasAttribute("data-path")),t=(a=n?.getAttribute("data-path"))!==null&&a!==void 0?a:void 0;return t?w3(decodeURIComponent(t)):void 0}function BL(e){var{allElements:a,currentElement:n,direction:t,hasPrio:c=()=>!0,margin:l=10}=e,o=Si(a.filter(function(y){var L=y.getBoundingClientRect();return L.width>0&&L.height>0}),i),s=i(n);function i(y){var L=y.getBoundingClientRect();return{x:L.left+L.width/2,y:L.top+L.height/2,rect:L,element:y}}function f(y,L){var S=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,j=y.x-L.x,x=(y.y-L.y)*S;return Math.sqrt(j*j+x*x)}var u=y=>f(y,s);if(t==="Left"||t==="Right"){var d=t==="Left"?o.filter(y=>{return L=s,y.rect.left+l<L.rect.left;var L}):o.filter(y=>{return L=s,y.rect.right>L.rect.right+l;var L}),h=d.filter(y=>{return L=y,S=s,Math.abs(L.y-S.y)<l;var L,S}),m=Pn(h,u)||Pn(d,y=>f(y,s,10));return m?.element}if(t==="Up"||t==="Down"){var v=t==="Up"?o.filter(y=>{return L=s,y.y+l<L.y;var L}):o.filter(y=>{return L=s,y.y>L.y+l;var L}),p=v.filter(y=>c(y.element)),g=Pn(p,u)||Pn(v,u);return g?.element}}function zs(){var e,a,n,t;return typeof navigator<"u"&&(e=(a=(n=navigator)===null||n===void 0||(n=n.platform)===null||n===void 0?void 0:n.toUpperCase().includes("MAC"))!==null&&a!==void 0?a:(t=navigator)===null||t===void 0||(t=t.userAgentData)===null||t===void 0||(t=t.platform)===null||t===void 0?void 0:t.toUpperCase().includes("MAC"))!==null&&e!==void 0&&e}function E6(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"+",n=[];bs(e,arguments.length>2&&arguments[2]!==void 0?arguments[2]:zs)&&n.push("Ctrl"),e.altKey&&n.push("Alt"),e.shiftKey&&n.push("Shift");var t=e.key.length===1?e.key.toUpperCase():e.key;return t in IL||n.push(t),n.join(a)}function bs(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:zs;return e.ctrlKey||e.metaKey&&a()}var IL={Ctrl:!0,Command:!0,Control:!0,Alt:!0,Option:!0,Shift:!0};function j1(e,a){a===void 0&&(a={});var n=a.insertAt;if(e&&typeof document<"u"){var t=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",n==="top"&&t.firstChild?t.insertBefore(c,t.firstChild):t.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}j1(`.jse-absolute-popup.svelte-enkkpn {
  position: relative;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  z-index: 1001;
}
.jse-absolute-popup.svelte-enkkpn .jse-hidden-input:where(.svelte-enkkpn) {
  position: fixed;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  overflow: hidden;
}
.jse-absolute-popup.svelte-enkkpn .jse-absolute-popup-content:where(.svelte-enkkpn) {
  position: absolute;
}`);var UL=a2('<div class="jse-absolute-popup-content svelte-enkkpn"><input type="text" readonly="" tabindex="-1" class="jse-hidden-input svelte-enkkpn"/> <!></div>'),HL=a2('<div role="none" class="jse-absolute-popup svelte-enkkpn"><!></div>');function WL(e,a){f1(a,!1);var n=b(a,"popup",8),t=b(a,"closeAbsolutePopup",8),c=R(),l=R();function o(d){n().options&&n().options.closeOnOuterClick&&!Cn(d.target,h=>h===r(c))&&t()(n().id)}function s(d){E6(d)==="Escape"&&(d.preventDefault(),d.stopPropagation(),t()(n().id))}x3(function(){r(l)&&r(l).focus()}),_1();var i=HL();w2("mousedown",j6,function(d){o(d)},!0),w2("keydown",j6,s,!0),w2("wheel",j6,function(d){o(d)},!0);var f=q(i),u=d=>{var h=UL(),m=q(h);r0(m,v=>z(l,v),()=>r(l)),Av(J(m,2),()=>n().component,(v,p)=>{p(v,ua(()=>n().props))}),E2(v=>me(h,v),[()=>(r(c),M(n()),F(()=>(function(v,p){var g=v.getBoundingClientRect(),{left:y,top:L,positionAbove:S,positionLeft:j}=(function(){if(p.anchor){var{anchor:x,width:E=0,height:P=0,offsetTop:I=0,offsetLeft:k=0,position:$}=p,{left:U,top:O,bottom:c2,right:u2}=x.getBoundingClientRect(),l2=$==="top"||O+P>window.innerHeight&&O>P,S2=$==="left"||U+E>window.innerWidth&&U>E;return{left:S2?u2-k:U+k,top:l2?O-I:c2+I,positionAbove:l2,positionLeft:S2}}if(typeof p.left=="number"&&typeof p.top=="number"){var{left:q2,top:f2,width:o2=0,height:d2=0}=p;return{left:q2,top:f2,positionAbove:f2+d2>window.innerHeight&&f2>d2,positionLeft:q2+o2>window.innerWidth&&q2>o2}}throw new Error('Invalid config: pass either "left" and "top", or pass "anchor"')})();return(S?"bottom: ".concat(g.top-L,"px;"):"top: ".concat(L-g.top,"px;"))+(j?"right: ".concat(g.left-y,"px;"):"left: ".concat(y-g.left,"px;"))})(r(c),n().options)))]),T(d,h)};i2(f,d=>{r(c)&&d(u)}),r0(i,d=>z(c,d),()=>r(c)),w2("mousedown",i,function(d){d.stopPropagation()}),w2("keydown",i,s),T(e,i),u1()}var VL=a2("<!> <!>",1);function Do(e,a){f1(a,!1);var n=t3("jsoneditor:AbsolutePopup"),t=R([],!0);function c(s){var i=r(t).findIndex(u=>u.id===s);if(i!==-1){var f=r(t)[i];f.options.onClose&&f.options.onClose(),z(t,r(t).filter(u=>u.id!==s))}}(function(s,i){Up().set(s,i)})("absolute-popup",{openAbsolutePopup:function(s,i,f){n("open...",i,f);var u={id:G8(),component:s,props:i||{},options:f||{}};return z(t,[...r(t),u]),u.id},closeAbsolutePopup:c}),Y(()=>r(t),()=>{n("popups",r(t))}),L4(),_1(!0);var l=VL(),o=Y2(l);x0(o,1,()=>r(t),T0,(s,i)=>{WL(s,{get popup(){return r(i)},closeAbsolutePopup:c})}),k0(J(o,2),a,"default",{},null),T(e,l),u1()}function ar(e,a){for(var n=new Set(a),t=e.replace(/ \(copy( \d+)?\)$/,""),c=e,l=1;n.has(c);){var o="copy"+(l>1?" "+l:"");c="".concat(t," (").concat(o,")"),l++}return c}function M6(e,a){var n=a-3;return e.length>a?e.substring(0,n)+"...":e}function nr(e){if(e==="")return"";var a=e.toLowerCase();if(a==="null")return null;if(a==="true")return!0;if(a==="false")return!1;if(a!=="undefined"){var n=Number(e),t=parseFloat(e);return isNaN(n)||isNaN(t)?e:n}}var JL={id:"jsonquery",name:"JSONQuery",description:`
<p>
  Enter a <a href="https://jsonquerylang.org" target="_blank" 
  rel="noopener noreferrer">JSON Query</a> function to filter, sort, or transform the data.
  You can use functions like <code>get</code>, <code>filter</code>,
  <code>sort</code>, <code>pick</code>, <code>groupBy</code>, <code>uniq</code>, etcetera. 
  Example query: <code>filter(.age >= 18)</code>
</p>
`,createQuery:function(e,a){var{filter:n,sort:t,projection:c}=a,l=[];n&&n.path&&n.relation&&n.value&&l.push(["filter",[(o=n.relation,V5("1 ".concat(o," 1"))[0]),mc(n.path),nr(n.value)]]);var o;return t&&t.path&&t.direction&&l.push(["sort",mc(t.path),t.direction==="desc"?"desc":"asc"]),c&&c.paths&&(c.paths.length>1?l.push(["pick",...c.paths.map(mc)]):l.push(["map",mc(c.paths[0])])),c9(["pipe",...l])},executeQuery:function(e,a,n){var t=vs(n,JSON)?e:(function(c){var l=n.stringify(c);return l!==void 0?JSON.parse(l):void 0})(e);return a.trim()!==""?l9(t,a):t}};function mc(e){return["get",...e]}var GL=za("<g><!></g>");function KL(e,a){f1(a,!1);var n=870711,t=R(""),c=b(a,"data",8);function l(s){if(!s||!s.raw)return"";var i=s.raw,f={};return i=i.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,(u,d)=>{var h="fa-".concat((n+=1).toString(16));return f[d]=h,' id="'.concat(h,'"')}),i=i.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(u,d,h,m)=>{var v=d||m;return v&&f[v]?"#".concat(f[v]):u}),i}Y(()=>M(c()),()=>{z(t,l(c()))}),L4();var o=GL();Nv(q(o),()=>r(t),!0),T(e,o),u1()}j1(`
  .fa-icon.svelte-v67cny {
    display: inline-block;
    fill: currentColor;
  }
  .fa-flip-horizontal.svelte-v67cny {
    transform: scale(-1, 1);
  }
  .fa-flip-vertical.svelte-v67cny {
    transform: scale(1, -1);
  }
  .fa-spin.svelte-v67cny {
    animation: svelte-v67cny-fa-spin 1s 0s infinite linear;
  }
  .fa-inverse.svelte-v67cny {
    color: #fff;
  }
  .fa-pulse.svelte-v67cny {
    animation: svelte-v67cny-fa-spin 1s infinite steps(8);
  }
  @keyframes svelte-v67cny-fa-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`);var QL=za("<svg><!></svg>"),XL=za("<path></path>"),YL=za("<polygon></polygon>"),ZL=za("<!><!><!>",1);function c4(e,a){var n=pc(a,["children","$$slots","$$events","$$legacy"]),t=pc(n,["class","data","scale","spin","inverse","pulse","flip","label","style"]);f1(a,!1);var c=b(a,"class",8,""),l=b(a,"data",8),o=R(),s=b(a,"scale",8,1),i=b(a,"spin",8,!1),f=b(a,"inverse",8,!1),u=b(a,"pulse",8,!1),d=b(a,"flip",8,void 0),h=b(a,"label",8,""),m=b(a,"style",8,""),v=R(10),p=R(10),g=R(),y=R();function L(){var j=1;return s()!==void 0&&(j=Number(s())),isNaN(j)||j<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),1):1*j}function S(){return r(o)?Math.max(r(o).width,r(o).height)/16:1}Y(()=>(M(l()),M(m()),M(s())),()=>{z(o,(function(j){var x;if(j){if(!("definition"in j)){if("iconName"in j&&"icon"in j){j.iconName;var[E,P,,,I]=j.icon;x={width:E,height:P,paths:(Array.isArray(I)?I:[I]).map(k=>({d:k}))}}else x=j[Object.keys(j)[0]];return x}console.error("`import faIconName from '@fortawesome/package-name/faIconName` not supported - Please use `import { faIconName } from '@fortawesome/package-name/faIconName'` instead")}})(l())),m(),s(),z(v,r(o)?r(o).width/S()*L():0),z(p,r(o)?r(o).height/S()*L():0),z(g,(function(){var j="";m()!==null&&(j+=m());var x=L();return x===1?j.length===0?"":j:(j===""||j.endsWith(";")||(j+="; "),"".concat(j,"font-size: ").concat(x,"em"))})()),z(y,r(o)?"0 0 ".concat(r(o).width," ").concat(r(o).height):"0 0 ".concat(r(v)," ").concat(r(p)))}),L4(),_1(),(function(j,x){var E=pc(x,["children","$$slots","$$events","$$legacy"]),P=pc(E,["class","width","height","box","spin","inverse","pulse","flip","style","label"]),I=b(x,"class",8,""),k=b(x,"width",8),$=b(x,"height",8),U=b(x,"box",8,"0 0 0 0"),O=b(x,"spin",8,!1),c2=b(x,"inverse",8,!1),u2=b(x,"pulse",8,!1),l2=b(x,"flip",8,"none"),S2=b(x,"style",8,""),q2=b(x,"label",8,""),f2=QL();_c(f2,()=>{var o2;return N2(N2({version:"1.1",class:"fa-icon ".concat((o2=I())!==null&&o2!==void 0?o2:""),width:k(),height:$(),"aria-label":q2(),role:q2()?"img":"presentation",viewBox:U(),style:S2()},P),{},{[U8]:{"fa-spin":O(),"fa-pulse":u2(),"fa-inverse":c2(),"fa-flip-horizontal":l2()==="horizontal","fa-flip-vertical":l2()==="vertical"}})},void 0,void 0,void 0,"svelte-v67cny"),k0(q(f2),x,"default",{},null),T(j,f2)})(e,ua({get label(){return h()},get width(){return r(v)},get height(){return r(p)},get box(){return r(y)},get style(){return r(g)},get spin(){return i()},get flip(){return d()},get inverse(){return f()},get pulse(){return u()},get class(){return c()}},()=>t,{children:(j,x)=>{var E=W1();k0(Y2(E),a,"default",{},P=>{var I=ZL(),k=Y2(I);x0(k,1,()=>(r(o),F(()=>{var c2;return((c2=r(o))===null||c2===void 0?void 0:c2.paths)||[]})),T0,(c2,u2)=>{var l2=XL();_c(l2,()=>N2({},r(u2))),T(c2,l2)});var $=J(k);x0($,1,()=>(r(o),F(()=>{var c2;return((c2=r(o))===null||c2===void 0?void 0:c2.polygons)||[]})),T0,(c2,u2)=>{var l2=YL();_c(l2,()=>N2({},r(u2))),T(c2,l2)});var U=J($),O=c2=>{KL(c2,{get data(){return r(o)},set data(u2){z(o,u2)},$$legacy:!0})};i2(U,c2=>{r(o),F(()=>{var u2;return(u2=r(o))===null||u2===void 0?void 0:u2.raw})&&c2(O)}),T(P,I)}),T(j,E)},$$slots:{default:!0}})),u1()}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-boolean-toggle.svelte-eli4ob {
  padding: 0;
  margin: 1px 0 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-value-color-boolean, #ff8c00);
}

.jse-boolean-toggle.svelte-eli4ob:not(.jse-readonly) {
  cursor: pointer;
}`);var ew=a2('<div role="checkbox" tabindex="-1"><!></div>');function aw(e,a){f1(a,!1);var n=b(a,"path",9),t=b(a,"value",9),c=b(a,"readOnly",9),l=b(a,"onPatch",9),o=b(a,"focus",9);_1(!0);var s,i=ew(),f=q(i),u=Z2(()=>t()===!0?J5:G5);c4(f,{get data(){return r(u)}}),E2(()=>{j4(i,"aria-checked",t()===!0),s=A1(i,1,"jse-boolean-toggle svelte-eli4ob",null,s,{"jse-readonly":c()}),j4(i,"title",c()?"Boolean value ".concat(t()):"Click to toggle this boolean value")}),w2("mousedown",i,function(d){d.stopPropagation(),c()||(l()([{op:"replace",path:c1(n()),value:!t()}]),o()())}),T(e,i),u1()}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-color-picker-popup.svelte-v77py2 .picker_wrapper.popup,
.jse-color-picker-popup.svelte-v77py2 .picker_wrapper.popup .picker_arrow::before,
.jse-color-picker-popup.svelte-v77py2 .picker_wrapper.popup .picker_arrow::after {
  background: var(--jse-color-picker-background, var(--jse-panel-background, #ebebeb));
  line-height: normal;
}
.jse-color-picker-popup.svelte-v77py2 .picker_slider,
.jse-color-picker-popup.svelte-v77py2 .picker_sl,
.jse-color-picker-popup.svelte-v77py2 .picker_editor input,
.jse-color-picker-popup.svelte-v77py2 .picker_sample,
.jse-color-picker-popup.svelte-v77py2 .picker_done button {
  box-shadow: var(--jse-color-picker-border-box-shadow, #cbcbcb 0 0 0 1px);
}
.jse-color-picker-popup.svelte-v77py2 .picker_editor input {
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
}
.jse-color-picker-popup.svelte-v77py2 .picker_done button {
  background: var(--jse-button-background, #e0e0e0);
  color: var(--jse-button-color, var(--jse-text-color, #4d4d4d));
}
.jse-color-picker-popup.svelte-v77py2 .picker_done button:hover {
  background: var(--jse-button-background-highlight, #e7e7e7);
}`);var nw=a2('<div class="jse-color-picker-popup svelte-v77py2"></div>');function tw(e,a){f1(a,!1);var n=b(a,"color",8),t=b(a,"onChange",8),c=b(a,"showOnTop",8),l=R(),o=()=>{};x3(z1(function*(){var i,f=new((i=yield import("./chunk-FCZAM5Y7.js"))===null||i===void 0?void 0:i.default)({parent:r(l),color:n(),popup:c()?"top":"bottom",onDone(u){var d=u.rgba[3]===1?u.hex.substring(0,7):u.hex;t()(d)}});f.show(),o=()=>{f.destroy()}})),ze(()=>{o()}),_1();var s=nw();r0(s,i=>z(l,i),()=>r(l)),T(e,s),u1()}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-color-picker-button.svelte-13mgyo6 {
  font-size: var(--jse-font-size-mono, 14px);
  width: var(--jse-color-picker-button-size, 1em);
  height: var(--jse-color-picker-button-size, 1em);
  box-sizing: border-box;
  padding: 0;
  margin: 2px 0 0 calc(0.5 * var(--jse-padding, 10px));
  display: inline-flex;
  vertical-align: top;
  border: 1px solid var(--jse-text-color, #4d4d4d);
  border-radius: 2px;
  background: inherit;
  outline: none;
}

.jse-color-picker-button.svelte-13mgyo6:not(.jse-readonly) {
  cursor: pointer;
}`);var rw=a2('<button type="button"></button>');function cw(e,a){f1(a,!1);var n=R(void 0,!0),t=R(void 0,!0),{openAbsolutePopup:c}=ga("absolute-popup"),l=b(a,"path",9),o=b(a,"value",9),s=b(a,"readOnly",9),i=b(a,"onPatch",9),f=b(a,"focus",9);function u(v){i()([{op:"replace",path:c1(l()),value:v}]),d()}function d(){f()()}Y(()=>M(o()),()=>{z(n,Rv(o()))}),Y(()=>(M(s()),M(o())),()=>{z(t,s()?"Color ".concat(o()):"Click to open a color picker")}),L4(),_1(!0);var h,m=rw();E2(()=>{var v;h=A1(m,1,"jse-color-picker-button svelte-13mgyo6",null,h,{"jse-readonly":s()}),me(m,"background: ".concat((v=r(n))!==null&&v!==void 0?v:"")),j4(m,"title",r(t)),j4(m,"aria-label",r(t))}),w2("click",m,function(v){var p,g;if(!s()){var y=v.target,L=y.getBoundingClientRect().top,S=((p=(g=er(y))===null||g===void 0?void 0:g.innerHeight)!==null&&p!==void 0?p:0)-L<300&&L>300,j={color:o(),onChange:u,showOnTop:S};c(tw,j,{anchor:y,closeOnOuterClick:!0,onClose:d,offsetTop:18,offsetLeft:-8,height:300})}}),T(e,m),u1()}var uo=1e3,qt=100,hc=100,Uc=2e4,an=[{start:0,end:qt}],lw=1048576,ow=1048576,po=10485760,vo="Insert or paste contents, enter [ insert a new array, enter { to insert a new object, or start typing to insert a new value",ys="Open context menu (Click here, right click on the selection, or use the context menu button or Ctrl+Q)",Da="hover-insert-inside",gc="hover-insert-after",Fd="hover-collection",mo="valid",Bd="repairable",x6=336,L6=260,kt=100,Id={[de.asc]:"ascending",[de.desc]:"descending"};function Qv(e){for(var a=_i(e,s=>s.start),n=[a[0]],t=0;t<a.length;t++){var c=n.length-1,l=n[c],o=a[t];o.start<=l.end?n[c]={start:Math.min(l.start,o.start),end:Math.max(l.end,o.end)}:n.push(o)}return n}function Fo(e){return Hc(e)+qt}function Hc(e){return Math.floor(e/qt)*qt}function Bo(e){return!!e&&(e.type==="space"||e.space===!0)}function aa(e){return!!e&&(e.type==="separator"||e.separator===!0)}function Ud(e){return!!e&&e.type==="label"&&typeof e.text=="string"}function b6(e){return!!e&&typeof e.onClick=="function"}function q8(e){return!!e&&e.type==="dropdown-button"&&b6(e.main)&&Array.isArray(e.items)}function Hd(e){return!!e&&e.type==="row"&&Array.isArray(e.items)}function Wd(e){return!!e&&e.type==="column"&&Array.isArray(e.items)}function Vd(e){return d4(e)&&d4(e.parseError)}function sw(e){return d4(e)&&Array.isArray(e.validationErrors)}function iw(e){return d4(e)&&Array.isArray(e.path)&&typeof e.message=="string"&&"severity"in e}function fw(e){return d4(e)&&iw(e)&&typeof e.isChildError=="boolean"}function l_(e){return d4(e)&&"component"in e&&d4(e.props)}function uw(e){return d4(e)&&typeof e.action=="function"&&d4(e.props)}function B3(e){return e!==void 0&&e.type==="object"}function a3(e){return e!==void 0&&e.type==="array"}function Ms(e){return e!==void 0&&e.type==="value"}function c8(e){return B3(e)||a3(e)}function Xv(e){return e!==void 0&&Array.isArray(e.searchResults)}function Wc(e){return!!e&&e.type==="tree"}function Jd(e){return!!e&&e.type==="text"}function Gd(e){return!!e&&e.type==="mode"}function Io(e){var{json:a,expand:n}=e,t=(function(c){var{json:l,factory:o}=c;return Array.isArray(l)?o.createArrayDocumentState():d4(l)?o.createObjectDocumentState():l!==void 0?o.createValueDocumentState():void 0})({json:a,factory:ws});return n&&t?Ce(a,t,[],n):t}function xs(){var{expanded:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1};return{type:"array",expanded:e,visibleSections:an,items:[]}}function Ls(){var{expanded:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1};return{type:"object",expanded:e,properties:{}}}var ws={createObjectDocumentState:Ls,createArrayDocumentState:xs,createValueDocumentState:function(){return{type:"value"}}};function Yv(e,a,n,t){var{createObjectDocumentState:c,createArrayDocumentState:l,createValueDocumentState:o}=t;return(function s(i,f,u){if(Array.isArray(i)){var d=a3(f)?f:l();if(u.length===0)return d;var h=p3(u[0]),m=s(i[h],d.items[h],u.slice(1));return m3(d,["items",u[0]],m)}if(d4(i)){var v=B3(f)?f:c();if(u.length===0)return v;var p=u[0],g=s(i[p],v.properties[p],u.slice(1));return m3(v,["properties",p],g)}return Ms(f)?f:o()})(e,a,n)}function X3(e,a){return $t(e,a,arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],(n,t)=>{if(n!==void 0&&t!==void 0)return Array.isArray(n)?a3(t)?t:xs({expanded:!!c8(t)&&t.expanded}):d4(n)?B3(t)?t:Ls({expanded:!!c8(t)&&t.expanded}):Ms(t)?t:void 0},()=>!0)}function $t(e,a,n,t,c){var l=t(e,a,n);if(Array.isArray(e)&&a3(l)&&c(l)){var o=[];return Cs(e,l.visibleSections,i=>{var f=n.concat(String(i)),u=$t(e[i],l.items[i],f,t,c);u!==void 0&&(o[i]=u)}),Pd(o,l.items)?l:N2(N2({},l),{},{items:o})}if(d4(e)&&B3(l)&&c(l)){var s={};return Object.keys(e).forEach(i=>{var f=n.concat(i),u=$t(e[i],l.properties[i],f,t,c);u!==void 0&&(s[i]=u)}),Pd(Object.values(s),Object.values(l.properties))?l:N2(N2({},l),{},{properties:s})}return l}function Cs(e,a,n){a.forEach(t=>{var{start:c,end:l}=t;$v(c,Math.min(e.length,l),n)})}function Dt(e,a){for(var n=e,t=[],c=0;c<a.length;){if(Array.isArray(n)){var l=a[c];t.push("items",l),n=n[p3(l)]}else{if(!d4(n))throw new Error("Cannot convert path: Object or Array expected at index ".concat(c));var o=a[c];t.push("properties",o),n=n[o]}c++}return t}function Ce(e,a,n,t){for(var c=a,l=function(s){var i=n.slice(0,s);c=pn(e,c,i,(f,u)=>{var d=c8(u)&&!u.expanded?N2(N2({},u),{},{expanded:!0}):u;return a3(d)?(function(h,m){if((function(g,y){return g.some(L=>y>=L.start&&y<L.end)})(h.visibleSections,m))return h;var v=Hc(m),p={start:v,end:Fo(v)};return N2(N2({},h),{},{visibleSections:Qv(h.visibleSections.concat(p))})})(d,p3(n[s])):d})},o=0;o<n.length;o++)l(o);return pn(e,c,n,(s,i)=>(function(f,u,d,h){return $t(f,u,d,(m,v,p)=>Array.isArray(m)&&h(p)?a3(v)?v.expanded?v:N2(N2({},v),{},{expanded:!0}):xs({expanded:!0}):d4(m)&&h(p)?B3(v)?v.expanded?v:N2(N2({},v),{},{expanded:!0}):Ls({expanded:!0}):v,m=>c8(m)&&m.expanded)})(s,i,[],t))}function Kd(e,a,n,t){return pn(e,a,n,(c,l)=>t?(function(o,s,i){return $t(o,s,i,(f,u)=>Qd(u),()=>!0)})(c,l,n):Qd(l))}function Qd(e){return a3(e)&&e.expanded?N2(N2({},e),{},{expanded:!1,visibleSections:an}):B3(e)&&e.expanded?N2(N2({},e),{},{expanded:!1}):e}function Zv(e,a,n){var t={json:e,documentState:a},c=n.reduce((l,o)=>({json:O3(l.json,[o]),documentState:dw(l.json,l.documentState,o)}),t);return{json:c.json,documentState:X3(c.json,c.documentState)}}function dw(e,a,n){if(S5(n))return Xd(e,a,n,void 0);if(k5(n))return Yd(e,a,n);if(dr(n)){var t=_3(e,n.path),c=Je(e,a,t);return c?u5(e,a,t,{type:"value",enforceString:c}):a}return pr(n)||O6(n)?(function(l,o,s){if(O6(s)&&s.from===s.path)return o;var i=o,f=_3(l,s.from),u=Ue(l,i,f);return O6(s)&&(i=Yd(l,i,{path:s.from})),i=Xd(l,i,{path:s.path},u),i})(e,a,n):a}function Ue(e,a,n){try{return W2(a,Dt(e,n))}catch{return}}function js(e,a,n,t,c){var l=Yv(e,a,n,c);return Tn(l,Dt(e,n),o=>{var s=W2(e,n);return t(s,o)})}function u5(e,a,n,t){return(function(c,l,o,s,i){var f=Yv(c,l,o,i);return m3(f,Dt(c,o),s)})(e,a,n,t,ws)}function pn(e,a,n,t){return js(e,a,n,t,ws)}function Xd(e,a,n,t){var c=_3(e,n.path),l=a;return l=pn(e,l,Y1(c),(o,s)=>{if(!a3(s))return s;var i=p3(U1(c)),{items:f,visibleSections:u}=s;return N2(N2({},s),{},{items:i<f.length?NL(f,i,t!==void 0?[t]:Array(1)):f,visibleSections:em(u,i,1)})}),u5(e,l,c,t)}function Yd(e,a,n){var t=_3(e,n.path),c=Y1(t),l=W2(e,c);return Array.isArray(l)?pn(e,a,c,(o,s)=>{if(!a3(s))return s;var i=p3(U1(t)),{items:f,visibleSections:u}=s;return N2(N2({},s),{},{items:f.slice(0,i).concat(f.slice(i+1)),visibleSections:em(u,i,-1)})}):(function(o,s,i){var f=Dt(o,i);return d3(s,f)?Ca(s,Dt(o,i)):s})(e,a,t)}function em(e,a,n){return(function(t){for(var c=t.slice(0),l=1;l<c.length;)c[l-1].end===c[l].start&&(c[l-1]={start:c[l-1].start,end:c[l].end},c.splice(l)),l++;return c})(e.map(t=>({start:t.start>a?t.start+n:t.start,end:t.end>a?t.end+n:t.end})))}function Je(e,a,n){var t,c=W2(e,n),l=Ue(e,a,n),o=Ms(l)?l.enforceString:void 0;return typeof o=="boolean"?o:typeof(t=c)=="string"&&typeof wn(t,JSON)!="string"}function tr(e,a){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],t=e.indexOf(a);return t!==-1?n?e.slice(t):e.slice(t+1):[]}function Ss(e,a){var n=[];return(function t(c,l,o){n.push(o),p0(c)&&a3(l)&&l.expanded&&Cs(c,l.visibleSections,s=>{t(c[s],l.items[s],o.concat(String(s)))}),y0(c)&&B3(l)&&l.expanded&&Object.keys(c).forEach(s=>{t(c[s],l.properties[s],o.concat(s))})})(e,a,[]),n}function am(e,a){var n=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],t=[];return(function c(l,o){t.push({path:o,type:je.value});var s=Ue(e,a,o);if(l&&c8(s)&&s.expanded){if(n&&t.push({path:o,type:je.inside}),p0(l)){var i=a3(s)?s.visibleSections:an;Cs(l,i,f=>{var u=o.concat(String(f));c(l[f],u),n&&t.push({path:u,type:je.after})})}y0(l)&&Object.keys(l).forEach(f=>{var u=o.concat(f);t.push({path:u,type:je.key}),c(l[f],u),n&&t.push({path:u,type:je.after})})}})(e,[]),t}function ho(e,a,n){var t=Ss(e,a),c=t.map(c1).indexOf(c1(n));if(c!==-1&&c<t.length-1)return t[c+1]}function l8(e,a,n){var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10240;return Ce(e,a,n,_L({json:W2(e,n)},t)?Nt:ks)}function go(e,a,n){var t=Ue(e,a,n);return c8(t)&&t.expanded?a:l8(e,a,n)}function Nt(e){return e.length===0||e.length===1&&e[0]==="0"}function Uo(e){return e.length===0}function ks(){return!0}function Pc(){return!1}function U3(e){return e&&e.type===H4.after||!1}function Y0(e){return e&&e.type===H4.inside||!1}function n3(e){return e&&e.type===H4.key||!1}function h4(e){return e&&e.type===H4.value||!1}function Q4(e){return e&&e.type===H4.multi||!1}function d5(e){return Q4(e)&&H1(e.focusPath,e.anchorPath)}function Ft(e){return Q4(e)||U3(e)||Y0(e)||n3(e)||h4(e)}function zo(e){return e&&e.type===H4.text||!1}function ma(e,a){var n=[];return(function(t,c,l){if(c){var o=Qa(c),s=r1(c);if(H1(o,s))return l(o);if(t!==void 0){var i=tm(o,s);if(o.length===i.length||s.length===i.length)return l(i);var f=k3(o,s),u=w6(t,f),d=pa(t,f),h=N6(t,f,u),m=N6(t,f,d);if(!(h===-1||m===-1)){var v=W2(t,i);if(y0(v)){for(var p=Object.keys(v),g=h;g<=m;g++){var y=l(i.concat(p[g]));if(y!==void 0)return y}return}if(p0(v)){for(var L=h;L<=m;L++){var S=l(i.concat(String(L)));if(S!==void 0)return S}return}throw new Error("Failed to create selection")}}}})(e,a,t=>{n.push(t)}),n}function nm(e){return Y0(e)?e.path:Y1(r1(e))}function w6(e,a){if(!Q4(a))return a.path;var n=N6(e,a,a.anchorPath);return N6(e,a,a.focusPath)<n?a.focusPath:a.anchorPath}function pa(e,a){if(!Q4(a))return a.path;var n=N6(e,a,a.anchorPath);return N6(e,a,a.focusPath)>n?a.focusPath:a.anchorPath}function Zd(e,a,n){var t=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(n){var c=t?r1(n):w6(e,n),l=(function(i,f,u){var d=Ss(i,f),h=d.map(c1),m=c1(u),v=h.indexOf(m);if(v!==-1&&v>0)return d[v-1]})(e,a,c);if(t)return Y0(n)||U3(n)?l!==void 0?k3(c,c):void 0:l!==void 0?k3(Qa(n),l):void 0;if(U3(n)||Y0(n))return K1(c);if(n3(n)){if(l===void 0||l.length===0)return;var o=Y1(l),s=W2(e,o);return Array.isArray(s)||f4(l)?K1(l):P6(l)}return h4(n),l!==void 0?K1(l):void 0}}function ep(e,a,n,t){if(!n)return{caret:void 0,previous:void 0,next:void 0};var c=am(e,a,t),l=c.findIndex(o=>H1(o.path,r1(n))&&String(o.type)===String(n.type));return{caret:l!==-1?c[l]:void 0,previous:l!==-1&&l>0?c[l-1]:void 0,next:l!==-1&&l<c.length-1?c[l+1]:void 0}}function $8(e,a){for(var n=Ss(e,a),t=0;t<n.length-1&&n[t+1].length>n[t].length;)t++;var c=n[t];return c===void 0||c.length===0||Array.isArray(W2(e,Y1(c)))?K1(c):P6(c)}function vn(e,a){if(a.length===1){var n=Re(a);if(n.op==="replace")return K1(_3(e,n.path))}if(!f4(a)&&a.every(o=>o.op==="move")){var t=Re(a),c=a.slice(1);if((pr(t)||O6(t))&&t.from!==t.path&&c.every(o=>(pr(o)||O6(o))&&o.from===o.path))return P6(_3(e,t.path))}var l=a.filter(o=>o.op!=="test"&&o.op!=="remove"&&(o.op!=="move"||o.from!==o.path)&&typeof o.path=="string").map(o=>_3(e,o.path));if(!f4(l))return{type:H4.multi,anchorPath:Re(l),focusPath:U1(l)}}function tm(e,a){for(var n=0;n<e.length&&n<a.length&&e[n]===a[n];)n++;return e.slice(0,n)}function Vc(e){return n3(e)||h4(e)||d5(e)}function ap(e,a){return Vc(a)&&M0(W2(e,r1(a)))?r1(a):Y1(r1(a))}function Xe(e,a){if(e.length<a.length)return!1;for(var n=0;n<a.length;n++)if(e[n]!==a[n])return!1;return!0}function We(e){if(e3(e)){var{type:a,path:n}=e;return{type:a,path:n}}return e}function P6(e){return{type:H4.key,path:e}}function Ns(e,a){return{type:H4.key,path:e,edit:!0,initialValue:a}}function K1(e){return{type:H4.value,path:e}}function Jc(e,a){return{type:H4.value,path:e,edit:!0,initialValue:a}}function T6(e){return{type:H4.inside,path:e}}function k6(e){return{type:H4.after,path:e}}function k3(e,a){var n=tm(e,a),t=e.length>n.length&&a.length>n.length;return{type:H4.multi,anchorPath:t?n.concat(e[n.length]):n,focusPath:t?n.concat(a[n.length]):n}}function rm(e,a,n,t){if(n3(a))return String(U1(a.path));if(h4(a)){var c=W2(e,a.path);return typeof c=="string"?c:t.stringify(c,null,n)}if(Q4(a)){if(f4(a.focusPath))return t.stringify(e,null,n);var l=nm(a),o=W2(e,l);if(Array.isArray(o)){if(d5(a)){var s=W2(e,a.focusPath);return t.stringify(s,null,n)}return ma(e,a).map(i=>{var f=W2(e,i);return"".concat(t.stringify(f,null,n),",")}).join(`
`)}return ma(e,a).map(i=>{var f=U1(i),u=W2(e,i);return"".concat(t.stringify(f),": ").concat(t.stringify(u,null,n),",")}).join(`
`)}}function e3(e){return(n3(e)||h4(e))&&e.edit===!0}function K8(e){return n3(e)||h4(e)||Q4(e)}function zc(e){return n3(e)||h4(e)||d5(e)}function Ho(e){switch(e.type){case je.key:return P6(e.path);case je.value:return K1(e.path);case je.after:return k6(e.path);case je.inside:return T6(e.path)}}function np(e,a){switch(e){case H4.key:return P6(a);case H4.value:return K1(a);case H4.after:return k6(a);case H4.inside:return T6(a);case H4.multi:case H4.text:return k3(a,a)}}function bc(e,a,n){if(a)return Bt(e,a,n)||Xe(Q4(a)?Y1(a.focusPath):a.path,n)?a:void 0}function Bt(e,a,n){if(e===void 0||!a)return!1;if(n3(a)||Y0(a)||U3(a))return H1(a.path,n);if(h4(a))return Xe(n,a.path);if(Q4(a)){var t=w6(e,a),c=pa(e,a),l=Y1(a.focusPath);if(!Xe(n,l)||n.length<=l.length)return!1;var o=N6(e,a,t),s=N6(e,a,c),i=N6(e,a,n);return i!==-1&&i>=o&&i<=s}return!1}function N6(e,a,n){var t=Y1(a.focusPath);if(!Xe(n,t)||n.length<=t.length)return-1;var c=n[t.length],l=W2(e,t);if(y0(l))return Object.keys(l).indexOf(c);if(p0(l)){var o=p3(c);if(o<l.length)return o}return-1}function r1(e){return Q4(e)?e.focusPath:e.path}function Qa(e){return Q4(e)?e.anchorPath:e.path}function Ee(){for(var e=[],a=arguments.length,n=new Array(a),t=0;t<a;t++)n[t]=arguments[t];for(var c of n)if(typeof c=="string"&&e.push(c),c&&typeof c=="object")for(var l in c)Object.hasOwnProperty.call(c,l)&&c[l]&&e.push(l);return e.join(" ")}function Gc(e,a,n){return Ee("jse-value","jse-"+ps(e,n),{"jse-url":f5(e),"jse-empty":typeof e=="string"&&e.length===0,"jse-table-cell":a===H0.table})}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-1r0oryi {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-1r0oryi, .jse-value.jse-array.svelte-1r0oryi {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-1r0oryi {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-1r0oryi {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-1r0oryi {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-1r0oryi {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-1r0oryi {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

div.jse-editable-div.svelte-1r0oryi {
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  cursor: text !important;
  word-break: normal;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
div.jse-editable-div.jse-short-text.svelte-1r0oryi {
  overflow-wrap: normal;
}
div.jse-editable-div.jse-table-cell.svelte-1r0oryi {
  overflow-wrap: normal;
  white-space: nowrap;
}
div.jse-editable-div[contenteditable=true].svelte-1r0oryi {
  outline: var(--jse-edit-outline, 2px solid #656565);
  background: var(--jse-background-color, #fff);
  position: relative;
  display: inline-block;
  border-radius: 0;
  z-index: 3;
}
div.jse-editable-div.jse-empty.svelte-1r0oryi:not(:focus) {
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
div.jse-editable-div.jse-empty.svelte-1r0oryi::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
}`);var pw=a2('<div role="textbox" tabindex="0" contenteditable="true" spellcheck="false"></div>');function cm(e,a){f1(a,!1);var n=t3("jsoneditor:EditableDiv"),t=b(a,"value",9),c=b(a,"initialValue",9),l=b(a,"shortText",9,!1),o=b(a,"label",9),s=b(a,"onChange",9),i=b(a,"onCancel",9),f=b(a,"onFind",9),u=b(a,"onPaste",9,$0),d=b(a,"onValueClass",9,()=>""),h=R(void 0,!0),m=R(void 0,!0),v=!1;function p(){return r(h)?(function(L){return L.replace(/\n$/,"")})(r(h).innerText):""}function g(L){r(h)&&Y3(h,r(h).innerText=dn(L))}x3(()=>{n("onMount",{value:t(),initialValue:c()}),g(c()!==void 0?c():t()),r(h)&&(function(L){if(L.firstChild!=null){var S=document.createRange(),j=window.getSelection();S.setStart(L,1),S.collapse(!0),j?.removeAllRanges(),j?.addRange(S)}else L.focus()})(r(h))}),ze(()=>{var L=p();n("onDestroy",{closed:v,value:t(),newValue:L}),v||L===t()||s()(L,da.no)}),Y(()=>(M(d()),M(t())),()=>{z(m,d()(t()))}),L4(),_1(!0);var y=pw();r0(y,L=>z(h,L),()=>r(h)),E2(L=>{j4(y,"aria-label",o()),A1(y,1,L,"svelte-1r0oryi")},[()=>va((M(Ee),r(m),M(l()),F(()=>Ee("jse-editable-div",r(m),{"jse-short-text":l()}))))]),w2("input",y,function(){var L=p();L===""&&g(""),z(m,d()(L))}),w2("keydown",y,function(L){L.stopPropagation();var S=E6(L);if(S==="Escape"&&(L.preventDefault(),v=!0,i()()),S==="Enter"||S==="Tab"){L.preventDefault(),v=!0;var j=p();s()(j,da.nextInside)}S==="Ctrl+F"&&(L.preventDefault(),f()(!1)),S==="Ctrl+H"&&(L.preventDefault(),f()(!0))}),w2("paste",y,function(L){if(L.stopPropagation(),u()&&L.clipboardData){var S=L.clipboardData.getData("text/plain");u()(S)}}),w2("blur",y,function(){var L=document.hasFocus(),S=p();n("handleBlur",{hasFocus:L,closed:v,value:t(),newValue:S}),document.hasFocus()&&!v&&(v=!0,S!==t()&&s()(S,da.self))}),T(e,y),u1()}function vw(e,a){f1(a,!1);var n=b(a,"path",9),t=b(a,"value",9),c=b(a,"selection",9),l=b(a,"mode",9),o=b(a,"parser",9),s=b(a,"normalization",9),i=b(a,"enforceString",9),f=b(a,"onPatch",9),u=b(a,"onPasteJson",9),d=b(a,"onSelect",9),h=b(a,"onFind",9),m=b(a,"focus",9),v=b(a,"findNextInside",9);function p(S){return i()?S:wn(S,o())}function g(){d()(K1(n())),m()()}_1(!0);var y=Z2(()=>(M(s()),M(t()),F(()=>s().escapeValue(t())))),L=Z2(()=>(M(e3),M(c()),F(()=>e3(c())?c().initialValue:void 0)));cm(e,{get value(){return r(y)},get initialValue(){return r(L)},label:"Edit value",onChange:function(S,j){f()([{op:"replace",path:c1(n()),value:p(s().unescapeValue(S))}],(x,E,P)=>{if(!P||H1(n(),r1(P)))return{state:E,selection:j===da.nextInside?v()(n()):K1(n())}}),m()()},onCancel:g,onPaste:function(S){try{var j=o().parse(S);M0(j)&&u()({path:n(),contents:j,onPasteAsJson:()=>{g();var x=[{op:"replace",path:c1(n()),value:j}];f()(x,(E,P)=>({state:l8(E,P,n())}))}})}catch{}},get onFind(){return h()},onValueClass:function(S){return Gc(p(s().unescapeValue(S)),l(),o())}}),u1()}function Q8(e,a,n){var t=Y1(a),c=W2(e,t);if(p0(c)){var l=p3(U1(a));return n.map((f,u)=>({op:"add",path:c1(t.concat(String(l+u))),value:f.value}))}if(y0(c)){var o=U1(a),s=Object.keys(c),i=o!==void 0?tr(s,o,!0):[];return[...n.map(f=>{var u=ar(f.key,s);return{op:"add",path:c1(t.concat(u)),value:f.value}}),...i.map(f=>ha(t,f))]}throw new Error("Cannot create insert operations: parent must be an Object or Array")}function Wo(e,a,n){var t=W2(e,a);if(Array.isArray(t)){var c=t.length;return n.map((l,o)=>({op:"add",path:c1(a.concat(String(c+o))),value:l.value}))}return n.map(l=>{var o=ar(l.key,Object.keys(t));return{op:"add",path:c1(a.concat(o)),value:l.value}})}function rr(e,a,n,t){var c=a.filter(s=>s!==n),l=ar(t,c),o=tr(a,n,!1);return[{op:"move",from:c1(e.concat(n)),path:c1(e.concat(l))},...o.map(s=>ha(e,s))]}function lm(e,a){var n=U1(a);if(f4(n))throw new Error("Cannot duplicate root object");var t=Y1(n),c=U1(n),l=W2(e,t);if(p0(l)){var o=U1(a),s=o?p3(U1(o))+1:0;return[...a.map((u,d)=>({op:"copy",from:c1(u),path:c1(t.concat(String(d+s)))}))]}if(y0(l)){var i=Object.keys(l),f=c!==void 0?tr(i,c,!1):[];return[...a.map(u=>{var d=ar(U1(u),i);return{op:"copy",from:c1(u),path:c1(t.concat(d))}}),...f.map(u=>ha(t,u))]}throw new Error("Cannot create duplicate operations: parent must be an Object or Array")}function om(e,a){if(h4(a))return[{op:"move",from:c1(a.path),path:""}];if(!Q4(a))throw new Error("Cannot create extract operations: parent must be an Object or Array");var n=Y1(a.focusPath),t=W2(e,n);if(p0(t)){var c=ma(e,a).map(o=>{var s=p3(U1(o));return t[s]});return[{op:"replace",path:"",value:c}]}if(y0(t)){var l={};return ma(e,a).forEach(o=>{var s=String(U1(o));l[s]=t[s]}),[{op:"replace",path:"",value:l}]}throw new Error("Cannot extract: unsupported type of selection "+JSON.stringify(a))}function sm(e,a,n,t){if(n3(a)){var c=Dv(n,t),l=Y1(a.path),o=W2(e,l);return rr(l,Object.keys(o),U1(a.path),typeof c=="string"?c:n)}if(h4(a)||Q4(a)&&f4(a.focusPath))try{return[{op:"replace",path:c1(r1(a)),value:Zt(n,E=>Yt(E,t))}]}catch{return[{op:"replace",path:c1(r1(a)),value:n}]}if(Q4(a)){var s=bo(n,t);return(function(E,P,I){var k=Re(P),$=Y1(k),U=W2(E,$);if(p0(U)){var O=Re(P),c2=O?p3(U1(O)):0;return[...Kc(P),...I.map((P2,Q2)=>({op:"add",path:c1($.concat(String(Q2+c2))),value:P2.value}))]}if(y0(U)){var u2=U1(P),l2=Y1(u2),S2=U1(u2),q2=Object.keys(U),f2=S2!==void 0?tr(q2,S2,!1):[],o2=new Set(P.map(P2=>U1(P2))),d2=q2.filter(P2=>!o2.has(P2));return[...Kc(P),...I.map(P2=>{var Q2=ar(P2.key,d2);return{op:"add",path:c1(l2.concat(Q2)),value:P2.value}}),...f2.map(P2=>ha(l2,P2))]}throw new Error("Cannot create replace operations: parent must be an Object or Array")})(e,ma(e,a),s)}if(U3(a)){var i=bo(n,t),f=a.path,u=Y1(f),d=W2(e,u);if(p0(d)){var h=p3(U1(f));return Q8(e,u.concat(String(h+1)),i)}if(y0(d)){var m=String(U1(f)),v=Object.keys(d);if(f4(v)||U1(v)===m)return Wo(e,u,i);var p=v.indexOf(m),g=v[p+1];return Q8(e,u.concat(g),i)}throw new Error("Cannot create insert operations: parent must be an Object or Array")}if(Y0(a)){var y=bo(n,t),L=a.path,S=W2(e,L);if(p0(S))return Q8(e,L.concat("0"),y);if(y0(S)){var j=Object.keys(S);if(f4(j))return Wo(e,L,y);var x=Re(j);return Q8(e,L.concat(x),y)}throw new Error("Cannot create insert operations: parent must be an Object or Array")}throw new Error("Cannot insert: unsupported type of selection "+JSON.stringify(a))}function Kc(e){return e.map(a=>({op:"remove",path:c1(a)})).reverse()}function ha(e,a){return{op:"move",from:c1(e.concat(a)),path:c1(e.concat(a))}}function bo(e,a){var n=/^\s*{/.test(e),t=/^\s*\[/.test(e),c=Dv(e,a),l=c!==void 0?c:Zt(e,o=>Yt(o,a));return n&&d4(l)||t&&Array.isArray(l)?[{key:"New item",value:l}]:Array.isArray(l)?l.map((o,s)=>({key:"New item "+s,value:o})):d4(l)?Object.keys(l).map(o=>({key:o,value:l[o]})):[{key:"New item",value:l}]}function im(e,a){if(n3(a)){var n=Y1(a.path),t=W2(e,n),c=rr(n,Object.keys(t),U1(a.path),"");return{operations:c,newSelection:vn(e,c)}}if(h4(a))return{operations:[{op:"replace",path:c1(a.path),value:""}],newSelection:a};if(Q4(a)){var l=ma(e,a),o=Kc(l),s=U1(l);if(f4(s))return{operations:[{op:"replace",path:"",value:""}],newSelection:K1([])};var i=Y1(s),f=W2(e,i);if(p0(f)){var u=Re(l),d=p3(U1(u));return{operations:o,newSelection:d===0?T6(i):k6(i.concat(String(d-1)))}}if(y0(f)){var h=Object.keys(f),m=Re(l),v=U1(m),p=h.indexOf(v),g=h[p-1];return{operations:o,newSelection:p===0?T6(i):k6(i.concat(g))}}throw new Error("Cannot create remove operations: parent must be an Object or Array")}throw new Error("Cannot remove: unsupported type of selection "+JSON.stringify(a))}function fm(e,a){var n=(function(t,c){if(f4(c)||!c.every(O6))return c;var l=[];for(var o of c){var s=tp(w3(o.from)),i=tp(w3(o.path));if(!s||!i)return c;l.push({from:s,path:i,operation:o})}var f=l[0].path.parent,u=W2(t,f);if(!y0(u)||!l.every(v=>(function(p,g){return H1(p.from.parent,g)&&H1(p.path.parent,g)})(v,f)))return c;var d=(function(v,p){var g=Object.keys(p),y=g.slice();for(var L of v){var S=y.indexOf(L.from.key);S!==-1&&(y.splice(S,1),y.push(L.path.key))}for(var j=0;j<g.length&&g[j]===y[j];)j++;return y[j]})(l,t),h=v=>v.operation,m=l.filter(v=>v.operation.from!==v.operation.path);return m.some(v=>v.path.key===d)?m.map(h):[ha(f,d),...m.map(h)]})(e,a);return vr(e,n,{before:(t,c,l)=>{if(k5(c)){var o=w3(c.path);return{revertOperations:[...l,...yo(t,o)]}}if(O6(c)){var s=w3(c.from);return{revertOperations:c.from===c.path?[c,...yo(t,s)]:[...l,...yo(t,s)]}}return{document:t}}})}function tp(e){return e.length>0?{parent:Y1(e),key:U1(e)}:void 0}function yo(e,a){var n=Y1(a),t=U1(a),c=W2(e,n);return y0(c)?tr(Object.keys(c),t,!1).map(l=>ha(n,l)):[]}function rp(e){var a=e.activeIndex<e.items.length-1?e.activeIndex+1:e.items.length>0?0:-1,n=e.items[a],t=e.items.map((c,l)=>N2(N2({},c),{},{active:l===a}));return N2(N2({},e),{},{items:t,activeItem:n,activeIndex:a})}function cp(e,a){var n,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},c=e.toLowerCase(),l=(n=t?.maxResults)!==null&&n!==void 0?n:1/0,o=t?.columns,s=[],i=[];function f(g){s.length>=l||s.push(g)}function u(g,y){if(p0(y)){var L=i.length;i.push("0");for(var S=0;S<y.length;S++)if(i[L]=String(S),u(g,y[S]),s.length>=l)return;i.pop()}else if(y0(y)){var j=Object.keys(y),x=i.length;for(var E of(i.push(""),j))if(i[x]=E,lp(E,g,i,Se.key,f),u(g,y[E]),s.length>=l)return;i.pop()}else lp(String(y),g,i,Se.value,f)}if(e==="")return[];if(o){if(!Array.isArray(a))throw new Error("json must be an Array when option columns is defined");for(var d=0;d<a.length;d++){i[0]=String(d);for(var h=a[d],m=0;m<o.length;m++){var v=o[m];if(v.length===1)i[1]=v[0];else for(var p=0;p<v.length;p++)i[p+1]=v[p];for(;i.length>v.length+1;)i.pop();u(c,W2(h,v))}if(s.length>=l)break}return s}return u(c,a),s}function lp(e,a,n,t,c){var l=e.toLowerCase(),o=0,s=-1,i=-1;do(i=l.indexOf(a,s))!==-1&&(s=i+a.length,c({path:n.slice(0),field:t,fieldIndex:o,start:i,end:s}),o++);while(i!==-1)}function Vo(e,a,n,t){return e.substring(0,n)+a+e.substring(t)}function op(e,a,n){var t=e;return ji(n,c=>{t=Vo(t,a,c.start,c.end)}),t}function mw(e,a,n,t,c){var{field:l,path:o,start:s,end:i}=t;if(l===Se.key){var f=Y1(o),u=W2(e,f),d=U1(o),h=rr(f,Object.keys(u),d,Vo(d,n,s,i));return{newSelection:vn(e,h),operations:h}}if(l===Se.value){var m=W2(e,o);if(m===void 0)throw new Error("Cannot replace: path not found ".concat(c1(o)));var v=typeof m=="string"?m:String(m),p=Je(e,a,o),g=Vo(v,n,s,i),y=[{op:"replace",path:c1(o),value:p?g:wn(g,c)}];return{newSelection:vn(e,y),operations:y}}throw new Error("Cannot replace: unknown type of search result field ".concat(l))}function sp(e){return e.path.concat(e.field,String(e.fieldIndex))}function ip(e){var a=Xv(e)?e.searchResults.filter(n=>n.field===Se.key):void 0;return a&&a.length>0?a:void 0}function fp(e){var a=Xv(e)?e.searchResults.filter(n=>n.field===Se.value):void 0;return a&&a.length>0?a:void 0}var hw={createObjectDocumentState:()=>({type:"object",properties:{}}),createArrayDocumentState:()=>({type:"array",items:[]}),createValueDocumentState:()=>({type:"value"})};function um(e,a){return a.reduce((n,t)=>(function(c,l,o,s){return js(c,l,o,s,hw)})(e,n,t.path,(c,l)=>N2(N2({},l),{},{searchResults:l.searchResults?l.searchResults.concat(t):[t]})),void 0)}function Qc(e){var a,n=(a=e?.searchResults)!==null&&a!==void 0?a:[],t=B3(e)?Object.values(e.properties).flatMap(Qc):a3(e)?e.items.flatMap(Qc):[];return n.concat(t)}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-highlight.svelte-19qyvy6 {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-highlight.jse-active.svelte-19qyvy6 {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}`);var gw=a2("<span> </span>");function dm(e,a){f1(a,!1);var n=R(),t=b(a,"text",8),c=b(a,"searchResultItems",8);Y(()=>(M(t()),M(c())),()=>{z(n,(function(o,s){var i=[],f=0;for(var u of s){var d=o.slice(f,u.start);d!==""&&i.push({resultIndex:void 0,type:"normal",text:d,active:!1});var h=o.slice(u.start,u.end);i.push({resultIndex:u.resultIndex,type:"highlight",text:h,active:u.active}),f=u.end}var m=U1(s);return m&&m.end<o.length&&i.push({type:"normal",text:o.slice(m.end),resultIndex:void 0,active:!1}),i})(String(t()),c()))}),L4(),_1();var l=W1();x0(Y2(l),1,()=>r(n),T0,(o,s)=>{var i=W1(),f=Y2(i),u=h=>{var m=s3();E2(()=>d1(m,(r(s),F(()=>r(s).text)))),T(h,m)},d=h=>{var m,v=gw(),p=q(v);E2((g,y)=>{m=A1(v,1,"jse-highlight svelte-19qyvy6",null,m,{"jse-active":r(s).active}),j4(v,"data-search-result-index",g),d1(p,y)},[()=>(r(s),F(()=>String(r(s).resultIndex))),()=>(M(dn),r(s),F(()=>dn(r(s).text)))]),T(h,v)};i2(f,h=>{r(s),F(()=>r(s).type==="normal")?h(u):h(d,!1)}),T(o,i)}),T(e,l),u1()}function Tc(e){var a=1e3;if(e<900)return e.toFixed()+" B";var n=e/a;if(n<900)return n.toFixed(1)+" KB";var t=n/a;if(t<900)return t.toFixed(1)+" MB";var c=t/a;return c<900?c.toFixed(1)+" GB":(c/a).toFixed(1)+" TB"}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-tag.svelte-ubve9r {
  border: none;
  font-size: 80%;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  color: var(--jse-tag-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  padding: 0 4px;
  line-height: normal;
  margin: 1px 0;
}
.jse-tag.svelte-ubve9r:hover {
  opacity: 0.8;
}
.jse-tag.disabled.svelte-ubve9r {
  opacity: 0.7;
  cursor: inherit;
}`);var zw=a2('<button type="button"><!></button>');function Oc(e,a){f1(a,!0);var n,t=I3(()=>a.onclick?l=>{l.preventDefault(),l.stopPropagation(),a.onclick()}:void 0),c=zw();c.__click=function(){for(var l,o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];(l=r(t))===null||l===void 0||l.apply(this,s)},(function(l,o){for(var s=arguments.length,i=new Array(s>2?s-2:0),f=2;f<s;f++)i[f-2]=arguments[f];var u=new fn(l);xn(()=>{var d,h=(d=o())!==null&&d!==void 0?d:null;u.ensure(h,h&&(m=>h(m,...i)))},Ya)})(q(c),()=>{var l;return(l=a.children)!==null&&l!==void 0?l:Jx}),E2(()=>n=A1(c,1,"jse-tag svelte-ubve9r",null,n,{disabled:!a.onclick})),T(e,c),u1()}Xt(["click"]);j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-1saqp8c {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-1saqp8c, .jse-value.jse-array.svelte-1saqp8c {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-1saqp8c {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-1saqp8c {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-1saqp8c {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-1saqp8c {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-1saqp8c {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

.jse-value.svelte-1saqp8c {
  display: inline-block;
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  word-break: normal;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}
.jse-value.jse-table-cell.svelte-1saqp8c {
  overflow-wrap: normal;
  white-space: nowrap;
}
.jse-value.jse-empty.svelte-1saqp8c {
  min-width: 4em;
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
.jse-value.jse-empty.svelte-1saqp8c::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  content: "value";
}`);var bw=a2('<div role="button" tabindex="-1" data-type="selectable-value"><!> <!></div>');function yw(e,a){f1(a,!0);var n=h6(!0),t=I3(()=>r(n)&&typeof a.value=="string"&&a.value.length>a.truncateTextSize&&(!a.searchResultItems||!a.searchResultItems.some(m=>m.active&&m.end>a.truncateTextSize))),c=I3(()=>r(t)&&typeof a.value=="string"?a.value.substring(0,a.truncateTextSize).trim():a.value),l=I3(()=>f5(a.value));function o(){z(n,!1)}var s=bw();s.__click=function(m){typeof a.value=="string"&&r(l)&&bs(m)&&(m.preventDefault(),m.stopPropagation(),window.open(a.value,"_blank"))},s.__dblclick=function(m){a.readOnly||(m.preventDefault(),a.onSelect(Jc(a.path)))};var i=q(s),f=m=>{var v=I3(()=>a.normalization.escapeValue(r(c)));dm(m,{get text(){return r(v)},get searchResultItems(){return a.searchResultItems}})},u=m=>{var v=s3();E2(p=>d1(v,p),[()=>dn(a.normalization.escapeValue(r(c)))]),T(m,v)};i2(i,m=>{a.searchResultItems?m(f):m(u,!1)});var d=J(i,2),h=m=>{Oc(m,{onclick:o,children:(v,p)=>{var g=s3();E2(y=>d1(g,"Show more (".concat(y??"",")")),[()=>Tc(a.value.length)]),T(v,g)},$$slots:{default:!0}})};i2(d,m=>{r(t)&&typeof a.value=="string"&&m(h)}),E2(m=>{A1(s,1,m,"svelte-1saqp8c"),j4(s,"title",r(l)?"Ctrl+Click or Ctrl+Enter to open url in new window":void 0)},[()=>va(Gc(a.value,a.mode,a.parser))]),T(e,s),u1()}Xt(["click","dblclick"]);j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-tooltip.svelte-brt1mq {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  border-radius: 3px;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  white-space: nowrap;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}`);var Mw=a2('<div class="jse-tooltip svelte-brt1mq"> </div>');function xw(e,a){var n=b(a,"text",8),t=Mw(),c=q(t);E2(()=>d1(c,n())),T(e,t)}function mn(e,a){var n,{text:t,openAbsolutePopup:c,closeAbsolutePopup:l}=a;function o(){n=c(xw,{text:t},{position:"top",width:10*t.length,offsetTop:3,anchor:e,closeOnOuterClick:!0})}function s(){l(n)}return e.addEventListener("mouseenter",o),e.addEventListener("mouseleave",s),{destroy(){e.removeEventListener("mouseenter",o),e.removeEventListener("mouseleave",s)}}}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-timestamp.svelte-1jcpman {
  padding: 0;
  margin: 0;
  vertical-align: middle;
  display: inline-flex;
  color: var(--jse-value-color-number, #ee422e);
}`);var Lw=a2('<div class="jse-timestamp svelte-1jcpman"><!></div>');function ww(e,a){f1(a,!1);var n=R(void 0,!0),t=ga("absolute-popup"),c=b(a,"value",9);Y(()=>M(c()),()=>{z(n,"Time: ".concat(new Date(c()).toString()))}),L4(),_1(!0);var l=Lw();c4(q(l),{get data(){return o9}}),A3(l,(o,s)=>mn?.(o,s),()=>N2({text:r(n)},t)),T(e,l),u1()}function Cw(e){var a=[];return!e.isEditing&&wL(e.value)&&a.push({component:aw,props:e}),!e.isEditing&&CL(e.value)&&a.push({component:cw,props:e}),e.isEditing&&a.push({component:vw,props:e}),e.isEditing||a.push({component:yw,props:e}),!e.isEditing&&Ro(e.value)&&a.push({component:ww,props:e}),a}function H3(e){return e.map((a,n)=>p5.test(a)?"["+a+"]":/[.[\]]/.test(a)||a===""?'["'+(function(t){return t.replace(/"/g,'\\"')})(a)+'"]':(n>0?".":"")+a).join("")}function jw(e){for(var a=[],n=0;n<e.length;)e[n]==="."&&n++,e[n]==="["?(n++,e[n]==='"'?(n++,a.push(t(l=>l==='"',!0)),c('"')):a.push(t(l=>l==="]")),c("]")):a.push(t(l=>l==="."||l==="["));function t(l){for(var o=arguments.length>1&&arguments[1]!==void 0&&arguments[1],s="";n<e.length&&!l(e[n]);)o&&e[n]==="\\"&&e[n+1]==='"'?(s+='"',n+=2):(s+=e[n],n++);return s}function c(l){if(e[n]!==l)throw new SyntaxError("Invalid JSON path: ".concat(l," expected at position ").concat(n));n++}return a}function na(e){return{value:e,label:f4(e)?"(item root)":H3(e)}}function Sw(e){if(p5.test(e))return"["+e+"]";if(As.test(e))return"."+e;var a=JSON.stringify(e);return"['"+a.substring(1,a.length-1).replace(/\\"/g,'"')+"']"}function Ie(e){return e.map(a=>p5.test(a)?"?.[".concat(a,"]"):As.test(a)?"?.".concat(a):"?.[".concat(JSON.stringify(a),"]")).join("")}var As=/^[a-zA-Z$_][a-zA-Z$_\d]*$/,p5=/^\d+$/,kw={},Nw={showWizard:!0,showOriginal:!0},Xc=Math.min,Xa=Math.max,Yc=Math.round,yc=Math.floor,Ye=e=>({x:e,y:e}),Aw={left:"right",right:"left",bottom:"top",top:"bottom"},_w={start:"end",end:"start"};function up(e,a,n){return Xa(e,Xc(a,n))}function v5(e,a){return typeof e=="function"?e(a):e}function o8(e){return e.split("-")[0]}function m5(e){return e.split("-")[1]}function pm(e){return e==="x"?"y":"x"}function vm(e){return e==="y"?"height":"width"}var Ew=new Set(["top","bottom"]);function la(e){return Ew.has(o8(e))?"y":"x"}function mm(e){return pm(la(e))}function Jo(e){return e.replace(/start|end/g,a=>_w[a])}var dp=["left","right"],pp=["right","left"],Pw=["top","bottom"],Tw=["bottom","top"];function Ow(e,a,n,t){var c=m5(e),l=(function(o,s,i){switch(o){case"top":case"bottom":return i?s?pp:dp:s?dp:pp;case"left":case"right":return s?Pw:Tw;default:return[]}})(o8(e),n==="start",t);return c&&(l=l.map(o=>o+"-"+c),a&&(l=l.concat(l.map(Jo)))),l}function Mc(e){return e.replace(/left|right|bottom|top/g,a=>Aw[a])}function Rw(e){return typeof e!="number"?(function(a){return N2({top:0,right:0,bottom:0,left:0},a)})(e):{top:e,right:e,bottom:e,left:e}}function Zc(e){var{x:a,y:n,width:t,height:c}=e;return{width:t,height:c,top:n,left:a,right:a+t,bottom:n+c,x:a,y:n}}function vp(e,a,n){var t,{reference:c,floating:l}=e,o=la(a),s=mm(a),i=vm(s),f=o8(a),u=o==="y",d=c.x+c.width/2-l.width/2,h=c.y+c.height/2-l.height/2,m=c[i]/2-l[i]/2;switch(f){case"top":t={x:d,y:c.y-l.height};break;case"bottom":t={x:d,y:c.y+c.height};break;case"right":t={x:c.x+c.width,y:h};break;case"left":t={x:c.x-l.width,y:h};break;default:t={x:c.x,y:c.y}}switch(m5(a)){case"start":t[s]-=m*(n&&u?-1:1);break;case"end":t[s]+=m*(n&&u?-1:1)}return t}var qw=(function(){var e=z1(function*(a,n,t){for(var{placement:c="bottom",strategy:l="absolute",middleware:o=[],platform:s}=t,i=o.filter(Boolean),f=yield s.isRTL==null?void 0:s.isRTL(n),u=yield s.getElementRects({reference:a,floating:n,strategy:l}),{x:d,y:h}=vp(u,c,f),m=c,v={},p=0,g=0;g<i.length;g++){var{name:y,fn:L}=i[g],{x:S,y:j,data:x,reset:E}=yield L({x:d,y:h,initialPlacement:c,placement:m,strategy:l,middlewareData:v,rects:u,platform:s,elements:{reference:a,floating:n}});d=S??d,h=j??h,v=N2(N2({},v),{},{[y]:N2(N2({},v[y]),x)}),E&&p<=50&&(p++,typeof E=="object"&&(E.placement&&(m=E.placement),E.rects&&(u=E.rects===!0?yield s.getElementRects({reference:a,floating:n,strategy:l}):E.rects),{x:d,y:h}=vp(u,m,f)),g=-1)}return{x:d,y:h,placement:m,strategy:l,middlewareData:v}});return function(a,n,t){return e.apply(this,arguments)}})();function hm(e,a){return Go.apply(this,arguments)}function Go(){return Go=z1(function*(e,a){var n;a===void 0&&(a={});var{x:t,y:c,platform:l,rects:o,elements:s,strategy:i}=e,{boundary:f="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:h=!1,padding:m=0}=v5(a,e),v=Rw(m),p=s[h?d==="floating"?"reference":"floating":d],g=Zc(yield l.getClippingRect({element:(n=yield l.isElement==null?void 0:l.isElement(p))==null||n?p:p.contextElement||(yield l.getDocumentElement==null?void 0:l.getDocumentElement(s.floating)),boundary:f,rootBoundary:u,strategy:i})),y=d==="floating"?{x:t,y:c,width:o.floating.width,height:o.floating.height}:o.reference,L=yield l.getOffsetParent==null?void 0:l.getOffsetParent(s.floating),S=(yield l.isElement==null?void 0:l.isElement(L))&&(yield l.getScale==null?void 0:l.getScale(L))||{x:1,y:1},j=Zc(l.convertOffsetParentRelativeRectToViewportRelativeRect?yield l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:y,offsetParent:L,strategy:i}):y);return{top:(g.top-j.top+v.top)/S.y,bottom:(j.bottom-g.bottom+v.bottom)/S.y,left:(g.left-j.left+v.left)/S.x,right:(j.right-g.right+v.right)/S.x}}),Go.apply(this,arguments)}var $w=new Set(["left","top"]);function Ko(){return Ko=z1(function*(e,a){var{placement:n,platform:t,elements:c}=e,l=yield t.isRTL==null?void 0:t.isRTL(c.floating),o=o8(n),s=m5(n),i=la(n)==="y",f=$w.has(o)?-1:1,u=l&&i?-1:1,d=v5(a,e),{mainAxis:h,crossAxis:m,alignmentAxis:v}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof v=="number"&&(m=s==="end"?-1*v:v),i?{x:m*u,y:h*f}:{x:h*f,y:m*u}}),Ko.apply(this,arguments)}function h5(){return typeof window<"u"}function hn(e){return gm(e)?(e.nodeName||"").toLowerCase():"#document"}function ee(e){var a;return(e==null||(a=e.ownerDocument)==null?void 0:a.defaultView)||window}function Ze(e){var a;return(a=(gm(e)?e.ownerDocument:e.document)||window.document)==null?void 0:a.documentElement}function gm(e){return!!h5()&&(e instanceof Node||e instanceof ee(e).Node)}function ke(e){return!!h5()&&(e instanceof Element||e instanceof ee(e).Element)}function e6(e){return!!h5()&&(e instanceof HTMLElement||e instanceof ee(e).HTMLElement)}function mp(e){return!(!h5()||typeof ShadowRoot>"u")&&(e instanceof ShadowRoot||e instanceof ee(e).ShadowRoot)}var Dw=new Set(["inline","contents"]);function It(e){var{overflow:a,overflowX:n,overflowY:t,display:c}=Ne(e);return/auto|scroll|overlay|hidden|clip/.test(a+t+n)&&!Dw.has(c)}var Fw=new Set(["table","td","th"]);function Bw(e){return Fw.has(hn(e))}var Iw=[":popover-open",":modal"];function e5(e){return Iw.some(a=>{try{return e.matches(a)}catch{return!1}})}var Uw=["transform","translate","scale","rotate","perspective"],Hw=["transform","translate","scale","rotate","perspective","filter"],Ww=["paint","layout","strict","content"];function Qo(e){var a=_s(),n=ke(e)?Ne(e):e;return Uw.some(t=>!!n[t]&&n[t]!=="none")||!!n.containerType&&n.containerType!=="normal"||!a&&!!n.backdropFilter&&n.backdropFilter!=="none"||!a&&!!n.filter&&n.filter!=="none"||Hw.some(t=>(n.willChange||"").includes(t))||Ww.some(t=>(n.contain||"").includes(t))}function _s(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}var Vw=new Set(["html","body","#document"]);function nn(e){return Vw.has(hn(e))}function Ne(e){return ee(e).getComputedStyle(e)}function g5(e){return ke(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function oa(e){if(hn(e)==="html")return e;var a=e.assignedSlot||e.parentNode||mp(e)&&e.host||Ze(e);return mp(a)?a.host:a}function zm(e){var a=oa(e);return nn(a)?e.ownerDocument?e.ownerDocument.body:e.body:e6(a)&&It(a)?a:zm(a)}function Ut(e,a,n){var t;a===void 0&&(a=[]),n===void 0&&(n=!0);var c=zm(e),l=c===((t=e.ownerDocument)==null?void 0:t.body),o=ee(c);if(l){var s=Xo(o);return a.concat(o,o.visualViewport||[],It(c)?c:[],s&&n?Ut(s):[])}return a.concat(c,Ut(c,[],n))}function Xo(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function bm(e){var a=Ne(e),n=parseFloat(a.width)||0,t=parseFloat(a.height)||0,c=e6(e),l=c?e.offsetWidth:n,o=c?e.offsetHeight:t,s=Yc(n)!==l||Yc(t)!==o;return s&&(n=l,t=o),{width:n,height:t,$:s}}function Es(e){return ke(e)?e:e.contextElement}function tn(e){var a=Es(e);if(!e6(a))return Ye(1);var n=a.getBoundingClientRect(),{width:t,height:c,$:l}=bm(a),o=(l?Yc(n.width):n.width)/t,s=(l?Yc(n.height):n.height)/c;return o&&Number.isFinite(o)||(o=1),s&&Number.isFinite(s)||(s=1),{x:o,y:s}}var Jw=Ye(0);function ym(e){var a=ee(e);return _s()&&a.visualViewport?{x:a.visualViewport.offsetLeft,y:a.visualViewport.offsetTop}:Jw}function s8(e,a,n,t){a===void 0&&(a=!1),n===void 0&&(n=!1);var c=e.getBoundingClientRect(),l=Es(e),o=Ye(1);a&&(t?ke(t)&&(o=tn(t)):o=tn(e));var s=(function(x,E,P){return E===void 0&&(E=!1),!(!P||E&&P!==ee(x))&&E})(l,n,t)?ym(l):Ye(0),i=(c.left+s.x)/o.x,f=(c.top+s.y)/o.y,u=c.width/o.x,d=c.height/o.y;if(l)for(var h=ee(l),m=t&&ke(t)?ee(t):t,v=h,p=Xo(v);p&&t&&m!==v;){var g=tn(p),y=p.getBoundingClientRect(),L=Ne(p),S=y.left+(p.clientLeft+parseFloat(L.paddingLeft))*g.x,j=y.top+(p.clientTop+parseFloat(L.paddingTop))*g.y;i*=g.x,f*=g.y,u*=g.x,d*=g.y,i+=S,f+=j,p=Xo(v=ee(p))}return Zc({width:u,height:d,x:i,y:f})}function a5(e,a){var n=g5(e).scrollLeft;return a?a.left+n:s8(Ze(e)).left+n}function Mm(e,a){var n=e.getBoundingClientRect();return{x:n.left+a.scrollLeft-a5(e,n),y:n.top+a.scrollTop}}var Gw=new Set(["absolute","fixed"]);function hp(e,a,n){var t;if(a==="viewport")t=(function(l,o){var s=ee(l),i=Ze(l),f=s.visualViewport,u=i.clientWidth,d=i.clientHeight,h=0,m=0;if(f){u=f.width,d=f.height;var v=_s();(!v||v&&o==="fixed")&&(h=f.offsetLeft,m=f.offsetTop)}var p=a5(i);if(p<=0){var g=i.ownerDocument,y=g.body,L=getComputedStyle(y),S=g.compatMode==="CSS1Compat"&&parseFloat(L.marginLeft)+parseFloat(L.marginRight)||0,j=Math.abs(i.clientWidth-y.clientWidth-S);j<=25&&(u-=j)}else p<=25&&(u+=p);return{width:u,height:d,x:h,y:m}})(e,n);else if(a==="document")t=(function(l){var o=Ze(l),s=g5(l),i=l.ownerDocument.body,f=Xa(o.scrollWidth,o.clientWidth,i.scrollWidth,i.clientWidth),u=Xa(o.scrollHeight,o.clientHeight,i.scrollHeight,i.clientHeight),d=-s.scrollLeft+a5(l),h=-s.scrollTop;return Ne(i).direction==="rtl"&&(d+=Xa(o.clientWidth,i.clientWidth)-f),{width:f,height:u,x:d,y:h}})(Ze(e));else if(ke(a))t=(function(l,o){var s=s8(l,!0,o==="fixed"),i=s.top+l.clientTop,f=s.left+l.clientLeft,u=e6(l)?tn(l):Ye(1);return{width:l.clientWidth*u.x,height:l.clientHeight*u.y,x:f*u.x,y:i*u.y}})(a,n);else{var c=ym(e);t={x:a.x-c.x,y:a.y-c.y,width:a.width,height:a.height}}return Zc(t)}function xm(e,a){var n=oa(e);return!(n===a||!ke(n)||nn(n))&&(Ne(n).position==="fixed"||xm(n,a))}function Kw(e,a,n){var t=e6(a),c=Ze(a),l=n==="fixed",o=s8(e,!0,l,a),s={scrollLeft:0,scrollTop:0},i=Ye(0);function f(){i.x=a5(c)}if(t||!t&&!l)if((hn(a)!=="body"||It(c))&&(s=g5(a)),t){var u=s8(a,!0,l,a);i.x=u.x+a.clientLeft,i.y=u.y+a.clientTop}else c&&f();l&&!t&&c&&f();var d=!c||t||l?Ye(0):Mm(c,s);return{x:o.left+s.scrollLeft-i.x-d.x,y:o.top+s.scrollTop-i.y-d.y,width:o.width,height:o.height}}function Mo(e){return Ne(e).position==="static"}function gp(e,a){if(!e6(e)||Ne(e).position==="fixed")return null;if(a)return a(e);var n=e.offsetParent;return Ze(e)===n&&(n=n.ownerDocument.body),n}function zp(e,a){var n=ee(e);if(e5(e))return n;if(!e6(e)){for(var t=oa(e);t&&!nn(t);){if(ke(t)&&!Mo(t))return t;t=oa(t)}return n}for(var c=gp(e,a);c&&Bw(c)&&Mo(c);)c=gp(c,a);return c&&nn(c)&&Mo(c)&&!Qo(c)?n:c||(function(l){for(var o=oa(l);e6(o)&&!nn(o);){if(Qo(o))return o;if(e5(o))return null;o=oa(o)}return null})(e)||n}var Qw={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){var{elements:a,rect:n,offsetParent:t,strategy:c}=e,l=c==="fixed",o=Ze(t),s=!!a&&e5(a.floating);if(t===o||s&&l)return n;var i={scrollLeft:0,scrollTop:0},f=Ye(1),u=Ye(0),d=e6(t);if((d||!d&&!l)&&((hn(t)!=="body"||It(o))&&(i=g5(t)),e6(t))){var h=s8(t);f=tn(t),u.x=h.x+t.clientLeft,u.y=h.y+t.clientTop}var m=!o||d||l?Ye(0):Mm(o,i);return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-i.scrollLeft*f.x+u.x+m.x,y:n.y*f.y-i.scrollTop*f.y+u.y+m.y}},getDocumentElement:Ze,getClippingRect:function(e){var{element:a,boundary:n,rootBoundary:t,strategy:c}=e,l=n==="clippingAncestors"?e5(a)?[]:(function(f,u){var d=u.get(f);if(d)return d;for(var h=Ut(f,[],!1).filter(L=>ke(L)&&hn(L)!=="body"),m=null,v=Ne(f).position==="fixed",p=v?oa(f):f;ke(p)&&!nn(p);){var g=Ne(p),y=Qo(p);y||g.position!=="fixed"||(m=null),(v?!y&&!m:!y&&g.position==="static"&&m&&Gw.has(m.position)||It(p)&&!y&&xm(f,p))?h=h.filter(L=>L!==p):m=g,p=oa(p)}return u.set(f,h),h})(a,this._c):[].concat(n),o=[...l,t],s=o[0],i=o.reduce((f,u)=>{var d=hp(a,u,c);return f.top=Xa(d.top,f.top),f.right=Xc(d.right,f.right),f.bottom=Xc(d.bottom,f.bottom),f.left=Xa(d.left,f.left),f},hp(a,s,c));return{width:i.right-i.left,height:i.bottom-i.top,x:i.left,y:i.top}},getOffsetParent:zp,getElementRects:(function(){var e=z1(function*(a){var n=this.getOffsetParent||zp,t=this.getDimensions,c=yield t(a.floating);return{reference:Kw(a.reference,yield n(a.floating),a.strategy),floating:{x:0,y:0,width:c.width,height:c.height}}});return function(a){return e.apply(this,arguments)}})(),getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){var{width:a,height:n}=bm(e);return{width:a,height:n}},getScale:tn,isElement:ke,isRTL:function(e){return Ne(e).direction==="rtl"}};function bp(e,a){return e.x===a.x&&e.y===a.y&&e.width===a.width&&e.height===a.height}function Xw(e,a,n,t){t===void 0&&(t={});var{ancestorScroll:c=!0,ancestorResize:l=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:i=!1}=t,f=Es(e),u=c||l?[...f?Ut(f):[],...Ut(a)]:[];u.forEach(g=>{c&&g.addEventListener("scroll",n,{passive:!0}),l&&g.addEventListener("resize",n)});var d,h=f&&s?(function(g,y){var L,S=null,j=Ze(g);function x(){var E;clearTimeout(L),(E=S)==null||E.disconnect(),S=null}return(function E(P,I){P===void 0&&(P=!1),I===void 0&&(I=1),x();var k=g.getBoundingClientRect(),{left:$,top:U,width:O,height:c2}=k;if(P||y(),O&&c2){var u2={rootMargin:-yc(U)+"px "+-yc(j.clientWidth-($+O))+"px "+-yc(j.clientHeight-(U+c2))+"px "+-yc($)+"px",threshold:Xa(0,Xc(1,I))||1},l2=!0;try{S=new IntersectionObserver(S2,N2(N2({},u2),{},{root:j.ownerDocument}))}catch{S=new IntersectionObserver(S2,u2)}S.observe(g)}function S2(q2){var f2=q2[0].intersectionRatio;if(f2!==I){if(!l2)return E();f2?E(!1,f2):L=setTimeout(()=>{E(!1,1e-7)},1e3)}f2!==1||bp(k,g.getBoundingClientRect())||E(),l2=!1}})(!0),x})(f,n):null,m=-1,v=null;o&&(v=new ResizeObserver(g=>{var[y]=g;y&&y.target===f&&v&&(v.unobserve(a),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var L;(L=v)==null||L.observe(a)})),n()}),f&&!i&&v.observe(f),v.observe(a));var p=i?s8(e):null;return i&&(function g(){var y=s8(e);p&&!bp(p,y)&&n(),p=y,d=requestAnimationFrame(g)})(),n(),()=>{var g;u.forEach(y=>{c&&y.removeEventListener("scroll",n),l&&y.removeEventListener("resize",n)}),h?.(),(g=v)==null||g.disconnect(),v=null,i&&cancelAnimationFrame(d)}}var Yw=function(e){return e===void 0&&(e=0),{name:"offset",options:e,fn:a=>z1(function*(){var n,t,{x:c,y:l,placement:o,middlewareData:s}=a,i=yield(function(f,u){return Ko.apply(this,arguments)})(a,e);return o===((n=s.offset)==null?void 0:n.placement)&&(t=s.arrow)!=null&&t.alignmentOffset?{}:{x:c+i.x,y:l+i.y,data:N2(N2({},i),{},{placement:o})}})()}},Zw=function(e){return e===void 0&&(e={}),{name:"shift",options:e,fn:a=>z1(function*(){var{x:n,y:t,placement:c}=a,l=v5(e,a),{mainAxis:o=!0,crossAxis:s=!1,limiter:i={fn:S=>{var{x:j,y:x}=S;return{x:j,y:x}}}}=l,f=kp(l,Bx),u={x:n,y:t},d=yield hm(a,f),h=la(o8(c)),m=pm(h),v=u[m],p=u[h];if(o){var g=m==="y"?"bottom":"right";v=up(v+d[m==="y"?"top":"left"],v,v-d[g])}if(s){var y=h==="y"?"bottom":"right";p=up(p+d[h==="y"?"top":"left"],p,p-d[y])}var L=i.fn(N2(N2({},a),{},{[m]:v,[h]:p}));return N2(N2({},L),{},{data:{x:L.x-n,y:L.y-t,enabled:{[m]:o,[h]:s}}})})()}},eC=function(e){return e===void 0&&(e={}),{name:"flip",options:e,fn:a=>z1(function*(){var n,t,{placement:c,middlewareData:l,rects:o,initialPlacement:s,platform:i,elements:f}=a,u=v5(e,a),{mainAxis:d=!0,crossAxis:h=!0,fallbackPlacements:m,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0}=u,y=kp(u,Fx);if((n=l.arrow)!=null&&n.alignmentOffset)return{};var L=o8(c),S=la(s),j=o8(s)===s,x=yield i.isRTL==null?void 0:i.isRTL(f.floating),E=m||(j||!g?[Mc(s)]:(function(d2){var P2=Mc(d2);return[Jo(d2),P2,Jo(P2)]})(s)),P=p!=="none";!m&&P&&E.push(...Ow(s,g,p,x));var I=[s,...E],k=yield hm(a,y),$=[],U=((t=l.flip)==null?void 0:t.overflows)||[];if(d&&$.push(k[L]),h){var O=(function(d2,P2,Q2){Q2===void 0&&(Q2=!1);var y2=m5(d2),s2=mm(d2),z2=vm(s2),o1=s2==="x"?y2===(Q2?"end":"start")?"right":"left":y2==="start"?"bottom":"top";return P2.reference[z2]>P2.floating[z2]&&(o1=Mc(o1)),[o1,Mc(o1)]})(c,o,x);$.push(k[O[0]],k[O[1]])}if(U=[...U,{placement:c,overflows:$}],!$.every(d2=>d2<=0)){var c2,u2,l2=(((c2=l.flip)==null?void 0:c2.index)||0)+1,S2=I[l2];if(S2&&(!(h==="alignment"&&S!==la(S2))||U.every(d2=>la(d2.placement)!==S||d2.overflows[0]>0)))return{data:{index:l2,overflows:U},reset:{placement:S2}};var q2=(u2=U.filter(d2=>d2.overflows[0]<=0).sort((d2,P2)=>d2.overflows[1]-P2.overflows[1])[0])==null?void 0:u2.placement;if(!q2)switch(v){case"bestFit":var f2,o2=(f2=U.filter(d2=>{if(P){var P2=la(d2.placement);return P2===S||P2==="y"}return!0}).map(d2=>[d2.placement,d2.overflows.filter(P2=>P2>0).reduce((P2,Q2)=>P2+Q2,0)]).sort((d2,P2)=>d2[1]-P2[1])[0])==null?void 0:f2[0];o2&&(q2=o2);break;case"initialPlacement":q2=s}if(c!==q2)return{reset:{placement:q2}}}return{}})()}};function aC(e){var a,n,t={autoUpdate:!0},c=e,l=i=>N2(N2(N2({},t),e||{}),i||{}),o=i=>{a&&n&&(c=l(i),((f,u,d)=>{var h=new Map,m=N2({platform:Qw},d),v=N2(N2({},m.platform),{},{_c:h});return qw(f,u,N2(N2({},m),{},{platform:v}))})(a,n,c).then(f=>{var u;Object.assign(n.style,{position:f.strategy,left:"".concat(f.x,"px"),top:"".concat(f.y,"px")}),!((u=c)===null||u===void 0)&&u.onComputed&&c.onComputed(f)}))},s=i=>{ze(i.subscribe(f=>{a===void 0?(a=f,o()):(Object.assign(a,f),o())}))};return[i=>{if("subscribe"in i)return s(i),{};a=i,o()},(i,f)=>{var u;n=i,c=l(f),setTimeout(()=>o(f),0),o(f);var d=()=>{u&&(u(),u=void 0)},h=function(){var{autoUpdate:m}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:c||{};d(),m!==!1&&Mv().then(()=>Xw(a,n,()=>o(c),m===!0?{}:m))};return u=h(),{update(m){o(m),u=h(m)},destroy(){d()}}},o]}function nC(e){var{loadOptions:a,filterText:n,items:t,multiple:c,value:l,itemId:o,groupBy:s,filterSelectedItems:i,itemFilter:f,convertStringItemsToObjects:u,filterGroupedItems:d,label:h}=e;if(t&&a)return t;if(!t)return[];t&&t.length>0&&typeof t[0]!="object"&&(t=u(t));var m=t.filter(v=>{var p=f(v[h],n,v);return p&&c&&l!=null&&l.length&&(p=!l.some(g=>!!i&&g[o]===v[o])),p});return s&&(m=d(m)),m}function tC(e){return Lm.apply(this,arguments)}function Lm(){return(Lm=z1(function*(e){var{dispatch:a,loadOptions:n,convertStringItemsToObjects:t,filterText:c}=e,l=yield n(c).catch(o=>{console.warn("svelte-select loadOptions error :>> ",o),a("error",{type:"loadOptions",details:o})});if(l&&!l.cancelled)return l?(l&&l.length>0&&typeof l[0]!="object"&&(l=t(l)),a("loaded",{items:l})):l=[],{filteredItems:l,loading:!1,focused:!0,listOpen:!0}})).apply(this,arguments)}j1(`
  svg.svelte-1kxu7be {
      width: var(--chevron-icon-width, 20px);
      height: var(--chevron-icon-width, 20px);
      color: var(--chevron-icon-colour, currentColor);
  }
`);var rC=za(`<svg width="100%" height="100%" viewBox="0 0 20 20" focusable="false" aria-hidden="true" class="svelte-1kxu7be"><path fill="currentColor" d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747
          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0
          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502
          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0
          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>`);j1(`
    svg.svelte-1hraxrc {
        width: var(--clear-icon-width, 20px);
        height: var(--clear-icon-width, 20px);
        color: var(--clear-icon-color, currentColor);
    }
`);var cC=za(`<svg width="100%" height="100%" viewBox="-2 -2 50 50" focusable="false" aria-hidden="true" role="presentation" class="svelte-1hraxrc"><path fill="currentColor" d="M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124
    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"></path></svg>`);function xo(e){T(e,cC())}j1(`
    .loading.svelte-y9fi5p {
        width: var(--spinner-width, 20px);
        height: var(--spinner-height, 20px);
        color: var(--spinner-color, var(--icons-color));
        animation: svelte-y9fi5p-rotate 0.75s linear infinite;
        transform-origin: center center;
        transform: none;
    }

    .circle_path.svelte-y9fi5p {
        stroke-dasharray: 90;
        stroke-linecap: round;
    }

    @keyframes svelte-y9fi5p-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
`);var lC=za('<svg class="loading svelte-y9fi5p" viewBox="25 25 50 50"><circle class="circle_path svelte-y9fi5p" cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10"></circle></svg>');j1(`
    .svelte-select.svelte-1ul7oo4 {
        /* deprecating camelCase custom props in favour of kebab-case for v5 */
        --borderRadius: var(--border-radius);
        --clearSelectColor: var(--clear-select-color);
        --clearSelectWidth: var(--clear-select-width);
        --disabledBackground: var(--disabled-background);
        --disabledBorderColor: var(--disabled-border-color);
        --disabledColor: var(--disabled-color);
        --disabledPlaceholderColor: var(--disabled-placeholder-color);
        --disabledPlaceholderOpacity: var(--disabled-placeholder-opacity);
        --errorBackground: var(--error-background);
        --errorBorder: var(--error-border);
        --groupItemPaddingLeft: var(--group-item-padding-left);
        --groupTitleColor: var(--group-title-color);
        --groupTitleFontSize: var(--group-title-font-size);
        --groupTitleFontWeight: var(--group-title-font-weight);
        --groupTitlePadding: var(--group-title-padding);
        --groupTitleTextTransform: var(--group-title-text-transform);
        --groupTitleBorderColor: var(--group-title-border-color);
        --groupTitleBorderWidth: var(--group-title-border-width);
        --groupTitleBorderStyle: var(--group-title-border-style);
        --indicatorColor: var(--chevron-color);
        --indicatorHeight: var(--chevron-height);
        --indicatorWidth: var(--chevron-width);
        --inputColor: var(--input-color);
        --inputLeft: var(--input-left);
        --inputLetterSpacing: var(--input-letter-spacing);
        --inputMargin: var(--input-margin);
        --inputPadding: var(--input-padding);
        --itemActiveBackground: var(--item-active-background);
        --itemColor: var(--item-color);
        --itemFirstBorderRadius: var(--item-first-border-radius);
        --itemHoverBG: var(--item-hover-bg);
        --itemHoverColor: var(--item-hover-color);
        --itemIsActiveBG: var(--item-is-active-bg);
        --itemIsActiveColor: var(--item-is-active-color);
        --itemIsNotSelectableColor: var(--item-is-not-selectable-color);
        --itemPadding: var(--item-padding);
        --listBackground: var(--list-background);
        --listBorder: var(--list-border);
        --listBorderRadius: var(--list-border-radius);
        --listEmptyColor: var(--list-empty-color);
        --listEmptyPadding: var(--list-empty-padding);
        --listEmptyTextAlign: var(--list-empty-text-align);
        --listMaxHeight: var(--list-max-height);
        --listPosition: var(--list-position);
        --listShadow: var(--list-shadow);
        --listZIndex: var(--list-z-index);
        --multiItemBG: var(--multi-item-bg);
        --multiItemBorderRadius: var(--multi-item-border-radius);
        --multiItemDisabledHoverBg: var(--multi-item-disabled-hover-bg);
        --multiItemDisabledHoverColor: var(--multi-item-disabled-hover-color);
        --multiItemHeight: var(--multi-item-height);
        --multiItemMargin: var(--multi-item-margin);
        --multiItemPadding: var(--multi-item-padding);
        --multiSelectInputMargin: var(--multi-select-input-margin);
        --multiSelectInputPadding: var(--multi-select-input-padding);
        --multiSelectPadding: var(--multi-select-padding);
        --placeholderColor: var(--placeholder-color);
        --placeholderOpacity: var(--placeholder-opacity);
        --selectedItemPadding: var(--selected-item-padding);
        --spinnerColor: var(--spinner-color);
        --spinnerHeight: var(--spinner-height);
        --spinnerWidth: var(--spinner-width);

        --internal-padding: 0 0 0 16px;

        border: var(--border, 1px solid #d8dbdf);
        border-radius: var(--border-radius, 6px);
        min-height: var(--height, 42px);
        position: relative;
        display: flex;
        align-items: stretch;
        padding: var(--padding, var(--internal-padding));
        background: var(--background, #fff);
        margin: var(--margin, 0);
        width: var(--width, 100%);
        font-size: var(--font-size, 16px);
        max-height: var(--max-height);
    }

    .svelte-1ul7oo4 {
        box-sizing: var(--box-sizing, border-box);
    }

    .svelte-select.svelte-1ul7oo4:hover {
        border: var(--border-hover, 1px solid #b2b8bf);
    }

    .value-container.svelte-1ul7oo4 {
        display: flex;
        flex: 1 1 0%;
        flex-wrap: wrap;
        align-items: center;
        gap: 5px 10px;
        padding: var(--value-container-padding, 5px 0);
        position: relative;
        overflow: var(--value-container-overflow, hidden);
        align-self: stretch;
    }

    .prepend.svelte-1ul7oo4,
    .indicators.svelte-1ul7oo4 {
        display: flex;
        flex-shrink: 0;
        align-items: center;
    }

    .indicators.svelte-1ul7oo4 {
        position: var(--indicators-position);
        top: var(--indicators-top);
        right: var(--indicators-right);
        bottom: var(--indicators-bottom);
    }

    input.svelte-1ul7oo4 {
        position: absolute;
        cursor: default;
        border: none;
        color: var(--input-color, var(--item-color));
        padding: var(--input-padding, 0);
        letter-spacing: var(--input-letter-spacing, inherit);
        margin: var(--input-margin, 0);
        min-width: 10px;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: transparent;
        font-size: var(--font-size, 16px);
    }

    .svelte-1ul7oo4:not(.multi) > .value-container:where(.svelte-1ul7oo4) > input:where(.svelte-1ul7oo4) {
        width: 100%;
        height: 100%;
    }

    input.svelte-1ul7oo4::placeholder {
        color: var(--placeholder-color, #78848f);
        opacity: var(--placeholder-opacity, 1);
    }

    input.svelte-1ul7oo4:focus {
        outline: none;
    }

    .svelte-select.focused.svelte-1ul7oo4 {
        border: var(--border-focused, 1px solid #006fe8);
        border-radius: var(--border-radius-focused, var(--border-radius, 6px));
    }

    .disabled.svelte-1ul7oo4 {
        background: var(--disabled-background, #ebedef);
        border-color: var(--disabled-border-color, #ebedef);
        color: var(--disabled-color, #c1c6cc);
    }

    .disabled.svelte-1ul7oo4 input:where(.svelte-1ul7oo4)::placeholder {
        color: var(--disabled-placeholder-color, #c1c6cc);
        opacity: var(--disabled-placeholder-opacity, 1);
    }

    .selected-item.svelte-1ul7oo4 {
        position: relative;
        overflow: var(--selected-item-overflow, hidden);
        padding: var(--selected-item-padding, 0 20px 0 0);
        text-overflow: ellipsis;
        white-space: nowrap;
        color: var(--selected-item-color, inherit);
        font-size: var(--font-size, 16px);
    }

    .multi.svelte-1ul7oo4 .selected-item:where(.svelte-1ul7oo4) {
        position: absolute;
        line-height: var(--height, 42px);
        height: var(--height, 42px);
    }

    .selected-item.svelte-1ul7oo4:focus {
        outline: none;
    }

    .hide-selected-item.svelte-1ul7oo4 {
        opacity: 0;
    }

    .icon.svelte-1ul7oo4 {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .clear-select.svelte-1ul7oo4 {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--clear-select-width, 40px);
        height: var(--clear-select-height, 100%);
        color: var(--clear-select-color, var(--icons-color));
        margin: var(--clear-select-margin, 0);
        pointer-events: all;
        flex-shrink: 0;
    }

    .clear-select.svelte-1ul7oo4:focus {
        outline: var(--clear-select-focus-outline, 1px solid #006fe8);
    }

    .loading.svelte-1ul7oo4 {
        width: var(--loading-width, 40px);
        height: var(--loading-height);
        color: var(--loading-color, var(--icons-color));
        margin: var(--loading--margin, 0);
        flex-shrink: 0;
    }

    .chevron.svelte-1ul7oo4 {
        width: var(--chevron-width, 40px);
        height: var(--chevron-height, 40px);
        background: var(--chevron-background, transparent);
        pointer-events: var(--chevron-pointer-events, none);
        color: var(--chevron-color, var(--icons-color));
        border: var(--chevron-border, 0 0 0 1px solid #d8dbdf);
        flex-shrink: 0;
    }

    .multi.svelte-1ul7oo4 {
        padding: var(--multi-select-padding, var(--internal-padding));
    }

    .multi.svelte-1ul7oo4 input:where(.svelte-1ul7oo4) {
        padding: var(--multi-select-input-padding, 0);
        position: relative;
        margin: var(--multi-select-input-margin, 5px 0);
        flex: 1 1 40px;
    }

    .svelte-select.error.svelte-1ul7oo4 {
        border: var(--error-border, 1px solid #ff2d55);
        background: var(--error-background, #fff);
    }

    .a11y-text.svelte-1ul7oo4 {
        z-index: 9999;
        border: 0px;
        clip: rect(1px, 1px, 1px, 1px);
        height: 1px;
        width: 1px;
        position: absolute;
        overflow: hidden;
        padding: 0px;
        white-space: nowrap;
    }

    .multi-item.svelte-1ul7oo4 {
        background: var(--multi-item-bg, #ebedef);
        margin: var(--multi-item-margin, 0);
        outline: var(--multi-item-outline, 1px solid #ddd);
        border-radius: var(--multi-item-border-radius, 4px);
        height: var(--multi-item-height, 25px);
        line-height: var(--multi-item-height, 25px);
        display: flex;
        cursor: default;
        padding: var(--multi-item-padding, 0 5px);
        overflow: hidden;
        gap: var(--multi-item-gap, 4px);
        outline-offset: -1px;
        max-width: var(--multi-max-width, none);
        color: var(--multi-item-color, var(--item-color));
    }

    .multi-item.disabled.svelte-1ul7oo4:hover {
        background: var(--multi-item-disabled-hover-bg, #ebedef);
        color: var(--multi-item-disabled-hover-color, #c1c6cc);
    }

    .multi-item-text.svelte-1ul7oo4 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .multi-item-clear.svelte-1ul7oo4 {
        display: flex;
        align-items: center;
        justify-content: center;
        --clear-icon-color: var(--multi-item-clear-icon-color, #000);
    }

    .multi-item.active.svelte-1ul7oo4 {
        outline: var(--multi-item-active-outline, 1px solid #006fe8);
    }

    .svelte-select-list.svelte-1ul7oo4 {
        box-shadow: var(--list-shadow, 0 2px 3px 0 rgba(44, 62, 80, 0.24));
        border-radius: var(--list-border-radius, 4px);
        max-height: var(--list-max-height, 252px);
        overflow-y: auto;
        background: var(--list-background, #fff);
        position: var(--list-position, absolute);
        z-index: var(--list-z-index, 2);
        border: var(--list-border);
    }

    .prefloat.svelte-1ul7oo4 {
        opacity: 0;
        pointer-events: none;
    }

    .list-group-title.svelte-1ul7oo4 {
        color: var(--group-title-color, #8f8f8f);
        cursor: default;
        font-size: var(--group-title-font-size, 16px);
        font-weight: var(--group-title-font-weight, 600);
        height: var(--height, 42px);
        line-height: var(--height, 42px);
        padding: var(--group-title-padding, 0 20px);
        text-overflow: ellipsis;
        overflow-x: hidden;
        white-space: nowrap;
        text-transform: var(--group-title-text-transform, uppercase);
        border-width: var(--group-title-border-width, medium);
        border-style: var(--group-title-border-style, none);
        border-color: var(--group-title-border-color, color);
    }

    .empty.svelte-1ul7oo4 {
        text-align: var(--list-empty-text-align, center);
        padding: var(--list-empty-padding, 20px 0);
        color: var(--list-empty-color, #78848f);
    }

    .item.svelte-1ul7oo4 {
        cursor: default;
        height: var(--item-height, var(--height, 42px));
        line-height: var(--item-line-height, var(--height, 42px));
        padding: var(--item-padding, 0 20px);
        color: var(--item-color, inherit);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        transition: var(--item-transition, all 0.2s);
        align-items: center;
        width: 100%;
    }

    .item.group-item.svelte-1ul7oo4 {
        padding-left: var(--group-item-padding-left, 40px);
    }

    .item.svelte-1ul7oo4:active {
        background: var(--item-active-background, #b9daff);
    }

    .item.active.svelte-1ul7oo4 {
        background: var(--item-is-active-bg, #007aff);
        color: var(--item-is-active-color, #fff);
    }

    .item.first.svelte-1ul7oo4 {
        border-radius: var(--item-first-border-radius, 4px 4px 0 0);
    }

    .item.hover.svelte-1ul7oo4:not(.active) {
        background: var(--item-hover-bg, #e7f2ff);
        color: var(--item-hover-color, inherit);
    }

    .item.not-selectable.svelte-1ul7oo4,
    .item.hover.item.not-selectable.svelte-1ul7oo4,
    .item.active.item.not-selectable.svelte-1ul7oo4,
    .item.not-selectable.svelte-1ul7oo4:active {
        color: var(--item-is-not-selectable-color, #999);
        background: transparent;
    }

    .required.svelte-1ul7oo4 {
        opacity: 0;
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
`);var oC=a2('<div class="list-item svelte-1ul7oo4" tabindex="-1" role="none"><div><!></div></div>'),sC=a2('<div class="empty svelte-1ul7oo4">No options</div>'),iC=a2('<div role="none"><!> <!> <!></div>'),fC=a2('<span id="aria-selection" class="svelte-1ul7oo4"> </span> <span id="aria-context" class="svelte-1ul7oo4"> </span>',1),uC=a2('<div class="multi-item-clear svelte-1ul7oo4"><!></div>'),dC=a2('<div role="none"><span class="multi-item-text svelte-1ul7oo4"><!></span> <!></div>'),pC=a2("<div><!></div>"),vC=a2('<div class="icon loading svelte-1ul7oo4" aria-hidden="true"><!></div>'),mC=a2('<button type="button" class="icon clear-select svelte-1ul7oo4"><!></button>'),hC=a2('<div class="icon chevron svelte-1ul7oo4" aria-hidden="true"><!></div>'),gC=a2('<input type="hidden" class="svelte-1ul7oo4"/>'),zC=a2('<select class="required svelte-1ul7oo4" required tabindex="-1" aria-hidden="true"></select>'),bC=a2('<div role="none"><!> <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="a11y-text svelte-1ul7oo4"><!></span> <div class="prepend svelte-1ul7oo4"><!></div> <div class="value-container svelte-1ul7oo4"><!> <input/></div> <div class="indicators svelte-1ul7oo4"><!> <!> <!></div> <!> <!></div>');function Ha(e,a){var n=(function(B){var Z={};for(var M2 in B.children&&(Z.default=!0),B.$$slots)Z[M2]=!0;return Z})(a);f1(a,!1);var t,c=R(),l=R(),o=R(),s=R(),i=R(),f=R(),u=R(),d=R(),h=R(),m=vL(),v=b(a,"justValue",12,null),p=b(a,"filter",8,nC),g=b(a,"getItems",8,tC),y=b(a,"id",8,null),L=b(a,"name",8,null),S=b(a,"container",12,void 0),j=b(a,"input",12,void 0),x=b(a,"multiple",8,!1),E=b(a,"multiFullItemClearable",8,!1),P=b(a,"disabled",8,!1),I=b(a,"focused",12,!1),k=b(a,"value",12,null),$=b(a,"filterText",12,""),U=b(a,"placeholder",8,"Please select"),O=b(a,"placeholderAlwaysShow",8,!1),c2=b(a,"items",12,null),u2=b(a,"label",8,"label"),l2=b(a,"itemFilter",8,(B,Z,M2)=>"".concat(B).toLowerCase().includes(Z.toLowerCase())),S2=b(a,"groupBy",8,void 0),q2=b(a,"groupFilter",8,B=>B),f2=b(a,"groupHeaderSelectable",8,!1),o2=b(a,"itemId",8,"value"),d2=b(a,"loadOptions",8,void 0),P2=b(a,"containerStyles",8,""),Q2=b(a,"hasError",8,!1),y2=b(a,"filterSelectedItems",8,!0),s2=b(a,"required",8,!1),z2=b(a,"closeListOnChange",8,!0),o1=b(a,"clearFilterTextOnBlur",8,!0),E1=b(a,"createGroupHeaderItem",8,(B,Z)=>({value:B,[u2()]:B})),m2=()=>r(u),G=b(a,"searchable",8,!0),b2=b(a,"inputStyles",8,""),H=b(a,"clearable",8,!0),v2=b(a,"loading",12,!1),Q=b(a,"listOpen",12,!1),O2=b(a,"debounce",8,function(B){var Z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;clearTimeout(t),t=setTimeout(B,Z)}),t2=b(a,"debounceWait",8,300),W=b(a,"hideEmptyState",8,!1),b1=b(a,"inputAttributes",24,()=>({})),i1=b(a,"listAutoWidth",8,!0),j2=b(a,"showChevron",8,!1),x1=b(a,"listOffset",8,5),I2=b(a,"hoverItemIndex",12,0),V2=b(a,"floatingConfig",24,()=>({})),m1=b(a,"class",8,""),F2=R(),O1=R(),w=R(),C=R(),_=R();function D(B){return B.map((Z,M2)=>({index:M2,value:Z,label:"".concat(Z)}))}function n2(B){var Z=[],M2={};B.forEach(a1=>{var t1=S2()(a1);Z.includes(t1)||(Z.push(t1),M2[t1]=[],t1&&M2[t1].push(Object.assign(E1()(t1,a1),{id:t1,groupHeader:!0,selectable:f2()}))),M2[t1].push(Object.assign({groupItem:!!t1},a1))});var D2=[];return q2()(Z).forEach(a1=>{M2[a1]&&D2.push(...M2[a1])}),D2}function C2(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,Z=arguments.length>1?arguments[1]:void 0;I2(B<0?0:B),!Z&&S2()&&r(u)[I2()]&&!r(u)[I2()].selectable&&D1(1)}function A2(){var B=!0;if(k()){var Z=[],M2=[];k().forEach(D2=>{Z.includes(D2[o2()])?B=!1:(Z.push(D2[o2()]),M2.push(D2))}),B||k(M2)}return B}function e2(B){var Z=B?B[o2()]:k()[o2()];return c2().find(M2=>M2[o2()]===Z)}function r2(B){return s1.apply(this,arguments)}function s1(){return(s1=z1(function*(B){var Z=k()[B];k().length===1?k(void 0):k(k().filter(M2=>M2!==Z)),m("clear",Z)})).apply(this,arguments)}function e1(B){if(I())switch(B.stopPropagation(),B.key){case"Escape":B.preventDefault(),$1();break;case"Enter":if(B.preventDefault(),Q()){if(r(u).length===0)break;var Z=r(u)[I2()];if(k()&&!x()&&k()[o2()]===Z[o2()]){$1();break}X2(r(u)[I2()])}break;case"ArrowDown":B.preventDefault(),Q()?D1(1):(Q(!0),z(F2,void 0));break;case"ArrowUp":B.preventDefault(),Q()?D1(-1):(Q(!0),z(F2,void 0));break;case"Tab":if(Q()&&I()){if(r(u).length===0||k()&&k()[o2()]===r(u)[I2()][o2()])return $1();B.preventDefault(),X2(r(u)[I2()]),$1()}break;case"Backspace":if(!x()||$().length>0)return;if(x()&&k()&&k().length>0){if(r2(r(F2)!==void 0?r(F2):k().length-1),r(F2)===0||r(F2)===void 0)break;z(F2,k().length>r(F2)?r(F2)-1:void 0)}break;case"ArrowLeft":if(!k()||!x()||$().length>0)return;r(F2)===void 0?z(F2,k().length-1):k().length>r(F2)&&r(F2)!==0&&z(F2,r(F2)-1);break;case"ArrowRight":if(!k()||!x()||$().length>0||r(F2)===void 0)return;r(F2)===k().length-1?z(F2,void 0):r(F2)<k().length-1&&z(F2,r(F2)+1)}}function U2(B){var Z,M2;I()&&j()===((Z=document)===null||Z===void 0?void 0:Z.activeElement)||(B&&m("focus",B),(M2=j())===null||M2===void 0||M2.focus(),I(!0))}function J2(B){return q1.apply(this,arguments)}function q1(){return(q1=z1(function*(B){var Z;S1||(Q()||I())&&(m("blur",B),$1(),I(!1),z(F2,void 0),(Z=j())===null||Z===void 0||Z.blur())})).apply(this,arguments)}function S4(){if(!P())return $().length>0?Q(!0):void Q(!Q())}function E4(){m("clear",k()),k(void 0),$1(),U2()}function $1(){o1()&&$(""),Q(!1)}mL(z1(function*(){z(O1,k()),z(w,$()),z(C,x())})),x3(()=>{Q()&&I(!0),I()&&j()&&j().focus()});var g4=b(a,"ariaValues",8,B=>"Option ".concat(B,", selected.")),V1=b(a,"ariaListOpen",8,(B,Z)=>"You are currently focused on option ".concat(B,". There are ").concat(Z," results available.")),Q1=b(a,"ariaFocused",8,()=>"Select is focused, type to refine list, press down to open the menu."),p4,p1=R(null);function z4(){clearTimeout(p4),p4=setTimeout(()=>{S1=!1},100)}ze(()=>{var B;(B=r(p1))===null||B===void 0||B.remove()});var S1=!1;function X2(B){B&&B.selectable!==!1&&(function(Z){if(Z){$("");var M2=Object.assign({},Z);if(M2.groupHeader&&!M2.selectable)return;k(x()?k()?k().concat([M2]):[M2]:k(M2)),setTimeout(()=>{z2()&&$1(),z(F2,void 0),m("change",k()),m("select",Z)})}})(B)}function X1(B){S1||I2(B)}function D1(B){if(r(u).filter(M2=>!Object.hasOwn(M2,"selectable")||M2.selectable===!0).length===0)return I2(0);B>0&&I2()===r(u).length-1?I2(0):B<0&&I2()===0?I2(r(u).length-1):I2(I2()+B);var Z=r(u)[I2()];Z&&Z.selectable===!1&&(B!==1&&B!==-1||D1(B))}function W4(B,Z,M2){if(!x())return Z&&Z[M2]===B[M2]}var a0=L0,Y4=L0;function L0(B){return{update(Z){Z.scroll&&(z4(),B.scrollIntoView({behavior:"auto",block:"nearest"}))}}}var c0=R({strategy:"absolute",placement:"bottom-start",middleware:[Yw(x1()),eC(),Zw()],autoUpdate:!1}),[m0,N0,f0]=aC(r(c0)),D0=R(!0);Y(()=>(M(c2()),M(k())),()=>{c2(),k()&&(function(){if(typeof k()=="string"){var B=(c2()||[]).find(Z=>Z[o2()]===k());k(B||{[o2()]:k(),label:k()})}else x()&&Array.isArray(k())&&k().length>0&&k(k().map(Z=>typeof Z=="string"?{value:Z,label:Z}:Z))})()}),Y(()=>(M(b1()),M(G())),()=>{!b1()&&G()||(z(_,Object.assign({autocapitalize:"none",autocomplete:"off",autocorrect:"off",spellcheck:!1,tabindex:0,type:"text","aria-autocomplete":"list"},b1())),y()&&Y3(_,r(_).id=y()),G()||Y3(_,r(_).readonly=!0))}),Y(()=>M(x()),()=>{x()&&k()&&(Array.isArray(k())?k([...k()]):k([k()]))}),Y(()=>(r(C),M(x())),()=>{r(C)&&!x()&&k()&&k(null)}),Y(()=>(M(x()),M(k())),()=>{x()&&k()&&k().length>1&&A2()}),Y(()=>M(k()),()=>{k()&&(x()?JSON.stringify(k())!==JSON.stringify(r(O1))&&A2()&&m("input",k()):r(O1)&&JSON.stringify(k()[o2()])===JSON.stringify(r(O1)[o2()])||m("input",k()))}),Y(()=>(M(k()),M(x()),r(O1)),()=>{!k()&&x()&&r(O1)&&m("input",k())}),Y(()=>(M(I()),M(j())),()=>{!I()&&j()&&$1()}),Y(()=>(M($()),r(w)),()=>{$()!==r(w)&&(d2()||$().length!==0)&&(d2()?O2()(z1(function*(){v2(!0);var B=yield g()({dispatch:m,loadOptions:d2(),convertStringItemsToObjects:D,filterText:$()});B?(v2(B.loading),Q(Q()?B.listOpen:$().length>0),I(Q()&&B.focused),c2(S2()?n2(B.filteredItems):B.filteredItems)):(v2(!1),I(!0),Q(!0))}),t2()):(Q(!0),x()&&z(F2,void 0)))}),Y(()=>(M(p()),M(d2()),M($()),M(c2()),M(x()),M(k()),M(o2()),M(S2()),M(u2()),M(y2()),M(l2())),()=>{z(u,p()({loadOptions:d2(),filterText:$(),items:c2(),multiple:x(),value:k(),itemId:o2(),groupBy:S2(),label:u2(),filterSelectedItems:y2(),itemFilter:l2(),convertStringItemsToObjects:D,filterGroupedItems:n2}))}),Y(()=>(M(x()),M(Q()),M(k()),r(u)),()=>{!x()&&Q()&&k()&&r(u)&&C2(r(u).findIndex(B=>B[o2()]===k()[o2()]),!0)}),Y(()=>(M(Q()),M(x())),()=>{Q()&&x()&&I2(0)}),Y(()=>M($()),()=>{$()&&I2(0)}),Y(()=>M(I2()),()=>{var B;B=I2(),m("hoverItem",B)}),Y(()=>(M(x()),M(k())),()=>{z(c,x()?k()&&k().length>0:k())}),Y(()=>(r(c),M($())),()=>{z(l,r(c)&&$().length>0)}),Y(()=>(r(c),M(H()),M(P()),M(v2())),()=>{z(o,r(c)&&H()&&!P()&&!v2())}),Y(()=>(M(O()),M(x()),M(U()),M(k())),()=>{var B;z(s,O()&&x()||x()&&((B=k())===null||B===void 0?void 0:B.length)===0?U():k()?"":U())}),Y(()=>(M(k()),M(x())),()=>{var B,Z;z(i,k()?(B=x(),Z=void 0,Z=B&&k().length>0?k().map(M2=>M2[u2()]).join(", "):k()[u2()],g4()(Z)):"")}),Y(()=>(r(u),M(I2()),M(I()),M(Q())),()=>{z(f,(function(){if(!r(u)||r(u).length===0)return"";var B=r(u)[I2()];if(Q()&&B){var Z=r(u)?r(u).length:0;return V1()(B[u2()],Z)}return Q1()()})((r(u),I2(),I(),Q())))}),Y(()=>M(c2()),()=>{(function(B){B&&B.length!==0&&!B.some(Z=>typeof Z!="object")&&k()&&(x()?!k().some(Z=>!Z||!Z[o2()]):k()[o2()])&&(Array.isArray(k())?k(k().map(Z=>e2(Z)||Z)):k(e2()||k()))})(c2())}),Y(()=>(M(x()),M(k()),M(o2())),()=>{v((x(),k(),o2(),x()?k()?k().map(B=>B[o2()]):null:k()?k()[o2()]:k()))}),Y(()=>(M(x()),r(O1),M(k())),()=>{x()||!r(O1)||k()||m("input",k())}),Y(()=>(M(Q()),r(u),M(x()),M(k())),()=>{Q()&&r(u)&&!x()&&!k()&&C2()}),Y(()=>r(u),()=>{(function(B){Q()&&m("filter",B)})(r(u))}),Y(()=>(M(S()),M(V2()),r(c0)),()=>{S()&&V2()&&f0(Object.assign(r(c0),V2()))}),Y(()=>r(p1),()=>{z(d,!!r(p1))}),Y(()=>(r(p1),M(Q())),()=>{(function(B,Z){if(!B||!Z)return z(D0,!0);setTimeout(()=>{z(D0,!1)},0)})(r(p1),Q())}),Y(()=>(M(Q()),M(S()),r(p1)),()=>{Q()&&S()&&r(p1)&&(function(){var{width:B}=S().getBoundingClientRect();Y3(p1,r(p1).style.width=i1()?B+"px":"auto")})()}),Y(()=>M(I2()),()=>{z(h,I2())}),Y(()=>(M(j()),M(Q()),M(I())),()=>{j()&&Q()&&!I()&&U2()}),Y(()=>(M(S()),M(V2())),()=>{var B;S()&&((B=V2())===null||B===void 0?void 0:B.autoUpdate)===void 0&&Y3(c0,r(c0).autoUpdate=!0)}),L4();var A0={getFilteredItems:m2,handleClear:E4};_1();var O0,u0=bC();w2("click",j6,function(B){var Z;Q()||I()||!S()||S().contains(B.target)||(Z=r(p1))!==null&&Z!==void 0&&Z.contains(B.target)||J2()}),w2("keydown",j6,e1);var x2=q(u0),B1=B=>{var Z,M2=iC(),D2=q(M2),a1=T1=>{var n4=W1();k0(Y2(n4),a,"list-prepend",{},null),T(T1,n4)};i2(D2,T1=>{F(()=>n["list-prepend"])&&T1(a1)});var t1=J(D2,2),h1=T1=>{var n4=W1();k0(Y2(n4),a,"list",{get filteredItems(){return r(u)}},null),T(T1,n4)},G4=T1=>{var n4=W1(),V0=Y2(n4),y1=o4=>{var b4=W1();x0(Y2(b4),1,()=>r(u),T0,(n0,P4,L1)=>{var F0,E0=oC(),J0=q(E0);k0(q(J0),a,"item",{get item(){return r(P4)},index:L1},k4=>{var T4=s3();E2(()=>d1(T4,(r(P4),M(u2()),F(()=>{var q0;return(q0=r(P4))===null||q0===void 0?void 0:q0[u2()]})))),T(k4,T4)}),A3(J0,(k4,T4)=>a0?.(k4),()=>({scroll:W4(r(P4),k(),o2()),listDom:r(d)})),A3(J0,(k4,T4)=>Y4?.(k4),()=>({scroll:r(h)===L1,listDom:r(d)})),E2(k4=>F0=A1(J0,1,"item svelte-1ul7oo4",null,F0,k4),[()=>{var k4,T4;return{"list-group-title":r(P4).groupHeader,active:W4(r(P4),k(),o2()),first:(T4=L1,T4===0),hover:I2()===L1,"group-item":r(P4).groupItem,"not-selectable":((k4=r(P4))===null||k4===void 0?void 0:k4.selectable)===!1}}]),w2("mouseover",E0,()=>X1(L1)),w2("focus",E0,()=>X1(L1)),w2("click",E0,z6(()=>(function(k4){var{item:T4,i:q0}=k4;if(T4?.selectable!==!1)return k()&&!x()&&k()[o2()]===T4[o2()]?$1():void((function(A){return A.groupHeader&&A.selectable||A.selectable||!A.hasOwnProperty("selectable")})(T4)&&(I2(q0),X2(T4)))})({item:r(P4),i:L1}))),w2("keydown",E0,X6(z6(function(k4){St.call(this,a,k4)}))),T(n0,E0)}),T(o4,b4)},M4=o4=>{var b4=W1(),n0=Y2(b4),P4=L1=>{var F0=W1();k0(Y2(F0),a,"empty",{},E0=>{T(E0,sC())}),T(L1,F0)};i2(n0,L1=>{W()||L1(P4)},!0),T(o4,b4)};i2(V0,o4=>{r(u),F(()=>r(u).length>0)?o4(y1):o4(M4,!1)},!0),T(T1,n4)};i2(t1,T1=>{F(()=>n.list)?T1(h1):T1(G4,!1)});var a4=J(t1,2),l4=T1=>{var n4=W1();k0(Y2(n4),a,"list-append",{},null),T(T1,n4)};i2(a4,T1=>{F(()=>n["list-append"])&&T1(l4)}),A3(M2,T1=>N0?.(T1)),r0(M2,T1=>z(p1,T1),()=>r(p1)),o3(()=>w2("scroll",M2,z4)),o3(()=>w2("pointerup",M2,X6(z6(function(T1){St.call(this,a,T1)})))),o3(()=>w2("mousedown",M2,X6(z6(function(T1){St.call(this,a,T1)})))),E2(()=>Z=A1(M2,1,"svelte-select-list svelte-1ul7oo4",null,Z,{prefloat:r(D0)})),T(B,M2)};i2(x2,B=>{Q()&&B(B1)});var w4=J(x2,2),V4=q(w4),w0=B=>{var Z=fC(),M2=Y2(Z),D2=q(M2),a1=q(J(M2,2));E2(()=>{d1(D2,r(i)),d1(a1,r(f))}),T(B,Z)};i2(V4,B=>{I()&&B(w0)});var W0=J(w4,2);k0(q(W0),a,"prepend",{},null);var G1=J(W0,2),R0=q(G1),i3=B=>{var Z=W1(),M2=Y2(Z),D2=t1=>{var h1=W1();x0(Y2(h1),1,k,T0,(G4,a4,l4)=>{var T1,n4=dC(),V0=q(n4);k0(q(V0),a,"selection",{get selection(){return r(a4)},index:l4},o4=>{var b4=s3();E2(()=>d1(b4,(r(a4),M(u2()),F(()=>r(a4)[u2()])))),T(o4,b4)});var y1=J(V0,2),M4=o4=>{var b4=uC();k0(q(b4),a,"multi-clear-icon",{},n0=>{xo(n0)}),w2("pointerup",b4,X6(z6(()=>r2(l4)))),T(o4,b4)};i2(y1,o4=>{P()||E()||!xo||o4(M4)}),E2(()=>T1=A1(n4,1,"multi-item svelte-1ul7oo4",null,T1,{active:r(F2)===l4,disabled:P()})),w2("click",n4,X6(()=>E()?r2(l4):{})),w2("keydown",n4,X6(z6(function(o4){St.call(this,a,o4)}))),T(G4,n4)}),T(t1,h1)},a1=t1=>{var h1,G4=pC();k0(q(G4),a,"selection",{get selection(){return k()}},a4=>{var l4=s3();E2(()=>d1(l4,(M(k()),M(u2()),F(()=>k()[u2()])))),T(a4,l4)}),E2(()=>h1=A1(G4,1,"selected-item svelte-1ul7oo4",null,h1,{"hide-selected-item":r(l)})),T(t1,G4)};i2(M2,t1=>{x()?t1(D2):t1(a1,!1)}),T(B,Z)};i2(R0,B=>{r(c)&&B(i3)});var d0=J(R0,2);_c(d0,()=>N2(N2({readOnly:!G()},r(_)),{},{placeholder:r(s),style:b2(),disabled:P()}),void 0,void 0,void 0,"svelte-1ul7oo4",!0),r0(d0,B=>j(B),()=>j());var r3=J(G1,2),J4=q(r3),e4=B=>{var Z=vC();k0(q(Z),a,"loading-icon",{},M2=>{(function(D2){T(D2,lC())})(M2)}),T(B,Z)};i2(J4,B=>{v2()&&B(e4)});var P1=J(J4,2),B4=B=>{var Z=mC();k0(q(Z),a,"clear-icon",{},M2=>{xo(M2)}),w2("click",Z,E4),T(B,Z)};i2(P1,B=>{r(o)&&B(B4)});var _0=J(P1,2),h0=B=>{var Z=hC();k0(q(Z),a,"chevron-icon",{get listOpen(){return Q()}},M2=>{(function(D2){T(D2,rC())})(M2)}),T(B,Z)};i2(_0,B=>{j2()&&B(h0)});var K=J(r3,2);k0(K,a,"input-hidden",{get value(){return k()}},B=>{var Z=gC();E2(M2=>{j4(Z,"name",L()),r8(Z,M2)},[()=>(M(k()),F(()=>k()?JSON.stringify(k()):null))]),T(B,Z)});var p2=J(K,2),_2=B=>{var Z=W1();k0(Y2(Z),a,"required",{get value(){return k()}},M2=>{T(M2,zC())}),T(B,Z)};return i2(p2,B=>{M(s2()),M(k()),F(()=>s2()&&(!k()||k().length===0))&&B(_2)}),o3(()=>w2("pointerup",u0,X6(S4))),r0(u0,B=>S(B),()=>S()),A3(u0,B=>m0?.(B)),E2(()=>{var B;O0=A1(u0,1,"svelte-select ".concat((B=m1())!==null&&B!==void 0?B:""),"svelte-1ul7oo4",O0,{multi:x(),disabled:P(),focused:I(),"list-open":Q(),"show-chevron":j2(),error:Q2()}),me(u0,P2())}),w2("keydown",d0,e1),w2("blur",d0,J2),w2("focus",d0,U2),Bc(d0,$),T(e,u0),M1(a,"getFilteredItems",m2),M1(a,"handleClear",E4),u1(A0)}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
table.jse-transform-wizard.svelte-9wqi8y {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}
table.jse-transform-wizard.svelte-9wqi8y input:where(.svelte-9wqi8y) {
  font-family: inherit;
  font-size: inherit;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) th:where(.svelte-9wqi8y) {
  font-weight: normal;
  text-align: left;
  width: 60px;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select .multi-item {
  align-items: center;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select .value-container {
  gap: 0 !important;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-filter-path {
  flex: 4;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-filter-relation {
  flex: 1.5;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-sort-path {
  flex: 3;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-sort-direction {
  flex: 1;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-projection-paths {
  flex: 1;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select input {
  box-sizing: border-box;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .jse-filter-value:where(.svelte-9wqi8y) {
  flex: 4;
  padding: 4px 8px;
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: var(--jse-input-radius, 3px);
  outline: none;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  color: inherit;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .jse-filter-value:where(.svelte-9wqi8y):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}`);var yC=a2('<table class="jse-transform-wizard svelte-9wqi8y"><tbody><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Filter</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!> <!> <input class="jse-filter-value svelte-9wqi8y"/></div></td></tr><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Sort</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!> <!></div></td></tr><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Pick</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!></div></td></tr></tbody></table>');function MC(e,a){var n,t,c,l,o;f1(a,!1);var s=R(void 0,!0),i=R(void 0,!0),f=R(void 0,!0),u=R(void 0,!0),d=R(void 0,!0),h=R(void 0,!0),m=t3("jsoneditor:TransformWizard"),v=b(a,"json",9),p=b(a,"queryOptions",29,()=>({})),g=b(a,"onChange",9),y=["==","!=","<","<=",">",">="].map(y2=>({value:y2,label:y2})),L=[{value:"asc",label:"ascending"},{value:"desc",label:"descending"}],S=R((n=p())!==null&&n!==void 0&&(n=n.filter)!==null&&n!==void 0&&n.path?na(p().filter.path):void 0,!0),j=R((t=y.find(y2=>{var s2;return y2.value===((s2=p().filter)===null||s2===void 0?void 0:s2.relation)}))!==null&&t!==void 0?t:y[0],!0),x=R(((c=p())===null||c===void 0||(c=c.filter)===null||c===void 0?void 0:c.value)||"",!0),E=R((l=p())!==null&&l!==void 0&&(l=l.sort)!==null&&l!==void 0&&l.path?na(p().sort.path):void 0,!0),P=R((o=L.find(y2=>{var s2;return y2.value===((s2=p().sort)===null||s2===void 0?void 0:s2.direction)}))!==null&&o!==void 0?o:L[0],!0);Y(()=>M(v()),()=>{z(s,Array.isArray(v()))}),Y(()=>(r(s),M(v())),()=>{z(i,r(s)?qo(v()):[])}),Y(()=>(r(s),M(v())),()=>{z(f,r(s)?qo(v(),!0):[])}),Y(()=>(r(i),na),()=>{z(u,r(i).map(na))}),Y(()=>(r(f),na),()=>{z(d,r(f)?r(f).map(na):[])}),Y(()=>(M(p()),r(d),H1),()=>{var y2;z(h,(y2=p())!==null&&y2!==void 0&&(y2=y2.projection)!==null&&y2!==void 0&&y2.paths&&r(d)?p().projection.paths.map(s2=>r(d).find(z2=>H1(z2.value,s2))).filter(s2=>!!s2):void 0)}),Y(()=>r(S),()=>{var y2,s2,z2;s2=(y2=r(S))===null||y2===void 0?void 0:y2.value,H1((z2=p())===null||z2===void 0||(z2=z2.filter)===null||z2===void 0?void 0:z2.path,s2)||(m("changeFilterPath",s2),p(m3(p(),["filter","path"],s2,!0)),g()(p()))}),Y(()=>r(j),()=>{var y2,s2,z2;s2=(y2=r(j))===null||y2===void 0?void 0:y2.value,H1((z2=p())===null||z2===void 0||(z2=z2.filter)===null||z2===void 0?void 0:z2.relation,s2)||(m("changeFilterRelation",s2),p(m3(p(),["filter","relation"],s2,!0)),g()(p()))}),Y(()=>r(x),()=>{var y2,s2;y2=r(x),H1((s2=p())===null||s2===void 0||(s2=s2.filter)===null||s2===void 0?void 0:s2.value,y2)||(m("changeFilterValue",y2),p(m3(p(),["filter","value"],y2,!0)),g()(p()))}),Y(()=>r(E),()=>{var y2,s2,z2;s2=(y2=r(E))===null||y2===void 0?void 0:y2.value,H1((z2=p())===null||z2===void 0||(z2=z2.sort)===null||z2===void 0?void 0:z2.path,s2)||(m("changeSortPath",s2),p(m3(p(),["sort","path"],s2,!0)),g()(p()))}),Y(()=>r(P),()=>{var y2,s2,z2;s2=(y2=r(P))===null||y2===void 0?void 0:y2.value,H1((z2=p())===null||z2===void 0||(z2=z2.sort)===null||z2===void 0?void 0:z2.direction,s2)||(m("changeSortDirection",s2),p(m3(p(),["sort","direction"],s2,!0)),g()(p()))}),Y(()=>r(h),()=>{(function(y2){var s2;H1((s2=p())===null||s2===void 0||(s2=s2.projection)===null||s2===void 0?void 0:s2.paths,y2)||(m("changeProjectionPaths",y2),p(m3(p(),["projection","paths"],y2,!0)),g()(p()))})(r(h)?r(h).map(y2=>y2.value):void 0)}),L4(),_1(!0);var I=yC(),k=q(I),$=q(k),U=J(q($)),O=q(U),c2=q(O);Ha(c2,{class:"jse-filter-path",showChevron:!0,get items(){return r(u)},get value(){return r(S)},set value(y2){z(S,y2)},$$legacy:!0});var u2=J(c2,2);Ha(u2,{class:"jse-filter-relation",showChevron:!0,clearable:!1,get items(){return y},get value(){return r(j)},set value(y2){z(j,y2)},$$legacy:!0});var l2=J(u2,2),S2=J($),q2=J(q(S2)),f2=q(q2),o2=q(f2);Ha(o2,{class:"jse-sort-path",showChevron:!0,get items(){return r(u)},get value(){return r(E)},set value(y2){z(E,y2)},$$legacy:!0}),Ha(J(o2,2),{class:"jse-sort-direction",showChevron:!0,clearable:!1,get items(){return L},get value(){return r(P)},set value(y2){z(P,y2)},$$legacy:!0});var d2=J(S2),P2=J(q(d2)),Q2=q(P2);Ha(q(Q2),{class:"jse-projection-paths",multiple:!0,showChevron:!0,get items(){return r(d)},get value(){return r(h)},set value(y2){z(h,y2)},$$legacy:!0}),Bc(l2,()=>r(x),y2=>z(x,y2)),T(e,I),u1()}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-select-query-language.svelte-jrd4q2 {
  position: relative;
  width: 32px;
}
.jse-select-query-language.svelte-jrd4q2 .jse-select-query-language-container:where(.svelte-jrd4q2) {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-select-query-language.svelte-jrd4q2 .jse-select-query-language-container:where(.svelte-jrd4q2) .jse-query-language:where(.svelte-jrd4q2) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  text-align: left;
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  white-space: nowrap;
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-context-menu-background, #656565);
}
.jse-select-query-language.svelte-jrd4q2 .jse-select-query-language-container:where(.svelte-jrd4q2) .jse-query-language:where(.svelte-jrd4q2):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}`);var xC=a2('<button type="button"><!> </button>'),LC=a2('<div class="jse-select-query-language svelte-jrd4q2"><div class="jse-select-query-language-container svelte-jrd4q2"></div></div>');function wC(e,a){f1(a,!1);var n=b(a,"queryLanguages",8),t=b(a,"queryLanguageId",12),c=b(a,"onChangeQueryLanguage",8);_1();var l=LC();x0(q(l),5,n,T0,(o,s)=>{var i,f=xC(),u=q(f),d=v=>{c4(v,{get data(){return J5}})},h=v=>{c4(v,{get data(){return G5}})};i2(u,v=>{r(s),M(t()),F(()=>r(s).id===t())?v(d):v(h,!1)});var m=J(u);E2(()=>{var v;i=A1(f,1,"jse-query-language svelte-jrd4q2",null,i,{selected:r(s).id===t()}),j4(f,"title",(r(s),F(()=>"Select ".concat(r(s).name," as query language")))),d1(m," ".concat((r(s),(v=F(()=>r(s).name))!==null&&v!==void 0?v:"")))}),w2("click",f,()=>{return v=r(s).id,t(v),void c()(v);var v}),T(o,f)}),T(e,l),u1()}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-header.svelte-1k211ye {
  display: flex;
  background: var(--jse-theme-color, #3883fa);
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-header.svelte-1k211ye .jse-title:where(.svelte-1k211ye) {
  flex: 1;
  padding: 5px;
  vertical-align: middle;
}
.jse-header.svelte-1k211ye button:where(.svelte-1k211ye) {
  border: none;
  background: transparent;
  min-width: 32px;
  color: inherit;
  cursor: pointer;
}
.jse-header.svelte-1k211ye button:where(.svelte-1k211ye):hover {
  background: rgba(255, 255, 255, 0.1);
}`);var CC=a2('<button type="button" class="jse-fullscreen svelte-1k211ye" title="Toggle full screen"><!></button>'),jC=a2('<div class="jse-header svelte-1k211ye"><div class="jse-title svelte-1k211ye"> </div> <!> <!> <button type="button" class="jse-close svelte-1k211ye"><!></button></div>');function n5(e,a){f1(a,!1);var n=b(a,"title",9,"Modal"),t=b(a,"fullScreenButton",9,!1),c=b(a,"fullscreen",13,!1),l=b(a,"onClose",9,void 0);_1(!0);var o=jC(),s=q(o),i=q(s),f=J(s,2);k0(f,a,"actions",{},null);var u=J(f,2),d=m=>{var v=CC(),p=q(v),g=Z2(()=>c()?w9:b9);c4(p,{get data(){return r(g)}}),w2("click",v,()=>c(!c())),T(m,v)};i2(u,m=>{t()&&m(d)});var h=J(u,2);c4(q(h),{get data(){return Vn}}),E2(()=>d1(i,n())),w2("click",h,()=>{var m;return(m=l())===null||m===void 0?void 0:m()}),T(e,o),u1()}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-config.svelte-5gkegr {
  border: none;
  background: transparent;
  min-width: 32px;
  color: inherit;
  cursor: pointer;
}
.jse-config.svelte-5gkegr:hover {
  background: rgba(255, 255, 255, 0.1);
}
.jse-config.hide.svelte-5gkegr {
  display: none;
}`);var SC=a2('<button slot="actions" type="button" title="Select a query language"><!></button>'),Lo=t3("jsoneditor:AutoScrollHandler");function yp(e){var a,n;function t(s){return s<20?200:s<50?400:1200}function c(){if(e){var s=.05*(a||0);e.scrollTop+=s}}function l(s){n&&s===a||(o(),Lo("startAutoScroll",s),a=s,n=setInterval(c,50))}function o(){n&&(Lo("stopAutoScroll"),clearInterval(n),n=void 0,a=void 0)}return Lo("createAutoScrollHandler",e),{onDrag:function(s){if(e){var i=s.clientY,{top:f,bottom:u}=e.getBoundingClientRect();i<f?l(-t(f-i)):i>u?l(t(i-u)):o()}},onDragEnd:function(){o()}}}var kC=(e,a,n,t)=>(e/=t/2)<1?n/2*e*e+a:-n/2*(--e*(e-2)-1)+a,wm=()=>{var e,a,n,t,c,l,o,s,i,f,u,d,h;function m(g){return g.getBoundingClientRect().top-(e.getBoundingClientRect?e.getBoundingClientRect().top:0)+n}function v(g){e.scrollTo?e.scrollTo(e.scrollLeft,g):e.scrollTop=g}function p(g){f||(f=g),v(l(u=g-f,n,s,i)),h=!0,u<i?requestAnimationFrame(p):(function(){v(n+s),a&&o&&(a.setAttribute("tabindex","-1"),a.focus()),typeof d=="function"&&d(),f=0,h=!1})()}return function(g){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};switch(i=1e3,c=y.offset||0,d=y.callback,l=y.easing||kC,o=y.a11y||!1,typeof y.container){case"object":e=y.container;break;case"string":e=document.querySelector(y.container);break;default:e=window.document.documentElement}switch(n=e.scrollTop,typeof g){case"number":a=void 0,o=!1,t=n+g;break;case"object":t=m(a=g);break;case"string":a=document.querySelector(g),t=m(a)}switch(s=t-n+c,typeof y.duration){case"number":i=y.duration;break;case"function":i=y.duration(s)}h?f=0:requestAnimationFrame(p)}};function X8(e,a){var n=Date.now(),t=e();return a(Date.now()-n),t}var H8=t3("validation"),NC={createObjectDocumentState:()=>({type:"object",properties:{}}),createArrayDocumentState:()=>({type:"array",items:[]}),createValueDocumentState:()=>({type:"value"})};function Mp(e,a,n,t){return js(e,a,n,t,NC)}function Cm(e,a,n,t){if(H8("validateJSON"),!a)return[];if(n!==t){var c=n.stringify(e);return a(c!==void 0?t.parse(c):void 0)}return a(e)}function AC(e,a,n,t){if(H8("validateText"),e.length>104857600)return{validationErrors:[{path:[],message:"Validation turned off: the document is too large",severity:he.info}]};if(e.length!==0)try{var c=X8(()=>n.parse(e),i=>H8("validate: parsed json in ".concat(i," ms")));if(!a)return;var l=n===t?c:X8(()=>t.parse(e),i=>H8("validate: parsed json with the validationParser in ".concat(i," ms"))),o=X8(()=>a(l),i=>H8("validate: validated json in ".concat(i," ms")));return f4(o)?void 0:{validationErrors:o}}catch(i){var s=X8(()=>(function(f,u){if(f.length>lw)return!1;try{return u.parse(re(f)),!0}catch{return!1}})(e,n),f=>H8("validate: checked whether repairable in ".concat(f," ms")));return{parseError:un(e,i.message||i.toString()),isRepairable:s}}}var xc=t3("jsoneditor:FocusTracker");function Ps(e){var a,{onMount:n,onDestroy:t,getWindow:c,hasFocus:l,onFocus:o,onBlur:s}=e,i=!1;function f(){var d=l();d&&(clearTimeout(a),i||(xc("focus"),o(),i=d))}function u(){i&&(clearTimeout(a),a=setTimeout(()=>{l()||(xc("blur"),i=!1,s())}))}n(()=>{xc("mount FocusTracker");var d=c();d&&(d.addEventListener("focusin",f,!0),d.addEventListener("focusout",u,!0))}),t(()=>{xc("destroy FocusTracker");var d=c();d&&(d.removeEventListener("focusin",f,!0),d.removeEventListener("focusout",u,!0))})}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-message.svelte-cbvd26 {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  padding: var(--jse-padding, 10px);
  display: flex;
  gap: var(--jse-padding, 10px);
  flex-wrap: wrap;
  align-items: stretch;
}
.jse-message.jse-success.svelte-cbvd26 {
  background: var(--message-success-background, #9ac45d);
  color: var(--jse-message-success-color, #fff);
}
.jse-message.svelte-cbvd26 .jse-text:where(.svelte-cbvd26) {
  display: flex;
  flex: 1;
  min-width: 60%;
  align-items: center;
}
.jse-message.svelte-cbvd26 .jse-text.jse-clickable:where(.svelte-cbvd26) {
  cursor: pointer;
}
.jse-message.svelte-cbvd26 .jse-text.jse-clickable:where(.svelte-cbvd26):hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.jse-message.jse-error.svelte-cbvd26 {
  background: var(--jse-message-error-background, var(--jse-error-color, #ee5341));
  color: var(--jse-message-error-color, #fff);
}
.jse-message.jse-warning.svelte-cbvd26 {
  background: var(--jse-message-warning-background, #ffde5c);
  color: var(--jse-message-warning-color, #4d4d4d);
}
.jse-message.jse-info.svelte-cbvd26 {
  background: var(--jse-message-info-background, #4f91ff);
  color: var(--jse-message-info-color, #fff);
}
.jse-message.svelte-cbvd26 .jse-actions:where(.svelte-cbvd26) {
  display: flex;
  gap: var(--jse-padding, 10px);
}
.jse-message.svelte-cbvd26 .jse-actions:where(.svelte-cbvd26) button.jse-action:where(.svelte-cbvd26) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-message-action-background, rgba(255, 255, 255, 0.2));
  color: inherit;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
}
.jse-message.svelte-cbvd26 .jse-actions:where(.svelte-cbvd26) button.jse-action:where(.svelte-cbvd26):hover {
  background: var(--jse-message-action-background-highlight, rgba(255, 255, 255, 0.3));
}`);var _C=a2('<button type="button" class="jse-button jse-action jse-primary svelte-cbvd26"><!> </button>'),EC=a2('<div><div role="button" tabindex="-1"><div class="jse-text-centered"><!> </div></div> <div class="jse-actions svelte-cbvd26"></div></div>');function ae(e,a){f1(a,!1);var n=b(a,"type",9,"success"),t=b(a,"icon",9,void 0),c=b(a,"message",9,void 0),l=b(a,"actions",25,()=>[]),o=b(a,"onClick",9,void 0),s=b(a,"onClose",9,void 0);s()&&ze(s()),_1(!0);var i,f=EC(),u=q(f),d=q(u),h=q(d),m=p=>{c4(p,{get data(){return t()}})};i2(h,p=>{t()&&p(m)});var v=J(h);x0(J(u,2),5,l,T0,(p,g)=>{var y=_C(),L=q(y),S=x=>{c4(x,{get data(){return r(g),F(()=>r(g).icon)}})};i2(L,x=>{r(g),F(()=>r(g).icon)&&x(S)});var j=J(L);E2(()=>{var x;j4(y,"title",(r(g),F(()=>r(g).title))),y.disabled=(r(g),F(()=>r(g).disabled)),d1(j," ".concat((r(g),(x=F(()=>r(g).text))!==null&&x!==void 0?x:"")))}),w2("click",y,()=>{r(g).onClick&&r(g).onClick()}),w2("mousedown",y,()=>{r(g).onMouseDown&&r(g).onMouseDown()}),T(p,y)}),E2(()=>{var p,g;A1(f,1,"jse-message jse-".concat((p=n())!==null&&p!==void 0?p:""),"svelte-cbvd26"),i=A1(u,1,"jse-text svelte-cbvd26",null,i,{"jse-clickable":!!o()}),d1(v," ".concat((g=c())!==null&&g!==void 0?g:""))}),w2("click",u,function(){o()&&o()()}),T(e,f),u1()}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-validation-errors-overview.svelte-1342rh4 {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  overflow: auto;
  max-height: 25%;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) {
  border-collapse: collapse;
  width: 100%;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) {
  cursor: pointer;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr.jse-validation-error:where(.svelte-1342rh4) {
  background: var(--jse-message-error-background, var(--jse-error-color, #ee5341));
  color: var(--jse-message-error-color, #fff);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr.jse-validation-warning:where(.svelte-1342rh4) {
  background: var(--jse-message-warning-background, #ffde5c);
  color: var(--jse-message-warning-color, #4d4d4d);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr.jse-validation-warning:where(.svelte-1342rh4):hover {
  filter: brightness(105%);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr.jse-validation-info:where(.svelte-1342rh4) {
  background: var(--jse-message-info-background, #4f91ff);
  color: var(--jse-message-info-color, #fff);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4):hover {
  filter: brightness(110%);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td:where(.svelte-1342rh4) {
  padding: 4px var(--jse-padding, 10px);
  vertical-align: middle;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td.jse-validation-error-icon:where(.svelte-1342rh4) {
  width: 36px;
  box-sizing: border-box;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td.jse-validation-error-action:where(.svelte-1342rh4) {
  width: 36px;
  box-sizing: border-box;
  padding: 0;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td.jse-validation-error-action:where(.svelte-1342rh4) button.jse-validation-errors-collapse:where(.svelte-1342rh4) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 36px;
  height: 26px;
  cursor: pointer;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td.jse-validation-error-action:where(.svelte-1342rh4) button.jse-validation-errors-collapse:where(.svelte-1342rh4):hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td:where(.svelte-1342rh4) div.jse-validation-errors-expand:where(.svelte-1342rh4) {
  display: inline-block;
  position: relative;
  top: 3px;
}`);var PC=a2('<button type="button" class="jse-validation-errors-collapse svelte-1342rh4" title="Collapse validation errors"><!></button>'),TC=a2('<tr tabindex="0"><td class="jse-validation-error-icon svelte-1342rh4"><!></td><td class="jse-validation-error-path svelte-1342rh4"> </td><td class="jse-validation-error-message svelte-1342rh4"> </td><td class="jse-validation-error-action svelte-1342rh4"><!></td></tr>'),OC=a2('<tr class="jse-validation-error svelte-1342rh4"><td class="svelte-1342rh4"></td><td class="svelte-1342rh4"></td><td class="svelte-1342rh4"> </td><td class="svelte-1342rh4"></td></tr>'),RC=a2('<table class="jse-validation-errors-overview-expanded svelte-1342rh4"><tbody><!><!></tbody></table>'),qC=a2('<table class="jse-validation-errors-overview-collapsed svelte-1342rh4"><tbody><tr><td class="jse-validation-error-icon svelte-1342rh4"><!></td><td class="jse-validation-error-count svelte-1342rh4"> <div class="jse-validation-errors-expand svelte-1342rh4"><!></div></td></tr></tbody></table>'),$C=a2('<div class="jse-validation-errors-overview svelte-1342rh4"><!></div>');function Ts(e,a){f1(a,!1);var n=R(void 0,!0),t=b(a,"validationErrors",9),c=b(a,"selectError",9),l=R(!0,!0);function o(){z(l,!1)}function s(){z(l,!0)}Y(()=>M(t()),()=>{z(n,t().length)}),L4(),_1(!0);var i=W1(),f=Y2(i),u=d=>{var h=$C(),m=q(h),v=g=>{var y=RC(),L=q(y),S=q(L);x0(S,1,()=>(M(Ic),M(t()),M(hc),F(()=>Ic(t(),hc))),T0,(E,P,I)=>{var k=TC(),$=q(k);c4(q($),{get data(){return D6}});var U=J($),O=q(U),c2=J(U),u2=q(c2),l2=q(J(c2)),S2=q2=>{var f2=PC();c4(q(f2),{get data(){return L9}}),w2("click",f2,z6(o)),T(q2,f2)};i2(l2,q2=>{M(t()),F(()=>I===0&&t().length>1)&&q2(S2)}),E2(q2=>{var f2;A1(k,1,"jse-validation-".concat((r(P),(f2=F(()=>r(P).severity))!==null&&f2!==void 0?f2:"")),"svelte-1342rh4"),d1(O,q2),d1(u2,(r(P),F(()=>r(P).message)))},[()=>(M(H3),r(P),F(()=>H3(r(P).path)))]),w2("click",k,()=>{setTimeout(()=>c()(r(P)))}),T(E,k)});var j=J(S),x=E=>{var P=OC(),I=J(q(P),2),k=q(I);E2(()=>d1(k,"(and ".concat(r(n)-hc," more errors)"))),T(E,P)};i2(j,E=>{r(n)>hc&&E(x)}),T(g,y)},p=g=>{var y=qC(),L=q(y),S=q(L),j=q(S);c4(q(j),{get data(){return D6}});var x=q(J(j));c4(q(J(x)),{get data(){return Z5}}),E2(E=>{var P;A1(S,1,"jse-validation-".concat(E??""),"svelte-1342rh4"),d1(x,"".concat((P=r(n))!==null&&P!==void 0?P:""," validation errors "))},[()=>(M(t()),F(()=>{return E=t(),[he.error,he.warning,he.info].find(P=>E.some(I=>I.severity===P));var E}))]),w2("click",S,s),T(g,y)};i2(m,g=>{r(l)||r(n)===1?g(v):g(p,!1)}),T(d,h)};i2(f,d=>{M(f4),M(t()),F(()=>!f4(t()))&&d(u)}),T(e,i),u1()}function t5(e,a){if(e)return e.addEventListener("keydown",n),{destroy(){e.removeEventListener("keydown",n)}};function n(t){t.key==="Escape"&&(t.preventDefault(),t.stopPropagation(),a())}}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
dialog.jse-modal.svelte-2aoco4 {
  border-radius: 3px;
  font-size: var(--jse-padding, 10px);
  border: none;
  padding: 0;
  display: flex;
  min-width: 0;
  margin: auto;
  overflow: visible;
  transition: width 0.1s ease-in-out, height 0.1s ease-in-out;
}
dialog.jse-modal.jse-sort-modal.svelte-2aoco4 {
  width: 400px;
}
dialog.jse-modal.jse-repair-modal.svelte-2aoco4 {
  width: 600px;
  height: 500px;
}
dialog.jse-modal.jse-jsoneditor-modal.svelte-2aoco4 {
  width: 800px;
  height: 600px;
}
dialog.jse-modal.jse-transform-modal.svelte-2aoco4 {
  width: 1200px;
  height: 800px;
}
dialog.jse-modal.jse-fullscreen.svelte-2aoco4 {
  width: 100%;
  height: 100%;
}
dialog.jse-modal.svelte-2aoco4::backdrop {
  background: var(--jse-overlay-background, rgba(0, 0, 0, 0.3));
}
dialog.jse-modal[open].svelte-2aoco4 {
  animation: svelte-2aoco4-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
dialog.jse-modal[open].svelte-2aoco4::backdrop {
  animation: svelte-2aoco4-fade 0.2s ease-out;
}
dialog.jse-modal.svelte-2aoco4 .jse-modal-inner:where(.svelte-2aoco4) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  padding: 0;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  background: var(--jse-modal-background, #f5f5f5);
  color: var(--jse-text-color, #4d4d4d);
}
@keyframes svelte-2aoco4-zoom {
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
}
@keyframes svelte-2aoco4-fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
dialog.jse-modal.svelte-2aoco4 .svelte-select {
  --border: var(--jse-svelte-select-border, 1px solid #d8dbdf);
  --item-is-active-bg: var(--jse-item-is-active-bg, #3883fa);
  --border-radius: var(--jse-svelte-select-border-radius, 3px);
  --background: var(--jse-svelte-select-background, #fff);
  --padding: var(--jse-svelte-select-padding, 0 10px);
  --multi-select-padding: var(--jse-svelte-select-multi-select-padding, 0 10px);
  --font-size: var(--jse-svelte-select-font-size, var(--jse-font-size, 16px));
  --height: 36px;
  --multi-item-height: 28px;
  --multi-item-margin: 2px;
  --multi-item-padding: 2px 8px;
  --multi-item-border-radius: 6px;
  --indicator-top: 8px;
}`);var DC=a2('<dialog><div class="jse-modal-inner svelte-2aoco4"><!></div></dialog>');function Ht(e,a){f1(a,!1);var n=b(a,"className",8,void 0),t=b(a,"fullscreen",8,!1),c=b(a,"onClose",8),l=R();function o(){c()()}x3(()=>r(l).showModal()),ze(()=>r(l).close()),_1();var s,i=DC(),f=q(i);k0(q(f),a,"default",{},null),r0(i,u=>z(l,u),()=>r(l)),o3(()=>w2("close",i,o)),o3(()=>{return w2("pointerdown",i,(u=o,function(){for(var d=arguments.length,h=new Array(d),m=0;m<d;m++)h[m]=arguments[m];h[0].target===this&&u?.apply(this,h)}));var u}),o3(()=>w2("cancel",i,X6(function(u){St.call(this,a,u)}))),A3(i,(u,d)=>t5?.(u,d),()=>o),E2(u=>s=A1(i,1,u,"svelte-2aoco4",s,{"jse-fullscreen":t()}),[()=>va((M(Ee),M(n()),F(()=>Ee("jse-modal",n()))))]),T(e,i),u1()}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-contents.svelte-10a6ob6 {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-contents.svelte-10a6ob6 .jse-actions:where(.svelte-10a6ob6) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-10a6ob6 .jse-actions:where(.svelte-10a6ob6) button.jse-primary:where(.svelte-10a6ob6) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-contents.svelte-10a6ob6 .jse-actions:where(.svelte-10a6ob6) button.jse-primary:where(.svelte-10a6ob6):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-contents.svelte-10a6ob6 .jse-actions:where(.svelte-10a6ob6) button.jse-primary:where(.svelte-10a6ob6):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}

.jse-shortcuts.svelte-10a6ob6 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: calc(2 * var(--jse-padding, 10px)) 0;
}
.jse-shortcuts.svelte-10a6ob6 .jse-shortcut:where(.svelte-10a6ob6) .jse-key:where(.svelte-10a6ob6) {
  font-size: 200%;
  color: var(--jse-theme-color, #3883fa);
}`);var FC=a2('<!> <div class="jse-modal-contents svelte-10a6ob6"><div>Clipboard permission is disabled by your browser. You can use:</div> <div class="jse-shortcuts svelte-10a6ob6"><div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for copy</div> <div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for cut</div> <div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for paste</div></div> <div class="jse-actions svelte-10a6ob6"><button type="button" class="jse-primary svelte-10a6ob6">Close</button></div></div>',1);function jm(e,a){f1(a,!1);var n=b(a,"onClose",9),t=zs()?"\u2318":"Ctrl";_1(!0),Ht(e,{get onClose(){return n()},className:"jse-copy-paste",children:(c,l)=>{var o=FC(),s=Y2(o);n5(s,{title:"Copying and pasting",get onClose(){return n()}});var i=J(s,2),f=J(q(i),2),u=q(f),d=q(u),h=q(d),m=J(u,2),v=q(m),p=q(v),g=q(J(m,2)),y=q(g),L=q(J(f,2));E2(()=>{d1(h,"".concat(t,"+C")),d1(p,"".concat(t,"+X")),d1(y,"".concat(t,"+V"))}),w2("click",L,function(){for(var S,j=arguments.length,x=new Array(j),E=0;E<j;E++)x[E]=arguments[E];(S=n())===null||S===void 0||S.apply(this,x)}),T(c,o)},$$slots:{default:!0}}),u1()}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-menu.svelte-3erbu0 {
  background: var(--jse-theme-color, #3883fa);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-main-menu, 14px);
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  position: relative;
}
.jse-menu.svelte-3erbu0 .jse-button:where(.svelte-3erbu0) {
  font-family: inherit;
  font-size: inherit;
  line-height: 1.5em;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  width: var(--jse-menu-button-size, 32px);
  height: var(--jse-menu-button-size, 32px);
  padding: calc(0.5 * var(--jse-padding, 10px));
  margin: 0;
  border-radius: 0;
  display: inline-flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.jse-menu.svelte-3erbu0 .jse-button:where(.svelte-3erbu0):hover, .jse-menu.svelte-3erbu0 .jse-button:where(.svelte-3erbu0):focus {
  background: var(--jse-theme-color-highlight, #5f9dff);
}
.jse-menu.svelte-3erbu0 .jse-button:where(.svelte-3erbu0):disabled {
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  opacity: 0.5;
  background: transparent;
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button:where(.svelte-3erbu0) {
  width: auto;
  height: calc(var(--jse-menu-button-size, 32px) - var(--jse-padding, 10px));
  margin: calc(0.5 * var(--jse-padding, 10px)) 0;
  padding: 0 calc(0.5 * var(--jse-padding, 10px)) 1px;
  border: 1px solid var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button:where(.svelte-3erbu0):not(.jse-last) {
  border-right: none;
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button.jse-first:where(.svelte-3erbu0) {
  margin-left: calc(0.5 * var(--jse-padding, 10px));
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button.jse-last:where(.svelte-3erbu0) {
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button:where(.svelte-3erbu0):hover, .jse-menu.svelte-3erbu0 .jse-button.jse-group-button:where(.svelte-3erbu0):focus {
  background: var(--jse-theme-color-highlight, #5f9dff);
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button.jse-selected:where(.svelte-3erbu0) {
  background: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  color: var(--jse-theme-color, #3883fa);
}
.jse-menu.svelte-3erbu0 .jse-space:where(.svelte-3erbu0) {
  flex: 1;
}
.jse-menu.svelte-3erbu0 .jse-separator:where(.svelte-3erbu0) {
  background: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  opacity: 0.3;
  width: 1px;
  margin: 3px;
}`);var BC=a2('<div class="jse-separator svelte-3erbu0"></div>'),IC=a2('<div class="jse-space svelte-3erbu0"></div>'),UC=a2('<button type="button"><!> <!></button>'),HC=a2('<div class="jse-menu svelte-3erbu0"><!> <!> <!></div>');function z5(e,a){f1(a,!1);var n=b(a,"items",25,()=>[]);_1(!0);var t=HC(),c=q(t);k0(c,a,"left",{},null);var l=J(c,2);x0(l,1,n,T0,(o,s)=>{var i=W1(),f=Y2(i),u=h=>{T(h,BC())},d=h=>{var m=W1(),v=Y2(m),p=y=>{T(y,IC())},g=y=>{var L=W1(),S=Y2(L),j=E=>{var P=UC(),I=q(P),k=O=>{c4(O,{get data(){return r(s),F(()=>r(s).icon)}})};i2(I,O=>{r(s),F(()=>r(s).icon)&&O(k)});var $=J(I,2),U=O=>{var c2=s3();E2(()=>d1(c2,(r(s),F(()=>r(s).text)))),T(O,c2)};i2($,O=>{r(s),F(()=>r(s).text)&&O(U)}),E2(()=>{var O;A1(P,1,"jse-button ".concat((r(s),(O=F(()=>r(s).className))!==null&&O!==void 0?O:"")),"svelte-3erbu0"),j4(P,"title",(r(s),F(()=>r(s).title))),P.disabled=(r(s),F(()=>r(s).disabled||!1))}),w2("click",P,function(){for(var O,c2=arguments.length,u2=new Array(c2),l2=0;l2<c2;l2++)u2[l2]=arguments[l2];(O=r(s).onClick)===null||O===void 0||O.apply(this,u2)}),T(E,P)},x=E=>{var P=s3();E2(I=>d1(P,I),[()=>(r(s),F(()=>(function(I){return console.error("Unknown type of menu item",I),"???"})(r(s))))]),T(E,P)};i2(S,E=>{M(b6),r(s),F(()=>b6(r(s)))?E(j):E(x,!1)},!0),T(y,L)};i2(v,y=>{M(Bo),r(s),F(()=>Bo(r(s)))?y(p):y(g,!1)},!0),T(h,m)};i2(f,h=>{M(aa),r(s),F(()=>aa(r(s)))?h(u):h(d,!1)}),T(o,i)}),k0(J(l,2),a,"right",{},null),T(e,t),u1()}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-json-repair-component.svelte-16jv58j {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
}
.jse-json-repair-component.svelte-16jv58j .jse-info:where(.svelte-16jv58j) {
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  vertical-align: center;
}
.jse-json-repair-component.svelte-16jv58j .jse-json-text:where(.svelte-16jv58j) {
  flex: 1;
  border: none;
  padding: 2px;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  color: var(--jse-text-color, #4d4d4d);
  resize: none;
  outline: none;
}`);var WC=a2('<div slot="left" class="jse-info svelte-16jv58j">Repair invalid JSON, then click apply</div>'),VC=a2('<div class="jse-json-repair-component svelte-16jv58j"><!> <!> <textarea class="jse-json-text svelte-16jv58j" autocomplete="off" autocapitalize="off" spellcheck="false"></textarea></div>');function JC(e,a){f1(a,!1);var n=R(void 0,!0),t=R(void 0,!0),c=R(void 0,!0),l=R(void 0,!0),o=R(void 0,!0),s=R(void 0,!0),i=b(a,"text",13,""),f=b(a,"readOnly",9,!1),u=b(a,"onParse",9),d=b(a,"onRepair",9),h=b(a,"onChange",9,void 0),m=b(a,"onApply",9),v=b(a,"onCancel",9),p=t3("jsoneditor:JSONRepair"),g=R(void 0,!0);function y(){if(r(g)&&r(n)){var U=r(n).position!==void 0?r(n).position:0;r(g).setSelectionRange(U,U),r(g).focus()}}function L(){m()(i())}function S(){try{i(d()(i())),h()&&h()(i())}catch{}}var j=R(void 0,!0);Y(()=>M(i()),()=>{z(n,(function(U){try{return void u()(U)}catch(O){return un(U,O.message)}})(i()))}),Y(()=>M(i()),()=>{z(t,(function(U){try{return d()(U),!0}catch{return!1}})(i()))}),Y(()=>r(n),()=>{p("error",r(n))}),Y(()=>M(v()),()=>{z(j,[{type:"space"},{type:"button",icon:Vn,title:"Cancel repair",className:"jse-cancel",onClick:v()}])}),Y(()=>nl,()=>{z(c,{icon:nl,text:"Show me",title:"Scroll to the error location",onClick:y})}),Y(()=>c6,()=>{z(l,{icon:c6,text:"Auto repair",title:"Automatically repair JSON",onClick:S})}),Y(()=>(r(t),r(c),r(l)),()=>{z(o,r(t)?[r(c),r(l)]:[r(c)])}),Y(()=>M(f()),()=>{z(s,[{icon:yr,text:"Apply",title:"Apply fixed JSON",disabled:f(),onClick:L}])}),L4(),_1(!0);var x=VC(),E=q(x);z5(E,{get items(){return r(j)},$$slots:{left:(U,O)=>{T(U,WC())}}});var P=J(E,2),I=U=>{var O=Z2(()=>(r(n),F(()=>"Cannot parse JSON: ".concat(r(n).message))));ae(U,{type:"error",get icon(){return D6},get message(){return r(O)},get actions(){return r(o)}})},k=U=>{ae(U,{type:"success",message:"JSON is valid now and can be parsed.",get actions(){return r(s)}})};i2(P,U=>{r(n)?U(I):U(k,!1)});var $=J(P,2);r0($,U=>z(g,U),()=>r(g)),E2(()=>{$.readOnly=f(),r8($,i())}),w2("input",$,function(U){p("handleChange");var O=U.target.value;i()!==O&&(i(O),h()&&h()(i()))}),T(e,x),u1()}function Sm(e,a){f1(a,!1);var n=b(a,"text",13),t=b(a,"onParse",9),c=b(a,"onRepair",9),l=b(a,"onApply",9),o=b(a,"onClose",9);function s(f){l()(f),o()()}function i(){o()()}_1(!0),Ht(e,{get onClose(){return o()},className:"jse-repair-modal",children:(f,u)=>{JC(f,{get onParse(){return t()},get onRepair(){return c()},onApply:s,onCancel:i,get text(){return n()},set text(d){n(d)},$$legacy:!0})},$$slots:{default:!0}}),u1()}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
div.jse-collapsed-items.svelte-1v6dhm4 {
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  color: var(--jse-collapsed-items-link-color, rgba(0, 0, 0, 0.38));
  padding: calc(0.5 * var(--jse-padding, 10px));
  border: 8px solid transparent;
  border-width: 8px 0;
  background-color: var(--jse-contents-background-color, transparent);
  background-image: linear-gradient(var(--jse-collapsed-items-background-color, #f5f5f5), var(--jse-collapsed-items-background-color, #f5f5f5)), linear-gradient(to bottom right, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to bottom left, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to top right, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to top left, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%);
  background-repeat: repeat, repeat-x, repeat-x, repeat-x, repeat-x;
  background-position: 0 0, 8px 0, 8px 0, 8px 100%, 8px 100%;
  background-size: auto auto, 16px 16px, 16px 16px, 16px 16px, 16px 16px;
  background-clip: padding-box, border-box, border-box, border-box, border-box;
  background-origin: padding-box, border-box, border-box, border-box, border-box;
  display: flex;
}
div.jse-collapsed-items.jse-selected.svelte-1v6dhm4 {
  background-color: var(--jse-selection-background-color, #d3d3d3);
  --jse-collapsed-items-background-color: var(--jse-collapsed-items-selected-background-color, #c2c2c2);
}
div.jse-collapsed-items.svelte-1v6dhm4 div.jse-text:where(.svelte-1v6dhm4),
div.jse-collapsed-items.svelte-1v6dhm4 button.jse-expand-items:where(.svelte-1v6dhm4) {
  margin: 0 calc(0.5 * var(--jse-padding, 10px));
}
div.jse-collapsed-items.svelte-1v6dhm4 div.jse-text:where(.svelte-1v6dhm4) {
  display: inline;
}
div.jse-collapsed-items.svelte-1v6dhm4 button.jse-expand-items:where(.svelte-1v6dhm4) {
  font-family: inherit;
  font-size: inherit;
  color: var(--jse-collapsed-items-link-color, rgba(0, 0, 0, 0.38));
  background: none;
  border: none;
  padding: 0;
  text-decoration: underline;
  cursor: pointer;
}
div.jse-collapsed-items.svelte-1v6dhm4 button.jse-expand-items:where(.svelte-1v6dhm4):hover, div.jse-collapsed-items.svelte-1v6dhm4 button.jse-expand-items:where(.svelte-1v6dhm4):focus {
  color: var(--jse-collapsed-items-link-color-highlight, #ee5341);
}`);var GC=a2('<button type="button" class="jse-expand-items svelte-1v6dhm4"> </button>'),KC=a2('<div role="none"><div><div class="jse-text svelte-1v6dhm4"> </div> <!></div></div>');function QC(e,a){f1(a,!1);var n=R(void 0,!0),t=R(void 0,!0),c=R(void 0,!0),l=R(void 0,!0),o=R(void 0,!0),s=b(a,"visibleSections",9),i=b(a,"sectionIndex",9),f=b(a,"total",9),u=b(a,"path",9),d=b(a,"selection",9),h=b(a,"onExpandSection",9),m=b(a,"context",9);Y(()=>(M(s()),M(i())),()=>{z(n,s()[i()])}),Y(()=>r(n),()=>{z(t,r(n).end)}),Y(()=>(M(s()),M(i()),M(f())),()=>{z(c,s()[i()+1]?s()[i()+1].start:f())}),Y(()=>(M(m()),M(d()),M(u()),r(t)),()=>{z(l,Bt(m().getJson(),d(),u().concat(String(r(t)))))}),Y(()=>(r(t),r(c)),()=>{z(o,(function(j,x){var E={start:j,end:Math.min(Fo(j),x)},P=Math.max(Hc((j+x)/2),j),I={start:P,end:Math.min(Fo(P),x)},k=Hc(x),$=k===x?k-qt:k,U={start:Math.max($,j),end:x},O=[E],c2=I.start>=E.end&&I.end<=U.start;return c2&&O.push(I),U.start>=(c2?I.end:E.end)&&O.push(U),O})(r(t),r(c)))}),L4(),_1(!0);var v,p,g=KC(),y=q(g),L=q(y),S=q(L);x0(J(L,2),1,()=>r(o),T0,(j,x)=>{var E=GC(),P=q(E);E2(()=>{var I,k;return d1(P,"show ".concat((r(x),(I=F(()=>r(x).start))!==null&&I!==void 0?I:""),"-").concat((r(x),(k=F(()=>r(x).end))!==null&&k!==void 0?k:"")))}),w2("click",E,()=>h()(u(),r(x))),T(j,E)}),E2(()=>{var j,x;v=A1(g,1,"jse-collapsed-items svelte-1v6dhm4",null,v,{"jse-selected":r(l)}),p=me(g,"",p,{"--level":(M(u()),F(()=>u().length+2))}),d1(S,"Items ".concat((j=r(t))!==null&&j!==void 0?j:"","-").concat((x=r(c))!==null&&x!==void 0?x:""))}),w2("mousemove",g,function(j){j.stopPropagation()}),T(e,g),u1()}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-context-menu-pointer.svelte-10ijtzr {
  position: absolute;
  top: calc(-0.5 * var(--jse-context-menu-pointer-size, calc(1em + 4px)));
  right: calc(-0.5 * var(--jse-context-menu-pointer-size, calc(1em + 4px)));
  width: var(--jse-context-menu-pointer-size, calc(1em + 4px));
  height: var(--jse-context-menu-pointer-size, calc(1em + 4px));
  padding: 0;
  margin: 0;
  cursor: pointer;
  background: transparent;
  border-radius: 2px;
  background: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
  color: var(--jse-context-menu-pointer-color, var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff)));
  border: none;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-context-menu-pointer.jse-root.svelte-10ijtzr {
  top: 0;
  right: calc(-2px - var(--jse-context-menu-pointer-size, calc(1em + 4px)));
}
.jse-context-menu-pointer.jse-insert.svelte-10ijtzr {
  right: -1px;
}
.jse-context-menu-pointer.svelte-10ijtzr:hover {
  background: var(--jse-context-menu-pointer-background-highlight, var(--jse-context-menu-background-highlight, #7a7a7a));
}
.jse-context-menu-pointer.jse-selected.svelte-10ijtzr {
  background: var(--jse-context-menu-pointer-background, var(--jse-context-menu-background, #656565));
}
.jse-context-menu-pointer.jse-selected.svelte-10ijtzr:hover {
  background: var(--jse-context-menu-pointer-background-highlight, var(--jse-context-menu-background-highlight, #7a7a7a));
}`);var XC=a2('<button type="button"><!></button>');function Y6(e,a){f1(a,!1);var n=b(a,"root",9,!1),t=b(a,"insert",9,!1),c=b(a,"selected",9),l=b(a,"onContextMenu",9);_1(!0);var o,s=XC();c4(q(s),{get data(){return qe}}),E2(()=>{o=A1(s,1,"jse-context-menu-pointer svelte-10ijtzr",null,o,{"jse-root":n(),"jse-insert":t(),"jse-selected":c()}),j4(s,"title",ys)}),w2("click",s,function(i){for(var f=i.target;f&&f.nodeName!=="BUTTON";)f=f.parentNode;f&&l()({anchor:f,left:0,top:0,width:L6,height:x6,offsetTop:2,offsetLeft:0,showTip:!0})}),T(e,s),u1()}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-key.svelte-1n4cez4 {
  display: inline-block;
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  color: var(--jse-key-color, #1a1a1a);
  word-break: normal;
  overflow-wrap: normal;
  white-space: pre-wrap;
}
.jse-key.jse-empty.svelte-1n4cez4 {
  min-width: 3em;
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
.jse-key.jse-empty.svelte-1n4cez4::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  content: "key";
}`);var YC=a2('<div role="none" data-type="selectable-key"><!></div>'),ZC=a2("<!> <!>",1),ej=a2('<div role="button" tabindex="-1" class="jse-value" data-type="selectable-value"></div>');function km(e,a){f1(a,!0);var n=I3(()=>h4(a.selection)&&e3(a.selection)),t=I3(()=>a.context.onRenderValue({path:a.path,value:a.value,mode:a.context.mode,truncateTextSize:a.context.truncateTextSize,readOnly:a.context.readOnly,enforceString:a.enforceString,isEditing:r(n),parser:a.context.parser,normalization:a.context.normalization,selection:a.selection,searchResultItems:a.searchResultItems,onPatch:a.context.onPatch,onPasteJson:a.context.onPasteJson,onSelect:a.context.onSelect,onFind:a.context.onFind,findNextInside:a.context.findNextInside,focus:a.context.focus})),c=W1();x0(Y2(c),17,()=>r(t),T0,(l,o)=>{var s=W1(),i=Y2(s),f=d=>{var h=I3(()=>r(o).action),m=ej();A3(m,(v,p)=>{var g;return(g=r(h))===null||g===void 0?void 0:g(v,p)},()=>r(o).props),T(d,m)},u=d=>{var h=I3(()=>r(o).component),m=W1();Av(Y2(m),()=>r(h),(v,p)=>{p(v,ua(()=>r(o).props))}),T(d,m)};i2(i,d=>{uw(r(o))?d(f):d(u,!1)}),T(l,s)}),T(e,c),u1()}var aj={selecting:!1,selectionAnchor:void 0,selectionAnchorType:void 0,selectionFocus:void 0,dragging:!1};function wo(e){var{json:a,selection:n,deltaY:t,items:c}=e;if(!n)return{operations:void 0,updatedSelection:void 0,offset:0};var l=t<0?(function(u){for(var{json:d,items:h,selection:m,deltaY:v}=u,p=w6(d,m),g=h.findIndex(E=>H1(E.path,p)),y=()=>{var E;return(E=h[L-1])===null||E===void 0?void 0:E.height},L=g,S=0;y()!==void 0&&Math.abs(v)>S+y()/2;)S+=y(),L-=1;var j=h[L].path,x=L-g;return L!==g&&h[L]!==void 0?{beforePath:j,offset:x}:void 0})({json:a,selection:n,deltaY:t,items:c}):(function(u){for(var d,{json:h,items:m,selection:v,deltaY:p}=u,g=pa(h,v),y=m.findIndex($=>H1($.path,g)),L=0,S=y,j=()=>{var $;return($=m[S+1])===null||$===void 0?void 0:$.height};j()!==void 0&&Math.abs(p)>L+j()/2;)L+=j(),S+=1;var x=Y1(g),E=W2(h,x),P=Array.isArray(E)?S:S+1,I=(d=m[P])===null||d===void 0?void 0:d.path,k=S-y;return I?{beforePath:I,offset:k}:{append:!0,offset:k}})({json:a,selection:n,deltaY:t,items:c});if(!l||l.offset===0)return{operations:void 0,updatedSelection:void 0,offset:0};var o=(function(u,d,h){if(!d)return[];var m="beforePath"in h?h.beforePath:void 0,v="append"in h?h.append:void 0,p=Y1(r1(d)),g=W2(u,p);if(!(v||m&&Xe(m,p)&&m.length>p.length))return[];var y=w6(u,d),L=pa(u,d),S=U1(y),j=U1(L),x=m?m[p.length]:void 0;if(!y0(g)){if(p0(g)){var E=p3(S),P=p3(j),I=x!==void 0?p3(x):g.length;return Ei(P-E+1,I<E?c2=>({op:"move",from:c1(p.concat(String(E+c2))),path:c1(p.concat(String(I+c2)))}):()=>({op:"move",from:c1(p.concat(String(E))),path:c1(p.concat(String(I)))}))}throw new Error("Cannot create move operations: parent must be an Object or Array")}var k=Object.keys(g),$=k.indexOf(S),U=k.indexOf(j),O=v?k.length:x!==void 0?k.indexOf(x):-1;return $!==-1&&U!==-1&&O!==-1?O>$?[...k.slice($,U+1),...k.slice(O,k.length)].map(c2=>ha(p,c2)):[...k.slice(O,$),...k.slice(U+1,k.length)].map(c2=>ha(p,c2)):[]})(a,n,l),s=Y1(w6(a,n)),i=W2(a,s);if(Array.isArray(i)){var f=(function(u){var d,h,{items:m,json:v,selection:p,offset:g}=u,y=w6(v,p),L=pa(v,p),S=m.findIndex(P=>H1(P.path,y)),j=m.findIndex(P=>H1(P.path,L)),x=(d=m[S+g])===null||d===void 0?void 0:d.path,E=(h=m[j+g])===null||h===void 0?void 0:h.path;return k3(x,E)})({items:c,json:a,selection:n,offset:l.offset});return{operations:o,updatedSelection:f,offset:l.offset}}return{operations:o,updatedSelection:void 0,offset:l.offset}}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-validation-error.svelte-q6a061 {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-error-color, #ee5341);
}

button.jse-validation-info.svelte-q6a061 {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-info-color, #4f91ff);
}

button.jse-validation-warning.svelte-q6a061 {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-warning-color, #fdc539);
}`);var nj=a2('<button type="button"><!></button>');function rn(e,a){f1(a,!1);var n=R(),t=ga("absolute-popup"),c=b(a,"validationError",8),l=b(a,"onExpand",8);Y(()=>M(c()),()=>{z(n,fw(c())&&c().isChildError?"Contains invalid data":c().message)}),L4(),_1();var o=nj();c4(q(o),{get data(){return D6}}),o3(()=>w2("click",o,function(){for(var s,i=arguments.length,f=new Array(i),u=0;u<i;u++)f[u]=arguments[u];(s=l())===null||s===void 0||s.apply(this,f)})),A3(o,(s,i)=>mn?.(s,i),()=>N2({text:r(n)},t)),E2(()=>{var s;return A1(o,1,"jse-validation-".concat((M(c()),(s=F(()=>c().severity))!==null&&s!==void 0?s:"")),"svelte-q6a061")}),T(e,o),u1()}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-expand.svelte-1qi6rc1 {
  width: var(--jse-indent-size, calc(1em + 4px));
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  background: transparent;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
  font-size: var(--jse-font-size-mono, 14px);
  height: var(--jse-line-height, calc(1em + 4px));
}
.jse-expand.svelte-1qi6rc1:hover {
  opacity: 0.8;
}

.jse-meta.svelte-1qi6rc1,
.jse-separator.svelte-1qi6rc1,
.jse-index.svelte-1qi6rc1,
.jse-bracket.svelte-1qi6rc1 {
  vertical-align: top;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}

.jse-index.svelte-1qi6rc1 {
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
}

.jse-bracket.svelte-1qi6rc1 {
  padding: 0 2px;
}
.jse-bracket.jse-expanded.svelte-1qi6rc1 {
  padding-right: var(--jse-padding, 10px);
}

.jse-identifier.svelte-1qi6rc1 {
  vertical-align: top;
  position: relative;
}

.jse-json-node.svelte-1qi6rc1 {
  position: relative;
  color: var(--jse-text-color, #4d4d4d);
}
.jse-json-node.jse-root.svelte-1qi6rc1 {
  min-height: 100%;
  padding-bottom: 2px;
  box-sizing: border-box;
}
.jse-json-node.jse-root.svelte-1qi6rc1 > .jse-contents-outer:where(.svelte-1qi6rc1) > .jse-contents:where(.svelte-1qi6rc1) {
  padding-left: 0;
}
.jse-json-node.svelte-1qi6rc1 .jse-props:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-items:where(.svelte-1qi6rc1) {
  position: relative;
}
.jse-json-node.svelte-1qi6rc1 .jse-header-outer:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-footer-outer:where(.svelte-1qi6rc1) {
  display: flex;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
}
.jse-json-node.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1) {
  position: relative;
}
.jse-json-node.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1) .jse-meta:where(.svelte-1qi6rc1) > .jse-meta-inner:where(.svelte-1qi6rc1) {
  display: flex;
  justify-content: center;
}
.jse-json-node.svelte-1qi6rc1 .jse-contents-outer:where(.svelte-1qi6rc1) {
  display: flex;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
}
.jse-json-node.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1) {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.jse-json-node.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1) {
  padding-left: var(--jse-indent-size, calc(1em + 4px));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1) .jse-value-outer:where(.svelte-1qi6rc1) {
  display: inline-flex;
}
.jse-json-node.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1) {
  display: inline-flex;
  padding-left: calc(var(--jse-indent-size, calc(1em + 4px)) + 5px);
}
.jse-json-node.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1) {
  background: var(--jse-contents-background-color, transparent);
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-selection-area:where(.svelte-1qi6rc1) {
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
  flex: 1;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-selection-area.jse-inside:where(.svelte-1qi6rc1) {
  display: inline-flex;
  align-items: center;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-selection-area.jse-after:where(.svelte-1qi6rc1) {
  display: flex;
  align-items: flex-end;
}
.jse-json-node.svelte-1qi6rc1 .jse-context-menu-pointer-anchor:where(.svelte-1qi6rc1) {
  position: relative;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-area:where(.svelte-1qi6rc1) {
  display: flex;
  position: relative;
  z-index: 1;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
  max-width: 250px;
  min-width: 100px;
  height: 0;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
  outline: 1px solid;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-area.jse-hovered:where(.svelte-1qi6rc1) {
  outline-color: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
}
.jse-json-node.svelte-1qi6rc1 .jse-key-outer:where(.svelte-1qi6rc1) {
  position: relative;
}
.jse-json-node.svelte-1qi6rc1 .jse-key-outer:where(.svelte-1qi6rc1):hover,
.jse-json-node.svelte-1qi6rc1 .jse-value-outer:where(.svelte-1qi6rc1):hover,
.jse-json-node.svelte-1qi6rc1 .jse-meta:where(.svelte-1qi6rc1):hover,
.jse-json-node.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1):hover {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-footer {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-value-outer .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-value-outer .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-meta .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-meta .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-footer .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-footer .jse-meta {
  background: none;
}
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1),
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1),
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1) {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-key-outer:where(.svelte-1qi6rc1):hover,
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-value-outer:where(.svelte-1qi6rc1):hover,
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-meta:where(.svelte-1qi6rc1):hover,
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1):hover {
  background: inherit;
  cursor: inherit;
}
.jse-json-node.svelte-1qi6rc1 .jse-key-outer.jse-selected-key:where(.svelte-1qi6rc1) {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-value-outer,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-meta,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-items .jse-header,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-items .jse-contents,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-props .jse-header,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-props .jse-contents,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-footer {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-value-outer .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-meta .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-items .jse-header .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-items .jse-contents .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-props .jse-header .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-props .jse-contents .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-footer .jse-key-outer:hover {
  background: inherit;
  cursor: inherit;
}
.jse-json-node.jse-readonly.svelte-1qi6rc1 {
  --jse-contents-selected-cursor: pointer;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-area.jse-selected:where(.svelte-1qi6rc1) {
  outline-color: var(--jse-context-menu-pointer-background, var(--jse-context-menu-background, #656565));
}`);var i0=i5(()=>aj),tj=a2('<div class="jse-separator svelte-1qi6rc1">:</div>'),rj=a2('<div class="jse-bracket svelte-1qi6rc1">[</div> <!> &nbsp;',1),cj=a2('<div class="jse-bracket svelte-1qi6rc1">[</div> <!> <div class="jse-bracket svelte-1qi6rc1">]</div>',1),lj=a2('<div class="jse-context-menu-pointer-anchor svelte-1qi6rc1"><!></div>'),oj=a2('<div role="none" class="jse-insert-selection-area jse-inside svelte-1qi6rc1" data-type="insert-selection-area-inside"></div>'),sj=a2('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),ij=a2('<div data-type="insert-selection-area-inside"><!></div>'),fj=a2('<div slot="identifier" class="jse-identifier svelte-1qi6rc1"><div class="jse-index svelte-1qi6rc1"> </div></div>'),uj=a2("<!> <!>",1),dj=a2('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),pj=a2('<div class="jse-items svelte-1qi6rc1"><!> <!></div> <div class="jse-footer-outer svelte-1qi6rc1"><div data-type="selectable-value" class="jse-footer svelte-1qi6rc1"><span class="jse-bracket svelte-1qi6rc1">]</span></div> <!></div>',1),vj=a2('<div class="jse-header-outer svelte-1qi6rc1"><div class="jse-header svelte-1qi6rc1"><button type="button" class="jse-expand svelte-1qi6rc1" title="Expand or collapse this array (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-1qi6rc1"><div class="jse-meta-inner svelte-1qi6rc1" data-type="selectable-value"><!></div></div> <!></div> <!> <!></div> <!>',1),mj=a2('<div class="jse-separator svelte-1qi6rc1">:</div>'),hj=a2('<div class="jse-bracket jse-expanded svelte-1qi6rc1">&lbrace;</div>'),gj=a2('<div class="jse-bracket svelte-1qi6rc1">&lbrace;</div> <!> <div class="jse-bracket svelte-1qi6rc1">&rbrace;</div>',1),zj=a2('<div class="jse-context-menu-pointer-anchor svelte-1qi6rc1"><!></div>'),bj=a2('<div role="none" class="jse-insert-selection-area jse-inside svelte-1qi6rc1" data-type="insert-selection-area-inside"></div>'),yj=a2('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),Mj=a2('<div data-type="insert-selection-area-inside"><!></div>'),xj=a2('<div slot="identifier"><!></div>'),Lj=a2('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),wj=a2('<div class="jse-props svelte-1qi6rc1"><!> <!></div> <div class="jse-footer-outer svelte-1qi6rc1"><div data-type="selectable-value" class="jse-footer svelte-1qi6rc1"><div class="jse-bracket svelte-1qi6rc1">&rbrace;</div></div> <!></div>',1),Cj=a2('<div class="jse-header-outer svelte-1qi6rc1"><div class="jse-header svelte-1qi6rc1"><button type="button" class="jse-expand svelte-1qi6rc1" title="Expand or collapse this object (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-1qi6rc1" data-type="selectable-value"><div class="jse-meta-inner svelte-1qi6rc1"><!></div></div> <!></div> <!> <!></div> <!>',1),jj=a2('<div class="jse-separator svelte-1qi6rc1">:</div>'),Sj=a2('<div class="jse-context-menu-pointer-anchor svelte-1qi6rc1"><!></div>'),kj=a2('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),Nj=a2('<div class="jse-contents-outer svelte-1qi6rc1"><div class="jse-contents svelte-1qi6rc1"><!> <!> <div class="jse-value-outer svelte-1qi6rc1"><!></div> <!></div> <!> <!></div>'),Aj=a2('<div data-type="insert-selection-area-after"><!></div>'),_j=a2('<div role="treeitem" tabindex="-1"><!> <!></div>');function Yo(e,a){f1(a,!1);var n=R(void 0,!0),t=R(void 0,!0),c=b(a,"pointer",9),l=b(a,"value",9),o=b(a,"state",9),s=b(a,"validationErrors",9),i=b(a,"searchResults",9),f=b(a,"selection",9),u=b(a,"context",9),d=b(a,"onDragSelectionStart",9),h=t3("jsoneditor:JSONNode"),m=R(void 0,!0),v=void 0,p=R(void 0,!0),g=R(void 0,!0),y=R(void 0,!0),L=R(void 0,!0),S=R(void 0,!0),j=R(void 0,!0),x=R(void 0,!0);function E(m2){m2.stopPropagation();var G=bs(m2);u().onExpand(r(g),!r(y),G)}function P(){u().onExpand(r(g),!0)}function I(m2,G){var b2=rr(r(g),Object.keys(l()),m2,G);return u().onPatch(b2),U1(w3(b2[0].path))}function k(m2){u().onDrag(m2)}function $(m2){i0().selecting&&(i0(i0().selecting=!1),m2.stopPropagation()),u().onDragEnd(),document.removeEventListener("mousemove",k,!0),document.removeEventListener("mouseup",$)}function U(){var m2;return((m2=u().findElement([]))===null||m2===void 0||(m2=m2.getBoundingClientRect())===null||m2===void 0?void 0:m2.top)||0}function O(m2,G){var b2=U()-m2.initialContentTop;return G.clientY-m2.initialClientY-b2}function c2(m2){if(!u().readOnly&&f()){var G=Y1(r1(f()));if(H1(r(g),G)){var b2=(function(t2,W){var b1=[];function i1(C){var _=r(g).concat(C),D=u().findElement(_);D!==void 0&&b1.push({path:_,height:D.clientHeight})}if(Array.isArray(l())){var j2=u().getJson();if(j2===void 0)return;var x1=w6(j2,t2),I2=pa(j2,t2),V2=parseInt(U1(x1),10),m1=parseInt(U1(I2),10),F2=W.find(C=>V2>=C.start&&m1<=C.end);if(!F2)return;var{start:O1,end:w}=F2;$v(O1,Math.min(l().length,w),C=>i1(String(C)))}else Object.keys(l()).forEach(i1);return b1})(f(),r(S)||an);if(h("dragSelectionStart",{selection:f(),items:b2}),b2){var H=u().getJson();if(H!==void 0){var v2=w6(H,f()),Q=b2.findIndex(t2=>H1(t2.path,v2)),{offset:O2}=wo({json:H,selection:u().getSelection(),deltaY:0,items:b2});z(p,{initialTarget:m2.target,initialClientY:m2.clientY,initialContentTop:U(),selectionStartIndex:Q,selectionItemsCount:ma(H,f()).length,items:b2,offset:O2,didMoveItems:!1}),i0(i0().dragging=!0),document.addEventListener("mousemove",u2,!0),document.addEventListener("mouseup",l2)}}else h("Cannot drag the current selection (probably spread over multiple sections)")}else d()(m2)}}function u2(m2){if(r(p)){var G=u().getJson();if(G===void 0)return;var b2=O(r(p),m2),{offset:H}=wo({json:G,selection:u().getSelection(),deltaY:b2,items:r(p).items});H!==r(p).offset&&(h("drag selection",H,b2),z(p,N2(N2({},r(p)),{},{offset:H,didMoveItems:!0})))}}function l2(m2){if(r(p)){var G=u().getJson();if(G===void 0)return;var b2=O(r(p),m2),{operations:H,updatedSelection:v2}=wo({json:G,selection:u().getSelection(),deltaY:b2,items:r(p).items});if(H)u().onPatch(H,(t2,W)=>({state:W,selection:v2??f()}));else if(m2.target===r(p).initialTarget&&!r(p).didMoveItems){var Q=fo(m2.target),O2=Kv(m2.target);O2&&u().onSelect(np(Q,O2))}z(p,void 0),i0(i0().dragging=!1),document.removeEventListener("mousemove",u2,!0),document.removeEventListener("mouseup",l2)}}function S2(m2){m2.shiftKey||(m2.stopPropagation(),m2.preventDefault(),u().onSelect(T6(r(g))))}function q2(m2){m2.shiftKey||(m2.stopPropagation(),m2.preventDefault(),u().onSelect(k6(r(g))))}function f2(m2){u().onSelect(T6(r(g))),t0(),u().onContextMenu(m2)}function o2(m2){u().onSelect(k6(r(g))),t0(),u().onContextMenu(m2)}Y(()=>M(c()),()=>{z(g,w3(c()))}),Y(()=>M(c()),()=>{z(n,encodeURIComponent(c()))}),Y(()=>M(o()),()=>{z(y,!!c8(o())&&o().expanded)}),Y(()=>(M(l()),M(o())),()=>{z(L,Je(l(),o(),[]))}),Y(()=>M(o()),()=>{z(S,a3(o())?o().visibleSections:void 0)}),Y(()=>M(s()),()=>{var m2;z(j,(m2=s())===null||m2===void 0?void 0:m2.validationError)}),Y(()=>(M(u()),M(f()),r(g)),()=>{z(x,Bt(u().getJson(),f(),r(g)))}),Y(()=>r(g),()=>{z(t,r(g).length===0)}),L4(),_1(!0);var d2,P2,Q2=_j(),y2=q(Q2),s2=m2=>{var G=vj(),b2=Y2(G),H=q(b2),v2=q(H),Q=q(v2),O2=e2=>{c4(e2,{get data(){return qe}})},t2=e2=>{c4(e2,{get data(){return g8}})};i2(Q,e2=>{r(y)?e2(O2):e2(t2,!1)});var W=J(v2,2);k0(W,a,"identifier",{},null);var b1=J(W,2),i1=e2=>{T(e2,tj())};i2(b1,e2=>{r(t)||e2(i1)});var j2=J(b1,2),x1=q(j2),I2=q(x1),V2=e2=>{var r2=rj();Oc(J(Y2(r2),2),{children:(s1,e1)=>{var U2=s3();E2(()=>{var J2,q1;return d1(U2,"".concat((M(l()),(J2=F(()=>l().length))!==null&&J2!==void 0?J2:""),`
                `).concat((M(l()),(q1=F(()=>l().length===1?"item":"items"))!==null&&q1!==void 0?q1:"")))}),T(s1,U2)},$$slots:{default:!0}}),T(e2,r2)},m1=e2=>{var r2=cj();Oc(J(Y2(r2),2),{onclick:P,children:(s1,e1)=>{var U2=s3();E2(()=>{var J2,q1;return d1(U2,"".concat((M(l()),(J2=F(()=>l().length))!==null&&J2!==void 0?J2:""),`
                `).concat((M(l()),(q1=F(()=>l().length===1?"item":"items"))!==null&&q1!==void 0?q1:"")))}),T(s1,U2)},$$slots:{default:!0}}),T(e2,r2)};i2(I2,e2=>{r(y)?e2(V2):e2(m1,!1)});var F2=J(j2,2),O1=e2=>{var r2=lj();Y6(q(r2),{get root(){return r(t)},selected:!0,get onContextMenu(){return M(u()),F(()=>u().onContextMenu)}}),T(e2,r2)};i2(F2,e2=>{M(u()),r(x),M(f()),M(h4),M(Q4),M(e3),M(H1),M(r1),r(g),F(()=>!u().readOnly&&r(x)&&f()&&(h4(f())||Q4(f()))&&!e3(f())&&H1(r1(f()),r(g)))&&e2(O1)});var w=J(H,2),C=e2=>{rn(e2,{get validationError(){return r(j)},onExpand:P})};i2(w,e2=>{r(j),r(y),F(()=>r(j)&&(!r(y)||!r(j).isChildError))&&e2(C)});var _=J(w,2),D=e2=>{var r2=oj();w2("click",r2,S2),T(e2,r2)},n2=e2=>{var r2=sj();w2("click",r2,q2),T(e2,r2)};i2(_,e2=>{r(y)?e2(D):e2(n2,!1)});var C2=J(b2,2),A2=e2=>{var r2=pj(),s1=Y2(r2),e1=q(s1),U2=E4=>{var $1,g4,V1=ij(),Q1=q(V1),p4=Z2(()=>(r(x),M(Y0),M(f()),F(()=>r(x)&&Y0(f()))));Y6(Q1,{insert:!0,get selected(){return r(p4)},onContextMenu:f2}),E2(p1=>{$1=A1(V1,1,"jse-insert-area jse-inside svelte-1qi6rc1",null,$1,p1),j4(V1,"title",vo),g4=me(V1,"",g4,{"--level":(r(g),F(()=>r(g).length+1))})},[()=>({"jse-hovered":r(m)===Da,"jse-selected":r(x)&&Y0(f())})]),T(E4,V1)};i2(e1,E4=>{M(u()),r(m),M(Da),r(x),M(Y0),M(f()),F(()=>!u().readOnly&&(r(m)===Da||r(x)&&Y0(f())))&&E4(U2)}),x0(J(e1,2),1,()=>r(S)||an,T0,(E4,$1,g4)=>{var V1=uj(),Q1=Y2(V1);x0(Q1,1,()=>(M(l()),r($1),r(p),F(()=>(function(z4,S1,X2){var X1=S1.start,D1=Math.min(S1.end,z4.length),W4=j5(X1,D1);return X2&&X2.offset!==0?Rd(W4,X2.selectionStartIndex,X2.selectionItemsCount,X2.offset).map((a0,Y4)=>({index:a0,gutterIndex:Y4})):W4.map(a0=>({index:a0,gutterIndex:a0}))})(l(),r($1),r(p)))),z4=>z4.index,(z4,S1)=>{var X2=Z2(()=>(M(a3),M(s()),r(S1),F(()=>a3(s())?s().items[r(S1).index]:void 0))),X1=Z2(()=>(M(bc),M(u()),M(f()),r(g),r(S1),F(()=>bc(u().getJson(),f(),r(g).concat(String(r(S1).index)))))),D1=W1(),W4=Y2(D1),a0=Z2(()=>(M(Rn),M(c()),r(S1),F(()=>Rn(c(),r(S1).index)))),Y4=Z2(()=>(M(a3),M(o()),r(S1),F(()=>a3(o())?o().items[r(S1).index]:void 0))),L0=Z2(()=>(M(a3),M(i()),r(S1),F(()=>a3(i())?i().items[r(S1).index]:void 0)));Yo(W4,{get value(){return M(l()),r(S1),F(()=>l()[r(S1).index])},get pointer(){return r(a0)},get state(){return r(Y4)},get validationErrors(){return r(X2)},get searchResults(){return r(L0)},get selection(){return r(X1)},get context(){return u()},onDragSelectionStart:c2,$$slots:{identifier:(c0,m0)=>{var N0=fj(),f0=q(N0),D0=q(f0);E2(()=>d1(D0,(r(S1),F(()=>r(S1).gutterIndex)))),T(c0,N0)}}}),T(z4,D1)});var p4=J(Q1,2),p1=z4=>{var S1=Z2(()=>r(S)||an);QC(z4,{get visibleSections(){return r(S1)},sectionIndex:g4,get total(){return M(l()),F(()=>l().length)},get path(){return r(g)},get onExpandSection(){return M(u()),F(()=>u().onExpandSection)},get selection(){return f()},get context(){return u()}})};i2(p4,z4=>{r($1),M(l()),F(()=>r($1).end<l().length)&&z4(p1)}),T(E4,V1)});var J2=J(s1,2),q1=J(q(J2),2),S4=E4=>{var $1=dj();w2("click",$1,q2),T(E4,$1)};i2(q1,E4=>{r(t)||E4(S4)}),T(e2,r2)};i2(C2,e2=>{r(y)&&e2(A2)}),w2("click",v2,E),T(m2,G)},z2=m2=>{var G=W1(),b2=Y2(G),H=Q=>{var O2=Cj(),t2=Y2(O2),W=q(t2),b1=q(W),i1=q(b1),j2=J2=>{c4(J2,{get data(){return qe}})},x1=J2=>{c4(J2,{get data(){return g8}})};i2(i1,J2=>{r(y)?J2(j2):J2(x1,!1)});var I2=J(b1,2);k0(I2,a,"identifier",{},null);var V2=J(I2,2),m1=J2=>{T(J2,mj())};i2(V2,J2=>{r(t)||J2(m1)});var F2=J(V2,2),O1=q(F2),w=q(O1),C=J2=>{T(J2,hj())},_=J2=>{var q1=gj();Oc(J(Y2(q1),2),{onclick:P,children:(S4,E4)=>{var $1=s3();E2((g4,V1)=>d1($1,"".concat(g4??"",`
                `).concat(V1??"")),[()=>(M(l()),F(()=>Object.keys(l()).length)),()=>(M(l()),F(()=>Object.keys(l()).length===1?"prop":"props"))]),T(S4,$1)},$$slots:{default:!0}}),T(J2,q1)};i2(w,J2=>{r(y)?J2(C):J2(_,!1)});var D=J(F2,2),n2=J2=>{var q1=zj();Y6(q(q1),{get root(){return r(t)},selected:!0,get onContextMenu(){return M(u()),F(()=>u().onContextMenu)}}),T(J2,q1)};i2(D,J2=>{M(u()),r(x),M(f()),M(h4),M(Q4),M(e3),M(H1),M(r1),r(g),F(()=>!u().readOnly&&r(x)&&f()&&(h4(f())||Q4(f()))&&!e3(f())&&H1(r1(f()),r(g)))&&J2(n2)});var C2=J(W,2),A2=J2=>{rn(J2,{get validationError(){return r(j)},onExpand:P})};i2(C2,J2=>{r(j),r(y),F(()=>r(j)&&(!r(y)||!r(j).isChildError))&&J2(A2)});var e2=J(C2,2),r2=J2=>{var q1=bj();w2("click",q1,S2),T(J2,q1)},s1=J2=>{var q1=W1(),S4=Y2(q1),E4=$1=>{var g4=yj();w2("click",g4,q2),T($1,g4)};i2(S4,$1=>{r(t)||$1(E4)},!0),T(J2,q1)};i2(e2,J2=>{r(y)?J2(r2):J2(s1,!1)});var e1=J(t2,2),U2=J2=>{var q1=wj(),S4=Y2(q1),E4=q(S4),$1=p4=>{var p1,z4,S1=Mj(),X2=q(S1),X1=Z2(()=>(r(x),M(Y0),M(f()),F(()=>r(x)&&Y0(f()))));Y6(X2,{insert:!0,get selected(){return r(X1)},onContextMenu:f2}),E2(D1=>{p1=A1(S1,1,"jse-insert-area jse-inside svelte-1qi6rc1",null,p1,D1),j4(S1,"title",vo),z4=me(S1,"",z4,{"--level":(r(g),F(()=>r(g).length+1))})},[()=>({"jse-hovered":r(m)===Da,"jse-selected":r(x)&&Y0(f())})]),T(p4,S1)};i2(E4,p4=>{M(u()),r(m),M(Da),r(x),M(Y0),M(f()),F(()=>!u().readOnly&&(r(m)===Da||r(x)&&Y0(f())))&&p4($1)}),x0(J(E4,2),1,()=>(M(l()),r(p),F(()=>(function(p4,p1){var z4=Object.keys(p4);return p1&&p1.offset!==0?Rd(z4,p1.selectionStartIndex,p1.selectionItemsCount,p1.offset):z4})(l(),r(p)))),T0,(p4,p1)=>{var z4=Z2(()=>(M(Rn),M(c()),r(p1),F(()=>Rn(c(),r(p1))))),S1=Z2(()=>(M(B3),M(i()),r(p1),F(()=>B3(i())?i().properties[r(p1)]:void 0))),X2=Z2(()=>(M(B3),M(s()),r(p1),F(()=>B3(s())?s().properties[r(p1)]:void 0))),X1=Z2(()=>(r(g),r(p1),F(()=>r(g).concat(r(p1))))),D1=Z2(()=>(M(bc),M(u()),M(f()),M(r(X1)),F(()=>bc(u().getJson(),f(),r(X1))))),W4=W1(),a0=Y2(W4),Y4=Z2(()=>(M(B3),M(o()),r(p1),F(()=>B3(o())?o().properties[r(p1)]:void 0)));Yo(a0,{get value(){return M(l()),r(p1),F(()=>l()[r(p1)])},get pointer(){return r(z4)},get state(){return r(Y4)},get validationErrors(){return r(X2)},get searchResults(){return r(S1)},get selection(){return r(D1)},get context(){return u()},onDragSelectionStart:c2,$$slots:{identifier:(L0,c0)=>{var m0,N0=xj(),f0=q(N0),D0=Z2(()=>(M(ip),M(r(S1)),F(()=>ip(r(S1)))));(function(A0,O0){f1(O0,!1);var u0=R(void 0,!0),x2=R(void 0,!0),B1=b(O0,"pointer",9),w4=b(O0,"key",9),V4=b(O0,"selection",9),w0=b(O0,"searchResultItems",9),W0=b(O0,"onUpdateKey",9),G1=b(O0,"context",9),R0=R(void 0,!0);function i3(K){r(x2)||G1().readOnly||(K.preventDefault(),G1().onSelect(Ns(r(R0))))}function d0(K,p2){var _2=W0()(w4(),G1().normalization.unescapeValue(K)),B=Y1(r(R0)).concat(_2);G1().onSelect(p2===da.nextInside?K1(B):P6(B)),p2!==da.self&&G1().focus()}function r3(){G1().onSelect(P6(r(R0))),G1().focus()}Y(()=>M(B1()),()=>{z(R0,w3(B1()))}),Y(()=>(M(V4()),r(R0)),()=>{z(u0,n3(V4())&&H1(V4().path,r(R0)))}),Y(()=>(r(u0),M(V4())),()=>{z(x2,r(u0)&&e3(V4()))}),L4(),_1(!0);var J4=ZC(),e4=Y2(J4),P1=K=>{var p2=Z2(()=>(M(G1()),M(w4()),F(()=>G1().normalization.escapeValue(w4())))),_2=Z2(()=>(M(e3),M(V4()),F(()=>e3(V4())?V4().initialValue:void 0)));cm(K,{get value(){return r(p2)},get initialValue(){return r(_2)},label:"Edit key",shortText:!0,onChange:d0,onCancel:r3,get onFind(){return M(G1()),F(()=>G1().onFind)}})},B4=K=>{var p2,_2=YC(),B=q(_2),Z=D2=>{var a1=Z2(()=>(M(G1()),M(w4()),F(()=>G1().normalization.escapeValue(w4()))));dm(D2,{get text(){return r(a1)},get searchResultItems(){return w0()}})},M2=D2=>{var a1=s3();E2(t1=>d1(a1,t1),[()=>(M(dn),M(G1()),M(w4()),F(()=>dn(G1().normalization.escapeValue(w4()))))]),T(D2,a1)};i2(B,D2=>{w0()?D2(Z):D2(M2,!1)}),E2(()=>p2=A1(_2,1,"jse-key svelte-1n4cez4",null,p2,{"jse-empty":w4()===""})),w2("dblclick",_2,i3),T(K,_2)};i2(e4,K=>{M(G1()),r(x2),F(()=>!G1().readOnly&&r(x2))?K(P1):K(B4,!1)});var _0=J(e4,2),h0=K=>{Y6(K,{selected:!0,get onContextMenu(){return M(G1()),F(()=>G1().onContextMenu)}})};i2(_0,K=>{M(G1()),r(u0),r(x2),F(()=>!G1().readOnly&&r(u0)&&!r(x2))&&K(h0)}),T(A0,J4),u1()})(f0,{get pointer(){return r(z4)},get key(){return r(p1)},get selection(){return r(D1)},get searchResultItems(){return r(D0)},get context(){return u()},onUpdateKey:I}),E2(A0=>m0=A1(N0,1,"jse-key-outer svelte-1qi6rc1",null,m0,A0),[()=>({"jse-selected-key":n3(r(D1))&&H1(r(D1).path,r(X1))})]),T(L0,N0)}}}),T(p4,W4)});var g4=J(S4,2),V1=J(q(g4),2),Q1=p4=>{var p1=Lj();w2("click",p1,q2),T(p4,p1)};i2(V1,p4=>{r(t)||p4(Q1)}),T(J2,q1)};i2(e1,J2=>{r(y)&&J2(U2)}),w2("click",b1,E),T(Q,O2)},v2=Q=>{var O2=Nj(),t2=q(O2),W=q(t2);k0(W,a,"identifier",{},null);var b1=J(W,2),i1=D=>{T(D,jj())};i2(b1,D=>{r(t)||D(i1)});var j2=J(b1,2),x1=q(j2),I2=Z2(()=>r(x)?f():void 0),V2=Z2(()=>(M(fp),M(i()),F(()=>fp(i()))));km(x1,{get path(){return r(g)},get value(){return l()},get enforceString(){return r(L)},get selection(){return r(I2)},get searchResultItems(){return r(V2)},get context(){return u()}});var m1=J(j2,2),F2=D=>{var n2=Sj();Y6(q(n2),{get root(){return r(t)},selected:!0,get onContextMenu(){return M(u()),F(()=>u().onContextMenu)}}),T(D,n2)};i2(m1,D=>{M(u()),r(x),M(f()),M(h4),M(Q4),M(e3),M(H1),M(r1),r(g),F(()=>!u().readOnly&&r(x)&&f()&&(h4(f())||Q4(f()))&&!e3(f())&&H1(r1(f()),r(g)))&&D(F2)});var O1=J(t2,2),w=D=>{rn(D,{get validationError(){return r(j)},onExpand:P})};i2(O1,D=>{r(j)&&D(w)});var C=J(O1,2),_=D=>{var n2=kj();w2("click",n2,q2),T(D,n2)};i2(C,D=>{r(t)||D(_)}),T(Q,O2)};i2(b2,Q=>{M(d4),M(l()),F(()=>d4(l()))?Q(H):Q(v2,!1)},!0),T(m2,G)};i2(y2,m2=>{M(l()),F(()=>Array.isArray(l()))?m2(s2):m2(z2,!1)});var o1=J(y2,2),E1=m2=>{var G,b2=Aj(),H=q(b2),v2=Z2(()=>(r(x),M(U3),M(f()),F(()=>r(x)&&U3(f()))));Y6(H,{insert:!0,get selected(){return r(v2)},onContextMenu:o2}),E2(Q=>{G=A1(b2,1,"jse-insert-area jse-after svelte-1qi6rc1",null,G,Q),j4(b2,"title",vo)},[()=>({"jse-hovered":r(m)===gc,"jse-selected":r(x)&&U3(f())})]),T(m2,b2)};i2(o1,m2=>{M(u()),r(m),M(gc),r(x),M(U3),M(f()),F(()=>!u().readOnly&&(r(m)===gc||r(x)&&U3(f())))&&m2(E1)}),E2((m2,G)=>{d2=A1(Q2,1,m2,"svelte-1qi6rc1",d2,G),j4(Q2,"data-path",r(n)),j4(Q2,"aria-selected",r(x)),P2=me(Q2,"",P2,{"--level":(r(g),F(()=>r(g).length))})},[()=>va((M(Ee),r(y),M(u()),r(g),M(l()),F(()=>Ee("jse-json-node",{"jse-expanded":r(y)},u().onClassName(r(g),l()))))),()=>({"jse-root":r(t),"jse-selected":r(x)&&Q4(f()),"jse-selected-value":r(x)&&h4(f()),"jse-readonly":u().readOnly,"jse-hovered":r(m)===Fd})]),w2("mousedown",Q2,function(m2){if((m2.buttons===1||m2.buttons===2)&&!((G=m2.target).nodeName==="DIV"&&G.contentEditable==="true"||m2.buttons===1&&Jv(m2.target,"BUTTON"))){var G;m2.stopPropagation(),m2.preventDefault(),u().focus(),document.addEventListener("mousemove",k,!0),document.addEventListener("mouseup",$);var b2=fo(m2.target),H=u().getJson(),v2=u().getDocumentState();if(!f()||b2===H4.after||b2===H4.inside||f().type!==b2&&f().type!==H4.multi||!Bt(H,f(),r(g)))if(i0(i0().selecting=!0),i0(i0().selectionAnchor=r(g)),i0(i0().selectionAnchorType=b2),i0(i0().selectionFocus=r(g)),m2.shiftKey){var Q=u().getSelection();Q&&u().onSelect(k3(Qa(Q),r(g)))}else if(b2===H4.multi)if(r(t)&&m2.target.hasAttribute("data-path")){var O2=U1(am(l(),v2));u().onSelect(Ho(O2))}else u().onSelect(k3(r(g),r(g)));else H!==void 0&&u().onSelect(np(b2,r(g)));else m2.button===0&&d()(m2)}}),w2("mousemove",Q2,function(m2){if(i0().selecting){m2.preventDefault(),m2.stopPropagation(),i0().selectionFocus===void 0&&window.getSelection&&window.getSelection().empty();var G=fo(m2.target);H1(r(g),i0().selectionFocus)&&G===i0().selectionAnchorType||(i0(i0().selectionFocus=r(g)),i0(i0().selectionAnchorType=G),u().onSelect(k3(i0().selectionAnchor||i0().selectionFocus,i0().selectionFocus)))}}),w2("mouseover",Q2,function(m2){i0().selecting||i0().dragging||(m2.stopPropagation(),ca(m2.target,"data-type","selectable-value")?z(m,Fd):ca(m2.target,"data-type","selectable-key")?z(m,void 0):ca(m2.target,"data-type","insert-selection-area-inside")?z(m,Da):ca(m2.target,"data-type","insert-selection-area-after")&&z(m,gc),clearTimeout(v))}),w2("mouseout",Q2,function(m2){m2.stopPropagation(),v=window.setTimeout(()=>z(m,void 0))}),T(e,Q2),u1()}var Nm={prefix:"fas",iconName:"jsoneditor-expand",icon:[512,512,[],"","M 0,448 V 512 h 512 v -64 z M 0,0 V 64 H 512 V 0 Z M 256,96 128,224 h 256 z M 256,416 384,288 H 128 Z"]},Am={prefix:"fas",iconName:"jsoneditor-collapse",icon:[512,512,[],"","m 0,224 v 64 h 512 v -64 z M 256,192 384,64 H 128 Z M 256,320 128,448 h 256 z"]},xp={prefix:"fas",iconName:"jsoneditor-format",icon:[512,512,[],"","M 0,32 v 64 h 416 v -64 z M 160,160 v 64 h 352 v -64 z M 160,288 v 64 h 288 v -64 z M 0,416 v 64 h 320 v -64 z"]},Ej={prefix:"fas",iconName:"jsoneditor-compact",icon:[512,512,[],"","M 0,32 v 64 h 512 v -64 z M 0,160 v 64 h 512 v -64 z M 0,288 v 64 h 352 v -64 z"]};j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-welcome.svelte-1lhnan {
  flex: 1;
  overflow: auto;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-welcome.svelte-1lhnan:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-welcome.svelte-1lhnan .jse-space.jse-before:where(.svelte-1lhnan) {
  flex: 1;
}
.jse-welcome.svelte-1lhnan .jse-space.jse-after:where(.svelte-1lhnan) {
  flex: 2;
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 2em var(--jse-padding, 10px);
  gap: var(--jse-padding, 10px);
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) .jse-welcome-info:where(.svelte-1lhnan) {
  color: var(--jse-panel-color-readonly, #b2b2b2);
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) button:where(.svelte-1lhnan) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) button:where(.svelte-1lhnan):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) button:where(.svelte-1lhnan):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}`);var Pj=a2('<div class="jse-welcome-info svelte-1lhnan">You can paste clipboard data using <b>Ctrl+V</b>, or use the following options:</div> <button class="svelte-1lhnan">Create object</button> <button class="svelte-1lhnan">Create array</button>',1),Tj=a2('<div class="jse-welcome svelte-1lhnan" role="none"><div class="jse-space jse-before svelte-1lhnan"></div> <div class="jse-contents svelte-1lhnan"><div class="jse-welcome-title">Empty document</div> <!></div> <div class="jse-space jse-after svelte-1lhnan"></div></div>');function Zo(e,a){var n=typeof e=="string"?e.toLowerCase():e,t=typeof a=="string"?a.toLowerCase():a;return(0,_p.default)(n,t)}function _m(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,c=W2(e,a);if(p0(c)){if(n===void 0)throw new Error("Cannot sort: no property selected by which to sort the array");return(function(l){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,f=(function(d,h){var m={boolean:0,number:1,string:2,undefined:4},v=3;return function(p,g){var y=W2(p,d),L=W2(g,d);if(typeof y!=typeof L){var S,j,x=(S=m[typeof y])!==null&&S!==void 0?S:v,E=(j=m[typeof L])!==null&&j!==void 0?j:v;return x>E?h:x<E?-h:0}return typeof y=="number"||typeof y=="boolean"?y>L?h:y<L?-h:0:M0(y)?0:h*Zo(y,L)}})(s,i),u=W2(l,o);return[{op:"replace",path:c1(o),value:u.slice(0).sort(f)}]})(e,a,n,t)}if(d4(c))return(function(l){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,i=W2(l,o),f=Object.keys(i).slice();f.sort((d,h)=>s*Zo(d,h));var u={};return f.forEach(d=>u[d]=i[d]),[{op:"replace",path:c1(o),value:u}]})(e,a,t);throw new Error("Cannot sort: no array or object")}Xt(["click"]);j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-dropdown.svelte-1k47orx {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 3;
  background: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
  color: var(--jse-navigation-bar-dropdown-color, #656565);
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  display: flex;
  flex-direction: column;
  max-height: 300px;
  overflow: auto;
  min-width: 80px;
}
.jse-navigation-bar-dropdown.svelte-1k47orx button.jse-navigation-bar-dropdown-item:where(.svelte-1k47orx) {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  outline: none;
  text-align: left;
  white-space: nowrap;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px)) 36px;
}
.jse-navigation-bar-dropdown.svelte-1k47orx button.jse-navigation-bar-dropdown-item:where(.svelte-1k47orx):focus, .jse-navigation-bar-dropdown.svelte-1k47orx button.jse-navigation-bar-dropdown-item:where(.svelte-1k47orx):hover {
  background: var(--jse-navigation-bar-background-highlight, #e5e5e5);
}
.jse-navigation-bar-dropdown.svelte-1k47orx button.jse-navigation-bar-dropdown-item.jse-selected:where(.svelte-1k47orx) {
  background: var(--jse-navigation-bar-dropdown-color, #656565);
  color: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
}`);var Oj=a2('<button type="button"> </button>'),Rj=a2('<button type="button" class="jse-navigation-bar-dropdown-item svelte-1k47orx">...</button>'),qj=a2('<div class="jse-navigation-bar-dropdown svelte-1k47orx"><!> <!></div>');function $j(e,a){f1(a,!1);var n=b(a,"items",9),t=b(a,"selectedItem",9),c=b(a,"onSelect",9);_1(!0);var l=qj(),o=q(l);x0(o,1,()=>(M(Ic),M(n()),F(()=>Ic(n(),100))),f=>f,(f,u)=>{var d,h=Oj(),m=q(h);E2((v,p)=>{d=A1(h,1,"jse-navigation-bar-dropdown-item svelte-1k47orx",null,d,{"jse-selected":r(u)===t()}),j4(h,"title",v),d1(m,p)},[()=>(r(u),F(()=>r(u).toString())),()=>(M(M6),r(u),F(()=>M6(r(u).toString(),30)))]),w2("click",h,z6(()=>c()(r(u)))),T(f,h)});var s=J(o,2),i=f=>{var u=Rj();j4(u,"title","Limited to 100 items"),T(f,u)};i2(s,f=>{M(n()),F(()=>n().length>100)&&f(i)}),T(e,l),u1()}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-item.svelte-13sijxb {
  position: relative;
  display: flex;
}
.jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button:where(.svelte-13sijxb) {
  font-family: inherit;
  font-size: inherit;
  padding: calc(0.5 * var(--jse-padding, 10px)) 2px;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  outline: none;
  min-width: 2em;
  white-space: nowrap;
}
.jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button:where(.svelte-13sijxb):focus, .jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button:where(.svelte-13sijxb):hover {
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
}
.jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button.jse-navigation-bar-arrow:where(.svelte-13sijxb) {
  padding: 2px var(--jse-padding, 10px) 0;
}
.jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button.jse-navigation-bar-arrow.jse-open:where(.svelte-13sijxb) {
  background: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
  color: var(--jse-navigation-bar-dropdown-color, #656565);
}
.jse-navigation-bar-item.svelte-13sijxb:last-child {
  padding-right: var(--jse-padding, 10px);
}`);var Dj=a2('<button type="button" class="jse-navigation-bar-button svelte-13sijxb"> </button>'),Fj=a2('<div class="jse-navigation-bar-item svelte-13sijxb"><button type="button"><!></button> <!></div>');function Lp(e,a){f1(a,!1);var n,t=R(void 0,!0),c=R(void 0,!0),{openAbsolutePopup:l,closeAbsolutePopup:o}=ga("absolute-popup"),s=b(a,"path",9),i=b(a,"index",9),f=b(a,"onSelect",9),u=b(a,"getItems",9),d=R(void 0,!0),h=R(!1,!0);function m(S){o(n),f()(r(t).concat(S))}Y(()=>(M(s()),M(i())),()=>{z(t,s().slice(0,i()))}),Y(()=>(M(s()),M(i())),()=>{z(c,s()[i()])}),L4(),_1(!0);var v,p=Fj(),g=q(p);c4(q(g),{get data(){return Z5}});var y=J(g,2),L=S=>{var j=Dj(),x=q(j);E2(()=>d1(x,r(c))),w2("click",j,()=>m(r(c))),T(S,j)};i2(y,S=>{r(c)!==void 0&&S(L)}),r0(p,S=>z(d,S),()=>r(d)),E2(()=>v=A1(g,1,"jse-navigation-bar-button jse-navigation-bar-arrow svelte-13sijxb",null,v,{"jse-open":r(h)})),w2("click",g,function(){if(r(d)){z(h,!0);var S={items:u()(r(t)),selectedItem:r(c),onSelect:m};n=l($j,S,{anchor:r(d),closeOnOuterClick:!0,onClose:()=>{z(h,!1)}})}}),T(e,p),u1()}function Os(e){var a,n;if(navigator.clipboard)return navigator.clipboard.writeText(e);if((a=(n=document).queryCommandSupported)!==null&&a!==void 0&&a.call(n,"copy")){var t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();try{document.execCommand("copy")}catch(c){console.error(c)}finally{document.body.removeChild(t)}return Promise.resolve()}return console.error("Copy failed."),Promise.resolve()}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-path-editor.svelte-uyexy4 {
  flex: 1;
  display: flex;
  border: var(--jse-edit-outline, 2px solid #656565);
  background: var(--jse-background-color, #fff);
}
.jse-navigation-bar-path-editor.svelte-uyexy4 input.jse-navigation-bar-text:where(.svelte-uyexy4) {
  flex: 1;
  font-family: inherit;
  font-size: inherit;
  padding: 0 5px 1px;
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
  border: none;
  outline: none;
}
.jse-navigation-bar-path-editor.svelte-uyexy4 button:where(.svelte-uyexy4) {
  border: none;
  background: var(--jse-background-color, #fff);
  cursor: pointer;
  font-family: inherit;
  font-size: 80%;
  color: inherit;
}
.jse-navigation-bar-path-editor.svelte-uyexy4 button.jse-navigation-bar-copy.copied:where(.svelte-uyexy4) {
  color: var(--message-success-background, #9ac45d);
}
.jse-navigation-bar-path-editor.svelte-uyexy4 button.jse-navigation-bar-validation-error:where(.svelte-uyexy4) {
  color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.error.svelte-uyexy4 {
  border-color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.error.svelte-uyexy4 input.jse-navigation-bar-text:where(.svelte-uyexy4) {
  color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.svelte-uyexy4 .jse-copied-text:where(.svelte-uyexy4) {
  background: var(--message-success-background, #9ac45d);
  color: var(--jse-message-success-color, #fff);
  position: relative;
  margin: 2px;
  padding: 0 5px;
  border-radius: 3px;
}`);var Bj=a2('<button type="button" class="jse-navigation-bar-validation-error svelte-uyexy4"><!></button>'),Ij=a2('<div class="jse-copied-text svelte-uyexy4">Copied!</div>'),Uj=a2('<div><input type="text" class="jse-navigation-bar-text svelte-uyexy4"/> <!> <!> <button type="button" title="Copy selected path to the clipboard"><!></button></div>');function Hj(e,a){f1(a,!1);var n=R(),t=ga("absolute-popup"),c=b(a,"path",8),l=b(a,"pathParser",8),o=b(a,"onChange",8),s=b(a,"onClose",8),i=b(a,"onError",8),f=b(a,"pathExists",8),u=R(),d=R(),h=R(!1),m=void 0,v=R(!1);function p(){r(u).focus()}function g($){try{var U=l().parse($);return(function(O){if(!f()(O))throw new Error("Path does not exist in current document")})(U),{path:U,error:void 0}}catch(O){return{path:void 0,error:O}}}x3(()=>{p()}),ze(()=>{clearTimeout(m)}),Y(()=>(M(l()),M(c())),()=>{z(d,l().stringify(c()))}),Y(()=>(r(h),r(d)),()=>{z(n,r(h)?g(r(d)).error:void 0)}),L4(),_1();var y,L=Uj(),S=q(L);r0(S,$=>z(u,$),()=>r(u));var j=J(S,2),x=$=>{var U=Bj();c4(q(U),{get data(){return D6}}),A3(U,(O,c2)=>mn?.(O,c2),()=>N2({text:String(r(n)||"")},t)),T($,U)};i2(j,$=>{r(n)&&$(x)});var E=J(j,2),P=$=>{T($,Ij())};i2(E,$=>{r(v)&&$(P)});var I,k=J(E,2);c4(q(k),{get data(){return l6}}),E2(()=>{y=A1(L,1,"jse-navigation-bar-path-editor svelte-uyexy4",null,y,{error:r(n)}),r8(S,r(d)),I=A1(k,1,"jse-navigation-bar-copy svelte-uyexy4",null,I,{copied:r(v)})}),w2("keydown",S,z6(function($){var U=E6($);if(U==="Escape"&&($.preventDefault(),s()()),U==="Enter"){$.preventDefault(),z(h,!0);var O=g(r(d));O.path!==void 0?o()(O.path):i()(O.error)}})),w2("input",S,function($){z(d,$.currentTarget.value)}),w2("click",k,function(){Os(r(d)),z(v,!0),m=window.setTimeout(()=>z(v,!1),1e3),p()}),T(e,L),u1()}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar.svelte-hjhal6 {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-button-color, inherit);
  padding: 0;
  margin: 0;
  display: flex;
  overflow: auto;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit:where(.svelte-hjhal6) {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  background: transparent;
  border: none;
  display: flex;
  cursor: pointer;
  outline: none;
  align-items: center;
}
.jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit.flex:where(.svelte-hjhal6) {
  flex: 1;
}
.jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit:where(.svelte-hjhal6):focus, .jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit:where(.svelte-hjhal6):hover, .jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit.editing:where(.svelte-hjhal6) {
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  transition: color 0.2s ease-in, background 0.2s ease-in;
}
.jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit:where(.svelte-hjhal6) .jse-navigation-bar-space:where(.svelte-hjhal6) {
  flex: 1;
  text-align: left;
}`);var Wj=a2("<!> <!>",1),Vj=a2('<div class="jse-navigation-bar svelte-hjhal6"><!> <button type="button"><span class="jse-navigation-bar-space svelte-hjhal6"> </span> <!></button></div>');function Jj(e,a){f1(a,!1);var n=R(void 0,!0),t=R(void 0,!0),c=t3("jsoneditor:NavigationBar"),l=b(a,"json",9),o=b(a,"selection",9),s=b(a,"onSelect",9),i=b(a,"onError",9),f=b(a,"pathParser",9),u=R(void 0,!0),d=R(!1,!0);function h(U){c("get items for path",U);var O=W2(l(),U);if(Array.isArray(O))return j5(0,O.length).map(String);if(d4(O)){var c2=Object.keys(O).slice(0);return c2.sort(Zo),c2}return[]}function m(U){return d3(l(),U)}function v(U){c("select path",JSON.stringify(U)),s()(k3(U,U))}function p(){z(d,!1)}function g(U){p(),v(U)}Y(()=>(M(o()),r1),()=>{z(n,o()?r1(o()):[])}),Y(()=>(M(l()),r(n)),()=>{z(t,M0(W2(l(),r(n))))}),Y(()=>r(n),()=>{r(n),setTimeout(()=>{if(r(u)&&r(u).scrollTo){var U=r(u).scrollWidth-r(u).clientWidth;U>0&&(c("scrollTo ",U),r(u).scrollTo({left:U,behavior:"smooth"}))}})}),L4(),_1(!0);var y=Vj(),L=q(y),S=U=>{var O=Wj(),c2=Y2(O);x0(c2,1,()=>r(n),T0,(S2,q2,f2)=>{Lp(S2,{getItems:h,get path(){return r(n)},index:f2,onSelect:v})});var u2=J(c2,2),l2=S2=>{Lp(S2,{getItems:h,get path(){return r(n)},get index(){return r(n),F(()=>r(n).length)},onSelect:v})};i2(u2,S2=>{r(t)&&S2(l2)}),T(U,O)},j=U=>{Hj(U,{get path(){return r(n)},onClose:p,onChange:g,get onError(){return i()},pathExists:m,get pathParser(){return f()}})};i2(L,U=>{r(d)?U(j,!1):U(S)});var x,E=J(L,2),P=q(E),I=q(P),k=J(P,2),$=Z2(()=>r(d)?M9:h9);c4(k,{get data(){return r($)}}),r0(y,U=>z(u,U),()=>r(u)),E2(U=>{x=A1(E,1,"jse-navigation-bar-edit svelte-hjhal6",null,x,{flex:!r(d),editing:r(d)}),j4(E,"title",r(d)?"Cancel editing the selected path":"Edit the selected path"),d1(I,U)},[()=>(M(M0),M(l()),r(d),F(()=>M0(l())||r(d)?"\xA0":"Navigation bar"))]),w2("click",E,function(){z(d,!r(d))}),T(e,y),u1()}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-search-box.svelte-1x1x8q0 {
  border: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
  border-radius: 3px;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  display: inline-block;
  width: 400px;
  max-width: 100%;
  overflow: auto;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) {
  display: flex;
  align-items: stretch;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) button:where(.svelte-1x1x8q0),
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) input:where(.svelte-1x1x8q0) {
  font-family: inherit;
  font-size: inherit;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) button:where(.svelte-1x1x8q0) {
  display: block;
  text-align: center;
  border: none;
  padding: 0 5px;
  margin: 0;
  cursor: pointer;
  color: var(--jse-panel-button-color, inherit);
  background: var(--jse-panel-button-background, transparent);
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) button:where(.svelte-1x1x8q0):hover {
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) input:where(.svelte-1x1x8q0) {
  color: var(--jse-panel-color, var(--jse-text-color, #4d4d4d));
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: 3px;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  height: 28px;
  padding: 0 5px;
  margin: 0;
  flex: 1;
  width: 0;
  min-width: 50px;
  outline: none;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-replace-toggle:where(.svelte-1x1x8q0) {
  padding: var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px));
  min-width: 20px;
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: calc(0.5 * var(--jse-padding, 10px));
  gap: calc(0.5 * var(--jse-padding, 10px));
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) {
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) .jse-search-icon:where(.svelte-1x1x8q0) {
  color: inherit;
  cursor: inherit;
  background: inherit;
  width: 32px;
  text-align: center;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) label.jse-search-input-label:where(.svelte-1x1x8q0) {
  flex: 1;
  display: flex;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) .jse-search-count:where(.svelte-1x1x8q0) {
  color: inherit;
  font-size: 80%;
  visibility: hidden;
  padding: 0 5px;
  min-width: 36px;
  text-align: center;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) .jse-search-count.jse-visible:where(.svelte-1x1x8q0) {
  visibility: visible;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-replace-section:where(.svelte-1x1x8q0) {
  flex: 1;
  display: flex;
  padding-left: 32px;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-replace-section:where(.svelte-1x1x8q0) button:where(.svelte-1x1x8q0) {
  width: auto;
}`);var Gj=a2('<button type="button" class="jse-replace-toggle svelte-1x1x8q0" title="Toggle visibility of replace options (Ctrl+H)"><!></button>'),Kj=a2('<div class="jse-replace-section svelte-1x1x8q0"><input class="jse-replace-input svelte-1x1x8q0" title="Enter replacement text" type="text" placeholder="Replace"/> <button type="button" title="Replace current occurrence (Ctrl+Enter)" class="svelte-1x1x8q0">Replace</button> <button type="button" title="Replace all occurrences" class="svelte-1x1x8q0">All</button></div>'),Qj=a2('<div class="jse-search-box svelte-1x1x8q0"><form class="jse-search-form svelte-1x1x8q0"><!> <div class="jse-search-contents svelte-1x1x8q0"><div class="jse-search-section svelte-1x1x8q0"><div class="jse-search-icon svelte-1x1x8q0"><!></div> <label class="jse-search-input-label svelte-1x1x8q0" about="jse-search input"><input class="jse-search-input svelte-1x1x8q0" title="Enter text to search" type="text" placeholder="Find"/></label> <div> </div> <button type="button" class="jse-search-next svelte-1x1x8q0" title="Go to next search result (Enter)"><!></button> <button type="button" class="jse-search-previous svelte-1x1x8q0" title="Go to previous search result (Shift+Enter)"><!></button> <button type="button" class="jse-search-clear svelte-1x1x8q0" title="Close search box (Esc)"><!></button></div> <!></div></form></div>');function Em(e,a){f1(a,!1);var n=R(void 0,!0),t=R(void 0,!0),c=R(void 0,!0),l=t3("jsoneditor:SearchBox"),o=b(a,"json",9),s=b(a,"documentState",9),i=b(a,"parser",9),f=b(a,"showSearch",9),u=b(a,"showReplace",13),d=b(a,"readOnly",9),h=b(a,"columns",9),m=b(a,"onSearch",9),v=b(a,"onFocus",9),p=b(a,"onPatch",9),g=b(a,"onClose",9),y=R("",!0),L="",S=R("",!0),j=R(!1,!0),x=R(void 0,!0),E=En(function(Q){return z2.apply(this,arguments)},300),P=En(function(Q){return o1.apply(this,arguments)},300);function I(){u(!u()&&!d())}function k(Q){Q.stopPropagation();var O2=E6(Q);O2==="Enter"&&(Q.preventDefault(),r(y)!==L?E.flush():f2()),O2==="Shift+Enter"&&(Q.preventDefault(),d2()),O2==="Ctrl+Enter"&&(Q.preventDefault(),u()?c2():f2()),O2==="Ctrl+H"&&(Q.preventDefault(),I()),O2==="Escape"&&(Q.preventDefault(),G())}function $(Q){E6(Q)==="Enter"&&(Q.preventDefault(),Q.stopPropagation(),c2())}function U(){return O.apply(this,arguments)}function O(){return(O=z1(function*(){t0(),yield E.flush()})).apply(this,arguments)}function c2(){return u2.apply(this,arguments)}function u2(){return(u2=z1(function*(){var Q;if(!d()){var O2=(Q=r(x))===null||Q===void 0?void 0:Q.activeItem;if(l("handleReplace",{replaceText:r(S),activeItem:O2}),r(x)&&O2&&o()!==void 0){z(x,N2(N2({},rp(r(x))),{},{activeIndex:r(t)}));var{operations:t2,newSelection:W}=mw(o(),s(),r(S),O2,i());p()(t2,(b1,i1)=>({state:i1,selection:W})),t0(),yield P.flush(),yield Q2()}}})).apply(this,arguments)}function l2(){return S2.apply(this,arguments)}function S2(){return(S2=z1(function*(){if(!d()){l("handleReplaceAll",{text:r(y),replaceText:r(S)});var{operations:Q,newSelection:O2}=(function(t2,W,b1,i1,j2){for(var x1=cp(b1,t2,{maxResults:1/0}),I2=[],V2=0;V2<x1.length;V2++){var m1=x1[V2-1],F2=x1[V2];V2!==0&&F2.field===m1.field&&H1(F2.path,m1.path)?U1(I2).items.push(F2):I2.push({path:F2.path,field:F2.field,items:[F2]})}I2.sort((C,_)=>C.field!==_.field?C.field===Se.key?1:-1:_.path.length-C.path.length);var O1,w=[];return I2.forEach(C=>{var{field:_,path:D,items:n2}=C;if(_===Se.key){var C2=Y1(D),A2=W2(t2,C2),e2=U1(D),r2=rr(C2,Object.keys(A2),e2,op(e2,i1,n2));w=w.concat(r2),O1=vn(t2,r2)}else{if(_!==Se.value)throw new Error("Cannot replace: unknown type of search result field ".concat(_));var s1=W2(t2,D);if(s1===void 0)throw new Error("Cannot replace: path not found ".concat(c1(D)));var e1=typeof s1=="string"?s1:String(s1),U2=Je(t2,W,D),J2=op(e1,i1,n2),q1=[{op:"replace",path:c1(D),value:U2?J2:wn(J2,j2)}];w=w.concat(q1),O1=vn(t2,q1)}}),{operations:w,newSelection:O1}})(o(),s(),r(y),r(S),i());p()(Q,(t2,W)=>({state:W,selection:O2})),yield Q2()}})).apply(this,arguments)}function q2(Q){Q.select()}function f2(){return o2.apply(this,arguments)}function o2(){return(o2=z1(function*(){z(x,r(x)?rp(r(x)):void 0),yield Q2()})).apply(this,arguments)}function d2(){return P2.apply(this,arguments)}function P2(){return P2=z1(function*(){z(x,r(x)?(function(Q){var O2=Q.activeIndex>0?Q.activeIndex-1:Q.items.length-1,t2=Q.items[O2],W=Q.items.map((b1,i1)=>N2(N2({},b1),{},{active:i1===O2}));return N2(N2({},Q),{},{items:W,activeItem:t2,activeIndex:O2})})(r(x)):void 0),yield Q2()}),P2.apply(this,arguments)}function Q2(){return y2.apply(this,arguments)}function y2(){return(y2=z1(function*(){var Q;l("handleFocus",r(x));var O2=(Q=r(x))===null||Q===void 0?void 0:Q.activeItem;O2&&o()!==void 0&&(yield v()(O2.path,O2.resultIndex))})).apply(this,arguments)}function s2(){return s2=z1(function*(Q){yield E1(Q,r(y),o())}),s2.apply(this,arguments)}function z2(){return z2=z1(function*(Q){yield E1(f(),Q,o()),yield Q2()}),z2.apply(this,arguments)}function o1(){return o1=z1(function*(Q){yield E1(f(),r(y),Q)}),o1.apply(this,arguments)}function E1(Q,O2,t2){return m2.apply(this,arguments)}function m2(){return m2=z1(function*(Q,O2,t2){return Q?(l("applySearch",{showSearch:Q,text:O2}),O2===""?(l("clearing search result"),r(x)!==void 0&&z(x,void 0),Promise.resolve()):(L=O2,z(j,!0),new Promise(W=>{setTimeout(()=>{var b1=cp(O2,t2,{maxResults:uo,columns:h()});z(x,(function(i1,j2){var x1=j2!=null&&j2.activeItem?sp(j2.activeItem):void 0,I2=i1.findIndex(F2=>H1(x1,sp(F2))),V2=I2!==-1?I2:j2?.activeIndex!==void 0&&j2?.activeIndex<i1.length?j2?.activeIndex:i1.length>0?0:-1,m1=i1.map((F2,O1)=>N2(N2({resultIndex:O1},F2),{},{active:O1===V2}));return{items:m1,activeItem:m1[V2],activeIndex:V2}})(b1,r(x))),z(j,!1),W()})}))):(r(x)&&z(x,void 0),Promise.resolve())}),m2.apply(this,arguments)}function G(){l("handleClose"),E.cancel(),P.cancel(),E1(!1,r(y),o()),g()()}Y(()=>r(x),()=>{var Q;z(n,((Q=r(x))===null||Q===void 0||(Q=Q.items)===null||Q===void 0?void 0:Q.length)||0)}),Y(()=>r(x),()=>{var Q;z(t,((Q=r(x))===null||Q===void 0?void 0:Q.activeIndex)||0)}),Y(()=>(r(n),uo),()=>{z(c,r(n)>=uo?"".concat(999,"+"):String(r(n)))}),Y(()=>(M(m()),r(x)),()=>{m()(r(x))}),Y(()=>M(f()),()=>{(function(Q){s2.apply(this,arguments)})(f())}),Y(()=>r(y),()=>{E(r(y))}),Y(()=>M(o()),()=>{P(o())}),L4(),_1(!0);var b2=W1(),H=Y2(b2),v2=Q=>{var O2=Qj(),t2=q(O2),W=q(t2),b1=e2=>{var r2=Gj(),s1=q(r2),e1=Z2(()=>u()?qe:g8);c4(s1,{get data(){return r(e1)}}),w2("click",r2,I),T(e2,r2)};i2(W,e2=>{d()||e2(b1)});var i1=q(J(W,2)),j2=q(i1),x1=q(j2),I2=e2=>{c4(e2,{get data(){return m9},spin:!0})},V2=e2=>{c4(e2,{get data(){return Hn}})};i2(x1,e2=>{r(j)?e2(I2):e2(V2,!1)});var m1=J(j2,2),F2=q(m1);o3(()=>Bc(F2,()=>r(y),e2=>z(y,e2))),A3(F2,e2=>q2?.(e2)),o3(()=>w2("paste",F2,U));var O1,w=J(m1,2),C=q(w),_=J(w,2);c4(q(_),{get data(){return x9}});var D=J(_,2);c4(q(D),{get data(){return v9}});var n2=J(D,2);c4(q(n2),{get data(){return Vn}});var C2=J(i1,2),A2=e2=>{var r2=Kj(),s1=q(r2),e1=J(s1,2),U2=J(e1,2);Bc(s1,()=>r(S),J2=>z(S,J2)),w2("keydown",s1,$),w2("click",e1,c2),w2("click",U2,l2),T(e2,r2)};i2(C2,e2=>{u()&&!d()&&e2(A2)}),E2(()=>{var e2;O1=A1(w,1,"jse-search-count svelte-1x1x8q0",null,O1,{"jse-visible":r(y)!==""}),d1(C,"".concat(r(t)!==-1&&r(t)<r(n)?"".concat(r(t)+1,"/"):"").concat((e2=r(c))!==null&&e2!==void 0?e2:""))}),w2("click",_,f2),w2("click",D,d2),w2("click",n2,G),w2("keydown",t2,k),T(Q,O2)};i2(H,Q=>{f()&&Q(v2)}),T(e,b2),u1()}var Wt=Symbol("path");function Xj(e,a){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1/0,t={};Array.isArray(e)&&(function(l,o,s){if(l.length<o)l.forEach(s);else for(var i=o>1?(l.length-1)/(o-1):l.length,f=0;f<o;f++){var u=Math.floor(f*i);s(l[u],u,l)}})(e,n,l=>{d4(l)?Pm(l,t,a):t[Wt]=!0});var c=[];return Wt in t&&c.push([]),Tm(t,[],c,a),c}function Pm(e,a,n){for(var t in e){var c=e[t],l=a[t]||(a[t]={});d4(c)&&n?Pm(c,l,n):l[Wt]===void 0&&(l[Wt]=!0)}}function Tm(e,a,n,t){for(var c in e){var l=a.concat(c),o=e[c];o&&o[Wt]===!0&&n.push(l),y0(o)&&t&&Tm(o,l,n,t)}}function Yj(e,a,n,t,c,l){for(var o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:80,s=p0(n)?n.length:0,i=(function(L,S){var j=Object.values(L);if(f4(j))return S;var x=(E,P)=>E+P;return j.reduce(x)/j.length})(t,c),f=e-o,u=a+2*o,d=L=>t[L]||c,h=0,m=l;m<f&&h<s;)m+=d(h),h++;h>0&&(m-=d(--h));for(var v=h,p=0;p<u&&v<s;)p+=d(v),v++;for(var g=0,y=v;y<s;y++)g+=d(y);return{startIndex:h,endIndex:v,startHeight:m,endHeight:g,averageItemHeight:i,visibleHeight:p,visibleItems:p0(n)?n.slice(h,v):[]}}function wp(e,a,n,t){for(var{rowIndex:c}=fe(e,a),l=0,o=0;o<c;o++)l+=n[o]||t;return l}function fe(e,a){var[n,...t]=e,c=parseInt(n,10);return{rowIndex:isNaN(c)?-1:c,columnIndex:a.findIndex(l=>Xe(t,l))}}function Fa(e,a){var{rowIndex:n,columnIndex:t}=e;return[String(n),...a[t]]}function Zj(e,a){var[n,t]=Ai(e,o=>ds(o.path[0])),c=ki(n,eS),l=Ni(c,o=>{var s={row:[],columns:{}};return o.forEach(i=>{var f=(function(u,d){var h=fe(u.path,d);return h.columnIndex!==-1?h.columnIndex:-1})(i,a);f!==-1?(s.columns[f]===void 0&&(s.columns[f]=[]),s.columns[f].push(i)):s.row.push(i)}),s});return{root:t,rows:l}}function D8(e,a){if(a&&a.length!==0)return a.length===1?a[0]:{path:e,message:"Multiple validation issues: "+a.map(n=>H3(n.path)+" "+n.message).join(", "),severity:he.warning}}function eS(e){return parseInt(e.path[0],10)}function aS(e,a,n){var t=a.some(c=>(function(l,o,s){if(!l)return!1;if(o.op==="replace"){var i=w3(o.path),{rowIndex:f,columnIndex:u}=fe(i,s),d=s.findIndex(h=>H1(h,l.path));if(f!==-1&&u!==-1&&u!==d)return!1}return!0})(e,c,n));return t?void 0:e}var N3=t3("jsoneditor:actions");function Om(e){return es.apply(this,arguments)}function es(){return es=z1(function*(e){var{json:a,selection:n,indentation:t,readOnly:c,parser:l,onPatch:o}=e;if(!c&&a!==void 0&&n&&K8(n)){var s=rm(a,n,t,l);if(s!==void 0){N3("cut",{selection:n,clipboard:s,indentation:t}),yield Os(s);var{operations:i,newSelection:f}=im(a,n);o(i,(u,d)=>({state:d,selection:f}))}}}),es.apply(this,arguments)}function Rm(e){return as.apply(this,arguments)}function as(){return as=z1(function*(e){var{json:a,selection:n,indentation:t,parser:c}=e,l=rm(a,n,t,c);l!==void 0&&(N3("copy",{clipboard:l,indentation:t}),yield Os(l))}),as.apply(this,arguments)}function qm(e){var{clipboardText:a,json:n,selection:t,readOnly:c,parser:l,onPatch:o,onChangeText:s,onPasteMultilineText:i,openRepairModal:f}=e;if(!c)try{u(a)}catch{f(a,h=>{N3("repaired pasted text: ",h),u(h)})}function u(d){if(n!==void 0){var h=t||K1([]),m=sm(n,h,d,l),v=(function(p,g,y){var L=arguments.length>3&&arguments[3]!==void 0?arguments[3]:ow;if(p.length>L)return!1;var S=/\n/.test(p);if(!S)return!1;var j=g.some(E=>E.op==="replace"&&Array.isArray(E.value)),x=g.filter(E=>E.op==="add").length>1;if(!j&&!x)return!1;try{return Zt(p,y.parse),!1}catch{return!0}})(a,m,l);N3("paste",{pastedText:d,operations:m,ensureSelection:h,pasteMultilineText:v}),o(m,(p,g)=>{var y=g;return m.filter(L=>(S5(L)||dr(L))&&M0(L.value)).forEach(L=>{var S=_3(n,L.path);y=l8(p,y,S)}),{state:y}}),v&&i(d)}else N3("paste text",{pastedText:d}),s(a,(p,g)=>{if(p)return{state:l8(p,g,[])}})}}function $m(e){var{json:a,text:n,selection:t,keepSelection:c,readOnly:l,onChange:o,onPatch:s}=e;if(!l&&t){var i=a!==void 0&&(n3(t)||h4(t))?k3(t.path,t.path):t;if(f4(r1(t)))N3("remove root",{selection:t}),o&&o({text:"",json:void 0},a!==void 0?{text:void 0,json:a}:{text:n||"",json:a},{contentErrors:void 0,patchResult:void 0});else if(a!==void 0){var{operations:f,newSelection:u}=im(a,i);N3("remove",{operations:f,selection:t,newSelection:u}),s(f,(d,h)=>({state:h,selection:c?t:u}))}}}function r5(e){var{insertType:a,selectInside:n,initialValue:t,json:c,selection:l,readOnly:o,parser:s,onPatch:i,onReplaceJson:f}=e;if(!o){var u=(function(p,g,y){if(y==="object")return{};if(y==="array")return[];if(y==="structure"&&p!==void 0){var L=g?nm(g):[],S=W2(p,L);if(Array.isArray(S)&&!f4(S)){var j=Re(S);return M0(j)?Ci(j,x=>Array.isArray(x)?[]:d4(x)?void 0:""):""}}return""})(c,l,a);if(c!==void 0){var d=s.stringify(u),h=sm(c,l,d,s);N3("onInsert",{insertType:a,operations:h,newValue:u,data:d});var m=U1(h.filter(p=>p.op==="add"||p.op==="replace"));i(h,(p,g,y)=>{if(m){var L=_3(p,m.path);if(M0(u))return{state:Ce(p,g,L,ks),selection:n?T6(L):y};if(u===""){var S=f4(L)?void 0:W2(p,Y1(L));return{state:Ce(p,g,L,Pc),selection:d4(S)?Ns(L,t):Jc(L,t)}}}}),N3("after patch")}else{N3("onInsert",{insertType:a,newValue:u});var v=[];f(u,(p,g)=>({state:l8(p,g,v),selection:M0(u)?T6(v):Jc(v)}))}}}function Dm(e){return ns.apply(this,arguments)}function ns(){return ns=z1(function*(e){var{char:a,selectInside:n,json:t,selection:c,readOnly:l,parser:o,onPatch:s,onReplaceJson:i,onSelect:f}=e;l||(n3(c)?f(N2(N2({},c),{},{edit:!0,initialValue:a})):a==="{"?r5({insertType:"object",selectInside:n,initialValue:void 0,json:t,selection:c,readOnly:l,parser:o,onPatch:s,onReplaceJson:i}):a==="["?r5({insertType:"array",selectInside:n,initialValue:void 0,json:t,selection:c,readOnly:l,parser:o,onPatch:s,onReplaceJson:i}):h4(c)&&t!==void 0?M0(W2(t,c.path))||f(N2(N2({},c),{},{edit:!0,initialValue:a})):(N3("onInsertValueWithCharacter",{char:a}),yield(function(u){return ts.apply(this,arguments)})({char:a,json:t,selection:c,readOnly:l,parser:o,onPatch:s,onReplaceJson:i})))}),ns.apply(this,arguments)}function ts(){return ts=z1(function*(e){var{char:a,json:n,selection:t,readOnly:c,parser:l,onPatch:o,onReplaceJson:s}=e;c||r5({insertType:"value",selectInside:!1,initialValue:a,json:n,selection:t,readOnly:c,parser:l,onPatch:o,onReplaceJson:s})}),ts.apply(this,arguments)}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-json-preview.svelte-25xmyd {
  flex: 1;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  overflow: auto;
  white-space: pre-wrap;
  padding: 2px;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}`);var nS=a2('<div class="jse-json-preview svelte-25xmyd"> </div>');function Fm(e,a){f1(a,!1);var n=R(),t=R(),c=b(a,"text",8),l=b(a,"json",8),o=b(a,"indentation",8),s=b(a,"parser",8);Y(()=>(M(l()),M(c())),()=>{z(n,l()!==void 0?{json:l()}:{text:c()||""})}),Y(()=>(r(n),M(o()),M(s()),Uc),()=>{z(t,M6($o(r(n),o(),s()),Uc))}),L4(),_1();var i=nS(),f=q(i);E2(()=>d1(f,r(t))),T(e,i),u1()}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-context-menu-button.svelte-16jz6ui {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: inherit;
}
button.jse-context-menu-button.svelte-16jz6ui:hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
button.jse-context-menu-button.svelte-16jz6ui:focus {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
  z-index: 1;
}
button.jse-context-menu-button.svelte-16jz6ui:disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
button.jse-context-menu-button.left.svelte-16jz6ui {
  text-align: left;
}
button.jse-context-menu-button.svelte-16jz6ui svg {
  width: 16px;
}`);var tS=a2('<button type="button"><!> <!></button>');function Co(e,a){f1(a,!1);var n=b(a,"item",8),t=b(a,"className",8,void 0),c=b(a,"onRequestClose",8);_1();var l=tS(),o=q(l),s=u=>{c4(u,{get data(){return M(n()),F(()=>n().icon)}})};i2(o,u=>{M(n()),F(()=>n().icon)&&u(s)});var i=J(o,2),f=u=>{var d=s3();E2(()=>d1(d,(M(n()),F(()=>n().text)))),T(u,d)};i2(i,u=>{M(n()),F(()=>n().text)&&u(f)}),E2(u=>{A1(l,1,u,"svelte-16jz6ui"),j4(l,"title",(M(n()),F(()=>n().title))),l.disabled=(M(n()),F(()=>n().disabled||!1))},[()=>va((M(Ee),M(t()),M(n()),F(()=>Ee("jse-context-menu-button",t(),n().className))))]),w2("click",l,u=>{c()(),n().onClick(u)}),T(e,l),u1()}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-dropdown-button.svelte-bov1j6 {
  flex: 1;
  line-height: normal;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  position: relative;
  padding: 0;
  display: flex;
}
.jse-dropdown-button.svelte-bov1j6 ul:where(.svelte-bov1j6) {
  margin: 0;
  padding: 0;
}
.jse-dropdown-button.svelte-bov1j6 ul:where(.svelte-bov1j6) li:where(.svelte-bov1j6) {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown:where(.svelte-bov1j6) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 2em;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  border-radius: 0;
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown.jse-visible:where(.svelte-bov1j6) {
  background: var(--jse-context-menu-background, #656565);
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown:where(.svelte-bov1j6):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown:where(.svelte-bov1j6):focus {
  z-index: 1;
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown:where(.svelte-bov1j6):disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items:where(.svelte-bov1j6) {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items.jse-visible:where(.svelte-bov1j6) {
  display: block;
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items:where(.svelte-bov1j6) button:where(.svelte-bov1j6) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 100%;
  text-align: left;
  padding: var(--jse-padding, 10px);
  margin: 0;
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items:where(.svelte-bov1j6) button:where(.svelte-bov1j6):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items:where(.svelte-bov1j6) button:where(.svelte-bov1j6):disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}`);var rS=a2('<li class="svelte-bov1j6"><button type="button"><!> </button></li>'),cS=a2('<div role="button" tabindex="0" class="jse-dropdown-button svelte-bov1j6"><!> <button type="button" data-type="jse-open-dropdown"><!></button> <div><ul class="svelte-bov1j6"></ul></div></div>');j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-context-menu-button.svelte-1y5l9l1 {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: inherit;
}
button.jse-context-menu-button.svelte-1y5l9l1:hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
button.jse-context-menu-button.svelte-1y5l9l1:focus {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
  z-index: 1;
}
button.jse-context-menu-button.svelte-1y5l9l1:disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
button.jse-context-menu-button.left.svelte-1y5l9l1 {
  text-align: left;
}
button.jse-context-menu-button.svelte-1y5l9l1 svg {
  width: 16px;
}`);var lS=a2('<button type="button" slot="defaultItem"><!> </button>');function jo(e,a){f1(a,!1);var n=R(),t=b(a,"item",8),c=b(a,"className",8,void 0),l=b(a,"onRequestClose",8);Y(()=>(M(t()),M(l())),()=>{z(n,t().items.map(o=>N2(N2({},o),{},{onClick:s=>{l()(),o.onClick(s)}})))}),L4(),_1(),(function(o,s){f1(s,!1);var i=R(void 0,!0),f=b(s,"items",25,()=>[]),u=b(s,"title",9,void 0),d=b(s,"width",9,"120px"),h=R(!1,!0);function m(){z(h,!1)}function v(x){E6(x)==="Escape"&&(x.preventDefault(),z(h,!1))}x3(()=>{document.addEventListener("click",m),document.addEventListener("keydown",v)}),ze(()=>{document.removeEventListener("click",m),document.removeEventListener("keydown",v)}),Y(()=>M(f()),()=>{z(i,f().every(x=>x.disabled===!0))}),L4(),_1(!0);var p=cS(),g=q(p);k0(g,s,"defaultItem",{},null);var y,L=J(g,2);c4(q(L),{get data(){return qe}});var S,j=J(L,2);x0(q(j),5,f,T0,(x,E)=>{var P=rS(),I=q(P),k=q(I),$=O=>{c4(O,{get data(){return r(E),F(()=>r(E).icon)}})};i2(k,O=>{r(E),F(()=>r(E).icon)&&O($)});var U=J(k);E2(()=>{var O;j4(I,"title",(r(E),F(()=>r(E).title))),I.disabled=(r(E),F(()=>r(E).disabled)),A1(I,1,va((r(E),F(()=>r(E).className))),"svelte-bov1j6"),d1(U," ".concat((r(E),(O=F(()=>r(E).text))!==null&&O!==void 0?O:"")))}),w2("click",I,O=>r(E).onClick(O)),T(x,P)}),E2(()=>{var x;j4(p,"title",u()),y=A1(L,1,"jse-open-dropdown svelte-bov1j6",null,y,{"jse-visible":r(h)}),L.disabled=r(i),S=A1(j,1,"jse-dropdown-items svelte-bov1j6",null,S,{"jse-visible":r(h)}),me(j,"width: ".concat((x=d())!==null&&x!==void 0?x:"",";"))}),w2("click",L,function(){var x=r(h);setTimeout(()=>z(h,!x))}),w2("click",p,m),T(o,p),u1()})(e,{get width(){return M(t()),F(()=>t().width)},get items(){return r(n)},$$slots:{defaultItem:(o,s)=>{var i=lS(),f=q(i),u=h=>{c4(h,{get data(){return M(t()),F(()=>t().main.icon)}})};i2(f,h=>{M(t()),F(()=>t().main.icon)&&h(u)});var d=J(f);E2(h=>{var m;A1(i,1,h,"svelte-1y5l9l1"),j4(i,"title",(M(t()),F(()=>t().main.title))),i.disabled=(M(t()),F(()=>t().main.disabled||!1)),d1(d," ".concat((M(t()),(m=F(()=>t().main.text))!==null&&m!==void 0?m:"")))},[()=>va((M(Ee),M(c()),M(t()),F(()=>Ee("jse-context-menu-button",c(),t().main.className))))]),w2("click",i,h=>{l()(),t().main.onClick(h)}),T(o,i)}}}),u1()}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-contextmenu.svelte-1shjn02 {
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-contextmenu.svelte-1shjn02 .jse-row:where(.svelte-1shjn02) {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: stretch;
}
.jse-contextmenu.svelte-1shjn02 .jse-row:where(.svelte-1shjn02) div.jse-label:where(.svelte-1shjn02) {
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  line-height: normal;
}
.jse-contextmenu.svelte-1shjn02 .jse-row:where(.svelte-1shjn02) div.jse-tip:where(.svelte-1shjn02) {
  flex: 1;
  background: var(--jse-context-menu-tip-background, rgba(255, 255, 255, 0.2));
  color: var(--context-menu-tip-color, inherit);
  margin: calc(0.5 * var(--jse-padding, 10px));
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  font-size: 80%;
  line-height: 1.3em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: var(--jse-padding, 10px);
  border-radius: 3px;
}
.jse-contextmenu.svelte-1shjn02 .jse-row:where(.svelte-1shjn02) div.jse-tip:where(.svelte-1shjn02) div.jse-tip-icon:where(.svelte-1shjn02) {
  padding-top: calc(0.5 * var(--jse-padding, 10px));
}
.jse-contextmenu.svelte-1shjn02 .jse-column:where(.svelte-1shjn02) {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.jse-contextmenu.svelte-1shjn02 .jse-column:where(.svelte-1shjn02):not(:last-child) {
  border-right: 1px solid var(--jse-context-menu-separator-color, #7a7a7a);
}
.jse-contextmenu.svelte-1shjn02 .jse-separator:where(.svelte-1shjn02) {
  width: 100%;
  height: 1px;
  background: var(--jse-context-menu-separator-color, #7a7a7a);
}`);var oS=a2('<div class="jse-separator svelte-1shjn02"></div>'),sS=a2('<div class="jse-label svelte-1shjn02"> </div>'),iS=a2('<div class="jse-column svelte-1shjn02"></div>'),fS=a2('<div class="jse-separator svelte-1shjn02"></div>'),uS=a2('<div class="jse-row svelte-1shjn02"></div>'),dS=a2('<div class="jse-separator svelte-1shjn02"></div>'),pS=a2('<div class="jse-row svelte-1shjn02"><div class="jse-tip svelte-1shjn02"><div class="jse-tip-icon svelte-1shjn02"><!></div> <div class="jse-tip-text"> </div></div></div>'),vS=a2('<div role="menu" tabindex="-1" class="jse-contextmenu svelte-1shjn02"><!> <!></div>');function Bm(e,a){f1(a,!1);var n=b(a,"items",9),t=b(a,"onRequestClose",9),c=b(a,"tip",9),l=R(void 0,!0);x3(()=>{var h=Array.from(r(l).querySelectorAll("button")).find(m=>!m.disabled);h&&h.focus()});var o={ArrowUp:"Up",ArrowDown:"Down",ArrowLeft:"Left",ArrowRight:"Right"};function s(h){return console.error("Unknown type of context menu item",h),"???"}_1(!0);var i=vS(),f=q(i);x0(f,1,n,T0,(h,m)=>{var v=W1(),p=Y2(v),g=L=>{Co(L,{get item(){return r(m)},get onRequestClose(){return t()}})},y=L=>{var S=W1(),j=Y2(S),x=P=>{jo(P,{get item(){return r(m)},get onRequestClose(){return t()}})},E=P=>{var I=W1(),k=Y2(I),$=O=>{var c2=uS();x0(c2,5,()=>(r(m),F(()=>r(m).items)),T0,(u2,l2)=>{var S2=W1(),q2=Y2(S2),f2=d2=>{Co(d2,{get item(){return r(l2)},get onRequestClose(){return t()}})},o2=d2=>{var P2=W1(),Q2=Y2(P2),y2=z2=>{jo(z2,{get item(){return r(l2)},get onRequestClose(){return t()}})},s2=z2=>{var o1=W1(),E1=Y2(o1),m2=b2=>{var H=iS();x0(H,5,()=>(r(l2),F(()=>r(l2).items)),T0,(v2,Q)=>{var O2=W1(),t2=Y2(O2),W=i1=>{Co(i1,{className:"left",get item(){return r(Q)},get onRequestClose(){return t()}})},b1=i1=>{var j2=W1(),x1=Y2(j2),I2=m1=>{jo(m1,{className:"left",get item(){return r(Q)},get onRequestClose(){return t()}})},V2=m1=>{var F2=W1(),O1=Y2(F2),w=_=>{T(_,oS())},C=_=>{var D=W1(),n2=Y2(D),C2=e2=>{var r2=sS(),s1=q(r2);E2(()=>d1(s1,(r(Q),F(()=>r(Q).text)))),T(e2,r2)},A2=e2=>{var r2=s3();E2(s1=>d1(r2,s1),[()=>(r(Q),F(()=>s(r(Q))))]),T(e2,r2)};i2(n2,e2=>{M(Ud),r(Q),F(()=>Ud(r(Q)))?e2(C2):e2(A2,!1)},!0),T(_,D)};i2(O1,_=>{M(aa),r(Q),F(()=>aa(r(Q)))?_(w):_(C,!1)},!0),T(m1,F2)};i2(x1,m1=>{M(q8),r(Q),F(()=>q8(r(Q)))?m1(I2):m1(V2,!1)},!0),T(i1,j2)};i2(t2,i1=>{M(b6),r(Q),F(()=>b6(r(Q)))?i1(W):i1(b1,!1)}),T(v2,O2)}),T(b2,H)},G=b2=>{var H=W1(),v2=Y2(H),Q=t2=>{T(t2,fS())},O2=t2=>{var W=s3();E2(b1=>d1(W,b1),[()=>(r(l2),F(()=>s(r(l2))))]),T(t2,W)};i2(v2,t2=>{M(aa),r(l2),F(()=>aa(r(l2)))?t2(Q):t2(O2,!1)},!0),T(b2,H)};i2(E1,b2=>{M(Wd),r(l2),F(()=>Wd(r(l2)))?b2(m2):b2(G,!1)},!0),T(z2,o1)};i2(Q2,z2=>{M(q8),r(l2),F(()=>q8(r(l2)))?z2(y2):z2(s2,!1)},!0),T(d2,P2)};i2(q2,d2=>{M(b6),r(l2),F(()=>b6(r(l2)))?d2(f2):d2(o2,!1)}),T(u2,S2)}),T(O,c2)},U=O=>{var c2=W1(),u2=Y2(c2),l2=q2=>{T(q2,dS())},S2=q2=>{var f2=s3();E2(o2=>d1(f2,o2),[()=>(r(m),F(()=>s(r(m))))]),T(q2,f2)};i2(u2,q2=>{M(aa),r(m),F(()=>aa(r(m)))?q2(l2):q2(S2,!1)},!0),T(O,c2)};i2(k,O=>{M(Hd),r(m),F(()=>Hd(r(m)))?O($):O(U,!1)},!0),T(P,I)};i2(j,P=>{M(q8),r(m),F(()=>q8(r(m)))?P(x):P(E,!1)},!0),T(L,S)};i2(p,L=>{M(b6),r(m),F(()=>b6(r(m)))?L(g):L(y,!1)}),T(h,v)});var u=J(f,2),d=h=>{var m=pS(),v=q(m),p=q(v);c4(q(p),{get data(){return s9}});var g=q(J(p,2));E2(()=>d1(g,c())),T(h,m)};i2(u,h=>{c()&&h(d)}),r0(i,h=>z(l,h),()=>r(l)),w2("keydown",i,function(h){var m=E6(h),v=o[m];if(v&&h.target){h.preventDefault();var p=BL({allElements:Array.from(r(l).querySelectorAll("button:not([disabled])")),currentElement:h.target,direction:v,hasPrio:g=>g.getAttribute("data-type")!=="jse-open-dropdown"});p&&p.focus()}}),T(e,i),u1()}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-1htmvf1 {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-1htmvf1, .jse-value.jse-array.svelte-1htmvf1 {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-1htmvf1 {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-1htmvf1 {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-1htmvf1 {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-1htmvf1 {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-1htmvf1 {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

.jse-enum-value.svelte-1htmvf1 {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  border: none;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  outline: none;
}
.jse-enum-value.jse-selected.svelte-1htmvf1 {
  background: var(--jse-selection-background-color, #d3d3d3);
  color: inherit;
}
.jse-enum-value.jse-value.svelte-1htmvf1:focus {
  color: var(--jse-text-color, #4d4d4d);
}`);var mS=a2("<option> </option>"),hS=a2("<select></select>");function gS(e,a){f1(a,!1);var n=b(a,"path",9),t=b(a,"value",9),c=b(a,"mode",9),l=b(a,"parser",9),o=b(a,"readOnly",9),s=b(a,"selection",9),i=b(a,"onPatch",9),f=b(a,"options",9),u=R(void 0,!0),d=R(t(),!0);Y(()=>M(t()),()=>{z(d,t())}),Y(()=>M(s()),()=>{(function(v){v&&r(u)&&r(u).focus()})(s())}),L4(),_1(!0);var h,m=hS();E2(()=>{r(d),cL(()=>{c(),l(),s(),r(u),f()})}),x0(m,5,f,T0,(v,p)=>{var g=mS(),y=q(g),L={};E2(()=>{var S;d1(y,(r(p),F(()=>r(p).text))),L!==(r(p),L=F(()=>r(p).value))&&(g.value=(S=g.__value=(r(p),F(()=>r(p).value)))!==null&&S!==void 0?S:"")}),T(v,g)}),r0(m,v=>z(u,v),()=>r(u)),E2((v,p)=>h=A1(m,1,v,"svelte-1htmvf1",h,p),[()=>(M(Gc),r(d),M(c()),M(l()),F(()=>"jse-enum-value ".concat(Gc(r(d),c(),l())))),()=>({"jse-selected":h4(s())})]),(function(v,p){var g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:p,y=new WeakSet,L=!0;cv(v,"change",S=>{var j,x=S?"[selected]":":checked";if(v.multiple)j=[].map.call(v.querySelectorAll(x),Et);else{var E,P=(E=v.querySelector(x))!==null&&E!==void 0?E:v.querySelector("option:not([disabled])");j=P&&Et(P)}g(j),K4!==null&&y.add(K4)}),o3(()=>{var S=p();if(v===document.activeElement){var j=Va??K4;if(y.has(j))return}if(Fc(v,S,L),L&&S===void 0){var x=v.querySelector(":checked");x!==null&&(S=Et(x),g(S))}v.__value=S,L=!1}),Ev(v)})(m,()=>r(d),v=>z(d,v)),w2("change",m,function(v){v.stopPropagation(),o()||i()([{op:"replace",path:c1(n()),value:r(d)}])}),w2("mousedown",m,function(v){v.stopPropagation()}),T(e,m),u1()}function zS(e,a,n){var t=W8(e,a||{},n);return t?(function(c){if(Array.isArray(c.enum))return c.enum;var l=c.oneOf||c.anyOf||c.allOf;if(Array.isArray(l)){var o=l.filter(s=>s.enum);if(o.length>0)return o[0].enum}})(t):void 0}function W8(e,a,n){var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e,c=n.slice(1,n.length),l=n[0],o=[t];for(var s of[t.oneOf,t.anyOf,t.allOf])Array.isArray(s)&&(o=o.concat(s));for(var i of o){if("$ref"in(t=i)&&typeof t.$ref=="string"){var f,u=t.$ref;if(u in a)t=a[u];else{if(!u.startsWith("#/")){if(((f=u.match(/#\//g))===null||f===void 0?void 0:f.length)===1){var[d,h]=u.split("#/");if(d in a){var m=a[d],v={$ref:"#/".concat(h)},p=[];return p.push(l),c.length>0&&p.push(...c),W8(m,a,p,v)}throw Error("Unable to resolve reference ".concat(u))}throw Error("Unable to resolve reference ".concat(u))}var g=u.substring(2).split("/");for(var y of(t=e,g)){if(!(y in t))throw Error("Unable to resolve reference ".concat(u));t=t[y]}}}if(l===void 0)return t;if(typeof t.properties=="object"&&t.properties&&l in t.properties)return W8(e,a,c,t=t.properties[l]);if(typeof t.patternProperties=="object"&&t.patternProperties){for(var L in t.patternProperties)if(l.match(L))return W8(e,a,c,t=t.patternProperties[L])}if(typeof t.additionalProperties=="object")return W8(e,a,c,t=t.additionalProperties);if(typeof t.items=="object"&&t.items)return W8(e,a,c,t=t.items)}}function o_(e,a,n){var t=zS(a,n,e.path);if(t){var c=t.map(o=>({value:o,text:o})),l=t.includes(e.value)?c:[{value:e.value,text:e.value}].concat(c);return[{component:gS,props:N2(N2({},e),{},{options:l})}]}}function s_(e){return Hm(Um(e).compile(e.schema),e)}function i_(e){return Im.apply(this,arguments)}function Im(){return(Im=z1(function*(e){var a=Um(e);return Hm(yield a.compileAsync(e.schema),e)})).apply(this,arguments)}function Um(e){var a,n,{schemaDefinitions:t,ajvOptions:c}=e,l=new Ep.default(N2({allErrors:!0,verbose:!0,$data:!0},c));if(t&&Object.keys(t).forEach(o=>{l.addSchema(t[o],o)}),(l=(a=(n=e.onCreateAjv)===null||n===void 0?void 0:n.call(e,l))!==null&&a!==void 0?a:l).opts.verbose===!1)throw new Error("Ajv must be configured with the option verbose=true");return l}function Hm(e,a){if(e.errors)throw e.errors[0];return function(n){var t;return e(n),((t=e.errors)!==null&&t!==void 0?t:[]).map(bS).map(c=>(function(l,o,s){var i,f;return{path:_3(l,o.instancePath),message:(i=o.message)!==null&&i!==void 0?i:"Unknown error",severity:(f=s.errorSeverity)!==null&&f!==void 0?f:he.warning}})(n,c,a))}}function bS(e){var a=void 0;if(e.keyword==="enum"&&Array.isArray(e.schema)){var n=e.schema;if(n){if((n=n.map(c=>JSON.stringify(c))).length>5){var t=["("+(n.length-5)+" more...)"];(n=n.slice(0,5)).push(t)}a="should be equal to one of: "+n.join(", ")}}return e.keyword==="additionalProperties"&&(a="should NOT have additional property: "+e.params.additionalProperty),a?N2(N2({},e),{},{message:a}):e}var f_={id:"jmespath",name:"JMESPath",description:`
<p>
  Enter a <a href="https://jmespath.org" target="_blank" rel="noopener noreferrer">JMESPath</a> query 
  to filter, sort, or transform the JSON data.
 To learn JMESPath, go to <a href="https://jmespath.org/tutorial.html" target="_blank" rel="noopener noreferrer">the interactive tutorial</a>.
</p>
`,createQuery:function(e,a){var{sort:n,filter:t,projection:c}=a,l="";if(t&&t.path&&t.relation&&t.value){var o=["0"].concat(t.path),s=W2(e,o),i=nr(t.value),f=typeof s=="string"&&i!=null?'"'.concat(t.value,'"'):i;l+="[? "+wt(t.path)+" "+t.relation+" `"+f+"`]"}else l+=Array.isArray(e)?"[*]":"@";if(n&&n.path&&n.direction&&(n.direction==="desc"?l+=" | reverse(sort_by(@, &"+wt(n.path)+"))":l+=" | sort_by(@, &"+wt(n.path)+")"),c&&c.paths)if(l[l.length-1]!=="]"&&(l+=" | [*]"),c.paths.length===1){var u=c.paths[0];l+=u.length===0?"":"."+wt(u)}else c.paths.length>1&&(l+=".{"+c.paths.map(d=>Wm(d[d.length-1])+": "+wt(d)).join(", ")+"}");return l},executeQuery:function(e,a,n){var t=vs(n,JSON)?e:(function(c){var l=n.stringify(c);return l!==void 0?JSON.parse(l):void 0})(e);return Pp.default.search(t,a)}};function wt(e){if(e.length===0)return"@";var a=e.map(n=>typeof n=="number"?"["+n+"]":"."+Wm(String(n))).join("");return a[0]==="."?a.slice(1):a}function Wm(e){return e.match(/^[A-Za-z\d_$]+$/)?e:JSON.stringify(e)}var u_={id:"jsonpath",name:"JSONPath",description:`
<p>
  Enter a <a href="https://github.com/JSONPath-Plus/JSONPath" target="_blank" 
  rel="noopener noreferrer"><code>JSONPath</code></a> expression to filter, sort, or transform the data.
</p>`,createQuery:function(e,a){var{filter:n,sort:t,projection:c}=a,l="$";if(n&&n.path&&n.relation&&n.value){var o=nr(n.value),s=JSON.stringify(o);l+="[?(@".concat(Cp(n.path)," ").concat(n.relation," ").concat(s,")]")}if(t&&t.path&&t.direction)throw new Error("Sorting is not supported by JSONPath. Please clear the sorting fields");if(c&&c.paths){if(c.paths.length>1)throw new Error("Picking multiple fields is not supported by JSONPath. Please select only one field");l.endsWith("]")||(l+="[*]"),l+="".concat(Cp(c.paths[0])).replace(/^\.\.\./,"..")}return l},executeQuery:function(e,a){var n=$4({json:e,path:a});return n!==void 0?n:null}};function Cp(e){var a=/^[A-z]+$/;return e.map(n=>a.test(n)?".".concat(n):JSON.stringify([n])).join("")}var d_={id:"lodash",name:"Lodash",description:`
<p>
  Enter a JavaScript function to filter, sort, or transform the data.
  You can use <a href="https://lodash.com" target="_blank" rel="noopener noreferrer">Lodash</a>
  functions like <code>_.map</code>, <code>_.filter</code>,
  <code>_.orderBy</code>, <code>_.sortBy</code>, <code>_.groupBy</code>,
  <code>_.pick</code>, <code>_.uniq</code>, <code>_.get</code>, etcetera.
</p>
`,createQuery:function(e,a){var{filter:n,sort:t,projection:c}=a,l=[`  return _.chain(data)
`];if(n&&n.path&&n.relation&&n.value){var o="item => item".concat(Ie(n.path)),s=nr(n.value),i=typeof s=="string"?"'".concat(n.value,"'"):qv(n.value)&&!Number.isSafeInteger(s)?"".concat(n.value,"n"):n.value;l.push("    .filter(".concat(o," ").concat(n.relation," ").concat(i,`)
`))}if(t&&t.path&&t.direction&&l.push("    .orderBy([".concat((function(d){return d.length===0?"":d.every(h=>p5.test(h)||As.test(h))?"'"+d.map(Sw).join("").replace(/^\./,"")+"'":JSON.stringify(d)})(t.path),"], ['").concat(t.direction,`'])
`)),c&&c.paths)if(c.paths.length>1){var f=c.paths.map(d=>{var h=U1(d)||"item";return"      ".concat(JSON.stringify(h),": item").concat(Ie(d))});l.push(`    .map(item => ({
`.concat(f.join(`,
`),`
    }))
`))}else{var u=c.paths[0];l.push("    .map(item => item".concat(Ie(u),`)
`))}return l.push(`    .value()
`),`function query (data) {
`.concat(l.join(""),"}")},executeQuery:function(e,a){(function(t){var c,l,o=(c=t.match(/_\.chain\(/g))===null||c===void 0?void 0:c.length,s=(l=t.match(/\.value\(\)/g))===null||l===void 0?void 0:l.length;if(o!==s)throw new Error("Cannot execute query: Lodash _.chain(...) must end with .value()")})(a);var n=new Function("_",`"use strict";

`+a+`

if (typeof query !== "function") {
  throw new Error("Cannot execute query: expecting a function named 'query' but is undefined")
}

return query;
`)(Pi)(e);return n!==void 0?n:null}},Lc,wc,p_={id:"javascript",name:"JavaScript",description:`
<p>
  Enter a JavaScript function to filter, sort, or transform the data.
</p>
`,createQuery:function(e,a){var{filter:n,sort:t,projection:c}=a,l=[`  return data
`];if(n&&n.path&&n.relation&&n.value){var o="item => item".concat(Ie(n.path)),s=nr(n.value),i=typeof s=="string"?"'".concat(n.value,"'"):qv(n.value)&&!Number.isSafeInteger(s)?"".concat(n.value,"n"):n.value;l.push("    .filter(".concat(o," ").concat(n.relation," ").concat(i,`)
`))}if(t&&t.path&&t.direction&&(t.direction==="desc"?l.push(`    .slice()
    .sort((a, b) => {
      // sort descending
`+"      const valueA = a".concat(Ie(t.path),`
`)+"      const valueB = b".concat(Ie(t.path),`
`)+`      return valueA > valueB ? -1 : valueA < valueB ? 1 : 0
    })
`):l.push(`    .slice()
    .sort((a, b) => {
      // sort ascending
`+"      const valueA = a".concat(Ie(t.path),`
`)+"      const valueB = b".concat(Ie(t.path),`
`)+`      return valueA > valueB ? 1 : valueA < valueB ? -1 : 0
    })
`)),c&&c.paths)if(c.paths.length>1){var f=c.paths.map(d=>{var h=d[d.length-1]||"item",m="item".concat(Ie(d));return"      ".concat(JSON.stringify(h),": ").concat(m)});l.push(`    .map(item => ({
`.concat(f.join(`,
`),`})
    )
`))}else{var u="item".concat(Ie(c.paths[0]));l.push("    .map(item => ".concat(u,`)
`))}return`function query (data) {
`.concat(l.join(""),"}")},executeQuery:function(e,a){var n=new Function(`"use strict";

`+a+`

if (typeof query !== "function") {
  throw new Error("Cannot execute query: expecting a function named 'query' but is undefined")
}

return query;
`)()(e);return n!==void 0?n:null}};function Cc(e,a){return Lc||(wc=new WeakMap,Lc=new ResizeObserver(n=>{for(var t of n){var c=wc.get(t.target);c&&c(t.target)}})),wc.set(e,a),Lc.observe(e),{destroy:()=>{wc.delete(e),Lc.unobserve(e)}}}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-tree-mode.svelte-10mlrw4 {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--jse-background-color, #fff);
  min-width: 0;
  min-height: 0;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-text-color, #4d4d4d);
  line-height: var(--jse-line-height, calc(1em + 4px));
}
.jse-tree-mode.svelte-10mlrw4 .jse-hidden-input-label:where(.svelte-10mlrw4) .jse-hidden-input:where(.svelte-10mlrw4) {
  position: fixed;
  top: -10px;
  left: -10px;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  outline: none;
}
.jse-tree-mode.no-main-menu.svelte-10mlrw4 {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-10mlrw4 .jse-search-box-container:where(.svelte-10mlrw4) {
  position: relative;
  height: 0;
  top: var(--jse-padding, 10px);
  margin-right: calc(var(--jse-padding, 10px) + 20px);
  margin-left: var(--jse-padding, 10px);
  text-align: right;
  z-index: 3;
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4) {
  flex: 1;
  overflow: auto;
  position: relative;
  padding: 2px;
  display: flex;
  flex-direction: column;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4) .jse-loading-space:where(.svelte-10mlrw4) {
  flex: 1;
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4) .jse-loading:where(.svelte-10mlrw4) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4) .jse-search-box-background:where(.svelte-10mlrw4) {
  border: 50px solid var(--jse-modal-background, #f5f5f5);
  margin: -2px;
  margin-bottom: 2px;
  display: inline-block;
}`);var yS=a2("<!> <!>",1),MS=a2('<div class="jse-search-box-background svelte-10mlrw4"></div>'),xS=a2('<div class="jse-search-box-container svelte-10mlrw4"><!></div> <div class="jse-contents svelte-10mlrw4"><!> <!></div> <!> <!> <!> <!>',1),LS=a2('<label class="jse-hidden-input-label svelte-10mlrw4"><input type="text" tabindex="-1" class="jse-hidden-input svelte-10mlrw4"/></label> <!>',1),wS=a2('<div class="jse-contents svelte-10mlrw4"><div class="jse-loading-space svelte-10mlrw4"></div> <div class="jse-loading svelte-10mlrw4">loading...</div></div>'),CS=a2('<div role="tree" tabindex="-1"><!> <!> <!></div> <!> <!>',1);function rs(e,a){f1(a,!1);var n=R(void 0,!0),t=t3("jsoneditor:TreeMode"),c=typeof window>"u";t("isSSR:",c);var l=wa(),o=wa(),{openAbsolutePopup:s,closeAbsolutePopup:i}=ga("absolute-popup"),f=R(void 0,!0),u=R(void 0,!0),d=R(void 0,!0),h=!1,m=wm(),v=b(a,"readOnly",9),p=b(a,"externalContent",9),g=b(a,"externalSelection",9),y=b(a,"history",9),L=b(a,"truncateTextSize",9),S=b(a,"mainMenuBar",9),j=b(a,"navigationBar",9),x=b(a,"escapeControlCharacters",9),E=b(a,"escapeUnicodeCharacters",9),P=b(a,"parser",9),I=b(a,"parseMemoizeOne",9),k=b(a,"validator",9),$=b(a,"validationParser",9),U=b(a,"pathParser",9),O=b(a,"indentation",9),c2=b(a,"onError",9),u2=b(a,"onChange",9),l2=b(a,"onChangeMode",9),S2=b(a,"onSelect",9),q2=b(a,"onUndo",9),f2=b(a,"onRedo",9),o2=b(a,"onRenderValue",9),d2=b(a,"onRenderMenu",9),P2=b(a,"onRenderContextMenu",9),Q2=b(a,"onClassName",9),y2=b(a,"onFocus",9),s2=b(a,"onBlur",9),z2=b(a,"onSortModal",9),o1=b(a,"onTransformModal",9),E1=b(a,"onJSONEditorModal",9),m2=!1,G=R(!1,!0),b2=R(void 0,!0);Ps({onMount:x3,onDestroy:ze,getWindow:()=>er(r(d)),hasFocus:()=>m2&&document.hasFocus()||gs(r(d)),onFocus:()=>{h=!0,y2()&&y2()()},onBlur:()=>{h=!1,s2()&&s2()()}});var H=R(void 0,!0),v2=R(void 0,!0),Q=void 0,O2=!1,t2=R(Io({json:r(H)}),!0),W=R(Ft(g())?g():void 0,!0);function b1(N){z(W,N)}x3(()=>{if(r(W)){var N=r1(r(W));z(t2,Ce(r(H),r(t2),N,Pc)),setTimeout(()=>h0(N))}});var i1,j2=R(void 0,!0),x1=R(void 0,!0),I2=R(void 0,!0),V2=R(void 0,!0),m1=R(!1,!0),F2=R(!1,!0);function O1(N){z(V2,(i1=N)?um(r(H),i1.items):void 0)}function w(N,V){return C.apply(this,arguments)}function C(){return(C=z1(function*(N,V){z(t2,Ce(r(H),r(t2),N,Pc));var g2=_0(V);yield e4(N,{element:g2})})).apply(this,arguments)}function _(){z(m1,!1),z(F2,!1),L1()}function D(N){t("select validation error",N),z(W,K1(N.path)),e4(N.path)}function n2(N){var V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Uo;t("expand"),z(t2,Ce(r(H),r(t2),N,V))}function C2(N,V){z(t2,Kd(r(H),r(t2),N,V)),r(W)&&(function(g2,B2){return Xe(r1(g2),B2)&&(r1(g2).length>B2.length||Y0(g2))})(r(W),N)&&z(W,void 0)}var A2=R(!1,!0),e2=R([],!0),r2=R(void 0,!0),s1=z8(Cm);function e1(N,V,g2,B2){X8(()=>{var R2;try{R2=s1(N,V,g2,B2)}catch(T2){R2=[{path:[],message:"Failed to validate: "+T2.message,severity:he.warning}]}H1(R2,r(e2))||(t("validationErrors changed:",R2),z(e2,R2),z(r2,(function(T2,w1){var C1;return w1.forEach(J1=>{C1=Mp(T2,C1,J1.path,(N4,r4)=>N2(N2({},r4),{},{validationError:J1}))}),w1.forEach(J1=>{for(var N4=J1.path;N4.length>0;)N4=Y1(N4),C1=Mp(T2,C1,N4,(r4,Z4)=>Z4.validationError?Z4:N2(N2({},Z4),{},{validationError:{isChildError:!0,path:N4,message:"Contains invalid data",severity:he.warning}}))}),C1})(N,r(e2))))},R2=>t("validationErrors updated in ".concat(R2," ms")))}function U2(){return t("validate"),Q?{parseError:Q,isRepairable:!1}:(e1(r(H),k(),P(),$()),f4(r(e2))?void 0:{validationErrors:r(e2)})}function J2(){return r(H)}function q1(){return r(t2)}function S4(){return r(W)}function E4(N){t("applyExternalContent",{updatedContent:N}),Rt(N)?(function(V){if(V!==void 0){var g2=!H1(r(H),V);if(t("update external json",{isChanged:g2,currentlyText:r(H)===void 0}),!!g2){var B2={documentState:r(t2),selection:r(W),json:r(H),text:r(v2),textIsRepaired:r(A2)};z(H,V),z(t2,X3(V,r(t2))),$1(r(H)),z(v2,void 0),z(A2,!1),Q=void 0,g4(r(H)),V1(B2)}}})(N.json):Ot(N)&&(function(V){if(!(V===void 0||Rt(p()))){var g2=V!==r(v2);if(t("update external text",{isChanged:g2}),!!g2){var B2={documentState:r(t2),selection:r(W),json:r(H),text:r(v2),textIsRepaired:r(A2)};try{z(H,I()(V)),z(t2,X3(r(H),r(t2))),$1(r(H)),z(v2,V),z(A2,!1),Q=void 0}catch(R2){try{z(H,I()(re(V))),z(t2,X3(r(H),r(t2))),$1(r(H)),z(v2,V),z(A2,!0),Q=void 0,g4(r(H))}catch{z(H,void 0),z(t2,void 0),z(v2,p().text),z(A2,!1),Q=r(v2)!==void 0&&r(v2)!==""?un(r(v2),R2.message||String(R2)):void 0}}g4(r(H)),V1(B2)}}})(N.text)}function $1(N){O2||(O2=!0,z(t2,l8(N,r(t2),[])))}function g4(N){r(W)&&(d3(N,Qa(r(W)))&&d3(N,r1(r(W)))||(t("clearing selection: path does not exist anymore",r(W)),z(W,$8(N,r(t2)))))}function V1(N){if(N.json!==void 0||N.text!==void 0){var V=r(H)!==void 0&&N.json!==void 0;y().add({type:"tree",undo:{patch:V?[{op:"replace",path:"",value:N.json}]:void 0,json:N.json,text:N.text,documentState:N.documentState,textIsRepaired:N.textIsRepaired,selection:We(N.selection),sortedColumn:void 0},redo:{patch:V?[{op:"replace",path:"",value:r(H)}]:void 0,json:r(H),text:r(v2),documentState:r(t2),textIsRepaired:r(A2),selection:We(r(W)),sortedColumn:void 0}})}}function Q1(N,V){var g2;if(t("patch",N,V),r(H)===void 0)throw new Error("Cannot apply patch: no JSON");var B2=r(H),R2={json:void 0,text:r(v2),documentState:r(t2),selection:We(r(W)),textIsRepaired:r(A2),sortedColumn:void 0},T2=fm(r(H),N),w1=Zv(r(H),r(t2),N),C1=(g2=vn(r(H),N))!==null&&g2!==void 0?g2:r(W),J1=typeof V=="function"?V(w1.json,w1.documentState,C1):void 0;return z(H,J1?.json!==void 0?J1.json:w1.json),z(t2,J1?.state!==void 0?J1.state:w1.documentState),z(W,J1?.selection!==void 0?J1.selection:C1),z(v2,void 0),z(A2,!1),z(x1,void 0),z(I2,void 0),Q=void 0,g4(r(H)),y().add({type:"tree",undo:N2({patch:T2},R2),redo:{patch:N,json:void 0,text:r(v2),documentState:r(t2),selection:We(r(W)),sortedColumn:void 0,textIsRepaired:r(A2)}}),{json:r(H),previousJson:B2,undo:T2,redo:N}}function p4(){!v()&&r(W)&&z(W,Ns(r1(r(W))))}function p1(){if(!v()&&r(W)){var N=r1(r(W)),V=W2(r(H),N);M0(V)?(function(g2,B2){t("openJSONEditorModal",{path:g2,value:B2}),m2=!0,E1()({content:{json:B2},path:g2,onPatch:r(k4).onPatch,onClose:()=>{m2=!1,setTimeout(L1)}})})(N,V):z(W,Jc(N))}}function z4(){if(!v()&&h4(r(W))){var N=r1(r(W)),V=c1(N),g2=W2(r(H),N),B2=!Je(r(H),r(t2),N),R2=B2?String(g2):wn(String(g2),P());t("handleToggleEnforceString",{enforceString:B2,value:g2,updatedValue:R2}),p2([{op:"replace",path:V,value:R2}],(T2,w1)=>({state:u5(r(H),w1,N,{type:"value",enforceString:B2})}))}}function S1(){return r(A2)&&r(H)!==void 0&&_2(r(H)),r(H)!==void 0?{json:r(H)}:{text:r(v2)||""}}function X2(){return X1.apply(this,arguments)}function X1(){return X1=z1(function*(){var N=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];yield Om({json:r(H),selection:r(W),indentation:N?O():void 0,readOnly:v(),parser:P(),onPatch:p2})}),X1.apply(this,arguments)}function D1(){return W4.apply(this,arguments)}function W4(){return W4=z1(function*(){var N=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];r(H)!==void 0&&(yield Rm({json:r(H),selection:r(W),indentation:N?O():void 0,parser:P()}))}),W4.apply(this,arguments)}function a0(N){var V;N.preventDefault(),c0((V=N.clipboardData)===null||V===void 0?void 0:V.getData("text/plain"))}function Y4(){return L0.apply(this,arguments)}function L0(){return(L0=z1(function*(){try{c0(yield navigator.clipboard.readText())}catch(N){console.error(N),z(G,!0)}})).apply(this,arguments)}function c0(N){N!==void 0&&qm({clipboardText:N,json:r(H),selection:r(W),readOnly:v(),parser:P(),onPatch:p2,onChangeText:B,onPasteMultilineText:G4,openRepairModal:m0})}function m0(N,V){z(b2,{text:N,onParse:g2=>Zt(g2,B2=>Yt(B2,P())),onRepair:Fv,onApply:V,onClose:L1})}function N0(){$m({json:r(H),text:r(v2),selection:r(W),keepSelection:!1,readOnly:v(),onChange:u2(),onPatch:p2})}function f0(){!v()&&r(H)!==void 0&&r(W)&&K8&&!f4(r1(r(W)))&&(t("duplicate",{selection:r(W)}),p2(lm(r(H),ma(r(H),r(W)))))}function D0(){v()||!r(W)||!Q4(r(W))&&!h4(r(W))||f4(r1(r(W)))||(t("extract",{selection:r(W)}),p2(om(r(H),r(W)),(N,V)=>{if(M0(N))return{state:go(N,V,[])}}))}function A0(N){r5({insertType:N,selectInside:!0,initialValue:void 0,json:r(H),selection:r(W),readOnly:v(),parser:P(),onPatch:p2,onReplaceJson:_2})}function O0(N){n3(r(W))&&z(W,K1(r(W).path)),r(W)||z(W,$8(r(H),r(t2))),A0(N)}function u0(N){if(!v()&&r(W))if(zc(r(W)))try{var V=Qa(r(W)),g2=W2(r(H),V),B2=(function(T2,w1,C1){if(w1==="array"){if(Array.isArray(T2))return T2;if(d4(T2))return Od(T2);if(typeof T2=="string")try{var J1=C1.parse(T2);if(Array.isArray(J1))return J1;if(d4(J1))return Od(J1)}catch{return[T2]}return[T2]}if(w1==="object"){if(Array.isArray(T2))return Td(T2);if(d4(T2))return T2;if(typeof T2=="string")try{var N4=C1.parse(T2);if(d4(N4))return N4;if(Array.isArray(N4))return Td(N4)}catch{return{value:T2}}return{value:T2}}if(w1==="value")return M0(T2)?C1.stringify(T2):T2;throw new Error("Cannot convert ".concat(ps(T2,C1)," to ").concat(w1))})(g2,N,P());if(B2===g2)return;var R2=[{op:"replace",path:c1(V),value:B2}];t("handleConvert",{selection:r(W),path:V,type:N,operations:R2}),p2(R2,(T2,w1)=>({state:r(W)?l8(T2,w1,r1(r(W))):r(t2)}))}catch(T2){c2()(T2)}else c2()(new Error("Cannot convert current selection to ".concat(N)))}function x2(){if(r(W)){var N=Zd(r(H),r(t2),r(W),!1),V=Y1(r1(r(W)));N&&!f4(r1(N))&&H1(V,Y1(r1(N)))?z(W,k6(r1(N))):z(W,T6(V)),t("insert before",{selection:r(W),selectionBefore:N,parentPath:V}),t0(),l4()}}function B1(){if(r(W)){var N=pa(r(H),r(W));t("insert after",N),z(W,k6(N)),t0(),l4()}}function w4(N){return V4.apply(this,arguments)}function V4(){return(V4=z1(function*(N){yield Dm({char:N,selectInside:!0,json:r(H),selection:r(W),readOnly:v(),parser:P(),onPatch:p2,onReplaceJson:_2,onSelect:b1})})).apply(this,arguments)}function w0(){if(!v()&&y().canUndo){var N=y().undo();if(Wc(N)){var V={json:r(H),text:r(v2)};z(H,N.undo.patch?O3(r(H),N.undo.patch):N.undo.json),z(t2,N.undo.documentState),z(W,N.undo.selection),z(v2,N.undo.text),z(A2,N.undo.textIsRepaired),Q=void 0,t("undo",{item:N,json:r(H),documentState:r(t2),selection:r(W)}),K(V,N.undo.patch&&N.redo.patch?{json:r(H),previousJson:V.json,redo:N.undo.patch,undo:N.redo.patch}:void 0),L1(),r(W)&&e4(r1(r(W)),{scrollToWhenVisible:!1})}else q2()(N)}}function W0(){if(!v()&&y().canRedo){var N=y().redo();if(Wc(N)){var V={json:r(H),text:r(v2)};z(H,N.redo.patch?O3(r(H),N.redo.patch):N.redo.json),z(t2,N.redo.documentState),z(W,N.redo.selection),z(v2,N.redo.text),z(A2,N.redo.textIsRepaired),Q=void 0,t("redo",{item:N,json:r(H),documentState:r(t2),selection:r(W)}),K(V,N.undo.patch&&N.redo.patch?{json:r(H),previousJson:V.json,redo:N.redo.patch,undo:N.undo.patch}:void 0),L1(),r(W)&&e4(r1(r(W)),{scrollToWhenVisible:!1})}else f2()(N)}}function G1(N){var V;v()||r(H)===void 0||(m2=!0,z2()({id:l,json:r(H),rootPath:N,onSort:(V=z1(function*(g2){var{operations:B2}=g2;t("onSort",N,B2),p2(B2,(R2,T2)=>({state:go(R2,T2,N),selection:K1(N)}))}),function(g2){return V.apply(this,arguments)}),onClose:()=>{m2=!1,setTimeout(L1)}}))}function R0(){r(W)&&G1(ap(r(H),r(W)))}function i3(){G1([])}function d0(N){if(r(H)!==void 0){var{id:V,onTransform:g2,onClose:B2}=N,R2=N.rootPath||[];m2=!0,o1()({id:V||o,json:r(H),rootPath:R2,onTransform:T2=>{g2?g2({operations:T2,json:r(H),transformedJson:O3(r(H),T2)}):(t("onTransform",R2,T2),p2(T2,(w1,C1)=>({state:go(w1,C1,R2),selection:K1(R2)})))},onClose:()=>{m2=!1,setTimeout(L1),B2&&B2()}})}}function r3(){r(W)&&d0({rootPath:ap(r(H),r(W))})}function J4(){d0({rootPath:[]})}function e4(N){return P1.apply(this,arguments)}function P1(){return P1=z1(function*(N){var{scrollToWhenVisible:V=!0,element:g2}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};z(t2,Ce(r(H),r(t2),N,Pc));var B2=g2??B4(N);if(t("scrollTo",{path:N,elem:B2,refContents:r(f)}),!B2||!r(f))return Promise.resolve();var R2=r(f).getBoundingClientRect(),T2=B2.getBoundingClientRect();if(!V&&T2.bottom>R2.top&&T2.top<R2.bottom)return Promise.resolve();var w1=-R2.height/4;return new Promise(C1=>{m(B2,{container:r(f),offset:w1,duration:300,callback:()=>C1()})})}),P1.apply(this,arguments)}function B4(N){var V,g2;return t0(),(V=(g2=r(f))===null||g2===void 0?void 0:g2.querySelector('div[data-path="'.concat(Ec(N),'"]')))!==null&&V!==void 0?V:void 0}function _0(N){var V,g2;return t0(),(V=(g2=r(f))===null||g2===void 0?void 0:g2.querySelector('span[data-search-result-index="'.concat(N,'"]')))!==null&&V!==void 0?V:void 0}function h0(N){var V=B4(N);if(V&&r(f)){var g2=r(f).getBoundingClientRect(),B2=V.getBoundingClientRect(),R2=M0(W2(r(H),N))?20:B2.height;B2.top<g2.top+20?m(V,{container:r(f),offset:-20,duration:0}):B2.top+R2>g2.bottom-20&&m(V,{container:r(f),offset:-(g2.height-R2-20),duration:0})}}function K(N,V){if(N.json!==void 0||N?.text!==void 0){if(r(v2)!==void 0){var g2,B2={text:r(v2),json:void 0};(g2=u2())===null||g2===void 0||g2(B2,N,{contentErrors:U2(),patchResult:V})}else if(r(H)!==void 0){var R2,T2={text:void 0,json:r(H)};(R2=u2())===null||R2===void 0||R2(T2,N,{contentErrors:U2(),patchResult:V})}}}function p2(N,V){t("handlePatch",N,V);var g2={json:r(H),text:r(v2)},B2=Q1(N,V);return K(g2,B2),B2}function _2(N,V){var g2={json:r(H),text:r(v2)},B2={documentState:r(t2),selection:r(W),json:r(H),text:r(v2),textIsRepaired:r(A2)},R2=Ce(r(H),X3(N,r(t2)),[],Nt),T2=typeof V=="function"?V(N,R2,r(W)):void 0;z(H,T2?.json!==void 0?T2.json:N),z(t2,T2?.state!==void 0?T2.state:R2),z(W,T2?.selection!==void 0?T2.selection:r(W)),z(v2,void 0),z(A2,!1),Q=void 0,g4(r(H)),V1(B2),K(g2,void 0)}function B(N,V){t("handleChangeText");var g2={json:r(H),text:r(v2)},B2={documentState:r(t2),selection:r(W),json:r(H),text:r(v2),textIsRepaired:r(A2)};try{z(H,I()(N)),z(t2,Ce(r(H),X3(r(H),r(t2)),[],Nt)),z(v2,void 0),z(A2,!1),Q=void 0}catch(T2){try{z(H,I()(re(N))),z(t2,Ce(r(H),X3(r(H),r(t2)),[],Nt)),z(v2,N),z(A2,!0),Q=void 0}catch{z(H,void 0),z(t2,Io({json:r(H),expand:Nt})),z(v2,N),z(A2,!1),Q=r(v2)!==""?un(r(v2),T2.message||String(T2)):void 0}}if(typeof V=="function"){var R2=V(r(H),r(t2),r(W));z(H,R2?.json!==void 0?R2.json:r(H)),z(t2,R2?.state!==void 0?R2.state:r(t2)),z(W,R2?.selection!==void 0?R2.selection:r(W))}g4(r(H)),V1(B2),K(g2,void 0)}function Z(N,V){var g2=arguments.length>2&&arguments[2]!==void 0&&arguments[2];t("handleExpand",{path:N,expanded:V,recursive:g2}),V?n2(N,g2?ks:Uo):C2(N,g2),L1()}function M2(){Z([],!0,!0)}function D2(){Z([],!1,!0)}function a1(N){t("openFind",{findAndReplace:N}),z(m1,!1),z(F2,!1),t0(),z(m1,!0),z(F2,N)}function t1(N,V){t("handleExpandSection",N,V),z(t2,(function(g2,B2,R2,T2){return pn(g2,B2,R2,(w1,C1)=>{if(!a3(C1))return C1;var J1=Qv(C1.visibleSections.concat(T2));return N2(N2({},C1),{},{visibleSections:J1})})})(r(H),r(t2),N,V))}function h1(N){t("pasted json as text",N),z(x1,N)}function G4(N){t("pasted multiline text",{pastedText:N}),z(I2,N)}function a4(N){var V,{anchor:g2,left:B2,top:R2,width:T2,height:w1,offsetTop:C1,offsetLeft:J1,showTip:N4}=N,r4=(function(I4){var{json:z0,documentState:x4,selection:g1,readOnly:i4,onEditKey:N1,onEditValue:l1,onToggleEnforceString:R1,onCut:C0,onCopy:U4,onPaste:b0,onRemove:P0,onDuplicate:f3,onExtract:a6,onInsertBefore:V3,onInsert:be,onConvert:Te,onInsertAfter:ye,onSort:L3,onTransform:u3}=I4,J3=z0!==void 0,n6=!!g1,G3=!!g1&&f4(r1(g1)),A4=g1?W2(z0,r1(g1)):void 0,B0=Array.isArray(A4)?"Edit array":d4(A4)?"Edit object":"Edit value",I0=J3&&(Q4(g1)||n3(g1)||h4(g1)),ba=g1&&!G3?W2(z0,Y1(r1(g1))):void 0,f8=!i4&&J3&&Vc(g1)&&!G3&&!Array.isArray(ba),ya=!i4&&J3&&g1!==void 0&&Vc(g1),jn=ya&&!M0(A4),u8=!i4&&I0,Sn=I0,b5=!i4&&n6,y5=!i4&&J3&&I0&&!G3,M5=!i4&&J3&&g1!==void 0&&(Q4(g1)||h4(g1))&&!G3,Oe=I0,Ma=Oe?"Convert to:":"Insert:",U0=!i4&&(Y0(g1)&&Array.isArray(A4)||U3(g1)&&Array.isArray(ba)),ne=!i4&&(Oe?zc(g1)&&!d4(A4):n6),kn=!i4&&(Oe?zc(g1)&&!Array.isArray(A4):n6),Nn=!i4&&(Oe?zc(g1)&&M0(A4):n6),xa=g1!==void 0&&Je(z0,x4,r1(g1));function v3(An){I0?An!=="structure"&&Te(An):be(An)}return[{type:"row",items:[{type:"button",onClick:()=>N1(),icon:Sa,text:"Edit key",title:"Edit the key (Double-click on the key)",disabled:!f8},{type:"dropdown-button",main:{type:"button",onClick:()=>l1(),icon:Sa,text:B0,title:"Edit the value (Double-click on the value)",disabled:!ya},width:"11em",items:[{type:"button",icon:Sa,text:B0,title:"Edit the value (Double-click on the value)",onClick:()=>l1(),disabled:!ya},{type:"button",icon:xa?Y5:al,text:"Enforce string",title:"Enforce keeping the value as string when it contains a numeric value",onClick:()=>R1(),disabled:!jn}]}]},{type:"separator"},{type:"row",items:[{type:"dropdown-button",main:{type:"button",onClick:()=>C0(!0),icon:ka,text:"Cut",title:"Cut selected contents, formatted with indentation (Ctrl+X)",disabled:!u8},width:"10em",items:[{type:"button",icon:ka,text:"Cut formatted",title:"Cut selected contents, formatted with indentation (Ctrl+X)",onClick:()=>C0(!0),disabled:!u8},{type:"button",icon:ka,text:"Cut compacted",title:"Cut selected contents, without indentation (Ctrl+Shift+X)",onClick:()=>C0(!1),disabled:!u8}]},{type:"dropdown-button",main:{type:"button",onClick:()=>U4(!0),icon:l6,text:"Copy",title:"Copy selected contents, formatted with indentation (Ctrl+C)",disabled:!Sn},width:"12em",items:[{type:"button",icon:l6,text:"Copy formatted",title:"Copy selected contents, formatted with indentation (Ctrl+C)",onClick:()=>U4(!0),disabled:!Sn},{type:"button",icon:l6,text:"Copy compacted",title:"Copy selected contents, without indentation (Ctrl+Shift+C)",onClick:()=>U4(!1),disabled:!Sn}]},{type:"button",onClick:()=>b0(),icon:K5,text:"Paste",title:"Paste clipboard contents (Ctrl+V)",disabled:!b5}]},{type:"separator"},{type:"row",items:[{type:"column",items:[{type:"button",onClick:()=>f3(),icon:X5,text:"Duplicate",title:"Duplicate selected contents (Ctrl+D)",disabled:!y5},{type:"button",onClick:()=>a6(),icon:f9,text:"Extract",title:"Extract selected contents",disabled:!M5},{type:"button",onClick:()=>L3(),icon:Jn,text:"Sort",title:"Sort array or object contents",disabled:i4||!I0},{type:"button",onClick:()=>u3(),icon:Un,text:"Transform",title:"Transform array or object contents (filter, sort, project)",disabled:i4||!I0},{type:"button",onClick:()=>P0(),icon:br,text:"Remove",title:"Remove selected contents (Delete)",disabled:i4||!I0}]},{type:"column",items:[{type:"label",text:Ma},{type:"button",onClick:()=>v3("structure"),icon:Oe?Gn:Na,text:"Structure",title:Ma+" structure like the first item in the array",disabled:!U0},{type:"button",onClick:()=>v3("object"),icon:Oe?Gn:Na,text:"Object",title:Ma+" object",disabled:!ne},{type:"button",onClick:()=>v3("array"),icon:Oe?Gn:Na,text:"Array",title:Ma+" array",disabled:!kn},{type:"button",onClick:()=>v3("value"),icon:Oe?Gn:Na,text:"Value",title:Ma+" value",disabled:!Nn}]}]},{type:"separator"},{type:"row",items:[{type:"button",onClick:()=>V3(),icon:g9,text:"Insert before",title:"Select area before current entry to insert or paste contents",disabled:i4||!I0||G3},{type:"button",onClick:()=>ye(),icon:u9,text:"Insert after",title:"Select area after current entry to insert or paste contents",disabled:i4||!I0||G3}]}]})({json:r(H),documentState:r(t2),selection:r(W),readOnly:v(),onEditKey:p4,onEditValue:p1,onToggleEnforceString:z4,onCut:X2,onCopy:D1,onPaste:Y4,onRemove:N0,onDuplicate:f0,onExtract:D0,onInsertBefore:x2,onInsert:O0,onInsertAfter:B1,onConvert:u0,onSort:R0,onTransform:r3}),Z4=(V=P2()(r4))!==null&&V!==void 0?V:r4;if(Z4!==!1){var k1={left:B2,top:R2,offsetTop:C1,offsetLeft:J1,width:T2,height:w1,anchor:g2,closeOnOuterClick:!0,onClose:()=>{m2=!1,L1()}};m2=!0;var g0=s(Bm,{tip:N4?"Tip: you can open this context menu via right-click or with Ctrl+Q":void 0,items:Z4,onRequestClose:()=>i(g0)},k1)}}function l4(N){if(!e3(r(W)))if(N&&(N.stopPropagation(),N.preventDefault()),N&&N.type==="contextmenu"&&N.target!==r(u))a4({left:N.clientX,top:N.clientY,width:L6,height:x6,showTip:!1});else{var V,g2=(V=r(f))===null||V===void 0?void 0:V.querySelector(".jse-context-menu-pointer.jse-selected");if(g2)a4({anchor:g2,offsetTop:2,width:L6,height:x6,showTip:!1});else{var B2,R2=(B2=r(f))===null||B2===void 0?void 0:B2.getBoundingClientRect();R2&&a4({top:R2.top+2,left:R2.left+2,width:L6,height:x6,showTip:!1})}}}function T1(N){a4({anchor:Gv(N.target,"BUTTON"),offsetTop:0,width:L6,height:x6,showTip:!0})}function n4(){return V0.apply(this,arguments)}function V0(){return(V0=z1(function*(){if(t("apply pasted json",r(x1)),r(x1)){var{onPasteAsJson:N}=r(x1);z(x1,void 0),N(),setTimeout(L1)}})).apply(this,arguments)}function y1(){return M4.apply(this,arguments)}function M4(){return(M4=z1(function*(){t("apply pasted multiline text",r(I2)),r(I2)&&(c0(JSON.stringify(r(I2))),setTimeout(L1))})).apply(this,arguments)}function o4(){t("clear pasted json"),z(x1,void 0),L1()}function b4(){t("clear pasted multiline text"),z(I2,void 0),L1()}function n0(){l2()(H0.text)}function P4(N){z(W,N),L1(),e4(r1(N))}function L1(){t("focus"),r(u)&&(r(u).focus(),r(u).select())}function F0(N){return(function(V,g2,B2){var R2=Y1(B2),T2=[U1(B2)],w1=W2(V,R2),C1=w1?ho(w1,g2,T2):void 0;return C1?K1(R2.concat(C1)):k6(B2)})(r(H),r(t2),N)}function E0(N){r(n)&&r(n).onDrag(N)}function J0(){r(n)&&r(n).onDragEnd()}var k4=R(void 0,!0);Y(()=>r(W),()=>{var N;N=r(W),H1(N,g())||(t("onSelect",N),S2()(N))}),Y(()=>(M(x()),M(E())),()=>{z(j2,ms({escapeControlCharacters:x(),escapeUnicodeCharacters:E()}))}),Y(()=>r(m1),()=>{(function(N){r(f)&&N&&r(f).scrollTop===0&&(Y3(f,r(f).style.overflowAnchor="none"),Y3(f,r(f).scrollTop+=kt),setTimeout(()=>{r(f)&&Y3(f,r(f).style.overflowAnchor="")}))})(r(m1))}),Y(()=>M(p()),()=>{E4(p())}),Y(()=>M(g()),()=>{(function(N){H1(r(W),N)||(t("applyExternalSelection",{selection:r(W),externalSelection:N}),Ft(N)&&z(W,N))})(g())}),Y(()=>(r(H),M(k()),M(P()),M($())),()=>{e1(r(H),k(),P(),$())}),Y(()=>(r(f),yp),()=>{z(n,r(f)?yp(r(f)):void 0)}),Y(()=>(M(v()),M(L()),M(P()),r(j2),M(o2()),M(Q2())),()=>{z(k4,{mode:H0.tree,readOnly:v(),truncateTextSize:L(),parser:P(),normalization:r(j2),getJson:J2,getDocumentState:q1,getSelection:S4,findElement:B4,findNextInside:F0,focus:L1,onPatch:p2,onInsert:A0,onExpand:Z,onSelect:b1,onFind:a1,onExpandSection:t1,onPasteJson:h1,onRenderValue:o2(),onContextMenu:a4,onClassName:Q2()||(()=>{}),onDrag:E0,onDragEnd:J0})}),Y(()=>r(k4),()=>{t("context changed",r(k4))}),L4();var T4={expand:n2,collapse:C2,validate:U2,getJson:J2,patch:Q1,acceptAutoRepair:S1,openTransformModal:d0,scrollTo:e4,findElement:B4,findSearchResult:_0,focus:L1};_1(!0);var q0=CS();w2("mousedown",j6,function(N){!Cn(N.target,V=>V===r(d))&&e3(r(W))&&(t("click outside the editor, exit edit mode"),z(W,We(r(W))),h&&r(u)&&(r(u).focus(),r(u).blur()),t("blur (outside editor)"),r(u)&&r(u).blur())});var A,X=Y2(q0),L2=q(X),$2=N=>{(function(V,g2){f1(g2,!1);var B2=R(void 0,!0),R2=R(void 0,!0),T2=R(void 0,!0),w1=b(g2,"json",9),C1=b(g2,"selection",9),J1=b(g2,"readOnly",9),N4=b(g2,"showSearch",13,!1),r4=b(g2,"history",9),Z4=b(g2,"onExpandAll",9),k1=b(g2,"onCollapseAll",9),g0=b(g2,"onUndo",9),I4=b(g2,"onRedo",9),z0=b(g2,"onSort",9),x4=b(g2,"onTransform",9),g1=b(g2,"onContextMenu",9),i4=b(g2,"onCopy",9),N1=b(g2,"onRenderMenu",9);function l1(){N4(!N4())}var R1=R(void 0,!0),C0=R(void 0,!0),U4=R(void 0,!0),b0=R(void 0,!0);Y(()=>M(w1()),()=>{z(B2,w1()!==void 0)}),Y(()=>(r(B2),M(C1()),h4),()=>{z(R2,r(B2)&&(Q4(C1())||n3(C1())||h4(C1())))}),Y(()=>(M(Z4()),M(w1())),()=>{z(R1,{type:"button",icon:Nm,title:"Expand all",className:"jse-expand-all",onClick:Z4(),disabled:!M0(w1())})}),Y(()=>(M(k1()),M(w1())),()=>{z(C0,{type:"button",icon:Am,title:"Collapse all",className:"jse-collapse-all",onClick:k1(),disabled:!M0(w1())})}),Y(()=>M(w1()),()=>{z(U4,{type:"button",icon:Hn,title:"Search (Ctrl+F)",className:"jse-search",onClick:l1,disabled:w1()===void 0})}),Y(()=>(M(J1()),r(R1),r(C0),M(z0()),M(w1()),M(x4()),r(U4),M(g1()),M(g0()),M(r4()),M(I4()),M(i4()),r(R2)),()=>{z(b0,J1()?[r(R1),r(C0),{type:"separator"},{type:"button",icon:l6,title:"Copy (Ctrl+C)",className:"jse-copy",onClick:i4(),disabled:!r(R2)},{type:"separator"},r(U4),{type:"space"}]:[r(R1),r(C0),{type:"separator"},{type:"button",icon:Jn,title:"Sort",className:"jse-sort",onClick:z0(),disabled:J1()||w1()===void 0},{type:"button",icon:Un,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:x4(),disabled:J1()||w1()===void 0},r(U4),{type:"button",icon:Q5,title:ys,className:"jse-contextmenu",onClick:g1()},{type:"separator"},{type:"button",icon:xr,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:g0(),disabled:!r4().canUndo},{type:"button",icon:Mr,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:I4(),disabled:!r4().canRedo},{type:"space"}])}),Y(()=>(M(N1()),r(b0)),()=>{z(T2,N1()(r(b0))||r(b0))}),L4(),_1(!0),z5(V,{get items(){return r(T2)}}),u1()})(N,{get json(){return r(H)},get selection(){return r(W)},get readOnly(){return v()},get history(){return y()},onExpandAll:M2,onCollapseAll:D2,onUndo:w0,onRedo:W0,onSort:i3,onTransform:J4,onContextMenu:T1,onCopy:D1,get onRenderMenu(){return d2()},get showSearch(){return r(m1)},set showSearch(V){z(m1,V)},$$legacy:!0})};i2(L2,N=>{S()&&N($2)});var h2=J(L2,2),H2=N=>{Jj(N,{get json(){return r(H)},get selection(){return r(W)},onSelect:P4,get onError(){return c2()},get pathParser(){return U()}})};i2(h2,N=>{j()&&N(H2)});var K2=J(h2,2),G2=N=>{var V=LS(),g2=Y2(V),B2=q(g2);B2.readOnly=!0,r0(B2,C1=>z(u,C1),()=>r(u));var R2=J(g2,2),T2=C1=>{var J1=W1(),N4=Y2(J1),r4=k1=>{(function(g0,I4){function z0(R1){R1.stopPropagation(),I4.onCreateObject()}function x4(R1){R1.stopPropagation(),I4.onCreateArray()}f1(I4,!0);var g1=Tj();g1.__click=()=>I4.onClick();var i4=J(q(g1),2),N1=J(q(i4),2),l1=R1=>{var C0=Pj(),U4=J(Y2(C0),2);j4(U4,"title","Create an empty JSON object (press '{')"),U4.__click=z0;var b0=J(U4,2);j4(b0,"title","Create an empty JSON array (press '[')"),b0.__click=x4,T(R1,C0)};i2(N1,R1=>{I4.readOnly||R1(l1)}),T(g0,g1),u1()})(k1,{get readOnly(){return v()},onCreateObject:()=>{L1(),w4("{")},onCreateArray:()=>{L1(),w4("[")},onClick:()=>{L1()}})},Z4=k1=>{var g0=yS(),I4=Y2(g0),z0=Z2(()=>v()?[]:[{icon:Wn,text:"Repair manually",title:'Open the document in "code" mode and repair it manually',onClick:n0}]);ae(I4,{type:"error",message:"The loaded JSON document is invalid and could not be repaired automatically.",get actions(){return r(z0)}}),Fm(J(I4,2),{get text(){return r(v2)},get json(){return r(H)},get indentation(){return O()},get parser(){return P()}}),T(k1,g0)};i2(N4,k1=>{r(v2)===""||r(v2)===void 0?k1(r4):k1(Z4,!1)}),T(C1,J1)},w1=C1=>{var J1=xS(),N4=Y2(J1);Em(q(N4),{get json(){return r(H)},get documentState(){return r(t2)},get parser(){return P()},get showSearch(){return r(m1)},get showReplace(){return r(F2)},get readOnly(){return v()},columns:void 0,onSearch:O1,onFocus:w,onPatch:p2,onClose:_});var r4=J(N4,2);j4(r4,"data-jsoneditor-scrollable-contents",!0);var Z4=q(r4),k1=N1=>{T(N1,MS())};i2(Z4,N1=>{r(m1)&&N1(k1)}),Yo(J(Z4,2),{get value(){return r(H)},pointer:"",get state(){return r(t2)},get validationErrors(){return r(r2)},get searchResults(){return r(V2)},get selection(){return r(W)},get context(){return r(k4)},get onDragSelectionStart(){return $0}}),r0(r4,N1=>z(f,N1),()=>r(f));var g0=J(r4,2),I4=N1=>{var l1=Z2(()=>(r(x1),F(()=>"You pasted a JSON ".concat(Array.isArray(r(x1).contents)?"array":"object"," as text")))),R1=Z2(()=>[{icon:c6,text:"Paste as JSON instead",title:"Replace the value with the pasted JSON",onMouseDown:n4},{text:"Leave as is",title:"Keep the JSON embedded in the value",onClick:o4}]);ae(N1,{type:"info",get message(){return r(l1)},get actions(){return r(R1)}})};i2(g0,N1=>{r(x1)&&N1(I4)});var z0=J(g0,2),x4=N1=>{var l1=Z2(()=>[{icon:c6,text:"Paste as string instead",title:"Paste the clipboard data as a single string value instead of an array",onClick:y1},{text:"Leave as is",title:"Keep the pasted array",onClick:b4}]);ae(N1,{type:"info",message:"Multiline text was pasted as array",get actions(){return r(l1)}})};i2(z0,N1=>{r(I2)&&N1(x4)});var g1=J(z0,2),i4=N1=>{var l1=Z2(()=>v()?[]:[{icon:yr,text:"Ok",title:"Accept the repaired document",onClick:S1},{icon:Wn,text:"Repair manually instead",title:"Leave the document unchanged and repair it manually instead",onClick:n0}]);ae(N1,{type:"success",message:"The loaded JSON document was invalid but is successfully repaired.",get actions(){return r(l1)},onClose:L1})};i2(g1,N1=>{r(A2)&&N1(i4)}),Ts(J(g1,2),{get validationErrors(){return r(e2)},selectError:D}),T(C1,J1)};i2(R2,C1=>{r(H)===void 0?C1(T2):C1(w1,!1)}),w2("paste",B2,a0),T(N,V)},I1=N=>{T(N,wS())};i2(K2,N=>{c?N(I1,!1):N(G2)}),r0(X,N=>z(d,N),()=>r(d));var s4=J(X,2),t4=N=>{jm(N,{onClose:()=>z(G,!1)})};i2(s4,N=>{r(G)&&N(t4)});var l0=J(s4,2),G0=N=>{Sm(N,ua(()=>r(b2),{onClose:()=>{var V;(V=r(b2))===null||V===void 0||V.onClose(),z(b2,void 0)}}))};return i2(l0,N=>{r(b2)&&N(G0)}),E2(()=>A=A1(X,1,"jse-tree-mode svelte-10mlrw4",null,A,{"no-main-menu":!S()})),w2("keydown",X,function(N){var V=E6(N),g2=N.shiftKey;if(t("keydown",{combo:V,key:N.key}),V==="Ctrl+X"&&(N.preventDefault(),X2(!0)),V==="Ctrl+Shift+X"&&(N.preventDefault(),X2(!1)),V==="Ctrl+C"&&(N.preventDefault(),D1(!0)),V==="Ctrl+Shift+C"&&(N.preventDefault(),D1(!1)),V==="Ctrl+D"&&(N.preventDefault(),f0()),V!=="Delete"&&V!=="Backspace"||(N.preventDefault(),N0()),V==="Insert"&&(N.preventDefault(),A0("structure")),V==="Ctrl+A"&&(N.preventDefault(),z(W,K1([]))),V==="Ctrl+Q"&&l4(N),V==="ArrowUp"||V==="Shift+ArrowUp"){N.preventDefault();var B2=r(W)?Zd(r(H),r(t2),r(W),g2)||r(W):$8(r(H),r(t2));z(W,B2),h0(r1(B2))}if(V==="ArrowDown"||V==="Shift+ArrowDown"){N.preventDefault();var R2=r(W)?(function(r4,Z4,k1){var g0=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(k1){var I4=g0?r1(k1):pa(r4,k1),z0=M0(W2(r4,I4))?Kd(r4,Z4,I4,!0):Z4,x4=ho(r4,Z4,I4),g1=ho(r4,z0,I4);if(g0)return Y0(k1)?x4!==void 0?k3(x4,x4):void 0:U3(k1)?g1!==void 0?k3(g1,g1):void 0:g1!==void 0?k3(Qa(k1),g1):void 0;if(U3(k1))return g1!==void 0?K1(g1):void 0;if(Y0(k1)||h4(k1))return x4!==void 0?K1(x4):void 0;if(n3(k1)){if(x4===void 0||x4.length===0)return;var i4=Y1(x4),N1=W2(r4,i4);return Array.isArray(N1)?K1(x4):P6(x4)}return Q4(k1)?g1!==void 0?K1(g1):x4!==void 0?K1(x4):void 0:void 0}})(r(H),r(t2),r(W),g2)||r(W):$8(r(H),r(t2));z(W,R2),h0(r1(R2))}if(V==="ArrowLeft"||V==="Shift+ArrowLeft"){N.preventDefault();var T2=r(W)?(function(r4,Z4,k1){var g0=arguments.length>3&&arguments[3]!==void 0&&arguments[3],I4=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4];if(k1){var{caret:z0,previous:x4}=ep(r4,Z4,k1,I4);if(g0)return Q4(k1)?void 0:k3(k1.path,k1.path);if(z0&&x4)return Ho(x4);var g1=Y1(r1(k1)),i4=W2(r4,g1);return h4(k1)&&Array.isArray(i4)?k3(k1.path,k1.path):Q4(k1)&&!Array.isArray(i4)?P6(k1.focusPath):void 0}})(r(H),r(t2),r(W),g2,!v())||r(W):$8(r(H),r(t2));z(W,T2),h0(r1(T2))}if(V==="ArrowRight"||V==="Shift+ArrowRight"){N.preventDefault();var w1=r(W)&&r(H)!==void 0?(function(r4,Z4,k1){var g0=arguments.length>3&&arguments[3]!==void 0&&arguments[3],I4=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4];if(k1){var{caret:z0,next:x4}=ep(r4,Z4,k1,I4);return g0?Q4(k1)?void 0:k3(k1.path,k1.path):z0&&x4?Ho(x4):Q4(k1)?K1(k1.focusPath):void 0}})(r(H),r(t2),r(W),g2,!v())||r(W):$8(r(H),r(t2));z(W,w1),h0(r1(w1))}if(V==="Enter"&&r(W)){if(d5(r(W))){var C1=r(W).focusPath,J1=W2(r(H),Y1(C1));Array.isArray(J1)&&(N.preventDefault(),z(W,K1(C1)))}n3(r(W))&&(N.preventDefault(),z(W,N2(N2({},r(W)),{},{edit:!0}))),h4(r(W))&&(N.preventDefault(),M0(W2(r(H),r(W).path))?Z(r(W).path,!0):z(W,N2(N2({},r(W)),{},{edit:!0})))}if(V.replace(/^Shift\+/,"").length===1&&r(W))return N.preventDefault(),void w4(N.key);if(V==="Enter"&&(U3(r(W))||Y0(r(W))))return N.preventDefault(),void w4("");if(V==="Ctrl+Enter"&&h4(r(W))){var N4=W2(r(H),r(W).path);f5(N4)&&window.open(String(N4),"_blank")}V==="Escape"&&r(W)&&(N.preventDefault(),z(W,void 0)),V==="Ctrl+F"&&(N.preventDefault(),a1(!1)),V==="Ctrl+H"&&(N.preventDefault(),a1(!0)),V==="Ctrl+Z"&&(N.preventDefault(),w0()),V==="Ctrl+Shift+Z"&&(N.preventDefault(),W0())}),w2("mousedown",X,function(N){t("handleMouseDown",N);var V=N.target;Jv(V,"BUTTON")||V.isContentEditable||(L1(),r(W)||r(H)!==void 0||r(v2)!==""&&r(v2)!==void 0||(t("createDefaultSelection"),z(W,K1([]))))}),w2("contextmenu",X,l4),T(e,q0),M1(a,"expand",n2),M1(a,"collapse",C2),M1(a,"validate",U2),M1(a,"getJson",J2),M1(a,"patch",Q1),M1(a,"acceptAutoRepair",S1),M1(a,"openTransformModal",d0),M1(a,"scrollTo",e4),M1(a,"findElement",B4),M1(a,"findSearchResult",_0),M1(a,"focus",L1),u1(T4)}function Vm(e){return typeof(a=e)!="object"||a===null?e:new Proxy(e,{get:(n,t,c)=>Vm(Reflect.get(n,t,c)),set:()=>!1,deleteProperty:()=>!1});var a}var jc=t3("jsoneditor:History");function Jm(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.maxItems||1e3,n=[],t=0;function c(){return t<n.length}function l(){return t>0}function o(){return{canUndo:c(),canRedo:l(),items:()=>n.slice().reverse(),add:i,undo:u,redo:d,clear:f}}function s(){e.onChange&&e.onChange(o())}function i(h){jc("add",h),n=[h].concat(n.slice(t)).slice(0,a),t=0,s()}function f(){jc("clear"),n=[],t=0,s()}function u(){if(c()){var h=n[t];return t+=1,jc("undo",h),s(),h}}function d(){if(l())return jc("redo",n[t-=1]),s(),n[t]}return{get:o}}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-transform-modal-inner.svelte-lta8xm {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) {
  color: inherit;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) button.jse-primary:where(.svelte-lta8xm) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) button.jse-primary:where(.svelte-lta8xm):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) button.jse-primary:where(.svelte-lta8xm):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  gap: calc(2 * var(--jse-padding, 10px));
  min-height: 0;
  box-sizing: border-box;
  padding: 0 calc(2 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .jse-description:where(.svelte-lta8xm) p {
  margin: var(--jse-padding, 10px) 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .jse-description:where(.svelte-lta8xm) p:first-child {
  margin-top: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .jse-description:where(.svelte-lta8xm) p:last-child {
  margin-bottom: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .jse-description:where(.svelte-lta8xm) code {
  background: var(--jse-modal-code-background, rgba(0, 0, 0, 0.05));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .query-error:where(.svelte-lta8xm) {
  color: var(--jse-error-color, #ee5341);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) textarea.jse-query:where(.svelte-lta8xm) {
  flex: 1;
  outline: none;
  resize: vertical;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: calc(2 * var(--jse-padding, 10px));
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-original-data:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-original-data.jse-hide:where(.svelte-lta8xm) {
  flex: none;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-preview-data:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents.jse-hide-original-data:where(.svelte-lta8xm) {
  flex-direction: column;
  gap: 0;
  margin-bottom: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) {
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px)) calc(2 * var(--jse-padding, 10px));
}
@media screen and (max-width: 1200px) {
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) {
    flex-direction: column;
    overflow: auto;
  }
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) textarea.jse-query:where(.svelte-lta8xm) {
    min-height: 150px;
    flex: none;
  }
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-tree-mode {
    height: 300px;
    flex: none;
  }
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-original-data:where(.svelte-lta8xm),
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-preview-data:where(.svelte-lta8xm) {
    flex: unset;
  }
}
.jse-transform-modal-inner.svelte-lta8xm .jse-label:where(.svelte-lta8xm) {
  font-weight: bold;
  display: block;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-label:where(.svelte-lta8xm) .jse-label-inner:where(.svelte-lta8xm) {
  margin-top: calc(2 * var(--jse-padding, 10px));
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-label:where(.svelte-lta8xm) .jse-label-inner:where(.svelte-lta8xm) button:where(.svelte-lta8xm) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  font-weight: bold;
  padding: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-tree-mode {
  flex: 1;
  background: var(--jse-input-background-readonly, transparent);
  box-shadow: none;
  box-sizing: border-box;
  --jse-main-border: var(--jse-input-border, 1px solid #d8dbdf);
}
.jse-transform-modal-inner.svelte-lta8xm input:where(.svelte-lta8xm),
.jse-transform-modal-inner.svelte-lta8xm textarea:where(.svelte-lta8xm) {
  border: var(--jse-input-border, 1px solid #d8dbdf);
  outline: none;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: inherit;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
}
.jse-transform-modal-inner.svelte-lta8xm input:where(.svelte-lta8xm):focus,
.jse-transform-modal-inner.svelte-lta8xm textarea:where(.svelte-lta8xm):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}
.jse-transform-modal-inner.svelte-lta8xm input:where(.svelte-lta8xm):read-only,
.jse-transform-modal-inner.svelte-lta8xm textarea:where(.svelte-lta8xm):read-only {
  background: var(--jse-input-background-readonly, transparent);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-preview.jse-error:where(.svelte-lta8xm) {
  flex: 1;
  background: var(--jse-input-background-readonly, transparent);
  border: var(--jse-input-border, 1px solid #d8dbdf);
  color: var(--jse-error-color, #ee5341);
  padding: calc(0.5 * var(--jse-padding, 10px));
}
.jse-transform-modal-inner.svelte-lta8xm a {
  color: var(--jse-a-color, #156fc5);
}
.jse-transform-modal-inner.svelte-lta8xm a:hover {
  color: var(--jse-a-color-highlight, #0f508d);
}`);var Ct=i5(()=>kw),F8=i5(()=>Nw),jS=a2('<div class="query-error svelte-lta8xm"> </div>'),SS=a2("<!> <!>",1),kS=a2('<div class="jse-preview jse-error svelte-lta8xm"> </div>'),NS=a2('<!> <div class="jse-modal-contents svelte-lta8xm"><div class="jse-main-contents svelte-lta8xm"><div class="jse-query-contents svelte-lta8xm"><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Language</div></div> <div class="jse-description svelte-lta8xm"><!></div> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Path</div></div> <input class="jse-path svelte-lta8xm" type="text" readonly="" title="Selected path"/> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm"><button type="button" class="svelte-lta8xm"><!> Wizard</button></div></div> <!> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Query</div></div> <textarea class="jse-query svelte-lta8xm" spellcheck="false"></textarea></div> <div><div><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm"><button type="button" class="svelte-lta8xm"><!> Original</button></div></div> <!></div> <div class="jse-preview-data svelte-lta8xm"><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Preview</div></div> <!></div></div></div> <div class="jse-actions svelte-lta8xm"><button type="button" class="jse-primary svelte-lta8xm">Transform</button></div></div>',1),AS=a2('<div class="jse-transform-modal-inner svelte-lta8xm"><!></div>');function _S(e,a){var n,t,c;f1(a,!1);var l=t3("jsoneditor:TransformModal"),o=b(a,"id",25,()=>"transform-modal-"+G8()),s=b(a,"json",9),i=b(a,"rootPath",25,()=>[]),f=b(a,"indentation",9),u=b(a,"truncateTextSize",9),d=b(a,"escapeControlCharacters",9),h=b(a,"escapeUnicodeCharacters",9),m=b(a,"parser",9),v=b(a,"parseMemoizeOne",9),p=b(a,"validationParser",9),g=b(a,"pathParser",9),y=b(a,"queryLanguages",9),L=b(a,"queryLanguageId",13),S=b(a,"onChangeQueryLanguage",9),j=b(a,"onRenderValue",9),x=b(a,"onRenderMenu",9),E=b(a,"onRenderContextMenu",9),P=b(a,"onClassName",9),I=b(a,"onTransform",9),k=b(a,"onClose",9),$=R(void 0,!0),U=R(Jm({onChange:t2=>z(U,t2)}).get(),!0),O=R(void 0,!0),c2=R(void 0,!0),u2=R(!1,!0),l2="".concat(o(),":").concat(c1(i())),S2=(n=Ct()[l2])!==null&&n!==void 0?n:{},q2=R(F8().showWizard!==!1,!0),f2=R(F8().showOriginal!==!1,!0),o2=R((t=S2.queryOptions)!==null&&t!==void 0?t:{},!0),d2=R(L()===S2.queryLanguageId&&S2.query?S2.query:"",!0),P2=R((c=S2.isManual)!==null&&c!==void 0&&c,!0),Q2=R(void 0,!0),y2=R(void 0,!0),s2=R({text:""},!0);function z2(t2){var W;return(W=y().find(b1=>b1.id===t2))!==null&&W!==void 0?W:y()[0]}function o1(t2){try{z(o2,t2),z(d2,z2(L()).createQuery(r(O),t2)),z(Q2,void 0),z(P2,!1),l("updateQueryByWizard",{queryOptions:r(o2),query:r(d2),isManual:r(P2)})}catch(W){z(Q2,String(W))}}function E1(t2){z(d2,t2.target.value),z(P2,!0),l("handleChangeQuery",{query:r(d2),isManual:r(P2)})}r(P2)||o1(r(o2)),x3(()=>{var t2;(t2=r($))===null||t2===void 0||t2.focus()});var m2=En(function(t2,W){if(t2===void 0)return z(s2,{text:""}),void z(y2,"Error: No JSON");if(W.trim()!=="")try{l("previewTransform",{query:W});var b1=z2(L()).executeQuery(t2,W,m());z(s2,{json:b1}),z(y2,void 0)}catch(i1){z(s2,{text:""}),z(y2,String(i1))}else z(s2,{json:t2})},300);function G(){if(r(O)===void 0)return z(s2,{text:""}),void z(y2,"Error: No JSON");try{l("handleTransform",{query:r(d2)});var t2=z2(L()).executeQuery(r(O),r(d2),m());I()([{op:"replace",path:c1(i()),value:t2}]),k()()}catch(W){console.error(W),z(s2,{text:""}),z(y2,String(W))}}function b2(){z(q2,!r(q2)),F8(F8().showWizard=r(q2))}function H(){z(f2,!r(f2)),F8(F8().showOriginal=r(f2))}function v2(t2){t2.focus()}function Q(t2){l("handleChangeQueryLanguage",t2),L(t2),S()(t2),o1(r(o2))}function O2(){r(u2)?z(u2,!r(u2)):k()()}Y(()=>(M(s()),M(i())),()=>{z(O,Vm(W2(s(),i())))}),Y(()=>r(O),()=>{z(c2,r(O)?{json:r(O)}:{text:""})}),Y(()=>(r(O),r(d2)),()=>{m2(r(O),r(d2))}),Y(()=>(Ct(),r(o2),r(d2),M(L()),r(P2)),()=>{Ct(Ct()[l2]={queryOptions:r(o2),query:r(d2),queryLanguageId:L(),isManual:r(P2)}),l("store state in memory",l2,Ct()[l2])}),L4(),_1(!0),Ht(e,{get onClose(){return k()},className:"jse-transform-modal",get fullscreen(){return r(u2)},children:(t2,W)=>{var b1=AS();Do(q(b1),{children:(i1,j2)=>{var x1=NS(),I2=Y2(x1);(function(X2,X1){f1(X1,!1);var D1,W4=b(X1,"queryLanguages",9),a0=b(X1,"queryLanguageId",9),Y4=b(X1,"fullscreen",13),L0=b(X1,"onChangeQueryLanguage",9),c0=b(X1,"onClose",9),m0=R(void 0,!0),{openAbsolutePopup:N0,closeAbsolutePopup:f0}=ga("absolute-popup");function D0(){var A0={queryLanguages:W4(),queryLanguageId:a0(),onChangeQueryLanguage:O0=>{f0(D1),L0()(O0)}};D1=N0(wC,A0,{offsetTop:-2,offsetLeft:0,anchor:r(m0),closeOnOuterClick:!0})}_1(!0),n5(X2,{title:"Transform",fullScreenButton:!0,get onClose(){return c0()},get fullscreen(){return Y4()},set fullscreen(A0){Y4(A0)},$$slots:{actions:(A0,O0)=>{var u0,x2=SC();c4(q(x2),{get data(){return z9}}),r0(x2,B1=>z(m0,B1),()=>r(m0)),E2(()=>u0=A1(x2,1,"jse-config svelte-5gkegr",null,u0,{hide:W4().length<=1})),w2("click",x2,D0),T(A0,x2)}},$$legacy:!0}),u1()})(I2,{get queryLanguages(){return y()},get queryLanguageId(){return L()},onChangeQueryLanguage:Q,get onClose(){return k()},get fullscreen(){return r(u2)},set fullscreen(X2){z(u2,X2)},$$legacy:!0});var V2=q(J(I2,2)),m1=q(V2),F2=J(q(m1),2);Nv(q(F2),()=>(M(L()),F(()=>z2(L()).description)));var O1=J(F2,4),w=J(O1,2),C=q(w),_=q(C),D=q(_),n2=Z2(()=>r(q2)?qe:g8);c4(D,{get data(){return r(n2)}});var C2=J(w,2),A2=X2=>{var X1=W1(),D1=Y2(X1),W4=Y4=>{var L0=SS(),c0=Y2(L0);MC(c0,{get queryOptions(){return r(o2)},get json(){return r(O)},onChange:o1});var m0=J(c0,2),N0=f0=>{var D0=jS(),A0=q(D0);E2(()=>d1(A0,r(Q2))),T(f0,D0)};i2(m0,f0=>{r(Q2)&&f0(N0)}),T(Y4,L0)},a0=Y4=>{T(Y4,s3("(Only available for arrays, not for objects)"))};i2(D1,Y4=>{r(O),F(()=>Array.isArray(r(O)))?Y4(W4):Y4(a0,!1)}),T(X2,X1)};i2(C2,X2=>{r(q2)&&X2(A2)});var e2=J(C2,4);r0(e2,X2=>z($,X2),()=>r($));var r2,s1,e1=J(m1,2),U2=q(e1),J2=q(U2),q1=q(J2),S4=q(q1),E4=q(S4),$1=Z2(()=>r(f2)?qe:g8);c4(E4,{get data(){return r($1)}});var g4=J(J2,2),V1=X2=>{rs(X2,{get externalContent(){return r(c2)},externalSelection:void 0,get history(){return r(U)},readOnly:!0,get truncateTextSize(){return u()},mainMenuBar:!1,navigationBar:!1,get indentation(){return f()},get escapeControlCharacters(){return d()},get escapeUnicodeCharacters(){return h()},get parser(){return m()},get parseMemoizeOne(){return v()},get onRenderValue(){return j()},get onRenderMenu(){return x()},get onRenderContextMenu(){return E()},onError:F(()=>console.error),get onChange(){return $0},get onChangeMode(){return $0},get onSelect(){return $0},get onUndo(){return $0},get onRedo(){return $0},get onFocus(){return $0},get onBlur(){return $0},get onSortModal(){return $0},get onTransformModal(){return $0},get onJSONEditorModal(){return $0},get onClassName(){return P()},validator:void 0,get validationParser(){return p()},get pathParser(){return g()}})};i2(g4,X2=>{r(f2)&&X2(V1)});var Q1=J(U2,2),p4=J(q(Q1),2),p1=X2=>{rs(X2,{get externalContent(){return r(s2)},externalSelection:void 0,get history(){return r(U)},readOnly:!0,get truncateTextSize(){return u()},mainMenuBar:!1,navigationBar:!1,get indentation(){return f()},get escapeControlCharacters(){return d()},get escapeUnicodeCharacters(){return h()},get parser(){return m()},get parseMemoizeOne(){return v()},get onRenderValue(){return j()},get onRenderMenu(){return x()},get onRenderContextMenu(){return E()},onError:F(()=>console.error),get onChange(){return $0},get onChangeMode(){return $0},get onSelect(){return $0},get onUndo(){return $0},get onRedo(){return $0},get onFocus(){return $0},get onBlur(){return $0},get onSortModal(){return $0},get onTransformModal(){return $0},get onJSONEditorModal(){return $0},get onClassName(){return P()},validator:void 0,get validationParser(){return p()},get pathParser(){return g()}})},z4=X2=>{var X1=kS(),D1=q(X1);E2(()=>d1(D1,r(y2))),T(X2,X1)};i2(p4,X2=>{r(y2)?X2(z4,!1):X2(p1)});var S1=q(J(V2,2));o3(()=>w2("click",S1,G)),A3(S1,X2=>v2?.(X2)),E2(X2=>{r8(O1,X2),r8(e2,r(d2)),r2=A1(e1,1,"jse-data-contents svelte-lta8xm",null,r2,{"jse-hide-original-data":!r(f2)}),s1=A1(U2,1,"jse-original-data svelte-lta8xm",null,s1,{"jse-hide":!r(f2)}),S1.disabled=!!r(y2)},[()=>(M(f4),M(i()),M(H3),F(()=>f4(i())?"(document root)":H3(i())))]),w2("click",_,b2),w2("input",e2,E1),w2("click",S4,H),T(i1,x1)},$$slots:{default:!0}}),A3(b1,(i1,j2)=>t5?.(i1,j2),()=>O2),T(t2,b1)},$$slots:{default:!0}}),u1()}function ue(){}var ES=0,l3=class{constructor(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.id=ES++,this.perNode=!!a.perNode,this.deserialize=a.deserialize||(()=>{throw new Error("This node type doesn't define a deserialize function")}),this.combine=a.combine||null}add(a){if(this.perNode)throw new RangeError("Can't add per-node props to node types");return typeof a!="function"&&(a=Vt.match(a)),n=>{var t=a(n);return t===void 0?null:[this,t]}}};l3.closedBy=new l3({deserialize:e=>e.split(" ")}),l3.openedBy=new l3({deserialize:e=>e.split(" ")}),l3.group=new l3({deserialize:e=>e.split(" ")}),l3.isolate=new l3({deserialize:e=>{if(e&&e!="rtl"&&e!="ltr"&&e!="auto")throw new RangeError("Invalid value for isolate: "+e);return e||"auto"}}),l3.contextHash=new l3({perNode:!0}),l3.lookAhead=new l3({perNode:!0}),l3.mounted=new l3({perNode:!0});var jp,PS=Object.create(null),Vt=class e{constructor(a,n,t){var c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;this.name=a,this.props=n,this.id=t,this.flags=c}static define(a){var n=a.props&&a.props.length?Object.create(null):PS,t=(a.top?1:0)|(a.skipped?2:0)|(a.error?4:0)|(a.name==null?8:0),c=new e(a.name||"",n,a.id,t);if(a.props){for(var l of a.props)if(Array.isArray(l)||(l=l(c)),l){if(l[0].perNode)throw new RangeError("Can't store a per-node prop on a node type");n[l[0].id]=l[1]}}return c}prop(a){return this.props[a.id]}get isTop(){return(1&this.flags)>0}get isSkipped(){return(2&this.flags)>0}get isError(){return(4&this.flags)>0}get isAnonymous(){return(8&this.flags)>0}is(a){if(typeof a=="string"){if(this.name==a)return!0;var n=this.prop(l3.group);return!!n&&n.indexOf(a)>-1}return this.id==a}static match(a){var n=Object.create(null);for(var t in a)for(var c of t.split(" "))n[c]=a[t];return l=>{for(var o=l.prop(l3.group),s=-1;s<(o?o.length:0);s++){var i=n[s<0?l.name:o[s]];if(i)return i}}}};Vt.none=new Vt("",Object.create(null),0,8),(function(e){e[e.ExcludeBuffers=1]="ExcludeBuffers",e[e.IncludeAnonymous=2]="IncludeAnonymous",e[e.IgnoreMounts=4]="IgnoreMounts",e[e.IgnoreOverlays=8]="IgnoreOverlays"})(jp||(jp={})),new l3({perNode:!0});j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-status-bar.svelte-1pmgv9j {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  margin: 0;
  border-top: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
  display: flex;
  gap: var(--jse-padding, 10px);
}
.jse-status-bar.svelte-1pmgv9j:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-status-bar.svelte-1pmgv9j .jse-status-bar-info:where(.svelte-1pmgv9j) {
  padding: 2px;
}`);var TS=a2('<div class="jse-status-bar-info svelte-1pmgv9j"> </div>'),OS=a2('<div class="jse-status-bar-info svelte-1pmgv9j"> </div>'),RS=a2('<div class="jse-status-bar-info svelte-1pmgv9j"> </div>'),qS=a2('<div class="jse-status-bar svelte-1pmgv9j"><!> <!> <!></div>'),Rs=oi.define([{tag:p8.propertyName,color:"var(--internal-key-color)"},{tag:p8.number,color:"var(--internal-value-color-number)"},{tag:p8.bool,color:"var(--internal-value-color-boolean)"},{tag:p8.string,color:"var(--internal-value-color-string)"},{tag:p8.keyword,color:"var(--internal-value-color-null)"}]),$S=C5(Rs),DS=Rs.style;Rs.style=e=>DS(e||[]);var FS=[fr.fromClass(class{constructor(e){this.view=e,this.indentUnit=v8(e.state),this.initialPaddingLeft=null,this.isChrome=window?.navigator.userAgent.includes("Chrome"),this.generate(e.state)}update(e){var a=v8(e.state);(a!==this.indentUnit||e.docChanged||e.viewportChanged)&&(this.indentUnit=a,this.generate(e.state))}generate(e){var a=new sr;this.initialPaddingLeft?this.addStyleToBuilder(a,e,this.initialPaddingLeft):this.view.requestMeasure({read:n=>{var t=n.contentDOM.querySelector(".cm-line");t&&(this.initialPaddingLeft=window.getComputedStyle(t).getPropertyValue("padding-left"),this.addStyleToBuilder(a,n.state,this.initialPaddingLeft)),this.decorations=a.finish()}}),this.decorations=a.finish()}addStyleToBuilder(e,a,n){var t=this.getVisibleLines(a);for(var c of t){var{numColumns:l,containsTab:o}=this.numColumns(c.text,a.tabSize),s="calc(".concat(l+this.indentUnit,"ch + ").concat(n,")"),i=this.isChrome?"calc(-".concat(l+this.indentUnit,"ch - ").concat(o?1:0,"px)"):"-".concat(l+this.indentUnit,"ch");e.add(c.from,c.from,ir.line({attributes:{style:"padding-left: ".concat(s,"; text-indent: ").concat(i,";")}}))}}getVisibleLines(e){var a=new Set,n=null;for(var{from:t,to:c}of this.view.visibleRanges)for(var l=t;l<=c;){var o=e.doc.lineAt(l);n!==o&&(a.add(o),n=o),l=o.to+1}return a}numColumns(e,a){var n=0,t=!1;e:for(var c=0;c<e.length;c++)switch(e[c]){case" ":n+=1;continue e;case"	":n+=a-n%a,t=!0;continue e;case"\r":continue e;default:break e}return{numColumns:n,containsTab:t}}},{decorations:e=>e.decorations})];j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-text-mode.svelte-k2b9e6 {
  --internal-key-color: var(--jse-key-color, #1a1a1a);
  --internal-value-color-number: var(--jse-value-color-number, #ee422e);
  --internal-value-color-boolean: var(--jse-value-color-boolean, #ff8c00);
  --internal-value-color-string: var(--jse-value-color-string, #008000);
  --internal-value-color-null: var(--jse-value-color-null, #004ed0);
  flex: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: var(--jse-background-color, #fff);
}
.jse-text-mode.no-main-menu.svelte-k2b9e6 {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) {
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
  min-height: 0;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents.jse-hidden:where(.svelte-k2b9e6) {
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor {
  flex: 1;
  overflow: hidden;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-scroller {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  line-height: var(--jse-line-height, calc(1em + 4px));
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-gutters {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  border-right: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-activeLine,
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-activeLineGutter {
  background: var(--jse-active-line-background-color, rgba(0, 0, 0, 0.06));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-selectionBackground {
  background: var(--jse-selection-background-color, #d3d3d3);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-searchMatch {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-searchMatch.cm-searchMatch-selected {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-selectionMatch {
  background-color: var(--jse-search-match-background-color, rgba(153, 255, 119, 0.5019607843));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-foldPlaceholder {
  background: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  color: var(--jse-tag-color, var(--jse-text-color-inverse, #fff));
  border: none;
  padding: 0 var(--jse-padding, 10px);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-tooltip {
  font-size: var(--jse-font-size, 16px);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  color: var(--jse-tooltip-color, var(--jse-text-color, #4d4d4d));
  background: var(--jse-tooltip-background, var(--jse-modal-background, #f5f5f5));
  border: var(--jse-tooltip-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-diagnosticAction {
  background: var(--jse-tooltip-action-button-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-tooltip-action-button-background, #4d4d4d);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-panels {
  border-bottom: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color, var(--jse-text-color, #4d4d4d));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search input {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  color: var(--jse-input-color, var(--jse-text-color, #4d4d4d));
  border: var(--jse-input-border, 1px solid #d8dbdf);
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  margin-right: 2px;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search button {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  color: var(--jse-panel-button-color, inherit);
  background: var(--jse-panel-button-background, transparent);
  border: none;
  cursor: pointer;
  text-transform: capitalize;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  margin: 0;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search button:hover {
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search label {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  padding-left: var(--jse-padding, 10px);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search label input {
  margin-right: 2px;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search button[name='close'] {
  width: 32px;
  height: 32px;
  font-size: 24px;
  line-height: 24px;
  padding: 0;
  right: 0;
  top: -4px;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-cursor-primary {
  border-color: var(--jse-text-color, #4d4d4d);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .jse-loading-space:where(.svelte-k2b9e6) {
  flex: 1;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .jse-loading:where(.svelte-k2b9e6) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents.jse-preview:where(.svelte-k2b9e6) {
  flex: 1;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
  padding: 2px;
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: var(--jse-background-color, #fff);
  border-top: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
  border-bottom: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-tip:where(.svelte-k2b9e6) {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-progress-track:where(.svelte-k2b9e6) {
  flex: 1;
  height: 6px;
  background: var(--jse-panel-background, #ebebeb);
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-progress-fill:where(.svelte-k2b9e6) {
  height: 100%;
  background: linear-gradient(90deg, var(--jse-theme-color, #3883fa), var(--jse-theme-color-highlight, #5f9dff));
  border-radius: 2px;
  transition: width 0.1s ease;
  min-width: 2px;
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-cancel-button:where(.svelte-k2b9e6) {
  padding: 4px 12px;
  font-size: 12px;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  background: var(--jse-theme-color, #3883fa);
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  flex-shrink: 0;
  border: 1px solid var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-cancel-button:where(.svelte-k2b9e6):hover {
  background: var(--jse-theme-color-highlight, #5f9dff);
  color: #fff;
}`);var BS=a2('<div class="jse-fold-progress svelte-k2b9e6"><span class="jse-fold-tip svelte-k2b9e6">Collapsing</span> <div class="jse-fold-progress-track svelte-k2b9e6"><div class="jse-fold-progress-fill svelte-k2b9e6"></div></div> <button class="jse-fold-cancel-button svelte-k2b9e6" type="button" title="Cancel folding">Cancel</button></div>'),IS=a2('<!> <div class="jse-contents jse-preview svelte-k2b9e6"> </div>',1),US=a2("<!> <!> <!> <!>",1),HS=a2("<div></div> <!> <!>",1),WS=a2('<div class="jse-contents svelte-k2b9e6"><div class="jse-loading-space svelte-k2b9e6"></div> <div class="jse-loading svelte-k2b9e6">loading...</div></div>'),VS=a2("<div><!> <!> <!></div>");function JS(e,a){f1(a,!1);var n=R(void 0,!0),t=R(void 0,!0),c=b(a,"readOnly",9),l=b(a,"mainMenuBar",9),o=b(a,"statusBar",9),s=b(a,"askToFormat",9),i=b(a,"externalContent",9),f=b(a,"externalSelection",9),u=b(a,"history",9),d=b(a,"indentation",9),h=b(a,"tabSize",9),m=b(a,"escapeUnicodeCharacters",9),v=b(a,"parser",9),p=b(a,"validator",9),g=b(a,"validationParser",9),y=b(a,"onChange",9),L=b(a,"onChangeMode",9),S=b(a,"onSelect",9),j=b(a,"onUndo",9),x=b(a,"onRedo",9),E=b(a,"onError",9),P=b(a,"onFocus",9),I=b(a,"onBlur",9),k=b(a,"onRenderMenu",9),$=b(a,"onSortModal",9),U=b(a,"onTransformModal",9),O=t3("jsoneditor:TextMode"),c2={key:"Mod-i",run:A2,shift:e2,preventDefault:!0},u2=typeof window>"u";O("isSSR:",u2);var l2,S2=R(void 0,!0),q2=R(void 0,!0),f2=R(void 0,!0),o2=R(!1,!0),d2=R(s(),!0),P2=R([],!0),Q2=R(!1,!0),y2=R(0,!0),s2=R(0,!0),z2=null,o1=new d8,E1=new d8,m2=new d8,G=new d8,b2=new d8,H=i(),v2=R($o(H,d(),v()),!0),Q=Bs.define(),O2=null;function t2(){if(!O2||O2.length===0)return!1;var K=O2[0].startState,p2=O2[O2.length-1].state,_2=O2.map(Z=>Z.changes).reduce((Z,M2)=>Z.compose(M2)),B={type:"text",undo:{changes:_2.invert(K.doc).toJSON(),selection:O0(K.selection)},redo:{changes:_2.toJSON(),selection:O0(p2.selection)}};return O("add history item",B),u().add(B),O2=null,!0}var W=R(m(),!0);x3(z1(function*(){if(!u2)try{l2=(function(K){var{target:p2,initialText:_2,readOnly:B,indentation:Z}=K;O("Create CodeMirror editor",{readOnly:B,indentation:Z});var M2=(function(a1,t1){return zo(a1)?a1.ranges.every(h1=>h1.anchor<t1.length&&h1.head<t1.length):!1})(f(),_2)?W4(f()):void 0,D2=La.create({doc:_2,selection:M2,extensions:[L5.of([ui,c2]),o1.of(p1()),Li(),Ks(),Qs(),Ws(),li(),I2(),Us(),Hs(),La.allowMultipleSelections.of(!0),Ys(),C5(si,{fallback:!0}),ii(),gi(),bi(),Js(),Gs(),Vs(),di(),L5.of([...zi,...fi,...hi,{key:"Mod-z",run:q1,preventDefault:!0},{key:"Mod-y",mac:"Mod-Shift-z",run:S4,preventDefault:!0},{key:"Ctrl-Shift-z",run:S4,preventDefault:!0},...ci,...yi,...Mi]),$S,fd({hideFirstIndent:!0}),t6.domEventHandlers({dblclick:p4}),t6.updateListener.of(a1=>{z(f2,a1.state),a1.docChanged&&(a1.transactions.some(t1=>!!t1.annotation(Q))||(O2=[...O2??[],a1]),N0()),a1.selectionSet&&A0()}),wi(),pi({top:!0}),t6.lineWrapping,E1.of(La.readOnly.of(B)),G.of(La.tabSize.of(h())),m2.of(m0(Z)),b2.of(t6.theme({},{dark:z4()}))]});return l2=new t6({state:D2,parent:p2}),M2&&l2.dispatch(l2.state.update({selection:M2.main,scrollIntoView:!0})),l2})({target:r(S2),initialText:u0(r(v2),r(o2))?"":r(n).escapeValue(r(v2)),readOnly:c(),indentation:d()})}catch(K){console.error(K)}})),ze(()=>{f0(),l2&&(O("Destroy CodeMirror editor"),l2.destroy()),O1()});var b1=wa(),i1=wa();function j2(){l2&&(O("focus"),l2.focus())}function x1(K,p2){if(l2)try{(function(){var _2=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],B=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],Z=l2.state,M2=Z.doc.length,D2=w5(Z,M2,1/0);if(D2){var a1=[];if(_2.length===0)a1=m1(D2,Z,void 0,B);else{var{from:t1}=so(r(n).escapeValue(r(v2)),_2);t1!==void 0&&t1!==0&&(a1=m1(D2,Z,t1,B))}a1.length>0&&(function(h1){F2.apply(this,arguments)})(a1)}})(K,p2)}catch(_2){E()(_2)}}function I2(){return Zs.of((K,p2,_2)=>{var B=w5(K,K.doc.length,1/0);if(!B||B.length<_2)return null;for(var Z=null,M2=B.resolveStack(_2,1);M2;M2=M2.next){var D2=M2.node;if(!(D2.to<=_2||D2.from>_2)){if(Z&&D2.from<p2)break;var a1=D2.type.prop(ei);if(a1&&(D2.to<B.length-50||B.length==K.doc.length||!V2(D2))){var t1=a1(D2,K);t1&&t1.from<=_2&&t1.from>=p2&&t1.to>_2&&(Z=t1)}}}return Z})}function V2(K){var p2=K.lastChild;return p2&&p2.to==K.to&&p2.type.isError}function m1(K,p2,_2){var B=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],Z=[],M2=new Set;return K.iterate({enter(D2){if(_2===void 0||D2.from>=_2){var a1=ai(p2,D2.from,D2.to);if(a1){var t1="".concat(a1.from,"-").concat(a1.to);if(!M2.has(t1))if(B)Z.push({from:a1.from,to:a1.to}),M2.add(t1);else{var h1=Z.some(G4=>G4.from<=a1.from&&G4.to>=a1.to);h1||(Z.push({from:a1.from,to:a1.to}),M2.add(t1))}}}}}),Z}function F2(){return F2=z1(function*(K){if(K.length!==0){var p2=K.length>5e3;p2&&(z(Q2,!0),z(y2,0),z(s2,K.length),z2=new AbortController);var _2=B=>new Promise(Z=>{var M2;p2&&(M2=z2)!==null&&M2!==void 0&&M2.signal.aborted?Z():requestAnimationFrame(()=>{var D2=Math.min(B+100,K.length),a1=K.slice(B,D2);l2.dispatch({effects:a1.map(t1=>ni.of({from:t1.from,to:t1.to}))}),p2&&z(y2,D2),D2<K.length?_2(D2).then(Z):Z()})});yield _2(0),p2&&(z(Q2,!1),z(y2,0),z(s2,0),z2=null)}}),F2.apply(this,arguments)}function O1(){z2&&z2.abort()}function w(K){var p2=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Uo;if(l2)try{if(K&&K.length>0){var{from:_2}=so(r(n).escapeValue(r(v2)),K);_2!==void 0&&(l2.dispatch({selection:{anchor:_2,head:_2}}),ti(l2))}else ri(l2);p2?.(K)}catch(B){E()(B)}}function C(){w([],()=>!0)}function _(){x1([],!0)}var D=!1;function n2(K){return C2(K,!1)}function C2(K,p2){O("handlePatch",K,p2);var _2=v().parse(r(v2)),B=O3(_2,K),Z=vr(_2,K);return D1({text:v().stringify(B,null,d())},p2,!1),{json:B,previousJson:_2,undo:Z,redo:K}}function A2(){if(O("format"),c())return!1;try{var K=v().parse(r(v2));return D1({text:v().stringify(K,null,d())},!0,!1),z(d2,s()),!0}catch(p2){E()(p2)}return!1}function e2(){if(O("compact"),c())return!1;try{var K=v().parse(r(v2));return D1({text:v().stringify(K)},!0,!1),z(d2,!1),!0}catch(p2){E()(p2)}return!1}function r2(){if(O("repair"),!c())try{D1({text:re(r(v2))},!0,!1),z(x2,mo),z(B1,void 0)}catch(K){E()(K)}}function s1(){var K;if(!c())try{var p2=v().parse(r(v2));D=!0,$()({id:b1,json:p2,rootPath:[],onSort:(K=z1(function*(_2){var{operations:B}=_2;O("onSort",B),C2(B,!0)}),function(_2){return K.apply(this,arguments)}),onClose:()=>{D=!1,j2()}})}catch(_2){E()(_2)}}function e1(K){var{id:p2,rootPath:_2,onTransform:B,onClose:Z}=K;try{var M2=v().parse(r(v2));D=!0,U()({id:p2||i1,json:M2,rootPath:_2||[],onTransform:D2=>{B?B({operations:D2,json:M2,transformedJson:O3(M2,D2)}):(O("onTransform",D2),C2(D2,!0))},onClose:()=>{D=!1,j2(),Z&&Z()}})}catch(D2){E()(D2)}}function U2(){c()||e1({rootPath:[]})}function J2(){l2&&(r(S2)&&r(S2).querySelector(".cm-search")?mi(l2):vi(l2))}function q1(){if(c())return!1;f0();var K=u().undo();return O("undo",K),Jd(K)?(l2.dispatch({annotations:Q.of("undo"),changes:x5.fromJSON(K.undo.changes),selection:or.fromJSON(K.undo.selection),scrollIntoView:!0}),!0):(j()(K),!1)}function S4(){if(c())return!1;f0();var K=u().redo();return O("redo",K),Jd(K)?(l2.dispatch({annotations:Q.of("redo"),changes:x5.fromJSON(K.redo.changes),selection:or.fromJSON(K.redo.selection),scrollIntoView:!0}),!0):(x()(K),!1)}function E4(){z(o2,!0),D1(i(),!0,!0)}function $1(){L()(H0.tree)}function g4(){L0()}function V1(K){O("select validation error",K);var{from:p2,to:_2}=S1(K);p2!==void 0&&_2!==void 0&&(Q1(p2,_2),j2())}function Q1(K,p2){O("setSelection",{anchor:K,head:p2}),l2&&l2.dispatch(l2.state.update({selection:{anchor:K,head:p2},scrollIntoView:!0}))}function p4(K,p2){if(p2.state.selection.ranges.length===1){var _2=p2.state.selection.ranges[0],B=r(v2).slice(_2.from,_2.to);if(B==="{"||B==="["){var Z=cs.default.parse(r(v2)),M2=Object.keys(Z.pointers).find(a1=>{var t1;return((t1=Z.pointers[a1].value)===null||t1===void 0?void 0:t1.pos)===_2.from}),D2=Z.pointers[M2];M2&&D2&&D2.value&&D2.valueEnd&&(O("pointer found, selecting inner contents of path:",M2,D2),Q1(D2.value.pos+1,D2.valueEnd.pos-1))}}}function p1(){return xi(w4,{delay:300})}function z4(){return!!r(S2)&&getComputedStyle(r(S2)).getPropertyValue("--jse-theme").includes("dark")}function S1(K){var{path:p2,message:_2,severity:B}=K,{line:Z,column:M2,from:D2,to:a1}=so(r(n).escapeValue(r(v2)),p2);return{path:p2,line:Z,column:M2,from:D2,to:a1,message:_2,severity:B,actions:[]}}function X2(K,p2){var{line:_2,column:B,position:Z,message:M2}=K;return{path:[],line:_2,column:B,from:Z,to:Z,severity:he.error,message:M2,actions:p2&&!c()?[{name:"Auto repair",apply:()=>r2()}]:void 0}}function X1(K){return{from:K.from||0,to:K.to||0,message:K.message||"",actions:K.actions,severity:K.severity}}function D1(K,p2,_2){var B=$o(K,d(),v()),Z=!H1(K,H),M2=H;O("setCodeMirrorContent",{isChanged:Z,emitChange:p2,forceUpdate:_2}),l2&&(Z||_2)&&(H=K,z(v2,B),u0(r(v2),r(o2))||l2.dispatch({changes:{from:0,to:l2.state.doc.length,insert:r(n).escapeValue(r(v2))}}),t2(),Z&&p2&&D0(H,M2))}function W4(K){return zo(K)?or.fromJSON(K):void 0}function a0(){return Y4.apply(this,arguments)}function Y4(){return Y4=z1(function*(){O("refresh"),yield(function(){return c0.apply(this,arguments)})()}),Y4.apply(this,arguments)}function L0(){if(l2){var K=l2?r(n).unescapeValue(l2.state.doc.toString()):"",p2=K!==r(v2);if(O("onChangeCodeMirrorValue",{isChanged:p2}),p2){var _2=H;z(v2,K),H={text:r(v2)},t2(),D0(H,_2),t0(),A0()}}}function c0(){return(c0=z1(function*(){if(t0(),l2){var K=z4();return O("updateTheme",{dark:K}),l2.dispatch({effects:[b2.reconfigure(t6.theme({},{dark:K}))]}),new Promise(p2=>setTimeout(p2))}return Promise.resolve()})).apply(this,arguments)}function m0(K){var p2=Xs.of(typeof K=="number"?" ".repeat(K):K);return K==="	"?[p2]:[p2,FS]}Ps({onMount:x3,onDestroy:ze,getWindow:()=>er(r(q2)),hasFocus:()=>D&&document.hasFocus()||gs(r(q2)),onFocus:P(),onBlur:()=>{f0(),I()()}});var N0=En(L0,300);function f0(){N0.flush()}function D0(K,p2){y()&&y()(K,p2,{contentErrors:V4(),patchResult:void 0})}function A0(){S()(O0(r(f2).selection))}function O0(K){return N2({type:H4.text},K.toJSON())}function u0(K,p2){return!!K&&K.length>po&&!p2}var x2=R(mo,!0),B1=R(void 0,!0);function w4(){if(u0(r(v2),r(o2)))return[];var K=V4();if(Vd(K)){var{parseError:p2,isRepairable:_2}=K;return[X1(X2(p2,_2))]}return sw(K)?K.validationErrors.map(S1).map(X1):[]}function V4(){O("validate:start"),f0();var K=w0(r(n).escapeValue(r(v2)),p(),v(),g());return Vd(K)?(z(x2,K.isRepairable?Bd:"invalid"),z(B1,K.parseError),z(P2,[])):(z(x2,mo),z(B1,void 0),z(P2,K?.validationErrors||[])),O("validate:end"),K}var w0=z8(AC);function W0(){r(B1)&&(function(K){O("select parse error",K);var p2=X2(K,!1);Q1(p2.from!=null?p2.from:0,p2.to!=null?p2.to:0),j2()})(r(B1))}var G1={icon:d9,text:"Show me",title:"Move to the parse error location",onClick:W0};Y(()=>M(m()),()=>{z(n,ms({escapeControlCharacters:!1,escapeUnicodeCharacters:m()}))}),Y(()=>M(i()),()=>{D1(i(),!1,!1)}),Y(()=>M(f()),()=>{(function(K){if(zo(K)){var p2=W4(K);!l2||!p2||r(f2)&&r(f2).selection.eq(p2)||(O("applyExternalSelection",p2),l2.dispatch({selection:p2}))}})(f())}),Y(()=>M(p()),()=>{(function(K){O("updateLinter",K),l2&&l2.dispatch({effects:o1.reconfigure(p1())})})(p())}),Y(()=>M(d()),()=>{(function(K){l2&&(O("updateIndentation",K),l2.dispatch({effects:m2.reconfigure(m0(K))}))})(d())}),Y(()=>M(h()),()=>{(function(K){l2&&(O("updateTabSize",K),l2.dispatch({effects:G.reconfigure(La.tabSize.of(K))}))})(h())}),Y(()=>M(c()),()=>{(function(K){l2&&(O("updateReadOnly",K),l2.dispatch({effects:[E1.reconfigure(La.readOnly.of(K))]}))})(c())}),Y(()=>(r(W),M(m())),()=>{r(W)!==m()&&(z(W,m()),O("forceUpdateText",{escapeUnicodeCharacters:m()}),l2&&l2.dispatch({changes:{from:0,to:l2.state.doc.length,insert:r(n).escapeValue(r(v2))}}))}),Y(()=>(r(x2),M(c()),c6),()=>{z(t,r(x2)!==Bd||c()?[G1]:[{icon:c6,text:"Auto repair",title:"Automatically repair JSON",onClick:r2},G1])}),L4();var R0={focus:j2,collapse:x1,expand:w,patch:n2,handlePatch:C2,openTransformModal:e1,refresh:a0,flush:f0,validate:V4};_1(!0);var i3,d0=VS(),r3=q(d0),J4=K=>{var p2=Z2(()=>(r(v2),F(()=>r(v2).length===0))),_2=Z2(()=>!r(p2)),B=Z2(()=>!r(p2)),Z=Z2(()=>!r(p2)),M2=Z2(()=>!r(p2)),D2=Z2(()=>!r(p2)),a1=Z2(()=>!r(p2));(function(t1,h1){f1(h1,!1);var G4=R(void 0,!0),a4=b(h1,"readOnly",9,!1),l4=b(h1,"onExpandAll",9),T1=b(h1,"onCollapseAll",9),n4=b(h1,"onFormat",9),V0=b(h1,"onCompact",9),y1=b(h1,"onSort",9),M4=b(h1,"onTransform",9),o4=b(h1,"onToggleSearch",9),b4=b(h1,"onUndo",9),n0=b(h1,"onRedo",9),P4=b(h1,"canExpandAll",9),L1=b(h1,"canCollapseAll",9),F0=b(h1,"canUndo",9),E0=b(h1,"canRedo",9),J0=b(h1,"canFormat",9),k4=b(h1,"canCompact",9),T4=b(h1,"canSort",9),q0=b(h1,"canTransform",9),A=b(h1,"onRenderMenu",9),X=R(void 0,!0),L2=R(void 0,!0),$2={type:"button",icon:Hn,title:"Search (Ctrl+F)",className:"jse-search",onClick:o4()},h2=R(void 0,!0);Y(()=>(M(l4()),M(P4())),()=>{z(X,{type:"button",icon:Nm,title:"Expand all",className:"jse-expand-all",onClick:l4(),disabled:!P4()})}),Y(()=>(M(T1()),M(L1())),()=>{z(L2,{type:"button",icon:Am,title:"Collapse all",className:"jse-collapse-all",onClick:T1(),disabled:!L1()})}),Y(()=>(M(a4()),r(X),r(L2),M(n4()),M(J0()),M(V0()),M(k4()),M(y1()),M(T4()),M(M4()),M(q0()),M(b4()),M(F0()),M(n0()),M(E0())),()=>{z(h2,a4()?[r(X),r(L2),{type:"separator"},$2,{type:"space"}]:[r(X),r(L2),{type:"separator"},{type:"button",icon:xp,title:"Format JSON: add proper indentation and new lines (Ctrl+I)",className:"jse-format",onClick:n4(),disabled:a4()||!J0()},{type:"button",icon:Ej,title:"Compact JSON: remove all white spacing and new lines (Ctrl+Shift+I)",className:"jse-compact",onClick:V0(),disabled:a4()||!k4()},{type:"separator"},{type:"button",icon:Jn,title:"Sort",className:"jse-sort",onClick:y1(),disabled:a4()||!T4()},{type:"button",icon:Un,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:M4(),disabled:a4()||!q0()},$2,{type:"separator"},{type:"button",icon:xr,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:b4(),disabled:!F0()},{type:"button",icon:Mr,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:n0(),disabled:!E0()},{type:"space"}])}),Y(()=>(M(A()),r(h2)),()=>{z(G4,A()(r(h2))||r(h2))}),L4(),_1(!0),z5(t1,{get items(){return r(G4)}}),u1()})(K,{get readOnly(){return c()},onExpandAll:C,onCollapseAll:_,onFormat:A2,onCompact:e2,onSort:s1,onTransform:U2,onToggleSearch:J2,onUndo:q1,onRedo:S4,get canExpandAll(){return r(_2)},get canCollapseAll(){return r(B)},get canFormat(){return r(Z)},get canCompact(){return r(M2)},get canSort(){return r(D2)},get canTransform(){return r(a1)},get canUndo(){return M(u()),F(()=>u().canUndo)},get canRedo(){return M(u()),F(()=>u().canRedo)},get onRenderMenu(){return k()}})};i2(r3,K=>{l()&&K(J4)});var e4=J(r3,2),P1=K=>{var p2=BS(),_2=J(q(p2),2),B=q(_2),Z=J(_2,2);E2(()=>me(B,"width: ".concat(r(s2)>0?r(y2)/r(s2)*100:0,"%"))),w2("click",Z,O1),T(K,p2)};i2(e4,K=>{r(Q2)&&K(P1)});var B4=J(e4,2),_0=K=>{var p2,_2=Z2(()=>(r(v2),r(o2),F(()=>u0(r(v2),r(o2))))),B=HS(),Z=Y2(B);r0(Z,h1=>z(S2,h1),()=>r(S2));var M2=J(Z,2),D2=h1=>{var G4=IS(),a4=Y2(G4),l4=Z2(()=>(M(Tc),M(po),r(v2),F(()=>"The JSON document is larger than ".concat(Tc(po),", ")+"and may crash your browser when loading it in text mode. Actual size: ".concat(Tc(r(v2).length),"."))));ae(a4,{get icon(){return D6},type:"error",get message(){return r(l4)},actions:[{text:"Open anyway",title:"Open the document in text mode. This may freeze or crash your browser.",onClick:E4},{text:"Open in tree mode",title:"Open the document in tree mode. Tree mode can handle large documents.",onClick:$1},{text:"Cancel",title:"Cancel opening this large document.",onClick:g4}],onClose:j2});var T1=q(J(a4,2));E2(n4=>d1(T1,n4),[()=>(M(M6),r(v2),M(Uc),F(()=>M6(r(v2)||"",Uc)))]),T(h1,G4)};i2(M2,h1=>{r(_2)&&h1(D2)});var a1=J(M2,2),t1=h1=>{var G4=US(),a4=Y2(G4),l4=M4=>{(function(o4,b4){f1(b4,!1);var n0=b(b4,"editorState",8),P4=R(),L1=R(),F0=R(),E0=R(),J0=R();Y(()=>M(n0()),()=>{var h2;z(P4,(h2=n0())===null||h2===void 0||(h2=h2.selection)===null||h2===void 0||(h2=h2.main)===null||h2===void 0?void 0:h2.head)}),Y(()=>(r(P4),M(n0())),()=>{var h2;z(L1,r(P4)!==void 0?(h2=n0())===null||h2===void 0||(h2=h2.doc)===null||h2===void 0?void 0:h2.lineAt(r(P4)):void 0)}),Y(()=>r(L1),()=>{z(F0,r(L1)!==void 0?r(L1).number:void 0)}),Y(()=>(r(L1),r(P4)),()=>{z(E0,r(L1)!==void 0&&r(P4)!==void 0?r(P4)-r(L1).from+1:void 0)}),Y(()=>M(n0()),()=>{var h2;z(J0,(h2=n0())===null||h2===void 0||(h2=h2.selection)===null||h2===void 0||(h2=h2.ranges)===null||h2===void 0?void 0:h2.reduce((H2,K2)=>H2+K2.to-K2.from,0))}),L4(),_1();var k4=qS(),T4=q(k4),q0=h2=>{var H2=TS(),K2=q(H2);E2(()=>{var G2;return d1(K2,"Line: ".concat((G2=r(F0))!==null&&G2!==void 0?G2:""))}),T(h2,H2)};i2(T4,h2=>{r(F0)!==void 0&&h2(q0)});var A=J(T4,2),X=h2=>{var H2=OS(),K2=q(H2);E2(()=>{var G2;return d1(K2,"Column: ".concat((G2=r(E0))!==null&&G2!==void 0?G2:""))}),T(h2,H2)};i2(A,h2=>{r(E0)!==void 0&&h2(X)});var L2=J(A,2),$2=h2=>{var H2=RS(),K2=q(H2);E2(()=>{var G2;return d1(K2,"Selection: ".concat((G2=r(J0))!==null&&G2!==void 0?G2:""," characters"))}),T(h2,H2)};i2(L2,h2=>{r(J0)!==void 0&&r(J0)>0&&h2($2)}),T(o4,k4),u1()})(M4,{get editorState(){return r(f2)}})};i2(a4,M4=>{o()&&M4(l4)});var T1=J(a4,2),n4=M4=>{ae(M4,{type:"error",get icon(){return D6},get message(){return r(B1),F(()=>r(B1).message)},get actions(){return r(t)},onClick:W0,onClose:j2})};i2(T1,M4=>{r(B1)&&M4(n4)});var V0=J(T1,2),y1=M4=>{var o4=Z2(()=>[{icon:xp,text:"Format",title:"Format JSON: add proper indentation and new lines (Ctrl+I)",onClick:A2},{icon:Vn,text:"No thanks",title:"Close this message",onClick:()=>z(d2,!1)}]);ae(M4,{type:"success",message:"Do you want to format the JSON?",get actions(){return r(o4)},onClose:j2})};i2(V0,M4=>{r(B1),r(d2),M(Dd),r(v2),F(()=>!r(B1)&&r(d2)&&Dd(r(v2)))&&M4(y1)}),Ts(J(V0,2),{get validationErrors(){return r(P2)},selectError:V1}),T(h1,G4)};i2(a1,h1=>{r(_2)||h1(t1)}),E2(()=>p2=A1(Z,1,"jse-contents svelte-k2b9e6",null,p2,{"jse-hidden":r(_2)})),T(K,B)},h0=K=>{T(K,WS())};return i2(B4,K=>{u2?K(h0,!1):K(_0)}),r0(d0,K=>z(q2,K),()=>r(q2)),E2(()=>i3=A1(d0,1,"jse-text-mode svelte-k2b9e6",null,i3,{"no-main-menu":!l()})),T(e,d0),M1(a,"focus",j2),M1(a,"collapse",x1),M1(a,"expand",w),M1(a,"patch",n2),M1(a,"handlePatch",C2),M1(a,"openTransformModal",e1),M1(a,"refresh",a0),M1(a,"flush",f0),M1(a,"validate",V4),u1(R0)}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-inline-value.svelte-1jv89ui {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  line-height: var(--jse-line-height, calc(1em + 4px));
  border: none;
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
  background: transparent;
  color: inherit;
  cursor: inherit;
}
.jse-inline-value.jse-highlight.svelte-1jv89ui {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-inline-value.jse-highlight.jse-active.svelte-1jv89ui {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}`);var GS=a2('<button type="button"> </button>');j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-column-header.svelte-5pxwfq {
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  display: flex;
  gap: var(--jse-padding, 10px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
  width: 100%;
}
.jse-column-header.svelte-5pxwfq:hover {
  background: var(--jse-table-header-background-highlight, #e8e8e8);
}
.jse-column-header.svelte-5pxwfq:not(.jse-column-header.jse-readonly) {
  cursor: pointer;
}
.jse-column-header.svelte-5pxwfq span.jse-column-sort-icon:where(.svelte-5pxwfq) {
  height: 1em;
}`);var KS=a2('<span class="jse-column-sort-icon svelte-5pxwfq"><!></span>'),QS=a2('<button type="button"><span class="jse-column-name"> </span> <!></button>');j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-table-mode-welcome.svelte-1b9gnk8 {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  align-items: center;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode-welcome.svelte-1b9gnk8:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-space.jse-before:where(.svelte-1b9gnk8) {
  flex: 1;
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) {
  display: flex;
  flex-direction: column;
  gap: var(--jse-padding, 10px);
  max-width: 400px;
  margin: 2em var(--jse-padding, 10px);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) .jse-nested-arrays-info:where(.svelte-1b9gnk8) {
  color: var(--jse-panel-color-readonly, #b2b2b2);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) .jse-nested-property:where(.svelte-1b9gnk8) {
  display: flex;
  align-items: center;
  gap: var(--jse-padding, 10px);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) .jse-nested-property:where(.svelte-1b9gnk8) .jse-nested-property-path:where(.svelte-1b9gnk8) {
  flex: 1;
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) .jse-nested-property:where(.svelte-1b9gnk8) .jse-nested-property-path:where(.svelte-1b9gnk8) .jse-nested-property-count:where(.svelte-1b9gnk8) {
  opacity: 0.5;
  white-space: nowrap;
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) button.jse-nested-array-action:where(.svelte-1b9gnk8) {
  text-align: left;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) button.jse-nested-array-action:where(.svelte-1b9gnk8):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) button.jse-nested-array-action:where(.svelte-1b9gnk8):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-space.jse-after:where(.svelte-1b9gnk8) {
  flex: 2;
}`);var XS=a2(`An empty document cannot be opened in table mode. You can go to tree mode instead, or paste
        a JSON Array using <b>Ctrl+V</b>.`,1),YS=a2('<button type="button" class="jse-nested-array-action svelte-1b9gnk8">Extract</button>'),ZS=a2('<div class="jse-nested-property svelte-1b9gnk8"><div class="jse-nested-property-path svelte-1b9gnk8"> <span class="jse-nested-property-count svelte-1b9gnk8"> </span></div> <button type="button" class="jse-nested-array-action svelte-1b9gnk8"> </button> <!></div>'),ek=a2('<div class="jse-table-mode-welcome svelte-1b9gnk8" role="none"><div class="jse-space jse-before svelte-1b9gnk8"></div> <div class="jse-nested-arrays svelte-1b9gnk8"><div class="jse-nested-arrays-title"> </div> <div class="jse-nested-arrays-info svelte-1b9gnk8"><!></div> <!> <button type="button" class="jse-nested-array-action svelte-1b9gnk8">Switch to tree mode</button></div> <div class="jse-space jse-after svelte-1b9gnk8"></div></div>');function ak(e,a){f1(a,!0);var n=I3(()=>a.json?(function(p){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,y=[];return(function L(S,j){y0(S)&&j.length<g&&Object.keys(S).forEach(x=>{L(S[x],j.concat(x))}),p0(S)&&y.push(j)})(p,[]),y})(a.json).slice(0,99).filter(p=>p.length>0):[]),t=I3(()=>!f4(r(n))),c=I3(()=>a.json===void 0&&(a.text===""||a.text===void 0)),l=I3(()=>r(t)?"Object with nested arrays":r(c)?"An empty document":y0(a.json)?"An object":p0(a.json)?"An empty array":"A ".concat(ps(a.json,a.parser))),o=ek();o.__click=()=>a.onClick();var s=J(q(o),2),i=q(s),f=q(i),u=J(i,2),d=q(u),h=p=>{T(p,s3(`An object cannot be opened in table mode. You can open a nested array instead, or open the
        document in tree mode.`))},m=p=>{var g=W1(),y=Y2(g),L=j=>{T(j,XS())},S=j=>{var x=s3();E2(()=>{var E;return d1(x,"".concat((E=r(l))!==null&&E!==void 0?E:""," cannot be opened in table mode. You can open the document in tree mode instead."))}),T(j,x)};i2(y,j=>{r(c)&&!a.readOnly?j(L):j(S,!1)},!0),T(p,g)};i2(d,p=>{r(t)?p(h):p(m,!1)});var v=J(u,2);x0(v,17,()=>r(n),T0,(p,g)=>{var y=I3(()=>(function($){return W2(a.json,$).length})(r(g))),L=ZS(),S=q(L),j=q(S),x=q(J(j)),E=J(S,2);E.__click=()=>a.openJSONEditorModal(r(g));var P=q(E),I=J(E,2),k=$=>{var U=YS();U.__click=()=>a.extractPath(r(g)),T($,U)};i2(I,$=>{a.readOnly||$(k)}),E2($=>{var U;d1(j,'"'.concat($??"",'" ')),d1(x,"(".concat((U=r(y))!==null&&U!==void 0?U:""," ").concat(r(y)!==1?"items":"item",")")),d1(P,a.readOnly?"View":"Edit")},[()=>H3(r(g))]),T(p,L)}),J(v,2).__click=()=>a.onChangeMode(H0.tree),E2(()=>d1(f,r(l))),T(e,o),u1()}Xt(["click"]);j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-column-header.svelte-1wgrwv3 {
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  display: flex;
  gap: var(--jse-padding, 10px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
  width: 100%;
}
.jse-column-header.svelte-1wgrwv3:hover {
  background: var(--jse-table-header-background-highlight, #e8e8e8);
}
.jse-column-header.svelte-1wgrwv3:not(.jse-column-header.jse-readonly) {
  cursor: pointer;
}`);var nk=a2('<button type="button"><!></button>');j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-table-mode.svelte-1p86y3c {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--jse-background-color, #fff);
  min-width: 0;
  min-height: 0;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-text-color, #4d4d4d);
  line-height: var(--jse-line-height, calc(1em + 4px));
}
.jse-table-mode.no-main-menu.svelte-1p86y3c {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-1p86y3c .jse-search-box-container:where(.svelte-1p86y3c) {
  position: relative;
  height: 0;
  top: calc(var(--jse-line-height, calc(1em + 4px)) + 2 * var(--jse-padding, 10px));
  margin-right: calc(var(--jse-padding, 10px) + 20px);
  margin-left: var(--jse-padding, 10px);
  text-align: right;
  z-index: 3;
}
.jse-table-mode.svelte-1p86y3c .jse-hidden-input-label:where(.svelte-1p86y3c) {
  position: fixed;
  right: 0;
  top: 0;
  width: 0;
  height: 0;
}
.jse-table-mode.svelte-1p86y3c .jse-hidden-input-label:where(.svelte-1p86y3c) .jse-hidden-input:where(.svelte-1p86y3c) {
  width: 0;
  height: 0;
  padding: 0;
  border: 0;
  outline: none;
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) {
  flex: 1;
  align-items: flex-start;
  flex-direction: column;
  display: flex;
  overflow: auto;
  overflow-anchor: none;
  scrollbar-gutter: stable;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) {
  border-collapse: collapse;
  border-spacing: 0;
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-invisible-start-section:where(.svelte-1p86y3c) td:where(.svelte-1p86y3c),
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-invisible-end-section:where(.svelte-1p86y3c) td:where(.svelte-1p86y3c) {
  margin: 0;
  padding: 0;
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-search-box-background:where(.svelte-1p86y3c) {
  background: var(--jse-table-header-background, #f5f5f5);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-invisible-end-section:where(.svelte-1p86y3c) td:where(.svelte-1p86y3c) {
  padding-bottom: var(--jse-padding, 10px);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c):hover {
  background-color: var(--jse-table-row-odd-background, rgba(0, 0, 0, 0.05));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) {
  padding: 0 var(--jse-padding, 10px) 0 0;
  vertical-align: top;
  white-space: nowrap;
  height: var(--jse-line-height, calc(1em + 4px));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-header:where(.svelte-1p86y3c), .jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-gutter:where(.svelte-1p86y3c) {
  font-weight: normal;
  text-align: left;
  color: var(--jse-text-readonly, #8d8d8d);
  background: var(--jse-table-header-background, #f5f5f5);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-header:where(.svelte-1p86y3c) {
  padding: 0;
  position: sticky;
  top: 0;
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-header:where(.svelte-1p86y3c) .jse-table-root-error:where(.svelte-1p86y3c) {
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-gutter:where(.svelte-1p86y3c) {
  padding: 0 var(--jse-padding, 10px) 0 calc(0.5 * var(--jse-padding, 10px));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) .jse-value-outer:where(.svelte-1p86y3c) {
  display: inline-block;
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) .jse-value-outer:where(.svelte-1p86y3c):hover {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) .jse-value-outer.jse-selected-value:where(.svelte-1p86y3c) {
  background: var(--jse-selection-background-color, #d3d3d3);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) .jse-context-menu-anchor:where(.svelte-1p86y3c) {
  display: inline-flex;
  position: relative;
  vertical-align: top;
}
.jse-table-mode.svelte-1p86y3c .jse-contents.jse-contents-loading:where(.svelte-1p86y3c) {
  align-items: unset;
}
.jse-table-mode.svelte-1p86y3c .jse-contents.jse-contents-loading:where(.svelte-1p86y3c) .jse-loading-space:where(.svelte-1p86y3c) {
  flex: 1;
}
.jse-table-mode.svelte-1p86y3c .jse-contents.jse-contents-loading:where(.svelte-1p86y3c) .jse-loading:where(.svelte-1p86y3c) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}`);var tk=a2('<div class="jse-table-root-error svelte-1p86y3c"><!></div>'),rk=a2('<th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th>'),ck=a2('<th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th>'),lk=a2('<th class="jse-table-cell jse-table-cell-gutter svelte-1p86y3c"> <!></th>'),ok=a2('<div class="jse-context-menu-anchor svelte-1p86y3c"><!></div>'),sk=a2('<td class="jse-table-cell svelte-1p86y3c"><div><!><!></div> <!></td>'),ik=a2('<td class="jse-table-cell svelte-1p86y3c"></td>'),fk=a2('<tr class="jse-table-row svelte-1p86y3c"><!><!><!></tr>'),uk=a2('<div class="jse-search-box-container svelte-1p86y3c"><!></div> <div class="jse-contents svelte-1p86y3c"><table class="jse-table-main svelte-1p86y3c"><tbody><tr class="jse-table-row jse-table-row-header svelte-1p86y3c"><th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th><!><!></tr><tr><td class="svelte-1p86y3c"></td></tr><!><tr class="jse-table-invisible-end-section svelte-1p86y3c"><td class="svelte-1p86y3c"></td></tr></tbody></table></div> <!> <!> <!> <!>',1),dk=a2("<!> <!>",1),pk=a2('<label class="jse-hidden-input-label svelte-1p86y3c"><input type="text" tabindex="-1" class="jse-hidden-input svelte-1p86y3c"/></label> <!>',1),vk=a2('<div class="jse-contents jse-contents-loading svelte-1p86y3c"><div class="jse-loading-space svelte-1p86y3c"></div> <div class="jse-loading svelte-1p86y3c">loading...</div></div>'),mk=a2('<div role="table"><!> <!></div> <!> <!>',1);function hk(e,a){f1(a,!1);var n=R(void 0,!0),t=R(void 0,!0),c=R(void 0,!0),l=t3("jsoneditor:TableMode"),{openAbsolutePopup:o,closeAbsolutePopup:s}=ga("absolute-popup"),i=wm(),f=wa(),u=wa(),d=typeof window>"u";l("isSSR:",d);var h=b(a,"readOnly",9),m=b(a,"externalContent",9),v=b(a,"externalSelection",9),p=b(a,"history",9),g=b(a,"truncateTextSize",9),y=b(a,"mainMenuBar",9),L=b(a,"escapeControlCharacters",9),S=b(a,"escapeUnicodeCharacters",9),j=b(a,"flattenColumns",9),x=b(a,"parser",9),E=b(a,"parseMemoizeOne",9),P=b(a,"validator",9),I=b(a,"validationParser",9),k=b(a,"indentation",9),$=b(a,"onChange",9),U=b(a,"onChangeMode",9),O=b(a,"onSelect",9),c2=b(a,"onUndo",9),u2=b(a,"onRedo",9),l2=b(a,"onRenderValue",9),S2=b(a,"onRenderMenu",9),q2=b(a,"onRenderContextMenu",9),f2=b(a,"onFocus",9),o2=b(a,"onBlur",9),d2=b(a,"onSortModal",9),P2=b(a,"onTransformModal",9),Q2=b(a,"onJSONEditorModal",9),y2=R(void 0,!0),s2=R(void 0,!0),z2=R(void 0,!0),o1=R(void 0,!0),E1=R(void 0,!0);Ps({onMount:x3,onDestroy:ze,getWindow:()=>er(r(s2)),hasFocus:()=>F2&&document.hasFocus()||gs(r(s2)),onFocus:()=>{O1=!0,f2()&&f2()()},onBlur:()=>{O1=!1,o2()&&o2()()}});var m2,G=R(void 0,!0),b2=R(void 0,!0),H=R(void 0,!0),v2=R(void 0,!0),Q=R(void 0,!0),O2=R(void 0,!0),t2=R(!1,!0),W=R(!1,!0);function b1(A){z(O2,(m2=A)?um(r(G),m2.items):void 0)}function i1(A){return j2.apply(this,arguments)}function j2(){return(j2=z1(function*(A){z(r2,void 0),yield a0(A)})).apply(this,arguments)}function x1(){z(t2,!1),z(W,!1),X2()}var I2=R(1e4,!0),V2=R([],!0),m1=R(void 0,!0),F2=!1,O1=!1,w=R(!1,!0),C=R({},!0),_=R(600,!0),D=R(0,!0),n2=18;function C2(A){z(r2,A)}function A2(A){r(r2)&&A!==void 0&&(d3(A,Qa(r(r2)))&&d3(A,r1(r(r2)))||(l("clearing selection: path does not exist anymore",r(r2)),z(r2,void 0)))}var e2=R(r(G)!==void 0?Io({json:r(G)}):void 0,!0),r2=R(Ft(v())?v():void 0,!0),s1=R(void 0,!0),e1=R(!1,!0);function U2(A){if(!h()){l("onSortByHeader",A);var X=A.sortDirection===de.desc?-1:1;Q1(_m(r(G),[],A.path,X),(L2,$2)=>({state:$2,sortedColumn:A}))}}x3(()=>{r(r2)&&L0(r1(r(r2)))});var J2=R(void 0,!0);function q1(A){if(A.json!==void 0||A.text!==void 0){var X=r(G)!==void 0&&A.json!==void 0;p().add({type:"tree",undo:{patch:X?[{op:"replace",path:"",value:A.json}]:void 0,json:A.json,text:A.text,documentState:A.documentState,textIsRepaired:A.textIsRepaired,selection:We(A.selection),sortedColumn:A.sortedColumn},redo:{patch:X?[{op:"replace",path:"",value:r(G)}]:void 0,json:r(G),text:r(b2),documentState:r(e2),textIsRepaired:r(e1),selection:We(r(r2)),sortedColumn:r(s1)}})}}var S4=R([],!0),E4=z8(Cm);function $1(A,X,L2,$2){X8(()=>{var h2;try{h2=E4(A,X,L2,$2)}catch(H2){h2=[{path:[],message:"Failed to validate: "+H2.message,severity:he.warning}]}H1(h2,r(S4))||(l("validationErrors changed:",h2),z(S4,h2))},h2=>l("validationErrors updated in ".concat(h2," ms")))}function g4(){return l("validate"),r(H)?{parseError:r(H),isRepairable:!1}:($1(r(G),P(),x(),I()),f4(r(S4))?void 0:{validationErrors:r(S4)})}function V1(A,X){if(l("patch",A,X),r(G)===void 0)throw new Error("Cannot apply patch: no JSON");var L2=r(G),$2={json:void 0,text:r(b2),documentState:r(e2),selection:We(r(r2)),sortedColumn:r(s1),textIsRepaired:r(e1)},h2=fm(r(G),A),H2=Zv(r(G),r(e2),A),K2=aS(r(s1),A,r(V2)),G2=typeof X=="function"?X(H2.json,H2.documentState,r(r2)):void 0;return z(G,G2?.json!==void 0?G2.json:H2.json),z(e2,G2?.state!==void 0?G2.state:H2.documentState),z(r2,G2?.selection!==void 0?G2.selection:r(r2)),z(s1,G2?.sortedColumn!==void 0?G2.sortedColumn:K2),z(b2,void 0),z(e1,!1),z(v2,void 0),z(Q,void 0),z(H,void 0),p().add({type:"tree",undo:N2({patch:h2},$2),redo:{patch:A,json:void 0,text:void 0,documentState:r(e2),selection:We(r(r2)),sortedColumn:r(s1),textIsRepaired:r(e1)}}),{json:r(G),previousJson:L2,undo:h2,redo:A}}function Q1(A,X){l("handlePatch",A,X);var L2={json:r(G),text:r(b2)},$2=V1(A,X);return p4(L2,$2),$2}function p4(A,X){if((A.json!==void 0||A?.text!==void 0)&&$()){if(r(b2)!==void 0){var L2={text:r(b2),json:void 0};$()(L2,A,{contentErrors:g4(),patchResult:X})}else if(r(G)!==void 0){var $2={text:void 0,json:r(G)};$()($2,A,{contentErrors:g4(),patchResult:X})}}}function p1(A){l("pasted json as text",A),z(v2,A)}function z4(A){l("pasted multiline text",{pastedText:A}),z(Q,A)}function S1(A){var X=parseInt(A[0],10),L2=[String(X+1),...A.slice(1)];return d3(r(G),L2)?K1(L2):K1(A)}function X2(){l("focus"),r(o1)&&(r(o1).focus(),r(o1).select())}function X1(A){z(D,A.target.scrollTop)}function D1(){r(r2)||z(r2,(function(){if(p0(r(G))&&!f4(r(G))&&!f4(r(V2)))return K1(["0",...r(V2)[0]])})())}function W4(){if(r(e1)&&r(G)!==void 0){var A={json:r(G),text:r(b2)},X={json:r(G),documentState:r(e2),selection:r(r2),sortedColumn:r(s1),text:r(b2),textIsRepaired:r(e1)};z(b2,void 0),z(e1,!1),A2(r(G)),q1(X),p4(A,void 0)}return{json:r(G),text:r(b2)}}function a0(A){var{scrollToWhenVisible:X=!0}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},L2=r(t2)?kt:0,$2=wp(A,r(V2),C,n2),h2=$2-r(D)+L2+n2,H2=c0(A);if(l("scrollTo",{path:A,top:$2,scrollTop:r(D),elem:H2}),!r(z2))return Promise.resolve();var K2=r(z2).getBoundingClientRect();if(H2&&!X){var G2=H2.getBoundingClientRect();if(G2.bottom>K2.top&&G2.top<K2.bottom)return Promise.resolve()}var I1=-Math.max(L2+2*n2,K2.height/4);return new Promise(H2?s4=>{i(H2,{container:r(z2),offset:I1,duration:300,callback:()=>{Y4(A),s4()}})}:s4=>{i(h2,{container:r(z2),offset:I1,duration:300,callback:()=>{t0(),Y4(A),s4()}})})}function Y4(A){var X=c0(A);if(X&&r(z2)){var L2=r(z2).getBoundingClientRect(),$2=X.getBoundingClientRect();if($2.right>L2.right){var h2=$2.right-L2.right;Y3(z2,r(z2).scrollLeft+=h2)}if($2.left<L2.left){var H2=L2.left-$2.left;Y3(z2,r(z2).scrollLeft-=H2)}}}function L0(A){(function(X){if(r(z2)){var{rowIndex:L2}=fe(X,r(V2)),$2=wp(X,r(V2),C,n2),h2=$2+(C[L2]||n2),H2=n2,K2=r(z2).getBoundingClientRect(),G2=r(D),I1=r(D)+K2.height-H2;if(h2>I1){var s4=h2-I1;Y3(z2,r(z2).scrollTop+=s4)}if($2<G2){var t4=G2-$2;Y3(z2,r(z2).scrollTop-=t4)}}})(A),Y4(A)}function c0(A){var X,L2,$2=r(V2).find(H2=>Xe(A.slice(1),H2)),h2=$2?A.slice(0,1).concat($2):A;return(X=(L2=r(z2))===null||L2===void 0?void 0:L2.querySelector('td[data-path="'.concat(Ec(h2),'"]')))!==null&&X!==void 0?X:void 0}function m0(A){var X,{anchor:L2,left:$2,top:h2,width:H2,height:K2,offsetTop:G2,offsetLeft:I1,showTip:s4}=A,t4=(function(V){var{json:g2,documentState:B2,selection:R2,readOnly:T2,onEditValue:w1,onEditRow:C1,onToggleEnforceString:J1,onCut:N4,onCopy:r4,onPaste:Z4,onRemove:k1,onDuplicateRow:g0,onInsertBeforeRow:I4,onInsertAfterRow:z0,onRemoveRow:x4}=V,g1=g2!==void 0,i4=!!R2,N1=g2!==void 0&&R2?W2(g2,r1(R2)):void 0,l1=g1&&(Q4(R2)||n3(R2)||h4(R2)),R1=!T2&&g1&&R2!==void 0&&Vc(R2),C0=R1&&!M0(N1),U4=!T2&&l1,b0=R2!==void 0&&Je(g2,B2,r1(R2));return[{type:"separator"},{type:"row",items:[{type:"column",items:[{type:"label",text:"Table cell:"},{type:"dropdown-button",main:{type:"button",onClick:()=>w1(),icon:Sa,text:"Edit",title:"Edit the value (Double-click on the value)",disabled:!R1},width:"11em",items:[{type:"button",icon:Sa,text:"Edit",title:"Edit the value (Double-click on the value)",onClick:()=>w1(),disabled:!R1},{type:"button",icon:b0?Y5:al,text:"Enforce string",title:"Enforce keeping the value as string when it contains a numeric value",onClick:()=>J1(),disabled:!C0}]},{type:"dropdown-button",main:{type:"button",onClick:()=>N4(!0),icon:ka,text:"Cut",title:"Cut selected contents, formatted with indentation (Ctrl+X)",disabled:!U4},width:"10em",items:[{type:"button",icon:ka,text:"Cut formatted",title:"Cut selected contents, formatted with indentation (Ctrl+X)",onClick:()=>N4(!0),disabled:T2||!l1},{type:"button",icon:ka,text:"Cut compacted",title:"Cut selected contents, without indentation (Ctrl+Shift+X)",onClick:()=>N4(!1),disabled:T2||!l1}]},{type:"dropdown-button",main:{type:"button",onClick:()=>r4(!0),icon:l6,text:"Copy",title:"Copy selected contents, formatted with indentation (Ctrl+C)",disabled:!l1},width:"12em",items:[{type:"button",icon:l6,text:"Copy formatted",title:"Copy selected contents, formatted with indentation (Ctrl+C)",onClick:()=>r4(!1),disabled:!l1},{type:"button",icon:l6,text:"Copy compacted",title:"Copy selected contents, without indentation (Ctrl+Shift+C)",onClick:()=>r4(!1),disabled:!l1}]},{type:"button",onClick:()=>Z4(),icon:K5,text:"Paste",title:"Paste clipboard contents (Ctrl+V)",disabled:T2||!i4},{type:"button",onClick:()=>k1(),icon:br,text:"Remove",title:"Remove selected contents (Delete)",disabled:T2||!l1}]},{type:"column",items:[{type:"label",text:"Table row:"},{type:"button",onClick:()=>C1(),icon:Sa,text:"Edit row",title:"Edit the current row",disabled:T2||!i4||!g1},{type:"button",onClick:()=>g0(),icon:X5,text:"Duplicate row",title:"Duplicate the current row (Ctrl+D)",disabled:T2||!i4||!g1},{type:"button",onClick:()=>I4(),icon:Na,text:"Insert before",title:"Insert a row before the current row",disabled:T2||!i4||!g1},{type:"button",onClick:()=>z0(),icon:Na,text:"Insert after",title:"Insert a row after the current row",disabled:T2||!i4||!g1},{type:"button",onClick:()=>x4(),icon:br,text:"Remove row",title:"Remove current row",disabled:T2||!i4||!g1}]}]}]})({json:r(G),documentState:r(e2),selection:r(r2),readOnly:h(),onEditValue:D0,onEditRow:A0,onToggleEnforceString:O0,onCut:i3,onCopy:r3,onPaste:B1,onRemove:e4,onDuplicateRow:B4,onInsertBeforeRow:_0,onInsertAfterRow:h0,onRemoveRow:K}),l0=(X=q2()(t4))!==null&&X!==void 0?X:t4;if(l0!==!1){var G0={left:$2,top:h2,offsetTop:G2,offsetLeft:I1,width:H2,height:K2,anchor:L2,closeOnOuterClick:!0,onClose:()=>{F2=!1,X2()}};F2=!0;var N=o(Bm,{tip:s4?"Tip: you can open this context menu via right-click or with Ctrl+Q":void 0,items:l0,onRequestClose(){s(N),X2()}},G0)}}function N0(A){if(!e3(r(r2)))if(A&&(A.stopPropagation(),A.preventDefault()),A&&A.type==="contextmenu"&&A.target!==r(o1))m0({left:A.clientX,top:A.clientY,width:L6,height:x6,showTip:!1});else{var X,L2=(X=r(z2))===null||X===void 0?void 0:X.querySelector(".jse-table-cell.jse-selected-value");if(L2)m0({anchor:L2,offsetTop:2,width:L6,height:x6,showTip:!1});else{var $2,h2=($2=r(z2))===null||$2===void 0?void 0:$2.getBoundingClientRect();h2&&m0({top:h2.top+2,left:h2.left+2,width:L6,height:x6,showTip:!1})}}}function f0(A){m0({anchor:Gv(A.target,"BUTTON"),offsetTop:0,width:L6,height:x6,showTip:!0})}function D0(){if(!h()&&r(r2)){var A=r1(r(r2));M0(W2(r(G),A))?t1(A):z(r2,K1(A))}}function A0(){!h()&&r(r2)&&t1(r1(r(r2)).slice(0,1))}function O0(){if(!h()&&h4(r(r2))){var A=r(r2).path,X=c1(A),L2=W2(r(G),A),$2=!Je(r(G),r(e2),A),h2=$2?String(L2):wn(String(L2),x());l("handleToggleEnforceString",{enforceString:$2,value:L2,updatedValue:h2}),Q1([{op:"replace",path:X,value:h2}],(H2,K2)=>({state:u5(r(G),K2,A,{type:"value",enforceString:$2})}))}}function u0(){return x2.apply(this,arguments)}function x2(){return(x2=z1(function*(){if(l("apply pasted json",r(v2)),r(v2)){var{onPasteAsJson:A}=r(v2);A(),setTimeout(X2)}})).apply(this,arguments)}function B1(){return w4.apply(this,arguments)}function w4(){return(w4=z1(function*(){try{B(yield navigator.clipboard.readText())}catch(A){console.error(A),z(w,!0)}})).apply(this,arguments)}function V4(){return w0.apply(this,arguments)}function w0(){return(w0=z1(function*(){l("apply pasted multiline text",r(Q)),r(Q)&&(B(JSON.stringify(r(Q))),setTimeout(X2))})).apply(this,arguments)}function W0(){l("clear pasted json"),z(v2,void 0),X2()}function G1(){l("clear pasted multiline text"),z(Q,void 0),X2()}function R0(){U()(H0.text)}function i3(A){return d0.apply(this,arguments)}function d0(){return(d0=z1(function*(A){yield Om({json:r(G),selection:r(r2),indentation:A?k():void 0,readOnly:h(),parser:x(),onPatch:Q1})})).apply(this,arguments)}function r3(){return J4.apply(this,arguments)}function J4(){return J4=z1(function*(){var A=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];r(G)!==void 0&&(yield Rm({json:r(G),selection:r(r2),indentation:A?k():void 0,parser:x()}))}),J4.apply(this,arguments)}function e4(){$m({json:r(G),text:r(b2),selection:r(r2),keepSelection:!0,readOnly:h(),onChange:$(),onPatch:Q1})}function P1(A){h()||(l("extract",{path:A}),Q1(om(r(G),K1(A))))}function B4(){(function(A){var{json:X,selection:L2,columns:$2,readOnly:h2,onPatch:H2}=A;if(!h2&&X!==void 0&&L2&&K8(L2)){var{rowIndex:K2,columnIndex:G2}=fe(r1(L2),$2);N3("duplicate row",{rowIndex:K2});var I1=[String(K2)];H2(lm(X,[I1]),(s4,t4)=>({state:t4,selection:K1(Fa({rowIndex:K2<X.length?K2+1:K2,columnIndex:G2},$2))}))}})({json:r(G),selection:r(r2),columns:r(V2),readOnly:h(),onPatch:Q1})}function _0(){(function(A){var{json:X,selection:L2,columns:$2,readOnly:h2,onPatch:H2}=A;if(!h2&&X!==void 0&&L2&&K8(L2)){var{rowIndex:K2}=fe(r1(L2),$2);N3("insert before row",{rowIndex:K2}),H2(Q8(X,[String(K2)],[{key:"",value:y0(X[0])?{}:""}]))}})({json:r(G),selection:r(r2),columns:r(V2),readOnly:h(),onPatch:Q1})}function h0(){(function(A){var{json:X,selection:L2,columns:$2,readOnly:h2,onPatch:H2}=A;if(!h2&&X!==void 0&&L2&&K8(L2)){var{rowIndex:K2,columnIndex:G2}=fe(r1(L2),$2);N3("insert after row",{rowIndex:K2});var I1=K2+1,s4=[String(I1)],t4=[{key:"",value:y0(X[0])?{}:""}];H2(I1<X.length?Q8(X,s4,t4):Wo(X,[],t4),(l0,G0)=>({state:G0,selection:K1(Fa({rowIndex:I1,columnIndex:G2},$2))}))}})({json:r(G),selection:r(r2),columns:r(V2),readOnly:h(),onPatch:Q1})}function K(){(function(A){var{json:X,selection:L2,columns:$2,readOnly:h2,onPatch:H2}=A;if(!h2&&X!==void 0&&L2&&K8(L2)){var{rowIndex:K2,columnIndex:G2}=fe(r1(L2),$2);N3("remove row",{rowIndex:K2}),H2(Kc([[String(K2)]]),(I1,s4)=>{var t4=K2<I1.length?K2:K2>0?K2-1:void 0,l0=t4!==void 0?K1(Fa({rowIndex:t4,columnIndex:G2},$2)):void 0;return N3("remove row new selection",{rowIndex:K2,newRowIndex:t4,newSelection:l0}),{state:s4,selection:l0}})}})({json:r(G),selection:r(r2),columns:r(V2),readOnly:h(),onPatch:Q1})}function p2(){return(p2=z1(function*(A){yield Dm({char:A,selectInside:!1,json:r(G),selection:r(r2),readOnly:h(),parser:x(),onPatch:Q1,onReplaceJson:Z,onSelect:C2})})).apply(this,arguments)}function _2(A){var X;A.preventDefault(),B((X=A.clipboardData)===null||X===void 0?void 0:X.getData("text/plain"))}function B(A){A!==void 0&&qm({clipboardText:A,json:r(G),selection:r(r2),readOnly:h(),parser:x(),onPatch:Q1,onChangeText:M2,onPasteMultilineText:z4,openRepairModal:h1})}function Z(A,X){var L2={json:r(G),text:r(b2)},$2={json:r(G),documentState:r(e2),selection:r(r2),sortedColumn:r(s1),text:r(b2),textIsRepaired:r(e1)},h2=X3(A,r(e2)),H2=typeof X=="function"?X(A,h2,r(r2)):void 0;z(G,H2?.json!==void 0?H2.json:A),z(e2,H2?.state!==void 0?H2.state:h2),z(r2,H2?.selection!==void 0?H2.selection:r(r2)),z(s1,void 0),z(b2,void 0),z(e1,!1),z(H,void 0),A2(r(G)),q1($2),p4(L2,void 0)}function M2(A,X){l("handleChangeText");var L2={json:r(G),text:r(b2)},$2={json:r(G),documentState:r(e2),selection:r(r2),sortedColumn:r(s1),text:r(b2),textIsRepaired:r(e1)};try{z(G,E()(A)),z(e2,X3(r(G),r(e2))),z(b2,void 0),z(e1,!1),z(H,void 0)}catch(H2){try{z(G,E()(re(A))),z(e2,X3(r(G),r(e2))),z(b2,A),z(e1,!0),z(H,void 0)}catch{z(G,void 0),z(e2,void 0),z(b2,A),z(e1,!1),z(H,r(b2)!==""?un(r(b2),H2.message||String(H2)):void 0)}}if(typeof X=="function"){var h2=X(r(G),r(e2),r(r2));z(G,h2?.json!==void 0?h2.json:r(G)),z(e2,h2?.state!==void 0?h2.state:r(e2)),z(r2,h2?.selection!==void 0?h2.selection:r(r2))}A2(r(G)),q1($2),p4(L2,void 0)}function D2(A){l("select validation error",A),z(r2,K1(A.path)),a0(A.path)}function a1(A){if(r(G)!==void 0){var{id:X,onTransform:L2,onClose:$2}=A,h2=A.rootPath||[];F2=!0,P2()({id:X||u,json:r(G),rootPath:h2||[],onTransform:H2=>{L2?L2({operations:H2,json:r(G),transformedJson:O3(r(G),H2)}):(l("onTransform",h2,H2),Q1(H2))},onClose:()=>{F2=!1,setTimeout(X2),$2&&$2()}})}}function t1(A){l("openJSONEditorModal",{path:A}),F2=!0,Q2()({content:{json:W2(r(G),A)},path:A,onPatch:Q1,onClose:()=>{F2=!1,setTimeout(X2)}})}function h1(A,X){z(E1,{text:A,onParse:L2=>Zt(L2,$2=>Yt($2,x())),onRepair:Fv,onApply:X,onClose:X2})}function G4(){(function(A){h()||r(G)===void 0||(F2=!0,d2()({id:f,json:r(G),rootPath:A,onSort:X=>{var{operations:L2,itemPath:$2,direction:h2}=X;l("onSort",L2,A,$2,h2),Q1(L2,(H2,K2)=>({state:K2,sortedColumn:{path:$2,sortDirection:h2===-1?de.desc:de.asc}}))},onClose:()=>{F2=!1,setTimeout(X2)}}))})([])}function a4(){a1({rootPath:[]})}function l4(A){l("openFind",{findAndReplace:A}),z(t2,!1),z(W,!1),t0(),z(t2,!0),z(W,A)}function T1(){if(!h()&&p().canUndo){var A=p().undo();if(Wc(A)){var X={json:r(G),text:r(b2)};z(G,A.undo.patch?O3(r(G),A.undo.patch):A.undo.json),z(e2,A.undo.documentState),z(r2,A.undo.selection),z(s1,A.undo.sortedColumn),z(b2,A.undo.text),z(e1,A.undo.textIsRepaired),z(H,void 0),l("undo",{item:A,json:r(G)}),p4(X,A.undo.patch&&A.redo.patch?{json:r(G),previousJson:X.json,redo:A.undo.patch,undo:A.redo.patch}:void 0),X2(),r(r2)&&a0(r1(r(r2)),{scrollToWhenVisible:!1})}else c2()(A)}}function n4(){if(!h()&&p().canRedo){var A=p().redo();if(Wc(A)){var X={json:r(G),text:r(b2)};z(G,A.redo.patch?O3(r(G),A.redo.patch):A.redo.json),z(e2,A.redo.documentState),z(r2,A.redo.selection),z(s1,A.redo.sortedColumn),z(b2,A.redo.text),z(e1,A.redo.textIsRepaired),z(H,void 0),l("redo",{item:A,json:r(G)}),p4(X,A.undo.patch&&A.redo.patch?{json:r(G),previousJson:X.json,redo:A.redo.patch,undo:A.undo.patch}:void 0),X2(),r(r2)&&a0(r1(r(r2)),{scrollToWhenVisible:!1})}else u2()(A)}}function V0(A){z(_,A.getBoundingClientRect().height)}Y(()=>(M(L()),M(S())),()=>{z(y2,ms({escapeControlCharacters:L(),escapeUnicodeCharacters:S()}))}),Y(()=>r(t2),()=>{(function(A){if(r(z2)){var X=A?kt:-100;r(z2).scrollTo({top:Y3(z2,r(z2).scrollTop+=X),left:r(z2).scrollLeft})}})(r(t2))}),Y(()=>M(m()),()=>{(function(A){var X={json:r(G)},L2=Ot(A)?A.text!==r(b2):!H1(X.json,A.json);if(l("update external content",{isChanged:L2}),L2){var $2={json:r(G),documentState:r(e2),selection:r(r2),sortedColumn:r(s1),text:r(b2),textIsRepaired:r(e1)};if(Ot(A))try{z(G,E()(A.text)),z(e2,X3(r(G),r(e2))),z(b2,A.text),z(e1,!1),z(H,void 0)}catch(h2){try{z(G,E()(re(A.text))),z(e2,X3(r(G),r(e2))),z(b2,A.text),z(e1,!0),z(H,void 0)}catch{z(G,void 0),z(e2,void 0),z(b2,A.text),z(e1,!1),z(H,r(b2)!==""?un(r(b2),h2.message||String(h2)):void 0)}}else z(G,A.json),z(e2,X3(r(G),r(e2))),z(b2,void 0),z(e1,!1),z(H,void 0);A2(r(G)),z(s1,void 0),q1($2)}})(m())}),Y(()=>M(v()),()=>{(function(A){H1(r(r2),A)||(l("applyExternalSelection",{selection:r(r2),externalSelection:A}),Ft(A)&&z(r2,A))})(v())}),Y(()=>(r(V2),r(G),M(j()),r(I2)),()=>{z(V2,p0(r(G))?(function(A,X){var L2=new Set(X.map(c1)),$2=new Set(A.map(c1));for(var h2 of L2)$2.has(h2)||L2.delete(h2);for(var H2 of $2)L2.has(H2)||L2.add(H2);return[...L2].map(w3)})(Xj(r(G),j(),r(I2)),r(V2)):[])}),Y(()=>(r(G),r(V2)),()=>{z(m1,!(!r(G)||f4(r(V2))))}),Y(()=>(r(G),r(I2)),()=>{z(n,Array.isArray(r(G))&&r(G).length>r(I2))}),Y(()=>(r(D),r(_),r(G),r(t2),kt),()=>{z(t,Yj(r(D),r(_),r(G),C,n2,r(t2)?kt:0))}),Y(()=>r(G),()=>{r(G),r(z2)&&r(z2).scrollTo({top:r(z2).scrollTop,left:r(z2).scrollLeft})}),Y(()=>r(r2),()=>{var A;A=r(r2),H1(A,v())||(l("onSelect",A),O()(A))}),Y(()=>(M(h()),M(g()),M(x()),r(y2),r(G),r(e2),M(l2())),()=>{z(J2,{mode:H0.table,readOnly:h(),truncateTextSize:g(),parser:x(),normalization:r(y2),getJson:()=>r(G),getDocumentState:()=>r(e2),findElement:c0,findNextInside:S1,focus:X2,onPatch:(A,X)=>Q1((function(L2,$2){return L2.flatMap(h2=>{if(dr(h2)){var H2=w3(h2.path);if(H2.length>0){for(var K2=[h2],G2=Y1(H2);G2.length>0&&!d3($2,G2);)K2.unshift({op:"add",path:c1(G2),value:{}}),G2=Y1(G2);return K2}}return h2})})(A,r(G)),X),onSelect:C2,onFind:l4,onPasteJson:p1,onRenderValue:l2()})}),Y(()=>(r(G),M(P()),M(x()),M(I())),()=>{$1(r(G),P(),x(),I())}),Y(()=>(r(S4),r(V2)),()=>{z(c,Zj(r(S4),r(V2)))}),L4();var y1={validate:g4,patch:V1,focus:X2,acceptAutoRepair:W4,scrollTo:a0,findElement:c0,openTransformModal:a1};_1(!0);var M4=mk();w2("mousedown",j6,function(A){!Cn(A.target,X=>X===r(s2))&&e3(r(r2))&&(l("click outside the editor, exit edit mode"),z(r2,We(r(r2))),O1&&r(o1)&&(r(o1).focus(),r(o1).blur()),l("blur (outside editor)"),r(o1)&&r(o1).blur())});var o4,b4=Y2(M4),n0=q(b4),P4=A=>{(function(X,L2){f1(L2,!1);var $2=b(L2,"containsValidArray",9),h2=b(L2,"readOnly",9),H2=b(L2,"showSearch",13,!1),K2=b(L2,"history",9),G2=b(L2,"onSort",9),I1=b(L2,"onTransform",9),s4=b(L2,"onContextMenu",9),t4=b(L2,"onUndo",9),l0=b(L2,"onRedo",9),G0=b(L2,"onRenderMenu",9);function N(){H2(!H2())}var V=R(void 0,!0),g2=R(void 0,!0);Y(()=>(M(h2()),M(G2()),M($2()),M(I1()),M(s4()),M(t4()),M(K2()),M(l0())),()=>{z(V,h2()?[{type:"space"}]:[{type:"button",icon:Jn,title:"Sort",className:"jse-sort",onClick:G2(),disabled:h2()||!$2()},{type:"button",icon:Un,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:I1(),disabled:h2()||!$2()},{type:"button",icon:Hn,title:"Search (Ctrl+F)",className:"jse-search",onClick:N,disabled:!$2()},{type:"button",icon:Q5,title:ys,className:"jse-contextmenu",onClick:s4()},{type:"separator"},{type:"button",icon:xr,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:t4(),disabled:!K2().canUndo},{type:"button",icon:Mr,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:l0(),disabled:!K2().canRedo},{type:"space"}])}),Y(()=>(M(G0()),r(V)),()=>{z(g2,G0()(r(V))||r(V))}),L4(),_1(!0),z5(X,{get items(){return r(g2)}}),u1()})(A,{get containsValidArray(){return r(m1)},get readOnly(){return h()},get history(){return p()},onSort:G4,onTransform:a4,onUndo:T1,onRedo:n4,onContextMenu:f0,get onRenderMenu(){return S2()},get showSearch(){return r(t2)},set showSearch(X){z(t2,X)},$$legacy:!0})};i2(n0,A=>{y()&&A(P4)});var L1=J(n0,2),F0=A=>{var X=pk(),L2=Y2(X),$2=q(L2);$2.readOnly=!0,r0($2,G2=>z(o1,G2),()=>r(o1));var h2=J(L2,2),H2=G2=>{var I1=uk(),s4=Y2(I1);Em(q(s4),{get json(){return r(G)},get documentState(){return r(e2)},get parser(){return x()},get showSearch(){return r(t2)},get showReplace(){return r(W)},get readOnly(){return h()},get columns(){return r(V2)},onSearch:b1,onFocus:i1,onPatch:Q1,onClose:x1});var t4=J(s4,2),l0=q(t4),G0=q(l0),N=q(G0),V=q(N),g2=q(V),B2=l1=>{var R1=Z2(()=>(M(D8),r(c),F(()=>{var P0;return D8([],(P0=r(c))===null||P0===void 0?void 0:P0.root)}))),C0=W1(),U4=Y2(C0),b0=P0=>{var f3=tk();rn(q(f3),{get validationError(){return r(R1)},get onExpand(){return ue}}),T(P0,f3)};i2(U4,P0=>{r(R1)&&P0(b0)}),T(l1,C0)};i2(g2,l1=>{M(f4),r(c),F(()=>{var R1;return!f4((R1=r(c))===null||R1===void 0?void 0:R1.root)})&&l1(B2)});var R2=J(V);x0(R2,1,()=>r(V2),T0,(l1,R1)=>{var C0=rk();(function(U4,b0){f1(b0,!1);var P0=R(void 0,!0),f3=R(void 0,!0),a6=R(void 0,!0),V3=b(b0,"path",9),be=b(b0,"sortedColumn",9),Te=b(b0,"readOnly",9),ye=b(b0,"onSort",9);Y(()=>(M(V3()),H3),()=>{z(P0,f4(V3())?"values":H3(V3()))}),Y(()=>(M(be()),M(V3())),()=>{var B0;z(f3,be()&&H1(V3(),(B0=be())===null||B0===void 0?void 0:B0.path)?be().sortDirection:void 0)}),Y(()=>(r(f3),Id),()=>{z(a6,r(f3)?Id[r(f3)]:void 0)}),L4(),_1(!0);var L3,u3=QS(),J3=q(u3),n6=q(J3),G3=J(J3,2),A4=B0=>{var I0=KS(),ba=q(I0),f8=Z2(()=>(r(f3),M(de),M(qe),M(el),F(()=>r(f3)===de.asc?qe:el)));c4(ba,{get data(){return r(f8)}}),E2(()=>j4(I0,"title","Currently sorted in ".concat(r(a6)," order"))),T(B0,I0)};i2(G3,B0=>{r(f3)!==void 0&&B0(A4)}),E2(B0=>{L3=A1(u3,1,"jse-column-header svelte-5pxwfq",null,L3,{"jse-readonly":Te()}),j4(u3,"title",Te()?r(P0):r(P0)+" (Click to sort the data by this column)"),d1(n6,B0)},[()=>(M(M6),r(P0),M(50),F(()=>M6(r(P0),50)))]),w2("click",u3,function(){Te()||ye()({path:V3(),sortDirection:r(f3)===de.asc?de.desc:de.asc})}),T(U4,u3),u1()})(q(C0),{get path(){return r(R1)},get sortedColumn(){return r(s1)},get readOnly(){return h()},onSort:U2}),T(l1,C0)});var T2=J(R2),w1=l1=>{var R1=ck(),C0=q(R1),U4=Z2(()=>(r(G),F(()=>Array.isArray(r(G))?r(G).length:0)));(function(b0,P0){f1(P0,!1);var f3=b(P0,"count",9),a6=b(P0,"maxSampleCount",9),V3=b(P0,"readOnly",9),be=b(P0,"onRefresh",9);_1(!0);var Te,ye=nk();c4(q(ye),{get data(){return i9}}),E2(()=>{Te=A1(ye,1,"jse-column-header svelte-1wgrwv3",null,Te,{"jse-readonly":V3()}),j4(ye,"title","The Columns are created by sampling ".concat(a6()," items out of ").concat(f3(),". ")+"If you're missing a column, click here to sample all of the items instead of a subset. This is slower.")}),w2("click",ye,()=>be()()),T(b0,ye),u1()})(C0,{get count(){return r(U4)},get maxSampleCount(){return r(I2)},get readOnly(){return h()},onRefresh:()=>z(I2,1/0)}),T(l1,R1)};i2(T2,l1=>{r(n)&&l1(w1)});var C1,J1,N4=J(N),r4=q(N4),Z4=J(N4);x0(Z4,1,()=>(r(t),F(()=>r(t).visibleItems)),T0,(l1,R1,C0)=>{var U4=Z2(()=>(r(t),F(()=>r(t).startIndex+C0))),b0=Z2(()=>(r(c),M(r(U4)),F(()=>r(c).rows[r(U4)]))),P0=Z2(()=>(M(D8),M(r(U4)),M(r(b0)),F(()=>{var L3;return D8([String(r(U4))],(L3=r(b0))===null||L3===void 0?void 0:L3.row)}))),f3=Z2(()=>(M(Ue),r(G),r(O2),M(r(U4)),F(()=>Ue(r(G),r(O2),[String(r(U4))])))),a6=fk(),V3=q(a6);kv(V3,()=>r(U4),L3=>{var u3=lk(),J3=q(u3),n6=J(J3),G3=A4=>{rn(A4,{get validationError(){return r(P0)},get onExpand(){return ue}})};i2(n6,A4=>{r(P0)&&A4(G3)}),A3(u3,(A4,B0)=>Cc?.(A4,B0),()=>A4=>(function(B0,I0){C[I0]=B0.getBoundingClientRect().height})(A4,r(U4))),E2(()=>{var A4;return d1(J3,"".concat((A4=r(U4))!==null&&A4!==void 0?A4:""," "))}),T(L3,u3)});var be=J(V3);x0(be,1,()=>r(V2),T0,(L3,u3,J3,n6)=>{var G3,A4=Z2(()=>(M(r(U4)),r(u3),F(()=>[String(r(U4))].concat(r(u3))))),B0=Z2(()=>(M(W2),r(R1),r(u3),F(()=>W2(r(R1),r(u3))))),I0=Z2(()=>(M(h4),r(r2),M(Xe),M(r(A4)),F(()=>h4(r(r2))&&Xe(r(r2).path,r(A4))))),ba=Z2(()=>(M(r(b0)),F(()=>{var U0;return(U0=r(b0))===null||U0===void 0?void 0:U0.columns[J3]}))),f8=Z2(()=>(M(D8),M(r(A4)),M(r(ba)),F(()=>D8(r(A4),r(ba))))),ya=sk(),jn=q(ya),u8=q(jn),Sn=U0=>{var ne=Z2(()=>(M(Qc),M(Ue),r(R1),M(r(f3)),r(u3),F(()=>Qc(Ue(r(R1),r(f3),r(u3)))))),kn=Z2(()=>(M(r(ne)),F(()=>!!r(ne)&&r(ne).some(xa=>xa.active)))),Nn=Z2(()=>(M(f4),M(r(ne)),F(()=>!f4(r(ne)))));(function(xa,v3){f1(v3,!1);var An=b(v3,"path",9),qs=b(v3,"value",9),$s=b(v3,"parser",9),Gm=b(v3,"isSelected",9),Km=b(v3,"containsSearchResult",9),Qm=b(v3,"containsActiveSearchResult",9),Xm=b(v3,"onEdit",9);_1(!0);var Ds,cr=GS(),Ym=q(cr);E2(_n=>{Ds=A1(cr,1,"jse-inline-value svelte-1jv89ui",null,Ds,{"jse-selected":Gm(),"jse-highlight":Km(),"jse-active":Qm()}),d1(Ym,_n)},[()=>(M(M6),M($s()),M(qs()),M(50),F(()=>{var _n;return M6((_n=$s().stringify(qs()))!==null&&_n!==void 0?_n:"",50)}))]),w2("dblclick",cr,()=>Xm()(An())),T(xa,cr),u1()})(U0,{get path(){return r(A4)},get value(){return r(B0)},get parser(){return x()},get isSelected(){return r(I0)},get containsSearchResult(){return r(Nn)},get containsActiveSearchResult(){return r(kn)},onEdit:t1})},b5=U0=>{var ne=Z2(()=>(M(Ue),r(G),r(O2),M(r(A4)),F(()=>{var v3;return(v3=Ue(r(G),r(O2),r(A4)))===null||v3===void 0?void 0:v3.searchResults}))),kn=Z2(()=>r(B0)!==void 0?r(B0):""),Nn=Z2(()=>(M(Je),r(G),r(e2),M(r(A4)),F(()=>Je(r(G),r(e2),r(A4))))),xa=Z2(()=>r(I0)?r(r2):void 0);km(U0,{get path(){return r(A4)},get value(){return r(kn)},get enforceString(){return r(Nn)},get selection(){return r(xa)},get searchResultItems(){return r(ne)},get context(){return r(J2)}})};i2(u8,U0=>{M(M0),M(r(B0)),F(()=>M0(r(B0)))?U0(Sn):U0(b5,!1)});var y5=J(u8),M5=U0=>{var ne=ok();Y6(q(ne),{selected:!0,onContextMenu:m0}),T(U0,ne)};i2(y5,U0=>{M(h()),M(r(I0)),M(e3),r(r2),F(()=>!h()&&r(I0)&&!e3(r(r2)))&&U0(M5)});var Oe=J(jn,2),Ma=U0=>{rn(U0,{get validationError(){return r(f8)},get onExpand(){return ue}})};i2(Oe,U0=>{r(f8)&&U0(Ma)}),E2(U0=>{j4(ya,"data-path",U0),G3=A1(jn,1,"jse-value-outer svelte-1p86y3c",null,G3,{"jse-selected-value":r(I0)})},[()=>(M(Ec),M(r(A4)),F(()=>Ec(r(A4))))]),T(L3,ya)});var Te=J(be),ye=L3=>{T(L3,ik())};i2(Te,L3=>{r(n)&&L3(ye)}),T(l1,a6)});var k1,g0=q(J(Z4));r0(t4,l1=>z(z2,l1),()=>r(z2)),A3(t4,(l1,R1)=>Cc?.(l1,R1),()=>V0),o3(()=>w2("scroll",t4,X1));var I4=J(t4,2),z0=l1=>{var R1=Z2(()=>(r(v2),F(()=>"You pasted a JSON ".concat(Array.isArray(r(v2).contents)?"array":"object"," as text")))),C0=Z2(()=>[{icon:c6,text:"Paste as JSON instead",title:"Paste the text as JSON instead of a single value",onMouseDown:u0},{text:"Leave as is",title:"Keep the pasted content as a single value",onClick:W0}]);ae(l1,{type:"info",get message(){return r(R1)},get actions(){return r(C0)}})};i2(I4,l1=>{r(v2)&&l1(z0)});var x4=J(I4,2),g1=l1=>{var R1=Z2(()=>[{icon:c6,text:"Paste as string instead",title:"Paste the clipboard data as a single string value instead of an array",onClick:V4},{text:"Leave as is",title:"Keep the pasted array",onClick:G1}]);ae(l1,{type:"info",message:"Multiline text was pasted as array",get actions(){return r(R1)}})};i2(x4,l1=>{r(Q)&&l1(g1)});var i4=J(x4,2),N1=l1=>{var R1=Z2(()=>h()?[]:[{icon:yr,text:"Ok",title:"Accept the repaired document",onClick:W4},{icon:Wn,text:"Repair manually instead",title:"Leave the document unchanged and repair it manually instead",onClick:R0}]);ae(l1,{type:"success",message:"The loaded JSON document was invalid but is successfully repaired.",get actions(){return r(R1)},onClose:X2})};i2(i4,l1=>{r(e1)&&l1(N1)}),Ts(J(i4,2),{get validationErrors(){return r(S4)},selectError:D2}),E2(()=>{C1=A1(N4,1,"jse-table-invisible-start-section svelte-1p86y3c",null,C1,{"jse-search-box-background":r(t2)}),j4(r4,"colspan",(r(V2),F(()=>r(V2).length))),J1=me(r4,"",J1,{height:(r(t),F(()=>r(t).startHeight+"px"))}),j4(g0,"colspan",(r(V2),F(()=>r(V2).length))),k1=me(g0,"",k1,{height:(r(t),F(()=>r(t).endHeight+"px"))})}),T(G2,I1)},K2=G2=>{var I1=W1(),s4=Y2(I1),t4=G0=>{var N=dk(),V=Y2(N),g2=Z2(()=>h()?[]:[{icon:Wn,text:"Repair manually",title:'Open the document in "code" mode and repair it manually',onClick:R0}]);ae(V,{type:"error",message:"The loaded JSON document is invalid and could not be repaired automatically.",get actions(){return r(g2)}}),Fm(J(V,2),{get text(){return r(b2)},get json(){return r(G)},get indentation(){return k()},get parser(){return x()}}),T(G0,N)},l0=G0=>{ak(G0,{get text(){return r(b2)},get json(){return r(G)},get readOnly(){return h()},get parser(){return x()},openJSONEditorModal:t1,extractPath:P1,get onChangeMode(){return U()},onClick:()=>{X2()}})};i2(s4,G0=>{r(H)&&r(b2)!==void 0&&r(b2)!==""?G0(t4):G0(l0,!1)},!0),T(G2,I1)};i2(h2,G2=>{r(m1)?G2(H2):G2(K2,!1)}),w2("paste",$2,_2),T(A,X)},E0=A=>{T(A,vk())};i2(L1,A=>{d?A(E0,!1):A(F0)}),r0(b4,A=>z(s2,A),()=>r(s2));var J0=J(b4,2),k4=A=>{jm(A,{onClose:()=>z(w,!1)})};i2(J0,A=>{r(w)&&A(k4)});var T4=J(J0,2),q0=A=>{Sm(A,ua(()=>r(E1),{onClose:()=>{var X;(X=r(E1))===null||X===void 0||X.onClose(),z(E1,void 0)}}))};return i2(T4,A=>{r(E1)&&A(q0)}),E2(()=>o4=A1(b4,1,"jse-table-mode svelte-1p86y3c",null,o4,{"no-main-menu":!y()})),w2("mousedown",b4,function(A){if(A.buttons===1||A.buttons===2){var X=A.target;X.isContentEditable||X2();var L2=Kv(X);if(L2){if(e3(r(r2))&&Bt(r(G),r(r2),L2))return;z(r2,K1(L2)),A.preventDefault()}}}),w2("keydown",b4,function(A){var X=E6(A);if(l("keydown",{combo:X,key:A.key}),X==="Ctrl+X"&&(A.preventDefault(),i3(!0)),X==="Ctrl+Shift+X"&&(A.preventDefault(),i3(!1)),X==="Ctrl+C"&&(A.preventDefault(),r3(!0)),X==="Ctrl+Shift+C"&&(A.preventDefault(),r3(!1)),X==="Ctrl+D"&&(A.preventDefault(),B4()),X!=="Delete"&&X!=="Backspace"||(A.preventDefault(),e4()),X==="Insert"&&A.preventDefault(),X==="Ctrl+A"&&A.preventDefault(),X==="Ctrl+Q"&&N0(A),X==="ArrowLeft"&&(A.preventDefault(),D1(),r(r2))){var L2=(function(I1,s4){var{rowIndex:t4,columnIndex:l0}=fe(r1(s4),I1);return l0>0?K1(Fa({rowIndex:t4,columnIndex:l0-1},I1)):s4})(r(V2),r(r2));z(r2,L2),L0(r1(L2))}if(X==="ArrowRight"&&(A.preventDefault(),D1(),r(r2))){var $2=(function(I1,s4){var{rowIndex:t4,columnIndex:l0}=fe(r1(s4),I1);return l0<I1.length-1?K1(Fa({rowIndex:t4,columnIndex:l0+1},I1)):s4})(r(V2),r(r2));z(r2,$2),L0(r1($2))}if(X==="ArrowUp"&&(A.preventDefault(),D1(),r(r2))){var h2=(function(I1,s4){var{rowIndex:t4,columnIndex:l0}=fe(r1(s4),I1);return t4>0?K1(Fa({rowIndex:t4-1,columnIndex:l0},I1)):s4})(r(V2),r(r2));z(r2,h2),L0(r1(h2))}if(X==="ArrowDown"&&(A.preventDefault(),D1(),r(r2))){var H2=(function(I1,s4,t4){var{rowIndex:l0,columnIndex:G0}=fe(r1(t4),s4);return l0<I1.length-1?K1(Fa({rowIndex:l0+1,columnIndex:G0},s4)):t4})(r(G),r(V2),r(r2));z(r2,H2),L0(r1(H2))}if(X==="Enter"&&r(r2)&&h4(r(r2))){A.preventDefault();var K2=r(r2).path;M0(W2(r(G),K2))?t1(K2):h()||z(r2,N2(N2({},r(r2)),{},{edit:!0}))}if(X.replace(/^Shift\+/,"").length===1&&r(r2))return A.preventDefault(),void(function(I1){p2.apply(this,arguments)})(A.key);if(X==="Ctrl+Enter"&&h4(r(r2))){A.preventDefault();var G2=W2(r(G),r(r2).path);f5(G2)&&window.open(String(G2),"_blank")}X==="Escape"&&r(r2)&&(A.preventDefault(),z(r2,void 0)),X==="Ctrl+F"&&(A.preventDefault(),l4(!1)),X==="Ctrl+H"&&(A.preventDefault(),l4(!0)),X==="Ctrl+Z"&&(A.preventDefault(),T1()),X==="Ctrl+Shift+Z"&&(A.preventDefault(),n4())}),w2("contextmenu",b4,N0),T(e,M4),M1(a,"validate",g4),M1(a,"patch",V1),M1(a,"focus",X2),M1(a,"acceptAutoRepair",W4),M1(a,"scrollTo",a0),M1(a,"findElement",c0),M1(a,"openTransformModal",a1),u1(y1)}function Sp(e,a){f1(a,!1);var n=b(a,"content",8),t=b(a,"selection",12),c=b(a,"readOnly",8),l=b(a,"indentation",8),o=b(a,"tabSize",8),s=b(a,"truncateTextSize",8),i=b(a,"externalMode",8),f=b(a,"mainMenuBar",8),u=b(a,"navigationBar",8),d=b(a,"statusBar",8),h=b(a,"askToFormat",8),m=b(a,"escapeControlCharacters",8),v=b(a,"escapeUnicodeCharacters",8),p=b(a,"flattenColumns",8),g=b(a,"parser",8),y=b(a,"parseMemoizeOne",8),L=b(a,"validator",8),S=b(a,"validationParser",8),j=b(a,"pathParser",8),x=b(a,"insideModal",8),E=b(a,"onChange",8),P=b(a,"onChangeMode",8),I=b(a,"onSelect",8),k=b(a,"onRenderValue",8),$=b(a,"onClassName",8),U=b(a,"onRenderMenu",8),O=b(a,"onRenderContextMenu",8),c2=b(a,"onError",8),u2=b(a,"onFocus",8),l2=b(a,"onBlur",8),S2=b(a,"onSortModal",8),q2=b(a,"onTransformModal",8),f2=b(a,"onJSONEditorModal",8),o2=R(),d2=R(),P2=R(),Q2=t3("jsoneditor:JSONEditorRoot"),y2=R(Jm({onChange:C=>z(y2,C)}).get()),s2=R(i());function z2(C){if(Gd(C)){z(s2,C.undo.mode);var _=r(y2).items(),D=_.findIndex(C2=>C2===C),n2=D!==-1?_[D-1]:void 0;Q2("handleUndo",{index:D,item:C,items:_,prevItem:n2}),n2&&t(n2.redo.selection),P()(r(s2))}}function o1(C){if(Gd(C)){z(s2,C.redo.mode);var _=r(y2).items(),D=_.findIndex(C2=>C2===C),n2=D!==-1?_[D+1]:void 0;Q2("handleRedo",{index:D,item:C,items:_,nextItem:n2}),n2&&t(n2.undo.selection),P()(r(s2))}}var E1=R(),m2={type:"separator"},G=R(),b2=R();function H(C){if(r(o2))return r(o2).patch(C);if(r(d2))return r(d2).patch(C);if(r(P2))return r(P2).patch(C);throw new Error('Method patch is not available in mode "'.concat(r(s2),'"'))}function v2(C,_){if(r(o2))return r(o2).expand(C,_);if(r(P2))return r(P2).expand(C,_);throw new Error('Method expand is not available in mode "'.concat(r(s2),'"'))}function Q(C,_){if(r(o2))return r(o2).collapse(C,_);if(r(P2))return r(P2).collapse(C,_);throw new Error('Method collapse is not available in mode "'.concat(r(s2),'"'))}function O2(C){if(r(P2))r(P2).openTransformModal(C);else if(r(o2))r(o2).openTransformModal(C);else{if(!r(d2))throw new Error('Method transform is not available in mode "'.concat(r(s2),'"'));r(d2).openTransformModal(C)}}function t2(){if(r(P2))return r(P2).validate();if(r(o2))return r(o2).validate();if(r(d2))return r(d2).validate();throw new Error('Method validate is not available in mode "'.concat(r(s2),'"'))}function W(){return r(o2)?r(o2).acceptAutoRepair():n()}function b1(C){if(r(o2))return r(o2).scrollTo(C);if(r(d2))return r(d2).scrollTo(C);throw new Error('Method scrollTo is not available in mode "'.concat(r(s2),'"'))}function i1(C){if(r(o2))return r(o2).findElement(C);if(r(d2))return r(d2).findElement(C);throw new Error('Method findElement is not available in mode "'.concat(r(s2),'"'))}function j2(){r(P2)?r(P2).focus():r(o2)?r(o2).focus():r(d2)&&r(d2).focus()}function x1(){return I2.apply(this,arguments)}function I2(){return(I2=z1(function*(){r(P2)&&(yield r(P2).refresh())})).apply(this,arguments)}Y(()=>M(i()),()=>{(function(C){if(C!==r(s2)){var _={type:"mode",undo:{mode:r(s2),selection:void 0},redo:{mode:C,selection:void 0}};r(s2)==="text"&&r(P2)&&r(P2).flush(),Q2("add history item",_),r(y2).add(_),z(s2,C)}})(i())}),Y(()=>(r(s2),M(P())),()=>{z(E1,[{type:"button",text:"text",title:"Switch to text mode (current mode: ".concat(r(s2),")"),className:"jse-group-button jse-first"+(r(s2)===H0.text?" jse-selected":""),onClick:()=>P()(H0.text)},{type:"button",text:"tree",title:"Switch to tree mode (current mode: ".concat(r(s2),")"),className:"jse-group-button "+(r(s2)===H0.tree?" jse-selected":""),onClick:()=>P()(H0.tree)},{type:"button",text:"table",title:"Switch to table mode (current mode: ".concat(r(s2),")"),className:"jse-group-button jse-last"+(r(s2)===H0.table?" jse-selected":""),onClick:()=>P()(H0.table)}])}),Y(()=>(r(E1),M(U()),r(s2),M(x()),M(c())),()=>{z(G,C=>{var _=Bo(C[0])?r(E1).concat(C):r(E1).concat(m2,C),D=ur(_);return U()(_,{mode:r(s2),modal:x(),readOnly:c()})||D})}),Y(()=>(M(O()),r(s2),M(x()),M(c()),M(t())),()=>{z(b2,C=>{var _,D=ur(C);return(_=O()(C,{mode:r(s2),modal:x(),readOnly:c(),selection:t()}))!==null&&_!==void 0?_:!c()&&D})}),L4();var V2={patch:H,expand:v2,collapse:Q,transform:O2,validate:t2,acceptAutoRepair:W,scrollTo:b1,findElement:i1,focus:j2,refresh:x1};_1();var m1=W1(),F2=Y2(m1),O1=C=>{r0(JS(C,{get externalContent(){return n()},get externalSelection(){return t()},get history(){return r(y2)},get readOnly(){return c()},get indentation(){return l()},get tabSize(){return o()},get mainMenuBar(){return f()},get statusBar(){return d()},get askToFormat(){return h()},get escapeUnicodeCharacters(){return v()},get parser(){return g()},get validator(){return L()},get validationParser(){return S()},get onChange(){return E()},get onChangeMode(){return P()},get onSelect(){return I()},onUndo:z2,onRedo:o1,get onError(){return c2()},get onFocus(){return u2()},get onBlur(){return l2()},get onRenderMenu(){return r(G)},get onSortModal(){return S2()},get onTransformModal(){return q2()},$$legacy:!0}),_=>z(P2,_),()=>r(P2))},w=C=>{var _=W1(),D=Y2(_),n2=A2=>{r0(hk(A2,{get externalContent(){return n()},get externalSelection(){return t()},get history(){return r(y2)},get readOnly(){return c()},get truncateTextSize(){return s()},get mainMenuBar(){return f()},get escapeControlCharacters(){return m()},get escapeUnicodeCharacters(){return v()},get flattenColumns(){return p()},get parser(){return g()},get parseMemoizeOne(){return y()},get validator(){return L()},get validationParser(){return S()},get indentation(){return l()},get onChange(){return E()},get onChangeMode(){return P()},get onSelect(){return I()},onUndo:z2,onRedo:o1,get onRenderValue(){return k()},get onFocus(){return u2()},get onBlur(){return l2()},get onRenderMenu(){return r(G)},get onRenderContextMenu(){return r(b2)},get onSortModal(){return S2()},get onTransformModal(){return q2()},get onJSONEditorModal(){return f2()},$$legacy:!0}),e2=>z(d2,e2),()=>r(d2))},C2=A2=>{r0(rs(A2,{get externalContent(){return n()},get externalSelection(){return t()},get history(){return r(y2)},get readOnly(){return c()},get indentation(){return l()},get truncateTextSize(){return s()},get mainMenuBar(){return f()},get navigationBar(){return u()},get escapeControlCharacters(){return m()},get escapeUnicodeCharacters(){return v()},get parser(){return g()},get parseMemoizeOne(){return y()},get validator(){return L()},get validationParser(){return S()},get pathParser(){return j()},get onError(){return c2()},get onChange(){return E()},get onChangeMode(){return P()},get onSelect(){return I()},onUndo:z2,onRedo:o1,get onRenderValue(){return k()},get onClassName(){return $()},get onFocus(){return u2()},get onBlur(){return l2()},get onRenderMenu(){return r(G)},get onRenderContextMenu(){return r(b2)},get onSortModal(){return S2()},get onTransformModal(){return q2()},get onJSONEditorModal(){return f2()},$$legacy:!0}),e2=>z(o2,e2),()=>r(o2))};i2(D,A2=>{r(s2),M(H0),F(()=>r(s2)===H0.table)?A2(n2):A2(C2,!1)},!0),T(C,_)};return i2(F2,C=>{r(s2),M(H0),F(()=>r(s2)===H0.text||String(r(s2))==="code")?C(O1):C(w,!1)}),T(e,m1),M1(a,"patch",H),M1(a,"expand",v2),M1(a,"collapse",Q),M1(a,"transform",O2),M1(a,"validate",t2),M1(a,"acceptAutoRepair",W),M1(a,"scrollTo",b1),M1(a,"findElement",i1),M1(a,"focus",j2),M1(a,"refresh",x1),u1(V2)}j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-wrapper.svelte-t4zsk3 {
  flex: 1;
  display: flex;
  min-width: 0;
  min-height: 0;
  flex-direction: column;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-actions:where(.svelte-t4zsk3) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-actions:where(.svelte-t4zsk3) button.jse-primary:where(.svelte-t4zsk3) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-actions:where(.svelte-t4zsk3) button.jse-primary:where(.svelte-t4zsk3):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-actions:where(.svelte-t4zsk3) button.jse-primary:where(.svelte-t4zsk3):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-label:where(.svelte-t4zsk3) {
  font-weight: bold;
  display: block;
  box-sizing: border-box;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-label:where(.svelte-t4zsk3) .jse-label-inner:where(.svelte-t4zsk3) {
  margin-top: calc(2 * var(--jse-padding, 10px));
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
  box-sizing: border-box;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-modal-inline-editor:where(.svelte-t4zsk3) {
  flex: 1;
  min-height: 150px;
  min-width: 0;
  max-width: 100%;
  display: flex;
  --jse-theme-color: var(--jse-modal-editor-theme-color, #707070);
  --jse-theme-color-highlight: var(--jse-modal-editor-theme-color-highlight, #646464);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) {
  gap: var(--jse-padding, 10px);
  align-items: center;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) .jse-error:where(.svelte-t4zsk3) {
  flex: 1;
  color: var(--jse-error-color, #ee5341);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) button.jse-secondary:where(.svelte-t4zsk3) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-secondary-background, #d3d3d3);
  color: var(--jse-button-secondary-color, var(--jse-text-color, #4d4d4d));
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) button.jse-secondary:where(.svelte-t4zsk3):hover {
  background: var(--jse-button-secondary-background-highlight, #e1e1e1);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) button.jse-secondary:where(.svelte-t4zsk3):disabled {
  background: var(--jse-button-secondary-background-disabled, #9d9d9d);
}
.jse-modal-wrapper.svelte-t4zsk3 input:where(.svelte-t4zsk3) {
  border: var(--jse-input-border, 1px solid #d8dbdf);
  outline: none;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: inherit;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
}
.jse-modal-wrapper.svelte-t4zsk3 input:where(.svelte-t4zsk3):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}
.jse-modal-wrapper.svelte-t4zsk3 input:where(.svelte-t4zsk3):read-only {
  background: var(--jse-input-background-readonly, transparent);
}`);var gk=a2('<div class="jse-error svelte-t4zsk3"> </div>'),zk=a2('<button type="button" class="jse-secondary svelte-t4zsk3"><!> Back</button>'),bk=a2('<button type="button" class="jse-primary svelte-t4zsk3">Apply</button>'),yk=a2('<button type="button" class="jse-primary svelte-t4zsk3">Close</button>'),Mk=a2('<!> <div class="jse-modal-contents svelte-t4zsk3"><div class="jse-label svelte-t4zsk3"><div class="jse-label-inner svelte-t4zsk3">Path</div></div> <input class="jse-path svelte-t4zsk3" type="text" readonly="" title="Selected path"/> <div class="jse-label svelte-t4zsk3"><div class="jse-label-inner svelte-t4zsk3">Contents</div></div> <div class="jse-modal-inline-editor svelte-t4zsk3"><!></div> <div class="jse-actions svelte-t4zsk3"><!> <!> <!></div></div>',1),xk=a2('<div class="jse-modal-wrapper svelte-t4zsk3"><!></div>'),Lk={};j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-contents.svelte-lwzlls {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-contents.svelte-lwzlls .jse-actions:where(.svelte-lwzlls) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-lwzlls .jse-actions:where(.svelte-lwzlls) button.jse-primary:where(.svelte-lwzlls) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-contents.svelte-lwzlls .jse-actions:where(.svelte-lwzlls) button.jse-primary:where(.svelte-lwzlls):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-contents.svelte-lwzlls .jse-actions:where(.svelte-lwzlls) button.jse-primary:where(.svelte-lwzlls):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-modal-contents.svelte-lwzlls table:where(.svelte-lwzlls) {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
.jse-modal-contents.svelte-lwzlls table:where(.svelte-lwzlls) th:where(.svelte-lwzlls),
.jse-modal-contents.svelte-lwzlls table:where(.svelte-lwzlls) td:where(.svelte-lwzlls) {
  text-align: left;
  vertical-align: middle;
  font-weight: normal;
  padding-bottom: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-lwzlls input.jse-path:where(.svelte-lwzlls) {
  width: 100%;
  box-sizing: border-box;
  padding: 5px 10px;
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: var(--jse-input-radius, 3px);
  font-family: inherit;
  font-size: inherit;
  background: inherit;
  background: var(--jse-input-background-readonly, transparent);
  color: inherit;
  outline: none;
}
.jse-modal-contents.svelte-lwzlls .svelte-select input {
  box-sizing: border-box;
}
.jse-modal-contents.svelte-lwzlls .jse-space:where(.svelte-lwzlls) {
  height: 200px;
}
.jse-modal-contents.svelte-lwzlls .jse-space:where(.svelte-lwzlls) .jse-error:where(.svelte-lwzlls) {
  color: var(--jse-error-color, #ee5341);
}`);var B8=i5(()=>Lk),wk=a2('<tr><th class="svelte-lwzlls">Property</th><td class="svelte-lwzlls"><!></td></tr>'),Ck=a2('<div class="jse-error svelte-lwzlls"> </div>'),jk=a2('<!> <div class="jse-modal-contents svelte-lwzlls"><table class="svelte-lwzlls"><colgroup><col width="25%"/><col width="75%"/></colgroup><tbody><tr><th class="svelte-lwzlls">Path</th><td class="svelte-lwzlls"><input class="jse-path svelte-lwzlls" type="text" readonly="" title="Selected path"/></td></tr><!><tr><th class="svelte-lwzlls">Direction</th><td class="svelte-lwzlls"><!></td></tr></tbody></table> <div class="jse-space svelte-lwzlls"><!></div> <div class="jse-actions svelte-lwzlls"><button type="button" class="jse-primary svelte-lwzlls">Sort</button></div></div>',1);j1(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-main.svelte-1l55585 {
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 150px;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  position: relative;
  display: flex;
  flex-direction: row;
}
.jse-main.svelte-1l55585:not(.jse-focus) {
  --jse-selection-background-color: var(--jse-selection-background-inactive-color, #e8e8e8);
  --jse-context-menu-pointer-background: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
}`);var Sk=a2('<div role="none"><!></div> <!> <!> <!>',1);function kk(e,a){f1(a,!1);var n=R(void 0,!0),t=t3("jsoneditor:JSONEditor"),c={text:""},l=void 0,o=!1,s=H0.tree,i=!0,f=!0,u=!0,d=!0,h=!1,m=!1,v=!0,p=JSON,g=void 0,y=JSON,L={parse:jw,stringify:H3},S=[JL],j=S[0].id,x=ue,E=void 0,P=void 0,I=Cw,k=ue,$=ue,U=ue,O=ue,c2=x2=>{console.error(x2),alert(x2.toString())},u2=ue,l2=ue,S2=b(a,"content",13,c),q2=b(a,"selection",13,l),f2=b(a,"readOnly",13,o),o2=b(a,"indentation",13,2),d2=b(a,"tabSize",13,4),P2=b(a,"truncateTextSize",13,1e3),Q2=b(a,"mode",13,s),y2=b(a,"mainMenuBar",13,i),s2=b(a,"navigationBar",13,f),z2=b(a,"statusBar",13,u),o1=b(a,"askToFormat",13,d),E1=b(a,"escapeControlCharacters",13,h),m2=b(a,"escapeUnicodeCharacters",13,m),G=b(a,"flattenColumns",13,v),b2=b(a,"parser",13,p),H=b(a,"validator",13,g),v2=b(a,"validationParser",13,y),Q=b(a,"pathParser",13,L),O2=b(a,"queryLanguages",13,S),t2=b(a,"queryLanguageId",13,j),W=b(a,"onChangeQueryLanguage",13,x),b1=b(a,"onChange",13,E),i1=b(a,"onSelect",13,P),j2=b(a,"onRenderValue",13,I),x1=b(a,"onClassName",13,k),I2=b(a,"onRenderMenu",13,$),V2=b(a,"onRenderContextMenu",13,U),m1=b(a,"onChangeMode",13,O),F2=b(a,"onError",13,c2),O1=b(a,"onFocus",13,u2),w=b(a,"onBlur",13,l2),C=R(G8(),!0),_=R(!1,!0),D=R(void 0,!0),n2=R(void 0,!0),C2=R(void 0,!0),A2=R(void 0,!0),e2=R(b2(),!0);function r2(){return S2()}function s1(x2){t("set");var B1=io(x2);if(B1)throw new Error(B1);z(C,G8()),S2(x2),t0()}function e1(x2){t("update");var B1=io(x2);if(B1)throw new Error(B1);S2(x2),t0()}function U2(x2){var B1=r(D).patch(x2);return t0(),B1}function J2(x2){q2(x2),t0()}function q1(x2,B1){r(D).expand(x2,B1),t0()}function S4(x2){var B1=arguments.length>1&&arguments[1]!==void 0&&arguments[1];r(D).collapse(x2,B1),t0()}function E4(){var x2=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};r(D).transform(x2),t0()}function $1(){return r(D).validate()}function g4(){var x2=r(D).acceptAutoRepair();return t0(),x2}function V1(x2){return Q1.apply(this,arguments)}function Q1(){return(Q1=z1(function*(x2){yield r(D).scrollTo(x2)})).apply(this,arguments)}function p4(x2){return r(D).findElement(x2)}function p1(){r(D).focus(),t0()}function z4(){return S1.apply(this,arguments)}function S1(){return(S1=z1(function*(){yield r(D).refresh()})).apply(this,arguments)}function X2(x2){var B1,w4,V4,w0,W0,G1,R0,i3,d0,r3,J4,e4,P1,B4,_0,h0,K,p2,_2,B,Z,M2,D2,a1,t1,h1,G4,a4,l4,T1,n4,V0=Object.keys(x2);for(var y1 of V0)switch(y1){case"content":S2((B1=x2[y1])!==null&&B1!==void 0?B1:c);break;case"selection":q2((w4=x2[y1])!==null&&w4!==void 0?w4:l);break;case"readOnly":f2((V4=x2[y1])!==null&&V4!==void 0?V4:o);break;case"indentation":o2((w0=x2[y1])!==null&&w0!==void 0?w0:2);break;case"tabSize":d2((W0=x2[y1])!==null&&W0!==void 0?W0:4);break;case"truncateTextSize":P2((G1=x2[y1])!==null&&G1!==void 0?G1:1e3);break;case"mode":Q2((R0=x2[y1])!==null&&R0!==void 0?R0:s);break;case"mainMenuBar":y2((i3=x2[y1])!==null&&i3!==void 0?i3:i);break;case"navigationBar":s2((d0=x2[y1])!==null&&d0!==void 0?d0:f);break;case"statusBar":z2((r3=x2[y1])!==null&&r3!==void 0?r3:u);break;case"askToFormat":o1((J4=x2[y1])!==null&&J4!==void 0?J4:d);break;case"escapeControlCharacters":E1((e4=x2[y1])!==null&&e4!==void 0?e4:h);break;case"escapeUnicodeCharacters":m2((P1=x2[y1])!==null&&P1!==void 0?P1:m);break;case"flattenColumns":G((B4=x2[y1])!==null&&B4!==void 0?B4:v);break;case"parser":b2((_0=x2[y1])!==null&&_0!==void 0?_0:p);break;case"validator":H((h0=x2[y1])!==null&&h0!==void 0?h0:g);break;case"validationParser":v2((K=x2[y1])!==null&&K!==void 0?K:y);break;case"pathParser":Q((p2=x2[y1])!==null&&p2!==void 0?p2:L);break;case"queryLanguages":O2((_2=x2[y1])!==null&&_2!==void 0?_2:S);break;case"queryLanguageId":t2((B=x2[y1])!==null&&B!==void 0?B:j);break;case"onChangeQueryLanguage":W((Z=x2[y1])!==null&&Z!==void 0?Z:x);break;case"onChange":b1((M2=x2[y1])!==null&&M2!==void 0?M2:E);break;case"onRenderValue":j2((D2=x2[y1])!==null&&D2!==void 0?D2:I);break;case"onClassName":x1((a1=x2[y1])!==null&&a1!==void 0?a1:k);break;case"onRenderMenu":I2((t1=x2[y1])!==null&&t1!==void 0?t1:$);break;case"onRenderContextMenu":V2((h1=x2[y1])!==null&&h1!==void 0?h1:U);break;case"onChangeMode":m1((G4=x2[y1])!==null&&G4!==void 0?G4:O);break;case"onSelect":i1((a4=x2[y1])!==null&&a4!==void 0?a4:P);break;case"onError":F2((l4=x2[y1])!==null&&l4!==void 0?l4:c2);break;case"onFocus":O1((T1=x2[y1])!==null&&T1!==void 0?T1:u2);break;case"onBlur":w((n4=x2[y1])!==null&&n4!==void 0?n4:l2);break;default:M4(y1)}function M4(o4){t('Unknown property "'.concat(o4,'"'))}O2().some(o4=>o4.id===t2())||t2(O2()[0].id),t0()}function X1(){return D1.apply(this,arguments)}function D1(){return(D1=z1(function*(){throw new Error("class method destroy() is deprecated. It is replaced with a method destroy() in the vanilla library.")})).apply(this,arguments)}function W4(x2,B1,w4){S2(x2),b1()&&b1()(x2,B1,w4)}function a0(x2){q2(x2),i1()&&i1()(ur(x2))}function Y4(){z(_,!0),O1()&&O1()()}function L0(){z(_,!1),w()&&w()()}function c0(x2){return m0.apply(this,arguments)}function m0(){return(m0=z1(function*(x2){Q2()!==x2&&(Q2(x2),t0(),p1(),m1()(x2))})).apply(this,arguments)}function N0(x2){t("handleChangeQueryLanguage",x2),t2(x2),W()(x2)}function f0(x2){var{id:B1,json:w4,rootPath:V4,onTransform:w0,onClose:W0}=x2;f2()||z(A2,{id:B1,json:w4,rootPath:V4,indentation:o2(),truncateTextSize:P2(),escapeControlCharacters:E1(),escapeUnicodeCharacters:m2(),parser:b2(),parseMemoizeOne:r(n),validationParser:v2(),pathParser:Q(),queryLanguages:O2(),queryLanguageId:t2(),onChangeQueryLanguage:N0,onRenderValue:j2(),onRenderMenu:G1=>I2()(G1,{mode:Q2(),modal:!0,readOnly:f2()}),onRenderContextMenu:G1=>V2()(G1,{mode:Q2(),modal:!0,readOnly:f2(),selection:q2()}),onClassName:x1(),onTransform:w0,onClose:W0})}function D0(x2){f2()||z(C2,x2)}function A0(x2){var{content:B1,path:w4,onPatch:V4,onClose:w0}=x2;t("onJSONEditorModal",{content:B1,path:w4}),z(n2,{content:B1,path:w4,onPatch:V4,readOnly:f2(),indentation:o2(),tabSize:d2(),truncateTextSize:P2(),mainMenuBar:y2(),navigationBar:s2(),statusBar:z2(),askToFormat:o1(),escapeControlCharacters:E1(),escapeUnicodeCharacters:m2(),flattenColumns:G(),parser:b2(),validator:void 0,validationParser:v2(),pathParser:Q(),onRenderValue:j2(),onClassName:x1(),onRenderMenu:I2(),onRenderContextMenu:V2(),onSortModal:D0,onTransformModal:f0,onClose:w0})}function O0(x2){x2.stopPropagation()}Y(()=>(M(b2()),r(e2),M(S2()),G8),()=>{if(!vs(b2(),r(e2))){if(t("parser changed, recreate editor"),Rt(S2())){var x2=r(e2).stringify(S2().json);S2({json:x2!==void 0?b2().parse(x2):void 0})}z(e2,b2()),z(C,G8())}}),Y(()=>M(S2()),()=>{var x2=io(S2());x2&&console.error("Error: "+x2)}),Y(()=>M(q2()),()=>{q2()===null&&console.warn("selection is invalid: it is null but should be undefined")}),Y(()=>M(b2()),()=>{z(n,z8(b2().parse))}),Y(()=>M(Q2()),()=>{t("mode changed to",Q2())}),L4();var u0={get:r2,set:s1,update:e1,patch:U2,select:J2,expand:q1,collapse:S4,transform:E4,validate:$1,acceptAutoRepair:g4,scrollTo:V1,findElement:p4,focus:p1,refresh:z4,updateProps:X2,destroy:X1};return _1(!0),Do(e,{children:(x2,B1)=>{var w4,V4=Sk(),w0=Y2(V4);kv(q(w0),()=>r(C),J4=>{r0(Sp(J4,{get externalMode(){return Q2()},get content(){return S2()},get selection(){return q2()},get readOnly(){return f2()},get indentation(){return o2()},get tabSize(){return d2()},get truncateTextSize(){return P2()},get statusBar(){return z2()},get askToFormat(){return o1()},get mainMenuBar(){return y2()},get navigationBar(){return s2()},get escapeControlCharacters(){return E1()},get escapeUnicodeCharacters(){return m2()},get flattenColumns(){return G()},get parser(){return b2()},get parseMemoizeOne(){return r(n)},get validator(){return H()},get validationParser(){return v2()},get pathParser(){return Q()},insideModal:!1,get onError(){return F2()},onChange:W4,onChangeMode:c0,onSelect:a0,get onRenderValue(){return j2()},get onClassName(){return x1()},onFocus:Y4,onBlur:L0,get onRenderMenu(){return I2()},get onRenderContextMenu(){return V2()},onSortModal:D0,onTransformModal:f0,onJSONEditorModal:A0,$$legacy:!0}),e4=>z(D,e4),()=>r(D))});var W0=J(w0,2),G1=J4=>{(function(e4,P1){var B4,_0;f1(P1,!1);var h0=R(void 0,!0),K=R(void 0,!0),p2=R(void 0,!0),_2=R(void 0,!0),B=t3("jsoneditor:SortModal"),Z=b(P1,"id",9),M2=b(P1,"json",9),D2=b(P1,"rootPath",9),a1=b(P1,"onSort",9),t1=b(P1,"onClose",9),h1={value:1,label:"ascending"},G4=[h1,{value:-1,label:"descending"}],a4="".concat(Z(),":").concat(c1(D2())),l4=R((B4=B8()[a4])===null||B4===void 0?void 0:B4.selectedProperty,!0),T1=R(((_0=B8()[a4])===null||_0===void 0?void 0:_0.selectedDirection)||h1,!0),n4=R(void 0,!0);function V0(){try{var M4,o4,b4;z(n4,void 0);var n0=((M4=r(l4))===null||M4===void 0?void 0:M4.value)||((o4=r(_2))===null||o4===void 0||(o4=o4[0])===null||o4===void 0?void 0:o4.value)||[],P4=(b4=r(T1))===null||b4===void 0?void 0:b4.value,L1=_m(M2(),D2(),n0,P4);a1()!==void 0&&D2()!==void 0&&a1()({operations:L1,rootPath:D2(),itemPath:n0,direction:P4}),t1()()}catch(F0){z(n4,String(F0))}}function y1(M4){M4.focus()}Y(()=>(M(M2()),M(D2())),()=>{z(h0,W2(M2(),D2()))}),Y(()=>r(h0),()=>{z(K,Array.isArray(r(h0)))}),Y(()=>(r(K),r(h0)),()=>{z(p2,r(K)?qo(r(h0)):void 0)}),Y(()=>(r(p2),na),()=>{z(_2,r(p2)?r(p2).map(na):void 0)}),Y(()=>(B8(),r(l4),r(T1)),()=>{B8(B8()[a4]={selectedProperty:r(l4),selectedDirection:r(T1)}),B("store state in memory",a4,B8()[a4])}),L4(),_1(!0),Ht(e4,{get onClose(){return t1()},className:"jse-sort-modal",children:(M4,o4)=>{var b4=jk(),n0=Y2(b4),P4=Z2(()=>r(K)?"Sort array items":"Sort object keys");n5(n0,{get title(){return r(P4)},get onClose(){return t1()}});var L1=q(J(n0,2)),F0=J(q(L1)),E0=q(F0),J0=J(q(E0)),k4=q(J0),T4=J(E0),q0=K2=>{var G2=wk(),I1=J(q(G2));Ha(q(I1),{showChevron:!0,get items(){return r(_2)},get value(){return r(l4)},set value(s4){z(l4,s4)},$$legacy:!0}),T(K2,G2)};i2(T4,K2=>{r(K),r(_2),F(()=>{var G2;return r(K)&&r(_2)&&((G2=r(_2))===null||G2===void 0?void 0:G2.length)>1})&&K2(q0)});var A=J(T4),X=J(q(A));Ha(q(X),{showChevron:!0,clearable:!1,get items(){return G4},get value(){return r(T1)},set value(K2){z(T1,K2)},$$legacy:!0});var L2=J(L1,2),$2=q(L2),h2=K2=>{var G2=Ck(),I1=q(G2);E2(()=>d1(I1,r(n4))),T(K2,G2)};i2($2,K2=>{r(n4)&&K2(h2)});var H2=q(J(L2,2));o3(()=>w2("click",H2,V0)),A3(H2,K2=>y1?.(K2)),E2(K2=>{r8(k4,K2),H2.disabled=(r(K),r(_2),r(l4),F(()=>{var G2;return!!(r(K)&&r(_2)&&((G2=r(_2))===null||G2===void 0?void 0:G2.length)>1)&&!r(l4)}))},[()=>(M(D2()),M(f4),M(H3),F(()=>D2()&&!f4(D2())?H3(D2()):"(document root)"))]),T(M4,b4)},$$slots:{default:!0}}),u1()})(J4,ua(()=>r(C2),{onClose:()=>{var e4;(e4=r(C2))===null||e4===void 0||e4.onClose(),z(C2,void 0)}}))};i2(W0,J4=>{r(C2)&&J4(G1)});var R0=J(W0,2),i3=J4=>{_S(J4,ua(()=>r(A2),{onClose:()=>{var e4;(e4=r(A2))===null||e4===void 0||e4.onClose(),z(A2,void 0)}}))};i2(R0,J4=>{r(A2)&&J4(i3)});var d0=J(R0,2),r3=J4=>{(function(e4,P1){f1(P1,!1);var B4=R(void 0,!0),_0=R(void 0,!0),h0=R(void 0,!0),K=R(void 0,!0),p2=t3("jsoneditor:JSONEditorModal"),_2=b(P1,"content",9),B=b(P1,"path",9),Z=b(P1,"onPatch",9),M2=b(P1,"readOnly",9),D2=b(P1,"indentation",9),a1=b(P1,"tabSize",9),t1=b(P1,"truncateTextSize",9),h1=b(P1,"mainMenuBar",9),G4=b(P1,"navigationBar",9),a4=b(P1,"statusBar",9),l4=b(P1,"askToFormat",9),T1=b(P1,"escapeControlCharacters",9),n4=b(P1,"escapeUnicodeCharacters",9),V0=b(P1,"flattenColumns",9),y1=b(P1,"parser",9),M4=b(P1,"validator",9),o4=b(P1,"validationParser",9),b4=b(P1,"pathParser",9),n0=b(P1,"onRenderValue",9),P4=b(P1,"onClassName",9),L1=b(P1,"onRenderMenu",9),F0=b(P1,"onRenderContextMenu",9),E0=b(P1,"onSortModal",9),J0=b(P1,"onTransformModal",9),k4=b(P1,"onClose",9),T4=R(void 0,!0),q0=R(void 0,!0),A={mode:$2(_2()),content:_2(),selection:void 0,relativePath:B()},X=R([A],!0),L2=R(void 0,!0);function $2(V){return Rt(V)&&p0(V.json)?H0.table:H0.tree}function h2(){var V,g2=(V=U1(r(X)))===null||V===void 0?void 0:V.selection;Ft(g2)&&r(T4).scrollTo(r1(g2))}function H2(){if(p2("handleApply"),!M2())try{z(L2,void 0);var V=r(B4).relativePath,g2=r(B4).content,B2=[{op:"replace",path:c1(V),value:qd(g2,y1()).json}];if(r(X).length>1){var R2=qd(r(X)[r(X).length-2].content,y1()).json,T2={json:O3(R2,B2)},w1=N2(N2({},r(X)[r(X).length-2]||A),{},{content:T2});z(X,[...r(X).slice(0,r(X).length-2),w1]),t0(),h2()}else Z()(B2),k4()()}catch(C1){z(L2,String(C1))}}function K2(){if(p2("handleClose"),r(q0))z(q0,!1);else if(r(X).length>1){var V;z(X,Y1(r(X))),t0(),(V=r(T4))===null||V===void 0||V.focus(),h2(),z(L2,void 0)}else k4()()}function G2(V){p2("handleChange",V),t4(g2=>N2(N2({},g2),{},{content:V}))}function I1(V){p2("handleChangeSelection",V),t4(g2=>N2(N2({},g2),{},{selection:V}))}function s4(V){p2("handleChangeMode",V),t4(g2=>N2(N2({},g2),{},{mode:V}))}function t4(V){var g2=V(U1(r(X)));z(X,[...Y1(r(X)),g2])}function l0(V){z(L2,V.toString()),console.error(V)}function G0(V){var g2,{content:B2,path:R2}=V;p2("handleJSONEditorModal",{content:B2,path:R2});var T2={mode:$2(B2),content:B2,selection:void 0,relativePath:R2};z(X,[...r(X),T2]),t0(),(g2=r(T4))===null||g2===void 0||g2.focus()}function N(V){V.focus()}x3(()=>{var V;(V=r(T4))===null||V===void 0||V.focus()}),Y(()=>r(X),()=>{z(B4,U1(r(X))||A)}),Y(()=>r(X),()=>{z(_0,r(X).flatMap(V=>V.relativePath))}),Y(()=>(r(_0),H3),()=>{z(h0,f4(r(_0))?"(document root)":H3(r(_0)))}),Y(()=>M(y1()),()=>{z(K,z8(y1().parse))}),L4(),_1(!0),Ht(e4,{onClose:K2,className:"jse-jsoneditor-modal",get fullscreen(){return r(q0)},children:(V,g2)=>{var B2=xk();Do(q(B2),{children:(R2,T2)=>{var w1=Mk(),C1=Y2(w1),J1=Z2(()=>(r(X),F(()=>r(X).length>1?" (".concat(r(X).length,")"):"")));n5(C1,{get title(){var N1;return"Edit nested content ".concat((N1=r(J1))!==null&&N1!==void 0?N1:"")},fullScreenButton:!0,onClose:K2,get fullscreen(){return r(q0)},set fullscreen(N1){z(q0,N1)},$$legacy:!0});var N4=J(C1,2),r4=J(q(N4),2),Z4=J(r4,4);r0(Sp(q(Z4),{get externalMode(){return r(B4),F(()=>r(B4).mode)},get content(){return r(B4),F(()=>r(B4).content)},get selection(){return r(B4),F(()=>r(B4).selection)},get readOnly(){return M2()},get indentation(){return D2()},get tabSize(){return a1()},get truncateTextSize(){return t1()},get statusBar(){return a4()},get askToFormat(){return l4()},get mainMenuBar(){return h1()},get navigationBar(){return G4()},get escapeControlCharacters(){return T1()},get escapeUnicodeCharacters(){return n4()},get flattenColumns(){return V0()},get parser(){return y1()},get parseMemoizeOne(){return r(K)},get validator(){return M4()},get validationParser(){return o4()},get pathParser(){return b4()},insideModal:!0,onError:l0,onChange:G2,onChangeMode:s4,onSelect:I1,get onRenderValue(){return n0()},get onClassName(){return P4()},get onFocus(){return ue},get onBlur(){return ue},get onRenderMenu(){return L1()},get onRenderContextMenu(){return F0()},get onSortModal(){return E0()},get onTransformModal(){return J0()},onJSONEditorModal:G0,$$legacy:!0}),N1=>z(T4,N1),()=>r(T4));var k1=q(J(Z4,2)),g0=N1=>{var l1=gk(),R1=q(l1);E2(()=>d1(R1,r(L2))),T(N1,l1)};i2(k1,N1=>{r(L2)&&N1(g0)});var I4=J(k1,2),z0=N1=>{var l1=zk();c4(q(l1),{get data(){return p9}}),w2("click",l1,K2),T(N1,l1)};i2(I4,N1=>{r(X),F(()=>r(X).length>1)&&N1(z0)});var x4=J(I4,2),g1=N1=>{var l1=bk();o3(()=>w2("click",l1,H2)),A3(l1,R1=>N?.(R1)),T(N1,l1)},i4=N1=>{var l1=yk();w2("click",l1,K2),T(N1,l1)};i2(x4,N1=>{M2()?N1(i4,!1):N1(g1)}),E2(()=>r8(r4,r(h0))),T(R2,w1)},$$slots:{default:!0}}),T(V,B2)},$$slots:{default:!0}}),u1()})(J4,ua(()=>r(n2),{onClose:()=>{var e4;(e4=r(n2))===null||e4===void 0||e4.onClose(),z(n2,void 0)}}))};i2(d0,J4=>{r(n2)&&J4(r3)}),E2(()=>w4=A1(w0,1,"jse-main svelte-1l55585",null,w4,{"jse-focus":r(_)})),w2("keydown",w0,O0),T(x2,V4)},$$slots:{default:!0}}),M1(a,"get",r2),M1(a,"set",s1),M1(a,"update",e1),M1(a,"patch",U2),M1(a,"select",J2),M1(a,"expand",q1),M1(a,"collapse",S4),M1(a,"transform",E4),M1(a,"validate",$1),M1(a,"acceptAutoRepair",g4),M1(a,"scrollTo",V1),M1(a,"findElement",p4),M1(a,"focus",p1),M1(a,"refresh",z4),M1(a,"updateProps",X2),M1(a,"destroy",X1),u1(u0)}function Nk(e){var{target:a,props:n}=e,t=dL(kk,{target:a,props:n});return t.destroy=z1(function*(){return(function(c,l){var o=Oo.get(c);return o?(Oo.delete(c),o(l)):Promise.resolve()})(t)}),t0(),t}function v_(e){var{target:a,props:n}=e;return console.warn('WARNING: the constructor "new JSONEditor(...)" is deprecated since v1. Please use "createJSONEditor(...)" instead.'),Nk({target:a,props:n})}export{aw as BooleanToggle,je as CaretType,cw as ColorPicker,vw as EditableValue,gS as EnumValue,v_ as JSONEditor,kk as JsonEditor,H0 as Mode,yw as ReadonlyValue,Se as SearchField,H4 as SelectionType,de as SortDirection,ww as TimestampTag,da as UpdateSelectionAfterChange,he as ValidationSeverity,k6 as createAfterSelection,s_ as createAjvValidator,i_ as createAjvValidatorAsync,Ns as createEditKeySelection,Jc as createEditValueSelection,T6 as createInsideSelection,Nk as createJSONEditor,P6 as createKeySelection,k3 as createMultiSelection,K1 as createValueSelection,EL as estimateSerializedSize,ks as expandAll,Nt as expandMinimal,Pc as expandNone,Uo as expandSelf,Qa as getAnchorPath,pa as getEndPath,r1 as getFocusPath,ma as getSelectionPaths,w6 as getStartPath,Gc as getValueClass,Xv as hasSearchResults,U3 as isAfterSelection,a3 as isArrayRecursiveState,wL as isBoolean,CL as isColor,c_ as isContent,Vd as isContentParseError,sw as isContentValidationErrors,Wd as isContextMenuColumn,Hd as isContextMenuRow,e3 as isEditingSelection,vs as isEqualParser,c8 as isExpandableState,Y0 as isInsideSelection,Rt as isJSONContent,n3 as isKeySelection,_L as isLargeContent,b6 as isMenuButton,q8 as isMenuDropDownButton,Ud as isMenuLabel,aa as isMenuSeparator,Bo as isMenuSpace,Gd as isModeHistoryItem,Q4 as isMultiSelection,fw as isNestedValidationError,d4 as isObject,M0 as isObjectOrArray,B3 as isObjectRecursiveState,uw as isSvelteActionRenderer,l_ as isSvelteComponentRenderer,Ot as isTextContent,Jd as isTextHistoryItem,Ro as isTimestamp,Wc as isTreeHistoryItem,f5 as isUrl,iw as isValidationError,Ms as isValueRecursiveState,h4 as isValueSelection,p_ as javascriptQueryLanguage,f_ as jmespathQueryLanguage,JL as jsonQueryLanguage,u_ as jsonpathQueryLanguage,E6 as keyComboFromEvent,d_ as lodashQueryLanguage,t5 as onEscape,jw as parseJSONPath,o_ as renderJSONSchemaEnum,Cw as renderValue,Cc as resizeObserver,wn as stringConvert,H3 as stringifyJSONPath,qd as toJSONContent,AL as toTextContent,ps as valueType};
