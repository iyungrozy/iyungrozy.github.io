import{o as a,b as s,w as r,v as l,d as e,y as u,t as d}from"./vendor.8ea85ebe.js";import{a as i}from"./app.4999a770.js";const p={},m=e("br",null,null,-1),b=e("br",null,null,-1),v=e("option",{value:"+"}," + ",-1),y=e("option",{value:"-"}," - ",-1),c=e("option",{value:"*"}," * ",-1),g=e("option",{value:"/"}," / ",-1),_=[b,v,y,c,g],k=e("br",null,null,-1),f=e("br",null,null,-1),h={class:"text-sm opacity-50"};function x(n,o){return a(),s("section",null,[r(e("input",{id:"input","onUpdate:modelValue":o[0]||(o[0]=t=>n.num1=t),placeholder:"num1",type:"number",p:"x-4 y-2",w:"250px",text:"center",bg:"transparent",border:"~ rounded gray-200 dark:gray-700",outline:"none active:none"},null,512),[[l,n.num1,void 0,{number:!0}]]),m,r(e("select",{"onUpdate:modelValue":o[1]||(o[1]=t=>n.operand=t),p:"x-4 y-2",w:"250px",text:"center",bg:"transparent",border:"~ rounded gray-200 dark:gray-700",outline:"none active:none"},_,512),[[u,n.operand]]),k,r(e("input",{id:"input","onUpdate:modelValue":o[2]||(o[2]=t=>n.num2=t),placeholder:"num2",type:"number",p:"x-4 y-2",w:"250px",text:"center",bg:"transparent",border:"~ rounded gray-200 dark:gray-700",outline:"none active:none"},null,512),[[l,n.num2]]),f,e("button",{class:"m-3 text-sm btn",onClick:o[3]||(o[3]=(...t)=>n.go&&n.go(...t))}," GO "),e("h2",h," Hasil : "+d(n.result),1)])}var B=i(p,[["render",x]]);export{B as default};
