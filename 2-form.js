import"./assets/common-qCG2J3en.js";const o={email:"",message:""},l="Fill please all fields",m="feedback-form-state",r=document.querySelector(".feedback-form"),n=document.querySelector('.feedback-form [name="email"]'),i=document.querySelector('.feedback-form [name="message"]'),a=u({...o});function c(e){localStorage.setItem(m,JSON.stringify(e))}function g(e){n.value=e.email,i.value=e.message}function u(e){let t={};try{const s=JSON.parse(localStorage.getItem(m));t.email=(s.email??e.email).toString().trim(),t.message=(s.message??e.message).toString().trim()}catch{t={...e}}return t}const d=()=>localStorage.removeItem(m),f=e=>!!e.email&&!!e.message,S=e=>{if(e.preventDefault(),!f(a)){alert(l);return}console.log(a),d(),r.reset(),a.email=o.email,a.message=o.message},v=e=>{const t=e.target,s=t.name;["email","message"].includes(s)&&(a[s]=t.value.trim(),c(a))};g(a);r.addEventListener("input",v);r.addEventListener("submit",S);
//# sourceMappingURL=2-form.js.map
