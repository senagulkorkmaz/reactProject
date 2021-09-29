import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { auth, sendPasswordResetEmail } from "./firebase";
import Navi from "../NaviLayout/Navi";
import {
  Button,
  Form,
  Grid,
  Segment,
  Checkbox,
  Header,
} from "semantic-ui-react";
import Space from "../../pages/Space";

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/profile");
  }, [user, loading]);

  return (
    <div>
      <Navi />
      <img className="imges" src="/plan14.jpeg"></img>
      <Space />
      <Segment placeholder className="reset">
        <Grid columns={1} relaxed="very" stackable>
          <p className="baslik">
            <font size="5" face="Agency FB" color="black">
              NOTSENBOOK
            </font>
          </p>
          <Grid.Column>
            <Form>
              <Form.Input
                type="text"
                className="reset__textBox"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail Address"
                icon="mail"
                iconPosition="left"
                label="Email"
              />
              <Button
                className="reset__btn"
                onClick={() => sendPasswordResetEmail(email)}
                color="red"
              >
                Şifre sıfırlama e-postası gönder.
              </Button>
              <br></br>
              <div>
                Hesabın yok mu? <Link to="/register">Kayıt Ol</Link>
              </div>
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
}

export default Reset;
