(function(e,p){typeof exports=="object"&&typeof module<"u"?module.exports=p(require("vue")):typeof define=="function"&&define.amd?define(["vue"],p):(e=typeof globalThis<"u"?globalThis:e||self,e["ru-resume-template"]=p(e.Vue))})(this,function(e){"use strict";const p=(i,a)=>{const l=i.__vccOpts||i;for(const[s,r]of a)l[s]=r;return l},C=i=>(e.pushScopeId("data-v-a7b24004"),i=i(),e.popScopeId(),i),y={class:"ru-educational-background",style:{"margin-bottom":"1rem"}},w={class:"ru-educational-background-title"},b={class:"ru-icon-bg"},E={class:"ru-educational-background-title-text",style:{display:"flex","align-items":"center","justify-content":"space-between"}},N={key:0,style:{width:"100%",height:"100%"},t:"1718784482580",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4265",width:"200",height:"200"},g=[C(()=>e.createElementVNode("path",{d:"M514.048 62.464q93.184 0 175.616 35.328t143.872 96.768 96.768 143.872 35.328 175.616q0 94.208-35.328 176.128t-96.768 143.36-143.872 96.768-175.616 35.328q-94.208 0-176.64-35.328t-143.872-96.768-96.768-143.36-35.328-176.128q0-93.184 35.328-175.616t96.768-143.872 143.872-96.768 176.64-35.328zM772.096 576.512q26.624 0 45.056-18.944t18.432-45.568-18.432-45.056-45.056-18.432l-192.512 0 0-192.512q0-26.624-18.944-45.568t-45.568-18.944-45.056 18.944-18.432 45.568l0 192.512-192.512 0q-26.624 0-45.056 18.432t-18.432 45.056 18.432 45.568 45.056 18.944l192.512 0 0 191.488q0 26.624 18.432 45.568t45.056 18.944 45.568-18.944 18.944-45.568l0-191.488 192.512 0z","p-id":"4266"},null,-1))],k={style:{"margin-top":"1rem"}},_=p({__name:"BlockHeaderA",props:["title","disabled"],emits:["addItem"],setup(i,{emit:a}){const l=i,s=a,r=()=>s("addItem");return(c,n)=>(e.openBlock(),e.createElementBlock("div",y,[e.createElementVNode("div",w,[e.createElementVNode("div",b,[e.renderSlot(c.$slots,"icon",{},void 0,!0)]),e.createElementVNode("div",E,[e.createTextVNode(e.toDisplayString(l.title)+" ",1),e.createElementVNode("div",{style:{height:"2rem"},onClick:r},[l.disabled?e.createCommentVNode("v-if",!0):(e.openBlock(),e.createElementBlock("svg",N,g))])])]),e.createElementVNode("div",k,[e.renderSlot(c.$slots,"context",{},void 0,!0)])]))}},[["__scopeId","data-v-a7b24004"]]),m=i=>(e.pushScopeId("data-v-da2d3371"),i=i(),e.popScopeId(),i),B={id:"ru-page",style:{"background-color":"rgb(207, 207, 207)"}},U={id:"ru-left"},$={id:"ru-avatar"},T=["src"],M={class:"ru-left-kw-box"},D={key:0,class:"ru-left-key"},Z=["onUpdate:modelValue"],S={class:"ru-left-word"},A=["onUpdate:modelValue","disabled"],j={id:"ru-right"},F={class:"ru-personage"},L=m(()=>e.createElementVNode("div",{class:"ru-personage-title"},"个人简历",-1)),q={class:"ru-personage-kws"},O=["disabled","onUpdate:modelValue"],u=["onUpdate:modelValue","disabled"],R=m(()=>e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",fill:"none",version:"1.1",width:"28.333332061767578",height:"28.333332061767578",viewBox:"0 0 28.333332061767578 28.333332061767578"},[e.createElementVNode("g",null,[e.createElementVNode("path",{d:"M1.2448,1.2448C2.04183,0.447766,3.12283,0,4.25,0C4.25,0,24.0833,0,24.0833,0C25.2106,0,26.2915,0.447766,27.0885,1.2448C27.8855,2.04183,28.3333,3.12283,28.3333,4.25C28.3333,4.25,28.3333,24.0833,28.3333,24.0833C28.3333,25.2106,27.8855,26.2915,27.0885,27.0885C26.2915,27.8855,25.2106,28.3333,24.0833,28.3333C24.0833,28.3333,4.25,28.3333,4.25,28.3333C3.12283,28.3333,2.04183,27.8855,1.2448,27.0885C0.447766,26.2915,0,25.2106,0,24.0833C0,24.0833,0,4.25,0,4.25C0,3.12283,0.447766,2.04183,1.2448,1.2448C1.2448,1.2448,1.2448,1.2448,1.2448,1.2448ZM15.5833,25.5C15.5833,25.5,24.0833,25.5,24.0833,25.5C24.459,25.5,24.8194,25.3507,25.0851,25.0851C25.3507,24.8194,25.5,24.459,25.5,24.0833C25.5,24.0833,25.5,4.25,25.5,4.25C25.5,3.87427,25.3507,3.51394,25.0851,3.24826C24.8194,2.98259,24.459,2.83333,24.0833,2.83333C24.0833,2.83333,15.5833,2.83333,15.5833,2.83333C15.5833,2.83333,15.5833,25.5,15.5833,25.5C15.5833,25.5,15.5833,25.5,15.5833,25.5ZM12.75,2.83333C12.75,2.83333,12.75,25.5,12.75,25.5C12.75,25.5,4.25,25.5,4.25,25.5C3.87427,25.5,3.51394,25.3507,3.24826,25.0851C2.98259,24.8194,2.83333,24.459,2.83333,24.0833C2.83333,24.0833,2.83333,4.25,2.83333,4.25C2.83333,3.87427,2.98259,3.51394,3.24826,3.24826C3.51394,2.98259,3.87427,2.83333,4.25,2.83333C4.25,2.83333,12.75,2.83333,12.75,2.83333C12.75,2.83333,12.75,2.83333,12.75,2.83333Z","fill-rule":"evenodd",fill:"#000000","fill-opacity":"1"})])],-1)),H={style:{display:"flex","justify-content":"space-between","margin-top":"1rem"}},z={style:{display:"flex"}},K=["onUpdate:modelValue","disabled"],P=["onUpdate:modelValue","disabled"],X=["onUpdate:modelValue","disabled"],G=["onUpdate:modelValue","disabled"],J={style:{transform:"translateX(0.2rem)"}},Q={style:{display:"flex"}},W=m(()=>e.createElementVNode("div",{style:{width:"20%"}},"专业成绩：",-1)),Y=["onUpdate:modelValue","disabled"],I={style:{display:"flex"}},v=m(()=>e.createElementVNode("div",{style:{width:"20%"}},"主修课程：",-1)),ee=["onUpdate:modelValue","disabled"],te=m(()=>e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",fill:"none",version:"1.1",width:"29.33333396911621",height:"26.666667938232422",viewBox:"0 0 29.33333396911621 26.666667938232422"},[e.createElementVNode("g",null,[e.createElementVNode("path",{d:"M9.17157,1.17157C9.92172,0.421427,10.9391,0,12,0C12,0,17.3333,0,17.3333,0C18.3941,0,19.4116,0.421427,20.1617,1.17157C20.9119,1.92172,21.3333,2.93913,21.3333,4C21.3333,4,21.3333,5.33333,21.3333,5.33333C21.3333,5.33333,25.3333,5.33333,25.3333,5.33333C27.5425,5.33333,29.3333,7.1242,29.3333,9.33333C29.3333,9.33333,29.3333,22.6667,29.3333,22.6667C29.3333,24.8759,27.5425,26.6667,25.3333,26.6667C25.3333,26.6667,4,26.6667,4,26.6667C1.79087,26.6667,0,24.8759,0,22.6667C0,22.6667,0,9.33333,0,9.33333C0,7.1242,1.79087,5.33333,4,5.33333C4,5.33333,8,5.33333,8,5.33333C8,5.33333,8,4,8,4C8,2.93913,8.42143,1.92172,9.17157,1.17157C9.17157,1.17157,9.17157,1.17157,9.17157,1.17157ZM8,8C8,8,4,8,4,8C3.26363,8,2.66667,8.59696,2.66667,9.33333C2.66667,9.33333,2.66667,22.6667,2.66667,22.6667C2.66667,23.4031,3.26363,24,4,24C4,24,8,24,8,24C8,24,8,8,8,8C8,8,8,8,8,8ZM10.6667,24C10.6667,24,10.6667,8,10.6667,8C10.6667,8,18.6667,8,18.6667,8C18.6667,8,18.6667,24,18.6667,24C18.6667,24,10.6667,24,10.6667,24C10.6667,24,10.6667,24,10.6667,24ZM21.3333,24C21.3333,24,25.3333,24,25.3333,24C26.0697,24,26.6667,23.4031,26.6667,22.6667C26.6667,22.6667,26.6667,9.33333,26.6667,9.33333C26.6667,8.59695,26.0697,8,25.3333,8C25.3333,8,21.3333,8,21.3333,8C21.3333,8,21.3333,24,21.3333,24C21.3333,24,21.3333,24,21.3333,24ZM18.6667,5.33333C18.6667,5.33333,10.6667,5.33333,10.6667,5.33333C10.6667,5.33333,10.6667,4,10.6667,4C10.6667,3.64637,10.8071,3.30724,11.0572,3.05719C11.3072,2.80715,11.6464,2.66667,12,2.66667C12,2.66667,17.3333,2.66667,17.3333,2.66667C17.6869,2.66667,18.0261,2.80715,18.2761,3.05719C18.5261,3.30724,18.6667,3.64637,18.6667,4C18.6667,4,18.6667,5.33333,18.6667,5.33333C18.6667,5.33333,18.6667,5.33333,18.6667,5.33333Z","fill-rule":"evenodd",fill:"#000000","fill-opacity":"1"})])],-1)),le={style:{display:"flex","justify-content":"space-between","margin-top":"1rem"}},de={style:{display:"flex"}},oe=["onUpdate:modelValue","disabled"],ie=["onUpdate:modelValue","disabled"],ne=["onUpdate:modelValue","disabled"],se=["onUpdate:modelValue","disabled"],ae=["onUpdate:modelValue","disabled"],re=m(()=>e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",fill:"none",version:"1.1",width:"24",height:"36",viewBox:"0 0 24 36"},[e.createElementVNode("g",null,[e.createElementVNode("path",{d:"M12,3C7.02943,3,3,7.02943,3,12C3,16.9706,7.02943,21,12,21C13.7458,21,15.3755,20.5029,16.7551,19.6427C16.8297,19.5837,16.9103,19.5315,16.9959,19.4872C19.4101,17.8731,21,15.1222,21,12C21,7.02943,16.9706,3,12,3C12,3,12,3,12,3ZM19.2924,21.5307C22.1544,19.3375,24,15.8843,24,12C24,5.37258,18.6274,0,12,0C5.37258,0,0,5.37258,0,12C0,15.885,1.84624,19.3389,4.70925,21.5321C4.70925,21.5321,3.01306,34.3024,3.01306,34.3024C2.93723,34.8735,3.19503,35.4375,3.67644,35.7537C4.15785,36.0699,4.77783,36.0826,5.27175,35.7863C5.27175,35.7863,12,31.7493,12,31.7493C12,31.7493,18.7283,35.7863,18.7283,35.7863C19.2222,36.0825,19.842,36.0699,20.3235,35.7537C20.8048,35.4375,21.0627,34.8736,20.9869,34.3027C20.9869,34.3027,19.2924,21.5307,19.2924,21.5307C19.2924,21.5307,19.2924,21.5307,19.2924,21.5307ZM16.4792,23.1362C15.0951,23.6934,13.5834,24,12,24C10.4172,24,8.90599,23.6936,7.52245,23.1368C7.52245,23.1368,6.39666,31.6126,6.39666,31.6126C6.39666,31.6126,11.2282,28.7137,11.2282,28.7137C11.7033,28.4287,12.2967,28.4287,12.7717,28.7137C12.7717,28.7137,17.6038,31.6129,17.6038,31.6129C17.6038,31.6129,16.4792,23.1362,16.4792,23.1362C16.4792,23.1362,16.4792,23.1362,16.4792,23.1362Z","fill-rule":"evenodd",fill:"#000000","fill-opacity":"1"})])],-1)),ce=["onUpdate:modelValue","disabled"],pe=["onUpdate:modelValue","disabled"],me=["onUpdate:modelValue","disabled"],he=m(()=>e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",fill:"none",version:"1.1",width:"32",height:"26.666667938232422",viewBox:"0 0 32 26.666667938232422"},[e.createElementVNode("g",null,[e.createElementVNode("path",{d:"M10.8906,0.593733C11.1379,0.222801,11.5542,0,12,0C12,0,20,0,20,0C20.4459,0,20.8621,0.222801,21.1095,0.593733C21.1095,0.593733,23.3803,4,23.3803,4C23.3803,4,28,4,28,4C29.0609,4,30.0783,4.42143,30.8284,5.17157C31.5785,5.92172,32,6.93913,32,8C32,8,32,22.6667,32,22.6667C32,23.7276,31.5785,24.7449,30.8284,25.4951C30.0783,26.2452,29.0609,26.6667,28,26.6667C28,26.6667,4,26.6667,4,26.6667C2.93913,26.6667,1.92172,26.2452,1.17157,25.4951C0.421428,24.7449,0,23.7276,0,22.6667C0,22.6667,0,8,0,8C0,6.93913,0.421428,5.92172,1.17157,5.17157C1.92172,4.42143,2.93913,4,4,4C4,4,8.61976,4,8.61976,4C8.61976,4,10.8906,0.593733,10.8906,0.593733C10.8906,0.593733,10.8906,0.593733,10.8906,0.593733ZM12.7136,2.66667C12.7136,2.66667,10.4427,6.07293,10.4427,6.07293C10.1954,6.44387,9.77913,6.66667,9.33333,6.66667C9.33333,6.66667,4,6.66667,4,6.66667C3.64637,6.66667,3.30724,6.80715,3.05719,7.05719C2.80715,7.30724,2.66667,7.64637,2.66667,8C2.66667,8,2.66667,22.6667,2.66667,22.6667C2.66667,23.0203,2.80715,23.3595,3.05719,23.6095C3.30724,23.8595,3.64637,24,4,24C4,24,28,24,28,24C28.3536,24,28.6928,23.8595,28.9428,23.6095C29.1928,23.3595,29.3333,23.0203,29.3333,22.6667C29.3333,22.6667,29.3333,8,29.3333,8C29.3333,7.64637,29.1928,7.30724,28.9428,7.05719C28.6928,6.80715,28.3536,6.66667,28,6.66667C28,6.66667,22.6667,6.66667,22.6667,6.66667C22.2208,6.66667,21.8045,6.44387,21.5572,6.07293C21.5572,6.07293,19.2864,2.66667,19.2864,2.66667C19.2864,2.66667,12.7136,2.66667,12.7136,2.66667C12.7136,2.66667,12.7136,2.66667,12.7136,2.66667ZM16,10.6667C13.7908,10.6667,12,12.4575,12,14.6667C12,16.8759,13.7908,18.6667,16,18.6667C18.2092,18.6667,20,16.8759,20,14.6667C20,12.4575,18.2092,10.6667,16,10.6667C16,10.6667,16,10.6667,16,10.6667ZM9.33333,14.6667C9.33333,10.9848,12.3181,8,16,8C19.6819,8,22.6667,10.9848,22.6667,14.6667C22.6667,18.3485,19.6819,21.3333,16,21.3333C12.3181,21.3333,9.33333,18.3485,9.33333,14.6667C9.33333,14.6667,9.33333,14.6667,9.33333,14.6667Z","fill-rule":"evenodd",fill:"#000000","fill-opacity":"1"})])],-1)),_e=["disabled"],f=p(Object.assign({name:"ResumeTemplateA"},{__name:"ResumeTemplateA",props:{data:{type:Object,default:""},disabled:{type:Boolean,default:!0}},setup(i){const a=i,{data:l,disabled:s}=e.toRefs(a),r=c=>{s&&(l.value.disabled=!l.value.disabled)};return(c,n)=>(e.openBlock(),e.createElementBlock("div",B,[e.unref(s)?e.createCommentVNode("v-if",!0):(e.openBlock(),e.createElementBlock("div",{key:0,style:{position:"absolute","z-index":"2",right:"0.5rem",top:"0.5"},onClick:r},e.toDisplayString(e.unref(l).disabled==!0?"预览":"编辑"),1)),e.createElementVNode("div",U,[e.createElementVNode("div",$,[e.createElementVNode("img",{src:e.unref(l).avatar,alt:"",srcset:""},null,8,T)]),e.createElementVNode("div",M,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(l).baseKw,(t,d)=>(e.openBlock(),e.createElementBlock("div",{class:"ru-left-kw",key:d},[e.unref(l).disabled?(e.openBlock(),e.createElementBlock("div",D,e.toDisplayString(t[0]),1)):e.createCommentVNode("v-if",!0),e.unref(l).disabled?e.createCommentVNode("v-if",!0):e.withDirectives((e.openBlock(),e.createElementBlock("input",{key:1,type:"text","onUpdate:modelValue":o=>t[0]=o,style:{width:"4rem"}},null,8,Z)),[[e.vModelText,t[0]]]),e.createTextVNode(" :  "),e.createElementVNode("div",S,[e.withDirectives(e.createElementVNode("input",{"onUpdate:modelValue":o=>t[1]=o,type:"text",disabled:e.unref(l).disabled},null,8,A),[[e.vModelText,t[1]]])])]))),128))])]),e.createElementVNode("div",j,[e.createElementVNode("div",F,[L,e.createElementVNode("div",q,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(l).jobKw,(t,d)=>(e.openBlock(),e.createElementBlock("div",{class:"ru-personage-item",key:d},[e.withDirectives(e.createElementVNode("input",{type:"text",disabled:e.unref(l).disabled,"onUpdate:modelValue":o=>t[0]=o,style:{width:"4rem"}},null,8,O),[[e.vModelText,t[0]]]),e.createTextVNode(" :  "),e.withDirectives(e.createElementVNode("input",{type:"text","onUpdate:modelValue":o=>t[1]=o,disabled:e.unref(l).disabled},null,8,u),[[e.vModelText,t[1]]])]))),128))])]),e.createVNode(_,{title:"教育背景",onAddItem:n[0]||(n[0]=t=>e.unref(l).educationalBackground.push({})),disabled:e.unref(l).disabled},{icon:e.withCtx(()=>[R]),context:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(l).educationalBackground,t=>(e.openBlock(),e.createElementBlock("div",null,[e.createElementVNode("div",H,[e.createElementVNode("div",z,[e.withDirectives(e.createElementVNode("input",{type:"text",placeholder:"开始时间","onUpdate:modelValue":d=>t.starTime=d,style:{width:"5rem"},disabled:e.unref(l).disabled},null,8,K),[[e.vModelText,t.starTime]]),e.createTextVNode(" - "),e.withDirectives(e.createElementVNode("input",{type:"text",placeholder:"结束时间","onUpdate:modelValue":d=>t.endTime=d,style:{width:"5rem"},disabled:e.unref(l).disabled},null,8,P),[[e.vModelText,t.endTime]])]),e.createElementVNode("div",null,[e.withDirectives(e.createElementVNode("input",{type:"text",placeholder:"就读大学","onUpdate:modelValue":d=>t.collegiate=d,style:{"text-align":"center"},disabled:e.unref(l).disabled},null,8,X),[[e.vModelText,t.collegiate]])]),e.createElementVNode("div",null,[e.withDirectives(e.createElementVNode("input",{type:"text",placeholder:"就读专业","onUpdate:modelValue":d=>t.profession=d,style:{"text-align":"right"},disabled:e.unref(l).disabled},null,8,G),[[e.vModelText,t.profession]])])]),e.createElementVNode("div",J,[e.createElementVNode("div",Q,[W,e.withDirectives(e.createElementVNode("input",{type:"text","onUpdate:modelValue":d=>t.professionalAchievement=d,placeholder:"请输入专业成绩",disabled:e.unref(l).disabled},null,8,Y),[[e.vModelText,t.professionalAchievement]])]),e.createElementVNode("div",I,[v,e.withDirectives(e.createElementVNode("input",{type:"text","onUpdate:modelValue":d=>t.majorCourse=d,placeholder:"请输入主修课程",disabled:e.unref(l).disabled},null,8,ee),[[e.vModelText,t.majorCourse]])])])]))),256))]),_:1},8,["disabled"]),e.createVNode(_,{title:"工作经验",onAddItem:n[1]||(n[1]=t=>e.unref(l).workExperience.push({})),disabled:e.unref(l).disabled},{icon:e.withCtx(()=>[te]),context:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(l).workExperience,t=>(e.openBlock(),e.createElementBlock("div",null,[e.createElementVNode("div",le,[e.createElementVNode("div",de,[e.withDirectives(e.createElementVNode("input",{type:"text",placeholder:"开始时间","onUpdate:modelValue":d=>t.starTime=d,style:{width:"5rem"},disabled:e.unref(l).disabled},null,8,oe),[[e.vModelText,t.starTime]]),e.createTextVNode(" - "),e.withDirectives(e.createElementVNode("input",{type:"text",placeholder:"结束时间","onUpdate:modelValue":d=>t.endTime=d,style:{width:"5rem"},disabled:e.unref(l).disabled},null,8,ie),[[e.vModelText,t.endTime]])]),e.createElementVNode("div",null,[e.withDirectives(e.createElementVNode("input",{type:"text",placeholder:"工作单位","onUpdate:modelValue":d=>t.workUnit=d,style:{"text-align":"center"},disabled:e.unref(l).disabled},null,8,ne),[[e.vModelText,t.workUnit]])]),e.createElementVNode("div",null,[e.withDirectives(e.createElementVNode("input",{type:"text",placeholder:"工作职位","onUpdate:modelValue":d=>t.jobPosition=d,style:{"text-align":"right"},disabled:e.unref(l).disabled},null,8,se),[[e.vModelText,t.jobPosition]])])]),e.withDirectives(e.createElementVNode("textarea",{rows:"2","onUpdate:modelValue":d=>t.context=d,style:{width:"100%"},disabled:e.unref(l).disabled},`\r
\r
          `,8,ae),[[e.vModelText,t.context]])]))),256))]),_:1},8,["disabled"]),e.createVNode(_,{title:"荣誉证书",onAddItem:n[2]||(n[2]=t=>e.unref(l).certificateOfHonor.push({})),disabled:e.unref(l).disabled},{icon:e.withCtx(()=>[re]),context:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(l).certificateOfHonor,(t,d)=>(e.openBlock(),e.createElementBlock("div",{style:{display:"flex"},key:d},[e.withDirectives(e.createElementVNode("input",{type:"text",placeholder:"证书名称","onUpdate:modelValue":o=>t.certificateName=o,disabled:e.unref(l).disabled},null,8,ce),[[e.vModelText,t.certificateName]]),e.withDirectives(e.createElementVNode("input",{type:"text",placeholder:"获奖时间","onUpdate:modelValue":o=>t.awardTime=o,style:{"text-align":"center"},disabled:e.unref(l).disabled},null,8,pe),[[e.vModelText,t.awardTime]]),e.withDirectives(e.createElementVNode("input",{type:"text",placeholder:"颁发单位","onUpdate:modelValue":o=>t.issuer=o,style:{"text-align":"right"},disabled:e.unref(l).disabled},null,8,me),[[e.vModelText,t.issuer]])]))),128))]),_:1},8,["disabled"]),e.createVNode(_,{title:"自我评价",disabled:e.unref(l).disabled},{icon:e.withCtx(()=>[he]),context:e.withCtx(()=>[e.withDirectives(e.createElementVNode("textarea",{rows:"4",style:{width:"100%"},"onUpdate:modelValue":n[3]||(n[3]=t=>e.unref(l).selfEvaluation=t),disabled:e.unref(l).disabled},null,8,_e),[[e.vModelText,e.unref(l).selfEvaluation]])]),_:1},8,["disabled"])])]))}}),[["__scopeId","data-v-da2d3371"]]),Ve={style:{display:"flex","align-items":"center","justify-content":"space-between"}},fe={style:{"font-size":"2rem","border-bottom":"solid 4px #068359"}},xe=[e.createElementVNode("path",{d:"M512 1024C229.239611 1024 0.017919 794.741738 0.017919 511.98135 0.017919 229.22096 229.239611-0.000731 512-0.000731 794.760389-0.000731 1023.982081 229.22096 1023.982081 511.98135 1023.982081 794.741738 794.760389 1024 512 1024ZM512 73.176136C269.649625 73.176136 73.158216 269.667545 73.158216 512.017919 73.158216 754.368294 269.649625 950.859703 512 950.859703 754.350375 950.859703 950.841784 754.368294 950.841784 512.017919 950.841784 269.667545 754.350375 73.176136 512 73.176136ZM548.570149 731.438811 475.429851 731.438811 475.429851 548.588068 292.579109 548.588068 292.579109 475.411201 475.429851 475.411201 475.429851 292.560457 548.570149 292.560457 548.570149 475.411201 731.420891 475.411201 731.420891 548.588068 548.570149 548.588068 548.570149 731.438811Z",fill:"#068359","p-id":"4272"},null,-1)],Ce=e.createElementVNode("div",{style:{"border-bottom":"solid 1px #068359","margin-top":"4px"}},null,-1),ye={style:{"margin-top":"1rem"}},h={__name:"BlockHeaderB",props:["title","disabled"],emits:["addItem"],setup(i,{emit:a}){const l=i,s=a,r=()=>s("addItem");return(c,n)=>(e.openBlock(),e.createElementBlock("div",null,[e.createElementVNode("div",Ve,[e.createElementVNode("span",fe,e.toDisplayString(l.title),1),l.disabled?(e.openBlock(),e.createElementBlock("svg",{key:0,onClick:r,style:{height:"2rem",width:"2rem"},t:"1718802654871",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4271",width:"200",height:"200"},xe)):e.createCommentVNode("v-if",!0)]),Ce,e.createElementVNode("div",ye,[e.renderSlot(c.$slots,"context")])]))}},V=i=>(e.pushScopeId("data-v-6634ef0d"),i=i(),e.popScopeId(),i),we={style:{display:"flex",width:"100%","background-color":"#ffffff","flex-direction":"column","align-items":"center",position:"relative"}},be=V(()=>e.createElementVNode("div",{style:{"background-color":"#068359",height:"4rem",width:"95%",margin:"1rem 0",display:"flex","align-items":"center","justify-content":"center",color:"white","font-size":"2rem"}}," 个人简历 ",-1)),Ee={style:{width:"95%",margin:"1rem 0",display:"flex"}},Ne={style:{width:"80%","padding-right":"2rem"}},ge={class:"ru-personage-kws"},ke=["disabled","onUpdate:modelValue"],Be=["onUpdate:modelValue","disabled"],Ue=["disabled","onUpdate:modelValue"],$e=["onUpdate:modelValue","disabled"],Te={style:{width:"20%"}},Me=["src"],De={style:{width:"95%",margin:"1rem 0",display:"flex"}},Ze={style:{width:"100%"}},Se={style:{display:"flex","justify-content":"space-between","margin-top":"1rem"}},Ae={style:{display:"flex"}},je=["onUpdate:modelValue","disabled"],Fe=["onUpdate:modelValue","disabled"],Le=["onUpdate:modelValue","disabled"],qe=["onUpdate:modelValue","disabled"],Oe={style:{transform:"translateX(0.2rem)"}},ue={style:{display:"flex"}},Re=V(()=>e.createElementVNode("div",{style:{width:"10%"}},"专业成绩：",-1)),He=["onUpdate:modelValue","disabled"],ze={style:{display:"flex"}},Ke=V(()=>e.createElementVNode("div",{style:{width:"10%"}},"主修课程：",-1)),Pe=["onUpdate:modelValue","disabled"],Xe={style:{width:"95%",margin:"1rem 0",display:"flex"}},Ge={style:{width:"100%"}},Je={style:{display:"flex","justify-content":"space-between","margin-top":"1rem"}},Qe={style:{display:"flex"}},We=["onUpdate:modelValue","disabled"],Ye=["onUpdate:modelValue","disabled"],Ie=["onUpdate:modelValue","disabled"],ve=["onUpdate:modelValue","disabled"],et=["onUpdate:modelValue","disabled"],tt={style:{width:"95%",margin:"1rem 0",display:"flex"}},lt={style:{width:"100%"}},dt=["onUpdate:modelValue","disabled"],ot=["onUpdate:modelValue","disabled"],it=["onUpdate:modelValue","disabled"],nt={style:{width:"95%",margin:"1rem 0",display:"flex"}},st={style:{width:"100%"}},at=["disabled"],x=p(Object.assign({name:"ResumeTemplateB"},{__name:"ResumeTemplateB",props:{data:{type:Object,default:""},disabled:{type:Boolean,default:!0}},setup(i){const a=i,{data:l,disabled:s}=e.toRefs(a),r=c=>{s&&(l.value.disabled=!l.value.disabled)};return(c,n)=>(e.openBlock(),e.createElementBlock("div",we,[e.unref(s)?e.createCommentVNode("v-if",!0):(e.openBlock(),e.createElementBlock("div",{key:0,style:{position:"absolute","z-index":"2",right:"0.5rem",top:"0.5"},onClick:r},e.toDisplayString(e.unref(l).disabled==!0?"预览":"编辑"),1)),be,e.createElementVNode("div",Ee,[e.createElementVNode("div",Ne,[e.createVNode(h,{title:"基本信息",onAddItem:n[0]||(n[0]=t=>e.unref(l).baseKw.push(["",""])),disabled:e.unref(l).disabled},{context:e.withCtx(()=>[e.createElementVNode("div",ge,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(l).jobKw,(t,d)=>(e.openBlock(),e.createElementBlock("div",{class:"ru-personage-item",key:d},[e.withDirectives(e.createElementVNode("input",{type:"text",disabled:e.unref(l).disabled,"onUpdate:modelValue":o=>t[0]=o,style:{width:"4rem"}},null,8,ke),[[e.vModelText,t[0]]]),e.createTextVNode(" :  "),e.withDirectives(e.createElementVNode("input",{type:"text","onUpdate:modelValue":o=>t[1]=o,disabled:e.unref(l).disabled},null,8,Be),[[e.vModelText,t[1]]])]))),128)),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(l).baseKw,(t,d)=>(e.openBlock(),e.createElementBlock("div",{class:"ru-personage-item",key:d},[e.withDirectives(e.createElementVNode("input",{type:"text",disabled:e.unref(l).disabled,"onUpdate:modelValue":o=>t[0]=o,style:{width:"4rem"}},null,8,Ue),[[e.vModelText,t[0]]]),e.createTextVNode(" :  "),e.withDirectives(e.createElementVNode("input",{type:"text","onUpdate:modelValue":o=>t[1]=o,disabled:e.unref(l).disabled},null,8,$e),[[e.vModelText,t[1]]])]))),128))])]),_:1},8,["disabled"])]),e.createElementVNode("div",Te,[e.createElementVNode("img",{style:{width:"100%"},src:e.unref(l).avatar,alt:"",srcset:""},null,8,Me)])]),e.createElementVNode("div",De,[e.createElementVNode("div",Ze,[e.createVNode(h,{title:"教育背景",onAddItem:n[1]||(n[1]=t=>e.unref(l).educationalBackground.push({})),disabled:e.unref(l).disabled},{context:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(l).educationalBackground,t=>(e.openBlock(),e.createElementBlock("div",null,[e.createElementVNode("div",Se,[e.createElementVNode("div",Ae,[e.withDirectives(e.createElementVNode("input",{type:"text",placeholder:"开始时间","onUpdate:modelValue":d=>t.starTime=d,style:{width:"5rem"},disabled:e.unref(l).disabled},null,8,je),[[e.vModelText,t.starTime]]),e.createTextVNode(" - "),e.withDirectives(e.createElementVNode("input",{type:"text",placeholder:"结束时间","onUpdate:modelValue":d=>t.endTime=d,style:{width:"5rem"},disabled:e.unref(l).disabled},null,8,Fe),[[e.vModelText,t.endTime]])]),e.createElementVNode("div",null,[e.withDirectives(e.createElementVNode("input",{type:"text",placeholder:"就读大学","onUpdate:modelValue":d=>t.collegiate=d,style:{"text-align":"center"},disabled:e.unref(l).disabled},null,8,Le),[[e.vModelText,t.collegiate]])]),e.createElementVNode("div",null,[e.withDirectives(e.createElementVNode("input",{type:"text",placeholder:"就读专业","onUpdate:modelValue":d=>t.profession=d,style:{"text-align":"right"},disabled:e.unref(l).disabled},null,8,qe),[[e.vModelText,t.profession]])])]),e.createElementVNode("div",Oe,[e.createElementVNode("div",ue,[Re,e.withDirectives(e.createElementVNode("input",{type:"text",style:{width:"90%"},"onUpdate:modelValue":d=>t.professionalAchievement=d,placeholder:"请输入专业成绩",disabled:e.unref(l).disabled},null,8,He),[[e.vModelText,t.professionalAchievement]])]),e.createElementVNode("div",ze,[Ke,e.withDirectives(e.createElementVNode("input",{type:"text",style:{width:"90%"},"onUpdate:modelValue":d=>t.majorCourse=d,placeholder:"请输入主修课程",disabled:e.unref(l).disabled},null,8,Pe),[[e.vModelText,t.majorCourse]])])])]))),256))]),_:1},8,["disabled"])])]),e.createElementVNode("div",Xe,[e.createElementVNode("div",Ge,[e.createVNode(h,{title:"工作经验",onAddItem:n[2]||(n[2]=t=>e.unref(l).workExperience.push({})),disabled:e.unref(l).disabled},{context:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(l).workExperience,t=>(e.openBlock(),e.createElementBlock("div",null,[e.createElementVNode("div",Je,[e.createElementVNode("div",Qe,[e.withDirectives(e.createElementVNode("input",{type:"text",placeholder:"开始时间","onUpdate:modelValue":d=>t.starTime=d,style:{width:"5rem"},disabled:e.unref(l).disabled},null,8,We),[[e.vModelText,t.starTime]]),e.createTextVNode(" - "),e.withDirectives(e.createElementVNode("input",{type:"text",placeholder:"结束时间","onUpdate:modelValue":d=>t.endTime=d,style:{width:"5rem"},disabled:e.unref(l).disabled},null,8,Ye),[[e.vModelText,t.endTime]])]),e.createElementVNode("div",null,[e.withDirectives(e.createElementVNode("input",{type:"text",placeholder:"工作单位","onUpdate:modelValue":d=>t.workUnit=d,style:{"text-align":"center"},disabled:e.unref(l).disabled},null,8,Ie),[[e.vModelText,t.workUnit]])]),e.createElementVNode("div",null,[e.withDirectives(e.createElementVNode("input",{type:"text",placeholder:"工作职位","onUpdate:modelValue":d=>t.jobPosition=d,style:{"text-align":"right"},disabled:e.unref(l).disabled},null,8,ve),[[e.vModelText,t.jobPosition]])])]),e.withDirectives(e.createElementVNode("textarea",{rows:"2","onUpdate:modelValue":d=>t.context=d,style:{width:"100%"},disabled:e.unref(l).disabled},`\r
\r
          `,8,et),[[e.vModelText,t.context]])]))),256))]),_:1},8,["disabled"])])]),e.createElementVNode("div",tt,[e.createElementVNode("div",lt,[e.createVNode(h,{title:"荣誉证书",onAddItem:n[3]||(n[3]=t=>e.unref(l).certificateOfHonor.push({})),disabled:e.unref(l).disabled},{context:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(l).certificateOfHonor,(t,d)=>(e.openBlock(),e.createElementBlock("div",{style:{display:"flex","justify-content":"space-between"},key:d},[e.withDirectives(e.createElementVNode("input",{type:"text",placeholder:"证书名称","onUpdate:modelValue":o=>t.certificateName=o,disabled:e.unref(l).disabled},null,8,dt),[[e.vModelText,t.certificateName]]),e.withDirectives(e.createElementVNode("input",{type:"text",placeholder:"获奖时间","onUpdate:modelValue":o=>t.awardTime=o,style:{"text-align":"center"},disabled:e.unref(l).disabled},null,8,ot),[[e.vModelText,t.awardTime]]),e.withDirectives(e.createElementVNode("input",{type:"text",placeholder:"颁发单位","onUpdate:modelValue":o=>t.issuer=o,style:{"text-align":"right"},disabled:e.unref(l).disabled},null,8,it),[[e.vModelText,t.issuer]])]))),128))]),_:1},8,["disabled"])])]),e.createElementVNode("div",nt,[e.createElementVNode("div",st,[e.createVNode(h,{title:"自我评价"},{context:e.withCtx(()=>[e.withDirectives(e.createElementVNode("textarea",{rows:"4",style:{width:"100%"},"onUpdate:modelValue":n[4]||(n[4]=t=>e.unref(l).selfEvaluation=t),disabled:e.unref(l).disabled},null,8,at),[[e.vModelText,e.unref(l).selfEvaluation]])]),_:1})])])]))}}),[["__scopeId","data-v-6634ef0d"]]);return{install:i=>{i.component(f.name,f),i.component(x.name,x)}}});
