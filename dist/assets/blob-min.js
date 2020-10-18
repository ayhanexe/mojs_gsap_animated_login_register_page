class Blob{constructor(t,s){if(!t||!s)throw Error("Error: Please add two canvas element to Blob class");this.canvas=t,this.canvasTwo=s,this.c=this.canvas.getContext("2d"),this.c2=this.canvasTwo.getContext("2d"),this.canvas.width=t.parentNode.offsetWidth,this.canvas.height=t.parentNode.offsetHeight,this.canvasTwo.width=s.parentNode.offsetWidth,this.canvasTwo.height=s.parentNode.offsetHeight,this.SCALE=1,this.TWO_PI=2*Math.PI,this.HALF_PI=Math.PI/2,this.wobbleIncrement=0,this.radius=this.canvas.height,this.segments=12,this.step=this.HALF_PI/this.segments,this.anchors=[],this.radii=[],this.thetaOff=[];for(let t=0;t<this.segments+2;t++)this.radii.push(100*Math.random()-50),this.thetaOff.push(Math.random()*this.TWO_PI);this.theta=0,this.thetaRamp=-7,this.thetaRampDest=12,this.rampDamp=30}update(){this.thetaRamp+=(this.thetaRampDest-this.thetaRamp)/this.rampDamp,this.theta+=.015,this.anchors=[0,this.radius];for(let t=0;t<=this.segments+2;t++){const s=Math.sin(this.thetaOff[t]+this.theta+this.thetaRamp),h=this.radius+this.radii[t]*s,e=this.step*t,i=h*Math.sin(e),a=h*Math.cos(e);this.anchors.push(i,a)}this.c.scale(this.SCALE,this.SCALE),this.c.fillStyle="#1E222D",this.c.beginPath(),this.bezierSkin(this.anchors,!1),this.c.lineTo(0,0),this.c.fill(),this.c.restore(),this.c2.scale(this.SCALE,this.SCALE),this.c2.fillStyle="#1E222D",this.c2.beginPath(),this.bezierSkin(this.anchors,!1),this.c2.lineTo(0,0),this.c2.fill(),this.c2.restore()}bezierSkin(t){const s=this.calcAvgs(t),h=t.length;for(let e=2;e<h;e+=2){let h=e+1;this.c.quadraticCurveTo(t[e],t[h],s[e],s[h]),this.c2.quadraticCurveTo(t[e],t[h],s[e],s[h])}}calcAvgs(t){const s=[],h=t.length;let e;for(let i=2;i<h;i++)e=i-2,s.push((t[e]+t[i])/2);return s}}const blob=new Blob(document.querySelector("#blob-wave-right"),document.querySelector("#blob-wave-left"));function onResize(){blob.canvas.width=blob.canvas.parentNode.offsetWidth,blob.canvas.height=blob.canvas.parentNode.offsetHeight,blob.canvasTwo.width=blob.canvasTwo.parentNode.offsetWidth,blob.canvasTwo.height=blob.canvasTwo.parentNode.offsetHeight,blob.radius=blob.canvas.height}function loop(){blob.c.clearRect(0,0,blob.canvas.width,blob.canvas.height),blob.c2.clearRect(0,0,blob.canvas.width,blob.canvas.height),blob.update(),window.requestAnimationFrame(loop)}window.addEventListener("resize",()=>{onResize()}),loop();