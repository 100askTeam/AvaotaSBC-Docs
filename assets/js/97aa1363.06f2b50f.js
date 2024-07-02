"use strict";(self.webpackChunkavaota_docs=self.webpackChunkavaota_docs||[]).push([[8985],{24727:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=r(85893),a=r(11151);const i={},o="OpenCV \u9a71\u52a8 USB \u6444\u50cf\u5934",s={id:"linux-manual/peripheral-driver/usb-cam",title:"OpenCV \u9a71\u52a8 USB \u6444\u50cf\u5934",description:"OpenCV\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u8ba1\u7b97\u673a\u89c6\u89c9\u548c\u673a\u5668\u5b66\u4e60\u8f6f\u4ef6\u5e93\u3002\u5b83\u63d0\u4f9b\u4e86\u8bb8\u591a\u7528\u4e8e\u5904\u7406\u56fe\u50cf\u548c\u5b9e\u73b0\u8ba1\u7b97\u673a\u89c6\u89c9\u4efb\u52a1\u7684\u51fd\u6570\u548c\u5de5\u5177\u3002OpenCV\u6700\u521d\u7531\u82f1\u7279\u5c14\u5f00\u53d1\uff0c\u540e\u6765\u6210\u4e3a\u5f00\u653e\u6e90\u7801\u9879\u76ee\uff0c\u5e76\u5f97\u5230\u4e86\u5e7f\u6cdb\u7684\u5e94\u7528\u3002",source:"@site/docs/linux-manual/peripheral-driver/usb-cam.md",sourceDirName:"linux-manual/peripheral-driver",slug:"/linux-manual/peripheral-driver/usb-cam",permalink:"/linux-manual/peripheral-driver/usb-cam",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"linuxManualSidebar",previous:{title:"SPI NOR",permalink:"/linux-manual/peripheral-driver/spi-nor"},next:{title:"Avaota OS \u5f00\u53d1\u8fdb\u9636",permalink:"/category/avaota-os-\u5f00\u53d1\u8fdb\u9636"}},p={},c=[];function u(e){const n={h1:"h1",p:"p",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"opencv-\u9a71\u52a8-usb-\u6444\u50cf\u5934",children:"OpenCV \u9a71\u52a8 USB \u6444\u50cf\u5934"}),"\n",(0,t.jsx)(n.p,{children:"OpenCV\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u8ba1\u7b97\u673a\u89c6\u89c9\u548c\u673a\u5668\u5b66\u4e60\u8f6f\u4ef6\u5e93\u3002\u5b83\u63d0\u4f9b\u4e86\u8bb8\u591a\u7528\u4e8e\u5904\u7406\u56fe\u50cf\u548c\u5b9e\u73b0\u8ba1\u7b97\u673a\u89c6\u89c9\u4efb\u52a1\u7684\u51fd\u6570\u548c\u5de5\u5177\u3002OpenCV\u6700\u521d\u7531\u82f1\u7279\u5c14\u5f00\u53d1\uff0c\u540e\u6765\u6210\u4e3a\u5f00\u653e\u6e90\u7801\u9879\u76ee\uff0c\u5e76\u5f97\u5230\u4e86\u5e7f\u6cdb\u7684\u5e94\u7528\u3002"}),"\n",(0,t.jsx)(n.p,{children:"OpenCV\u63d0\u4f9b\u4e86\u8bb8\u591a\u7528\u4e8e\u56fe\u50cf\u5904\u7406\u3001\u7279\u5f81\u68c0\u6d4b\u3001\u76ee\u6807\u8bc6\u522b\u3001\u4eba\u8138\u8bc6\u522b\u3001\u8fd0\u52a8\u8ddf\u8e2a\u7b49\u529f\u80fd\u7684\u5e93\u548c\u5de5\u5177\u3002\u5b83\u652f\u6301\u591a\u79cd\u7f16\u7a0b\u8bed\u8a00\uff0c\u5305\u62ecC++\u3001Python\u3001Java\u7b49\uff0c\u56e0\u6b64\u5728\u5404\u79cd\u5e73\u53f0\u548c\u73af\u5883\u4e2d\u90fd\u80fd\u591f\u4f7f\u7528\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u7531\u4e8e\u5176\u5f3a\u5927\u7684\u529f\u80fd\u548c\u5e7f\u6cdb\u7684\u5e94\u7528\u9886\u57df\uff0cOpenCV\u88ab\u5e7f\u6cdb\u5e94\u7528\u4e8e\u8ba1\u7b97\u673a\u89c6\u89c9\u3001\u56fe\u50cf\u5904\u7406\u3001\u533b\u5b66\u56fe\u50cf\u5206\u6790\u3001\u5b89\u5168\u76d1\u63a7\u3001\u673a\u5668\u4eba\u6280\u672f\u3001\u4ea4\u901a\u76d1\u63a7\u7b49\u9886\u57df\u3002\u5982\u679c\u60a8\u5bf9\u56fe\u50cf\u5904\u7406\u3001\u8ba1\u7b97\u673a\u89c6\u89c9\u6216\u673a\u5668\u5b66\u4e60\u611f\u5174\u8da3\uff0c\u90a3\u4e48OpenCV\u5c06\u662f\u4e00\u4e2a\u975e\u5e38\u6709\u7528\u7684\u5de5\u5177\u5e93\u3002"})]})}function l(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>o});var t=r(67294);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);