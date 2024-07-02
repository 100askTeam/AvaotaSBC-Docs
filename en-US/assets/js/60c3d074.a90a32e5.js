"use strict";(self.webpackChunkavaota_docs=self.webpackChunkavaota_docs||[]).push([[8064],{41970:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>x,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var s=i(85893),r=i(11151);const c={},d="PCIe - PCI Express",l={id:"linux-manual/sdk-develop/bsp-driver/pcie",title:"PCIe - PCI Express",description:"PCI Express\uff0c\u7b80\u79f0PCI-E\uff0c\u5b98\u65b9\u7b80\u79f0PCIe\uff0c\u662f\u8ba1\u7b97\u673a\u603b\u7ebf\u7684\u4e00\u4e2a\u91cd\u8981\u5206\u652f\uff0c\u5b83\u6cbf\u7528\u65e2\u6709\u7684PCI\u7f16\u7a0b\u6982\u5ff5\u53ca\u4fe1\u53f7\u6807\u51c6\uff0c\u5e76\u4e14\u6784\u5efa\u4e86\u66f4\u52a0\u9ad8\u901f\u7684\u4e32\u884c\u901a\u4fe1\u7cfb\u7edf\u6807\u51c6\u3002\u76ee\u524d\u8fd9\u4e00\u6807\u51c6\u7531PCI-SIG\u7ec4\u7ec7\u5236\u5b9a\u548c\u7ef4\u62a4\u3002",source:"@site/docs/linux-manual/sdk-develop/bsp-driver/pcie.md",sourceDirName:"linux-manual/sdk-develop/bsp-driver",slug:"/linux-manual/sdk-develop/bsp-driver/pcie",permalink:"/en-US/linux-manual/sdk-develop/bsp-driver/pcie",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"linuxManualSidebar",previous:{title:"MIPI CSI - \u89c6\u9891\u8f93\u5165",permalink:"/en-US/linux-manual/sdk-develop/bsp-driver/mipi-csi"},next:{title:"PWM - \u8109\u51b2\u5bbd\u5ea6\u8c03\u5236",permalink:"/en-US/linux-manual/sdk-develop/bsp-driver/pwm"}},x={},h=[{value:"\u6a21\u5757\u914d\u7f6e",id:"\u6a21\u5757\u914d\u7f6e",level:2},{value:"\u9a71\u52a8\u914d\u7f6e",id:"\u9a71\u52a8\u914d\u7f6e",level:3},{value:"\u8bbe\u5907\u6811\u914d\u7f6e",id:"\u8bbe\u5907\u6811\u914d\u7f6e",level:3},{value:"\u4f7f\u7528 combophy \u7684\u5e73\u53f0",id:"\u4f7f\u7528-combophy-\u7684\u5e73\u53f0",level:4},{value:"\u6a21\u5757\u9a71\u52a8",id:"\u6a21\u5757\u9a71\u52a8",level:2},{value:"PCIe \u4f7f\u7528\u6848\u4f8b",id:"pcie-\u4f7f\u7528\u6848\u4f8b",level:2},{value:"NVMe SSD \u56fa\u6001\u786c\u76d8",id:"nvme-ssd-\u56fa\u6001\u786c\u76d8",level:3},{value:"\u65e5\u5fd7\u5206\u6790",id:"\u65e5\u5fd7\u5206\u6790",level:4},{value:"PCIe \u5e38\u7528\u8c03\u8bd5\u65b9\u6cd5",id:"pcie-\u5e38\u7528\u8c03\u8bd5\u65b9\u6cd5",level:2},{value:"PCIe\u5e38\u7528\u8c03\u8bd5\u5de5\u5177",id:"pcie\u5e38\u7528\u8c03\u8bd5\u5de5\u5177",level:3},{value:"lspci",id:"lspci",level:4},{value:"PCIe\u901a\u7528\u6392\u67e5\u624b\u6bb5",id:"pcie\u901a\u7528\u6392\u67e5\u624b\u6bb5",level:2},{value:"\u8f6f\u4ef6\u6392\u67e5\u624b\u6bb5",id:"\u8f6f\u4ef6\u6392\u67e5\u624b\u6bb5",level:3},{value:"\u786c\u4ef6\u6392\u67e5\u624b\u6bb5",id:"\u786c\u4ef6\u6392\u67e5\u624b\u6bb5",level:3},{value:"FAQ",id:"faq",level:2},{value:"\u94fe\u8def\u8bad\u7ec3\u5931\u8d25",id:"\u94fe\u8def\u8bad\u7ec3\u5931\u8d25",level:3}];function t(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"pcie---pci-express",children:"PCIe - PCI Express"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"PCI Express"}),"\uff0c\u7b80\u79f0",(0,s.jsx)(n.code,{children:"PCI-E"}),"\uff0c\u5b98\u65b9\u7b80\u79f0",(0,s.jsx)(n.code,{children:"PCIe"}),"\uff0c\u662f\u8ba1\u7b97\u673a\u603b\u7ebf\u7684\u4e00\u4e2a\u91cd\u8981\u5206\u652f\uff0c\u5b83\u6cbf\u7528\u65e2\u6709\u7684PCI\u7f16\u7a0b\u6982\u5ff5\u53ca\u4fe1\u53f7\u6807\u51c6\uff0c\u5e76\u4e14\u6784\u5efa\u4e86\u66f4\u52a0\u9ad8\u901f\u7684\u4e32\u884c\u901a\u4fe1\u7cfb\u7edf\u6807\u51c6\u3002\u76ee\u524d\u8fd9\u4e00\u6807\u51c6\u7531",(0,s.jsx)(n.code,{children:"PCI-SIG"}),"\u7ec4\u7ec7\u5236\u5b9a\u548c\u7ef4\u62a4\u3002\r\n\u4e0ePCI\u603b\u7ebf\u4e0d\u540c\uff0cPCIe\u603b\u7ebf\u4f7f\u7528\u7aef\u5230\u7aef\u7684\u8fde\u63a5\u65b9\u5f0f\uff0c\u5728\u4e00\u6761\u94fe\u8def\u4e0a\u7684\u4e24\u7aef\u53ea\u80fd\u5404\u8fde\u63a5\u4e00\u4e2a\u8bbe\u5907\uff0c\u8fd9\u4e24\u4e2a\u8bbe\u5907\u4e92\u4e3a\u6570\u636e\u53d1\u9001\u7aef\u548c\u63a5\u6536\u7aef\uff0c\u6240\u4ee5PCIe\u603b\u7ebf\u7684\u7269\u7406\u94fe\u8def\u7684\u4e00\u4e2a\u6570\u636e\u901a\u8def\u4e3a\u4e00Lane\uff0c\u5c31\u6709\u4e24\u7ec4\u5dee\u5206\u4fe1\u53f7\uff0c\u53ca\u51714\u6839\u4fe1\u53f7\u7ebf\uff0c\r\n\u5176\u9ad8\u5e26\u5bbd\u5c31\u7531\u591a\u6761lane\u7ec4\u6210\uff0c\u76ee\u524dPCIe\u94fe\u8def\u53ef\u4ee5\u652f\u63011\u30012\u30014\u30018\u300116\u548c32\u4e2aLane\uff0c\u5373x1\u3001x2\u3001x4\u3001x8\u3001x16\u3001x32\u5bbd\u5ea6\u7684PCIe\u94fe\u8def\uff0c\u6bcf\u4e00\u4e2aLane\u4e0a\u4f7f\u7528\u7684\u603b\u7ebf\u9891\u7387\u4e0ePCIe\u603b\u7ebf\u4f7f\u7528\u7684\u7248\u672c\u76f8\u5173\u3002PCIe\u4e0d\u65ad\u5b8c\u5584\u548c\u53d1\u5c55\u7684\u65b0\u7248\u672c\u652f\u6301\u7684\u7406\u8bba\u5e26\u5bbd\u53ef\u6ee1\u8db3\u591a\u79cd\u9ad8\u5e26\u5bbd\u8981\u6c42\u7684\u573a\u5408\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6a21\u5757\u914d\u7f6e",children:"\u6a21\u5757\u914d\u7f6e"}),"\n",(0,s.jsx)(n.h3,{id:"\u9a71\u52a8\u914d\u7f6e",children:"\u9a71\u52a8\u914d\u7f6e"}),"\n",(0,s.jsx)(n.p,{children:"\u9a71\u52a8\u4f4d\u4e8e"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"PCIe Drivers ->\r\n\t<*> Allwinner PCIe RC controller - Host mode         # PCIe HOST \u6a21\u5f0f\r\n\t<*> Allwinner PCIe EP controller - Endpoint mode     # PCIe EP \u6a21\u5f0f\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u90e8\u5206\u5e73\u53f0\u4f7f\u7528 combophy\uff0c\u9700\u8981\u52fe\u9009 PHY \u7684\u9a71\u52a8"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"PHY Drivers ->\r\n\t<*> Allwinner INNO COMBO PHY Driver                  # PCIe PHY\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u8bbe\u5907\u6811\u914d\u7f6e",children:"\u8bbe\u5907\u6811\u914d\u7f6e"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u8bbe\u5907\u6811\u4e2d\u914d\u7f6e\u5982\u4e0b:"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 SoC \u7684 ",(0,s.jsx)(n.code,{children:"dtsi"})," \u6587\u4ef6\u4e2d\u63d0\u70bc\u4e86\u5185\u5b58\u57fa\u5730\u5740\u3001\u4e2d\u65ad\u63a7\u5236\u3001\u65f6\u949f\u7b49\u5171\u6027\u4fe1\u606f\uff0c\u662f\u8be5\u7c7b\u82af\u7247\u6240\u6709\u5e73\u53f0\u7684\u6a21\u5757\u914d\u7f6e"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'pcie: pcie@4800000 {\r\n\tcompatible = "allwinner,sunxi-pcie-v210-rc";\r\n\t#address-cells = <3>;\r\n\t#size-cells = <2>;\r\n\tbus-range = <0x0 0xff>;\r\n\treg = <0 0x04800000 0 0x480000>;\r\n\treg-names = "dbi";\r\n\tdevice_type = "pci";\r\n\tranges = <0x00000800 0 0x20000000 0x0 0x20000000 0 0x01000000\r\n\t\t  0x81000000 0 0x21000000 0x0 0x21000000 0 0x01000000\r\n\t\t  0x82000000 0 0x22000000 0x0 0x22000000 0 0x07000000>;\r\n\tnum-lanes = <1>;\r\n\tphys = <&combophy PHY_TYPE_PCIE>;\r\n\tphy-names = "pcie-phy";\r\n\tinterrupts = <GIC_SPI 107 IRQ_TYPE_LEVEL_HIGH>,\r\n\t\t     <GIC_SPI 106 IRQ_TYPE_LEVEL_HIGH>,\r\n\t\t     <GIC_SPI 98  IRQ_TYPE_LEVEL_HIGH>,\r\n\t\t     <GIC_SPI 99  IRQ_TYPE_LEVEL_HIGH>,\r\n\t\t     <GIC_SPI 100 IRQ_TYPE_LEVEL_HIGH>,\r\n\t\t     <GIC_SPI 101 IRQ_TYPE_LEVEL_HIGH>,\r\n\t\t     <GIC_SPI 102 IRQ_TYPE_LEVEL_HIGH>,\r\n\t\t     <GIC_SPI 103 IRQ_TYPE_LEVEL_HIGH>,\r\n\t\t     <GIC_SPI 104 IRQ_TYPE_LEVEL_HIGH>,\r\n\t\t     <GIC_SPI 105 IRQ_TYPE_LEVEL_HIGH>;\r\n\tinterrupt-names = "msi", "sii", "edma-w0", "edma-w1", "edma-w2", "edma-w3",\r\n\t\t\t  "edma-r0", "edma-r1", "edma-r2", "edma-r3";\r\n\t#interrupt-cells = <1>;\r\n\tnum-edma = <4>;\r\n\tmax-link-speed = <2>;\r\n\tnum-ib-windows = <8>;\r\n\tnum-ob-windows = <8>;\r\n\tlinux,pci-domain = <0>;\r\n\tresets = <&ccu RST_BUS_PCIE_USB3>;\r\n\tpower-domains = <&pd1 A523_PCK_PCIE>;\r\n\tclocks = <&ccu CLK_USB3_REF>, <&ccu CLK_PLL_PERI0_200M>, <&dcxo24M>, <&ccu CLK_PCIE_AUX>;\r\n\tclock-names = "pclk_ref", "pclk_per", "hosc", "pclk_aux";\r\n\tstatus = "disabled";\r\n};\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"compatible"})," \u8868\u5f81\u5177\u4f53\u7684\u8bbe\u5907,\u7528\u4e8e\u9a71\u52a8\u548c\u8bbe\u5907\u7684\u7ed1\u5b9a\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bus-range"})," PCIe RC\u6a21\u5f0f\u7684\u603b\u7ebf\u8303\u56f4\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"reg"})," \u8bbe\u5907\u4f7f\u7528\u7684\u5730\u5740\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"rangs"})," PCIe\u7684\u5730\u5740\u7a7a\u95f4\u8303\u56f4\uff0c\u5305\u542b\uff1a\u914d\u7f6e\u7a7a\u95f4\uff0cIO\u7a7a\u95f4\u548cMEM\u7a7a\u95f4\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"num-lanes"})," \u652f\u6301\u7684\u6700\u5927lane\u6570\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"phy"})," \u5f15\u7528phy\u9a71\u52a8\u7684\u8282\u70b9\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"interrupts"})," \u8bbe\u5907\u4f7f\u7528\u7684\u4e2d\u65ad\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"num-edma"})," DMA\u8bfb\u6216\u5199\u7684\u901a\u9053\u6570\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"max-link-speed"})," \u652f\u6301\u7684\u6700\u5927Gen\u901f\u7387\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"num-ib-windows"})," \u652f\u6301\u7684\u6700\u5927inbound\u7a97\u53e3\u6570\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"num-ob-windows"})," \u652f\u6301\u7684\u6700\u5927outbound\u7a97\u53e3\u6570\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"num-viewport"})," \u53ef\u6620\u5c04\u7a97\u53e3\u7684\u603b\u5bf9\u6570\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"linux,pci-domain"})," \u8bbe\u5b9aPCIe\u57df\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"power-domains"})," \u7535\u6e90\u57df\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"clocks"})," \u65f6\u949f\u63a7\u5236\u6e90\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"resets"})," \u590d\u4f4d\u4fe1\u53f7\u6e90\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"busno"})," \u603b\u7ebf\u53f7\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"\u4f7f\u7528-combophy-\u7684\u5e73\u53f0",children:"\u4f7f\u7528 combophy \u7684\u5e73\u53f0"}),"\n",(0,s.jsx)(n.p,{children:"\u90e8\u5206\u5e73\u53f0\u4f7f\u7528 combophy \u590d\u7528 USB3.0 \u4e0e PCIe \u7684 SerDes PHY\uff0c\u6846\u56fe\u5982\u4e0b"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240330102119120",src:i(52581).Z+"",width:"848",height:"620"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,s.jsx)(n.code,{children:"combophy"}),"\u4e3a",(0,s.jsx)(n.code,{children:"PCIe"}),"\u7684phy\u914d\u7f6e\u8282\u70b9\uff0c\u540c\u6837\u4f53\u73b0\u5728 ",(0,s.jsx)(n.code,{children:"dtsi"})," \u4e2d\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'combophy: phy@4f00000 {\r\n\tcompatible = "allwinner,inno-combphy";\r\n\treg = <0x0 0x04f00000 0x0 0x80000>, /* Sub-System Application Registers */\r\n\t      <0x0 0x04f80000 0x0 0x80000>; /* Combo INNO PHY Registers */\r\n\treg-names = "phy-ctl", "phy-clk";\r\n\tpower-domains = <&pd1 A523_PCK_PCIE>;\r\n\tphy_refclk_sel = <0>; /* 0:internal clk; 1:external clk */\r\n\tresets = <&ccu RST_BUS_PCIE_USB3>;\r\n\t#phy-cells = <1>;\r\n\tstatus = "disabled";\r\n};\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"reg"})," \u8bbe\u5907\u4f7f\u7528\u7684\u5730\u5740\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"phy_refclk_sel"})," phy\u65f6\u949f\u7684\u53c2\u8003\u6e90\uff1a0\u8868\u793a\u5185\u90e8\u65f6\u949f\uff0c1\u8868\u793a\u5916\u90e8\u65f6\u949f\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u8bbe\u5907\u7aef\uff0c\u9700\u8981\u914d\u7f6e PHY \u7684\u529f\u80fd"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'&combophy {\r\n\tphy_use_sel = <0>; /* 0:PCIE; 1:USB3 */\r\n\tstatus = "okay";\r\n};\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"phy_use_sel"})," phy \u4f7f\u7528\u9009\u62e9\uff0c0\u8868\u793a\u7528\u4e8ePCIE\uff0c1\u8868\u793a\u7528\u4e8eUSB3\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u540c\u65f6\u914d\u7f6e PCIe \u7684\u8bbe\u5907 ",(0,s.jsx)(n.code,{children:"reset"}),"\uff0c",(0,s.jsx)(n.code,{children:"wake"})," \u7b49 IO"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'&pcie {\r\n\treset-gpios = <&pio PH 11 GPIO_ACTIVE_HIGH>;\r\n\twake-gpios = <&pio PH 12 GPIO_ACTIVE_HIGH>;\r\n\tpcie3v3-supply = <&reg_bldo3>;\r\n\tclk-freq-100M;\r\n\tstatus = "okay";\r\n};\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"reset-gpios"})," PCIe\u7684\u590d\u4f4d\u5f15\u811a\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"wake-gpios"})," PCIe\u7684\u5524\u9192\u5f15\u811a\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"pcie3v3-supply"})," \u914d\u7f6ePCIe\u5916\u8bbe\u76843V3\u4f9b\u7535\uff0c\u53ef\u9009\u9879\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"clk-freq-100M"})," \u914d\u7f6e\u4f7f\u7528100M\u53c2\u8003\u65f6\u949f\u7684\u6807\u5fd7\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6a21\u5757\u9a71\u52a8",children:"\u6a21\u5757\u9a71\u52a8"}),"\n",(0,s.jsxs)(n.p,{children:["PCIe \u9a71\u52a8\u7684\u6e90\u4ee3\u7801\u4f4d\u4e8eBSP\u72ec\u7acb\u4ed3\u5e93\u7684 ",(0,s.jsx)(n.code,{children:"drivers/pcie"})," \u76ee\u5f55\u4e0b\uff0c\u5177\u4f53\u7684\u8def\u5f84\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:".\r\n\u251c\u2500\u2500 Kconfig\r\n\u251c\u2500\u2500 Makefile\r\n\u251c\u2500\u2500 pcie-sunxi-dma.c\r\n\u251c\u2500\u2500 pcie-sunxi-dma.h\r\n\u251c\u2500\u2500 pcie-sunxi-ep.c\r\n\u251c\u2500\u2500 pcie-sunxi-plat.c\r\n\u251c\u2500\u2500 pcie-sunxi-rc.c\r\n\u2514\u2500\u2500 pcie-sunxi.h\n"})}),"\n",(0,s.jsx)(n.h2,{id:"pcie-\u4f7f\u7528\u6848\u4f8b",children:"PCIe \u4f7f\u7528\u6848\u4f8b"}),"\n",(0,s.jsx)(n.h3,{id:"nvme-ssd-\u56fa\u6001\u786c\u76d8",children:"NVMe SSD \u56fa\u6001\u786c\u76d8"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"NVMe SSD\u9a71\u52a8\u4e3a\u5185\u6838\u81ea\u6709\u9a71\u52a8\uff0c\u8bf7\u5728\u7cfb\u7edfmenuconfig\u7684\u914d\u7f6e\u9879\u4e2d\uff0c\u6253\u5f00\u5982\u4e0b\u914d\u7f6e\uff1a"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"CONFIG_BLK_DEV_NVME\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u7cfb\u7edf\u542f\u52a8\u8fc7\u7a0b\uff0c\u8bf7\u6ce8\u610f\u6709\u65e0\uff1a ",(0,s.jsx)(n.code,{children:"pcie link up success"})," \u5b57\u6837\uff0c\u82e5\u65e0\uff0c\u8bf4\u660e ",(0,s.jsx)(n.code,{children:"PCIe link"})," \u5931\u8d25\uff0c\u8bf7\u786e\u8ba4 ",(0,s.jsx)(n.code,{children:"phy"})," \u662f\u5426\u6b63\u5e38\u5de5\u4f5c\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u4e0a\u8ff0\u5747\u5b8c\u6210\u4e4b\u540e\uff0c\u53ef\u9a8c\u8bc1PCIe RC \u652f\u6301NVMe SSD \u529f\u80fd\uff1a"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mkfs.ext4  /dev/nvme0n1\r\nmkdir /mnt/nvme\r\nmount -t ext4 /dev/nvme0n1 /mnt/nvme\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"SSD\u529f\u80fd\u8bfb\u5199\u6d4b\u8bd5"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"time dd if=/dev/zero of=/mnt/nvme/a.txt bs=5M count=100\r\ntime dd of=/dev/null if=/mnt/nvme/a.txt bs=5M count=100\n"})}),"\n",(0,s.jsx)(n.h4,{id:"\u65e5\u5fd7\u5206\u6790",children:"\u65e5\u5fd7\u5206\u6790"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[5.649101] sunxi-pcie 4800000.pcie: host bridge /soc@3000000/pcie@4800000 ranges:\r\n[5.657618] sunxi-pcie 4800000.pcie:      err 0x0020000000..0x0020ffffff -> 0x0020000000\r\n[5.666702] sunxi-pcie 4800000.pcie:       IO 0x0021000000..0x0021ffffff -> 0x0021000000\r\n[5.675781] sunxi-pcie 4800000.pcie:      MEM 0x0022000000..0x0028ffffff -> 0x0022000000\r\n[5.890801] sunxi-pcie 4800000.pcie: pcie link up success\r\n[5.896858] sunxi-pcie 4800000.pcie: PCIe speed of Gen2\r\n[5.902780] sunxi-pcie 4800000.pcie: PCI host bridge to bus 0000:00\r\n[5.909809] pci_bus 0000:00: root bus resource [bus 00-ff]\r\n[5.915964] pci_bus 0000:00: root bus resource [??? 0x20000000-0x20ffffff flags 0x0]\r\n[5.924650] pci_bus 0000:00: root bus resource [io  0x0000-0xffffff] (bus address [0x21000000-0x21ffffff])\r\n[5.935476] pci_bus 0000:00: root bus resource [mem 0x22000000-0x28ffffff]\r\n[5.943199] pci 0000:00:00.0: [16c3:abcd] type 01 class 0x060400\r\n[5.949941] pci 0000:00:00.0: reg 0x38: [mem 0x00000000-0x0000ffff pref]\r\n[5.957486] pci 0000:00:00.0: supports D1\r\n[5.961979] pci 0000:00:00.0: PME# supported from D0 D1 D3hot\r\n[5.972328] pci 0000:01:00.0: [1e4b:1202] type 00 class 0x010802\r\n[5.979101] pci 0000:01:00.0: reg 0x10: [mem 0x00000000-0x00003fff 64bit]\r\n[5.986940] pci 0000:01:00.0: PME# supported from D0 D3hot D3cold\r\n[5.993819] pci 0000:01:00.0: 4.000 Gb/s available PCIe bandwidth, limited by 5.0 GT/s PCIe x1 link at 0000:00:00.0 (capable of 31.504 Gb/s with 8.0 GT/s PCIe x4 link)\r\n[6.022335] pci 0000:00:00.0: BAR 8: assigned [mem 0x22000000-0x220fffff]\r\n[6.029986] pci 0000:00:00.0: BAR 6: assigned [mem 0x22100000-0x2210ffff pref]\r\n[6.038091] pci 0000:01:00.0: BAR 0: assigned [mem 0x22000000-0x22003fff 64bit]\r\n[6.046299] pci 0000:00:00.0: PCI bridge to [bus 01-ff]\r\n[6.052158] pci 0000:00:00.0:   bridge window [mem 0x22000000-0x220fffff]\r\n[6.060098] nvme nvme0: pci function 0000:01:00.0\r\n[6.065442] nvme 0000:01:00.0: enabling device (0000 -> 0002)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"log\u4e2d\u89e3\u6790\u51fa\u7684ranges \u8868\u793a\u8d44\u6e90\u914d\u7f6e\u4fe1\u606f\uff0c\u7531dtsi\u6587\u4ef6\u914d\u7f6e\uff0c\u5206\u522b\u5bf9\u5e94\u914d\u7f6e\u7a7a\u95f4\u3001IO\u7a7a\u95f4\u548c\u5185\u5b58\u7a7a\u95f4\u7684\u8d44\u6e90\u5212\u5206\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[5.649101] sunxi-pcie 4800000.pcie: host bridge /soc@3000000/pcie@4800000 ranges:\r\n[5.657618] sunxi-pcie 4800000.pcie:      err 0x0020000000..0x0020ffffff -> 0x0020000000\r\n[5.666702] sunxi-pcie 4800000.pcie:       IO 0x0021000000..0x0021ffffff -> 0x0021000000\r\n[5.675781] sunxi-pcie 4800000.pcie:      MEM 0x0022000000..0x0028ffffff -> 0x0022000000\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"log\u4e2d\u63d0\u793a\u94fe\u8def\u8bad\u7ec3\u5b8c\u6210\u4e14\u6210\u529f\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[5.890801] sunxi-pcie 4800000.pcie: pcie link up success\r\n[5.896858] sunxi-pcie 4800000.pcie: PCIe speed of Gen2\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u8868\u793aRC\u4e0b\u53ef\u7ba1\u7406256\u6761bus\u603b\u7ebf\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[5.902780] sunxi-pcie 4800000.pcie: PCI host bridge to bus 0000:00\r\n[5.909809] pci_bus 0000:00: root bus resource [bus 00-ff]\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["00:00.0 \u8868\u793a\u603b\u7ebf0\uff0c\u5730\u57400\uff0c\u529f\u80fd0\u3002type 01 \u8868\u793a\u6865\u8bbe\u5907\u300216c3",":abcd"," \u8868\u793a\u8bbe\u5907\u7684vendor\u5382\u5546\u53f7\u548cdevice\u8bbe\u5907\u53f7\u3002PME\u8868\u793a\u652f\u6301\u7684\u529f\u8017\u7ba1\u7406\u6a21\u5f0f\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[5.943199] pci 0000:00:00.0: [16c3:abcd] type 01 class 0x060400\r\n[5.949941] pci 0000:00:00.0: reg 0x38: [mem 0x00000000-0x0000ffff pref]\r\n[5.957486] pci 0000:00:00.0: supports D1\r\n[5.961979] pci 0000:00:00.0: PME# supported from D0 D1 D3hot\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"01:00.0 \u8868\u793a\u603b\u7ebf1\uff0c\u5730\u57400\uff0c\u529f\u80fd0\u3002type 00 \u8868\u793aEP\u8bbe\u5907\u30021e4b:1202 \u8868\u793a\u8bbe\u5907\u7684vendor\u5382\u5546\u53f7\u548cdevice\u8bbe\u5907\u53f7\uff0cPME\u8868\u793a\u652f\u6301\u7684\u529f\u8017\u7ba1\u7406\u6a21\u5f0f\u3002\u901a\u8fc7\u679a\u4e3e\u4fe1\u606f\u53ef\u4ee5\u67e5\u770bEP\u9700\u8981\u7684\u5185\u5b58\u7a7a\u95f4\u5927\u5c0f\u662f0x00003fff\uff0c\u652f\u6301x4\uff0c\u53d7\u9650\u4e8eRC\u53ea\u662fx1\uff0c\u5e26\u5bbd\u6027\u80fd\u5982\u4f55\u7b49\u4fe1\u606f\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[5.972328] pci 0000:01:00.0: [1e4b:1202] type 00 class 0x010802\r\n[5.979101] pci 0000:01:00.0: reg 0x10: [mem 0x00000000-0x00003fff 64bit]\r\n[5.986940] pci 0000:01:00.0: PME# supported from D0 D3hot D3cold\r\n[5.993819] pci 0000:01:00.0: 4.000 Gb/s available PCIe bandwidth, limited by 5.0 GT/s PCIe x1 link at 0000:00:00.0 (capable of 31.504 Gb/s with 8.0 GT/s PCIe x4 link)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u901a\u8fc7\u6b64log\u53ef\u4ee5\u770b\u5230\u679a\u4e3e\u540eRC\u5c06SSD\u7684BAR0\u5185\u5b58\u7a7a\u95f4\u6620\u5c04\u52300x22000000-0x22003fff\u8303\u56f4\u5185\uff0c\u4e14\u662f64bit\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[6.038091] pci 0000:01:00.0: BAR 0: assigned [mem 0x22000000-0x22003fff 64bit]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"pcie-\u5e38\u7528\u8c03\u8bd5\u65b9\u6cd5",children:"PCIe \u5e38\u7528\u8c03\u8bd5\u65b9\u6cd5"}),"\n",(0,s.jsx)(n.h3,{id:"pcie\u5e38\u7528\u8c03\u8bd5\u5de5\u5177",children:"PCIe\u5e38\u7528\u8c03\u8bd5\u5de5\u5177"}),"\n",(0,s.jsx)(n.h4,{id:"lspci",children:"lspci"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u9009\u9879"}),(0,s.jsx)(n.th,{children:"\u529f\u80fd"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"-v"}),(0,s.jsx)(n.td,{children:"\u663e\u793aPCIe\u8bbe\u5907\u7684\u7b80\u7565\u4fe1\u606f"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"-vv"}),(0,s.jsx)(n.td,{children:"\u663e\u793aPCIe\u8bbe\u5907\u7684\u8be6\u7ec6\u4fe1\u606f"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"-vvv"}),(0,s.jsx)(n.td,{children:"\u663e\u793aPCIe\u8bbe\u5907\u6240\u6709\u53ef\u89e3\u6790\u7684\u4fe1\u606f"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"-s"}),(0,s.jsx)(n.td,{children:"\u53ea\u663e\u793a\u6307\u5b9a\u7684PCIe\u8bbe\u5907\uff0c\u9700\u8981\u8f93\u5165\u603b\u7ebf\u3001\u63d2\u69fd\u548c\u529f\u80fd\u53f7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"-n"}),(0,s.jsx)(n.td,{children:"\u663e\u793aPCIe\u8bbe\u5907\u7684\u76f8\u5173\u8868\u793a\u7b26\uff0c\u5305\u62ec\u603b\u7ebf\u3001\u63d2\u69fd\u3001\u529f\u80fd\u53f7\u3001\u8bbe\u5907\u7c7b\u6807\u8bc6\u7b26\u3001\u5236\u9020\u5546\u6807\u8bc6\u7b26\u7b49"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"-vvv"}),(0,s.jsx)(n.td,{children:"\u663e\u793aPCIe\u8bbe\u5907\u6240\u6709\u53ef\u89e3\u6790\u7684\u4fe1\u606f"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"-d"}),(0,s.jsx)(n.td,{children:"\u663e\u793a\u6307\u5b9a\u7684PCIe\u8bbe\u5907\uff0c\u9700\u8981\u8f93\u5165\u5236\u9020\u5546\u6807\u8bc6\u7b26\u3001\u8bbe\u5907\u6807\u8bc6\u7b26"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"-x"}),(0,s.jsx)(n.td,{children:"\u4ee516\u8fdb\u5236\u663e\u793a\u914d\u7f6e\u7a7a\u95f4\u7684\u524d64\u5b57\u8282"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"-xx"}),(0,s.jsx)(n.td,{children:"\u4ee516\u8fdb\u5236\u663e\u793a\u914d\u7f6e\u7a7a\u95f4\u7684\u524d256\u5b57\u8282"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"-xxx"}),(0,s.jsx)(n.td,{children:"\u4ee516\u8fdb\u5236\u663e\u793a\u914d\u7f6e\u7a7a\u95f4\u7684\u6574\u4e2a4KB\u6570\u636e"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240330102853118",src:i(62312).Z+"",width:"890",height:"580"})}),"\n",(0,s.jsx)(n.h2,{id:"pcie\u901a\u7528\u6392\u67e5\u624b\u6bb5",children:"PCIe\u901a\u7528\u6392\u67e5\u624b\u6bb5"}),"\n",(0,s.jsx)(n.h3,{id:"\u8f6f\u4ef6\u6392\u67e5\u624b\u6bb5",children:"\u8f6f\u4ef6\u6392\u67e5\u624b\u6bb5"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u68c0\u67e5",(0,s.jsx)(n.code,{children:"phy"}),"\u914d\u7f6e\u662f\u5426\u6b63\u786e\uff0c\u5982\u662f\u5426",(0,s.jsx)(n.code,{children:"enable"}),"\uff0c\u662f\u5426\u5728menuconfig\u914d\u7f6e\u8fc7\u7b49\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u68c0\u67e5",(0,s.jsx)(n.code,{children:"pcie3v3-supply"}),"\u914d\u7f6e\u662f\u5426\u6b63\u786e\uff0c\u5982\u786e\u5b9e\u9700\u8981\u5bf9\u5916\u8bbe\u4f9b\u7535\u65f6\uff0c\u68c0\u67e5\u5bf9\u5e94\u677f\u7ea7\u4fe1\u606f\u662f\u5426\u6b63\u786e\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u68c0\u67e5",(0,s.jsx)(n.code,{children:"reset-gpios"}),"\u548c",(0,s.jsx)(n.code,{children:"wake-gpios"}),"\u914d\u7f6e\u662f\u5426\u6b63\u786e\uff0c\u5982\u786e\u5b9e\u9700\u8981\u5bf9\u5916\u8bbe\u8fdb\u884c\u5f15\u811a\u63a7\u5236\u65f6\uff0c\u68c0\u67e5\u5bf9\u5e94\u677f\u7ea7\u4fe1\u606f\u662f\u5426\u6b63\u786e\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u786c\u4ef6\u6392\u67e5\u624b\u6bb5",children:"\u786c\u4ef6\u6392\u67e5\u624b\u6bb5"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u68c0\u67e5",(0,s.jsx)(n.code,{children:"phy"}),"\u4f9b\u7535\u662f\u5426\u6b63\u5e38\uff0c\u68c0\u67e5\u5916\u8bbeEP\u4f9b\u7535\u662f\u5426\u6b63\u5e38\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u68c0\u67e5",(0,s.jsx)(n.code,{children:"phy"}),"\u65f6\u949f\u6ce2\u5f62\u662f\u5426\u6b63\u5e38\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,s.jsx)(n.h3,{id:"\u94fe\u8def\u8bad\u7ec3\u5931\u8d25",children:"\u94fe\u8def\u8bad\u7ec3\u5931\u8d25"}),"\n",(0,s.jsx)(n.p,{children:"\u95ee\u9898\u73b0\u8c61\uff1a"}),"\n",(0,s.jsxs)(n.p,{children:["\u5916\u8bbeEP\u5728\u4f4d\u65f6\uff0c\u7cfb\u7edflog\u663e\u793a\u9519\u8bef\u63d0\u9192\uff1a",(0,s.jsx)(n.code,{children:"PCIe link failure !"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u95ee\u9898\u5206\u6790\uff1a"}),"\n",(0,s.jsx)(n.p,{children:"\u5916\u8bbe\u4f9b\u7535\u5f02\u5e38\u6216PCB\u8d70\u7ebf\u95ee\u9898\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6392\u67e5\u6b65\u9aa4\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u68c0\u6d4b\u5bf9\u5916\u8bbeEP\u7684\u4f9b\u7535\u662f\u5426\u6ee1\u8db3\u5916\u8bbe\u7684\u8981\u6c42\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6392\u67e5\u5916\u8bbeEP\u7684PCB\u8d70\u7ebf\u662f\u5426\u5f02\u5e38\uff1a\u5982\u8fde\u63a5\u70b9\u9519\u8bef\u7b49\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6392\u67e5\u529f\u7387\u662f\u5426\u591f\uff1a\u5982\u5916\u63a5\u7535\u6e90\u6d4b\u8bd5\u7b49\u3002"}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},52581:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-20240330102119120-91a1819f318d93f163b832e2acf97978.png"},62312:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-20240330102853118-db05aaa06191eaf8cabedc7891a1aec9.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>d});var s=i(67294);const r={},c=s.createContext(r);function d(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);