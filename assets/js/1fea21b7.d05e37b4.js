"use strict";(self.webpackChunkavaota_docs=self.webpackChunkavaota_docs||[]).push([[1382],{95072:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>x,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var r=c(85893),i=c(11151);const s={},l="Crypto Engine - \u7b97\u6cd5\u5f15\u64ce",d={id:"linux-manual/sdk-develop/bsp-driver/ce",title:"Crypto Engine - \u7b97\u6cd5\u5f15\u64ce",description:"Crypto\u662f\u5185\u6838\u4e00\u4e2a\u72ec\u7acb\u7684\u5b50\u7cfb\u7edf\uff0c\u6e90\u7801\u5728kernel/crypto\u4e0b\uff0c\u5b83\u5b9e\u73b0\u4e86\u5bf9\u7b97\u6cd5\u7684\u7edf\u4e00\u7ba1\u7406\uff0c\u5e76\u63d0\u4f9b\u51fa\u7edf\u4e00\u7684\u6570\u636e\u5904\u7406\u63a5\u53e3\u7ed9\u5176\u4ed6\u5b50\u7cfb\u7edf\u4f7f\u7528\uff1b",source:"@site/docs/linux-manual/sdk-develop/bsp-driver/ce.md",sourceDirName:"linux-manual/sdk-develop/bsp-driver",slug:"/linux-manual/sdk-develop/bsp-driver/ce",permalink:"/linux-manual/sdk-develop/bsp-driver/ce",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"linuxManualSidebar",previous:{title:"CCU - \u65f6\u949f\u7ba1\u7406\u6a21\u5757",permalink:"/linux-manual/sdk-develop/bsp-driver/ccu"},next:{title:"EMAC - \u4ee5\u592a\u7f51\u7edc",permalink:"/linux-manual/sdk-develop/bsp-driver/gmac"}},t={},h=[{value:"\u6a21\u5757\u914d\u7f6e",id:"\u6a21\u5757\u914d\u7f6e",level:2},{value:"\u9a71\u52a8\u914d\u7f6e",id:"\u9a71\u52a8\u914d\u7f6e",level:3},{value:"Linux \u5185\u6838\u6e90\u751f\u52a0\u89e3\u5bc6\u63a5\u53e3",id:"linux-\u5185\u6838\u6e90\u751f\u52a0\u89e3\u5bc6\u63a5\u53e3",level:4},{value:"ARM\u52a0\u89e3\u5bc6\u63a5\u53e3",id:"arm\u52a0\u89e3\u5bc6\u63a5\u53e3",level:4},{value:"ARM OpenSSL \u52a0\u89e3\u5bc6\u63a5\u53e3",id:"arm-openssl-\u52a0\u89e3\u5bc6\u63a5\u53e3",level:4},{value:"CE \u539f\u751f\u8c03\u7528\u63a5\u53e3",id:"ce-\u539f\u751f\u8c03\u7528\u63a5\u53e3",level:4},{value:"CE OpenSSL \u8c03\u7528\u65b9\u6cd5",id:"ce-openssl-\u8c03\u7528\u65b9\u6cd5",level:4},{value:"\u8bbe\u5907\u6811\u914d\u7f6e",id:"\u8bbe\u5907\u6811\u914d\u7f6e",level:3},{value:"\u6e90\u7801\u7ed3\u6784",id:"\u6e90\u7801\u7ed3\u6784",level:2},{value:"\u6e90\u7801\u6811",id:"\u6e90\u7801\u6811",level:3},{value:"\u63a5\u53e3\u51fd\u6570",id:"\u63a5\u53e3\u51fd\u6570",level:3},{value:"Linux 5.15 Crypto API",id:"linux-515-crypto-api",level:3},{value:"crypto_alloc_cipher",id:"crypto_alloc_cipher",level:4},{value:"crypto_alloc_hash",id:"crypto_alloc_hash",level:4},{value:"crypto_free_cipher",id:"crypto_free_cipher",level:4},{value:"crypto_free_hash",id:"crypto_free_hash",level:4},{value:"crypto_cipher_encrypt",id:"crypto_cipher_encrypt",level:4},{value:"crypto_cipher_decrypt",id:"crypto_cipher_decrypt",level:4},{value:"crypto_hash_digest",id:"crypto_hash_digest",level:4}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"crypto-engine---\u7b97\u6cd5\u5f15\u64ce",children:"Crypto Engine - \u7b97\u6cd5\u5f15\u64ce"}),"\n",(0,r.jsx)(n.p,{children:"Crypto\u662f\u5185\u6838\u4e00\u4e2a\u72ec\u7acb\u7684\u5b50\u7cfb\u7edf\uff0c\u6e90\u7801\u5728kernel/crypto\u4e0b\uff0c\u5b83\u5b9e\u73b0\u4e86\u5bf9\u7b97\u6cd5\u7684\u7edf\u4e00\u7ba1\u7406\uff0c\u5e76\u63d0\u4f9b\u51fa\u7edf\u4e00\u7684\u6570\u636e\u5904\u7406\u63a5\u53e3\u7ed9\u5176\u4ed6\u5b50\u7cfb\u7edf\u4f7f\u7528\uff1b"}),"\n",(0,r.jsx)(n.p,{children:"\u56e0\u6b64\u57fa\u4e8e\u8fd9\u5957\u6846\u67b6\uff0c\u6211\u4eec\u4e0d\u4ec5\u53ef\u4ee5\u4f7f\u7528kernel\u5df2\u6709\u7684crypto\u7b97\u6cd5\u5bf9\u6570\u636e\u505a\u8f6c\u6362\uff0c\u8fd8\u80fd\u81ea\u884c\u6269\u5c55\u6dfb\u52a0\u7b97\u6cd5\uff0c\u6574\u4e2a\u7b97\u6cd5\u6846\u67b6\u5982\u4e0b\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image-20240401144903915",src:c(10060).Z+"",width:"761",height:"535"})}),"\n",(0,r.jsx)(n.p,{children:"\u5b83\u5b9e\u73b0\u4e86\u5bf9\u79f0\u52a0\u89e3\u5bc6\uff0c\u975e\u5bf9\u79f0\u52a0\u89e3\u5bc6\uff0c\u8ba4\u8bc1\u52a0\u89e3\u5bc6\uff0chash\uff0cHmac\uff0c\u4f2a\u968f\u673a\u6570\u751f\u6210\u7b97\u6cd5\u548c\u538b\u7f29\u7b97\u6cd5\u3002"}),"\n",(0,r.jsx)(n.p,{children:"CE \u6309\u7167Linux\u5185\u6838\u4e2d\u7684 Crypto \u6846\u67b6\u8bbe\u8ba1\uff0c\u5728\u5e94\u7528\u5c42\u80fd\u591f\u548cOpenSSL\u5b8c\u7f8e\u914d\u5408\uff0c\u5f88\u5bb9\u6613\u6269\u5c55\u5b8c\u6210\u591a\u79cd\u786c\u4ef6\u7b97\u6cd5\u7684\u652f\u6301\u3002\u6574\u4e2a\u8f6f\u4ef6\u67b6\u6784\u7684\u5173\u7cfb\u56fe\u5982\u4e0b:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image-20240401144925686",src:c(21220).Z+"",width:"625",height:"498"})}),"\n",(0,r.jsx)(n.p,{children:"\u5176\u4e2d\uff0c[App] \u662f\u6307\u7528\u6237\u7684\u5e94\u7528\u7a0b\u5e8f\uff1b[Crypto\u6846\u67b6]\u662fLinux\u5185\u6838\u81ea\u5e26\u7684\u52a0\u5bc6\u7b97\u6cd5\u7ba1\u7406\u6846\u67b6\uff1b\u7d2b\u8272\u533a\u57df\u9700\u8981\u6211\u4eec\u5f00\u53d1\u6216\u4fee\u6539\uff0c\u5b83\u4eec\u5206\u522b\u662f\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Demo\uff0c\u57fa\u4e8eOpenSSL\u7684\u793a\u4f8b\u4ee3\u7801\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"OpenSSL\uff0c\u4e00\u4e2a\u57fa\u4e8e\u5bc6\u7801\u5b66\u7684\u5b89\u5168\u5f00\u53d1\u5305\uff0cOpenSSL\u63d0\u4f9b\u7684\u529f\u80fd\u76f8\u5f53\u5f3a\u5927\u548c\u5168\u9762\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Crypto\u7528\u6237\u6001\u63a5\u53e3\uff0c\u5185\u6838crypto\u6846\u67b6\u548c\u7528\u6237\u6001\u7684\u63a5\u53e3\u90e8\u5206\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"SS Driver\u5373CE Driver\uff0c\u8d1f\u8d23\u64cd\u4f5cCE\u786c\u4ef6\u63a7\u5236\u5668\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\uff0c\u548c\u7528\u6237\u5e94\u7528\u7a0b\u5e8f\u76f4\u63a5\u6253\u4ea4\u9053\u7684\u662fOpenSSL\u6807\u51c6\u63a5\u53e3\uff08\u5c06\u5728\u7b2c4\u7ae0\u8be6\u8ff0\uff09\uff0c\u8fd9\u6837App\u4e5f\u5f88\u5bb9\u6613\u5d4c\u5165\u786c\u4ef6\u7684\u52a0\u89e3\u5bc6\u529f\u80fd\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u9700\u8981\u6307\u51fa\uff0c\u6807\u51c6\u7684OpenSSL\u8fd8\u4e0d\u80fd\u76f4\u63a5\u548c\u5185\u6838\u4e2d\u7684Crypto\u6846\u67b6\u4e92\u901a\uff0c\u9700\u8981\u5728OpenSSL\u4e2d\u6ce8\u518c\u4e00\u4e2a\u5f15\u64ce\u63d2\u4ef6(af_alg\u63d2\u4ef6)\uff0c\u5e76\u5728App\u4e2d\u8981\u914d\u7f6eOpenSSL\u4f7f\u7528af_alg\u5f15\u64ce\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u7531\u4e8e\u67d0\u4e9b\u5e94\u7528\u573a\u666f\u4e2d\uff0c\u4e0d\u60f3\u4f7f\u7528OpenSSL\u6807\u51c6\u63a5\u53e3\u6765\u64cd\u4f5cCE\u7684\u63a5\u53e3\uff0c\u56e0\u4e3aopenssl\u7f16\u8bd1\u51fa\u6765\u7684\u5e93\u6bd4\u8f83\u5927\uff0c\u4e0d\u9002\u5408\u5c0f\u5185\u5b58\u65b9\u6848\u3002\u56e0\u6b64CE\u9a71\u52a8\u8fd8\u63d0\u4f9bCE\u8bbe\u5907\u8282\u70b9\u65b9\u5f0f\u4f9b\u7528\u6237\u7a7a\u95f4\u4f7f\u7528\uff0c\u5982\u56fe\u6240\u793a\uff0c\u901a\u8fc7CE\u7684\u8bbe\u5907\u8282\u70b9\u65b9\u5f0f\u4e0d\u7ecf\u8fc7Crypto\u7684\u6846\u67b6\uff0c\u76f4\u63a5\u8c03\u7528\u52a0\u89e3\u5bc6\u63a5\u53e3\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image-20240401144954590",src:c(7618).Z+"",width:"569",height:"521"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6a21\u5757\u914d\u7f6e",children:"\u6a21\u5757\u914d\u7f6e"}),"\n",(0,r.jsx)(n.h3,{id:"\u9a71\u52a8\u914d\u7f6e",children:"\u9a71\u52a8\u914d\u7f6e"}),"\n",(0,r.jsx)(n.p,{children:"Linux \u652f\u6301\u591a\u79cd\u52a0\u89e3\u5bc6\u63a5\u53e3\uff1a"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u52a0\u89e3\u5bc6\u63a5\u53e3"}),(0,r.jsx)(n.th,{children:"\u5907\u6ce8"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Linux\u5185\u6838\u6e90\u751f\u52a0\u89e3\u5bc6\u63a5\u53e3"}),(0,r.jsx)(n.td,{children:"C\u8bed\u8a00\u5b9e\u73b0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ARM\u52a0\u89e3\u5bc6\u63a5\u53e3"}),(0,r.jsx)(n.td,{children:"\u91c7\u7528ARM\u7684\u52a0\u901f\u6307\u4ee4\u5b9e\u73b0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CE\u52a0\u89e3\u5bc6\u63a5\u53e3"}),(0,r.jsx)(n.td,{children:"\u52a0\u89e3\u5bc6\u786c\u4ef6\u52a0\u901f\u6a21\u5757"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"linux-\u5185\u6838\u6e90\u751f\u52a0\u89e3\u5bc6\u63a5\u53e3",children:"Linux \u5185\u6838\u6e90\u751f\u52a0\u89e3\u5bc6\u63a5\u53e3"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u8fd9\u91cc\u9009\u62e9\u81ea\u5df1\u9700\u8981\u7684 API \u5373\u53ef\uff0c\u5185\u6838\u6e90\u751f\u52a0\u89e3\u5bc6\u63a5\u53e3\u662f\u8f6f\u4ef6\u5b9e\u73b0\u7684\u652f\u6301\u7684\u8303\u56f4\u6700\u5e7f"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Cryptographic API ->\r\n\t< >   CBC support\r\n\t-*-   CTR support\r\n\t...\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image-20240401145634297",src:c(74851).Z+"",width:"1088",height:"579"})}),"\n",(0,r.jsx)(n.h4,{id:"arm\u52a0\u89e3\u5bc6\u63a5\u53e3",children:"ARM\u52a0\u89e3\u5bc6\u63a5\u53e3"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u6570\u636e\u5757\u662f\u4ee58K\u4e3a\u5355\u4f4d\uff0c\u6216 8K \u4ee5\u4e0b\uff0c\u53ef\u4ee5\u91c7\u7528 ARM \u7684\u52a0\u901f\u6307\u4ee4\u8fd9\u6bd4CE\u6a21\u5757\u7684\u6027\u80fd\u66f4\u52a0\u6709\u4f18\u52bf\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u5982\u679c\u5f00\u542f ARM \u7684\u52a0\u901f\u6307\u4ee4\uff0c\u5fc5\u987b\u5173\u95ed CE \u7684\u914d\u7f6e\uff0c\u56e0\u4e3aCE\u7684\u914d\u7f6e\u4f18\u5148\u7ea7\u66f4\u52a0\u9ad8\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"[*] ARM64 Accelerated Cryptographic Algorithms  ---\x3e\r\n\t< >   SHA-224/SHA-256 digest algorithm for arm64\r\n\t< >   SHA-384/SHA-512 digest algorithm for arm64\r\n\t< >   SHA-1 digest algorithm (ARMv8 Crypto Extensions)\r\n\t...\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image-20240401145753769",src:c(59021).Z+"",width:"1084",height:"579"})}),"\n",(0,r.jsx)(n.h4,{id:"arm-openssl-\u52a0\u89e3\u5bc6\u63a5\u53e3",children:"ARM OpenSSL \u52a0\u89e3\u5bc6\u63a5\u53e3"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u91cc\u4ee5\u9009\u62e9\u4f7f\u7528 NEON \u52a0\u901f AES \u7c7b\u7b97\u6cd5\u4e3a\u793a\u4f8b\uff0c\u4ecb\u7ecd\u5982\u4f55\u5728\u7528\u6237\u7a7a\u95f4\u901a\u8fc7 OpenSSL \u5e93\u4f7f\u7528 ARM \u6307\u4ee4\u4f18\u5316\u7684\u52a0\u89e3\u5bc6\u63a5\u53e3\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u9996\u5148\u52fe\u9009 ",(0,r.jsx)(n.code,{children:"AES in ECB/CBC/CTR/XTS modes using NEON instructions"})," \u6a21\u5757\u5f00\u542f ARM \u6307\u4ee4\u4f18\u5316"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"[*] ARM64 Accelerated Cryptographic Algorithms  ---\x3e\r\n\t<*>   AES in ECB/CBC/CTR/XTS modes using NEON instructions\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image-20240401150043460",src:c(64400).Z+"",width:"1086",height:"580"})}),"\n",(0,r.jsx)(n.p,{children:"\u7136\u540e\u5f00\u542f NET \u9009\u9879"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image-20240401150113782",src:c(71436).Z+"",width:"1085",height:"105"})}),"\n",(0,r.jsxs)(n.p,{children:["\u7136\u540e\u914d\u7f6e ",(0,r.jsx)(n.code,{children:"Networking options"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Networking support ->\r\n\tNetworking options ->\r\n\t\t<*> Unix domain sockets\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image-20240401150158756",src:c(22864).Z+"",width:"1084",height:"573"})}),"\n",(0,r.jsx)(n.p,{children:"\u6253\u5f00\u7528\u6237\u63a5\u53e3"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"CONFIG_CRYPTO_USER_API\r\nCONFIG_CRYPTO_USER_API_HASH\r\nCONFIG_CRYPTO_USER_API_SKCIPHER\r\nCONFIG_CRYPTO_USER_API_RNG\r\nCONFIG_CRYPTO_USER_API_AEAD\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image-20240401150249948",src:c(321).Z+"",width:"1083",height:"579"})}),"\n",(0,r.jsx)(n.p,{children:"\u540c\u65f6\u5173\u95ed\u786c\u4ef6 CE"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image-20240401150338963",src:c(87051).Z+"",width:"1088",height:"123"})}),"\n",(0,r.jsx)(n.h4,{id:"ce-\u539f\u751f\u8c03\u7528\u63a5\u53e3",children:"CE \u539f\u751f\u8c03\u7528\u63a5\u53e3"}),"\n",(0,r.jsx)(n.p,{children:"\u52fe\u9009"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"CE Drivers ->\r\n\t< > Support socket AF_ALG API for CE\r\n\t<*> CE support the systemcall interface for user api\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image-20240401150526491",src:c(78249).Z+"",width:"1084",height:"289"})}),"\n",(0,r.jsx)(n.h4,{id:"ce-openssl-\u8c03\u7528\u65b9\u6cd5",children:"CE OpenSSL \u8c03\u7528\u65b9\u6cd5"}),"\n",(0,r.jsxs)(n.p,{children:["\u9700\u8981\u52fe\u9009 ",(0,r.jsx)(n.code,{children:"Support socket AF_ALG API for CE"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"CE Drivers ->\r\n\t<*> Support socket AF_ALG API for CE\r\n\t< > CE support the systemcall interface for user api\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image-20240401145243320",src:c(88307).Z+"",width:"1082",height:"215"})}),"\n",(0,r.jsx)(n.p,{children:"\u540c\u65f6\u914d\u7f6e Linux \u5185\u6838\u7684 Sockets \u652f\u6301\uff0c\u5f00\u542f NET \u9009\u9879"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image-20240401150113782",src:c(71436).Z+"",width:"1085",height:"105"})}),"\n",(0,r.jsxs)(n.p,{children:["\u7136\u540e\u914d\u7f6e ",(0,r.jsx)(n.code,{children:"Networking options"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Networking support ->\r\n\tNetworking options ->\r\n\t\t<*> Unix domain sockets\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image-20240401150158756",src:c(22864).Z+"",width:"1084",height:"573"})}),"\n",(0,r.jsx)(n.p,{children:"\u6253\u5f00\u7528\u6237\u63a5\u53e3"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"CONFIG_CRYPTO_USER_API\r\nCONFIG_CRYPTO_USER_API_HASH\r\nCONFIG_CRYPTO_USER_API_SKCIPHER\r\nCONFIG_CRYPTO_USER_API_RNG\r\nCONFIG_CRYPTO_USER_API_AEAD\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image-20240401150249948",src:c(321).Z+"",width:"1083",height:"579"})}),"\n",(0,r.jsx)(n.h3,{id:"\u8bbe\u5907\u6811\u914d\u7f6e",children:"\u8bbe\u5907\u6811\u914d\u7f6e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'cryptoengine: ce@3040000 {\r\n\tcompatible = "allwinner,sunxi-ce";\r\n\tdevice_name = "ce";\r\n\treg = <0x0 0x03040000 0x0 0xa0>, /* non-secure space */\r\n\t\t<0x0 0x03040800 0x0 0xa0>; /* secure space */\r\n\tinterrupts = <GIC_SPI 52 IRQ_TYPE_EDGE_RISING>, /*non-secure*/\r\n\t\t\t\t<GIC_SPI 53 IRQ_TYPE_EDGE_RISING>; /* secure*/\r\n\tclock-frequency = <400000000>; /* 400MHz */\r\n\tclocks = <&ccu CLK_BUS_CE>, <&ccu CLK_CE>, <&ccu CLK_CE_MBUS_GATE>,\r\n\t\t<&ccu CLK_PLL_PERI0_400M>, <&ccu CLK_CE_SYS>;\r\n\tclock-names = "bus_ce", "ce_clk", "mbus_ce", "clk_src", "ce_sys_clk";\r\n\tresets = <&ccu RST_BUS_CE>;\r\n};\n'})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"compatible:\u8868\u5f81\u5177\u4f53\u7684\u8bbe\u5907,\u7528\u4e8e\u9a71\u52a8\u548c\u8bbe\u5907\u7684\u7ed1\u5b9a\u3002"}),"\n",(0,r.jsx)(n.li,{children:"reg:\u8bbe\u5907\u4f7f\u7528\u7684\u5730\u5740\u3002"}),"\n",(0,r.jsx)(n.li,{children:"interrupts:\u8bbe\u5907\u4f7f\u7528\u7684\u4e2d\u65ad\u3002"}),"\n",(0,r.jsx)(n.li,{children:"clock-frequency:\u8bbe\u5907\u4f7f\u7528\u7684\u65f6\u949f\u9891\u7387\u3002"}),"\n",(0,r.jsx)(n.li,{children:"clocks:\u8bbe\u5907\u4f7f\u7528\u7684\u65f6\u949f\u6e90\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6e90\u7801\u7ed3\u6784",children:"\u6e90\u7801\u7ed3\u6784"}),"\n",(0,r.jsx)(n.h3,{id:"\u6e90\u7801\u6811",children:"\u6e90\u7801\u6811"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:".\r\n\u251c\u2500\u2500 Kconfig\r\n\u251c\u2500\u2500 Makefile\r\n\u251c\u2500\u2500 sunxi_ce.c\t\t\t\t// Sunxi\u5e73\u53f0CE\u7b97\u6cd5\u6ce8\u518c\u3001\u5904\u7406\u6d41\u7a0b\u7684\u5b9e\u73b0\r\n\u251c\u2500\u2500 sunxi_ce_cdev.c\t\t\t// CE\u7684\u5b57\u7b26\u8bbe\u5907\u76f8\u5173\u6ce8\u518c\u5b9e\u73b0--\u786c\u4ef6\u8d44\u6e90\u7533\u8bf7\u548c\u4f7f\u80fd\uff0cioctl\u903b\u8f91\u5b9e\u73b0\r\n\u251c\u2500\u2500 sunxi_ce_cdev.h\t\t\t// CE\u5b57\u7b26\u8bbe\u5907\u76f8\u5173\u5934\u6587\u4ef6\r\n\u251c\u2500\u2500 sunxi_ce.h\t\t\t\t// CE\u7684\u9a71\u52a8\u5934\u6587\u4ef6\r\n\u251c\u2500\u2500 sunxi_ce_proc_comm.c\r\n\u251c\u2500\u2500 sunxi_ce_proc.h\r\n\u251c\u2500\u2500 v2\r\n\u2502\xa0\xa0 \u251c\u2500\u2500 sunxi_ce_proc.c\t\t// V2CE\u5668\u7684\u7b97\u6cd5\u5904\u7406\u8fc7\u7a0b\r\n\u2502\xa0\xa0 \u251c\u2500\u2500 sunxi_ce_reg.c\t\t// V2\u7248\u672cSS\u63a7\u5236\u5668\u7684\u5bc4\u5b58\u5668\u63a5\u53e3\u5b9e\u73b0\r\n\u2502\xa0\xa0 \u2514\u2500\u2500 sunxi_ce_reg.h\t\t// V2\u7248\u672cSS\u63a7\u5236\u5668\u7684\u5bc4\u5b58\u5668\u63a5\u53e3\u58f0\u660e\r\n\u251c\u2500\u2500 v3\r\n\u2502\xa0\xa0 \u251c\u2500\u2500 sunxi_ce_cdev_comm.c\r\n\u2502\xa0\xa0 \u251c\u2500\u2500 sunxi_ce_proc.c\r\n\u2502\xa0\xa0 \u251c\u2500\u2500 sunxi_ce_proc_walk.c\r\n\u2502\xa0\xa0 \u251c\u2500\u2500 sunxi_ce_reg.c\r\n\u2502\xa0\xa0 \u2514\u2500\u2500 sunxi_ce_reg.h\r\n\u251c\u2500\u2500 v4\r\n\u2502\xa0\xa0 \u251c\u2500\u2500 sunxi_ce_cdev_comm.c\r\n\u2502\xa0\xa0 \u251c\u2500\u2500 sunxi_ce_proc.c\r\n\u2502\xa0\xa0 \u251c\u2500\u2500 sunxi_ce_reg.c\r\n\u2502\xa0\xa0 \u2514\u2500\u2500 sunxi_ce_reg.h\r\n\u2514\u2500\u2500 v5\r\n    \u251c\u2500\u2500 sunxi_ce_cdev_comm.c// V5\u7248\u672cSS\u63a7\u5236\u5668\u7684\u7b97\u6cd5\u5904\u7406\u8fc7\u7a0b\r\n    \u251c\u2500\u2500 sunxi_ce_proc.c\t\t// V5\u7248\u672cCE\u5668\u7684\u7b97\u6cd5\u5904\u7406\u8fc7\u7a0b\r\n    \u251c\u2500\u2500 sunxi_ce_reg.c\t\t// V5\u7248\u672cSS\u63a7\u5236\u5668\u7684\u5bc4\u5b58\u5668\u63a5\u53e3\u5b9e\u73b0\r\n    \u2514\u2500\u2500 sunxi_ce_reg.h\t\t// V5\u7248\u672cSS\u63a7\u5236\u5668\u7684\u5bc4\u5b58\u5668\u63a5\u53e3\u58f0\u660e\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7Makefile\u63a7\u5236\u56db\u79cdCE\u7248\u672c\u7684\u6e90\u7801\u7f16\u8bd1\uff0cMakefile\u5185\u5bb9\u5982\u4e0b:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"# SPDX-License-Identifier: GPL-2.0\r\n#\r\n# Makefile for the ce drivers.\r\n#\r\n\r\nobj-$(CONFIG_AW_CE_SOCKET) += sunxi-ce.o\r\nobj-$(CONFIG_AW_CE_IOCTL) += sunxi-ce-ioctl.o\r\n\r\nsunxi-ce-ioctl-$(CONFIG_AW_CE_IOCTL) += sunxi_ce_cdev.o\r\nsunxi-ce-$(CONFIG_AW_CE_SOCKET) += sunxi_ce.o sunxi_ce_proc_comm.o\r\n\r\nifdef CONFIG_ARCH_SUN50IW10\r\n        AW_CE_VER = v4\r\nendif\r\n\r\nifdef CONFIG_ARCH_SUN55IW3\r\n        AW_CE_VER = v5\r\nendif\r\n\r\nsunxi-ce-$(CONFIG_AW_CE_SOCKET) +=  $(AW_CE_VER)/sunxi_ce_reg.o $(AW_CE_VER)/sunxi_ce_proc.o\r\nsunxi-ce-ioctl-$(CONFIG_AW_CE_IOCTL) += $(AW_CE_VER)/sunxi_ce_reg.o $(AW_CE_VER)/sunxi_ce_cdev_comm.o\r\n\r\n#ccflags-y += -I$(srctree)/drivers/crypto/sunxi-ce/$(AW_CE_VER)\r\n#ccflags-y += -DDEBUG\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u63a5\u53e3\u51fd\u6570",children:"\u63a5\u53e3\u51fd\u6570"}),"\n",(0,r.jsx)(n.h3,{id:"linux-515-crypto-api",children:"Linux 5.15 Crypto API"}),"\n",(0,r.jsx)(n.h4,{id:"crypto_alloc_cipher",children:"crypto_alloc_cipher"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u51fd\u6570\u539f\u578b:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"struct crypto_cipher *crypto_alloc_cipher(const char *alg_name, unsigned int flags, unsigned int mask)\n"})}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"\u4f5c\u7528\uff1a\u5206\u914d\u5e76\u8fd4\u56de\u6307\u5b9a\u7b97\u6cd5\u7684\u5bf9\u79f0\u52a0\u5bc6\u7b97\u6cd5\u53e5\u67c4\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u53c2\u6570\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"alg_name"}),": \u8981\u5206\u914d\u7684\u52a0\u5bc6\u7b97\u6cd5\u540d\u79f0\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"flags"}),": \u6807\u5fd7\u4f4d\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"mask"}),": \u5c4f\u853d\u503c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u8fd4\u56de\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6210\u529f\uff0c\u8fd4\u56de\u5bf9\u79f0\u52a0\u5bc6\u7b97\u6cd5\u53e5\u67c4\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5931\u8d25\uff0c\u8fd4\u56deNULL\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"crypto_alloc_hash",children:"crypto_alloc_hash"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u51fd\u6570\u539f\u578b:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"struct crypto_hash *crypto_alloc_hash(const char *alg_name, unsigned int flags, unsigned int mask)\n"})}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"\u4f5c\u7528\uff1a\u5206\u914d\u5e76\u8fd4\u56de\u6307\u5b9a\u7b97\u6cd5\u7684\u54c8\u5e0c\u7b97\u6cd5\u53e5\u67c4\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u53c2\u6570\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"alg_name"}),": \u8981\u5206\u914d\u7684\u54c8\u5e0c\u7b97\u6cd5\u540d\u79f0\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"flags"}),": \u6807\u5fd7\u4f4d\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"mask"}),": \u5c4f\u853d\u503c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u8fd4\u56de\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6210\u529f\uff0c\u8fd4\u56de\u54c8\u5e0c\u7b97\u6cd5\u53e5\u67c4\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5931\u8d25\uff0c\u8fd4\u56deNULL\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"crypto_free_cipher",children:"crypto_free_cipher"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u51fd\u6570\u539f\u578b:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"void crypto_free_cipher(struct crypto_cipher *tfm)\n"})}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"\u4f5c\u7528\uff1a\u91ca\u653e\u5bf9\u79f0\u52a0\u5bc6\u7b97\u6cd5\u53e5\u67c4\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u53c2\u6570\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"tfm"}),": \u5bf9\u79f0\u52a0\u5bc6\u7b97\u6cd5\u53e5\u67c4\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"crypto_free_hash",children:"crypto_free_hash"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u51fd\u6570\u539f\u578b:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"void crypto_free_hash(struct crypto_hash *tfm)\n"})}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"\u4f5c\u7528\uff1a\u91ca\u653e\u54c8\u5e0c\u7b97\u6cd5\u53e5\u67c4\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u53c2\u6570\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"tfm"}),": \u54c8\u5e0c\u7b97\u6cd5\u53e5\u67c4\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"crypto_cipher_encrypt",children:"crypto_cipher_encrypt"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u51fd\u6570\u539f\u578b:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"int crypto_cipher_encrypt(struct cipher_desc *desc)\n"})}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"\u4f5c\u7528\uff1a\u5bf9\u79f0\u52a0\u5bc6\u7b97\u6cd5\u7684\u52a0\u5bc6\u64cd\u4f5c\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u53c2\u6570\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"desc"}),": \u52a0\u5bc6\u63cf\u8ff0\u7b26\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u8fd4\u56de\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u52a0\u5bc6\u64cd\u4f5c\u7684\u7ed3\u679c\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"crypto_cipher_decrypt",children:"crypto_cipher_decrypt"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u51fd\u6570\u539f\u578b:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"int crypto_cipher_decrypt(struct cipher_desc *desc)\n"})}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"\u4f5c\u7528\uff1a\u5bf9\u79f0\u52a0\u5bc6\u7b97\u6cd5\u7684\u89e3\u5bc6\u64cd\u4f5c\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u53c2\u6570\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"desc"}),": \u52a0\u5bc6\u63cf\u8ff0\u7b26\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u8fd4\u56de\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u89e3\u5bc6\u64cd\u4f5c\u7684\u7ed3\u679c\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"crypto_hash_digest",children:"crypto_hash_digest"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u51fd\u6570\u539f\u578b:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"int crypto_hash_digest(struct hash_desc *desc)\n"})}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"\u4f5c\u7528\uff1a\u54c8\u5e0c\u7b97\u6cd5\u7684\u6458\u8981\u8ba1\u7b97\u64cd\u4f5c\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u53c2\u6570\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"desc"}),": \u54c8\u5e0c\u63cf\u8ff0\u7b26\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u8fd4\u56de\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6458\u8981\u8ba1\u7b97\u7684\u7ed3\u679c\u3002"}),"\n"]}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},10060:(e,n,c)=>{c.d(n,{Z:()=>r});const r=c.p+"assets/images/image-20240401144903915-5b96187576d7549a5942c94790ac9bbf.png"},21220:(e,n,c)=>{c.d(n,{Z:()=>r});const r=c.p+"assets/images/image-20240401144925686-f6b9484b81a46791fee66cc1b23b7ee8.png"},7618:(e,n,c)=>{c.d(n,{Z:()=>r});const r=c.p+"assets/images/image-20240401144954590-8ee0e690255e474f8793eb0a5955c618.png"},88307:(e,n,c)=>{c.d(n,{Z:()=>r});const r=c.p+"assets/images/image-20240401145243320-4f2619daf0ebac925ecaaa43b7b7ae8c.png"},74851:(e,n,c)=>{c.d(n,{Z:()=>r});const r=c.p+"assets/images/image-20240401145634297-c8a4eb7c8690a530b9be94ad92d7e722.png"},59021:(e,n,c)=>{c.d(n,{Z:()=>r});const r=c.p+"assets/images/image-20240401145753769-11b2018d9d14eb9ce8b515d54d079e18.png"},64400:(e,n,c)=>{c.d(n,{Z:()=>r});const r=c.p+"assets/images/image-20240401150043460-aaceae7fa3bf08085a7ab26f485dad1a.png"},71436:(e,n,c)=>{c.d(n,{Z:()=>r});const r=c.p+"assets/images/image-20240401150113782-cdef4656dcb9a4864206a2faf98f9de3.png"},22864:(e,n,c)=>{c.d(n,{Z:()=>r});const r=c.p+"assets/images/image-20240401150158756-1e3431a5fa6a6e9e9789bbc26814d401.png"},321:(e,n,c)=>{c.d(n,{Z:()=>r});const r=c.p+"assets/images/image-20240401150249948-4f21f5baf458f1eabfb8d0a0d206432b.png"},87051:(e,n,c)=>{c.d(n,{Z:()=>r});const r=c.p+"assets/images/image-20240401150338963-f8a90ae468908775c1fe990c18ed6289.png"},78249:(e,n,c)=>{c.d(n,{Z:()=>r});const r=c.p+"assets/images/image-20240401150526491-eabc3d4f9d1063594d0e6e2a5c8fb359.png"},11151:(e,n,c)=>{c.d(n,{Z:()=>d,a:()=>l});var r=c(67294);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);