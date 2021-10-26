!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/default-mode"]=t():e["video/player/default-mode"]=t()}(self,(function(){return function(){"use strict";var e={d:function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{component:function(){return s}});var n=coreApis.componentApis.video.playerAgent,o=coreApis.spinQuery,l=coreApis.utils,r=coreApis.utils.urls;let a;!function(e){e.normal="常规",e.wide="宽屏",e.webFullscreen="网页全屏",e.fullscreen="全屏"}(a||(a={}));const s={name:"defaultPlayerMode",displayName:"默认播放器模式",entry:async({settings:{options:e}})=>{if((0,l.isEmbeddedPlayer)())return;await(0,l.playerReady)();const t=new Map([[a.normal,none],[a.wide,()=>{n.playerAgent.widescreen()}],[a.webFullscreen,()=>{n.playerAgent.webFullscreen()}],[a.fullscreen,async()=>{null!==await(0,o.sq)((()=>dq(n.playerAgent.query.video.element.selector)),(e=>null!==e&&4===e.readyState&&"complete"===document.readyState&&document.hasFocus()))?n.playerAgent.fullscreen():console.warn("[默认播放器模式] 未能应用全屏模式, 等待超时.")}]]),r=await n.playerAgent.query.video.element();if(!r)return;const s=lodash.get(JSON.parse(localStorage.getItem("bilibili_player_settings")),"video_status.autoplay",!1),d=t.get(e.mode),i=()=>{!dq("body[class*=player-mode-]")&&d()};e.applyOnPlay&&!s?r.addEventListener("play",i,{once:!0}):i()},tags:[componentsTags.video],description:{"zh-CN":"控制是否使用默认播放器模式, 可以为`常规`, `宽屏`, `网页全屏`或`全屏`.","en-US":"Set the default player mode. Could be `Normal`, `Widescreen`, `Web fullscreen` or `Fullscreen`.","ja-JP":"デフォルト・プレーヤー・モードが使用するかどうかを制御する、 例えば`常规`、`宽屏`、 `网页全屏`か`全屏`."},options:{mode:{defaultValue:a.normal,displayName:"模式选择",dropdownEnum:a},applyOnPlay:{defaultValue:!1,displayName:"播放时应用"}},urlInclude:r.allVideoUrls};return t=t.component}()}));