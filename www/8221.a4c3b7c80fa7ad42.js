"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8221],{8221:(h,u,o)=>{o.r(u),o.d(u,{LoginPage:()=>_});var m=o(6814),i=o(95),n=o(7027),e=o(6689),f=o(6958);let _=(()=>{var s;class g{constructor(t,a){this.router=t,this.toastController=a,this.cuentas=[{id:1,username:"c.abarzua@duocuc.cl",password:"123456",type:"teacher"},{id:2,username:"g.flores@duocuc.cl",password:"123456",type:"student"}]}login(){const t=document.getElementById("username"),a=document.getElementById("password"),c=t.value,l=a.value,r=this.cuentas.find(p=>p.username===c&&p.password===l);r?"teacher"===r.type?this.router.navigate(["/teacher-classes"]):"student"===r.type&&this.router.navigate(["/student-classes"]):this.createToast("","Credenciales invalidas","top",5e3)}goToPage(t){this.router.navigate([t])}createToast(t,a,c,l){this.toastController.create({header:t,message:a,position:c,duration:l,cssClass:"custom-toast"}).then(r=>{r.present()})}ngOnInit(){}}return(s=g).\u0275fac=function(t){return new(t||s)(e.Y36(f.F0),e.Y36(n.yF))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-login"]],standalone:!0,features:[e.jDz],decls:17,vars:1,consts:[[3,"fullscreen"],[1,"logo-container"],["src","assets/images/logo.png",1,"logo"],[1,"form-container"],[1,"custom-input"],["id","username","label","Nombre de Usuario","placeholder","c.abarzua","value","g.flores@duocuc.cl"],["id","password","type","password","label","Contrase\xf1a","placeholder","123456","value","123456"],["expand","full",1,"custom-input",3,"click"],[1,"forgot-password"],["href","/forgot-password",1,"forgot-password-link"]],template:function(t,a){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Iniciar Sesion"),e.qZA()()(),e.TgZ(4,"ion-content",0)(5,"div",1),e._UZ(6,"ion-img",2),e.qZA(),e.TgZ(7,"form",3)(8,"ion-item",4),e._UZ(9,"ion-input",5),e.qZA(),e.TgZ(10,"ion-item",4),e._UZ(11,"ion-input",6),e.qZA(),e.TgZ(12,"ion-button",7),e.NdJ("click",function(){return a.login()}),e._uU(13,"Iniciar Sesi\xf3n"),e.qZA(),e.TgZ(14,"div",8)(15,"a",9),e._uU(16,"\xbfOlvidaste tu contrase\xf1a?"),e.qZA()()()()),2&t&&(e.xp6(4),e.Q6J("fullscreen",!0))},dependencies:[n.Pc,n.YG,n.W2,n.Gu,n.Xz,n.pK,n.Ie,n.wd,n.sr,n.j9,m.ez,i.u5,i._Y,i.JL,i.F],styles:['@charset "UTF-8";.logo-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.logo[_ngcontent-%COMP%]{text-align:center;max-width:19.9375rem;max-height:4.9375rem;margin-bottom:15%}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.custom-input[_ngcontent-%COMP%]{width:75%;margin-left:auto;margin-right:auto;margin-top:1rem}.forgot-password[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:10px;width:75%}.forgot-password-link[_ngcontent-%COMP%]{color:#007bff;text-decoration:underline}.forgot-password-link[_ngcontent-%COMP%]:hover{color:#0056b3;text-decoration:underline}']}),g})()}}]);