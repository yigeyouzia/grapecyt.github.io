var y=Object.defineProperty;var b=(e,t,o)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var s=(e,t,o)=>(b(e,typeof t!="symbol"?t+"":t,o),o);import{Y as S,Z as w,d as x,S as k,O as P,h as T,u as C,$ as _,K as I,b as O,k as $,x as M,_ as j,e as p,W as B,o as l,c as h,g as n,t as D,y as H,M as U,f as c,a0 as A,w as L,p as N,n as V}from"./index_prod-296a9076.js";import{T as Y}from"./Toc-78ef44d6.js";import"https://unpkg.com/@waline/client@v2/dist/waline.mjs";class E{constructor(t){s(this,"title","");s(this,"uid","");s(this,"date",{month:"",day:0,year:0});s(this,"updated","");s(this,"comments",!1);s(this,"path","");s(this,"covers",null);s(this,"excerpt",null);s(this,"content","");s(this,"count_time",{});s(this,"toc","");if(t){for(const o of Object.keys(this))if(Object.prototype.hasOwnProperty.call(t,o)){if(o==="date"){const a=new Date(t[o]),i=`settings.months[${a.getMonth()}]`;t[o]=Object.create({month:i,day:a.getUTCDate(),year:a.getUTCFullYear()})}Object.assign(this,{[o]:t[o]})}}}}const ce=S({id:"articleStore",state:()=>({}),getters:{},actions:{async fetchArticle(e){const{data:t}=await w(e);return new Promise(o=>setTimeout(()=>{o(new E(t))},200))}}}),F=x({name:"ObPageContainer",components:{Sidebar:k,Toc:Y,Profile:P},props:{post:{type:Object,default:()=>({})},title:{type:String,default:""}},setup(e){const t=T(),{t:o}=C(),a=_(e).post,i=_(e).title;return I(()=>a.value.covers,r=>{console.log(r),r&&t.setHeaderImage(r)}),O(()=>{t.setHeaderImage(a.value.covers)}),$(()=>{t.resetHeaderImage()}),{pageTitle:M(()=>i.value!==""?i.value:a.value.title),t:o}}});const u=e=>(N("data-v-ae76afd4"),e=e(),V(),e),K={class:"flex flex-col"},R={class:"post-header"},W={key:0,class:"post-title text-white uppercase"},Z={class:"main-grid"},q={class:"relative"},z=["innerHTML"],G={key:1,class:"bg-ob-deep-800 px-14 py-16 rounded-2xl shadow-xl block min-h-screen"},J=u(()=>n("br",null,null,-1)),Q=u(()=>n("br",null,null,-1)),X=u(()=>n("br",null,null,-1)),ee={class:"col-span-1"};function te(e,t,o,a,i,r){const d=p("ob-skeleton"),m=p("Profile"),f=p("Toc"),g=p("Sidebar"),v=B("scroll-spy");return l(),h("div",K,[n("div",R,[e.post.title?(l(),h("h1",W,D(e.pageTitle),1)):(l(),H(d,{key:1,class:"post-title text-white uppercase",width:"100%",height:"clamp(1.2rem, calc(1rem + 3.5vw), 4rem)"}))]),n("div",Z,[n("div",q,[e.post.content?U((l(),h("div",{key:0,class:"post-html",innerHTML:e.post.content},null,8,z)),[[v,{sectionSelector:"h1, h2, h3, h4, h5, h6"}]]):(l(),h("div",G,[c(d,{tag:"div",count:1,height:"36px",width:"150px",class:"mb-6"}),J,c(d,{tag:"div",count:35,height:"16px",width:"100px",class:"mr-2"}),Q,X,c(d,{tag:"div",count:25,height:"16px",width:"100px",class:"mr-2"})])),A(e.$slots,"default",{},void 0,!0)]),n("div",ee,[c(g,null,{default:L(()=>[c(m,{author:"blog-author"}),c(f,{toc:e.post.toc},null,8,["toc"])]),_:1})])])])}const ie=j(F,[["render",te],["__scopeId","data-v-ae76afd4"]]);export{ie as P,E as a,ce as u};
