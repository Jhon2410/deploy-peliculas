"use strict";(self["webpackChunktienda"]=self["webpackChunktienda"]||[]).push([[283],{7641:(e,t,a)=>{a.d(t,{Z:()=>s});var o=a(52),l=a.n(o);const n="https://b-peliculas.herokuapp.com/",r=async(e="",t)=>{if(localStorage.getItem("token")){const t=await l().get(n+"users/",{headers:{token:localStorage.getItem("token"),"Access-Control-Allow-Origin":"*"}});localStorage.getItem("usuario")||localStorage.setItem("usuario",JSON.stringify(t.data.usuario)),0===t.data.estado&&(localStorage.removeItem("token"),window.location.reload()),"c"===t.data.usuario.rol?("/login"===e||"/register"===e||"/"==e||"/panel"==e)&&(window.location.href="#/administracion/panel"):("/login"===e||"/register"===e||"/"==e||"/administracion/panel"==e)&&(window.location.href="#/panel")}else"/login"!=e&&"/register"!=e&&"/"!=e&&(window.location.href="#/login")},s=r},7283:(e,t,a)=>{a.r(t),a.d(t,{default:()=>S});a(5363);var o=a(3673);const l=e=>((0,o.dD)("data-v-67b92dc6"),e=e(),(0,o.Cn)(),e),n={class:"login bg-dark"},r={class:"q-pa-md bg-white text-black shadow-up-16 rounded-borders",style:{width:"400px"}},s=l((()=>(0,o._)("h6",{class:"text-uppercase text-center"},[(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-person-circle",viewBox:"0 0 16 16"},[(0,o._)("path",{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}),(0,o._)("path",{"fill-rule":"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"})]),(0,o.Uk)(" register ")],-1))),i={class:"text-center"};function u(e,t,a,l,u,d){const c=(0,o.up)("q-input"),m=(0,o.up)("q-toggle"),p=(0,o.up)("q-btn"),g=(0,o.up)("q-form");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o._)("div",r,[(0,o.Wm)(g,{onSubmit:l.onSubmit,onReset:l.onReset,class:"q-gutter-md"},{default:(0,o.w5)((()=>[s,(0,o.Wm)(c,{filled:"",modelValue:l.name,"onUpdate:modelValue":t[0]||(t[0]=e=>l.name=e),modelModifiers:{trim:!0},label:"Your username *",title:"please, put your username to log in, minimo 4 digitos","lazy-rules":"",pattern:"[A-Za-z]{4,40}",rules:[e=>e&&e.length>0||"Please type something"]},null,8,["modelValue","rules"]),(0,o.Wm)(c,{filled:"",type:"password",modelValue:l.pass,"onUpdate:modelValue":t[1]||(t[1]=e=>l.pass=e),modelModifiers:{trim:!0},label:"Your password *",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",title:"the password must be  sure, Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please put your password "]},null,8,["modelValue","rules"]),(0,o.Wm)(m,{modelValue:l.accept,"onUpdate:modelValue":t[2]||(t[2]=e=>l.accept=e),label:"I accept the license and terms"},null,8,["modelValue"]),(0,o._)("div",i,[(0,o.Wm)(p,{label:"register",type:"submit",color:"primary"})]),(0,o.Wm)(p,{onClick:t[3]||(t[3]=t=>e.$router.replace("/login")),flat:"",rounded:"",color:"primary",label:"ya tengo una cuenta"})])),_:1},8,["onSubmit","onReset"])])])}var d=a(8825),c=a(1959),m=a(7641),p=a(52),g=a.n(p);const w={setup(){const e=(0,d.Z)(),t=(0,c.iH)(null),a=(0,c.iH)(null),o=(0,c.iH)(!1);return{name:t,pass:a,accept:o,onSubmit(){!0!==o.value?e.notify({color:"red-5",textColor:"white",icon:"warning",message:"You need to accept the license and terms first"}):((async()=>{const o=await g().post("https://b-peliculas.herokuapp.com/users/register",{username:t.value,password:a.value,rol:"c",randid:localStorage.getItem("randid")});1===o.data.estado?(localStorage.setItem("token",o.data.token),window.location.href="#/administracion/panel",e.notify({color:"green-4",textColor:"white",icon:"done",message:o.data.msg})):e.notify({color:"red-5",textColor:"white",icon:"warning",message:o.data.msg})})(),e.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"Submitted"}))},onReset(){t.value=null,a.value=null,o.value=!1}}},beforeCreate:function(){(0,m.Z)(this.$route.fullPath)}};var h=a(5269),b=a(4689),f=a(8886),v=a(2165),y=a(7518),k=a.n(y);w.render=u,w.__scopeId="data-v-67b92dc6";const S=w;k()(w,"components",{QForm:h.Z,QInput:b.Z,QToggle:f.Z,QBtn:v.Z})}}]);