"use strict";(self.webpackChunkavaota_docs=self.webpackChunkavaota_docs||[]).push([[1677],{35860:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>_});var i=e(85893),t=e(11151);const l={},s="TWI - \u53cc\u603b\u7ebf\u534f\u8bae",d={id:"linux-manual/amp-docs/hal/twi",title:"TWI - \u53cc\u603b\u7ebf\u534f\u8bae",description:"\u6a21\u5757\u4ecb\u7ecd",source:"@site/docs/linux-manual/amp-docs/hal/twi.md",sourceDirName:"linux-manual/amp-docs/hal",slug:"/linux-manual/amp-docs/hal/twi",permalink:"/linux-manual/amp-docs/hal/twi",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"linuxManualSidebar",previous:{title:"HW Spinlock - \u786c\u4ef6\u540c\u6b65\u9501",permalink:"/linux-manual/amp-docs/hal/spin"},next:{title:"UART - \u901a\u7528\u5f02\u6b65\u6536\u53d1\u4f20\u8f93\u5668",permalink:"/linux-manual/amp-docs/hal/uart"}},a={},_=[{value:"\u6a21\u5757\u4ecb\u7ecd",id:"\u6a21\u5757\u4ecb\u7ecd",level:2},{value:"\u6a21\u5757\u914d\u7f6e",id:"\u6a21\u5757\u914d\u7f6e",level:2},{value:"\u6e90\u7801\u7ed3\u6784",id:"\u6e90\u7801\u7ed3\u6784",level:2},{value:"\u6a21\u5757\u63a5\u53e3\u8bf4\u660e",id:"\u6a21\u5757\u63a5\u53e3\u8bf4\u660e",level:2},{value:"TWI \u7aef\u53e3\u53f7 twi_port_t",id:"twi-\u7aef\u53e3\u53f7-twi_port_t",level:3},{value:"TWI \u6d88\u606f\u7ed3\u6784\u4f53 twi_msg_t",id:"twi-\u6d88\u606f\u7ed3\u6784\u4f53-twi_msg_t",level:3},{value:"TWI \u63a7\u5236\u7ed3\u6784\u4f53 hal_twi_transfer_cmd_t",id:"twi-\u63a7\u5236\u7ed3\u6784\u4f53-hal_twi_transfer_cmd_t",level:3},{value:"TWI \u9891\u7387\u7ed3\u6784\u4f53 twi_frequency_t",id:"twi-\u9891\u7387\u7ed3\u6784\u4f53-twi_frequency_t",level:3},{value:"TWi \u8fd4\u56de\u503c\u7ed3\u6784\u4f53",id:"twi-\u8fd4\u56de\u503c\u7ed3\u6784\u4f53",level:3},{value:"TWI \u521d\u59cb\u5316\u63a5\u53e3",id:"twi-\u521d\u59cb\u5316\u63a5\u53e3",level:3},{value:"TWI \u63a7\u5236\u63a5\u53e3",id:"twi-\u63a7\u5236\u63a5\u53e3",level:3},{value:"TWI \u6570\u636e\u53d1\u9001\u63a5\u53e3",id:"twi-\u6570\u636e\u53d1\u9001\u63a5\u53e3",level:3},{value:"TWI \u6570\u636e\u63a5\u6536\u63a5\u53e3",id:"twi-\u6570\u636e\u63a5\u6536\u63a5\u53e3",level:3},{value:"TWI \u53bb\u521d\u59cb\u5316\u63a5\u53e3",id:"twi-\u53bb\u521d\u59cb\u5316\u63a5\u53e3",level:3},{value:"\u6a21\u5757\u4f7f\u7528\u8303\u4f8b",id:"\u6a21\u5757\u4f7f\u7528\u8303\u4f8b",level:2}];function c(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"twi---\u53cc\u603b\u7ebf\u534f\u8bae",children:"TWI - \u53cc\u603b\u7ebf\u534f\u8bae"}),"\n",(0,i.jsx)(r.h2,{id:"\u6a21\u5757\u4ecb\u7ecd",children:"\u6a21\u5757\u4ecb\u7ecd"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"image-20230426142532644",src:e(46534).Z+"",width:"554",height:"233"})}),"\n",(0,i.jsx)(r.p,{children:"TWI \u63a7\u5236\u5668\u7684\u6846\u56fe\u5982\u4e0a\u6240\u793a\uff0c\u8be5\u63a7\u5236\u5668\u652f\u6301\u7684\u6807\u51c6\u901a\u4fe1\u901f\u7387\u4e3a 100Kbps\uff0c\u6700\u9ad8\u901a\u4fe1\u901f\u7387\u53ef\u4ee5\u8fbe\u5230 400Kbps\u3002\u5176\u4e2d CPUX \u57df\u7684 TWI \u63a7\u5236\u5668\u65f6\u949f\u6e90\u6765\u81ea\u4e8e APB2\uff0cCPUS \u57df\u7684 S\u2011TWI \u65f6\u949f\u6e90\u6765\u81ea\u4e8eAPBS\u3002"}),"\n",(0,i.jsx)(r.p,{children:"TWI \u4f20\u8f93\u6570\u636e\u7684\u65b9\u5f0f\u5305\u62ec\u5305\u4f20\u8f93\u548c DMA \u8fd0\u8f93\u3002"}),"\n",(0,i.jsx)(r.h2,{id:"\u6a21\u5757\u914d\u7f6e",children:"\u6a21\u5757\u914d\u7f6e"}),"\n",(0,i.jsxs)(r.p,{children:["\u6a21\u5757\u914d\u7f6e\u5728 ",(0,i.jsx)(r.code,{children:"menuconfig"})," \u4f4d\u4e8e\u5982\u4e0b\u4f4d\u7f6e"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:"Kernel Setup ---\x3e\r\n    Drivers Setup ---\x3e\r\n        SoC HAL Drivers ---\x3e\r\n            TWI devices ---\x3e\r\n                [*] enable twi driver\n"})}),"\n",(0,i.jsxs)(r.p,{children:["TWI \u6a21\u5757\u5bc4\u5b58\u5668\u7684\u57fa\u672c\u914d\u7f6e\u4f4d\u4e8e ",(0,i.jsx)(r.code,{children:"common_twi.h"})," \u6587\u4ef6\u91cc\u9762\uff0c\u5305\u62ec\u6bcf\u4e2a TWI \u7684\u5bc4\u5b58\u5668\u5730\u5740\u548c\u4e2d\u65ad\u53f7\uff0c\u90e8\u5206\u914d\u7f6e\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:"/* TWI Register Offset */\r\n#define TWI_ADDR_REG        (0x00)  /*  31:8bit reserved,7-1bit for slave addr,0 bit for GCE */\r\n#define TWI_XADDR_REG       (0x04)  /*  31:8bit reserved,7-0bit for second addr in 10bit addr */\r\n#define TWI_DATA_REG        (0x08)  /*  31:8bit reserved, 7-0bit send or receive data byte */\r\n#define TWI_CTL_REG         (0x0C)  /*  INT_EN,BUS_EN,M_STA,INT_FLAG,A_ACK */\r\n#define TWI_STAT_REG        (0x10)  /*  28 interrupt types + 0xF8 normal type = 29  */\r\n#define TWI_CLK_REG         (0x14)  /*  31:7bit reserved,6-3bit,CLK_M,2-0bit CLK_N */\r\n#define TWI_SRST_REG        (0x18)  /*  31:1bit reserved;0bit,write 1 to clear 0. */\r\n#define TWI_EFR_REG         (0x1C)  /*  31:2bit reserved,1:0 bit data byte follow read command */\r\n#define TWI_LCR_REG         (0x20)  /*  31:6bits reserved  5:0bit for sda&scl control*/\r\n#define TWI_DVFS_REG        (0x24)  /*  31:3bits reserved  2:0bit for dvfs control. only A10 support. */\r\n#define TWI_DRIVER_CTRL     (0x200)\r\n...\n"})}),"\n",(0,i.jsxs)(r.p,{children:["TWI \u6a21\u5757\u5bf9\u4e8e\u4e0d\u540c\u5e73\u53f0\u7684\u533a\u5206\u4f4d\u4e8e ",(0,i.jsx)(r.code,{children:"platform\\twi_sun20iw3.h"})," \u4e2d\u3002\u5305\u62ec\u57fa\u5730\u5740\u4ee5\u53ca\u5e73\u53f0\u76f8\u5173\u53c2\u6570"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:"/** the irq of each TWI **/\r\n#ifdef CONFIG_ARCH_SUN20IW3\r\n#define SUNXI_GIC_START 16\r\n#else\r\n#define SUNXI_GIC_START 0\r\n#endif\r\n\r\n/** the base address of TWI*/\r\n#define SUNXI_TWI0_PBASE 0x02502000\r\n#define SUNXI_IRQ_TWI0 (41 - SUNXI_GIC_START)\r\n#define TWI0_SCK GPIOA(16)\r\n#define TWI0_SDA GPIOA(17)\r\n#define TWI0_PIN_MUXSEL 4\r\n\r\n#define SUNXI_TWI1_PBASE 0x02502400\r\n#define SUNXI_IRQ_TWI1 (42 - SUNXI_GIC_START)\r\n#define TWI1_SCK GPIOA(6)\r\n#define TWI1_SDA GPIOA(7)\r\n#define TWI1_PIN_MUXSEL 4\r\n...\n"})}),"\n",(0,i.jsx)(r.h2,{id:"\u6e90\u7801\u7ed3\u6784",children:"\u6e90\u7801\u7ed3\u6784"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:"rtos\u2011hal/\r\n|\u2011\u2011hal/source/twi/hal_twi.c\xa0\xa0\xa0\xa0/* hal\u5c42\u63a5\u53e3\u4ee3\u7801 */\r\n|\u2011\u2011include/hal/sunxi_hal_twi.h\xa0\xa0\xa0\xa0/* \u5934\u6587\u4ef6 */\n"})}),"\n",(0,i.jsx)(r.h2,{id:"\u6a21\u5757\u63a5\u53e3\u8bf4\u660e",children:"\u6a21\u5757\u63a5\u53e3\u8bf4\u660e"}),"\n",(0,i.jsx)(r.p,{children:"\u5934\u6587\u4ef6\uff1a"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"#include <sunxi_hal_twi.h>\n"})}),"\n",(0,i.jsx)(r.h3,{id:"twi-\u7aef\u53e3\u53f7-twi_port_t",children:"TWI \u7aef\u53e3\u53f7 twi_port_t"}),"\n",(0,i.jsx)(r.p,{children:"\u8be5\u6570\u636e\u7ed3\u6784\u4e3b\u8981\u7528\u6765\u8868\u660e TWI \u7684\u7f16\u53f7\uff0c\u7528\u6237\u53ef\u4ee5\u7528\u6765\u8c03\u7528 TWI \u7684\u63a7\u5236\u5668\u3002\u5177\u4f53\u5b9a\u4e49\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"typedef enum\r\n{\r\n    TWI_MASTER_0,           /**< TWI master 0. */\r\n    TWI_MASTER_1,           /**< TWI master 1. */\r\n    TWI_MASTER_2,           /**< TWI master 0. */\r\n    TWI_MASTER_3,           /**< TWI master 1. */\r\n    TWI_MASTER_4,           /**< TWI master 4. */\r\n    TWI_MASTER_5,           /**< TWI master 5. */\r\n    S_TWI_MASTER_0,           /**< S_TWI master 0. */\r\n    S_TWI_MASTER_1,           /**< S_TWI master 1. */\r\n    S_TWI_MASTER_2,           /**< S_TWI master 2. */\r\n    TWI_MASTER_MAX              /**< max TWI master number, \\<invalid\\> */\r\n} twi_port_t;\n"})}),"\n",(0,i.jsx)(r.h3,{id:"twi-\u6d88\u606f\u7ed3\u6784\u4f53-twi_msg_t",children:"TWI \u6d88\u606f\u7ed3\u6784\u4f53 twi_msg_t"}),"\n",(0,i.jsx)(r.p,{children:"\u8be5\u6570\u636e\u7ed3\u6784\u662f TWI \u901a\u4fe1\u65f6\u7684\u6d88\u606f\u7ed3\u6784\uff0c\u5b9a\u4e49\u6bcf\u4e2a\u901a\u4fe1\u6570\u636e\u7684\u683c\u5f0f\uff1a"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:"typedef struct twi_msg\r\n{\r\n    uint16_t addr;          /* slave address */\r\n    uint16_t flags;\r\n/* read data, from slave to master\r\n * TWI_M_RD is guaranteed to be 0x0001!\r\n */\r\n#define TWI_M_RD        0x0001  \r\n#define TWI_M_TEN       0x0010  /* this is a ten bit chip address */\r\n    uint16_t len;           /* msg length */\r\n    uint8_t *buf;       /* pointer to msg data */\r\n} twi_msg_t;\n"})}),"\n",(0,i.jsx)(r.h3,{id:"twi-\u63a7\u5236\u7ed3\u6784\u4f53-hal_twi_transfer_cmd_t",children:"TWI \u63a7\u5236\u7ed3\u6784\u4f53 hal_twi_transfer_cmd_t"}),"\n",(0,i.jsx)(r.p,{children:"\u8be5\u6570\u636e\u63a5\u53e3\u50a8\u5b58\u4e86\u4e00\u4e9b\u7528\u6237\u5728\u8c03\u7528 twi_control \u7684\u65f6\u5019\u53ef\u4ee5\u7528\u5230\u7684\u4e00\u4e9b\u53c2\u6570\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:"typedef enum\r\n{\r\n    I2C_SLAVE = 0,  /* \u8bbe\u7f6e\u4ece\u673a\u5730\u5740 */\r\n    I2C_SLAVE_FORCE = 1, /* \u5f3a\u5236\u8bbe\u7f6e\u4ece\u673a\u5730\u5740 */\r\n    I2C_TENBIT = 2,  /* \u652f\u630110\u4f4d\u5730\u5740 */\r\n    I2C_RDWR = 3 /* \u8bfb\u5199\u652f\u6301 */\r\n} hal_twi_transfer_cmd_t;\n"})}),"\n",(0,i.jsx)(r.h3,{id:"twi-\u9891\u7387\u7ed3\u6784\u4f53-twi_frequency_t",children:"TWI \u9891\u7387\u7ed3\u6784\u4f53 twi_frequency_t"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:"typedef enum\r\n{\r\n    TWI_FREQUENCY_100K = 100000,          /**<  100kbps. */\r\n    TWI_FREQUENCY_200K = 200000,          /**<  200kbps. */\r\n    TWI_FREQUENCY_400K = 400000,          /**<  400kbps. */\r\n} twi_frequency_t;\n"})}),"\n",(0,i.jsx)(r.h3,{id:"twi-\u8fd4\u56de\u503c\u7ed3\u6784\u4f53",children:"TWi \u8fd4\u56de\u503c\u7ed3\u6784\u4f53"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"typedef enum\r\n{\r\n    TWI_STATUS_ERROR = -4,                        /**<  An error occurred and the transaction has failed. */\r\n    TWI_STATUS_ERROR_BUSY = -3,                   /**<  The TWI bus is busy, an error occurred. */\r\n    TWI_STATUS_INVALID_PORT_NUMBER = -2,          /**<  A wrong port number is given. */\r\n    TWI_STATUS_INVALID_PARAMETER = -1,            /**<  A wrong parameter is given. */\r\n    TWI_STATUS_OK = 0                             /**<  No error occurred during the function call. */\r\n} twi_status_t;\n"})}),"\n",(0,i.jsx)(r.h3,{id:"twi-\u521d\u59cb\u5316\u63a5\u53e3",children:"TWI \u521d\u59cb\u5316\u63a5\u53e3"}),"\n",(0,i.jsx)(r.p,{children:"TWI \u6a21\u5757\u521d\u59cb\u5316\uff0c\u4e3b\u8981\u521d\u59cb\u5316\u65f6\u949f\uff0c\u4e2d\u65ad\u4ee5\u53ca\u5f15\u811a\u914d\u7f6e\u7b49"}),"\n",(0,i.jsx)(r.p,{children:"\u51fd\u6570\u539f\u578b\uff1a"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:"twi_status_t hal_twi_init(twi_port_t port)\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"port\uff1aTWI \u7aef\u53e3\u53f7"}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"0 \u4ee3\u8868\u6210\u529f"}),"\n",(0,i.jsx)(r.li,{children:"\u8d1f\u6570\u4ee3\u8868\u5931\u8d25"}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"twi-\u63a7\u5236\u63a5\u53e3",children:"TWI \u63a7\u5236\u63a5\u53e3"}),"\n",(0,i.jsx)(r.p,{children:"\u66f4\u6539 TWI \u7684\u4e00\u4e9b\u914d\u7f6e\uff0c\u5305\u62ec\u4ece\u8bbe\u5907\u5730\u5740\u4ee5\u53ca\u8bfb\u5199\u6570\u636e\u7b49"}),"\n",(0,i.jsx)(r.p,{children:"\u51fd\u6570\u539f\u578b\uff1a"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:"twi_status_t hal_twi_control(twi_port_t port, hal_twi_transfer_cmd_t cmd, void *args)\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"port\uff1a\u7aef\u53e3\u53f7"}),"\n",(0,i.jsx)(r.li,{children:"cmd\uff1a\u63a7\u5236\u53c2\u6570"}),"\n",(0,i.jsx)(r.li,{children:"args\uff1a\u4f20\u5165\u7684\u914d\u7f6e\u6570\u636e"}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"0 \u4ee3\u8868\u6210\u529f"}),"\n",(0,i.jsx)(r.li,{children:"\u8d1f\u6570\u4ee3\u8868\u5931\u8d25"}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"twi-\u6570\u636e\u53d1\u9001\u63a5\u53e3",children:"TWI \u6570\u636e\u53d1\u9001\u63a5\u53e3"}),"\n",(0,i.jsx)(r.p,{children:"\u51fd\u6570\u539f\u578b\uff1a"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:"twi_status_t hal_twi_write(twi_port_t port, unsigned long pos, const void *buf, uint32_t size)\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"port\uff1a\u901a\u9053\u53f7"}),"\n",(0,i.jsx)(r.li,{children:"pos\uff1a\u504f\u79fb\u91cf\uff08\u76ee\u524d\u652f\u6301 1 \u4e2a\u5b57\u8282\u5927\u5c0f\uff09"}),"\n",(0,i.jsx)(r.li,{children:"buf\uff1a\u5f85\u53d1\u9001\u6570\u636e"}),"\n",(0,i.jsx)(r.li,{children:"size\uff1a\u53d1\u9001\u6570\u636e\u5927\u5c0f\uff0c\u4e0d\u5305\u62ec\u504f\u79fb\u91cf"}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"0 \u4ee3\u8868\u6210\u529f"}),"\n",(0,i.jsx)(r.li,{children:"\u8d1f\u6570\u4ee3\u8868\u5931\u8d25"}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"twi-\u6570\u636e\u63a5\u6536\u63a5\u53e3",children:"TWI \u6570\u636e\u63a5\u6536\u63a5\u53e3"}),"\n",(0,i.jsx)(r.p,{children:"\u51fd\u6570\u539f\u578b\uff1a"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:"twi_status_t hal_twi_read(twi_port_t port, unsigned long pos, void *buf, uint32_t size)\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"port\uff1a\u901a\u9053\u53f7"}),"\n",(0,i.jsx)(r.li,{children:"pos\uff1a\u504f\u79fb\u91cf\uff08\u76ee\u524d\u652f\u6301 1 \u4e2a\u5b57\u8282\u5927\u5c0f\uff09"}),"\n",(0,i.jsx)(r.li,{children:"buf\uff1a\u63a5\u6536\u7684\u6570\u636e"}),"\n",(0,i.jsx)(r.li,{children:"size\uff1a\u63a5\u6536\u6570\u636e\u5927\u5c0f\uff0c\u4e0d\u5305\u62ec\u504f\u79fb\u91cf"}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"0 \u4ee3\u8868\u6210\u529f"}),"\n",(0,i.jsx)(r.li,{children:"\u8d1f\u6570\u4ee3\u8868\u5931\u8d25"}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"twi-\u53bb\u521d\u59cb\u5316\u63a5\u53e3",children:"TWI \u53bb\u521d\u59cb\u5316\u63a5\u53e3"}),"\n",(0,i.jsx)(r.p,{children:"\u51fd\u6570\u539f\u578b\uff1a"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:"twi_status_t hal_twi_deinit(twi_port_t port)\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"port\uff1aTWI \u7aef\u53e3\u53f7"}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"0 \u4ee3\u8868\u6210\u529f"}),"\n",(0,i.jsx)(r.li,{children:"\u8d1f\u6570\u4ee3\u8868\u5931\u8d25"}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"\u6a21\u5757\u4f7f\u7528\u8303\u4f8b",children:"\u6a21\u5757\u4f7f\u7528\u8303\u4f8b"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:'#include <stdio.h>\r\n#include <stdlib.h>\r\n#include <stdint.h>\r\n#include <string.h>\r\n#include <unistd.h>\r\n\r\n#include <hal_log.h>\r\n#include <hal_cmd.h>\r\n#include <sunxi_hal_twi.h>\r\n\r\n#define TEST_READ 0\r\n#define TEST_WRITE 1\r\n\r\nstatic int cmd_test_twi(int argc, const char **argv)\r\n{\r\n    twi_msg_t msg;\r\n    twi_port_t port;\r\n    uint16_t addr;\r\n    char reg_addr, reg_val = 0, rw = TEST_READ;\r\n    int c;\r\n\r\n    if (argc < 5)\r\n\t{\r\n        hal_log_info("Usage:");\r\n        hal_log_info("\\ttwi [port] [slave_addr] [reg] -r");\r\n        hal_log_info("\\t                              -w [val]");\r\n        return -1;\r\n    }\r\n\r\n\thal_log_info("Run twi test");\r\n\r\n    port = strtol(argv[1], NULL, 0);\r\n    addr = strtol(argv[2], NULL, 0);\r\n    reg_addr = strtol(argv[3], NULL, 0);\r\n    if (argv[5])\r\n    {\r\n        reg_val = strtol(argv[5], NULL, 0);\r\n    }\r\n\r\n    while ((c = getopt(argc, (char *const *)argv, "rw")) != -1)\r\n\t{\r\n        switch (c)\r\n        {\r\n            case \'r\':\r\n\t\t\t\thal_log_info("twi read test");\r\n                rw = TEST_READ;\r\n                break;\r\n            case \'w\':\r\n\t\t\t\thal_log_info("twi write test");\r\n                rw = TEST_WRITE;\r\n                reg_val = strtol(argv[5], NULL, 0);\r\n                break;\r\n\tdefault:\r\n\t\t\t\thal_log_err("invalid param!");\r\n        }\r\n    }\r\n\r\n    hal_twi_init(port);\r\n    hal_twi_control(port, I2C_SLAVE, &addr);\r\n\r\n    if (rw == TEST_READ)\r\n    {\r\n        hal_twi_read(port, reg_addr, &reg_val, 1);\r\n        hal_log_info("reg_val: 0x%x", reg_val);\r\n    }\r\n    else if (rw == TEST_WRITE)\r\n    {\r\n        /*\r\n         * hal_twi_write bug workaround\r\n         */\r\n        uint8_t buf[2];\r\n\r\n        buf[0] = reg_addr;\r\n        buf[1] = reg_val;\r\n        msg.flags = 0;\r\n        msg.addr =  addr;\r\n        msg.len = 2;\r\n        msg.buf = buf;\r\n\r\n        hal_twi_control(port, I2C_RDWR, &msg);\r\n    }\r\n\r\n\thal_log_info("Twi test finish");\r\n\r\n\t//hal_twi_uninit(port);\r\n\r\n\thal_log_info("Twi test1 finish");\r\n    return 0;\r\n}\r\n\r\nFINSH_FUNCTION_EXPORT_CMD(cmd_test_twi, hal_twi, twi hal APIs tests)\r\n\n'})})]})}function h(n={}){const{wrapper:r}={...(0,t.a)(),...n.components};return r?(0,i.jsx)(r,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},46534:(n,r,e)=>{e.d(r,{Z:()=>i});const i=e.p+"assets/images/image-20230426142532644-cfdbfa25d7b69e685808c99a80714972.png"},11151:(n,r,e)=>{e.d(r,{Z:()=>d,a:()=>s});var i=e(67294);const t={},l=i.createContext(t);function s(n){const r=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function d(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),i.createElement(l.Provider,{value:r},n.children)}}}]);