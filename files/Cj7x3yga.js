const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["files/DgZWt1JX.js","files/lucifer.v5.js","files/index-cvq-yVL2.css"])))=>i.map(i=>d[i]);
import{C as e,E as t,bB as o,_ as s}from"./lucifer.v5.js";const n=e({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),i={state:n,subscribe:e=>t(n,(()=>e(n))),push(e,t){e!==n.view&&(n.view=e,t&&(n.data=t),n.history.push(e))},reset(e){n.view=e,n.history=[e]},replace(e){n.history.length>1&&(n.history[n.history.length-1]=e,n.view=e)},goBack(){if(n.history.length>1){n.history.pop();const[e]=n.history.slice(-1);n.view=e}},setData(e){n.data=e}},a={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>"undefined"!=typeof window&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>a.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){const e=navigator.userAgent.toLowerCase();return a.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,isTelegram:()=>"undefined"!=typeof window&&(Boolean(window.TelegramWebviewProxy)||Boolean(window.Telegram)||Boolean(window.TelegramWebviewProxyProto)),formatNativeUrl(e,t,o){if(a.isHttpUrl(e))return this.formatUniversalUrl(e,t,o);let s=e;s.includes("://")||(s=e.replaceAll("/","").replaceAll(":",""),s=`${s}://`),s.endsWith("/")||(s=`${s}/`),this.setWalletConnectDeepLink(s,o);return`${s}wc?uri=${encodeURIComponent(t)}`},formatUniversalUrl(e,t,o){if(!a.isHttpUrl(e))return this.formatNativeUrl(e,t,o);let s=e;if(s.startsWith("https://t.me")){const e=Buffer.from(t).toString("base64").replace(/[=]/g,"");s.endsWith("/")&&(s=s.slice(0,-1)),this.setWalletConnectDeepLink(s,o);const n=new URL(s);n.searchParams.set("startapp",e);return n.toString()}s.endsWith("/")||(s=`${s}/`),this.setWalletConnectDeepLink(s,o);return`${s}wc?uri=${encodeURIComponent(t)}`},wait:async e=>new Promise((t=>{setTimeout(t,e)})),openHref(e,t){const o=this.isTelegram()?"_blank":t;window.open(e,o,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(a.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch(o){console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(a.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch(t){console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(a.WALLETCONNECT_DEEPLINK_CHOICE)}catch(e){console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{"undefined"!=typeof localStorage&&localStorage.setItem(a.WCM_VERSION,"2.7.0")}catch(e){console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=null==(e=i.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},l=e({enabled:"undefined"!=typeof location&&(location.hostname.includes("localhost")||location.protocol.includes("https")),userSessionId:"",events:[],connectedWalletId:void 0}),r={state:l,subscribe:e=>t(l.events,(()=>e(o(l.events[l.events.length-1])))),initialize(){l.enabled&&void 0!==(null==crypto?void 0:crypto.randomUUID)&&(l.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){l.connectedWalletId=e},click(e){if(l.enabled){const t={type:"CLICK",name:e.name,userSessionId:l.userSessionId,timestamp:Date.now(),data:e};l.events.push(t)}},track(e){if(l.enabled){const t={type:"TRACK",name:e.name,userSessionId:l.userSessionId,timestamp:Date.now(),data:e};l.events.push(t)}},view(e){if(l.enabled){const t={type:"VIEW",name:e.name,userSessionId:l.userSessionId,timestamp:Date.now(),data:e};l.events.push(t)}}},d=e({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),c={state:d,subscribe:e=>t(d,(()=>e(d))),setChains(e){d.chains=e},setWalletConnectUri(e){d.walletConnectUri=e},setIsCustomDesktop(e){d.isCustomDesktop=e},setIsCustomMobile(e){d.isCustomMobile=e},setIsDataLoaded(e){d.isDataLoaded=e},setIsUiLoaded(e){d.isUiLoaded=e},setIsAuth(e){d.isAuth=e}},p=e({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),h={state:p,subscribe:e=>t(p,(()=>e(p))),setConfig(e){var t,o;r.initialize(),c.setChains(e.chains),c.setIsAuth(Boolean(e.enableAuthMode)),c.setIsCustomMobile(Boolean(null==(t=e.mobileWallets)?void 0:t.length)),c.setIsCustomDesktop(Boolean(null==(o=e.desktopWallets)?void 0:o.length)),a.setModalVersionInStorage(),Object.assign(p,e)}};a.isMobile(),e({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]});const m=e({open:!1}),u={state:m,subscribe:e=>t(m,(()=>e(m))),open:async e=>new Promise((t=>{const{isUiLoaded:o,isDataLoaded:s}=c.state;if(a.removeWalletConnectDeepLink(),c.setWalletConnectUri(null==e?void 0:e.uri),c.setChains(null==e?void 0:e.chains),i.reset("ConnectWallet"),o&&s)m.open=!0,t();else{const e=setInterval((()=>{const o=c.state;o.isUiLoaded&&o.isDataLoaded&&(clearInterval(e),m.open=!0,t())}),200)}})),close(){m.open=!1}};var C=Object.defineProperty,v=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,I=(e,t,o)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;const g=e({themeMode:"undefined"!=typeof matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),w={state:g,subscribe:e=>t(g,(()=>e(g))),setThemeConfig(e){const{themeMode:t,themeVariables:o}=e;t&&(g.themeMode=t),o&&(g.themeVariables=((e,t)=>{for(var o in t||(t={}))b.call(t,o)&&I(e,o,t[o]);if(v)for(var o of v(t))f.call(t,o)&&I(e,o,t[o]);return e})({},o))}};e({open:!1,message:"",variant:"success"});class W{constructor(e){this.openModal=u.open,this.closeModal=u.close,this.subscribeModal=u.subscribe,this.setTheme=w.setThemeConfig,w.setThemeConfig(e),h.setConfig(e),this.initUi()}async initUi(){if("undefined"!=typeof window){await s((()=>import("./DgZWt1JX.js")),__vite__mapDeps([0,1,2]));const e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),c.setIsUiLoaded(!0)}}}export{W as WalletConnectModal};
