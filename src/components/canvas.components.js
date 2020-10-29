import React, { Component } from "react";
import p5 from 'p5';
import axios from 'axios';

export default class Canvas extends React.Component {
    constructor(props) {
      super(props)
      this.myRef = React.createRef()
    }
  
    Sketch = (p) => {
      
      function initRain(r, c_p) {
        let ls = [];
        let y = 150 + 150*(c_p/100);
        for (let i = 0; i<r; i++ ) {
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

      function updateRain(rainObj, rainIntensity, c_p, wind) {
        let newls = []
        let y = 170 + 150*(c_p/100);
        let xoff = p.map(wind, 0, 100, -3, 3);
        for (let obj of rainObj) {
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
          newls.push(obj);         
        }

        if (newls.length<rainIntensity) {
          for (let i = 0; i< (rainIntensity-newls.length); i++) {
            let newObj = {
              length: p.random(10,30),
              xpos: p.random(-30,p.width+30),
              ypos: y,
              speed: p.random(3, 5),
              alpha: p.random(200,255)
            };
            newls.push(newObj);
          }
        } else if (newls.length > rainIntensity) {
          newls = newls.slice(rainIntensity);
          if (rainIntensity == 0) {
            newls = []
          }
        }

        return newls
      }

      function rainFall(rainObj, wind) {
        let xoff = p.map(wind, 0, 100, -7, 7);
        for (let obj of rainObj) {
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

      function initClouds(clouds, cp) {
        // create list of objects
        let cloudsList = []
        for (let i=0; i<clouds; i++) {
          let cloud = {
            x_pos: p.random(0, p.width),
            y_pos: 200 + 150*(cp/100),
            ry: p.random(-100,100),
            r: p.random(50,200),
            maxa: p.random(155,255),
            a: 0,
            c: 0
          }
          cloudsList.push(cloud);
        }
        return cloudsList
      }

      function updateClouds(cloudsObj, cloudsNumber, cp) {
        let cloudsList = [];
        for (let c of cloudsObj) {
          if (c.a>=c.maxa){
            c.c = 1;          
          }
          if (c.c == 0) {
            c.a += 0.75;
            c.y_pos = 200 + 150*(cp/100);
          } else {
            c.a -= 0.2;
            c.y_pos = 200 + 150*(cp/100);
          }          
          if (c.a <= 0 && c.c == 1) {
            c.x_pos = p.random(0, p.width);
            c.y_pos = 200 + 150*(cp/100);
            c.ry = p.random(-100,100);
            c.a = 0;
            c.maxa = p.random(155,255);
            c.c = 0;
            c.r = p.random(50,200);
          }
          cloudsList.push(c);
        }

        if (cloudsObj.length < cloudsNumber) {
          for (let i=0;i<(cloudsNumber - cloudsList.length);i++) {
            let cloud = {
              x_pos: p.random(0, p.width),
              y_pos: 150 + 150*(cp/100),
              ry: p.random(-100,100),
              r: p.random(50,200),
              maxa: p.random(155,255),
              a: 0,
              c: 0
            }
            cloudsList.push(cloud);           
          }
        } else if (cloudsList.length > cloudsNumber) {
            cloudsList = cloudsList.slice(cloudsNumber);
        }
        if (cloudsNumber == 0 ) {
          cloudsList = []
        }
        return cloudsList
      }

      function drawClouds(cloudsObj) {
        for (let c of cloudsObj) {
          p.fill(225, 175, 105, c.a);
          p.noStroke()
       //   p.strokeWeight(1);
          p.ellipse(c.x_pos, c.y_pos - c.ry, c.r, c.r);
        }
      }

      function drawSun(op) {
        p.push();
        p.translate(op[0],op[1]);
        p.ellipse(0,0,200,200);
        for (let i=0; i < p.TWO_PI; i+= p.TWO_PI/12) {
          p.strokeWeight(1);
          p.line(0, 100, 0, 200);
          p.rotate(p.TWO_PI/12);
        }
        p.pop();
      }

      function drawMoon(op) {
        p.push();
        p.translate(op[0],op[1]);
        p.ellipse(0,0,200,200);
        p.translate(10,30);
        for (let i=0; i < p.TWO_PI; i+= p.TWO_PI/12) {
          p.strokeWeight(1);
          p.line(0, 20, 0, 50);
          p.rotate(p.TWO_PI/12);
        }
        p.pop();
      }
      
      function initStars(s) {
        let stars = [];
        for (let i=0;i<s;i++){
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

      function updateStars(stars, starsProp) {
        let a;
        for (let s of stars) {
          s.a += p.random(-5,5);
          if (s.a < 0 || s.a > 255) {
            s.a = 100;
          }
        }

        if (stars.length < starsProp) {
          for (let i=0;i<(starsProp-stars.length);i++) {
            let o = {
              tx: p.random(0, p.width),
              ty: p.random(30,175),
              s: p.random(3,10),
              a: p.random(30,150)
            };
            stars.push(o);           
          }
        } else if (stars.length > starsProp) {
          stars = stars.slice(starsProp);
        }
        if (starsProp == 0 ) {
          stars = [];
        }
        return stars
      }

      function drawStars(stars) {
        for (let s of stars) {
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
        p.createCanvas(p.windowWidth,p.windowHeight*0.75);
        rain = initRain(this.props.rain, this.props.cloudsPos);
        clouds = initClouds(this.props.clouds, this.props.cloudsPos);
        stars = initStars(this.props.stars);
       }
  
      p.draw = () => {
        // change colour based on orbPos and type...
        p.background(10,15,25);
        p.stroke(225, 175, 105);
        p.fill(10,15,25);
        p.strokeWeight(4);
        drawStars(stars);
        // calculate Orb Position, draw Orb
        let o_p = orbPosCalc(this.props.orbPos);
        if (this.props.orb==="Sun") {
          drawSun(o_p);
        } else {
          drawMoon(o_p);
        }
        rainFall(rain, this.props.wind);
        drawClouds(clouds);
        rain = updateRain(rain, this.props.rain, this.props.cloudsPos, this.props.wind);
        clouds = updateClouds(clouds, this.props.clouds, this.props.cloudsPos);
        stars = updateStars(stars, this.props.stars);
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
