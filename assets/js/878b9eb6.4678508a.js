"use strict";(self.webpackChunkavaota_docs=self.webpackChunkavaota_docs||[]).push([[5990],{61243:(n,s,l)=>{l.r(s),l.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>x,frontMatter:()=>c,metadata:()=>h,toc:()=>o});var i=l(85893),e=l(11151);const c={},r="HWSPINLOCK - \u786c\u4ef6\u81ea\u65cb\u9501",h={id:"linux-manual/sdk-develop/bsp-driver/hwspinlock",title:"HWSPINLOCK - \u786c\u4ef6\u81ea\u65cb\u9501",description:"HWSPINLOCK\uff08\u786c\u4ef6\u81ea\u65cb\u9501\uff09\u662f\u4e00\u79cd\u9501\u673a\u5236\uff0c\u7528\u4e8e\u5728\u591a\u5904\u7406\u5668\u7cfb\u7edf\u4e2d\u5bf9\u5171\u4eab\u8d44\u6e90\u8fdb\u884c\u4fdd\u62a4\uff0c\u4ee5\u9632\u6b62\u591a\u4e2a\u5904\u7406\u5668\u540c\u65f6\u8bbf\u95ee\u540c\u4e00\u8d44\u6e90\u800c\u5bfc\u81f4\u6570\u636e\u4e0d\u4e00\u81f4\u6216\u7ade\u4e89\u6761\u4ef6\u3002\u786c\u4ef6\u81ea\u65cb\u9501\u901a\u5e38\u7531\u5904\u7406\u5668\u63d0\u4f9b\u652f\u6301\uff0c\u5728\u786c\u4ef6\u5c42\u9762\u5b9e\u73b0\u4e86\u5bf9\u9501\u7684\u83b7\u53d6\u548c\u91ca\u653e\u64cd\u4f5c\uff0c\u4ee5\u51cf\u5c11\u5bf9\u64cd\u4f5c\u7cfb\u7edf\u7684\u5e72\u9884\u548c\u52a0\u901f\u9501\u64cd\u4f5c\u7684\u6267\u884c\u901f\u5ea6\u3002",source:"@site/docs/linux-manual/sdk-develop/bsp-driver/hwspinlock.md",sourceDirName:"linux-manual/sdk-develop/bsp-driver",slug:"/linux-manual/sdk-develop/bsp-driver/hwspinlock",permalink:"/linux-manual/sdk-develop/bsp-driver/hwspinlock",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"linuxManualSidebar",previous:{title:"GPIO - Pinctrl \u5b50\u7cfb\u7edf",permalink:"/linux-manual/sdk-develop/bsp-driver/gpio"},next:{title:"IR RX - \u7ea2\u5916\u63a5\u6536",permalink:"/linux-manual/sdk-develop/bsp-driver/ir-rx"}},d={},o=[{value:"\u6a21\u5757\u914d\u7f6e",id:"\u6a21\u5757\u914d\u7f6e",level:2},{value:"\u9a71\u52a8\u914d\u7f6e",id:"\u9a71\u52a8\u914d\u7f6e",level:3},{value:"\u8bbe\u5907\u6811\u914d\u7f6e",id:"\u8bbe\u5907\u6811\u914d\u7f6e",level:3},{value:"\u6a21\u5757\u4f7f\u7528\u573a\u666f",id:"\u6a21\u5757\u4f7f\u7528\u573a\u666f",level:3},{value:"hwspinlock \u72b6\u6001",id:"hwspinlock-\u72b6\u6001",level:4},{value:"\u5207\u6362\u72b6\u6001",id:"\u5207\u6362\u72b6\u6001",level:4},{value:"\u4e2d\u65ad\u5e94\u7528",id:"\u4e2d\u65ad\u5e94\u7528",level:4},{value:"\u9a71\u52a8\u63a5\u53e3",id:"\u9a71\u52a8\u63a5\u53e3",level:2},{value:"hwspin_lock_register",id:"hwspin_lock_register",level:4},{value:"hwspin_lock_unregister",id:"hwspin_lock_unregister",level:4},{value:"hwspin_lock_request",id:"hwspin_lock_request",level:4},{value:"hwspin_lock_request_specific",id:"hwspin_lock_request_specific",level:4},{value:"hwspin_lock_free",id:"hwspin_lock_free",level:4},{value:"sunxi_hwspinlock_trylock",id:"sunxi_hwspinlock_trylock",level:4},{value:"sunxi_hwspinlock_unlock",id:"sunxi_hwspinlock_unlock",level:4},{value:"sunxi_hwspinlock_relax",id:"sunxi_hwspinlock_relax",level:4},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}];function t(n){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,e.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"hwspinlock---\u786c\u4ef6\u81ea\u65cb\u9501",children:"HWSPINLOCK - \u786c\u4ef6\u81ea\u65cb\u9501"}),"\n",(0,i.jsx)(s.p,{children:"HWSPINLOCK\uff08\u786c\u4ef6\u81ea\u65cb\u9501\uff09\u662f\u4e00\u79cd\u9501\u673a\u5236\uff0c\u7528\u4e8e\u5728\u591a\u5904\u7406\u5668\u7cfb\u7edf\u4e2d\u5bf9\u5171\u4eab\u8d44\u6e90\u8fdb\u884c\u4fdd\u62a4\uff0c\u4ee5\u9632\u6b62\u591a\u4e2a\u5904\u7406\u5668\u540c\u65f6\u8bbf\u95ee\u540c\u4e00\u8d44\u6e90\u800c\u5bfc\u81f4\u6570\u636e\u4e0d\u4e00\u81f4\u6216\u7ade\u4e89\u6761\u4ef6\u3002\u786c\u4ef6\u81ea\u65cb\u9501\u901a\u5e38\u7531\u5904\u7406\u5668\u63d0\u4f9b\u652f\u6301\uff0c\u5728\u786c\u4ef6\u5c42\u9762\u5b9e\u73b0\u4e86\u5bf9\u9501\u7684\u83b7\u53d6\u548c\u91ca\u653e\u64cd\u4f5c\uff0c\u4ee5\u51cf\u5c11\u5bf9\u64cd\u4f5c\u7cfb\u7edf\u7684\u5e72\u9884\u548c\u52a0\u901f\u9501\u64cd\u4f5c\u7684\u6267\u884c\u901f\u5ea6\u3002"}),"\n",(0,i.jsx)(s.p,{children:"HWSPINLOCK\u7684\u529f\u80fd\u5305\u62ec\uff1a"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u5fd9\u7b49\u5f85"}),"\uff1a\u5f53\u4e00\u4e2a\u5904\u7406\u5668\u5c1d\u8bd5\u83b7\u53d6HWSPINLOCK\u65f6\uff0c\u5982\u679c\u9501\u5df2\u7ecf\u88ab\u5176\u4ed6\u5904\u7406\u5668\u6301\u6709\uff0c\u8be5\u5904\u7406\u5668\u5c06\u4f1a\u8fdb\u5165\u4e00\u4e2a\u5fd9\u7b49\u5f85\u7684\u72b6\u6001\uff0c\u4e0d\u65ad\u8f6e\u8be2\u76f4\u5230\u83b7\u53d6\u5230\u9501\u4e3a\u6b62\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u539f\u5b50\u64cd\u4f5c"}),"\uff1aHWSPINLOCK\u7684\u83b7\u53d6\u548c\u91ca\u653e\u901a\u5e38\u662f\u901a\u8fc7\u786c\u4ef6\u63d0\u4f9b\u7684\u539f\u5b50\u64cd\u4f5c\u6765\u5b9e\u73b0\u7684\uff0c\u786e\u4fdd\u5728\u591a\u5904\u7406\u5668\u73af\u5883\u4e0b\u8fd9\u4e9b\u64cd\u4f5c\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u4f4e\u5f00\u9500"}),"\uff1a\u76f8\u8f83\u4e8e\u8f6f\u4ef6\u81ea\u65cb\u9501\uff0c\u5728\u591a\u5904\u7406\u5668\u7cfb\u7edf\u4e2d\u4f7f\u7528HWSPINLOCK\u53ef\u4ee5\u51cf\u5c11\u9501\u64cd\u4f5c\u7684\u5f00\u9500\uff0c\u63d0\u9ad8\u9501\u7684\u6027\u80fd\u548c\u6548\u7387\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u53ef\u5d4c\u5165\u6027"}),"\uff1aHWSPINLOCK\u901a\u5e38\u53ef\u4ee5\u76f4\u63a5\u5d4c\u5165\u5230\u5904\u7406\u5668\u7684\u6307\u4ee4\u96c6\u4e2d\uff0c\u4f7f\u5f97\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u9501\u53d8\u5f97\u66f4\u52a0\u65b9\u4fbf\u548c\u9ad8\u6548\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"\u603b\u7684\u6765\u8bf4\uff0cHWSPINLOCK\u63d0\u4f9b\u4e86\u4e00\u79cd\u9ad8\u6548\u7684\u5e76\u53d1\u63a7\u5236\u673a\u5236\uff0c\u9002\u7528\u4e8e\u5bf9\u4e8e\u9700\u8981\u9891\u7e41\u8bbf\u95ee\u548c\u64cd\u4f5c\u7684\u5171\u4eab\u8d44\u6e90\u8fdb\u884c\u4fdd\u62a4\u7684\u573a\u666f\u3002\u5728\u591a\u5904\u7406\u5668\u7cfb\u7edf\u4e2d\uff0c\u5408\u7406\u4f7f\u7528HWSPINLOCK\u53ef\u4ee5\u6709\u6548\u5730\u907f\u514d\u7ade\u4e89\u6761\u4ef6\u548c\u63d0\u9ad8\u7cfb\u7edf\u7684\u6027\u80fd\u3002"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u670932\u4e2alock\u5355\u4f4d"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u4e24\u79cdlock\u72b6\u6001\uff1aLocked \u548c Unlocked"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u5904\u7406\u5668\u7684Lock\u65f6\u95f4\u662f\u53ef\u9884\u89c1\u7684\uff08\u5c11\u4e8e200cycles\uff09"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u6a21\u5757\u914d\u7f6e",children:"\u6a21\u5757\u914d\u7f6e"}),"\n",(0,i.jsx)(s.h3,{id:"\u9a71\u52a8\u914d\u7f6e",children:"\u9a71\u52a8\u914d\u7f6e"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"HWSPINLOCK Drivers ->\r\n\t<*> Hwspinlock support for Allwinner SoCs\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"image-20240330112409238",src:l(82164).Z+"",width:"1085",height:"220"})}),"\n",(0,i.jsx)(s.h3,{id:"\u8bbe\u5907\u6811\u914d\u7f6e",children:"\u8bbe\u5907\u6811\u914d\u7f6e"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",children:'hwspinlock: hwspinlock@3005000 {\r\n    compatible = "allwinner,sunxi-hwspinlock";\r\n    reg = <0x0 0x3005000 0x0 0x1000>;\r\n    #hwlock-cells = <1>;\r\n    clocks = <&ccu CLK_SPINLOCK>;\r\n    clock-names = "clk_hwspinlock_bus";\r\n    resets = <&ccu RST_BUS_SPINLOCK>;\r\n    reset-names = "rst";\r\n    num-locks = <32>;\r\n    status = "okay";\r\n};\n'})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["compatible: \u7528\u6765\u5339\u914d\u9a71\u52a8\uff0c\u56fa\u5b9a\u4e3a ",(0,i.jsx)(s.code,{children:"allwinner,sunxi-hwspinlock"})]}),"\n",(0,i.jsx)(s.li,{children:"reg: \u5bc4\u5b58\u5668\u5730\u5740"}),"\n",(0,i.jsx)(s.li,{children:"hwlock-cells : \u7528\u4e8e\u6307\u5b9a\u5176\u4ed6\u9a71\u52a8\u4f7f\u7528mbox\u7684\u65f6\u5019\u8981\u4f20\u7684\u53c2\u6570\u4e2a\u6570"}),"\n",(0,i.jsx)(s.li,{children:"clocks: \u65f6\u949f\u6e90"}),"\n",(0,i.jsx)(s.li,{children:"clock-names: \u65f6\u949f\u540d"}),"\n",(0,i.jsx)(s.li,{children:"resets: reset_control\u63a7\u5236\u6a21\u5757\u590d\u4f4d"}),"\n",(0,i.jsx)(s.li,{children:"resets-names: \u6a21\u5757\u590d\u4f4d\u63a7\u5236\u5668\u540d\u79f0"}),"\n",(0,i.jsx)(s.li,{children:"num-locks: hwspinlock\u9501\u4e2a\u6570"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"\u6a21\u5757\u4f7f\u7528\u573a\u666f",children:"\u6a21\u5757\u4f7f\u7528\u573a\u666f"}),"\n",(0,i.jsx)(s.p,{children:"\u5728\u591a\u6838\u7cfb\u7edf\u4e2d\uff0cHwspinlock\u63d0\u4f9b\u4e00\u79cd\u786c\u4ef6\u540c\u6b65\u673a\u5236\uff0clock\u64cd\u4f5c\u53ef\u4ee5\u9632\u6b62\u591a\u5904\u7406\u5668\u540c\u65f6\u5904\u7406\u5171\u4eab\u6570\u636e\u3002\u4fdd\u8bc1\u6570\u636e\u7684\u4e00\u81f4\u6027\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u5f53\u67d0\u5904\u7406\u5668lock spinlock0\uff0c\u72b6\u6001\u9501\u5b9a\u540e\uff0c\u6267\u884c\u7279\u5b9a\u7684\u4ee3\u7801\uff0c\u5b8c\u6210\u540e\u8fdb\u884c\u89e3\u9501\uff0c\u91ca\u653e\u5176\u4ed6\u5904\u7406\u5668\u8fdb\u884c\u8bfb\u5199\u64cd\u4f5c\u3002"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"image-20240330112502355",src:l(49126).Z+"",width:"379",height:"518"})}),"\n",(0,i.jsx)(s.p,{children:"\u5f53\u5904\u7406\u5668\u4f7f\u7528hwspinlock\u7684\u65f6\u5019\uff0c\u9700\u8981\u901a\u8fc7SPINLOCK_STATUS_REG\u5bc4\u5b58\u5668\u8bfb\u53d6hwspinlock\u72b6\u6001\u3002"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"SPINLOCK_STATUS_REG\u5bc4\u5b58\u5668",src:l(31065).Z+"",width:"887",height:"464"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u8bfb\u64cd\u4f5c\uff1a\u8bfbSPINLOCK_LOCK_REG\u8fd4\u56de0\u65f6\uff0c\u8bf4\u660e\u8fdb\u5165locked\u72b6\u6001\uff1b\u518d\u6b21\u8bfbSPINLOCK_STATUS_REG\u8be5\u72b6\u6001\u4f4d\uff0c\u8fd4\u56de1\uff0c\u8bf4\u660e\u5df2\u7ecf\u6210\u4e3alocked\u72b6\u6001"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u5199\u64cd\u4f5c\uff1a\u5f53spinlock\u5904\u4e8elocked\u72b6\u6001\u65f6\uff0c\u5199SPINLOCK_LOCK_REG\u4e3a0\u53ef\u8f6c\u5316\u4e3aunlocked\u72b6\u6001\uff0c\u5176\u4ed6\u72b6\u6001\u5199\u64cd\u4f5c\u5747\u65e0\u6548"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"reset\u64cd\u4f5c\uff1areset\u64cd\u4f5c\u540e\uff0c\u9ed8\u8ba4\u4e3aunlocked"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"SPINLOCK\u72b6\u6001\u673a\u8f6c\u6362\u56fe",src:l(29297).Z+"",width:"559",height:"251"})}),"\n",(0,i.jsx)(s.h4,{id:"hwspinlock-\u72b6\u6001",children:"hwspinlock \u72b6\u6001"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u5f53spinlock\u5904\u4e8eunlocked\u72b6\u6001\u65f6\uff0c\u51990/1\u5747\u65e0\u6548"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u5f53spinlock\u5904\u4e8eunlocked\u72b6\u6001\uff0c\u8bfb\u64cd\u4f5c\uff0c\u8fd4\u56de0\u8bf4\u660e\u8fdb\u5165locked\u72b6\u6001"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u5f53spinlock\u5904\u4e8elocked\u72b6\u6001\u65f6\uff0c\u51990\u53ef\u8f6c\u6362\u4e3aunlocked\u72b6\u6001"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u5f53spinlock\u5904\u4e8elocked\u72b6\u6001\uff0c\u51991\u65e0\u6548"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u5f53spinlock\u5904\u4e8elocked\u72b6\u6001\u65f6\uff0c\u518d\u6b21\u8bfb\u8be5\u72b6\u6001\u4f4d\uff0c\u8fd4\u56de1\uff0c\u8bf4\u660e\u5df2\u7ecf\u662flocked\u72b6\u6001"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"reset\u64cd\u4f5c\u540e\u9ed8\u8ba4\u4e3aunlocked\u72b6\u6001"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"\u5f53Free lock\u52a8\u4f5c\u4ea7\u751f(\u5373lock\u72b6\u6001\u7531locked\u53d8\u4e3aunlocked\u65f6)\uff0c\u5373\u53ef\u4ea7\u751f\u4e2d\u65ad"}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"\u5207\u6362\u72b6\u6001",children:"\u5207\u6362\u72b6\u6001"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"SPINLOCKN_LOCK_REG(0~31)\u8bfb0\uff0c\u8fdb\u5165locked\u72b6\u6001"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u6267\u884c\u5e94\u7528\u4ee3\u7801\uff0c\u5f53\u524dSPINLOCK_STATUS_REG\u5bf9\u5e94\u4f4d\u72b6\u6001\u4e3a1"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"SPINLOCKN_LOCK_REG(0~31)\u51990\uff0c\u8fdb\u5165unlocked\u72b6\u6001\uff0c\u91ca\u653e\u76f8\u5e94\u7684spinlock"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"\u4e2d\u65ad\u5e94\u7528",children:"\u4e2d\u65ad\u5e94\u7528"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u9996\u5148\u4f7f\u80fd\u4e2d\u65ad\u5bc4\u5b58\u5668SPINLOCK_IRQ_EN_REG;\u5c06\u5bf9\u5e94\u7684\u901a\u9053\u4f4d\u7f6e1\u5f00\u542f\u4e2d\u65ad"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u5f53\u9501n\u88ab\u91ca\u653e\uff0c\u4ea7\u751f\u4e2d\u65ad\uff0cSPINLOCK_IRQ_STA_REG\u7684\u7b2c n bit\u4f4d\u7f6e1\uff0c\u901a\u77e5\u5176\u4ed6CPU\u6267\u884c\u4e2d\u65ad\u5904\u7406\u51fd\u6570\uff0c\u4e2d\u65ad\u5904\u7406\u51fd\u6570\u4e2d\u4f1a\u68c0\u6d4b32\u4e2a\u786c\u4ef6\u9501\u5bf9\u5e94\u7684\u4e2d\u65ad\u72b6\u6001\u5bc4\u5b58\u5668\uff08SPINLOCK_IRQ_STA_REG\uff09\u6bcf\u4e2abit\u4f4d\uff0c\u5982\u679c\u68c0\u6d4b\u5230\u81ea\u5df1\u7533\u8bf7\u7684n\u901a\u9053\u7684lock\u5df2\u7ecf\u88abfree\u91ca\u653e\uff0c\u5219\u62ff\u5230\u9501"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u6267\u884c\u5b8c\u4e2d\u65ad\u5904\u7406\u51fd\u6570\uff0c\u6e05pending\u4f4d"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["\u5185\u6838\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7684hwspinlock\u63a5\u53e3\uff0c\u90fd\u5b9a\u4e49\u5728\u4e86",(0,i.jsx)(s.code,{children:"drivers/hwspinlock/hwspinlock_core.c"}),"\uff0c\u4e0b\u9762\u4ecb\u7ecd\u4e00\u4e9b\u91cd\u8981\u7684hwspinlock\u63a5\u53e3\u3002"]}),"\n",(0,i.jsx)(s.h2,{id:"\u9a71\u52a8\u63a5\u53e3",children:"\u9a71\u52a8\u63a5\u53e3"}),"\n",(0,i.jsx)(s.h4,{id:"hwspin_lock_register",children:"hwspin_lock_register"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u51fd\u6570\u539f\u578b\uff1a",(0,i.jsx)(s.code,{children:"int hwspin_lock_register(struct hwspinlock_device *bank, struct device *dev, const struct hwspinlock_ops *ops, int base_id, int num_locks)"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u529f\u80fd\u63cf\u8ff0\uff1a\u6ce8\u518c\u4e00\u4e2a\u65b0\u7684\u786c\u4ef6\u81ea\u65cb\u9501\u8bbe\u5907\u5b9e\u4f8b"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u53c2\u6570\u8bf4\u660e\uff1a"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"bank: hwspinlock \u8bbe\u5907\uff0c\u901a\u5e38\u63d0\u4f9b\u5927\u91cf\u786c\u4ef6\u9501"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"dev\uff1a\u652f\u6301\u7684\u8bbe\u5907"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"ops\uff1a\u6b64\u8bbe\u5907\u7684 hwspinlock \u5904\u7406\u7a0b\u5e8f"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"base_id\uff1a\u8fd9\u4e2abank\u4e2d\u7b2c\u4e00\u4e2a\u786c\u4ef6\u81ea\u65cb\u9501\u7684id"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"num_locks\uff1a\u8fd9\u4e2a\u8bbe\u5907\u80fd\u63d0\u4f9b\u7684hwspinlock\u7684\u6570\u91cf"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u8fd4\u56de\u503c\uff1a\u6210\u529f\u65f6\u8fd4\u56de 0\uff0c\u5931\u8d25\u65f6\u8fd4\u56de\u9519\u8bef\u7801"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"hwspin_lock_unregister",children:"hwspin_lock_unregister"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u51fd\u6570\u539f\u578b\uff1a",(0,i.jsx)(s.code,{children:"int hwspin_lock_unregister(struct hwspinlock_device *bank)"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u529f\u80fd\u63cf\u8ff0\uff1a\u6ce8\u9500\u786c\u4ef6\u81ea\u65cb\u9501\u8bbe\u5907"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u53c2\u6570\u8bf4\u660e\uff1a"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"bank: hwspinlock \u8bbe\u5907\uff0c\u901a\u5e38\u63d0\u4f9b\u5927\u91cf\u786c\u4ef6\u9501"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u8fd4\u56de\u503c\uff1a\u6210\u529f\u65f6\u8fd4\u56de 0\uff0c\u5931\u8d25\u65f6\u8fd4\u56de\u9519\u8bef\u7801"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"hwspin_lock_request",children:"hwspin_lock_request"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u51fd\u6570\u539f\u578b\uff1a",(0,i.jsx)(s.code,{children:"struct hwspinlock *hwspin_lock_request(void)"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u529f\u80fd\u63cf\u8ff0\uff1a\u8bf7\u6c42 hwspinlock\u3002hwspinlock\u8bbe\u5907\u7528\u6237\u8c03\u7528\u6b64\u51fd\u6570\uff0c\u4ee5\u4fbf\u4e3a\u4ed6\u4eec\u52a8\u6001\u5206\u914d\u672a\u4f7f\u7528\u7684 hwspinlock,",(0,i.jsx)(s.strong,{children:"(\u52a8\u6001\u7533\u8bf7)"}),"\u3002\u5e94\u8be5\u4ece\u8fdb\u7a0b\u4e0a\u4e0b\u6587\u8c03\u7528\uff08\u53ef\u80fd\u7761\u7720\uff09\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u53c2\u6570\u8bf4\u660e\uff1a\u65e0"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u8fd4\u56de\u503c\uff1a\u8fd4\u56de\u5206\u914d\u7684 hwspinlock \u7684\u5730\u5740\uff0c\u6216\u5728\u9519\u8bef\u65f6\u8fd4\u56de NULL"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"hwspin_lock_request_specific",children:"hwspin_lock_request_specific"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u51fd\u6570\u539f\u578b\uff1a",(0,i.jsx)(s.code,{children:"struct hwspinlock *hwspin_lock_request_specific(unsigned int id)"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u529f\u80fd\u63cf\u8ff0\uff1a\u8bf7\u6c42\u7279\u5b9a\u7684 hwspinlock\uff0c\u7528\u6237\u5e94\u8be5\u8c03\u7528\u6b64\u51fd\u6570\uff0c\u4ee5\u4fbf\u4e3a\u4ed6\u4eec\u5206\u914d\u7279\u5b9a\u7684 hwspinlock,",(0,i.jsx)(s.strong,{children:"(\u9759\u6001\u7533\u8bf7)"}),"\u3002\u5e94\u8be5\u4ece\u8fdb\u7a0b\u4e0a\u4e0b\u6587\u8c03\u7528\uff08\u53ef\u80fd\u7761\u7720\uff09\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u53c2\u6570\u8bf4\u660e\uff1a"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"id\uff1a\u8bf7\u6c42\u7684\u7279\u5b9a hwspinlock \u7684\u7d22\u5f15"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u8fd4\u56de\u503c\uff1a\u8fd4\u56de\u5206\u914d\u7684 hwspinlock \u7684\u5730\u5740\uff0c\u6216\u5728\u9519\u8bef\u65f6\u8fd4\u56de NULL"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"hwspin_lock_free",children:"hwspin_lock_free"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u51fd\u6570\u539f\u578b\uff1a",(0,i.jsx)(s.code,{children:"int hwspin_lock_free(struct hwspinlock *hwlock)"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u529f\u80fd\u63cf\u8ff0\uff1a\u91ca\u653e\u7279\u5b9a\u7684 hwspinlock\u3002\u5e94\u8be5\u4ece\u8fdb\u7a0b\u4e0a\u4e0b\u6587\u8c03\u7528\uff08\u53ef\u80fd\u7761\u7720\uff09"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u53c2\u6570\u8bf4\u660e\uff1a"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"hwlock\uff1a\u8981\u91ca\u653e\u7684\u7279\u5b9ahwspinlock\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u8fd4\u56de\u503c\uff1a\u6210\u529f\u65f6\u8fd4\u56de 0\uff0c\u5931\u8d25\u65f6\u8fd4\u56de\u9519\u8bef\u7801"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"sunxi_hwspinlock_trylock",children:"sunxi_hwspinlock_trylock"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u51fd\u6570\u539f\u578b\uff1a",(0,i.jsx)(s.code,{children:"static int sunxi_hwspinlock_trylock(struct hwspinlock *lock)"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u529f\u80fd\u63cf\u8ff0\uff1a\u83b7\u53d6\u9501\u8d44\u6e90"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u53c2\u6570\u8bf4\u660e\uff1a"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"lock\uff1a\u8981\u83b7\u53d6\u7684\u7279\u5b9ahwspinlock\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u8fd4\u56de\u503c\uff1a\u6210\u529f\u65f6\u8fd4\u56de 1\uff0c\u5931\u8d25\u65f6\u8fd4\u56de0"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"sunxi_hwspinlock_unlock",children:"sunxi_hwspinlock_unlock"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u51fd\u6570\u539f\u578b\uff1a",(0,i.jsx)(s.code,{children:"static void sunxi_hwspinlock_unlock(struct hwspinlock *lock)"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u529f\u80fd\u63cf\u8ff0\uff1a\u91ca\u653e\u9501\u8d44\u6e90"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u53c2\u6570\u8bf4\u660e\uff1a"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"lock\uff1a\u8981\u91ca\u653e\u7684\u7279\u5b9ahwspinlock\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u8fd4\u56de\u503c\uff1a\u65e0"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"sunxi_hwspinlock_relax",children:"sunxi_hwspinlock_relax"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u51fd\u6570\u539f\u578b\uff1a",(0,i.jsx)(s.code,{children:"static void sunxi_hwspinlock_relax(struct hwspinlock *lock)"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u529f\u80fd\u63cf\u8ff0\uff1a\u83b7\u53d6\u9501\u8d44\u6e90"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u53c2\u6570\u8bf4\u660e\uff1a"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u8fd4\u56de\u503c\uff1a\u65e0"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,i.jsxs)(s.p,{children:["\u5728\u4e0b\u8ff0\u793a\u4f8b\u4e2d\uff0c",(0,i.jsx)(s.code,{children:"USE_HWSPINLOCK_ID"})," \u8868\u793a\u6211\u4eec\u9700\u8981\u4f7f\u7528\u7684 ",(0,i.jsx)(s.code,{children:"hwspinlock"})," \u7684ID\u53f7\uff0c\u5728\u4e0a\u9501\u524d\u5148\u8c03\u7528",(0,i.jsx)(s.code,{children:"hwspin_lock_request_specific()"})," \u83b7\u53d6\u9501\u8d44\u6e90\uff0c\u7136\u540e\u8c03\u7528 ",(0,i.jsx)(s.code,{children:"__hwspin_trylock()"}),"\u6267\u884c\u4e0a\u9501\u884c\u4e3a\uff1b\u5728\u89e3\u9501\u65f6\u9700\u8981\u5148\u8c03\u7528 ",(0,i.jsx)(s.code,{children:"__hwspin_unlock()"}),"\u89e3\u9501\uff0c\u518d\u8c03\u7528",(0,i.jsx)(s.code,{children:"hwspin_lock_free()"}),"\u63a5\u53e3\u91ca\u653e\u9501\u8d44\u6e90\u3002"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",children:'#define\tUSE_HWSPINLOCK_ID\t10\r\n\r\nstruct sunxi_hwspinlock_test {\r\n        struct hwspinlock *hwlock;\r\n        unsigned long flag;\r\n};\r\n\r\nstatic int sunxi_hwspinlock_taken(struct sunxi_hwspinlock_test *hwlock_test)\r\n{\r\n\tint err;\r\n\r\n\tif (!hwlock_test->hwlock) {\r\n\t\thwlock_test->hwlock = hwspin_lock_request_specific(USE_HWSPINLOCK_ID);\r\n\t\tif (!hwlock_test->hwlock) {\r\n\t\t\tpr_err("Lock request is failed!\\n");\r\n\t\t\treturn -EIO;\r\n\t\t}\r\n\t}\r\n\r\n\terr =  __hwspin_trylock(hwlock_test->hwlock, HWLOCK_IN_ATOMIC, &hwlock_test->flag);\r\n\tif (err){\r\n\t\tpr_err("lock is already taken!\\n");\r\n\t\treturn -EBUSY;\r\n\t}\r\n\tpr_info("lock-%d is taken successfully!\\n", USE_HWSPINLOCK_ID);\r\n\r\n\treturn err;\r\n}\r\n\r\nstatic int sunxi_hwspinlock_free(struct sunxi_hwspinlock_test *hwlock_test)\r\n{\r\n\tint err;\r\n\r\n\tif (!hwlock_test->hwlock) {\r\n\t\tpr_err("lock is already free!\\n");\r\n\t\treturn -EIO;\r\n\t}\r\n\t__hwspin_unlock(hwlock_test->hwlock, HWLOCK_IN_ATOMIC, &hwlock_test->flag);\r\n\r\n\terr = hwspin_lock_free(hwlock_test->hwlock);\r\n\tif (err < 0) {\r\n\t\tpr_info("Lock release failed!\\n");\r\n\t\treturn -EIO;\r\n\t}\r\n\tpr_info("Lock-%d free successfully!\\n", USE_HWSPINLOCK_ID);\r\n\r\n\treturn err;\r\n}\n'})})]})}function x(n={}){const{wrapper:s}={...(0,e.a)(),...n.components};return s?(0,i.jsx)(s,{...n,children:(0,i.jsx)(t,{...n})}):t(n)}},31065:(n,s,l)=>{l.d(s,{Z:()=>i});const i=l.p+"assets/images/3-ceb7453a8d76ccb1e08771643b78939f.png"},29297:(n,s,l)=>{l.d(s,{Z:()=>i});const i=l.p+"assets/images/4-cf759863a073978149c256a4da86c2c3.png"},82164:(n,s,l)=>{l.d(s,{Z:()=>i});const i=l.p+"assets/images/image-20240330112409238-7c964cc3846063dff9b8558d61cede1d.png"},49126:(n,s,l)=>{l.d(s,{Z:()=>i});const i=l.p+"assets/images/image-20240330112502355-09efbdd6fd11e91ce77da3c0646d99f8.png"},11151:(n,s,l)=>{l.d(s,{Z:()=>h,a:()=>r});var i=l(67294);const e={},c=i.createContext(e);function r(n){const s=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function h(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:r(n.components),i.createElement(c.Provider,{value:s},n.children)}}}]);