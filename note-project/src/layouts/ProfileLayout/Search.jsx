import React from "react";
import { Button, Divider, Input, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Search() {
  return (
    <div>
      <Segment className basic textAlign="center">
        <Input 
          // onChange={(text)=>degistir()}
          action={{ color: "blue", content: "Ara" }}
          icon="search"
          iconPosition="left"
          placeholder="Başlık İle Ara"
        />

        <Divider horizontal>YA DA</Divider>

        <Link to="/note">
          <li>
            <Button
              color="red"
              content="Yeni Not Oluştur"
              icon="add"
              labelPosition="left"
            />
          </li>
        </Link>
      </Segment>
    </div>
  );
}
