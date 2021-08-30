import React, { useState } from "react";
import LoadingScreen from "../react-loading-screen";
import {
  Button,
  Divider,
  Form,
  Grid,
  Segment,
  Icon,
  Header,
} from "semantic-ui-react";
import {
  BrowserRouter as Rounter,
  Route,
  Switch,
  Link,
} from "react-router-dom";

export default function Login() {
  return (
    <LoadingScreen
      loading={true}
      bgColor="#f1f1f1"
      spinnerColor="#9ee5f8"
      textColor="#676767"
      logoSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAdVBMVEX///8AAAAnJydXV1fX19enp6cVFRX8/PwFBQX39/fj4+Pq6upNTU1gYGD29vbl5eUwMDCZmZnw8PAeHh59fX3Pz8+8vLySkpKwsLAjIyMNDQ3Jyck3Nze2trZJSUmGhoZqamqWlpZ1dXWKioo+Pj5oaGgZGRn731C1AAADaUlEQVR4nO3ba5OyIBQH8KW8ZmWWWtnFttv3/4hPghfEbXVoC3jm/3uVk8yco8lBoK8vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBcE+c12VQfxB4IVIWSsOoo/EJNCojqM141pIrbqMF7XTcTfTZRF84JOIqlDyMzAp19MZOkUx2uFEUkSEznR46nCiCQJiVgePZ6pDEmOkMiVHpKdypDktBPZEFNvSDsRf0uPslBtTFJaiVzYDbmoDUkOn0iY0YOtrzgmKXwiM3ZDNopDksPqRlp83LE8jqpDkpMUhWNEhySs6/Us7tu5QeOu9Loa017KZTfk1Hzlfps57qKjLGdZH6cLYua4a92q8ZMpu0Mmjrvs6fRQfpzHXpmHkWW+Zt+rNEhm9Z+uq92+ToPsDX6dXzdprEx+mQ/qp8OL56qDeUVa5TE2pxj+KGR3ZJGqDuRleVEXI/MKelcafy/7zwIArUxmI84iH9YZhVKt3mm+JW2nIa38kUyrt7KFiIg3ZIpk02mlfKwSiSGRIRWik/6gVm818YSIrkNahVKt3mvjtCLaDxsIHqRavZdrcQZP6rZa6ZAGwIe4yYBJET/RfoHk8CjZ16DnpGKBWu/XXOtIO9OeGbc57Xo1nnhYnssy5/x+Xrm6QO56TgW5UV3jRr+faTV1UMPF3XJmneq70tPm1JlmT/1k3MS26l1Z85sJbJLlOi0oplkT2KBnmE98oXzg22hek+pe1Vrb3UsdRlHVNXM/xfhjcfbx64tbP7zrny51ceOcavKdLrtRGi30rFiv20wesq0z4qWmN25Rn7Q8sUfl/LE4e20eEXln7gYcuUu9vJxYN1YuhkbNabSAbvsGAp9k5Tk/5DiQ5lIH27rWs3kKh//FpXGk0bMuctnDz7bOcLtMbaLbT6lHuSKV0wN+CwdbcfNMWTQMWFVZse6XT8SwPRy31kCltc2p3FVzeN5YIwkLtprgaSVS7nMaqZ8hHaDctVgVvvZWwJx9acKujbJrulXH7UR8VjsznWrHEyMhUmGXqa3b+OoZX/ztiBuYr6Z0XFvhaRYTSUwpiofHuCvjXmE7m/xj3cZXz1j5hR93df92Yeji9H/zRxhul6nZdh4xpZT3SPd3vedHAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAj/AEx4HSbSD8RYAAAAAElFTkSuQmCC"
    >
      <div>
        <Segment placeholder className="deneme">
          <Grid columns={1} relaxed="very" stackable>
            <Grid.Column>
              <Form>
                <Form.Input
                  icon="mail"
                  iconPosition="left"
                  label="Kullanıcı Adı"
                  placeholder="Kullanıcı Adı"
                />
                <Form.Input
                  icon="lock"
                  iconPosition="left"
                  label="Parola"
                  type="Parola"
                  placeholder="Parola"
                />

                <Link to="/profile">
                  <li>
                    <Button onClick={this.fetchData} color="red">
                      GİRİŞ YAP
                    </Button>
                  </li>
                </Link>
                {/* <Button onClick={signOut} content='GİRİŞ YAP' primary /> */}
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
    </LoadingScreen>
  );
}
