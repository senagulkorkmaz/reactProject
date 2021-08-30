import React from "react";
import { Container, Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Link to="/">
            <li>
              <Menu.Item name="ANA SAYFA" />
            </li>
          </Link>
          <Link to="/">
            <li>
              <Menu.Item name="NOTSENBOOK" />
            </li>
          </Link>

          <Menu.Menu position="right">
            {/* <Button color='red' as={Link} to='/login' >Giriş Yap</Button>
                        <Link to="/login">
                            <li><Button color='red'>Giriş Yap</Button></li>
                        </Link>
                        <Link to="/register">
                            <li>
                                <Button color='red' style={{ marginLeft: '0.5em' }}>Kayıt Ol</Button>
                            </li>
                        </Link> */}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
