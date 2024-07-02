"use strict";(self.webpackChunkavaota_docs=self.webpackChunkavaota_docs||[]).push([[2456],{41371:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(85893),u=r(11151);const s={},a="\u66f4\u6362\u8f6f\u4ef6\u6e90",i={id:"linux-manual/avaotaos/apt-source",title:"\u66f4\u6362\u8f6f\u4ef6\u6e90",description:"AcaotaOS \u9ed8\u8ba4\u4f7f\u7528\u7684\u662f\u539f\u7248 Ubuntu \u8f6f\u4ef6\u6e90\uff0c\u53ef\u4ee5\u5c06\u5176\u914d\u7f6e\u4e3a\u56fd\u5185\u8f6f\u4ef6\u6e90\u52a0\u5feb\u4e0b\u8f7d\u901f\u5ea6\u3002",source:"@site/docs/linux-manual/avaotaos/07-apt-source.md",sourceDirName:"linux-manual/avaotaos",slug:"/linux-manual/avaotaos/apt-source",permalink:"/linux-manual/avaotaos/apt-source",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"linuxManualSidebar",previous:{title:"\u8fde\u63a5 WIFI",permalink:"/linux-manual/avaotaos/wifi"},next:{title:"\u8f6f\u4ef6\u5305\u7ba1\u7406",permalink:"/linux-manual/avaotaos/avaota-dpkg"}},o={},c=[{value:"Ubuntu 22.04",id:"ubuntu-2204",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,u.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"\u66f4\u6362\u8f6f\u4ef6\u6e90",children:"\u66f4\u6362\u8f6f\u4ef6\u6e90"}),"\n",(0,n.jsx)(t.p,{children:"AcaotaOS \u9ed8\u8ba4\u4f7f\u7528\u7684\u662f\u539f\u7248 Ubuntu \u8f6f\u4ef6\u6e90\uff0c\u53ef\u4ee5\u5c06\u5176\u914d\u7f6e\u4e3a\u56fd\u5185\u8f6f\u4ef6\u6e90\u52a0\u5feb\u4e0b\u8f7d\u901f\u5ea6\u3002"}),"\n",(0,n.jsxs)(t.p,{children:["\u5728 Ubuntu 24.04 \u4e4b\u524d\uff0cUbuntu \u7684\u8f6f\u4ef6\u6e90\u914d\u7f6e\u6587\u4ef6\u4f7f\u7528\u4f20\u7edf\u7684 One-Line-Style\uff0c\u8def\u5f84\u4e3a ",(0,n.jsx)(t.code,{children:"/etc/apt/sources.list"}),"\uff1b\u4ece Ubuntu 24.04 \u5f00\u59cb\uff0cUbuntu \u7684\u8f6f\u4ef6\u6e90\u914d\u7f6e\u6587\u4ef6\u53d8\u66f4\u4e3a DEB822 \u683c\u5f0f\uff0c\u8def\u5f84\u4e3a ",(0,n.jsx)(t.code,{children:"/etc/apt/sources.list.d/ubuntu.sources"}),"\u3002"]}),"\n",(0,n.jsx)(t.h2,{id:"ubuntu-2204",children:"Ubuntu 22.04"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"sudo nano /etc/apt/source.list\n"})}),"\n",(0,n.jsx)(t.p,{children:"\u4fee\u6539\u5982\u4e0b\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"# \u9ed8\u8ba4\u6ce8\u91ca\u4e86\u6e90\u7801\u955c\u50cf\u4ee5\u63d0\u9ad8 apt update \u901f\u5ea6\uff0c\u5982\u6709\u9700\u8981\u53ef\u81ea\u884c\u53d6\u6d88\u6ce8\u91ca\r\ndeb http://mirrors.bfsu.edu.cn/ubuntu-ports/ jammy main restricted universe multiverse\r\n# deb-src http://mirrors.bfsu.edu.cn/ubuntu-ports/ jammy main restricted universe multiverse\r\ndeb http://mirrors.bfsu.edu.cn/ubuntu-ports/ jammy-updates main restricted universe multiverse\r\n# deb-src http://mirrors.bfsu.edu.cn/ubuntu-ports/ jammy-updates main restricted universe multiverse\r\ndeb http://mirrors.bfsu.edu.cn/ubuntu-ports/ jammy-backports main restricted universe multiverse\r\n# deb-src http://mirrors.bfsu.edu.cn/ubuntu-ports/ jammy-backports main restricted universe multiverse\r\n\r\n# \u4ee5\u4e0b\u5b89\u5168\u66f4\u65b0\u8f6f\u4ef6\u6e90\u5305\u542b\u4e86\u5b98\u65b9\u6e90\u4e0e\u955c\u50cf\u7ad9\u914d\u7f6e\uff0c\u5982\u6709\u9700\u8981\u53ef\u81ea\u884c\u4fee\u6539\u6ce8\u91ca\u5207\u6362\r\ndeb http://ports.ubuntu.com/ubuntu-ports/ jammy-security main restricted universe multiverse\r\n# deb-src http://ports.ubuntu.com/ubuntu-ports/ jammy-security main restricted universe multiverse\r\n\r\n# \u9884\u53d1\u5e03\u8f6f\u4ef6\u6e90\uff0c\u4e0d\u5efa\u8bae\u542f\u7528\r\n# deb http://mirrors.bfsu.edu.cn/ubuntu-ports/ jammy-proposed main restricted universe multiverse\r\n# # deb-src http://mirrors.bfsu.edu.cn/ubuntu-ports/ jammy-proposed main restricted universe multiverse\n"})})]})}function m(e={}){const{wrapper:t}={...(0,u.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>a});var n=r(67294);const u={},s=n.createContext(u);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(u):e.components||u:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);