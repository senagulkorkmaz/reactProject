import React from "react";
import { Dropdown, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

function ActionLink() {
  alertify.success('GİRİŞ BAŞARILI ✔');
}

export default function Note() {
  return (
    <div>
      <Link  onClick={ActionLink} to="/myNote">
        <li>
          <Button
            style={{ color: "black" }}
            content="Notlar"
            icon="address book"
          />
        </li>
      </Link>
    </div>
  );
}
