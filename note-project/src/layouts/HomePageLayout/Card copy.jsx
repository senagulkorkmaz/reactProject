import React from "react";
import { Card, Icon, Image, Button, Dropdown } from "semantic-ui-react";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import Profileİnformation from "../NaviLayout/Profileİnformation";
import Space from "../../pages/Space";

const CardExampleCard = () => (
  <div>
    <img className="imges" src="/plan14.jpeg"></img>

    <Card className="profil">
      <Profileİnformation />
      <Space/>
      <Image
        className="kucult"
        src="https://as2.ftcdn.net/v2/jpg/01/97/15/87/1000_F_197158744_1NBB1dEAHV2j9xETSUClYqZo7SEadToU.jpg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>SENAGÜL KORKMAZ</Card.Header>
        <Card.Meta>
          <span className="date">senagulkorkmazz(kullaniciadi)</span>
        </Card.Meta>
        <Card.Description>
          <Profile />
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>

      <Link to="/ProfilGüncelle">
        <li>
          <Button
            className="guncelle"
            content="Bilgilerimi Güncelle"
            icon="right arrow"
            labelPosition="right"
          />
        </li>
      </Link>
    </Card>
  </div>
);

export default CardExampleCard;
