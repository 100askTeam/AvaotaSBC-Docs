"use strict";(self.webpackChunkavaota_docs=self.webpackChunkavaota_docs||[]).push([[6026],{69583:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var t=a(85893),n=a(11151);const i={},l="\u4f7f\u7528 SSH \u8fde\u63a5\u5f00\u53d1\u677f",c={id:"linux-manual/avaotaos/ssh",title:"\u4f7f\u7528 SSH \u8fde\u63a5\u5f00\u53d1\u677f",description:"\u542f\u52a8\u7cfb\u7edf",source:"@site/docs/linux-manual/avaotaos/03-ssh.md",sourceDirName:"linux-manual/avaotaos",slug:"/linux-manual/avaotaos/ssh",permalink:"/en-US/linux-manual/avaotaos/ssh",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"linuxManualSidebar",previous:{title:"\u7cfb\u7edf\u542f\u52a8\u5e38\u89c1\u95ee\u9898",permalink:"/en-US/linux-manual/avaotaos/os-start"},next:{title:"\u4f7f\u7528 UART \u8fde\u63a5\u5f00\u53d1\u677f",permalink:"/en-US/linux-manual/avaotaos/uart"}},d={},h=[{value:"\u542f\u52a8\u7cfb\u7edf",id:"\u542f\u52a8\u7cfb\u7edf",level:2},{value:"\u83b7\u53d6IP\u5730\u5740",id:"\u83b7\u53d6ip\u5730\u5740",level:2},{value:"\u4f7f\u7528USB\u952e\u76d8",id:"\u4f7f\u7528usb\u952e\u76d8",level:3},{value:"\u4f7f\u7528\u4e32\u53e3\u5de5\u5177",id:"\u4f7f\u7528\u4e32\u53e3\u5de5\u5177",level:3},{value:"\u8bbe\u7f6eSSH\u5de5\u5177",id:"\u8bbe\u7f6essh\u5de5\u5177",level:2},{value:"\u4f7f\u7528Putty\u767b\u9646",id:"\u4f7f\u7528putty\u767b\u9646",level:3},{value:"\u4f7f\u7528Mobaxterm\u767b\u9646",id:"\u4f7f\u7528mobaxterm\u767b\u9646",level:3}];function r(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"\u4f7f\u7528-ssh-\u8fde\u63a5\u5f00\u53d1\u677f",children:"\u4f7f\u7528 SSH \u8fde\u63a5\u5f00\u53d1\u677f"}),"\n",(0,t.jsx)(s.h2,{id:"\u542f\u52a8\u7cfb\u7edf",children:"\u542f\u52a8\u7cfb\u7edf"}),"\n",(0,t.jsx)(s.p,{children:"\u524d\u63d0\u6761\u4ef6\uff1a"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\u786e\u4fdd\u5df2\u7ecf \u53c2\u8003\u9875\u9762 ",(0,t.jsx)(s.a,{href:"https://avaota.fun/linux-manual/avaotaos/os-flash",children:"https://avaota.fun/linux-manual/avaotaos/os-flash"})," \u5236\u4f5c\u597dAvaotaA1\u7cfb\u7edf\u955c\u50cf\u81f3TF\u5361\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["\u200b\t",(0,t.jsx)(s.img,{alt:"image-20240522175502437",src:a(98954).Z+"",width:"1393",height:"729"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\u786e\u4fdd\u5f00\u53d1\u677f\u7535\u6e90\u4f9b\u7535\u6b63\u5e38\uff1a\u9ed8\u8ba4SPI\u663e\u793a\u5c4f\u6709\u56fe\u6848\u8f93\u51fa\u3002"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image-20240523101906182",src:a(1657).Z+"",width:"1560",height:"1429"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\u786e\u4fdd\u5f53\u524d\u73af\u5883\u4e0b\u6709\u53ef\u4ee5\u6b63\u5e38\u4e0a\u7f51\u7684\u8def\u7531\u5668+RJ45\u7f51\u7ebf\u63a5\u53e3\u3002"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image-20240523102423854",src:a(30882).Z+"",width:"2560",height:"1440"})}),"\n",(0,t.jsx)(s.h2,{id:"\u83b7\u53d6ip\u5730\u5740",children:"\u83b7\u53d6IP\u5730\u5740"}),"\n",(0,t.jsx)(s.p,{children:"\u5982\u679c\u60f3\u901a\u8fc7ssh\u53bb\u767b\u9646\u5f00\u53d1\u677f\u7cfb\u7edf\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u65b9\u5f0f\u6765\u83b7\u53d6IP\uff0c\u65b9\u5f0f\u4e00\uff1a\u901a\u8fc7USB\u8f6c\u4e32\u53e3\u6a21\u5757 \u76f4\u63a5\u8fdb\u5165shell\u7ec8\u7aef\uff0c\u8f93\u5165 ifconfig \u8fdb\u884c\u83b7\u53d6\u3002 \u65b9\u5f0f\u4e8c\uff1a AvaotaA1\u63a5\u5165USB\u952e\u76d8\uff0c\u5728\u5c0f\u5c4f\u5e55\u4e0a\u767b\u9646\u7cfb\u7edf\uff0c\u8f93\u5165 ifconfig \u5f97\u5230IP\u5730\u5740\u3002"}),"\n",(0,t.jsx)(s.h3,{id:"\u4f7f\u7528usb\u952e\u76d8",children:"\u4f7f\u7528USB\u952e\u76d8"}),"\n",(0,t.jsx)(s.p,{children:"\u5982\u4e0b\u56fe\u5e8f\u53f7 1 2 3 4 5 6 7 \u6240\u793a\uff0c\u5148\u5c06\u6211\u4eec\u5e38\u7528\u7684USB\u952e\u76d8\u63a5\u5165AvaotaA1\u5f00\u53d1\u677f\uff0c\u4e4b\u540e\u7cfb\u7edf\u4f1a\u81ea\u52a8\u8bc6\u522b\u52a0\u8f7dUSB\u952e\u76d8\u9a71\u52a8\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u901a\u8fc7 USB\u952e\u76d8\u6765\u64cd\u4f5c\u5c0f\u5c4f\u5e55\u4e0a\u4e86\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u7b2c\u4e00\u6b65\uff1a\u8f93\u5165\u7cfb\u7edf\u7528\u6237\u540d \u5bc6\u7801 avaota avaota \u6765\u767b\u5f55\u8fdb\u5165\u7cfb\u7edf\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u7b2c\u4e8c\u6b65\uff1a\u767b\u9646\u7cfb\u7edf\u540e\u53ef\u4ee5\u770b\u5230 shell \u7ec8\u7aef\u547d\u4ee4\u884c\uff0c\u53ef\u4ee5\u8fdb\u884c\u64cd\u4f5c\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u7b2c\u4e09\u6b65\uff1a\u8f93\u5165ifconfig \u6765\u67e5\u770b\u5f53\u524d\u7f51\u7edc\u8bbe\u5907\u8be6\u7ec6\u4fe1\u606f\u3002"}),"\n",(0,t.jsxs)(s.p,{children:["\u7b2c\u56db\u6b65\uff1a\u56e0\u4e3a\u4fe1\u606f\u592a\u591a\uff0c\u6211\u4eec\u53ea\u9700\u8981\u83b7\u53d6IP\u5730\u5740\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(s.code,{children:"ifconfig | grep inet | awk '{print $2}'"})," \u547d\u4ee4\u5355\u72ec\u663e\u793aIP\u5730\u5740\u3002"]}),"\n",(0,t.jsx)(s.p,{children:"\u7b2c\u4e94\u6b65\uff1a\u5c06\u6253\u5370\u51fa\u6765\u7684IP\u5730\u5740\u8bb0\u5f55\u4e0b\u6765\uff0c\u7528\u4e8e\u540e\u7eed\u542f\u52a8\u64cd\u4f5c\uff0c\u5982\u4e0b\u56fe\uff0c\u8fd9\u91cc\u7684IP\u5730\u5740\u662f 192.168.1.76(\u4f60\u7684\u548c\u6211\u7684\u4e0d\u4e00\u6837)\u3002"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image-20240523105930951",src:a(66442).Z+"",width:"2320",height:"1132"})}),"\n",(0,t.jsx)(s.h3,{id:"\u4f7f\u7528\u4e32\u53e3\u5de5\u5177",children:"\u4f7f\u7528\u4e32\u53e3\u5de5\u5177"}),"\n",(0,t.jsxs)(s.p,{children:["\u70b9\u51fb\u4e0b\u4e00\u4e2a\u9875\u9762  ",(0,t.jsx)(s.a,{href:"https://avaota.fun/linux-manual/avaotaos/uart",children:"https://avaota.fun/linux-manual/avaotaos/uart"})," \u4f7f\u7528UART\u8fde\u63a5\u5f00\u53d1\u677f\uff0c\u6211\u4eec\u53ef\u4ee5USB\u8f6cTTL / TypeC-SUB\u8c03\u8bd5\u5668\u65b9\u5f0f\u8fdb\u884c\uff0c\u767b\u5f55\u7ec8\u7aef\uff0c\u8f93\u5165  ",(0,t.jsx)(s.code,{children:"ifconfig | grep inet | awk '{print $2}'"}),"  \u547d\u4ee4\uff0c\u4e5f\u53ef\u4ee5\u5feb\u901f\u83b7\u53d6\u5230IP\u5730\u5740\u3002"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image-20240523111205300",src:a(43013).Z+"",width:"1897",height:"1033"})}),"\n",(0,t.jsx)(s.h2,{id:"\u8bbe\u7f6essh\u5de5\u5177",children:"\u8bbe\u7f6eSSH\u5de5\u5177"}),"\n",(0,t.jsx)(s.h3,{id:"\u4f7f\u7528putty\u767b\u9646",children:"\u4f7f\u7528Putty\u767b\u9646"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Putty\u5de5\u5177\u53ef\u4ee5\u8bbf\u95ee\u9875\u9762 ",(0,t.jsx)(s.a,{href:"https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html",children:"https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html"})," \u6765\u83b7\u53d6\u3002"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image-20240523103704070",src:a(1099).Z+"",width:"946",height:"351"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Putty\u521b\u5efaSSH\u4f1a\u8bdd"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"center"},children:"\u70b9\u51fbSSH\u7c7b\u578b\uff0c\u8f93\u5165IP\u5730\u5740\uff0c\u70b9\u51fbOpen"}),(0,t.jsx)(s.th,{style:{textAlign:"center"},children:"\u5728\u5f39\u51fa\u7684\u5bc6\u94a5\u5bf9\u8bdd\u6846\u5185 \u70b9\u51fb Accept\u540c\u610f"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:(0,t.jsx)(s.img,{alt:"image-20240523111450633",src:a(23057).Z+"",width:"580",height:"567"})}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:(0,t.jsx)(s.img,{alt:"image-20240523111520889",src:a(18351).Z+"",width:"680",height:"452"})})]})})]}),"\n",(0,t.jsxs)(s.p,{children:["\u53c2\u8003\u4e0b\u56fe\u6240\u793a\uff0c\u8f93\u5165AvaotaA1 \u7cfb\u7edf\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u5373\u53ef\u767b\u5f55\u5230\u5f00\u53d1\u677f\u7ec8\u7aef\u5185\u3002",(0,t.jsx)(s.img,{alt:"image-20240523111645715",src:a(86428).Z+"",width:"1172",height:"746"})]}),"\n",(0,t.jsx)(s.h3,{id:"\u4f7f\u7528mobaxterm\u767b\u9646",children:"\u4f7f\u7528Mobaxterm\u767b\u9646"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["MobaXterm\u53ef\u4ee5\u901a\u8fc7\u8bbf\u95ee\u9875\u9762 ",(0,t.jsx)(s.a,{href:"https://mobaxterm.mobatek.net/",children:"https://mobaxterm.mobatek.net/"})," \u83b7\u53d6 (\u63a8\u8350\u4f7f\u7528)\u3002"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"\u5b89\u88c5\u5b8c\u6210\u4ee5\u540e\uff0c\u53c2\u8003\u5982\u4e0b\u6b65\u9aa4\uff0c\u6211\u4eec\u9700\u8981\u65b0\u5efa\u4e00\u4e2a ssh\u7ec8\u7aef\u6765\u767b\u5f55\u5f00\u53d1\u677f\uff0c\u9996\u5148\u70b9\u51fb\u5de6\u4e0a\u89d2 Session \u65b0\u5efa\u4f1a\u8bdd\uff0c\u5728\u5f39\u51fa\u7684\u5bf9\u8bdd\u6846\u4e2d\uff0c\u9009\u62e9 SSH \u754c\u9762\uff0c\u4e4b\u540e \u5728\u5e8f\u53f7 3  \u5e8f\u53f7 4 \u5185\u8f93\u5165\u4f60\u7684AvaotaA1 IP\u5730\u5740 \u548c\u7528\u6237\u540d\uff0c\u8f93\u5165\u5b8c\u6210\u540e\uff0c\u70b9\u51fb \u5e8f\u53f75 OK\u5373\u53ef\u6253\u5f00\u65b0\u7684\u7ec8\u7aef\u3002"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image-20240523112004746",src:a(29459).Z+"",width:"2091",height:"1444"})}),"\n",(0,t.jsx)(s.p,{children:"\u7b2c\u4e00\u6b21\u767b\u9646\uff0c\u56e0\u4e3a\u6211\u4eec\u5df2\u7ecf\u8bbe\u7f6e\u4e86\u7528\u6237\u540d\uff0c\u4f1a\u5f39\u51fa\u5bf9\u8bdd\u6846\u63d0\u793a\u8f93\u5165\u5bc6\u7801\uff0c\u6211\u4eec\u53ea\u9700\u8981 \u8f93\u5165AvaotaA1 \u5bc6\u7801 avaota \u5373\u53ef\u81ea\u52a8\u767b\u9646\uff0c\u6b64\u65f6Mobaxterm\u4f1a\u63d0\u793a\u4f60\u662f\u5426\u9700\u8981\u4fdd\u5b58\u6b64\u8bbe\u5907\u5bc6\u7801\uff0c\u5982\u679c\u4f60\u4e0d\u60f3\u6bcf\u6b21\u8f93\u5165\u5bc6\u7801\u767b\u9646ssh \u53ef\u4ee5\u70b9\u51fbYes."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image-20240523112117437",src:a(41653).Z+"",width:"853",height:"336"})}),"\n",(0,t.jsx)(s.p,{children:"\u64cd\u4f5c\u5b8c\u6210\u540e\uff0c\u5c31\u53ef\u4ee5\u81ea\u52a8\u8fdb\u5165\u5230 AvaotaA1 \u7ec8\u7aef\u547d\u4ee4\u884c\u754c\u9762\u3002"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image-20240523112103236",src:a(63631).Z+"",width:"2101",height:"1454"})})]})}function o(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},98954:(e,s,a)=>{a.d(s,{Z:()=>t});const t=a.p+"assets/images/image-20240522175502437-2769d6a4418b3a22492962c6f37cf29e.png"},1657:(e,s,a)=>{a.d(s,{Z:()=>t});const t=a.p+"assets/images/image-20240523101906182-3370169721fbc43388841fa182f8dc8b.png"},30882:(e,s,a)=>{a.d(s,{Z:()=>t});const t=a.p+"assets/images/image-20240523102423854-6475eb3d5cdcaa1812be82b7aa196f2f.png"},1099:(e,s,a)=>{a.d(s,{Z:()=>t});const t=a.p+"assets/images/image-20240523103704070-8ee7928a81b5acf9eb5506d80fc791d0.png"},66442:(e,s,a)=>{a.d(s,{Z:()=>t});const t=a.p+"assets/images/image-20240523105930951-112fb38936d6c9aab27f216862081786.png"},43013:(e,s,a)=>{a.d(s,{Z:()=>t});const t=a.p+"assets/images/image-20240523111205300-98674c688cd195130343661198ccd1e1.png"},23057:(e,s,a)=>{a.d(s,{Z:()=>t});const t=a.p+"assets/images/image-20240523111450633-5b6db83be25e3b5cc523f0af5220099e.png"},18351:(e,s,a)=>{a.d(s,{Z:()=>t});const t=a.p+"assets/images/image-20240523111520889-2e499a708c2ae73e8faa6a3523cbf0ae.png"},86428:(e,s,a)=>{a.d(s,{Z:()=>t});const t=a.p+"assets/images/image-20240523111645715-c1935dc5fd4f7b8a812cf1db6bff3a75.png"},29459:(e,s,a)=>{a.d(s,{Z:()=>t});const t=a.p+"assets/images/image-20240523112004746-e2c90dd2c5e9adfdf7f7d7e3d1e12750.png"},63631:(e,s,a)=>{a.d(s,{Z:()=>t});const t=a.p+"assets/images/image-20240523112103236-9177b49c90fbb81813f671eebc2a8730.png"},41653:(e,s,a)=>{a.d(s,{Z:()=>t});const t=a.p+"assets/images/image-20240523112117437-12fb6488a38522eb36b60d23727c744f.png"},11151:(e,s,a)=>{a.d(s,{Z:()=>c,a:()=>l});var t=a(67294);const n={},i=t.createContext(n);function l(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);