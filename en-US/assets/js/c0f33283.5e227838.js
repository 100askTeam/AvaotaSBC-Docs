"use strict";(self.webpackChunkavaota_docs=self.webpackChunkavaota_docs||[]).push([[542],{6837:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>t,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=i(85893),l=i(11151);const s={},d="SID - \u552f\u4e00\u7801\u6a21\u5757",c={id:"linux-manual/amp-docs/hal/sid",title:"SID - \u552f\u4e00\u7801\u6a21\u5757",description:"\u6a21\u5757\u4ecb\u7ecd",source:"@site/docs/linux-manual/amp-docs/hal/sid.md",sourceDirName:"linux-manual/amp-docs/hal",slug:"/linux-manual/amp-docs/hal/sid",permalink:"/en-US/linux-manual/amp-docs/hal/sid",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"linuxManualSidebar",previous:{title:"RTC - \u5b9e\u65f6\u65f6\u949f",permalink:"/en-US/linux-manual/amp-docs/hal/rtc"},next:{title:"SCR - \u667a\u80fd\u5361\u8bfb\u53d6\u5668",permalink:"/en-US/linux-manual/amp-docs/hal/smartcard"}},h={},a=[{value:"\u6a21\u5757\u4ecb\u7ecd",id:"\u6a21\u5757\u4ecb\u7ecd",level:2},{value:"\u6a21\u5757\u914d\u7f6e",id:"\u6a21\u5757\u914d\u7f6e",level:2},{value:"\u6e90\u7801\u7ed3\u6784",id:"\u6e90\u7801\u7ed3\u6784",level:2},{value:"\u6a21\u5757\u63a5\u53e3\u8bf4\u660e",id:"\u6a21\u5757\u63a5\u53e3\u8bf4\u660e",level:2},{value:"efuse \u5199\u63a5\u53e3",id:"efuse-\u5199\u63a5\u53e3",level:3},{value:"efuse \u8bfb\u63a5\u53e3",id:"efuse-\u8bfb\u63a5\u53e3",level:3},{value:"efuse \u8bfb\u6269\u5c55\u63a5\u53e3",id:"efuse-\u8bfb\u6269\u5c55\u63a5\u53e3",level:3},{value:"\u5f00\u542f secure enable bit \u63a5\u53e3",id:"\u5f00\u542f-secure-enable-bit-\u63a5\u53e3",level:3},{value:"\u8bfb\u53d6 secure enable bit \u72b6\u6001\u63a5\u53e3",id:"\u8bfb\u53d6-secure-enable-bit-\u72b6\u6001\u63a5\u53e3",level:3},{value:"\u8bfb\u53d6 chipid \u63a5\u53e3",id:"\u8bfb\u53d6-chipid-\u63a5\u53e3",level:3},{value:"\u8bfb\u53d6 thermal \u6821\u51c6\u503c\u63a5\u53e3",id:"\u8bfb\u53d6-thermal-\u6821\u51c6\u503c\u63a5\u53e3",level:3},{value:"\u8bfb\u53d6\u82af\u7247\u7248\u672c\u63a5\u53e3",id:"\u8bfb\u53d6\u82af\u7247\u7248\u672c\u63a5\u53e3",level:3},{value:"\u8bfb\u53d6 efuse sram \u63a5\u53e3",id:"\u8bfb\u53d6-efuse-sram-\u63a5\u53e3",level:3},{value:"\u6a21\u5757\u4f7f\u7528\u8303\u4f8b",id:"\u6a21\u5757\u4f7f\u7528\u8303\u4f8b",level:2}];function u(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"sid---\u552f\u4e00\u7801\u6a21\u5757",children:"SID - \u552f\u4e00\u7801\u6a21\u5757"}),"\n",(0,r.jsx)(n.h2,{id:"\u6a21\u5757\u4ecb\u7ecd",children:"\u6a21\u5757\u4ecb\u7ecd"}),"\n",(0,r.jsx)(n.p,{children:"SID \u6a21\u5757\u4e3b\u8981\u7528\u4e8e\u70e7\u5199 SoC \u7684 efuse\u3002efuse \u5305\u62ec ChipID\u3001HASH \u7801\u7b49\u76f8\u5173\u4fe1\u606f\u3002\u8be5\u6a21\u5757\u7279\u70b9\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"efuse \u4e00\u6839\u7194\u4e1d\u53ea\u80fd\u88ab\u7f16\u7a0b\u4e00\u6b21\uff0c\u5e76\u4e14\u5177\u6709\u4e00\u6b21\u53ef\u7f16\u7a0b\u5b58\u50a8\u5668\u7684\u7279\u70b9\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5305\u542b SID_SRAM\uff0cSID_SRAM \u5728\u6bcf\u6b21\u82af\u7247\u4e0a\u7535\u65f6\u4f1a\u5907\u4efd efuse \u4fe1\u606f\u3002"}),"\n",(0,r.jsx)(n.li,{children:"SID \u6a21\u5757\u5bc4\u5b58\u5668\u662f\u975e\u5b89\u5168\u7684\uff1befuse \u6709\u5b89\u5168\u975e\u5b89\u5168\u533a\u5206\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u63d0\u4f9b\u82af\u7247\u552f\u4e00ID ChipID\uff0c\u51fa\u5382\u524d\u4f1a\u70e7\u5f55\u597d"}),"\n",(0,r.jsx)(n.li,{children:"\uff08secure enable bit \uff09\u4f5c\u4e3a efuse \u4e2d\u5b89\u5168\u5f00\u542f\u5f00\u5173\uff0c\u4f7f\u80fd\u540e\uff0c\u82af\u7247\u4f1a\u53d8\u6210\u5b89\u5168\u82af\u7247"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6a21\u5757\u914d\u7f6e",children:"\u6a21\u5757\u914d\u7f6e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Kernel Setup ---\x3e\r\n    Drivers Setup ---\x3e\r\n        SoC HAL Drivers ---\x3e\r\n            SID devices ---\x3e\r\n                [*] enable efuse driver\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6e90\u7801\u7ed3\u6784",children:"\u6e90\u7801\u7ed3\u6784"}),"\n",(0,r.jsxs)(n.p,{children:["SID \u9a71\u52a8\u4f4d\u4e8e ",(0,r.jsx)(n.code,{children:"hal/source/efuse/"})," \u76ee\u5f55\u4e0b\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"hal\r\n\u251c\u2500\u2500 source\r\n\u2502\xa0\xa0 \u251c\u2500\u2500 efuse\r\n\u2502 \u2502 \u251c\u2500\u2500 efuse.c # SID\u5e95\u5c42\u9a71\u52a8\u6587\u4ef6\r\n\u2502 \u2502 \u251c\u2500\u2500 efuse.h # SID\u5e95\u5c42\u9a71\u52a8\u5934\u6587\u4ef6\r\n\u2502 \u2502 \u251c\u2500\u2500 hal_efuse.c # SID\u516c\u7528\u64cd\u4f5c\u63a5\u53e3\u51fd\u6570\u6587\u4ef6\r\n\u2502 \u2502 \u251c\u2500\u2500 Kconfig\r\n\u2502 \u2502 \u251c\u2500\u2500 Makefile\r\n\u2502 \u2502 \u251c\u2500\u2500 platform\r\n\u2502 \u2502 \u2502\xa0\xa0 \u251c\u2500\u2500 efuse_sun20iw2.h # \u5177\u4f53\u7684\u5e73\u53f0\u914d\u7f6e\u5934\u6587\u4ef6\r\n\u2502 \u2502 \u2514\u2500\u2500 platform_efuse.h # \u5e73\u53f0\u914d\u7f6e\u5934\u6587\u4ef6\r\n\u2514\u2500\u2500 include\r\n    \u2514\u2500\u2500 hal\r\n        \u2514\u2500\u2500 sunxi_hal_efuse.h # SID\u516c\u7528\u64cd\u4f5c\u63a5\u53e3\u51fd\u6570\u5934\u6587\u4ef6\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6a21\u5757\u63a5\u53e3\u8bf4\u660e",children:"\u6a21\u5757\u63a5\u53e3\u8bf4\u660e"}),"\n",(0,r.jsx)(n.p,{children:"\u5934\u6587\u4ef6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"#include <sunxi_hal_efuse.h>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"efuse-\u5199\u63a5\u53e3",children:"efuse \u5199\u63a5\u53e3"}),"\n",(0,r.jsx)(n.p,{children:"\u5c06\u6307\u5b9a\u540d\u5b57\u7684\u6570\u636e\u5199\u5165 efuse"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"int hal_efuse_write(char key_name, unsigned char key_data, size_t key_bit_len)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"key_name: efuse \u533a\u57df\u540d\u5b57"}),"\n",(0,r.jsx)(n.li,{children:"key_data: \u5f85\u5199\u5165\u6570\u636e"}),"\n",(0,r.jsx)(n.li,{children:"key_bit_len: \u5f85\u5199\u5165\u6570\u636e bit \u6570"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"0\uff1a\u6210\u529f"}),"\n",(0,r.jsx)(n.li,{children:"\u8d1f\u6570\uff1a\u5931\u8d25"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"efuse-\u8bfb\u63a5\u53e3",children:"efuse \u8bfb\u63a5\u53e3"}),"\n",(0,r.jsx)(n.p,{children:"\u8bfb efuse \u4e2d\u6307\u5b9a\u540d\u5b57\u533a\u57df\u7684\u6570\u636e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"int hal_efuse_read(char key_name, unsigned char key_data, size_t key_bit_len)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"key_name: efuse \u533a\u57df\u540d\u5b57"}),"\n",(0,r.jsx)(n.li,{children:"key_data: \u5f85\u8bfb\u53d6\u6570\u636e"}),"\n",(0,r.jsx)(n.li,{children:"key_bit_len: \u5f85\u8bfb\u53d6\u6570\u636e bit \u6570"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"0\uff1a\u6210\u529f"}),"\n",(0,r.jsx)(n.li,{children:"\u8d1f\u6570\uff1a\u5931\u8d25"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"efuse-\u8bfb\u6269\u5c55\u63a5\u53e3",children:"efuse \u8bfb\u6269\u5c55\u63a5\u53e3"}),"\n",(0,r.jsx)(n.p,{children:"\u8bfb efuse \u4e2d\u6307\u5b9a\u540d\u5b57\u533a\u57df\u7684\u6570\u636e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"int hal_efuse_read_ext(uint32_t start_bit, uint32_t bit_num, uint8_t *data)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"start_bit: efuse \u533a\u57df\u540d\u5b57"}),"\n",(0,r.jsx)(n.li,{children:"bit_num: \u5f85\u8bfb\u53d6\u6570\u636e"}),"\n",(0,r.jsx)(n.li,{children:"data: \u5b58\u653e\u5f85\u8bfb\u53d6\u6570\u636e"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"0\uff1a\u6210\u529f"}),"\n",(0,r.jsx)(n.li,{children:"\u8d1f\u6570\uff1a\u5931\u8d25"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5f00\u542f-secure-enable-bit-\u63a5\u53e3",children:"\u5f00\u542f secure enable bit \u63a5\u53e3"}),"\n",(0,r.jsx)(n.p,{children:"\u5f00\u542f secure enable bit"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"int hal_efuse_set_security_mode(void)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u65e0"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"0\uff1a\u6210\u529f"}),"\n",(0,r.jsx)(n.li,{children:"\u8d1f\u6570\uff1a\u5931\u8d25"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5f00\u542f ",(0,r.jsx)(n.strong,{children:"efuse"})," \u4e2d ",(0,r.jsx)(n.strong,{children:"secure enable bit"})," \u4e4b\u540e\uff0c\u82af\u7247\u4f1a\u53d8\u6210\u5b89\u5168\u82af\u7247\uff0c\u6b64\u8fc7\u7a0b\u4e0d\u53ef\u9006\uff0c\u5f00\u542f\u65f6\u8bf7\u989d\u5916\u6ce8\u610f\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u8bfb\u53d6-secure-enable-bit-\u72b6\u6001\u63a5\u53e3",children:"\u8bfb\u53d6 secure enable bit \u72b6\u6001\u63a5\u53e3"}),"\n",(0,r.jsx)(n.p,{children:"\u8bfb\u53d6 secure enable bit \u72b6\u6001"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"int hal_efuse_get_security_mode(void)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u65e0"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"0\uff1a\u6ca1\u6709\u70e7\u5199"}),"\n",(0,r.jsx)(n.li,{children:"1\uff1a\u70e7\u5199\u4e86"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u8bfb\u53d6-chipid-\u63a5\u53e3",children:"\u8bfb\u53d6 chipid \u63a5\u53e3"}),"\n",(0,r.jsx)(n.p,{children:"\u8bfb\u53d6 efuse \u4e2d chipid"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"int hal_efuse_get_chipid(unsigned char *buffer)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"buffer: \u7528\u4e8e\u5b58\u653e chipid \u6570\u636e\u7684\u6307\u9488"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"0\uff1a\u6210\u529f"}),"\n",(0,r.jsx)(n.li,{children:"\u8d1f\u6570\uff1a\u5931\u8d25"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u8bfb\u53d6-thermal-\u6821\u51c6\u503c\u63a5\u53e3",children:"\u8bfb\u53d6 thermal \u6821\u51c6\u503c\u63a5\u53e3"}),"\n",(0,r.jsx)(n.p,{children:"\u8bfb\u53d6 thermal sensor \u6821\u51c6\u503c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"int hal_efuse_get_thermal_cdata(unsigned char *buffer)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"buffer: \u5b58\u653e\u8bfb\u53d6\u7684\u6570\u636e\u7684\u6307\u9488"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"0\uff1a\u6210\u529f"}),"\n",(0,r.jsx)(n.li,{children:"\u8d1f\u6570\uff1a\u5931\u8d25"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u8bfb\u53d6\u82af\u7247\u7248\u672c\u63a5\u53e3",children:"\u8bfb\u53d6\u82af\u7247\u7248\u672c\u63a5\u53e3"}),"\n",(0,r.jsx)(n.p,{children:"\u8bfb\u53d6\u82af\u7247\u7248\u672c\u4fe1\u606f"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"int hal_efuse_get_chip_ver(void)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u65e0"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6b63\u6570\uff1a\u82af\u7247\u7248\u672c\u53f7"}),"\n",(0,r.jsx)(n.li,{children:"\u8d1f\u6570\uff1a\u5931\u8d25"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u8bfb\u53d6-efuse-sram-\u63a5\u53e3",children:"\u8bfb\u53d6 efuse sram \u63a5\u53e3"}),"\n",(0,r.jsx)(n.p,{children:"\u8bfb\u53d6 efuse sram \u4e2d\u6570\u636e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"int hal_get_module_param_from_sid(uint32_t *dst, uint32_t offset, uint32_t len)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"dst: \u5b58\u653e\u8bfb\u53d6\u7684\u6570\u636e"}),"\n",(0,r.jsx)(n.li,{children:"offset: \u8bfb\u53d6\u7684\u504f\u79fb"}),"\n",(0,r.jsx)(n.li,{children:"len: \u8bfb\u53d6\u957f\u5ea6\uff08\u5b57\u8282\uff09"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"0\uff1a\u6210\u529f"}),"\n",(0,r.jsx)(n.li,{children:"\u8d1f\u6570\uff1a\u5931\u8d25"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6a21\u5757\u4f7f\u7528\u8303\u4f8b",children:"\u6a21\u5757\u4f7f\u7528\u8303\u4f8b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'#include <stdio.h>\r\n#include <stdlib.h>\r\n#include <string.h>\r\n\r\n#include <hal_cmd.h>\r\n#include <sunxi_hal_efuse.h>\r\n\r\n#undef  HEXDUMP_LINE_CHR_CNT\r\n#define HEXDUMP_LINE_CHR_CNT 16\r\n\r\nstatic int sunxi_hexdump(const unsigned char *buf, int bytes)\r\n{\r\n    unsigned char line[HEXDUMP_LINE_CHR_CNT] = {0};\r\n    int addr;\r\n\r\n    for (addr = 0; addr < bytes; addr += HEXDUMP_LINE_CHR_CNT)\r\n    {\r\n        int len = ((bytes-addr)<HEXDUMP_LINE_CHR_CNT ? (bytes-addr) : HEXDUMP_LINE_CHR_CNT);\r\n\tint i;\r\n\r\n        memcpy(line, buf + addr, len);\r\n        memset(line + len, 0, HEXDUMP_LINE_CHR_CNT - len);\r\n\r\n        /* print addr */\r\n        printf("0x%.8X: ", addr);\r\n        /* print hex */\r\n        for (i = 0; i < HEXDUMP_LINE_CHR_CNT; i++)\r\n        {\r\n            if (i < len)\r\n            {\r\n                printf("%.2X ", line[i]);\r\n            }\r\n            else { printf("   "); }\r\n        }\r\n        /* print char */\r\n        printf("|");\r\n        for (i = 0; i < HEXDUMP_LINE_CHR_CNT; i++)\r\n        {\r\n            if (i < len)\r\n            {\r\n                if (line[i] >= 0x20 && line[i] <= 0x7E)\r\n                {\r\n                    printf("%c", line[i]);\r\n                }\r\n                else\r\n                {\r\n                    printf(".");\r\n                }\r\n            }\r\n            else\r\n            {\r\n                printf(" ");\r\n            }\r\n        }\r\n        printf("|\\n");\r\n    }\r\n    return 0;\r\n}\r\n\r\nint cmd_test_efuse(int argc, char **argv)\r\n{\r\n\tchar buffer[32] = {0};\r\n\r\n\thal_efuse_get_chipid(buffer);\r\n\tsunxi_hexdump(buffer, sizeof(buffer));\r\n\r\n\tprintf("===================================\\n");\r\n\tprintf("Test Finished.\\n");\r\n\r\n\treturn 0;\r\n}\r\n\r\nFINSH_FUNCTION_EXPORT_CMD(cmd_test_efuse, hal_efuse, efuse hal APIs tests)\n'})})]})}function t(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>d});var r=i(67294);const l={},s=r.createContext(l);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);