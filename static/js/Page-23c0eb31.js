import{P as f,u as C,a as _}from"./PageContainer-a054393f.js";import{d as h,C as v,I as B,r as d,H as S,u as P,K as T,j as b,x as D,_ as $,e as u,o as w,c as A,f as l,w as I,g as k}from"./index_prod-296a9076.js";import{B as y}from"./Breadcrumbs-c6de0f1e.js";import{C as M}from"./Comment-0c85eae0.js";import"./Toc-78ef44d6.js";import"https://unpkg.com/@waline/client@v2/dist/waline.mjs";const N=h({name:"Page",components:{PageContainer:f,Breadcrumbs:y,Comment:M},setup(){const e=C(),o=v(),p=B(),n=d(new _),r=S(),{t:m}=P(),t=d(),c=()=>{e.fetchArticle(String(r.params.slug)).then(a=>{n.value=a,t.value=n.value.title,s(o.locale)})},s=a=>{const g=a==="cn"?"cn":"en",i=o.themeConfig.menu.menus[String(r.params.slug)];t.value=i.i18n&&i.i18n[g]||i.name,p.setTitle(t.value)};return T(()=>o.locale,a=>{a&&s(a)}),b(c),{pageTitle:D(()=>t.value),pageData:n,t:m}}}),V={id:"comments"};function j(e,o,p,n,r,m){const t=u("Breadcrumbs"),c=u("Comment"),s=u("PageContainer");return w(),A("div",null,[l(t,{current:e.pageTitle},null,8,["current"]),l(s,{post:e.pageData,title:e.pageTitle},{default:I(()=>[k("div",V,[l(c,{title:e.pageData.title,body:e.pageData.text,uid:e.pageData.uid},null,8,["title","body","uid"])])]),_:1},8,["post","title"])])}const x=$(N,[["render",j]]);export{x as default};