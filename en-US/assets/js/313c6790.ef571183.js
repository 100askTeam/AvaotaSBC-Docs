"use strict";(self.webpackChunkavaota_docs=self.webpackChunkavaota_docs||[]).push([[19],{29029:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>s,metadata:()=>h,toc:()=>t});var i=l(85893),c=l(11151);const s={},r="HW Spinlock - \u786c\u4ef6\u540c\u6b65\u9501",h={id:"linux-manual/amp-docs/hal/spin",title:"HW Spinlock - \u786c\u4ef6\u540c\u6b65\u9501",description:"\u6a21\u5757\u4ecb\u7ecd",source:"@site/docs/linux-manual/amp-docs/hal/spin.md",sourceDirName:"linux-manual/amp-docs/hal",slug:"/linux-manual/amp-docs/hal/spin",permalink:"/en-US/linux-manual/amp-docs/hal/spin",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"linuxManualSidebar",previous:{title:"SPI - \u540c\u6b65\u4e32\u884c\u63a5\u53e3",permalink:"/en-US/linux-manual/amp-docs/hal/spi"},next:{title:"TWI - \u53cc\u603b\u7ebf\u534f\u8bae",permalink:"/en-US/linux-manual/amp-docs/hal/twi"}},d={},t=[{value:"\u6a21\u5757\u4ecb\u7ecd",id:"\u6a21\u5757\u4ecb\u7ecd",level:2},{value:"\u6e90\u7801\u7ed3\u6784",id:"\u6e90\u7801\u7ed3\u6784",level:2},{value:"\u6a21\u5757\u914d\u7f6e",id:"\u6a21\u5757\u914d\u7f6e",level:2},{value:"\u6a21\u5757\u63a5\u53e3\u8bf4\u660e",id:"\u6a21\u5757\u63a5\u53e3\u8bf4\u660e",level:2},{value:"\u83b7\u53d6\u9501",id:"\u83b7\u53d6\u9501",level:3},{value:"\u89e3\u9501",id:"\u89e3\u9501",level:3},{value:"\u68c0\u67e5\u9501\u662f\u5426\u5728\u4f7f\u7528\u4e2d",id:"\u68c0\u67e5\u9501\u662f\u5426\u5728\u4f7f\u7528\u4e2d",level:3},{value:"\u6a21\u5757\u4f7f\u7528\u8303\u4f8b",id:"\u6a21\u5757\u4f7f\u7528\u8303\u4f8b",level:2}];function o(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"hw-spinlock---\u786c\u4ef6\u540c\u6b65\u9501",children:"HW Spinlock - \u786c\u4ef6\u540c\u6b65\u9501"}),"\n",(0,i.jsx)(e.h2,{id:"\u6a21\u5757\u4ecb\u7ecd",children:"\u6a21\u5757\u4ecb\u7ecd"}),"\n",(0,i.jsx)(e.p,{children:"hwspinlock \u63d0\u4f9b\u4e00\u79cd\u786c\u4ef6\u540c\u6b65\u673a\u5236\uff0clock \u64cd\u4f5c\u53ef\u4ee5\u9632\u6b62\u591a\u5904\u7406\u5668\u540c\u65f6\u5904\u7406\u5171\u4eab\u6570\u636e\u3002\u4fdd\u8bc1\u6570\u636e\u7684\u4e00\u81f4\u6027\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u6e90\u7801\u7ed3\u6784",children:"\u6e90\u7801\u7ed3\u6784"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"\u251c\u2500\u2500 hal_hwspinlock.c\r\n\u251c\u2500\u2500 hwspinlock.h\r\n\u251c\u2500\u2500 Kconfig\r\n\u251c\u2500\u2500 Makefile\r\n\u251c\u2500\u2500 platform\r\n\u2502\xa0\xa0 \u251c\u2500\u2500 hwspinlock-sun20iw2.h \r\n\u2514\u2500\u2500 platform-hwspinlock.h\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u6a21\u5757\u914d\u7f6e",children:"\u6a21\u5757\u914d\u7f6e"}),"\n",(0,i.jsx)(e.p,{children:"\u914d\u7f6e\u8def\u5f84\u5982\u4e0b:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"There is no help available for this option. Symbol: DRIVERS_HWSPINLOCK [=y]\r\nType : boolean\r\nPrompt: enable hwspinlock driver\r\nLocation:\r\n\t-> Drivers options\r\n\t\t-> Supported drivers\r\n\t\t\t-> HW SPINLOCK Devices\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u6a21\u5757\u63a5\u53e3\u8bf4\u660e",children:"\u6a21\u5757\u63a5\u53e3\u8bf4\u660e"}),"\n",(0,i.jsx)(e.p,{children:"\u5934\u6587\u4ef6\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:"#include <hal_hwspinlock.h>\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u83b7\u53d6\u9501",children:"\u83b7\u53d6\u9501"}),"\n",(0,i.jsx)(e.p,{children:"\u51fd\u6570\u539f\u578b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"int hal_hwspinlock_get(int num)\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"num"}),"\uff1a",(0,i.jsx)(e.code,{children:"0~31"}),"\uff0chwspinlock \u9501\u7684\u5e8f\u53f7"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"HWSPINLOCK_OK"}),"\uff1a\u4e0a\u9501\u5b8c\u6210"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"HWSPINLOCK_EXCEED_MAX"}),"\uff1a\u9501\u5df2\u8fbe\u6700\u5927\u503c\uff0c\u83b7\u53d6\u5931\u8d25"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"HWSPINLOCK_ERR"}),"\uff1a\u4e0a\u9501\u5931\u8d25"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u89e3\u9501",children:"\u89e3\u9501"}),"\n",(0,i.jsx)(e.p,{children:"\u51fd\u6570\u539f\u578b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"int hal_hwspinlock_put(int num)\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"num"}),"\uff1a",(0,i.jsx)(e.code,{children:"0~31"}),"\uff0chwspinlock \u9501\u7684\u5e8f\u53f7"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"HWSPINLOCK_OK"}),"\uff1a\u4e0a\u9501\u5b8c\u6210"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"HWSPINLOCK_EXCEED_MAX"}),"\uff1a\u9501\u5df2\u8fbe\u6700\u5927\u503c\uff0c\u83b7\u53d6\u5931\u8d25"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u68c0\u67e5\u9501\u662f\u5426\u5728\u4f7f\u7528\u4e2d",children:"\u68c0\u67e5\u9501\u662f\u5426\u5728\u4f7f\u7528\u4e2d"}),"\n",(0,i.jsx)(e.p,{children:"\u51fd\u6570\u539f\u578b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"int hal_hwspinlock_check_taken(int num)\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"num"}),"\uff1a",(0,i.jsx)(e.code,{children:"0~31"}),"\uff0chwspinlock \u9501\u7684\u5e8f\u53f7"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u8fd4\u56de\u503c"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"1\uff1a\u4f7f\u7528\u4e2d"}),"\n",(0,i.jsx)(e.li,{children:"0\uff1a\u672a\u88ab\u4f7f\u7528"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u6a21\u5757\u4f7f\u7528\u8303\u4f8b",children:"\u6a21\u5757\u4f7f\u7528\u8303\u4f8b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:"#include <stdio.h>\r\n#include <stdlib.h>\r\n#include <stdint.h>\r\n#include <string.h>\r\n#include <unistd.h>\r\n#include <hal_log.h>\r\n#include <hal_cmd.h>\r\n#include <hal_hwspinlock.h>\r\n\r\nstatic int cmd_test_hwspinlock_get(int argc, char **argv)\r\n{\r\n\thal_hwspinlock_get(0);\r\n\treturn 0;\r\n}\r\n\r\nstatic int cmd_test_hwspinlock_put(int argc, char **argv)\r\n{\r\n    hal_hwspinlock_put(0);\r\n    return 0;\r\n}\r\n\r\nFINSH_FUNCTION_EXPORT_CMD(cmd_test_hwspinlock_get, hal_hwspinlock_get, test_hwspinlock)\r\nFINSH_FUNCTION_EXPORT_CMD(cmd_test_hwspinlock_put, hal_hwspinlock_put, test_hwspinlock)\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5728 FreeRTOS \u63a7\u5236\u53f0\u8f93\u5165 ",(0,i.jsx)(e.code,{children:"hal_hwspinlock_get"})," \u547d\u4ee4\u4f1a\u4e0a\u9501\uff0c\u8f93\u5165 ",(0,i.jsx)(e.code,{children:"hal_hwspinlock_put"})," \u547d\u4ee4\u4f1a\u89e3\u9501\u3002"]})]})}function a(n={}){const{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},11151:(n,e,l)=>{l.d(e,{Z:()=>h,a:()=>r});var i=l(67294);const c={},s=i.createContext(c);function r(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function h(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);