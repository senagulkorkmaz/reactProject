import React from "react";
import {
  Divider,
  Form,
  Label,
  Segment,
  Grid,
  Button,
  Image,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

function ActionLink() {
  alertify.success('KAYIT BAŞARILI!  ✔');
}

const SignIn = () => (
  <div>
    <Image className="imges" src="/plan14.jpeg" fluid />

    <Segment placeholder className="register">
      <Grid columns={1} relaxed="very" stackable>
        <Grid.Column>
          <Form>
            <Form.Field>
              <Form.Input
                icon="user"
                iconPosition="left"
                label="Adınız"
                placeholder="Adınız"
              />
              <Label basic color="red" pointing>
                Lütfen bir değer giriniz
              </Label>
            </Form.Field>
            <Divider />
            <Form.Field>
              <Form.Input
                icon="user"
                iconPosition="left"
                label="Soyadınız"
                placeholder="Soyadınız"
              />
              <Label basic color="red" pointing>
                Lütfen bir değer giriniz
              </Label>
            </Form.Field>
            <Divider />

            <Form.Field inline>
              <Form.Input
                icon="user"
                iconPosition="left"
                label="Kullanıcı Adınız"
                placeholder="Kullanıcı Adınız"
              />
              <Label basic color="red" pointing>
                Kullanıcı adı bulunuyor!!
              </Label>
            </Form.Field>
            <Divider />

            <Form.Field inline>
              <Form.Input
                icon="lock"
                iconPosition="left"
                label="Parola"
                type="Parola"
                placeholder="Parola"
              />
              <Label basic color="red" pointing>
                Şifreniz 6 karakter veya daha fazla olmalıdır
              </Label>
            </Form.Field>
            <Link onClick={ActionLink} to="/login">
              <li>
                <Button
                  color="red"
                  style={{ marginLeft: "0.5em" }}
                  content="KAYIT OL"
                  primary
                />
              </li>
            </Link>
          </Form>
        </Grid.Column>
      </Grid>
    </Segment>
  </div>
);

export default SignIn;
