webpackJsonp([7],{RvcA:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=t("3j3K"),n=t("5oXY"),o=t("WWmu"),i=t("Qbdm"),u=t("7aOe"),s=t("AAnV"),d=t("faQ0"),r=function(){function a(a,e,t,l,n,o,i){var u=this;this.store=a,this.activatedRoute=e,this.router=t,this.dispatcher=l,this.globalService=n,this.domSanitizer=o,this.titleService=i,this.showTitle=!0;this.globalService.loadTitleAndMetaHeader({metadata:{},isCollapse:!0});var r=e.snapshot._routerState.url;r.includes("co-hoi-nghe-nghiep")&&(this.showTitle=!1),r=r.replace(/\//g,""),this.store.dispatch(new d.d(r)),this.cmsPageSub=this.store.select(s._42).subscribe(function(a){if(a&&a.content){u.titleService.setTitle(a.title),u.cmsPage$=a;var e=a.content;e=(e=(e=(e=e.replace(/.cms-ve-chung-toi/gi,"")).replace(/.cms-hop-tac-thuong-hieu/gi,"")).replace(/.cms-co-hoi-nghe-nghiep/gi,"")).replace(/href="#/gi,'data-attr="#'),u.innerHTML$=u.domSanitizer.bypassSecurityTrustHtml(e)}}),$(document).mouseup(function(a){if(a.target.dataset.attr&&($(a.target.dataset.attr).hasClass("show")?($(a.target.dataset.attr).collapse("hide"),$(a.target).addClass("collapsed")):($(a.target.dataset.attr).collapse("show"),$(a.target).removeClass("collapsed"))),$(".nav-content > li > a").has(a.target.parentNode)){var e=a.target.parentNode;if(e.dataset.tg)for(var t=document.getElementsByClassName("tabs-content"),l=0;l<t.length;l++)t[l].getAttribute("data-tab")==e.dataset.tg&&t[l].scrollIntoView({behavior:"smooth"})}a.stopImmediatePropagation()})}return a.prototype.ngOnInit=function(){($("body").removeClass("page-layout-2columns-left"),$("body").addClass("cms-page-view page-layout-1column"),$("#maincontent").addClass("container-lt page-main"),this.activatedRoute.snapshot._routerState.url.includes("co-hoi-nghe-nghiep"))&&$(".cms-page-view .page-main").css("width","auto")},a.prototype.ngOnDestroy=function(){$("body").removeClass("cms-page-view page-layout-1column"),$("body").addClass("page-layout-2columns-left"),$("#maincontent").removeClass("container-lt page-main")},a.ctorParameters=function(){return[{type:o.b},{type:n.a},{type:n.m},{type:o.a},{type:u.a},{type:i.DomSanitizer},{type:i.Title}]},a}(),c=function(){return function(){}}(),p=t("0x+m"),m=t("07Jo"),g=t("ctUI"),h=t("RnK3"),v=t("I9nH"),f=t("UCeQ"),y=t("Fgud"),M=t("8Rs7"),C=t("xvNT"),b=t("G2Xi"),w=t("Kyjy"),S=t("0EtO"),L=t("HgJU"),I=t("C5K1"),T=t("piIg"),R=t("l8e7"),N=t("Da3D"),z=t("69o6"),D=t("opWL"),U=t("Poa0"),A=t("CuSH"),F=t("2pez"),O=t("jeRQ"),P=t("peWk"),Q=t("uKDu"),H=t("2zUv"),W=t("EVC7"),k=t("Nd3Z"),V=t("yyQ2"),X=t("Ous9"),x=t("wLT5"),j=t("8g+1"),B=t("oBAb"),K=t("R50o"),_=t("FlDl"),E=t("gL0M"),J=t("bY/6"),Y=t("1sXw"),Z=t("wWZf"),q=t("g/Qt"),G=t("5xI+"),aa=t("3WIq"),ea=t("zlXi"),ta=t("QtLh"),la=t("YeUX"),na=t("f1SU"),oa=t("cv1U"),ia=t("JSIU"),ua=t("/1CB"),sa=t("2SVs"),da=t("cMm2"),ra=t("nCfc"),ca=t("oVdy"),pa=t("RhXo"),ma=t("giQ+"),ga=t("4n7m"),ha=t("q1+U"),va=t("6WXj"),fa=t("X6Ly"),ya=t("iGDU"),Ma=t("nQbK"),Ca=t("n5tU"),ba=t("3ZUp"),wa=t("2Je8"),Sa=t("Zcpd"),La=t("osFu"),$a=[[".cms-page-view .page-main{padding:0}  .show{display:block!important}  .accordion-content .panel-default>.panel-heading .panel-title{cursor:pointer}"]],Ia=l["\u0275crt"]({encapsulation:0,styles:$a,data:{}});function Ta(a){return l["\u0275vid"](0,[(a()(),l["\u0275eld"](0,0,null,null,7,"div",[["class","page-title-wrapper"]],null,null,null,null,null)),(a()(),l["\u0275ted"](-1,null,["\n   "])),(a()(),l["\u0275eld"](2,0,null,null,4,"h1",[["class","page-title"]],null,null,null,null,null)),(a()(),l["\u0275ted"](-1,null,["\n       "])),(a()(),l["\u0275eld"](4,0,null,null,1,"span",[["class","base"],["data-ui-id","page-title-wrapper"]],null,null,null,null,null)),(a()(),l["\u0275ted"](5,null,["",""])),(a()(),l["\u0275ted"](-1,null,["    \n      "])),(a()(),l["\u0275ted"](-1,null,["\n"]))],null,function(a,e){var t=e.component;a(e,5,0,null==t.cmsPage$?null:t.cmsPage$.title)})}function Ra(a){return l["\u0275vid"](0,[(a()(),l["\u0275and"](16777216,null,null,1,null,Ta)),l["\u0275did"](1,16384,null,0,wa.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(a()(),l["\u0275ted"](-1,null,["\n\n"])),(a()(),l["\u0275eld"](3,0,null,null,3,"div",[["class","columns"]],null,null,null,null,null)),(a()(),l["\u0275ted"](-1,null,["\n   "])),(a()(),l["\u0275eld"](5,0,null,null,0,"div",[["class","column main"]],[[8,"innerHTML",1]],null,null,null,null)),(a()(),l["\u0275ted"](-1,null,["\n"]))],function(a,e){a(e,1,0,e.component.showTitle)},function(a,e){a(e,5,0,e.component.innerHTML$)})}var Na=l["\u0275ccf"]("static-page",r,function(a){return l["\u0275vid"](0,[(a()(),l["\u0275eld"](0,0,null,null,1,"static-page",[],null,null,null,Ra,Ia)),l["\u0275did"](1,245760,null,0,r,[Sa.a,n.a,n.m,La.a,u.a,i.DomSanitizer,i.Title],null,null)],function(a,e){a(e,1,0)},null)},{},{},[]),za=t("NVOs"),Da=t("hz2l"),Ua=t("9x3v"),Aa=t("Avdc"),Fa=t("YNay"),Oa=t("iLW3"),Pa=t("2ZN1"),Qa=t("3HI7"),Ha=t("QM++"),Wa=t("xA9i"),ka=t("LPit"),Va=t("YqEa"),Xa=t("esTC"),xa=t("VWgf"),ja=t("slB3"),Ba=t("+Cue"),Ka=t("AfrM");t.d(e,"StaticPageModuleNgFactory",function(){return _a});var _a=l["\u0275cmf"](c,[],function(a){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[p.a,m.a,g.a,h.a,v.a,f.a,y.a,M.a,C.a,b.a,w.a,S.a,L.a,I.a,T.a,R.a,N.a,z.a,D.a,U.a,A.a,F.a,O.a,P.a,Q.a,H.a,W.a,k.a,V.a,X.a,x.a,j.a,B.a,K.a,_.a,E.a,J.a,Y.a,Z.a,q.a,G.a,aa.a,ea.a,ta.a,la.a,na.a,oa.a,ia.a,ua.a,sa.a,da.a,ra.a,ca.a,pa.a,ma.a,ga.a,ha.a,va.a,fa.a,ya.a,Ma.a,Ca.a,ba.a,Na]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,wa.NgLocalization,wa.NgLocaleLocalization,[l.LOCALE_ID]),l["\u0275mpd"](4608,za["\u0275i"],za["\u0275i"],[]),l["\u0275mpd"](4608,Da.DialogService,Da.DialogService,[l.ComponentFactoryResolver,l.ApplicationRef,l.Injector,[2,Da.DialogServiceConfig]]),l["\u0275mpd"](135680,Ua.a,Ua.a,[Sa.a]),l["\u0275mpd"](512,n.o,n.o,[[2,n.t],[2,n.m]]),l["\u0275mpd"](512,wa.CommonModule,wa.CommonModule,[]),l["\u0275mpd"](512,Aa.LazyLoadImagesModule,Aa.LazyLoadImagesModule,[]),l["\u0275mpd"](512,za["\u0275ba"],za["\u0275ba"],[]),l["\u0275mpd"](512,za.FormsModule,za.FormsModule,[]),l["\u0275mpd"](512,Fa.a,Fa.a,[]),l["\u0275mpd"](512,Oa.a,Oa.a,[]),l["\u0275mpd"](512,Pa.a,Pa.a,[]),l["\u0275mpd"](512,Qa.a,Qa.a,[]),l["\u0275mpd"](512,Ha.OwlModule,Ha.OwlModule,[]),l["\u0275mpd"](512,Wa.NouisliderModule,Wa.NouisliderModule,[]),l["\u0275mpd"](512,ka.CurrencyMaskModule,ka.CurrencyMaskModule,[]),l["\u0275mpd"](512,Va.BootstrapModalModule,Va.BootstrapModalModule,[]),l["\u0275mpd"](512,Xa.a,Xa.a,[]),l["\u0275mpd"](512,xa.TextMaskModule,xa.TextMaskModule,[]),l["\u0275mpd"](512,ja.b,ja.b,[]),l["\u0275mpd"](512,Ba.b,Ba.b,[]),l["\u0275mpd"](512,Ka.a,Ka.a,[]),l["\u0275mpd"](512,c,c,[]),l["\u0275mpd"](1024,n.k,function(){return[[{path:"",component:r}]]},[])])})}});