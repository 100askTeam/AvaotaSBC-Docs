"use strict";(self.webpackChunkavaota_docs=self.webpackChunkavaota_docs||[]).push([[916],{53793:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>_,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>x});var l=i(85893),s=i(11151);const r={},c="PMU \u9a71\u52a8",d={id:"linux-manual/syterkit/driver/pmu",title:"PMU \u9a71\u52a8",description:"SyterKit \u96c6\u6210\u57fa\u4e8e I2C \u7684 PMU \u9a71\u52a8\uff0c\u652f\u6301 AXP \u7cfb\u5217 PMU\u3002",source:"@site/docs/linux-manual/syterkit/driver/pmu.md",sourceDirName:"linux-manual/syterkit/driver",slug:"/linux-manual/syterkit/driver/pmu",permalink:"/linux-manual/syterkit/driver/pmu",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"linuxManualSidebar",previous:{title:"I2C \u9a71\u52a8",permalink:"/linux-manual/syterkit/driver/i2c"},next:{title:"SPI \u9a71\u52a8",permalink:"/linux-manual/syterkit/driver/spi"}},_={},x=[{value:"\u7ed3\u6784\u4f53",id:"\u7ed3\u6784\u4f53",level:2},{value:"API \u63a5\u53e3",id:"api-\u63a5\u53e3",level:2},{value:"\u516c\u5171\u63a5\u53e3",id:"\u516c\u5171\u63a5\u53e3",level:3},{value:"axp_set_vol",id:"axp_set_vol",level:4},{value:"axp_get_vol",id:"axp_get_vol",level:4},{value:"AXP313/AXP323/AXP1530",id:"axp313axp323axp1530",level:3},{value:"pmu_axp1530_init",id:"pmu_axp1530_init",level:4},{value:"pmu_axp1530_get_vol",id:"pmu_axp1530_get_vol",level:4},{value:"pmu_axp1530_set_vol",id:"pmu_axp1530_set_vol",level:4},{value:"pmu_axp1530_set_dual_phase",id:"pmu_axp1530_set_dual_phase",level:4},{value:"pmu_axp1530_dump",id:"pmu_axp1530_dump",level:4},{value:"AXP717/AXP717C/AXP717B",id:"axp717axp717caxp717b",level:3},{value:"pmu_axp2202_init",id:"pmu_axp2202_init",level:4},{value:"pmu_axp2202_get_vol",id:"pmu_axp2202_get_vol",level:4},{value:"pmu_axp2202_set_vol",id:"pmu_axp2202_set_vol",level:4},{value:"pmu_axp2202_dump",id:"pmu_axp2202_dump",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function t(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"pmu-\u9a71\u52a8",children:"PMU \u9a71\u52a8"}),"\n",(0,l.jsx)(e.p,{children:"SyterKit \u96c6\u6210\u57fa\u4e8e I2C \u7684 PMU \u9a71\u52a8\uff0c\u652f\u6301 AXP \u7cfb\u5217 PMU\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u7ed3\u6784\u4f53",children:"\u7ed3\u6784\u4f53"}),"\n",(0,l.jsx)(e.p,{children:"\u63cf\u8ff0 axp pmu \u7684\u6bcf\u4e00 step \u5bf9\u5e94\u7535\u538b\u5173\u7cfb\u7684\u4fe1\u606f"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-c",children:"/**\r\n * Structure describing a voltage step of the power domain.\r\n */\r\ntypedef struct _axp_step_info {\r\n    uint32_t step_min_vol;// Minimum voltage level for the step.\r\n    uint32_t step_max_vol;// Maximum voltage level for the step.\r\n    uint32_t step_val;    // Voltage increment value for the step.\r\n    uint32_t regation;    // Regulator register address.\r\n} axp_step_info_t;\n"})}),"\n",(0,l.jsx)(e.p,{children:"PMU \u7684\u76f8\u5173\u63a7\u5236\u53c2\u6570"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-c",children:"/**\r\n * Structure describing the control information of a power domain.\r\n */\r\ntypedef struct _axp_contrl_info {\r\n    char name[8];                   // Name of the power domain.\r\n    uint32_t min_vol;               // Minimum voltage level for the domain.\r\n    uint32_t max_vol;               // Maximum voltage level for the domain.\r\n    uint32_t cfg_reg_addr;          // Configuration register address.\r\n    uint32_t cfg_reg_mask;          // Configuration register mask.\r\n    uint32_t ctrl_reg_addr;         // Control register address.\r\n    uint32_t ctrl_bit_ofs;          // Bit offset in the control register.\r\n    uint32_t reg_addr_offset;       // Offset of the register address.\r\n    axp_step_info_t axp_step_tbl[4];// Voltage step table for the domain.\r\n} axp_contrl_info;\n"})}),"\n",(0,l.jsx)(e.h2,{id:"api-\u63a5\u53e3",children:"API \u63a5\u53e3"}),"\n",(0,l.jsx)(e.h3,{id:"\u516c\u5171\u63a5\u53e3",children:"\u516c\u5171\u63a5\u53e3"}),"\n",(0,l.jsx)(e.h4,{id:"axp_set_vol",children:"axp_set_vol"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-c",children:"int axp_set_vol(sunxi_i2c_t *i2c_dev, char *name, int set_vol, int onoff, axp_contrl_info *axp_ctrl_tbl, uint8_t axp_ctrl_tbl_size, uint8_t axp_addr);\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u8bbe\u7f6e\u7531AXP\u63a7\u5236\u7684\u7279\u5b9a\u7535\u6e90\u57df\u7684\u7535\u538b\u503c\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"i2c_dev"}),"\uff1a\u6307\u5411I2C\u8bbe\u5907\u7ed3\u6784\u7684\u6307\u9488\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"name"}),"\uff1a\u7535\u6e90\u57df\u7684\u540d\u79f0\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"set_vol"}),"\uff1a\u8981\u8bbe\u7f6e\u7684\u7535\u538b\u503c\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"onoff"}),"\uff1a\u662f\u5426\u6253\u5f00\u6216\u5173\u95ed\u7535\u6e90\u57df\uff081\u8868\u793a\u6253\u5f00\uff0c0\u8868\u793a\u5173\u95ed\uff09\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"axp_ctrl_tbl"}),"\uff1a\u6307\u5411AXP\u63a7\u5236\u4fe1\u606f\u8868\u7684\u6307\u9488\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"axp_ctrl_tbl_size"}),"\uff1aAXP\u63a7\u5236\u4fe1\u606f\u8868\u7684\u5927\u5c0f\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"axp_addr"}),"\uff1aAXP\u8bbe\u5907\u5730\u5740\u3002"]}),"\n",(0,l.jsx)(e.li,{children:"\u8fd4\u56de\u503c\uff1a\u8868\u793a\u64cd\u4f5c\u6210\u529f\u72b6\u6001\u7684\u6574\u6570\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h4,{id:"axp_get_vol",children:"axp_get_vol"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-c",children:"int axp_get_vol(sunxi_i2c_t *i2c_dev, char *name, axp_contrl_info *axp_ctrl_tbl, uint8_t axp_ctrl_tbl_size, uint8_t axp_addr);\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u83b7\u53d6\u7531AXP\u63a7\u5236\u7684\u7279\u5b9a\u7535\u6e90\u57df\u7684\u7535\u538b\u503c\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"i2c_dev"}),"\uff1a\u6307\u5411I2C\u8bbe\u5907\u7ed3\u6784\u7684\u6307\u9488\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"name"}),"\uff1a\u7535\u6e90\u57df\u7684\u540d\u79f0\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"axp_ctrl_tbl"}),"\uff1a\u6307\u5411AXP\u63a7\u5236\u4fe1\u606f\u8868\u7684\u6307\u9488\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"axp_ctrl_tbl_size"}),"\uff1aAXP\u63a7\u5236\u4fe1\u606f\u8868\u7684\u5927\u5c0f\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"axp_addr"}),"\uff1aAXP\u8bbe\u5907\u5730\u5740\u3002"]}),"\n",(0,l.jsx)(e.li,{children:"\u8fd4\u56de\u503c\uff1a\u6307\u5b9a\u7535\u6e90\u57df\u7684\u7535\u538b\u503c\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"axp313axp323axp1530",children:"AXP313/AXP323/AXP1530"}),"\n",(0,l.jsx)(e.h4,{id:"pmu_axp1530_init",children:"pmu_axp1530_init"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u51fd\u6570\u539f\u578b"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-c",children:"int pmu_axp1530_init(sunxi_i2c_t *i2c_dev);\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u53c2\u6570"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"i2c_dev"}),"\uff1a\u6307\u5411I2C\u8bbe\u5907\u7ed3\u6784\u7684\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u8fd4\u56de\u503c"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5982\u679c\u6210\u529f\u5219\u8fd4\u56de0\uff0c\u5982\u679c\u53d1\u751f\u9519\u8bef\u5219\u8fd4\u56de-1\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h4,{id:"pmu_axp1530_get_vol",children:"pmu_axp1530_get_vol"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u51fd\u6570\u539f\u578b"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-c",children:"int pmu_axp1530_get_vol(sunxi_i2c_t *i2c_dev, char *name);\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u53c2\u6570"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"i2c_dev"}),"\uff1a\u6307\u5411I2C\u8bbe\u5907\u7ed3\u6784\u7684\u6307\u9488\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"name"}),"\uff1a\u7535\u6e90\u57df\u7684\u540d\u79f0\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u8fd4\u56de\u503c"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u6307\u5b9a\u7535\u6e90\u57df\u7684\u7535\u538b\u503c\uff0c\u5982\u679c\u53d1\u751f\u9519\u8bef\u5219\u8fd4\u56de-1\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h4,{id:"pmu_axp1530_set_vol",children:"pmu_axp1530_set_vol"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u51fd\u6570\u539f\u578b"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-c",children:"int pmu_axp1530_set_vol(sunxi_i2c_t *i2c_dev, char *name, int set_vol, int onoff);\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u53c2\u6570"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"i2c_dev"}),"\uff1a\u6307\u5411I2C\u8bbe\u5907\u7ed3\u6784\u7684\u6307\u9488\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"name"}),"\uff1a\u7535\u6e90\u57df\u7684\u540d\u79f0\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"set_vol"}),"\uff1a\u8981\u8bbe\u7f6e\u7684\u7535\u538b\u503c\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"onoff"}),"\uff1a\u7535\u6e90\u57df\u7684\u5f00/\u5173\u72b6\u6001\uff081 - \u5f00\u542f\uff0c0 - \u5173\u95ed\uff09\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u8fd4\u56de\u503c"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5982\u679c\u6210\u529f\u5219\u8fd4\u56de0\uff0c\u5982\u679c\u53d1\u751f\u9519\u8bef\u5219\u8fd4\u56de-1\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h4,{id:"pmu_axp1530_set_dual_phase",children:"pmu_axp1530_set_dual_phase"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u51fd\u6570\u539f\u578b"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-c",children:"int pmu_axp1530_set_dual_phase(sunxi_i2c_t *i2c_dev);\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u53c2\u6570"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"i2c_dev"}),"\uff1a\u6307\u5411I2C\u8bbe\u5907\u7ed3\u6784\u7684\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u8fd4\u56de\u503c"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5982\u679c\u6210\u529f\u5219\u8fd4\u56de0\uff0c\u5982\u679c\u53d1\u751f\u9519\u8bef\u5219\u8fd4\u56de-1\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h4,{id:"pmu_axp1530_dump",children:"pmu_axp1530_dump"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u51fd\u6570\u539f\u578b"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-c",children:"void pmu_axp1530_dump(sunxi_i2c_t *i2c_dev);\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u53c2\u6570"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"i2c_dev"}),"\uff1a\u6307\u5411I2C\u8bbe\u5907\u7ed3\u6784\u7684\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"axp717axp717caxp717b",children:"AXP717/AXP717C/AXP717B"}),"\n",(0,l.jsx)(e.h4,{id:"pmu_axp2202_init",children:"pmu_axp2202_init"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u51fd\u6570\u539f\u578b"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-c",children:"int pmu_axp2202_init(sunxi_i2c_t *i2c_dev);\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u53c2\u6570"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"i2c_dev"}),"\uff1a\u6307\u5411I2C\u8bbe\u5907\u7ed3\u6784\u7684\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u8fd4\u56de\u503c"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5982\u679c\u6210\u529f\u5219\u8fd4\u56de0\uff0c\u5982\u679c\u53d1\u751f\u9519\u8bef\u5219\u8fd4\u56de-1\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h4,{id:"pmu_axp2202_get_vol",children:"pmu_axp2202_get_vol"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u51fd\u6570\u539f\u578b"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-c",children:"int pmu_axp2202_get_vol(sunxi_i2c_t *i2c_dev, char *name);\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u53c2\u6570"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"i2c_dev"}),"\uff1a\u6307\u5411I2C\u8bbe\u5907\u7ed3\u6784\u7684\u6307\u9488\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"name"}),"\uff1a\u7535\u6e90\u57df\u7684\u540d\u79f0\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u8fd4\u56de\u503c"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u6307\u5b9a\u7535\u6e90\u57df\u7684\u7535\u538b\u503c\uff0c\u5982\u679c\u53d1\u751f\u9519\u8bef\u5219\u8fd4\u56de-1\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h4,{id:"pmu_axp2202_set_vol",children:"pmu_axp2202_set_vol"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u51fd\u6570\u539f\u578b"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-c",children:"int pmu_axp2202_set_vol(sunxi_i2c_t *i2c_dev, char *name, int set_vol, int onoff);\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u53c2\u6570"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"i2c_dev"}),"\uff1a\u6307\u5411I2C\u8bbe\u5907\u7ed3\u6784\u7684\u6307\u9488\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"name"}),"\uff1a\u7535\u6e90\u57df\u7684\u540d\u79f0\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"set_vol"}),"\uff1a\u8981\u8bbe\u7f6e\u7684\u7535\u538b\u503c\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"onoff"}),"\uff1a\u7535\u6e90\u57df\u7684\u5f00/\u5173\u72b6\u6001\uff081 - \u5f00\u542f\uff0c0 - \u5173\u95ed\uff09\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u8fd4\u56de\u503c"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5982\u679c\u6210\u529f\u5219\u8fd4\u56de0\uff0c\u5982\u679c\u53d1\u751f\u9519\u8bef\u5219\u8fd4\u56de-1\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h4,{id:"pmu_axp2202_dump",children:"pmu_axp2202_dump"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u51fd\u6570\u539f\u578b"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-c",children:"void pmu_axp2202_dump(sunxi_i2c_t *i2c_dev);\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u53c2\u6570"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"i2c_dev"}),"\uff1a\u6307\u5411I2C\u8bbe\u5907\u7ed3\u6784\u7684\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(e.p,{children:"\u521d\u59cb\u5316 I2C\uff0c\u521d\u59cb\u5316 PMU\uff0c\u8bbe\u7f6e PMU \u7535\u538b"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-c",children:'sunxi_i2c_t i2c_pmu = {\r\n        .base = SUNXI_R_TWI0_BASE,\r\n        .id = SUNXI_R_I2C0,\r\n        .speed = 4000000,\r\n        .gpio_scl = {GPIO_PIN(GPIO_PORTL, 0), GPIO_PERIPH_MUX2},\r\n        .gpio_sda = {GPIO_PIN(GPIO_PORTL, 1), GPIO_PERIPH_MUX2},\r\n};\r\n\r\nint main(void) {\r\n    sunxi_i2c_init(&i2c_pmu);\r\n    pmu_axp2202_init(&i2c_pmu);\r\n    pmu_axp2202_set_vol(&i2c_pmu, "dcdc1", 1100, 1);\r\n    pmu_axp2202_dump(&i2c_pmu);\r\n}\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u521d\u59cb\u5316 I2C\uff0c\u521d\u59cb\u5316\u4e24\u8def PMU\uff0c\u8bbe\u7f6e PMU \u7535\u538b"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-c",children:'sunxi_i2c_t i2c_pmu = {\r\n        .base = SUNXI_R_TWI0_BASE,\r\n        .id = SUNXI_R_I2C0,\r\n        .speed = 4000000,\r\n        .gpio_scl = {GPIO_PIN(GPIO_PORTL, 0), GPIO_PERIPH_MUX2},\r\n        .gpio_sda = {GPIO_PIN(GPIO_PORTL, 1), GPIO_PERIPH_MUX2},\r\n};\r\n\r\nint main(void) {\r\n    sunxi_i2c_init(&i2c_pmu);\r\n    pmu_axp2202_init(&i2c_pmu);\r\n    pmu_axp1530_init(&i2c_pmu);\r\n    \r\n    pmu_axp1530_set_dual_phase(&i2c_pmu);\r\n    pmu_axp1530_set_vol(&i2c_pmu, "dcdc1", 1100, 1);\r\n    pmu_axp1530_set_vol(&i2c_pmu, "dcdc2", 1100, 1);\r\n    \r\n    pmu_axp2202_set_vol(&i2c_pmu, "dcdc1", 1100, 1);\r\n    pmu_axp2202_set_vol(&i2c_pmu, "bldo3", 1800, 1);\r\n    pmu_axp2202_set_vol(&i2c_pmu, "bldo1", 1800, 1);\r\n    \r\n    pmu_axp2202_dump(&i2c_pmu);\r\n    pmu_axp1530_dump(&i2c_pmu);\r\n}\n'})})]})}function a(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(t,{...n})}):t(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>d,a:()=>c});var l=i(67294);const s={},r=l.createContext(s);function c(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);