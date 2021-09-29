import React from "react";
import Notlar from "./Notlar";
import Profileİnformation from "../layouts/NaviLayout/Profileİnformation";
import Header from "./Header";
import Search from "../layouts/ProfileLayout/Search";
import { Link } from "react-router-dom";
import { Button, Grid } from "semantic-ui-react";
import Space from "../pages/Space";

export default function Notlarım() {
  return (
    <div>
      <Profileİnformation />
      <img className="imges" src="/plan14.jpeg"></img>
      <div className="denemee">
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={5}>
              <Search />
              <br></br>
              <Link to="/profile">
                <li>
                  <Button
                    style={{ color: "red" }}
                    content="ANASAYFA'YA DÖN"
                    icon="backward"
                  />
                </li>
              </Link>
            </Grid.Column>
            <Grid.Column width={10}>
              <Notlar />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}
