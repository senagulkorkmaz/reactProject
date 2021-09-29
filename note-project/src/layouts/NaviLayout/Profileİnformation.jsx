import React from "react";
import { Grid, Image, Menu, Container, Input } from "semantic-ui-react";
import Space from "../../pages/Space";
import SignedIn from "../HomePageLayout/SignedIn";
import { Link } from "react-router-dom";
import Datetime from "../HomePageLayout/DateTime";

export default function Profileİnformation() {
  return (
    <div>
      
      <Menu inverted fixed="top">
        
        <Container>
          <Link to="/profile">
            <li>
              <Menu.Item name="ANA SAYFA" />
             
            </li>
            
          </Link>

          <Link to="/">
            <li>
              <Menu.Item name="NOTSENBOOK" />
            </li>
          </Link>
            {/* <Input
                action={{ color: "grey", content: "Ara" }}
                icon="user"
                iconPosition="left"
                placeholder="Kullanıcılar"
              /> */}

          <Grid.Row columns={1}>
            <Grid.Column className="arama">
              <Input
                action={{ color: "grey", content: "Ara" }}
                icon="user"
                iconPosition="left"
                placeholder="Kullanıcılar"
              />
            </Grid.Column>
          </Grid.Row>

          <Menu.Menu position="right">
            <SignedIn />
          </Menu.Menu>
        </Container>
      </Menu>
      <Space />
    </div>
  );
}
