import {
  Divider,
  Form,
  Label,
  Segment,
  Grid,
  Button,
  Image,
} from "semantic-ui-react";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "./firebase";
import Space from "../../pages/Space";
import Navi from "../NaviLayout/Navi";

function ProfilGuncelle() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [university, setUniversity] = useState("");
  const [fakulte, setFakulte] = useState("");
  const [bolum, setBolum] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  const register = () => {
    if (!name) alert("Lütfen Adınızı Giriniz");
    registerWithEmailAndPassword(name, surname, university, fakulte, bolum);
  };

  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/ProfilGüncelle");
  }, [user, loading]);

  return (
    <div>
      <Navi />
      <Image className="imges" src="/plan14.jpeg" fluid />
      <Space />
      <Space />
      <Segment placeholder className="register">
        <Grid columns={1} relaxed="very" stackable>
          <p className="notsenbook">
            <font size="5" face="Agency FB" color="black">
              NOTSENBOOK
            </font>
          </p>
          <Grid.Column>
            <Form>
              <Form.Field>
                <br></br>
                <br></br>
                <Form.Input
                  type="text"
                  className="register__textBox"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  icon="user"
                  iconPosition="left"
                  label="Adınız "
                  placeholder="Adınız"
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  type="text"
                  className="register__textBox"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  icon="user"
                  iconPosition="left"
                  label="Soyadınız"
                  placeholder="Soyadınız"
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  type="text"
                  className="register__textBox"
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                  icon="university"
                  iconPosition="left"
                  label="Üniversite"
                  placeholder="Üniversite"
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  type="text"
                  className="register__textBox"
                  value={fakulte}
                  onChange={(e) => setFakulte(e.target.value)}
                  icon="edit outline"
                  iconPosition="left"
                  label="Fakülte"
                  placeholder="Fakülte"
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  type="text"
                  className="register__textBox"
                  value={bolum}
                  onChange={(e) => setBolum(e.target.value)}
                  icon="laptop"
                  iconPosition="left"
                  label="Bölüm"
                  placeholder="Bölüm"
                />
              </Form.Field>

              {/* <Divider />
              <Form.Field>
                <Form.Input
                  type="text"
                  className="register__textBox"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  icon="user"
                  iconPosition="left"
                  label="Soyadınız"
                  placeholder="Soyadınız"
                />
              </Form.Field>
              <Divider /> */}

              <Button
                className="kayit"
                onClick={register}
                color="red"
                style={{ marginLeft: "0.5em" }}
                content="GÜNCELLE"
                primary
                icon="registered"
              />
              <br></br>
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
}
export default ProfilGuncelle;
