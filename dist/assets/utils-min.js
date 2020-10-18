import{gsap,TimelineLite}from"./gsap/all.js";import{SplitText}from"./splitText.js";export class Utils{constructor(){this.blockedOperation=!1,this.views={register_view:"register",login_view:"login"},this.options={currentView:this.views.register_view}}hidePreloader(){const e=document.querySelector("#preloader");return gsap.to(e,1.5,{ease:"expo.inOut",yPercent:-100,opacity:0})}changeView(e){if(!this.blockedOperation){const t=new TimelineLite,i=new TimelineLite,s=new TimelineLite,o=new TimelineLite,r=this.canvasSlider,n=this.formElements;if(e==this.views.login_view){this.options.currentView=this.views.login_view;const e=this.formElements,c=new TimelineLite,a=new TimelineLite;this.hideTexts(this.options.register.title.chars,t,.3,.01),this.hideTexts(this.options.register.description.chars,i,.2,.01),a.staggerTo(n,.2,{y:-20,rotateX:-45,opacity:0},.01),a.set(document.querySelector("form.register-form"),{display:"none"}),gsap.set(this.options.login.title.chars,{opacity:0}),gsap.set(this.options.login.description.chars,{opacity:0}),gsap.to(r,1.5,{ease:"expo.in",scale:5}).delay(.7),gsap.to(r,2.5,{xPercent:100,ease:"expo.out",scale:1}).delay(2.1),this.showTexts(this.options.login.title.chars,s,1,.03,3.5),this.showTexts(this.options.login.description.chars,o,.5,.015,3.5),c.set(document.querySelector("form.login-form"),{display:"block"}).delay(3.5),c.staggerFromTo(e,.5,{y:-30,rotateX:-45,opacity:0},{y:0,rotateX:0,opacity:1},.01)}else if(e==this.views.register_view){this.options.currentView=this.views.register_view;const e=this.formElements,c=new TimelineLite,a=new TimelineLite;this.hideTexts(this.options.login.title.chars,s,.3,.01),this.hideTexts(this.options.login.description.chars,o,.2,.01),a.staggerTo(n,.2,{y:-20,rotateX:-45,opacity:0},.01),a.set(document.querySelector("form.register-form"),{display:"none"}),gsap.set(this.options.register.title.chars,{opacity:0}),gsap.set(this.options.register.description.chars,{opacity:0}),gsap.to(r,1.5,{ease:"expo.in",scale:5}).delay(.7),gsap.to(r,2.5,{xPercent:0,ease:"expo.out",scale:1}).delay(2.1),this.showTexts(this.options.register.title.chars,t,1,.03,3.5),this.showTexts(this.options.register.description.chars,i,.5,.015,3.5),c.set(document.querySelector("form.register-form"),{display:"block"}).delay(3.5),c.staggerFromTo(e,.5,{y:-30,rotateX:-45,opacity:0},{y:0,rotateX:0,opacity:1},.01)}}}showTexts(e,t,i,s,o=0){this.blockedOperation=!0;t.staggerFromTo(e,i,{opacity:0},{opacity:1},s).delay(o).then(()=>{this.blockedOperation=!1})}hideTexts(e,t,i,s,o=0){this.blockedOperation=!0;t.staggerTo(e,i,{opacity:0},s).delay(o).then(()=>{this.blockedOperation=!1})}get formElements(){const e=[],t=this.options.currentView;if(t==this.views.register_view){document.querySelector("form.register-form").childNodes.forEach(t=>{"#text"!==t.nodeName&&e.push(t)})}else if(t==this.views.login_view){document.querySelector("form.login-form").childNodes.forEach(t=>{"#text"!==t.nodeName&&e.push(t)})}return e}get canvasSlider(){return document.querySelector("#blob-wave-slider")}get title(){if(this.options.currentView===this.views.register_view)return document.querySelector(".register-view .view-title")}get description(){if(this.options.currentView===this.views.register_view)return document.querySelector(".register-view .view-description")}init(){const e=new TimelineLite,t=new TimelineLite,i=new TimelineLite,s=this.formElements,o=this.canvasSlider;for(let e in this.views){let t=document.querySelector(`.${this.views[e]}-view`);this.options[this.views[e]]={};for(let i of t.children)i.classList.contains("view-title")?this.options[this.views[e]].title=new SplitText(i,["words","chars"]):i.classList.contains("view-description")&&(this.options[this.views[e]].description=new SplitText(i,["words","chars"]))}this.description;document.querySelector("#app").style.visibility="visible",gsap.fromTo(o,1.5,{yPercent:-100,xPercent:-100},{ease:"expo.out",yPercent:0,xPercent:0}),this.showTexts(this.options.register.title.chars,t,1,.05,.7),this.showTexts(this.options.register.description.chars,i,.5,.03,.7),e.staggerFromTo(s,.5,{y:-30,opacity:0,rotateX:45},{y:0,opacity:1,rotateX:0},.03).delay(1)}}