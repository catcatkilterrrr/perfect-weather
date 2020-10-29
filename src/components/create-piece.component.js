import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Canvas from './canvas.component'

export default class CreatePiece extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.setOrb = this.setOrb.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.rainAttr = this.rainAttr.bind(this);
    this.cloudsPosAttr = this.cloudsPosAttr.bind(this);
    this.cloudsAttr = this.cloudsAttr.bind(this);
    this.orbPosAttr = this.orbPosAttr.bind(this);
    this.starsAttr = this.starsAttr.bind(this);
    this.windAttr = this.windAttr.bind(this);
    // Setting up state
    this.state = {
      name: '',
      clouds: 50,
      cloudsPos: 100,
      rain: 50,
      orb: "Sun",
      stars: 50,
      orbPos: 50,
      wind: 50
    }
  }

  setOrb(e) {
    console.log(e.target.value)
    this.setState({ orb: e.target.value })
  }

  onChangeName(e) {
    this.setState({ name: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const attrsObject = {
      name: this.state.name,
      clouds: this.state.clouds,
      cloudsPos: this.state.cloudsPos,
      rain: this.state.rain,
      orb: this.state.orb,
      stars: this.state.stars,
      orbPos: this.state.orbPos,
      wind: this.state.wind
    };
    axios.post('/api/pieces/create-piece', attrsObject)
      .then(res => console.log(res.data));

     this.setState(this.state = {
      name: '',
      clouds: 50,
      cloudsPos: 100,
      rain: 50,
      orb: "Sun",
      stars: 50,
      orbPos: 50,
      wind: 50
    })
  }

  rainAttr(e) {
		this.setState({
			rain: 2*e.target.value
		})
  }

  cloudsPosAttr(e) {
		this.setState({
			cloudsPos: parseInt(e.target.value)
		})
  }
  cloudsAttr(e) {
		this.setState({
			clouds: parseInt(e.target.value)
		})
  }

  orbPosAttr(e) {
		this.setState({
			orbPos: e.target.value
		})
  }
  
  starsAttr(e) {
		this.setState({
			stars: e.target.value
		})
	}
  
  windAttr(e) {
		this.setState({
			wind: e.target.value
		})
  }
  
  render() {
    const divStyle = {
      height: "25vh",
      overflow: "scroll"
    };
    return (<div className="form-wrapper">
      <Canvas wind={this.state.wind} stars={this.state.stars} rain={this.state.rain} orb={this.state.orb} orbPos={this.state.orbPos} cloudsPos={this.state.cloudsPos} clouds={this.state.clouds} />
      <div style={divStyle}>
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="formBasicRange" onChange={this.rainAttr}>
          <Form.Label>Rain</Form.Label>
          <Form.Control type="range" />
        </Form.Group>

        <Form.Group controlId="formBasicRange" onChange={this.windAttr}>
          <Form.Label>Wind</Form.Label>
          <Form.Control type="range" />
        </Form.Group>

        <Form.Group controlId="formBasicRange" onChange={this.orbPosAttr}>
          <Form.Label>Ecliptic</Form.Label>
          <Form.Control type="range" />
        </Form.Group>

        <Form.Group controlId="formBasicRange" onChange={this.cloudsAttr}>
          <Form.Label>Clouds</Form.Label>
          <Form.Control type="range" />
        </Form.Group>

        <Form.Group controlId="formBasicRange" onChange={this.cloudsPosAttr}>
          <Form.Label>Cloud Position</Form.Label>
          <Form.Control type="range" />
        </Form.Group>

        <Form.Group controlId="formBasicRange" onChange={this.starsAttr}>
          <Form.Label>Stars</Form.Label>
          <Form.Control type="range" />
        </Form.Group>

        <Form.Group controlId="orb.Select1" onChange={this.setOrb}>
          <Form.Label>Sun/Moon</Form.Label>
          <Form.Control as="select">
            <option>Sun</option>
            <option>Moon</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Signature</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeName} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    </div>);
  }
}