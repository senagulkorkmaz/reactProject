import React from "react";
import { List,Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ListExampleIcon = () => (
  <List >
    <List.Item>
      <List.Icon name="university" />
      <List.Content>İNÖNÜ ÜNİVERSİTESİ</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="edit outline" />
      <List.Content>Mühendislik Fakültesi</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="laptop" />
      <List.Content>Bilgisayar Mühendisliği</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="mail" />
      <List.Content>
        <a href="senagulkorkmazz@gmail.com">senagulkorkmazz@gmail.com</a>
      </List.Content>
      <Link to="/profile">
        <li>
            <br/>
          <Button className="notlarım"
            style={{ color: "black" }}
            content="Notlarım"
            icon="address book"
          />
        </li>
      </Link>
    </List.Item>
  </List>
);

export default ListExampleIcon;
