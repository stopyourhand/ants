(function(t){function e(e){for(var n,c,i=e[0],r=e[1],l=e[2],A=0,d=[];A<i.length;A++)c=i[A],s[c]&&d.push(s[c][0]),s[c]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,i=1;i<o.length;i++){var r=o[i];0!==s[r]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},s={detail:0},a=[];function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=r;a.push([3,"chunk-vendors","chunk-common"]),o()})({"0f9e":function(t,e,o){"use strict";var n=o("aa01"),s=o.n(n);s.a},1046:function(t,e,o){},"1c28":function(t,e,o){},"28ce":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAFYUlEQVRYhc2Z24scRRSHv1PV3XPZ2cyu2WQvThJlN4kG413JekWMeEGCIJhgfFBffFP/ABHii6AvvikafPL+mAcRFAUVlaAEoyzxElRYk2wSZ3fdzcz0THcdH2ZnTGBnpmdnDP6gGaiu7vr6nFOnTtXIle//hqiCgzCQgud4xMb6IMIEMM5FksKcoN87kcOivGtFZkMPQgvSgFTlPhF5A7RwscDaAM9akf2hx+ehBQOgIreL6KH/AyCAQAGnhxRuUAEjwhCqb4L4vbzY6YWX9giqQt6L9PV0VYc9YFpgaq0vC2Ol6pSUFXwj9QG03l5zSmalvVtoBYxyvY3Z5RG7OxHpGs4pzIcxwynLzvUpbtqYZksuAIHYKTPFkB+KITPzIcs1x1DKdj0GgIpc5wFdEQoQKxTDmFvHMjx+xRB7tgys2jd2ysFjC7z18xI/LVQZSduu7aGOrKHL8HEKy7WYJ6/M887uiZaAANYIT+0Y5u27J7h30wCL1XhNTjPd9FbgdCXmocsHefHmDaRtshE3D3q8escot49nWaq67lzHSgpKqmIlZno0w0u7NnY5DOR8w4GbRtiQ9ijH3U2jxJA1p+R8w6NbB8l43fsMYPtQwMOTgxTDuKvnEkOWIseWQZ/7N7WOwSTaXcgynrVUurBmIkgFBGHHcLDmVNLQVcMB165Pc67Wb0gF3wjjmZ4WJQAynmE06xHGLvEziSCdKp6BQq43KzaUDyxV12dLOmA04zE9llkr1wXaXcgylfcpRcmsmWziKOy5LMfWfNALW1O3jWXYvSlH1WmilaQjpAIicM36/gA2dMuGNMMpS5TA7R0hhXqOnCt3l9s6ab7qqESaaJlsCylAOXJcNugzPdqfeGzovs0DTOZ9KlGPlqw6BYHnbxxhqk/x2FBhwOPAjRvI+YZOHm8JKcDpcsS+yXXcNZHtK2BDu0bT7J1cx3wYY9q4vSXkcuSYWhfwxBX5/4Kvqf1b1zGasVTbLJMtIf+uOm4dz/Qt7bTSZN7ngc05Fqutc+aqkFoPRS4d6H0ZTKKrR1KU2kygVSEjVfKBZXPOa7a1+9K16PwqaNA3xG3S+qqQRuoxuVSrg/2yWOOF787i+sj52swCHxxfAiDrtZ/h3qqNIljgsxMlRtKW12cW+bEY8uCWXF9m+l9hzKE/lpldqmGAI39VGApaFy+rQiowkrF8dybky5PlprlfPlJk53CKkUxv1dArR+c5eqZCPmV59qs5MtYwkm5tzZazW7V+M22FrG8wAidLETML1Z4Ai2HM8b+rWAO+CAO+wRpB27i7NST12PSNUIuV7cMB790zwa6N6Z4g84Hl4J1jPLYtTzl2GBGstN9XJ97j7J/Ks30oIEi4jW0lK/WJ8vRVl1AY8Kn2unbDv6Va0qr8h2JIkj1WzhesSXYyYehwzCLUX3Tw2CJnK63LtblSxHOHz7Lvk5M8/ulJjpyptB34laPznChFSTxjPBJ8jG+Eb06V2fvxCe66NMu2vE8YKUaExZrj2zNlfl2s8ftSjVjhkz/PMTMfsnUo4Or1KQpZDyMQWOFUKeazEyWOnK0QGMHrEI9iOCc7Pvjtfpx+2AnUaX3vHRghsMJKFUeMNmvCrGeak6AUKbHWjwQ9EYR62EROKcdKxhN86XAk6EAMd3soXyscF5hs198Izdov1n/DwCAM+NKMmcagWU8AaeY+XflQI8KgLxf0bclo9Cs1ctgoLCDyBGitwzNNWCv138bVLqrO79d4LolEdTHyzTOllCyblYYvVGWPwmzvB8m9S+FPMWaPwLei5y2LonwU+jLtOd1rYxp/kYxdNDBlDjiqyGERfQeYbdz7Bz1Q/9/5h9TzAAAAAElFTkSuQmCC"},3:function(t,e,o){t.exports=o("919c")},"513a":function(t,e,o){"use strict";var n=o("5fc7"),s=o.n(n);s.a},"5b93":function(t,e,o){"use strict";var n=o("f31c"),s=o.n(n);s.a},"5fc7":function(t,e,o){},"6e67":function(t,e){t.exports="data:image/png;base64,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"},"6e81":function(t,e,o){"use strict";var n=o("1046"),s=o.n(n);s.a},"7d7c":function(t,e){t.exports="data:image/png;base64,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"},"8b39":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAEKElEQVRIib2W3W9UVRTFf+vcO6WltQQExfKlicjXC0TUNyKxGjVReNA/wY83UAyIH4htTGj1wUBCfPEPsA+IREIUYqokRiPhgRcTWtSAkCASE2hKO3PnLB/mzrSdttOhJq7Jzpxz9r577ZV7zrlbAwMD1NDZCbduUWxbil1GCgSS9ZHyTqAbsZLISgLG/lPSlWhOB8rHo5MhCYTo6hA3soxlacpsmN0DjwF9kfL22ooB5f9ovc16wdMm6QfOAPuA8w1y1hBmWGsBPpPCz8D2Ot8oYtj2JeM7kx0S3cAvwKdzCJqReEmx9d7T4NeoaMPmEmivKD8CtANrgYeBhTHEjcB+4HI1n/GuqyPxFLCoWeKWYrHwJWJbrmFc6M0FYzc3Ah8DQzM8/ytwqNQR1tnsF5Ty9e7iWBhopDwttS0BwOgwVEm5YXmnrB8bVT0JY8Ahyz9hHQMWA89cHYl9IcY9jRQ/DrxaqcClQHgZaJZ0MgaNdwDFfL4b2DIjcaaIrT7ydyq0D/h+HqRVnBX0VvPHED7KiNRbADYgngSQ9PvNdPzo38kd/gnj3EzGmmYr3xPI2hPKHQmljvCJ4Urueg54qD4+JE531mbRR4Hx+QmdgjHZn9dIVHghqMAUg/hUNSBLfGKRW5hsd9qXUA5xVgaFQMsoFOpMSfJVNcZyt2UmWwphdX4VjQIXm5U0fO7sXCEX1m7dlgGpYHW9MzV+IN9V1xJr1ixW0mxNVUTBdcMK465pxMIGYTM7a47hcz+wdus2FAKbNm2ak7k0cVyn5Q7ANQCJLisym0kzXesNkRjuy3mvV7gnLAVdBtZh2hAbqFyDTaG0cGkj92bshArVpXpnMDo9MUl2xI4Ck611tJ0QG7z7GCmMhmnmGHfUYvB3ZuovBLLjE1n8OtDarOIG6ABeyceRmJwkJky2AAxJVFSLNcmt8u7kdol0JKNwu9w003hbmfGFJcbbM4qt2V6k5bnrBDBcHx+iAzH6bSACSPRA5QqdJ55FeicfZza9KFJv1a16HnMkHxeEjjG9+2iKVFFfAJVNZfUzSysUVnWmrOpMWdmZvGVzprKsxUS+Ad4D2pog7AB65fA10FlblYvVE6QgCEKYIE3pQLIFbfEl8LeVh1Qw9BZbRy8CB4DNTO1YEuBRoKfUVh5Spcgp15vhIPD+TJVqcHCwNvmrVGJZmqZXR9wnsdt2/a2RAdeRhH1/PRGQyeq3XAI+mFTAAUm9BhRj3jZPRwbsCdFbDKfqfCmwArurjjQKHQeeAN4FDlo6UFMHPfXKG7WhF4Dnkyw8GFO/GHE3sEawvJKLG0i/2fEMMTmp4Poj0+sJUrB7kCDvTubsf4E/gMO53S16JY/nrRWye/Kie5oh/q/oNyyoKZc+BEbv+pMzT/S6cjIAMN71fyiukYNHQW+Aj/wLpKixL/SrBrkAAAAASUVORK5CYII="},"919c":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Header",{attrs:{webPage:t.webPage,identity:t.identity}}),o("PageInfo"),o("MainContent"),o("hr"),o("OtherGoods"),o("Footer")],1)},a=[],c=o("d8b0"),i=o("274f"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pageInfo"},[o("p",t._l(t.pageSource,function(e,n){return o("span",{class:[n==t.pageSource.length-1?"currentPage":""]},[t._v("\n            "+t._s(e)+"\n            "),n<t.pageSource.length-1?o("strong",[t._v(">")]):t._e()])}),0)])},l=[],u=o("2f62"),A={computed:Object(u["c"])({pageSource:"getPageSource"})},d=A,f=(o("cfca"),o("2877")),m=Object(f["a"])(d,r,l,!1,null,null,null),g=m.exports,p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main"},[o("PicShow"),o("TextInfo")],1)},v=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"picShow"},[n("div",{staticClass:"picTurn"},t._l(t.detailGoods.goodsPicture,function(e,o){return n("span",{class:[o===t.picIndex?"choosePic":""]},[n("img",{attrs:{src:e},on:{click:function(e){t.picIndex=o}}})])}),0),n("div",{staticClass:"bigPic"},[n("img",{staticClass:"bigImg",attrs:{src:t.detailGoods.goodsPicture[t.picIndex]}}),n("img",{staticClass:"blowUp",attrs:{src:o("8b39")}})])])},b=[],C={data:function(){return{picIndex:0}},computed:Object(u["c"])({detailGoods:"getDetailGoods"})},E=C,G=(o("fb53"),Object(f["a"])(E,h,b,!1,null,null,null)),O=G.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"textInfo"},[n("h1",{staticClass:"goodsName"},[t._v(t._s(t.detailGoods.goodsName))]),n("div",{staticClass:"goodsPrice"},[n("span",{staticClass:"goodsLabel"},[t._v("价格")]),n("p",[n("span",[t._v(t._s(t.detailGoods.goodsPrice)+"元")]),n("span",{staticClass:"goodsBargin"},[t._v(t._s(t.detailGoods.goodsBargin?"可议价":"不可议价"))])])]),n("div",{staticClass:"goodsDescrible"},[n("span",{staticClass:"goodsLabel"},[t._v("简介")]),n("p",[t._v(t._s(t.detailGoods.goodsDescrible))])]),n("div",{staticClass:"goodsTransaction"},[n("span",{staticClass:"goodsLabel"},[t._v("配送")]),n("p",[t._v(t._s(t.detailGoods.transactionMode))])]),n("div",{staticClass:"goodsAmount"},[n("span",{staticClass:"goodsLabel"},[t._v("数目")]),n("p",[n("strong",{staticClass:"numHandle",on:{click:function(e){t.buyNum>1&&t.buyNum--}}},[t._v("-")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.buyNum,expression:"buyNum"}],attrs:{type:"text",size:"1"},domProps:{value:t.buyNum},on:{input:function(e){e.target.composing||(t.buyNum=e.target.value)}}}),n("strong",{staticClass:"numHandle",on:{click:function(e){t.buyNum<t.detailGoods.goodsAmount&&t.buyNum++}}},[t._v("+")]),n("span",{staticClass:"remanentNum"},[t._v("(库存"+t._s(t.detailGoods.goodsAmount)+"件)")])])]),n("div",{staticClass:"goodsContact"},[n("span",{staticClass:"goodsLabel"},[t._v("联系")]),n("p",[n("img",{attrs:{src:o("982f")},on:{click:t.enterChat}}),n("img",{attrs:{src:o("7d7c")},on:{click:function(e){return t.getInfo("wechat")}}}),n("img",{attrs:{src:o("28ce")},on:{click:function(e){return t.getInfo("qq")}}})])]),t._m(0),t.tipShow?n("div",{staticClass:"tipContainer"},[n("div",{staticClass:"tipFixed"},[n("p",[t._v(t._s(t.tipContent))]),n("img",{attrs:{src:o("6e67")},on:{click:function(e){t.tipShow=!1}}})])]):t._e()])},x=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"handleButton"},[o("button",{staticClass:"addToCart"},[t._v("加入购物车")]),o("button",{staticClass:"immediatePurchase"},[t._v("立即购买")])])}],S={data:function(){return{buyNum:1,tipContent:"啊哦~卖家隐藏了信息",tipShow:!1}},computed:Object(u["c"])({detailGoods:"getDetailGoods"}),methods:{enterChat:function(){console.log("进入聊天空间")},getInfo:function(t){this.tipShow=!0,"wechat"===t?this.detailGoods.isWechat?this.tipContent="微信号：".concat(this.detailGoods.Wechat):this.tipContent="啊哦~卖家隐藏了信息":"qq"===t&&(this.detailGoods.isQQ?this.tipContent="QQ号：".concat(this.detailGoods.QQ):this.tipContent="啊哦~卖家隐藏了信息")}},watch:{buyNum:function(t){t<0?this.buyNum=1:t>this.detailGoods.goodsAmount&&(this.buyNum=this.detailGoods.goodsAmount)}}},R=S,y=(o("5b93"),Object(f["a"])(R,w,x,!1,null,null,null)),j=y.exports,P={components:{PicShow:O,TextInfo:j}},Q=P,I=(o("513a"),Object(f["a"])(Q,p,v,!1,null,null,null)),N=I.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"others"},[n("p",{staticClass:"othersTitle"},[t._v("卖家的其他闲置商品(共"+t._s(t.totalGoods)+"件)")]),n("div",{staticClass:"picCarousel"},[n("img",{class:{carouselBtn:!0,leftCarouselBtn:!0,leftSlide:t.leftSlide},attrs:{src:o("c529")},on:{click:function(e){t.leftSlide=!0}}}),n("div",{staticClass:"goodsContent"},t._l(t.otherGoods,function(e){return n("div",{class:["singleGoods",t.leftSlide?"leftSlide":"rightSlide"]},[n("img",{attrs:{src:e.goodsPicture}}),n("span",{staticClass:"goodsName"},[t._v(t._s(e.goodsName))]),n("span",{staticClass:"goodsPrice"},[t._v("￥"+t._s(e.goodsPrice)+"元")])])}),0),n("img",{class:{carouselBtn:!0,rightCarouselBtn:!0,rightSlide:!t.leftSlide},attrs:{src:o("48c1")},on:{click:function(e){t.leftSlide=!1}}})])])},M=[],K={data:function(){return{leftSlide:!0}},computed:Object(u["c"])({totalGoods:"getTotalGoods",otherGoods:"getOtherGoods"})},B=K,q=(o("0f9e"),Object(f["a"])(B,T,M,!1,null,null,null)),V=q.exports,z=o("4360"),Y={name:"app",store:z["a"],components:{Header:c["a"],Footer:i["a"],PageInfo:g,MainContent:N,OtherGoods:V},data:function(){return{webPage:"",identity:"buyer"}},mounted:function(){}},H=Y,Z=(o("6e81"),Object(f["a"])(H,s,a,!1,null,null,null)),U=Z.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(U)}}).$mount("#app")},"982f":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAD10lEQVRYhe2YXW8UVRiAnzmzO2sjsVJQUT7K1jZUiILS+BU1qRFTKZW0kfAHSPTCG/4GJBpRE0nwF0CaQt2EINrEKhaCMbEtVA3QVsESoJXtx3ZmduZwcXZ2Z3a2a9f9aC94rmbmPWfeZ9+Zc/bM0RaOHSGP7cAh4D0gDsTyG1QYE7gOnAVOAFf8QeE7NoAvgGHgMNBaAzkyOZ7L5BwGvgLqvGDEJ5cA3qmBUDEE8CHQgnqCllfBT1l5OT9vA5+AMt6Bsl5tfATsEKgBoa+wTCF04FAE6AhFWlqJvtmO9uiampjI+TnswQGcP8fyQx0RoMl/Rax/EqOjC9I26ctDuDPTIER+x8rguoi1DUR27cbo6MKcuYd7946/RVMENYKz6M3bALAGvsUZG62OmA8HcGemMfbsRcSb8wWNUGm0NeqxyuT9qst5eLlE/eOhWEhQuq460Gs4bjK5srl9VOnlqhwPBctl1QtG/rtJDq1+LdG2V6CuDvvCD8jpe9mYaFhP5OXXAEhf+hl3+m6uX8M6oq+/BakU9i8Xkf/OVEcwsvMl9O3PqxPLwjqXyMVebENvaVUnto313dlsLNr2Knq8GQBpmdiDA8vOWdoj9k89BaaEJfG3LaUfJVYwfXkIUimQLumrI4GYfekCcn5OtRv9LRybTYImSA//Wj1BOZvEHhosEvuxcCx5H/viTyWJeaz6UfxQsFzCqxlNUwdS1s4ikyub20e4gl4jx6mqUwAv13IE5WxStS2wNqsWXi4vt5/QNJP+4yr6rt1E32hHbHgms5iUQO7XadEozsR13Kl/liUgNjyN3tiEtG3fVXVP7bF69OZtyNQC6bErob7awrEjoZdN39pEdM9etEfqQh2yuC7WN704EzeKyumNcYx9PUW/a6S5iJXow7351/IEATQjhtawDgwjOGAsE/HEU0Tb31WnZ04tKak3xjHe/wAAe+Ac7p3bYOR2UzQhkIuLamERqG6OJf9JpGUip24VjLm3p5DJJEZXD0ZnN+aZU7h/TwbaiE1bMDq7VaX7e3Emi1d6Kf73POhM3sDq7wUksf0HEJu2BORi+w8Asiy5sgSzkok+EIJY90HExs2IjZuJdR8EIbASfWXJgXoHTfK+jUtF3/osRldP4JrV34szfq2c2wLMCdTmYVk449cwT5/MnpunT1ZCDmAigtrZbC33Tu7kOKnPj5avFOS8AL5G7UCsNhzghABGgOMrLFOI48CIN4oPA+dXUCaf71FO2WnGAjqBL4HSvmoqi4uq3L6MU2AetICPgReAz4DfgcL/P5VlHhjN5NyJ2vpNecEHQBdUu9l3JIQAAAAASUVORK5CYII="},aa01:function(t,e,o){},cc06:function(t,e,o){},cfca:function(t,e,o){"use strict";var n=o("cc06"),s=o.n(n);s.a},f31c:function(t,e,o){},fb53:function(t,e,o){"use strict";var n=o("1c28"),s=o.n(n);s.a}});
//# sourceMappingURL=detail.17491d79.js.map