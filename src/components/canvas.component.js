import React, { Component } from "react";
import p5 from 'p5';
import axios from 'axios';

export default class Canvas extends React.Component {
    constructor(props) {
      super(props)
      this.myRef = React.createRef()
    }
  
    Sketch = (p) => {
      let multiplier;
      
      function initRain(c_p) {
        let ls = [];
        let y = 150 + 150*(c_p/100);
        for (let i = 0; i<100; i++ ) {
          let o = {
            length: p.random(10,30),
            xpos: p.random(-30, p.width+30),
            ypos: y,
            speed: p.random(3, 5),
            alpha: p.random(200,255)
          }
          ls.push(o);
        }
        return ls
      }

      function updateRain(rainObj, rainAttr, c_p, wind) {
        let y = 170 + 150*(c_p/100);
        let xoff = p.map(wind, 0, 100, -3, 3);
        for (let i=0;i<rainAttr;i++) {
          let obj = rainObj[i];
          if (obj.ypos < p.windowHeight) {
            obj.xpos += xoff;
            obj.ypos += obj.speed;
            obj.alpha -= 0.5;
          } else {
            obj.ypos = y;
            obj.xpos = p.random(-30,p.width+30);
            obj.alpha = p.random(200,255);
            obj.speed = p.random(3,5);
          }
          rainObj[i]=obj;         
        }
        return rainObj;
      }

      function rainFall(r, rainObj, wind) {
        let xoff = p.map(wind, 0, 100, -7, 7);
        for (let i=0;i<parseInt(r);i++) {
          let obj = rainObj[i];
          p.stroke(225, 175, 105, obj.alpha);
          p.strokeWeight(2);
          p.line(obj.xpos, obj.ypos, obj.xpos+xoff, obj.ypos + obj.length);
        }
      }

      function orbPosCalc(orbPos) {
        let x_pos = p.width*orbPos/100;
        let y_pos = 120 + 100*(0.5 + p.cos(p.TWO_PI * orbPos/100));
        return [x_pos, y_pos]
      }

      function initClouds(cp) {
        // create list of objects
        let cloudsList = []
        for (let i=0; i<100; i++) {
          let cloud = {
            x_pos: p.random(0, p.width),
            y_pos: p.height/6 + (p.height/7)*(cp/100),
            ry: p.random(-p.height/8,p.height/8),
            r: p.random(50,200),
            maxa: p.random(155,255),
            a: 0,
            c: 0
          }
          cloudsList.push(cloud);
        }
        return cloudsList
      }

      function updateClouds(cloudsObj, cloudsAttr, cp) {
        for (let i=0;i<cloudsAttr;i++) {
          let c = cloudsObj[i];
          if (c.a>=c.maxa){
            c.c = 1;          
          }
          if (c.c == 0) {
            c.a += p.random(0.5,1);
            c.y_pos = p.height/6 + (p.height/7)*(cp/100);
          } else {
            c.a -= (0.1,0.5);
            c.y_pos = p.height/6 + (p.height/7)*(cp/100);
          }          
          if (c.a <= 0 && c.c == 1) {
            c.x_pos = p.random(0, p.width);
            c.y_pos = p.height/6 + (p.height/7)*(cp/100);
            c.ry = p.random(-p.height/8,p.height/8);
            c.a = 0;
            c.maxa = p.random(155,255);
            c.c = 0;
            c.r = p.random(50,200);
          }
          cloudsObj[i]=c;
        }
        return cloudsObj
      }

      function drawClouds(cloudsObj, cloudsNumber) {
        for (let i=0;i<cloudsNumber;i++) {
          let c = cloudsObj[i];
          p.fill(225, 175, 105, c.a);
          p.noStroke()
       //   p.strokeWeight(1);
          p.ellipse(c.x_pos, c.y_pos - c.ry, multiplier*c.r, multiplier*c.r);
        }
      }

      function drawOrb(whichOrb, op){
        let ls, le, mx, my;
        if (whichOrb=="Sun") {
          ls = 100;
          le = 200;
          mx = 0;
          my = 0;
        } else {
          ls=20;
          le=50;
          mx = 10;
          my=30;
        }
        p.push();
        p.translate(op[0],op[1]);
        p.ellipse(0,0,multiplier*200,multiplier*200);
        p.translate(mx, my);
        for (let i=0; i < p.TWO_PI; i+= p.TWO_PI/12) {
          p.strokeWeight(1);
          p.line(0, multiplier*ls, 0, multiplier*le);
          p.rotate(p.TWO_PI/12);
        }
        p.pop();
      }
      
      function initStars() {
        let stars = [];
        for (let i=0;i<100;i++){
          let o = {
            tx: p.random(0, p.width),
            ty: p.random(30,275),
            s: p.random(3,10),
            a: p.random(30,150)
          };
          stars.push(o);
        }
        return stars
      }

      function updateStars(stars, starsAttr) {
        for (let i=0;i<starsAttr;i++) {
          let s = stars[i];
          s.a += p.random(-5,5);
          if (s.a < 0 || s.a > 255) {
            s.a = 100;
          }
        }
        return stars
      }

      function drawStars(stars, starsNum) {
        for (let i=0;i<starsNum;i++) {
          let s = stars[i];
          p.push();
          p.translate(s.tx, s.ty);
          p.rotate(p.HALF_PI/2);
          p.stroke(225, 175, 105, s.a);
          p.noFill();
          p.strokeWeight(1);
          p.rect(0, 0, s.s, s.s);
          p.pop();
        }
      }

      let rain;
      let clouds;
      let stars;

      p.setup = () => {
        if (p.windowWidth>p.windowHeight) {
          p.createCanvas(p.windowWidth,p.windowHeight*0.75);
          multiplier = 1;
        } else {
          p.createCanvas(p.windowWidth,p.windowWidth*1.425);
          multiplier = 0.6;
        }       
        rain = initRain(this.props.cloudsPos);
        clouds = initClouds(this.props.cloudsPos);
        stars = initStars();
       }
  
      p.draw = () => {
        // change colour based on orbPos and type...
        p.background(10,15,25);
        p.stroke(225, 175, 105);
        p.fill(10,15,25);
        p.strokeWeight(4);
        if (this.props.orb == "Moon") {
          drawStars(stars, this.props.stars);
          stars = updateStars(stars, this.props.stars);
        }

        // calculate Orb Position, draw Orb
        let o_p = orbPosCalc(this.props.orbPos);
        drawOrb(this.props.orb, o_p);
        rainFall(this.props.rain, rain, this.props.wind);
        drawClouds(clouds, this.props.clouds);
        rain = updateRain(rain, this.props.rain, this.props.cloudsPos, this.props.wind);
        clouds = updateClouds(clouds, this.props.clouds, this.props.cloudsPos);
      }

    }

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
      }
    
      render() {
        return (
            <div ref={this.myRef}>

            </div>

        )
      }
}
