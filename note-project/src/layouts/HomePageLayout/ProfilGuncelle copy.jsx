import React, { Component } from "react";
import {
  Button,
  Divider,
  Form,
  Grid,
  Segment,
  Icon,
  Header,
  Image,
} from "semantic-ui-react";
import {
  BrowserRouter as Rounter,
  Route,
  Switch,
  Link,
} from "react-router-dom";

export default class ProfilGuncelle extends Component {
  render() {
    return (
      <div>
        <Image className="imges" src="/plan14.jpeg" fluid />
        <Segment placeholder className="guncellee">
          <Grid columns={1} relaxed="very" stackable>
            <Grid.Column>
              <Form>
                <Form.Input
                  icon="university"
                  iconPosition="left"
                  label="ÜNİVERSİTE"
                  type="uni"
                  placeholder="ÜNİVERSİTE"
                />
                <Form.Input
                  icon="edit outline"
                  iconPosition="left"
                  label="FAKÜLTE"
                  type="fakulte"
                  placeholder="FAKÜLTE"
                />
                <Form.Input
                  icon="laptop"
                  iconPosition="left"
                  label="BÖLÜM"
                  type="bolum"
                  placeholder="BÖLÜM"
                />
                <Link to="/information">
                  <li>
                    <Button color="red">GÜNCELLE</Button>
                  </li>
                </Link>
                {/* <Button onClick={signOut} content='GİRİŞ YAP' primary /> */}
              </Form>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    );
  }
}
