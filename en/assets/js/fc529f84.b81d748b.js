"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[5541],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var l=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},g=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=p(n),d=o,m=g["".concat(s,".").concat(d)]||g[d]||c[d]||r;return n?l.createElement(m,a(a({ref:t},u),{},{components:n})):l.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<r;p++)a[p]=n[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}g.displayName="MDXCreateElement"},582:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return g}});var l=n(7462),o=n(3366),r=(n(7294),n(3905)),a=["components"],i={sidebar_position:1},s="Logx",p={unversionedId:"extension/logx",id:"extension/logx",title:"Logx",description:"\u4f7f\u7528\u793a\u4f8b",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/extension/logx.md",sourceDirName:"extension",slug:"/extension/logx",permalink:"/en/docs/extension/logx",editUrl:"https://github.com/zhoushuguang/zero-doc/tree/main/website/i18n/en/docusaurus-plugin-content-docs/current/extension/logx.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Highly Concurrent Microservices",permalink:"/en/docs/extension/shorturl"},next:{title:"Bloom filter",permalink:"/en/docs/extension/bloom"}},u=[{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",children:[],level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",children:[],level:2},{value:"Level",id:"level",children:[],level:2},{value:"\u65e5\u5fd7\u6a21\u5f0f",id:"\u65e5\u5fd7\u6a21\u5f0f",children:[],level:2},{value:"\u7981\u7528\u65e5\u5fd7",id:"\u7981\u7528\u65e5\u5fd7",children:[],level:2},{value:"\u5173\u95ed\u65e5\u5fd7",id:"\u5173\u95ed\u65e5\u5fd7",children:[],level:2},{value:"Duration",id:"duration",children:[],level:2},{value:"TraceLog",id:"tracelog",children:[],level:2},{value:"SysLog",id:"syslog",children:[],level:2},{value:"Mode",id:"mode",children:[],level:2},{value:"Path",id:"path",children:[],level:2},{value:"Level",id:"level-1",children:[],level:2},{value:"Compress",id:"compress",children:[],level:2},{value:"KeepDays",id:"keepdays",children:[],level:2},{value:"StackCooldownMillis",id:"stackcooldownmillis",children:[],level:2}],c={toc:u};function g(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"logx"},"Logx"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var c logx.LogConf\n// \u4ece yaml \u6587\u4ef6\u4e2d \u521d\u59cb\u5316\u914d\u7f6e\nconf.MustLoad("config.yaml", &c)\n\n// logx \u6839\u636e\u914d\u7f6e\u521d\u59cb\u5316\nlogx.MustSetup(c)\n\nlogx.Info("This is info!")\nlogx.Infof("This is %s!", "info")\n\nlogx.Error("This is error!")\nlogx.Errorf("this is %s!", "error")\n\nlogx.Close()\n')),(0,r.kt)("h2",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,r.kt)("p",null,"logx \u6709\u5f88\u591a\u53ef\u4ee5\u914d\u7f6e\u9879\uff0c\u53ef\u4ee5\u53c2\u8003 logx.LogConf \u4e2d\u7684\u5b9a\u4e49\u3002\u76ee\u524d\u53ef\u4ee5\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"logx.MustSetUp(c)\n")),(0,r.kt)("p",null,"\u8fdb\u884c\u521d\u59cb\u5316\u914d\u7f6e\uff0c\u5982\u679c\u6ca1\u6709\u8fdb\u884c\u521d\u59cb\u5316\u914d\u7f6e\uff0c\u6240\u6709\u7684\u914d\u7f6e\u5c06\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e\u3002"),(0,r.kt)("h2",{id:"level"},"Level"),(0,r.kt)("p",null,"logx \u652f\u6301\u7684\u6253\u5370\u65e5\u5fd7\u7ea7\u522b\u6709\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"alert"),(0,r.kt)("li",{parentName:"ul"},"info"),(0,r.kt)("li",{parentName:"ul"},"error"),(0,r.kt)("li",{parentName:"ul"},"severe"),(0,r.kt)("li",{parentName:"ul"},"fatal"),(0,r.kt)("li",{parentName:"ul"},"slow"),(0,r.kt)("li",{parentName:"ul"},"stat")),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u5bf9\u5e94\u7684\u65b9\u6cd5\u6253\u5370\u51fa\u5bf9\u5e94\u7ea7\u522b\u7684\u65e5\u5fd7\u3002\n\u540c\u65f6\u4e3a\u4e86\u65b9\u4fbf\u8c03\u8bd5\uff0c\u7ebf\u4e0a\u4f7f\u7528\uff0c\u53ef\u4ee5\u52a8\u6001\u8c03\u6574\u65e5\u5fd7\u6253\u5370\u7ea7\u522b\uff0c\u5176\u4e2d\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},"logx.SetLevel(uint32)")," \u8fdb\u884c\u7ea7\u522b\u8bbe\u7f6e\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u521d\u59cb\u5316\u8fdb\u884c\u8bbe\u7f6e\u3002\u76ee\u524d\u652f\u6301\u7684\u53c2\u6570\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"const (\n    // \u6253\u5370\u6240\u6709\u7ea7\u522b\u7684\u65e5\u5fd7\n    InfoLevel = iota\n    // \u6253\u5370 errors, slows, stacks \u65e5\u5fd7\n    ErrorLevel\n    // \u4ec5\u6253\u5370 severe \u7ea7\u522b\u65e5\u5fd7\n    SevereLevel\n)\n")),(0,r.kt)("h2",{id:"\u65e5\u5fd7\u6a21\u5f0f"},"\u65e5\u5fd7\u6a21\u5f0f"),(0,r.kt)("p",null,"\u76ee\u524d\u65e5\u5fd7\u6253\u5370\u6a21\u5f0f\u4e3b\u8981\u5206\u4e3a2\u79cd\uff0c\u4e00\u79cd\u6587\u4ef6\u8f93\u51fa\uff0c\u4e00\u79cd\u63a7\u5236\u53f0\u8f93\u51fa\u3002\u63a8\u8350\u65b9\u5f0f\uff0c\u5f53\u91c7\u7528 k8s\uff0cdocker \u7b49\u90e8\u7f72\u65b9\u5f0f\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u5c06\u65e5\u5fd7\u8f93\u51fa\u5230\u63a7\u5236\u53f0\uff0c\u4f7f\u7528\u65e5\u5fd7\u6536\u96c6\u5668\u6536\u96c6\u5bfc\u5165\u81f3 es \u8fdb\u884c\u65e5\u5fd7\u5206\u6790\u3002\u5982\u679c\u662f\u76f4\u63a5\u90e8\u7f72\u65b9\u5f0f\uff0c\u53ef\u4ee5\u91c7\u7528\u6587\u4ef6\u8f93\u51fa\u65b9\u5f0f\uff0clogx \u4f1a\u81ea\u52a8\u5728\u6307\u5b9a\u6587\u4ef6\u76ee\u5f55\u521b\u5efa\u5bf9\u5e94 5 \u4e2a\u5bf9\u5e94\u7ea7\u522b\u7684\u7684\u65e5\u5fd7\u6587\u4ef6\u4fdd\u5b58\u65e5\u5fd7\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 access.log\n\u251c\u2500\u2500 error.log\n\u251c\u2500\u2500 severe.log\n\u251c\u2500\u2500 slow.log\n\u2514\u2500\u2500 stat.log\n")),(0,r.kt)("p",null,"\u540c\u65f6\u4f1a\u6309\u7167\u81ea\u7136\u65e5\u8fdb\u884c\u6587\u4ef6\u5206\u5272\uff0c\u5f53\u8d85\u8fc7\u6307\u5b9a\u914d\u7f6e\u5929\u6570\uff0c\u4f1a\u5bf9\u65e5\u5fd7\u6587\u4ef6\u8fdb\u884c\u81ea\u52a8\u5220\u9664\uff0c\u6253\u5305\u7b49\u64cd\u4f5c\u3002"),(0,r.kt)("h2",{id:"\u7981\u7528\u65e5\u5fd7"},"\u7981\u7528\u65e5\u5fd7"),(0,r.kt)("p",null,"\u5982\u679c\u4e0d\u9700\u8981\u65e5\u5fd7\u6253\u5370\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"logx.Close()")," \u5173\u95ed\u65e5\u5fd7\u8f93\u51fa\u3002\u6ce8\u610f\uff0c\u5f53\u7981\u7528\u65e5\u5fd7\u8f93\u51fa\uff0c\u5c06\u65e0\u6cd5\u5728\u6b21\u6253\u5f00\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("strong",{parentName:"p"},"logx.RotateLogger")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"logx.DailyRotateRule")," \u7684\u5b9e\u73b0\u3002"),(0,r.kt)("h2",{id:"\u5173\u95ed\u65e5\u5fd7"},"\u5173\u95ed\u65e5\u5fd7"),(0,r.kt)("p",null,"\u56e0\u4e3a logx \u91c7\u7528\u5f02\u6b65\u8fdb\u884c\u65e5\u5fd7\u8f93\u51fa\uff0c\u5982\u679c\u6ca1\u6709\u6b63\u5e38\u5173\u95ed\u65e5\u5fd7\uff0c\u53ef\u80fd\u4f1a\u9020\u6210\u90e8\u5206\u65e5\u5fd7\u4e22\u5931\u7684\u60c5\u51b5\u3002\u5fc5\u987b\u5728\u7a0b\u5e8f\u9000\u51fa\u7684\u5730\u65b9\u5173\u95ed\u65e5\u5fd7\u8f93\u51fa\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"logx.Close()\n")),(0,r.kt)("p",null,"\u6846\u67b6\u4e2d rest \u548c zrpc \u7b49\u5927\u90e8\u5206\u5730\u65b9\u5df2\u7ecf\u505a\u597d\u4e86\u65e5\u5fd7\u914d\u7f6e\u548c\u5173\u95ed\u76f8\u5173\u64cd\u4f5c\uff0c\u7528\u6237\u53ef\u4ee5\u4e0d\u7528\u5173\u5fc3\u3002\n\u540c\u65f6\u6ce8\u610f\uff0c\u5f53\u5173\u95ed\u65e5\u5fd7\u8f93\u51fa\u4e4b\u540e\uff0c\u5c06\u65e0\u6cd5\u5728\u6b21\u6253\u5370\u65e5\u5fd7\u4e86\u3002"),(0,r.kt)("p",null,"\u63a8\u8350\u5199\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/zeromicro/go-zero/core/proc"\n\n// grace close log\nproc.AddShutdownListener(func() {\n    logx.Close()\n})\n')),(0,r.kt)("h2",{id:"duration"},"Duration"),(0,r.kt)("p",null,"\u6211\u4eec\u6253\u5370\u65e5\u5fd7\u7684\u65f6\u5019\u53ef\u80fd\u9700\u8981\u6253\u5370\u8017\u65f6\u60c5\u51b5\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"logx.WithDuration(time.Duration)"),", \u53c2\u8003\u5982\u4e0b\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'startTime := timex.Now()\n// \u6570\u636e\u5e93\u67e5\u8be2\nrows, err := conn.Query(q, args...)\nduration := timex.Since(startTime)\nif duration > slowThreshold {\n    logx.WithDuration(duration).Slowf("[SQL] query: slowcall - %s", stmt)\n} else {\n    logx.WithDuration(duration).Infof("sql query: %s", stmt)\n}\n')),(0,r.kt)("p",null,"\u4f1a\u8f93\u51fa\u5982\u4e0b\u683c\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"@timestamp":"2020-09-12T01:22:55.552+08","level":"info","duration":"3.0ms","content":"sql query:..."}\n{"@timestamp":"2020-09-12T01:22:55.552+08","level":"slow","duration":"500ms","content":"[SQL] query: slowcall - ..."}\n')),(0,r.kt)("p",null,"\u8fd9\u6837\u5c31\u53ef\u4ee5\u5f88\u5bb9\u6613\u7edf\u8ba1\u51fa\u6162 sql \u76f8\u5173\u4fe1\u606f\u3002"),(0,r.kt)("h2",{id:"tracelog"},"TraceLog"),(0,r.kt)("p",null,"tracingEntry \u662f\u4e3a\u4e86\u94fe\u8def\u8ffd\u8e2a\u65e5\u5fd7\u8f93\u51fa\u5b9a\u5236\u7684\u3002\u53ef\u4ee5\u6253\u5370 context \u4e2d\u7684 traceId \u548c spanId \u4fe1\u606f\uff0c\u914d\u5408\u6211\u4eec\u7684 ",(0,r.kt)("strong",{parentName:"p"},"rest")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"zrpc")," \u5f88\u5bb9\u6613\u5b8c\u6210\u94fe\u8def\u65e5\u5fd7\u7684\u76f8\u5173\u6253\u5370\u3002\u793a\u4f8b\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'logx.WithContext(context.Context).Info("This is info!")\n')),(0,r.kt)("h2",{id:"syslog"},"SysLog"),(0,r.kt)("p",null,"\u5e94\u7528\u4e2d\u53ef\u80fd\u6709\u90e8\u5206\u91c7\u7528\u7cfb\u7edf log \u8fdb\u884c\u65e5\u5fd7\u6253\u5370\uff0clogx \u540c\u6837\u5c01\u88c5\u65b9\u6cd5\uff0c\u5f88\u5bb9\u6613\u5c06 log \u76f8\u5173\u7684\u65e5\u5fd7\u6536\u96c6\u5230 logx \u4e2d\u6765\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"logx.CollectSysLog()\n")),(0,r.kt)("h1",{id:"\u65e5\u5fd7\u914d\u7f6e\u76f8\u5173"},"\u65e5\u5fd7\u914d\u7f6e\u76f8\u5173"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"LogConf")," \u5b9a\u4e49\u65e5\u5fd7\u7cfb\u7edf\u6240\u9700\u7684\u57fa\u672c\u914d\u7f6e"),(0,r.kt)("p",null,"\u5b8c\u6574\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type LogConf struct {\n    ServiceName         string `json:",optional"`\n    Mode                string `json:",default=console,options=console|file|volume"`\n    Path                string `json:",default=logs"`\n    Level               string `json:",default=info,options=info|error|severe"`\n    Compress            bool   `json:",optional"`\n    KeepDays            int    `json:",optional"`\n    StackCooldownMillis int    `json:",default=100"`\n}\n')),(0,r.kt)("h2",{id:"mode"},"Mode"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mode")," \u5b9a\u4e49\u4e86\u65e5\u5fd7\u6253\u5370\u7684\u65b9\u5f0f\u3002\u9ed8\u8ba4\u7684\u6a21\u5f0f\u662f ",(0,r.kt)("strong",{parentName:"p"},"console"),"\uff0c \u6253\u5370\u5230\u63a7\u5236\u53f0\u4e0a\u9762\u3002"),(0,r.kt)("p",null,"\u76ee\u524d\u652f\u6301\u7684\u6a21\u5f0f\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"console",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6253\u5370\u5230\u63a7\u5236\u53f0"))),(0,r.kt)("li",{parentName:"ul"},"file",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6253\u5370\u5230\u6307\u5b9a\u8def\u5f84\u4e0b\u7684access.log, error.log, stat.log\u7b49\u6587\u4ef6\u91cc"))),(0,r.kt)("li",{parentName:"ul"},"volume",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e3a\u4e86\u5728k8s\u5185\u6253\u5370\u5230mount\u8fdb\u6765\u7684\u5b58\u50a8\u4e0a\uff0c\u56e0\u4e3a\u591a\u4e2apod\u53ef\u80fd\u4f1a\u8986\u76d6\u76f8\u540c\u7684\u6587\u4ef6\uff0cvolume\u6a21\u5f0f\u81ea\u52a8\u8bc6\u522bpod\u5e76\u6309\u7167pod\u5206\u5f00\u5199\u5404\u81ea\u7684\u65e5\u5fd7\u6587\u4ef6")))),(0,r.kt)("h2",{id:"path"},"Path"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Path")," \u5b9a\u4e49\u4e86\u6587\u4ef6\u65e5\u5fd7\u7684\u8f93\u51fa\u8def\u5f84\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"logs"),"\u3002"),(0,r.kt)("h2",{id:"level-1"},"Level"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Level")," \u5b9a\u4e49\u4e86\u65e5\u5fd7\u6253\u5370\u7ea7\u522b\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"info"),"\u3002\n\u76ee\u524d\u652f\u6301\u7684\u7ea7\u522b\u5982\u4e0b:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"info"),(0,r.kt)("li",{parentName:"ul"},"error"),(0,r.kt)("li",{parentName:"ul"},"severe")),(0,r.kt)("h2",{id:"compress"},"Compress"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Compress")," \u5b9a\u4e49\u4e86\u65e5\u5fd7\u662f\u5426\u9700\u8981\u538b\u7f29\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"false"),"\u3002\u5728 Mode \u4e3a file \u6a21\u5f0f\u4e0b\u9762\uff0c\u6587\u4ef6\u6700\u540e\u4f1a\u8fdb\u884c\u6253\u5305\u538b\u7f29\u6210 .gz \u6587\u4ef6\u3002"),(0,r.kt)("h2",{id:"keepdays"},"KeepDays"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"KeepDays")," \u5b9a\u4e49\u65e5\u5fd7\u6700\u5927\u4fdd\u7559\u5929\u6570\uff0c\u9ed8\u8ba4\u503c\u4e3a 0\uff0c\u8868\u793a\u4e0d\u4f1a\u5220\u9664\u65e7\u7684\u65e5\u5fd7\u3002\u5728 Mode \u4e3a file \u6a21\u5f0f\u4e0b\u9762\uff0c\u5982\u679c\u8d85\u8fc7\u4e86\u6700\u5927\u4fdd\u7559\u5929\u6570\uff0c\u65e7\u7684\u65e5\u5fd7\u6587\u4ef6\u5c06\u4f1a\u88ab\u5220\u9664\u3002"),(0,r.kt)("h2",{id:"stackcooldownmillis"},"StackCooldownMillis"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"StackCooldownMillis")," \u5b9a\u4e49\u4e86\u65e5\u5fd7\u8f93\u51fa\u95f4\u9694\uff0c\u9ed8\u8ba4\u4e3a 100 \u6beb\u79d2\u3002"))}g.isMDXComponent=!0}}]);