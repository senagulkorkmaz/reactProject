import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";

export default function Baslik() {
  const [isAuthenticated, setisAuthenticated] = useState(true);

  function handleSignOut() {
    setisAuthenticated(false);
  }
  function handleSignIn() {
    setisAuthenticated(true);
  }

  return (
    <div>
      <Menu inverted fixed>
        <Container>
          <Menu.Item name="ANA SAYFA" />
          <Menu.Item name="NOTSENBOOK" />

          <Menu.Menu position="right">
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} bisey="0" />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
