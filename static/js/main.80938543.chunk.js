(this["webpackJsonpev0-skin-gen"]=this["webpackJsonpev0-skin-gen"]||[]).push([[0],{114:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),c=n(10),i=n.n(c),s=(n(86),n(168)),p=n(169),d=n(66),r=Object(d.a)({palette:{type:"dark"}}),m=n(31),l=n.n(m),w=n(41),b=n(60),f=n(61),g=n(27),u=n(67),h=n(68),_=n(62),v=n.n(_),k=n(40),E=n(42),y=n.n(E),S=n(157),x=n(160),j=n(162),C=n(161),O=n(117),A=n(170),P=n(171),I=n(167),M=n(172),W=n(163),B=n(166),D=/(\d+)[^-]*$/gm,T={isFetching:!0,skinData:[],setIds:[]},G=function(e){Object(h.a)(n,e);var a=Object(u.a)(n);function n(e){var t;return Object(b.a)(this,n),(t=a.call(this,e)).state=T,t.fetchData=t.fetchData.bind(Object(g.a)(t)),t.weaponCard=t.weaponCard.bind(Object(g.a)(t)),t.saveJson=t.saveJson.bind(Object(g.a)(t)),t}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=Object(w.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchData();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchData",value:function(){var e=this;return v.a.get("https://raw.githubusercontent.com/bay0/CSGO-skin-ID-dumper/master/item_index.json").then((function(a){return e.setState({isFetching:!1,skinData:a.data})}))}},{key:"saveJson",value:function(){var e=Object(w.a)(l.a.mark((function e(a){var n,t,o,c,i,s,p,d,r,m,w,b,f;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n={CT:{Skins:[]},T:{Skins:[]}},t=0;t<k.length;t++)o=k[t],c=document.getElementById("".concat(o.id,"-skin-field")).value,i=parseFloat(document.getElementById("".concat(o.id,"-wear-field")).value),s=parseInt(document.getElementById("".concat(o.id,"-seed-field")).value),p=document.getElementById("".concat(o.id,"-stattrak-checkbox")).checked,d=document.getElementById("".concat(o.id,"-ct-checkbox")).checked,r=document.getElementById("".concat(o.id,"-t-checkbox")).checked,""!==c&&null!==c&&(m=parseInt(c.match(D)[0]),w={dyn_stattrak:p,paintkit:m,seed:s,stattrak:-1,weapon:o.id,wear:i},d&&n.CT.Skins.push(w),r&&n.T.Skins.push(w));b=document.createElement("a"),f=new Blob([JSON.stringify(n,null,2)],{type:"application/json"}),b.href=URL.createObjectURL(f),b.download="Skins",b.click();case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"weaponCard",value:function(e,a,n){return o.a.createElement(S.a,{key:"".concat(e,"-grid"),item:!0},o.a.createElement(x.a,null,o.a.createElement(C.a,null,o.a.createElement(O.a,{color:"textSecondary",gutterBottom:!0},o.a.createElement("a",{style:{color:"inherit"},href:"".concat("https://csgostash.com/weapon/").concat(a),target:"_blank",rel:"noopener noreferrer"},a)," - ",e)),o.a.createElement(j.a,null,o.a.createElement(S.a,{container:!0,direction:"column",spacing:1},o.a.createElement(S.a,{item:!0,container:!0,spacing:1},o.a.createElement(S.a,{item:!0,container:!0,direction:"column",xs:6},o.a.createElement(S.a,{item:!0},o.a.createElement(W.a,{control:o.a.createElement(M.a,{id:"".concat(e,"-t-checkbox"),defaultChecked:!0,inputProps:{"aria-label":"primary checkbox"}}),label:"T"})),o.a.createElement(S.a,{item:!0},o.a.createElement(W.a,{control:o.a.createElement(M.a,{id:"".concat(e,"-ct-checkbox"),defaultChecked:!0,inputProps:{"aria-label":"primary checkbox"}}),label:"CT"})),o.a.createElement(S.a,{item:!0},o.a.createElement(W.a,{control:o.a.createElement(M.a,{id:"".concat(e,"-stattrak-checkbox"),inputProps:{"aria-label":"primary checkbox"}}),label:"StatTrak\u2122"}))),o.a.createElement(S.a,{item:!0},o.a.createElement("img",{height:"auto",width:"125",src:n,alt:"Weapon - ".concat(a)}))),o.a.createElement(S.a,{item:!0},o.a.createElement(A.a,{fullWidth:!0,id:"".concat(e,"-seed-field"),defaultValue:"0",label:"Seed",variant:"outlined"})),o.a.createElement(S.a,{item:!0},o.a.createElement(A.a,{fullWidth:!0,id:"".concat(e,"-wear-field"),defaultValue:"0.00",label:"Wear",variant:"outlined"})),o.a.createElement(S.a,{item:!0},o.a.createElement(P.a,{id:"".concat(e,"-skin-field"),options:this.state.skinData,style:{width:300},getOptionLabel:function(e){return"".concat(e.name," - ").concat(e.id)},renderInput:function(e){return o.a.createElement(A.a,Object.assign({},e,{label:"Skin",variant:"outlined"}))}}))))))}},{key:"render",value:function(){var e=this,a=this.state.isFetching;if(a)return o.a.createElement(S.a,{container:!0,justify:"center",alignItems:"center",spacing:2},o.a.createElement(S.a,{item:!0},o.a.createElement(y.a,{size:150,color:"#123abc",loading:a})));var n=k.map((function(a){return e.weaponCard(a.id,a.name,a.img)}));return(o.a.createElement(B.a,{maxWidth:"xl"},o.a.createElement(S.a,{container:!0,alignItems:"center",spacing:2},o.a.createElement(S.a,{item:!0},o.a.createElement(O.a,{variant:"h4",component:"h4",gutterBottom:!0},"ev0-skin-gen")),o.a.createElement(S.a,{item:!0},o.a.createElement(I.a,{onClick:this.saveJson,variant:"contained",color:"primary",className:"save-button"},"Save")),o.a.createElement(S.a,{item:!0},o.a.createElement(O.a,null,"Made with ",o.a.createElement("span",{role:"img","aria-label":"heart"},"\u2764\ufe0f")," by bay")),o.a.createElement(S.a,{item:!0},o.a.createElement(y.a,{size:10,color:"#123abc",loading:!0}))),o.a.createElement(S.a,{container:!0,justify:"center",alignItems:"center",spacing:2},n)))}}]),n}(t.Component),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(s.a,{theme:r},o.a.createElement(p.a,null),o.a.createElement(G,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat(".","/service-worker.js");R?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var t=n.headers.get("content-type");404===n.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):J(a,e)}))}}()},40:function(e){e.exports=JSON.parse('[{"id":1,"name":"Desert Eagle","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_deagle.29e8f0d7d0be5e737d4f663ee8b394b5c9e00bdd.png"},{"id":2,"name":"Dual Berettas","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_elite.6563e9d274c6e799d71a7809021624f213d5e080.png"},{"id":3,"name":"Five-SeveN","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_fiveseven.7c33b4a78ae94a3d14e7cd0f71b295cf61717d75.png"},{"id":4,"name":"Glock-18","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_glock.8430afea5349054d0923cefa7d2e7bf3950ce3d7.png"},{"id":7,"name":"AK-47","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_ak47.a320f13fea4f21d1eb3b46678d6b12e97cbd1052.png"},{"id":8,"name":"AUG","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_aug.6b97a75aa4c0dbb61d81efb6d5497b079b67d0da.png"},{"id":9,"name":"AWP","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_awp.2899e1c6345ed05d62bdbe112db1b117d022e477.png"},{"id":40,"name":"SSG 08","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_ssg08.271a856f50fd6ac1014334098b1a43d61bddb892.png"},{"id":10,"name":"FAMAS","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_famas.c897878873beb9e9ca4c68ef3a666869c6e78031.png"},{"id":11,"name":"G3SG1","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_g3sg1.986d0e07f58c81c99aa5a47d86340f4c3d400339.png"},{"id":13,"name":"Galil AR","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_galilar.b84153658afdb7dc26a9854e566fde3fc42c22ef.png"},{"id":14,"name":"M249","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_m249.02d1cf8fa8c41af5a43749bf780c4c4a2e50ea8e.png"},{"id":16,"name":"M4A4","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_m4a1.39b3bd8d556e5cdebb79d60902442986eb9aedff.png"},{"id":17,"name":"MAC-10","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_mac10.41e40474aa21a9ed90d9b21dd5adf0910f766426.png"},{"id":19,"name":"P90","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_p90.15fedd7fc90f003b8de0ded36245b438d54bc3d2.png"},{"id":23,"name":"MP5-SD","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_mp5sd.2e92234c951819f3ae44742e96c488ef97f26c7c.png"},{"id":24,"name":"UMP-45","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_ump45.55669e2321f28efed775be27f7e3c7e71b501520.png"},{"id":25,"name":"XM1014","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_xm1014.7bd7f3985d680db2fcb7cad32b07c90b758c234b.png"},{"id":26,"name":"PP-Bizon","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_bizon.58523d37ee43b9a4ef42a67b65a28e5967743a56.png"},{"id":27,"name":"MAG-7","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_mag7.5480ba05c61153309163c46e7d646d6958af9bf7.png"},{"id":28,"name":"Negev","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_negev.1cf512eb01bd62bcae5c54feec694f418ab71d30.png"},{"id":29,"name":"Sawed-Off","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_sawedoff.4c4df9c84e1edc20488c45061ad88cfd2460c4a5.png"},{"id":30,"name":"Tec-9","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_tec9.74538566492b4af122be9b996bdd7d08585db3c0.png"},{"id":32,"name":"P2000","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_hkp2000.c2221f8c2ef3df6c2fcdafd1bea9faae01f64054.png"},{"id":33,"name":"MP7","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_mp7.0afc09868c38a00fde50c3e4943637c714e8981e.png"},{"id":34,"name":"MP9","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_mp9.c9103efde0845eb715cdcb67bf74bad646b1c5bc.png"},{"id":35,"name":"Nova","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_nova.d9063351d4233101d02def18aa7e901d02f9b4c1.png"},{"id":36,"name":"P250","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_p250.0bc9109121fb318a3bb18f6fa92692c7aa433205.png"},{"id":38,"name":"SCAR-20","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_scar20.1552c7b64dfe9e542a3b730edb80e21dcc6d243d.png"},{"id":39,"name":"SG 553","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_sg556.74040869391ea2ab25777f3670a6015191a73e6c.png"},{"id":60,"name":"M4A1-S","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_m4a1_silencer.a8d2a028fa33eb117d6d7665303c3316169c33f7.png"},{"id":61,"name":"USP-S","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_usp_silencer.608e10862885084bb1cec55d87ba5e694bfd621d.png"},{"id":63,"name":"CZ75-Auto","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_cz75a.057939990f5f295fc5eaf8f758cdef21a7cfeb8a.png"},{"id":64,"name":"R8 Revolver","img":"http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_revolver.a7c0ab2973cdc0bdb53ebbef960ecbae8842f719.png"}]')},81:function(e,a,n){e.exports=n(114)},86:function(e,a,n){}},[[81,1,2]]]);
//# sourceMappingURL=main.80938543.chunk.js.map