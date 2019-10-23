
export function chatboxjs(isLogged = false, nameUser, emailUser, organizationUser){
    window.zEmbed||function(e,t){var n,o,d,i,s,a=[],r=document.createElement("iframe");window.zEmbed=function(){a.push(arguments)},window.zE=window.zE||window.zEmbed,r.src="javascript:false",r.title="avg viet",r.role="presentation",(r.frameElement||r).style.cssText="display: none",d=document.getElementsByTagName("script"),d=d[d.length-1],d.parentNode.insertBefore(r,d),i=r.contentWindow,s=i.document;try{o=s}catch(e){n=document.domain,r.src='javascript:var d=document.open();d.domain="'+n+'";void(0);',o=s}o.open()._l=function(){var e=this.createElement("script");n&&(this.domain=n),e.id="js-iframe-async",e.src="https://assets.zendesk.com/embeddable_framework/main.js",this.t=+new Date,this.zendeskHost="lottevn.zendesk.com",this.zEQueue=a,this.body.appendChild(e)},o.write('<body onload="document._l();">'),o.close()}();
    zE(function() {
        zE.setLocale('vi');
        if(isLogged){
            zE.identify({
                name: nameUser,
                email: emailUser,
                organization: organizationUser
            });     
        }else{
            zE.identify();
        }
    });
}

export function showchatboxjs(){
    zE(function() {
        zE.activate();
    });
}

export function hidechatboxjs(){
    zE(function() {
        zE.hide();
    });
}

export function enablechatboxjs(){
    zE(function() {
        zE.show();
    });
}



