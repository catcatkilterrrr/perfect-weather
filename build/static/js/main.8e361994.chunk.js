(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(t,e,a){},45:function(t,e,a){},68:function(t,e,a){"use strict";a.r(e);var n=a(2),r=a(0),o=a.n(r),s=a(33),i=a.n(s),c=(a(43),a(44),a(45),a(36)),l=a(12),d=a(13),u=a(9),h=a(15),p=a(14),b=a(6),j=a(37),f=a(19),m=a.n(f),v=a(11),O=a(34),g=a.n(O),y=function(t){Object(h.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).Sketch=function(t){var e,a,r;t.setup=function(){t.createCanvas(t.windowWidth,.75*t.windowHeight),e=function(e,a){for(var n=[],r=150+a/100*150,o=0;o<e;o++){var s={length:t.random(10,30),xpos:t.random(-30,t.width+30),ypos:r,speed:t.random(3,5),alpha:t.random(200,255)};n.push(s)}return n}(n.props.rain,n.props.cloudsPos),a=function(e,a){for(var n=[],r=0;r<e;r++){var o={x_pos:t.random(0,t.width),y_pos:200+a/100*150,ry:t.random(-100,100),r:t.random(50,200),maxa:t.random(155,255),a:0,c:0};n.push(o)}return n}(n.props.clouds,n.props.cloudsPos),r=function(e){for(var a=[],n=0;n<e;n++){var r={tx:t.random(0,t.width),ty:t.random(30,275),s:t.random(3,10),a:t.random(30,150)};a.push(r)}return a}(n.props.stars)},t.draw=function(){t.background(10,15,25),t.stroke(225,175,105),t.fill(10,15,25),t.strokeWeight(4),function(e){var a,n=Object(v.a)(e);try{for(n.s();!(a=n.n()).done;){var r=a.value;t.push(),t.translate(r.tx,r.ty),t.rotate(t.HALF_PI/2),t.stroke(225,175,105,r.a),t.noFill(),t.strokeWeight(1),t.rect(0,0,r.s,r.s),t.pop()}}catch(o){n.e(o)}finally{n.f()}}(r);var o,s=(o=n.props.orbPos,[t.width*o/100,120+100*(.5+t.cos(t.TWO_PI*o/100))]);"Sun"===n.props.orb?function(e){t.push(),t.translate(e[0],e[1]),t.ellipse(0,0,200,200);for(var a=0;a<t.TWO_PI;a+=t.TWO_PI/12)t.strokeWeight(1),t.line(0,100,0,200),t.rotate(t.TWO_PI/12);t.pop()}(s):function(e){t.push(),t.translate(e[0],e[1]),t.ellipse(0,0,200,200),t.translate(10,30);for(var a=0;a<t.TWO_PI;a+=t.TWO_PI/12)t.strokeWeight(1),t.line(0,20,0,50),t.rotate(t.TWO_PI/12);t.pop()}(s),function(e,a){var n,r=t.map(a,0,100,-7,7),o=Object(v.a)(e);try{for(o.s();!(n=o.n()).done;){var s=n.value;t.stroke(225,175,105,s.alpha),t.strokeWeight(2),t.line(s.xpos,s.ypos,s.xpos+r,s.ypos+s.length)}}catch(i){o.e(i)}finally{o.f()}}(e,n.props.wind),function(e){var a,n=Object(v.a)(e);try{for(n.s();!(a=n.n()).done;){var r=a.value;t.fill(225,175,105,r.a),t.noStroke(),t.ellipse(r.x_pos,r.y_pos-r.ry,r.r,r.r)}}catch(o){n.e(o)}finally{n.f()}}(a),e=function(e,a,n,r){var o,s=[],i=170+n/100*150,c=t.map(r,0,100,-3,3),l=Object(v.a)(e);try{for(l.s();!(o=l.n()).done;){var d=o.value;d.ypos<t.windowHeight?(d.xpos+=c,d.ypos+=d.speed,d.alpha-=.5):(d.ypos=i,d.xpos=t.random(-30,t.width+30),d.alpha=t.random(200,255),d.speed=t.random(3,5)),s.push(d)}}catch(p){l.e(p)}finally{l.f()}if(s.length<a)for(var u=0;u<a-s.length;u++){var h={length:t.random(10,30),xpos:t.random(-30,t.width+30),ypos:i,speed:t.random(3,5),alpha:t.random(200,255)};s.push(h)}else s.length>a&&(s=s.slice(a),0==a&&(s=[]));return s}(e,n.props.rain,n.props.cloudsPos,n.props.wind),a=function(e,a,n){var r,o=[],s=Object(v.a)(e);try{for(s.s();!(r=s.n()).done;){var i=r.value;i.a>=i.maxa&&(i.c=1),0==i.c?(i.a+=.75,i.y_pos=200+n/100*150):(i.a-=.2,i.y_pos=200+n/100*150),i.a<=0&&1==i.c&&(i.x_pos=t.random(0,t.width),i.y_pos=200+n/100*150,i.ry=t.random(-100,100),i.a=0,i.maxa=t.random(155,255),i.c=0,i.r=t.random(50,200)),o.push(i)}}catch(d){s.e(d)}finally{s.f()}if(e.length<a)for(var c=0;c<a-o.length;c++){var l={x_pos:t.random(0,t.width),y_pos:150+n/100*150,ry:t.random(-100,100),r:t.random(50,200),maxa:t.random(155,255),a:0,c:0};o.push(l)}else o.length>a&&(o=o.slice(a));return 0==a&&(o=[]),o}(a,n.props.clouds,n.props.cloudsPos),r=function(e,a){var n,r=Object(v.a)(e);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.a+=t.random(-5,5),(o.a<0||o.a>255)&&(o.a=100)}}catch(c){r.e(c)}finally{r.f()}if(e.length<a)for(var s=0;s<a-e.length;s++){var i={tx:t.random(0,t.width),ty:t.random(30,175),s:t.random(3,10),a:t.random(30,150)};e.push(i)}else e.length>a&&(e=e.slice(a));return 0==a&&(e=[]),e}(r,n.props.stars)}},n.myRef=o.a.createRef(),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.myP5=new g.a(this.Sketch,this.myRef.current)}},{key:"render",value:function(){return Object(n.jsx)("div",{ref:this.myRef})}}]),a}(o.a.Component),x=function(t){Object(h.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).setOrb=n.setOrb.bind(Object(u.a)(n)),n.onChangeName=n.onChangeName.bind(Object(u.a)(n)),n.onSubmit=n.onSubmit.bind(Object(u.a)(n)),n.rainAttr=n.rainAttr.bind(Object(u.a)(n)),n.cloudsPosAttr=n.cloudsPosAttr.bind(Object(u.a)(n)),n.cloudsAttr=n.cloudsAttr.bind(Object(u.a)(n)),n.orbPosAttr=n.orbPosAttr.bind(Object(u.a)(n)),n.starsAttr=n.starsAttr.bind(Object(u.a)(n)),n.windAttr=n.windAttr.bind(Object(u.a)(n)),n.state={name:"",clouds:50,cloudsPos:100,rain:50,orb:"Sun",stars:50,orbPos:50,wind:50},n}return Object(d.a)(a,[{key:"setOrb",value:function(t){console.log(t.target.value),this.setState({orb:t.target.value})}},{key:"onChangeName",value:function(t){this.setState({name:t.target.value})}},{key:"onSubmit",value:function(t){t.preventDefault();var e={name:this.state.name,clouds:this.state.clouds,cloudsPos:this.state.cloudsPos,rain:this.state.rain,orb:this.state.orb,stars:this.state.stars,orbPos:this.state.orbPos,wind:this.state.wind};m.a.post("/api/pieces/create-piece",e).then((function(t){return console.log(t.data)})),this.setState(this.state={name:"",clouds:50,cloudsPos:100,rain:50,orb:"Sun",stars:50,orbPos:50,wind:50})}},{key:"rainAttr",value:function(t){this.setState({rain:2*t.target.value})}},{key:"cloudsPosAttr",value:function(t){this.setState({cloudsPos:parseInt(t.target.value)})}},{key:"cloudsAttr",value:function(t){this.setState({clouds:parseInt(t.target.value)})}},{key:"orbPosAttr",value:function(t){this.setState({orbPos:t.target.value})}},{key:"starsAttr",value:function(t){this.setState({stars:t.target.value})}},{key:"windAttr",value:function(t){this.setState({wind:t.target.value})}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"form-wrapper",children:[Object(n.jsx)(y,{wind:this.state.wind,stars:this.state.stars,rain:this.state.rain,orb:this.state.orb,orbPos:this.state.orbPos,cloudsPos:this.state.cloudsPos,clouds:this.state.clouds}),Object(n.jsx)("div",{style:{height:"25vh",overflow:"scroll"},children:Object(n.jsxs)(b.a,{onSubmit:this.onSubmit,children:[Object(n.jsxs)(b.a.Group,{controlId:"formBasicRange",onChange:this.rainAttr,children:[Object(n.jsx)(b.a.Label,{children:"Rain"}),Object(n.jsx)(b.a.Control,{type:"range"})]}),Object(n.jsxs)(b.a.Group,{controlId:"formBasicRange",onChange:this.windAttr,children:[Object(n.jsx)(b.a.Label,{children:"Wind"}),Object(n.jsx)(b.a.Control,{type:"range"})]}),Object(n.jsxs)(b.a.Group,{controlId:"formBasicRange",onChange:this.orbPosAttr,children:[Object(n.jsx)(b.a.Label,{children:"Ecliptic"}),Object(n.jsx)(b.a.Control,{type:"range"})]}),Object(n.jsxs)(b.a.Group,{controlId:"formBasicRange",onChange:this.cloudsAttr,children:[Object(n.jsx)(b.a.Label,{children:"Clouds"}),Object(n.jsx)(b.a.Control,{type:"range"})]}),Object(n.jsxs)(b.a.Group,{controlId:"formBasicRange",onChange:this.cloudsPosAttr,children:[Object(n.jsx)(b.a.Label,{children:"Cloud Position"}),Object(n.jsx)(b.a.Control,{type:"range"})]}),Object(n.jsxs)(b.a.Group,{controlId:"formBasicRange",onChange:this.starsAttr,children:[Object(n.jsx)(b.a.Label,{children:"Stars"}),Object(n.jsx)(b.a.Control,{type:"range"})]}),Object(n.jsxs)(b.a.Group,{controlId:"orb.Select1",onChange:this.setOrb,children:[Object(n.jsx)(b.a.Label,{children:"Sun/Moon"}),Object(n.jsxs)(b.a.Control,{as:"select",children:[Object(n.jsx)("option",{children:"Sun"}),Object(n.jsx)("option",{children:"Moon"})]})]}),Object(n.jsxs)(b.a.Group,{controlId:"Name",children:[Object(n.jsx)(b.a.Label,{children:"Signature"}),Object(n.jsx)(b.a.Control,{type:"text",value:this.state.name,onChange:this.onChangeName})]}),Object(n.jsx)(j.a,{variant:"danger",size:"lg",block:"block",type:"submit",children:"Submit"})]})})]})}}]),a}(r.Component);var P=function(){return Object(n.jsx)(c.a,{children:Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(x,{})})})},w=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,69)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,o=e.getLCP,s=e.getTTFB;a(t),n(t),r(t),o(t),s(t)}))};i.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(P,{})}),document.getElementById("root")),w()}},[[68,1,2]]]);
//# sourceMappingURL=main.8e361994.chunk.js.map