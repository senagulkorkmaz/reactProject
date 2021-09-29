import {
  Button,
  Form,
  Grid,
  Segment,
  Checkbox,
  Header,
} from "semantic-ui-react";
import { BrowserRouter as Rounter, Route, Switch } from "react-router-dom";
import Space from "../../pages/Space";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
import SmoothList from "react-smooth-list";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) history.replace("/profile");
  }, [user, loading]);

  function ActionLink() {
    alertify.success("GİRİŞ BAŞARILI!  ✔");
  }

  return (
    // <div>
    //   <Space />
    //   <Segment placeholder className="deneme">
    //     <Grid columns={1} relaxed="very" stackable>
    //       <p className="baslik">
    //         <font size="5" face="Agency FB" color="black">
    //           NOTSENBOOK
    //         </font>
    //       </p>
    //       <Grid.Column>
    //         <Form>
    //           <br></br>
    //           <br></br>
    //           <Form.Input
    //             type="text"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             placeholder="E-mail Address"
    //             icon="mail"
    //             iconPosition="left"
    //             label="Email"
    //           />
    //           <Form.Input
    //             type="password"
    //             className="login__textBox"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //             placeholder="Password"
    //             icon="lock"
    //             iconPosition="left"
    //             label="Parola"
    //           />
    //           <Checkbox left="center" label="Beni Hatırla" defaultChecked />
    //           <br></br>
    //           <br></br>
    //           <Link>
    //             <li>
    //               <Button
    //                 onClick={() => signInWithEmailAndPassword(email, password)}
    //                 color="red"
    //               >
    //                 GİRİŞ YAP
    //               </Button>
    //             </li>
    //           </Link>
    //           <p></p>
    //           {/* <GoogleButton onClick={signInWithGoogle}>
    //             GOOGLE İLE GİRİŞ YAP
    //           </GoogleButton> */}
    //           <Button
    //             onClick={signInWithGoogle}
    //             style={{ color: "red" }}
    //             content="GOOGLE İLE GİRİŞ YAP"
    //             icon="google"
    //           />
    //           {/* <Button onClick={signInWithGoogle} color="red" icon="google">
    //             GOOGLE İLE GİRİŞ YAP
    //           </Button> */}
    //           <p></p>
    //           <div>
    //             <Link to="/reset">Parolamı Unuttum</Link>
    //           </div>
    //           <Header as="h5">Kullanıcı Değilsen!</Header>
    //           <Link to="/register">
    //             <li>
    //               <Button
    //                 content="Kayıt Ol"
    //                 icon="right arrow"
    //                 labelPosition="right"
    //               />
    //             </li>
    //           </Link>
    //         </Form>
    //       </Grid.Column>
    //     </Grid>
    //   </Segment>
    // </div>
    <SmoothList>
      <div className="login" className="deneme">
        <h1></h1>
        <div className="login__container">
          <h1></h1>
          <p className="baslik">
            <font size="5" face="Agency FB" color="black">
              NOTSENBOOK
            </font>
          </p>
          <h1></h1>
          <input
            type="text"
            className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Addres"
          />
          <h2></h2>
          <input
            type="password"
            className="login__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Parola"
          />
          <h2></h2>

          <button
            className="login__btn"
            onClick={() => signInWithEmailAndPassword(email, password)}
          >
            GİRİŞ
          </button>
          <h3></h3>
          <button
            className="login__btn login__google"
            onClick={signInWithGoogle}
          >
            Google ile Giriş
          </button>
          <h2></h2>
          <div>
            <Link to="/reset">Parolamı Unuttum</Link>
          </div>
          <h2 />
          <div>
            Hesabınız yok mu? <Link to="/register">Şimdi KAYIT OL</Link>
          </div>
        </div>
      </div>
    </SmoothList>
  );
}

export default Login;
