var I=Object.defineProperty,P=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var k=(n,e,o)=>e in n?I(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,M=(n,e)=>{for(var o in e||(e={}))K.call(e,o)&&k(n,o,e[o]);if(y)for(var o of y(e))Y.call(e,o)&&k(n,o,e[o]);return n},x=(n,e)=>P(n,W(e));import{c as q,N as w,a as U,o as s,b as c,d as t,e as G,r as g,f as $,g as b,u as J,h as S,i as _,t as h,j as m,w as Q,v as Z,k as F,l as X,m as A,n as ee,p as ne,q as f,s as C,x as v,y as oe,V as re}from"./vendor.324f27b9.js";const te=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=o(a);fetch(a.href,l)}};te();var ae={button:{about:n=>{const{normalize:e}=n;return e(["\xDCber"])},back:n=>{const{normalize:e}=n;return e(["Zur\xFCck"])},go:n=>{const{normalize:e}=n;return e(["Los"])},home:n=>{const{normalize:e}=n;return e(["Startseite"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Dunkelmodus umschalten"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Sprachen \xE4ndern"])}},intro:{aka:n=>{const{normalize:e}=n;return e(["Auch bekannt als"])},desc:n=>{const{normalize:e}=n;return e(["Okay, vielen Dank f\xFCr Ihren Besuch auf dieser Seite ^_^"])},desc2:n=>{const{normalize:e}=n;return e(["Was kann ich f\xFCr Dich tun?"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["Demo einer dynamischen Route"])},hi:n=>{const{normalize:e,interpolate:o,named:r}=n;return e(["Hi, ",o(r("name")),"!"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["Wie hei\xDFt du?"])}},lang:n=>{const{normalize:e}=n;return e(["Sprache"])},"not-found":n=>{const{normalize:e}=n;return e(["Nicht gefunden"])}},le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ae}),ie={button:{about:n=>{const{normalize:e}=n;return e(["About"])},back:n=>{const{normalize:e}=n;return e(["Back"])},go:n=>{const{normalize:e}=n;return e(["GO"])},home:n=>{const{normalize:e}=n;return e(["Home"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Toggle dark mode"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Change languages"])}},intro:{aka:n=>{const{normalize:e}=n;return e(["Also known as"])},desc:n=>{const{normalize:e}=n;return e(["Alright, Thanks for visiting this site ^_^"])},desc2:n=>{const{normalize:e}=n;return e(["what can i do for you?"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["Demo of dynamic route"])},hi:n=>{const{normalize:e,interpolate:o,named:r}=n;return e(["Hi, ",o(r("name")),"!"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["What's your name?"])}},lang:n=>{const{normalize:e}=n;return e(["Language"])},"not-found":n=>{const{normalize:e}=n;return e(["Not found"])}},se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ie}),me={button:{about:n=>{const{normalize:e}=n;return e(["Acerca de"])},back:n=>{const{normalize:e}=n;return e(["Atr\xE1s"])},go:n=>{const{normalize:e}=n;return e(["Ir"])},home:n=>{const{normalize:e}=n;return e(["Inicio"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Alternar modo oscuro"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Cambiar idiomas"])}},intro:{aka:n=>{const{normalize:e}=n;return e(["Tambi\xE9n conocido como"])},desc:n=>{const{normalize:e}=n;return e(["Muy bien, gracias por visitar este sitio ^_^"])},desc2:n=>{const{normalize:e}=n;return e(["\xBFQu\xE9 puedo hacer por ti?"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["Demo de ruta din\xE1mica"])},hi:n=>{const{normalize:e,interpolate:o,named:r}=n;return e(["\xA1Hola, ",o(r("name")),"!"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["\xBFC\xF3mo te llamas?"])}},lang:n=>{const{normalize:e}=n;return e(["Idioma"])},"not-found":n=>{const{normalize:e}=n;return e(["No se ha encontrado"])}},ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:me}),_e={button:{about:n=>{const{normalize:e}=n;return e(["\xC0 propos de"])},back:n=>{const{normalize:e}=n;return e(["Retour"])},go:n=>{const{normalize:e}=n;return e(["Essayer"])},home:n=>{const{normalize:e}=n;return e(["Accueil"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Basculer en mode sombre"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Changer de langue"])}},intro:{aka:n=>{const{normalize:e}=n;return e(["Aussi connu sous le nom de"])},desc:n=>{const{normalize:e}=n;return e(["D'accord, merci d'avoir visit\xE9 ce site ^_^"])},desc2:n=>{const{normalize:e}=n;return e(["que puis-je faire pour vous?"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["D\xE9mo de route dynamique"])},hi:n=>{const{normalize:e,interpolate:o,named:r}=n;return e(["Salut, ",o(r("name")),"!"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["Comment t'appelles-tu ?"])}},lang:n=>{const{normalize:e}=n;return e(["Langue"])},"not-found":n=>{const{normalize:e}=n;return e(["Page non trouv\xE9e"])}},ue=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_e}),ze={button:{about:n=>{const{normalize:e}=n;return e(["Tentang"])},back:n=>{const{normalize:e}=n;return e(["Kembali"])},go:n=>{const{normalize:e}=n;return e(["Pergi"])},home:n=>{const{normalize:e}=n;return e(["Beranda"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Ubah ke mode gelap"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Ubah bahasa"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["Baiklah, Terima Kasih Telah mengunjungi situs ini ^_^"])},desc2:n=>{const{normalize:e}=n;return e(["apa yang bisa saya bantu untuk anda?"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["Website ini dinamis dan support PWA!"])},hi:n=>{const{normalize:e,interpolate:o,named:r}=n;return e(["Halo, ",o(r("name")),"!"])},aka:n=>{const{normalize:e}=n;return e(["Juga diketahui sebagai"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["Siapa nama anda?"])}},"not-found":n=>{const{normalize:e}=n;return e(["Tidak ditemukan"])},lang:n=>{const{normalize:e}=n;return e(["Bahasa"])}},de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ze}),he={button:{about:n=>{const{normalize:e}=n;return e(["Su di me"])},back:n=>{const{normalize:e}=n;return e(["Indietro"])},go:n=>{const{normalize:e}=n;return e(["Vai"])},home:n=>{const{normalize:e}=n;return e(["Home"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Attiva/disattiva modalit\xE0 scura"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Cambia lingua"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["Va bene, grazie per aver visitato questo sito ^_^"])},desc2:n=>{const{normalize:e}=n;return e(["cosa posso fare per lei?"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["Demo di rotta dinamica"])},hi:n=>{const{normalize:e,interpolate:o,named:r}=n;return e(["Ciao, ",o(r("name")),"!"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["Come ti chiami?"])}},lang:n=>{const{normalize:e}=n;return e(["indonesiano"])},"not-found":n=>{const{normalize:e}=n;return e(["Non trovato"])}},pe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:he}),ge={button:{about:n=>{const{normalize:e}=n;return e(["\u3053\u308C\u306F\uFF1F"])},back:n=>{const{normalize:e}=n;return e(["\u623B\u308B"])},go:n=>{const{normalize:e}=n;return e(["\u9032\u3080"])},home:n=>{const{normalize:e}=n;return e(["\u30DB\u30FC\u30E0"])},toggle_dark:n=>{const{normalize:e}=n;return e(["\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9\u5207\u308A\u66FF\u3048"])},toggle_langs:n=>{const{normalize:e}=n;return e(["\u8A00\u8A9E\u5207\u308A\u66FF\u3048"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["\u4E86\u89E3\u3057\u307E\u3057\u305F\u3002\u3053\u306E\u30B5\u30A4\u30C8\u306B\u30A2\u30AF\u30BB\u30B9\u3057\u3066\u3044\u305F\u3060\u304D\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059^ _ ^"])},desc2:n=>{const{normalize:e}=n;return e(["\u3069\u3046\u3044\u3046\u3054\u7528\u4EF6\u3067\u3059\u304B\uFF1F"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["\u52D5\u7684\u30EB\u30FC\u30C8\u306E\u30C7\u30E2"])},hi:n=>{const{normalize:e,interpolate:o,named:r}=n;return e(["\u3053\u3093\u306B\u3061\u306F\u3001",o(r("name")),"!"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["\u541B\u306E\u540D\u306F\u3002"])}},lang:n=>{const{normalize:e}=n;return e(["\u30A4\u30F3\u30C9\u30CD\u30B7\u30A2\u8A9E"])},"not-found":n=>{const{normalize:e}=n;return e(["\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F"])}},be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ge}),fe={button:{about:n=>{const{normalize:e}=n;return e(["\uC18C\uAC1C"])},back:n=>{const{normalize:e}=n;return e(["\uB4A4\uB85C\uAC00\uAE30"])},go:n=>{const{normalize:e}=n;return e(["\uC774\uB3D9"])},home:n=>{const{normalize:e}=n;return e(["\uD648"])},toggle_dark:n=>{const{normalize:e}=n;return e(["\uB2E4\uD06C\uBAA8\uB4DC \uD1A0\uAE00"])},toggle_langs:n=>{const{normalize:e}=n;return e(["\uC5B8\uC5B4 \uBCC0\uACBD"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["\uB124, \uC774 \uC0AC\uC774\uD2B8\uB97C \uBC29\uBB38\uD574 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4 ^_^"])},desc2:n=>{const{normalize:e}=n;return e(["\uB0B4\uAC00 \uB2F9\uC2E0\uC744 \uC704\uD574 \uBB34\uC5C7\uC744 \uD560 \uC218?"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["\uB2E4\uC774\uB098\uBBF9 \uB77C\uC6B0\uD2B8 \uB370\uBAA8"])},hi:n=>{const{normalize:e,interpolate:o,named:r}=n;return e(["\uC548\uB155, ",o(r("name")),"!"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["\uC774\uB984\uC774 \uBB50\uC608\uC694?"])}},lang:n=>{const{normalize:e}=n;return e(["\uC778\uB3C4\uB124\uC2DC\uC544 \uC778"])},"not-found":n=>{const{normalize:e}=n;return e(["\uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"])}},ve=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:fe}),ye={button:{about:n=>{const{normalize:e}=n;return e(["O nas"])},back:n=>{const{normalize:e}=n;return e(["Wr\xF3\u0107"])},go:n=>{const{normalize:e}=n;return e(["WEJD\u0179"])},home:n=>{const{normalize:e}=n;return e(["Strona g\u0142\xF3wna"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Ustaw tryb nocny"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Zmie\u0144 j\u0119zyk"])}},intro:{aka:n=>{const{normalize:e}=n;return e(["Znany te\u017C jako"])},desc:n=>{const{normalize:e}=n;return e(["Opiniowany szablon startowy Vite"])},desc2:n=>{const{normalize:e}=n;return e(["co mog\u0119 dla ciebie zrobi\u0107?"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["Demonstracja dynamicznego route"])},hi:n=>{const{normalize:e,interpolate:o,named:r}=n;return e(["Cze\u015B\u0107, ",o(r("name")),"!"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["Jak masz na imi\u0119?"])}},lang:n=>{const{normalize:e}=n;return e(["indonezyjski"])},"not-found":n=>{const{normalize:e}=n;return e(["Nie znaleziono"])}},ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ye}),Me={button:{about:n=>{const{normalize:e}=n;return e(["Sobre"])},back:n=>{const{normalize:e}=n;return e(["Voltar"])},go:n=>{const{normalize:e}=n;return e(["Ir"])},home:n=>{const{normalize:e}=n;return e(["In\xEDcio"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Alternar modo escuro"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Mudar de idioma"])}},intro:{aka:n=>{const{normalize:e}=n;return e(["Tamb\xE9m conhecido como"])},desc:n=>{const{normalize:e}=n;return e(["Tudo bem, obrigado por visitar este site ^_^"])},desc2:n=>{const{normalize:e}=n;return e(["O que posso fazer para voc\xEA?"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["Demonstra\xE7\xE3o de rota din\xE2mica"])},hi:n=>{const{normalize:e,interpolate:o,named:r}=n;return e(["Ol\xE1, ",o(r("name")),"!"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["Qual \xE9 o seu nome?"])}},lang:n=>{const{normalize:e}=n;return e(["indon\xE9sio"])},"not-found":n=>{const{normalize:e}=n;return e(["N\xE3o encontrado"])}},xe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Me}),we={button:{about:n=>{const{normalize:e}=n;return e(["\u041E \u0448\u0430\u0431\u043B\u043E\u043D\u0435"])},back:n=>{const{normalize:e}=n;return e(["\u041D\u0430\u0437\u0430\u0434"])},go:n=>{const{normalize:e}=n;return e(["\u041F\u0435\u0440\u0435\u0439\u0442\u0438"])},home:n=>{const{normalize:e}=n;return e(["\u0413\u043B\u0430\u0432\u043D\u0430\u044F"])},toggle_dark:n=>{const{normalize:e}=n;return e(["\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0442\u0435\u043C\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C"])},toggle_langs:n=>{const{normalize:e}=n;return e(["\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u044F\u0437\u044B\u043A"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["\u0425\u043E\u0440\u043E\u0448\u043E, \u0441\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0435 \u044D\u0442\u043E\u0433\u043E \u0441\u0430\u0439\u0442\u0430 ^_^"])},desc2:n=>{const{normalize:e}=n;return e(["\u0427\u0442\u043E \u044F \u043C\u043E\u0433\u0443 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0434\u043B\u044F \u0432\u0430\u0441?"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["\u0414\u0435\u043C\u043E \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0430"])},hi:n=>{const{normalize:e,interpolate:o,named:r}=n;return e(["\u041F\u0440\u0438\u0432\u0435\u0442, ",o(r("name")),"!"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["\u041A\u0430\u043A \u0442\u0435\u0431\u044F \u0437\u043E\u0432\u0443\u0442?"])}},lang:n=>{const{normalize:e}=n;return e(["\u0438\u043D\u0434\u043E\u043D\u0435\u0437\u0438\u0439\u0441\u043A\u0438\u0439"])},"not-found":n=>{const{normalize:e}=n;return e(["\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"])}},$e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:we}),Se={button:{about:n=>{const{normalize:e}=n;return e(["Hakk\u0131mda"])},back:n=>{const{normalize:e}=n;return e(["Geri"])},go:n=>{const{normalize:e}=n;return e(["\u0130LER\u0130"])},home:n=>{const{normalize:e}=n;return e(["Anasayfa"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Karanl\u0131k modu de\u011Fi\u015Ftir"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Dilleri de\u011Fi\u015Ftir"])}},intro:{aka:n=>{const{normalize:e}=n;return e(["Ayr\u0131ca \u015F\xF6yle bilinir"])},desc:n=>{const{normalize:e}=n;return e(["Pekala, bu siteyi ziyaret etti\u011Finiz i\xE7in te\u015Fekk\xFCrler ^_^"])},desc2:n=>{const{normalize:e}=n;return e(["Sizin i\xE7in ne yapabilirim?"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["Dinamik rota demosu"])},hi:n=>{const{normalize:e,interpolate:o,named:r}=n;return e(["Merhaba, ",o(r("name")),"!"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["Ad\u0131n\u0131z nedir?"])}},lang:n=>{const{normalize:e}=n;return e(["Endonezya dili"])},"not-found":n=>{const{normalize:e}=n;return e(["Bulunamad\u0131"])}},Ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Se}),Ce={button:{about:n=>{const{normalize:e}=n;return e(["V\u1EC1"])},back:n=>{const{normalize:e}=n;return e(["Quay l\u1EA1i"])},go:n=>{const{normalize:e}=n;return e(["\u0110i"])},home:n=>{const{normalize:e}=n;return e(["Kh\u1EDFi \u0111\u1EA7u"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Chuy\u1EC3n \u0111\u1ED5i ch\u1EBF \u0111\u1ED9 t\u1ED1i"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Thay \u0111\u1ED5i ng\xF4n ng\u1EEF"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["\u0110\u01B0\u1EE3c r\u1ED3i, C\u1EA3m \u01A1n b\u1EA1n \u0111\xE3 gh\xE9 th\u0103m trang web n\xE0y ^ _ ^"])},desc2:n=>{const{normalize:e}=n;return e(["t\xF4i c\xF3 th\u1EC3 l\xE0m g\xEC cho b\u1EA1n?"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["B\u1EA3n gi\u1EDBi thi\u1EC7u v\u1EC1 dynamic route"])},hi:n=>{const{normalize:e,interpolate:o,named:r}=n;return e(["Hi, ",o(r("name")),"!"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["T\xEAn b\u1EA1n l\xE0 g\xEC?"])}},lang:n=>{const{normalize:e}=n;return e(["Ng\u01B0\u1EDDi Indonesia"])},"not-found":n=>{const{normalize:e}=n;return e(["Kh\xF4ng t\xECm th\u1EA5y"])}},Oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ce}),Te={button:{about:n=>{const{normalize:e}=n;return e(["\u5173\u4E8E"])},back:n=>{const{normalize:e}=n;return e(["\u8FD4\u56DE"])},go:n=>{const{normalize:e}=n;return e(["\u786E\u5B9A"])},home:n=>{const{normalize:e}=n;return e(["\u9996\u9875"])},toggle_dark:n=>{const{normalize:e}=n;return e(["\u5207\u6362\u6DF1\u8272\u6A21\u5F0F"])},toggle_langs:n=>{const{normalize:e}=n;return e(["\u5207\u6362\u8BED\u8A00"])}},intro:{aka:n=>{const{normalize:e}=n;return e(["\u4E5F\u53EB"])},desc:n=>{const{normalize:e}=n;return e(["\u597D\u7684\uFF0C\u611F\u8C22\u60A8\u8BBF\u95EE\u672C\u7AD9^_^"])},desc2:n=>{const{normalize:e}=n;return e(["\u6211\u80FD\u4E3A\u4F60\u505A\u4EC0\u4E48\uFF1F"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["\u52A8\u6001\u8DEF\u7531\u6F14\u793A"])},hi:n=>{const{normalize:e,interpolate:o,named:r}=n;return e(["\u4F60\u597D\uFF0C",o(r("name"))])},"whats-your-name":n=>{const{normalize:e}=n;return e(["\u8F93\u5165\u4F60\u7684\u540D\u5B57"])}},lang:n=>{const{normalize:e}=n;return e(["\u5370\u5EA6\u5C3C\u897F\u4E9A"])},"not-found":n=>{const{normalize:e}=n;return e(["\u672A\u627E\u5230\u9875\u9762"])}},je=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Te});const Le=Object.fromEntries(Object.entries({"../../locales/de.yml":le,"../../locales/en.yml":se,"../../locales/es.yml":ce,"../../locales/fr.yml":ue,"../../locales/id.yml":de,"../../locales/it.yml":pe,"../../locales/ja.yml":be,"../../locales/ko.yml":ve,"../../locales/pl.yml":ke,"../../locales/pt-BR.yml":xe,"../../locales/ru.yml":$e,"../../locales/tr.yml":Ae,"../../locales/vi.yml":Oe,"../../locales/zh-CN.yml":je}).map(([n,e])=>{const o=n.endsWith(".yaml");return[n.slice(14,o?-5:-4),e.default]})),He=({app:n})=>{const e=q({legacy:!1,locale:"en",messages:Le});n.use(e)};var Ve=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:He});const Ee=({isClient:n,router:e})=>{n&&(e.beforeEach(()=>{w.start()}),e.afterEach(()=>{w.done()}))};var De=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:Ee});const Be=({isClient:n,initialState:e,app:o})=>{const r=U();o.use(r),n?r.state.value=e.pinia||{}:e.pinia=r.state.value};var Ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:Be});const Re="modulepreload",O={},Ie="/",u=function(e,o){return!o||o.length===0?e():Promise.all(o.map(r=>{if(r=`${Ie}${r}`,r in O)return;O[r]=!0;const a=r.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${l}`))return;const i=document.createElement("link");if(i.rel=a?"stylesheet":Re,a||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),a)return new Promise((z,d)=>{i.addEventListener("load",z),i.addEventListener("error",d)})})).then(()=>e())},Pe=({isClient:n,router:e})=>{!n||e.isReady().then(async()=>{const{registerSW:o}=await u(()=>import("./virtual_pwa-register.76ac74a3.js"),[]);o({immediate:!0})})};var We=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:Pe});const Ke={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},Ye=t("path",{d:"M27.562 26L17.17 8.928l2.366-3.888L17.828 4L16 7.005L14.17 4l-1.708 1.04l2.366 3.888L4.438 26H2v2h28v-2zM16 10.85L25.22 26H17v-8h-2v8H6.78z",fill:"currentColor"},null,-1),qe=[Ye];function Ue(n,e){return s(),c("svg",Ke,qe)}var T={name:"carbon-campsite",render:Ue};const Ge=G("user",()=>{const n=g(""),e=g(new Set),o=$(()=>Array.from(e.value)),r=$(()=>o.value.filter(l=>l!==n.value));function a(l){n.value&&e.value.add(n.value),n.value=l}return{setNewName:a,otherNames:r,savedName:n}});var j={};const Je={class:"text-4xl"},Qe=t("p",null,[t("a",{rel:"noreferrer",href:"https://github.com/antfu/vitesse",target:"_blank"}," Hi! ")],-1),Ze={class:"text-sm opacity-75"},Fe=X(),Xe={class:"text-sm opacity-75"},en=t("div",{class:"py-4"},null,-1),nn=["placeholder","aria-label","onKeydown"],on={class:"hidden",for:"input"},rn=["disabled"],L=b({setup(n){const e=Ge(),o=g(e.savedName),r=J(),a=()=>{o.value&&r.push(`/hi/${encodeURIComponent(o.value)}`)},{t:l}=S();return(i,z)=>{const d=T;return s(),c("div",null,[t("p",Je,[_(d,{class:"inline-block"})]),Qe,t("p",null,[t("em",Ze,h(m(l)("intro.desc")),1)]),Fe,t("p",null,[t("em",Xe,h(m(l)("intro.desc2")),1)]),en,Q(t("input",{id:"input","onUpdate:modelValue":z[0]||(z[0]=p=>o.value=p),placeholder:m(l)("intro.whats-your-name"),"aria-label":m(l)("intro.whats-your-name"),type:"text",autocomplete:"false",p:"x-4 y-2",w:"250px",text:"center",bg:"transparent",border:"~ rounded gray-200 dark:gray-700",outline:"none active:none",onKeydown:F(a,["enter"])},null,40,nn),[[Z,o.value]]),t("label",on,h(m(l)("intro.whats-your-name")),1),t("div",null,[t("button",{class:"m-3 text-sm btn",disabled:!o.value,onClick:a},h(m(l)("button.go")),9,rn)])])}}});typeof j=="function"&&j(L);const tn=[{name:"about",path:"/about",component:()=>u(()=>import("./about.65382d87.js"),["assets/about.65382d87.js","assets/vendor.324f27b9.js"]),props:!0},{name:"hello",path:"/hello",component:()=>u(()=>import("./hello.b04cf6e2.js"),["assets/hello.b04cf6e2.js","assets/vendor.324f27b9.js"]),props:!0},{name:"index",path:"/",component:L,props:!0,meta:{layout:"home"}},{name:"kalkulator-vue",path:"/kalkulator-vue",component:()=>u(()=>import("./kalkulator-vue.12e4853b.js"),["assets/kalkulator-vue.12e4853b.js","assets/vendor.324f27b9.js"]),props:!0},{name:"hi-name",path:"/hi/:name",component:()=>u(()=>import("./_name_.1ef6f3d5.js"),["assets/_name_.1ef6f3d5.js","assets/vendor.324f27b9.js"]),props:!0},{name:"all",path:"/:all(.*)*",component:()=>u(()=>import("./_...all_.445789a1.js"),["assets/_...all_.445789a1.js","assets/vendor.324f27b9.js"]),props:!0,meta:{layout:404}}],an={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},ln=t("circle",{cx:"21",cy:"21",r:"2",fill:"currentColor"},null,-1),sn=t("circle",{cx:"7",cy:"7",r:"2",fill:"currentColor"},null,-1),mn=t("path",{d:"M27 31a4 4 0 1 1 4-4a4.012 4.012 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2.006 2.006 0 0 0-2-2z",fill:"currentColor"},null,-1),cn=t("path",{d:"M30 16A14.041 14.041 0 0 0 16 2a13.043 13.043 0 0 0-6.8 1.8l1.1 1.7a24.425 24.425 0 0 1 2.4-1A25.135 25.135 0 0 0 10 15H4a11.149 11.149 0 0 1 1.4-4.7L3.9 9A13.842 13.842 0 0 0 2 16a13.998 13.998 0 0 0 14 14a13.366 13.366 0 0 0 5.2-1l-.6-1.9a11.442 11.442 0 0 1-5.2.9A21.071 21.071 0 0 1 12 17h17.9a3.402 3.402 0 0 0 .1-1zM12.8 27.6a13.02 13.02 0 0 1-5.3-3.1A12.505 12.505 0 0 1 4 17h6a25.002 25.002 0 0 0 2.8 10.6zM12 15a21.446 21.446 0 0 1 3.3-11h1.4A21.446 21.446 0 0 1 20 15zm10 0a23.278 23.278 0 0 0-2.8-10.6A12.092 12.092 0 0 1 27.9 15z",fill:"currentColor"},null,-1),_n=[ln,sn,mn,cn];function un(n,e){return s(),c("svg",an,_n)}var zn={name:"carbon-content-delivery-network",render:un};const dn={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},hn=t("path",{d:"M29.243 4.03l-8-2a1.006 1.006 0 0 0-.615.042l-9.7 3.88L3.243 4.03A1 1 0 0 0 2 5v22a1 1 0 0 0 .757.97l8 2A1.024 1.024 0 0 0 11 30a.995.995 0 0 0 .372-.072l9.7-3.88l7.686 1.922A1 1 0 0 0 30 27V5a1 1 0 0 0-.757-.97zM28 11h-6V4.28l6 1.5zm-18 8H4v-6h6zm2-8V7.677l8-3.2V11zm8 2v6h-8v-6zm-8 8h8v3.323l-8 3.2zm10-8h6v6h-6zM10 7.78V11H4V6.28zM4 21h6v6.72l-6-1.5zm18 3.219V21h6v4.72z",fill:"currentColor"},null,-1),pn=[hn];function gn(n,e){return s(),c("svg",dn,pn)}var bn={name:"carbon-choropleth-map",render:gn};const fn={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},vn=t("path",{d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2z","fill-rule":"evenodd",fill:"currentColor"},null,-1),yn=[vn];function kn(n,e){return s(),c("svg",fn,yn)}var Mn={name:"carbon-logo-github",render:kn};const xn={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},wn=t("path",{d:"M28 6v20H4V6h24m0-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z",fill:"currentColor"},null,-1),$n=t("path",{d:"M6 8h10v2H6z",fill:"currentColor"},null,-1),Sn=t("path",{d:"M6 12h10v2H6z",fill:"currentColor"},null,-1),An=t("path",{d:"M6 16h6v2H6z",fill:"currentColor"},null,-1),Cn=[wn,$n,Sn,An];function On(n,e){return s(),c("svg",xn,Cn)}var Tn={name:"carbon-dicom-overlay",render:On};const jn={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},Ln=A('<path d="M18 19h6v2h-6z" fill="currentColor"></path><path d="M18 15h12v2H18z" fill="currentColor"></path><path d="M18 11h12v2H18z" fill="currentColor"></path><path d="M14 21v-2H9v-2H7v2H2v2h8.215a8.591 8.591 0 0 1-2.216 3.977A9.273 9.273 0 0 1 6.552 23H4.333a10.855 10.855 0 0 0 2.145 3.297A14.658 14.658 0 0 1 3 28.127L3.702 30a16.42 16.42 0 0 0 4.29-2.336A16.488 16.488 0 0 0 12.299 30L13 28.127A14.664 14.664 0 0 1 9.523 26.3a10.313 10.313 0 0 0 2.729-5.3z" fill="currentColor"></path><path d="M11.167 13h2.166L8.75 2H6.583L2 13h2.166L5 11h5.333zM5.833 9l1.833-4.4L9.5 9z" fill="currentColor"></path>',5),Hn=[Ln];function Vn(n,e){return s(),c("svg",jn,Hn)}var En={name:"carbon-language",render:Vn};const Dn={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},Bn=A('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Nn=[Bn];function Rn(n,e){return s(),c("svg",Dn,Nn)}var In={name:"carbon-sun",render:Rn};const Pn={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},Wn=t("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Kn=[Wn];function Yn(n,e){return s(),c("svg",Pn,Kn)}var qn={name:"carbon-moon",render:Yn};const H=ee(),Un=ne(H),Gn={class:"text-xl mt-6"},Jn=["title"],Qn=["title"],Zn={class:"icon-btn mx-2",rel:"noreferrer",href:"https://github.com/iyungrozy",target:"_blank",title:"GitHub"},Fn={class:"icon-btn mx-2",rel:"noreferrer",href:"https://iyungrozy.github.io/paimonmap/",target:"_blank",title:"Genshin Map Beta"},Xn={class:"icon-btn mx-2",rel:"noreferrer",href:"https://shiramui.xyz",target:"_blank",title:"Shiramui Bot"},eo=b({setup(n){const{t:e,availableLocales:o,locale:r}=S(),a=()=>{const l=o;r.value=l[(l.indexOf(r.value)+1)%l.length]};return(l,i)=>{const z=T,d=f("router-link"),p=qn,V=In,E=En,D=Tn,B=Mn,N=bn,R=zn;return s(),c("nav",Gn,[_(d,{class:"icon-btn mx-2",to:"/",title:m(e)("button.home")},{default:C(()=>[_(z)]),_:1},8,["title"]),t("button",{class:"icon-btn mx-2 !outline-none",title:m(e)("button.toggle_dark"),onClick:i[0]||(i[0]=_o=>m(Un)())},[m(H)?(s(),v(p,{key:0})):(s(),v(V,{key:1}))],8,Jn),t("a",{class:"icon-btn mx-2",title:m(e)("button.toggle_langs"),onClick:a},[_(E)],8,Qn),_(d,{class:"icon-btn mx-2",to:"/about",title:m(e)("button.about")},{default:C(()=>[_(D)]),_:1},8,["title"]),t("a",Zn,[_(B)]),t("a",Fn,[_(N)]),t("a",Xn,[_(R)])])}}});var no=(n,e)=>{const o=n.__vccOpts||n;for(const[r,a]of e)o[r]=a;return o};const oo={},ro={class:"px-4 py-10 text-center text-gray-700 dark:text-gray-200"},to=t("div",{class:"mt-5 mx-auto text-center opacity-25 text-sm"},null,-1);function ao(n,e){const o=f("router-view"),r=eo;return s(),c("main",ro,[_(o),_(r),to])}var lo=no(oo,[["render",ao]]);const io={"404":()=>u(()=>import("./404.4dd5f993.js"),["assets/404.4dd5f993.js","assets/vendor.324f27b9.js"]),default:lo,home:()=>u(()=>import("./home.4decb8d6.js"),["assets/home.4decb8d6.js","assets/vendor.324f27b9.js"])};function so(n){return n.map(e=>{var o;return{path:e.path,component:io[((o=e.meta)==null?void 0:o.layout)||"default"],children:[x(M({},e),{path:""})]}})}const mo=b({setup(n){return oe({title:"Iyungrozy",meta:[{name:"description",content:"Iyungrozy Github Page"}]}),(e,o)=>{const r=f("router-view");return s(),v(r)}}});const co=so(tn);re(mo,{routes:co,base:"/"},n=>{Object.values({"./modules/i18n.ts":Ve,"./modules/nprogress.ts":De,"./modules/pinia.ts":Ne,"./modules/pwa.ts":We}).map(e=>{var o;return(o=e.install)==null?void 0:o.call(e,n)})});export{Tn as _,no as a,eo as b,Ge as u};
