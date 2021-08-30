import React from "react";
import { Image, Grid, Divider, Input } from "semantic-ui-react";
import Notlar from "../../Components/Notlar";
import Notlarım from "../../Components/Notlarım";
import Profileİnformation from "../../layouts/NaviLayout/Profileİnformation";
import Space from "../Space";
import Dosyalar from "./Dosyalar";

export default function AnaSayfa() {
  return (
    <div>
      <Profileİnformation />
      <img className="imges" src="/plan14.jpeg"></img>
      <div>
        <Grid className="gridd">
          <Grid.Row>
            <Grid.Column width={2}>
              <div className="notlarım">
                <Dosyalar />
              </div>
            </Grid.Column>
            <Grid.Column width={5}>
              <div className="renkk">
                <Notlar />
              </div>
            </Grid.Column>
            <Grid.Column className="anasayfaNotlarım" width={8}>
              <div>
                {/* <Grid.Row columns={1}>
                  <Grid.Column className="arama">
                    <Input
                      action={{ color: "grey", content: "Ara" }}
                      icon="user"
                      iconPosition="left"
                      placeholder="Kullanıcılar"
                    />
                  </Grid.Column>
                </Grid.Row> */}
                <Space />
                <Space />
                <Grid.Row columns={1} className="aramaa">
                  <Grid.Column>
                    <Input
                      action={{ color: "red", content: "Ara" }}
                      icon="edit"
                      iconPosition="left"
                      placeholder="Notlar"
                    />
                    <h4 className="notlarımm">
                      Diğer Kullanıcıdan gelen GENEL notlar görlecek.
                    </h4>
                  </Grid.Column>
                </Grid.Row>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid />
        </Grid>
      </div>
    </div>
  );
}
