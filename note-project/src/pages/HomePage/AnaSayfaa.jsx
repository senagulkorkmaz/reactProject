import React, { Component } from "react";
import Navi from "../../layouts/NaviLayout/Navi";
import { Button, Icon } from "semantic-ui-react";
import { BrowserRouter as Rounter, Link } from "react-router-dom";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

export default class AnaSayfaa extends Component {
  render() {
    function ActionLink() {
      alertify.success('YÖNLENDİRME YAPILDI!!!  ✔');
    }
    
    return (
      <div>
        <Navi />
        <img className="imgess" src="/Adsız tasarım.png"></img>
        <Link onClick={ActionLink} to="/login" >
          <li>
            <Button  className="registerr" icon labelPosition="right">
              HADİ BAŞLAYALIM!!
              <Icon name="right arrow" />
            </Button>
          </li>
        </Link>
      </div>
    );
  }
}
