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
import React, { Component } from "react";
import Space from "../../pages/Space";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

class Login extends Component {
  render() {
    function ActionLink() {
      alertify.success("GİRİŞ BAŞARILI!  ✔");
    }

    return (
      <div>
        <Space />
        <Segment placeholder className="deneme">
          <Grid columns={1} relaxed="very" stackable>
            <p className="baslik">
              <font size="6" face="Agency FB" color="black">
                NOTSENBOOK
              </font>
            </p>
            <Grid.Column>
              <Form>
                <br></br>
                <br></br>
                <Form.Input
                  id="email"
                  type="email"
                  icon="mail"
                  iconPosition="left"
                  label="Email"
                  placeholder="Email"
                />
                <Form.Input
                  id="password"
                  icon="lock"
                  iconPosition="left"
                  label="Parola"
                  type="password"
                  placeholder="Parola"
                />
                <Checkbox left="center" label="Beni Hatırla" defaultChecked />
                <br></br>
                <br></br>
                <Link to="/profile">
                  <li>
                    <Button color="red">GİRİŞ YAP</Button>
                  </li>
                </Link>
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
    );
  }
}

export default Login;