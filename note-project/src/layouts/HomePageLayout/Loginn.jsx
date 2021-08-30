import React, { Component } from 'react'
import {
  Button,
  Form,
  Grid,
  Segment,
  Checkbox,
  Header,
} from "semantic-ui-react";
import {
  BrowserRouter as Rounter,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import Space from '../../pages/Space';
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

 class Loginn extends Component {
 
  state={
    email:'',
    password:'',
  }
  handleChange =(e)=>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit =(e)=>{
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    function ActionLink() {
      alertify.success("GİRİŞ BAŞARILI!  ✔");
    }
    return (
      <div className="container">
      <Space/>
      <Segment  placeholder className="deneme">
        <Grid columns={1} relaxed="very" stackable>
          <p className="baslik">
            <font size="6" face="Agency FB" color="black">
              NOTSENBOOK
            </font>
          </p>
          <Grid.Column>
            <Form onSubmit={this.handleSubmit}>
              <br></br>
              <br></br>
              <div className="input-field">
              <Form.Input
              onChange={this.handleChange}
                id="email"
                type="email"
                icon="user"
                iconPosition="email"
                label="email"
                placeholder="email"
              />
              </div>
              <div className="input-field">
              <Form.Input
              onChange={this.handleChange}
                id="password"
                icon="lock"
                iconPosition="left"
                label="password"
                type="password"
                placeholder="password"
              />
              </div>
              <Checkbox left="center" label="Beni Hatırla" defaultChecked />
              <br></br>
              <br></br>
              <div className="input-field">
              <Link onClick={ActionLink} to="/profile">
                <li>
                  <button className="btn red lighten-1 z-depth-0">GİRİŞ YAP</button>
                </li>
              </Link>
              </div>
              <Header as="h5">Kullanıcı Değilsen!</Header>
              <Link to="/register">
                <li>
                  <Button
                    content="Kayıt Ol"
                    icon="right arrow"
                    labelPosition="right"
                  />
                </li>
              </Link>
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
    )
  }
}

export default Loginn
