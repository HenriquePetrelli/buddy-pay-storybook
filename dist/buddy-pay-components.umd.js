(function(t,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(t=typeof globalThis<"u"?globalThis:t||self,e(t["buddy-pay-components"]={},t.Vue))})(this,function(t,e){"use strict";const i={class:"input-container"},l=["for"],c=["id","name"],u=e.defineComponent({__name:"Input",props:{label:null,inputAttributes:{default:()=>({})}},setup(n){return(o,s)=>(e.openBlock(),e.createElementBlock("div",i,[e.createElementVNode("label",{class:"input-label",for:n.label},[e.renderSlot(o.$slots,"default",{},void 0,!0)],8,l),e.createElementVNode("input",e.mergeProps({id:n.label,class:"input",name:n.label},n.inputAttributes),null,16,c)]))}}),p="",d=((n,o)=>{const s=n.__vccOpts||n;for(const[a,r]of o)s[a]=r;return s})(u,[["__scopeId","data-v-b38061ba"]]);t.Input=d,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});