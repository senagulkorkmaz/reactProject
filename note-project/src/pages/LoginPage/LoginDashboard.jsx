import React from "react";
import Navi from "../../layouts/NaviLayout/Navi";
import { Image } from "semantic-ui-react";
import Loginn from "../../layouts/HomePageLayout/Loginn";
import Login from "../../layouts/HomePageLayout/Login";

export default function LoginDashboard() {
  return (
    <div>
      <Navi />
      <img className="imges" src="/plan14.jpeg"></img>
      <Login/>
    </div>
  );
}
