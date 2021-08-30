import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function SignedOut({ signIn }) {
  return (
    <div>
      <Button color="red" Link to="/Login" type="submit" as={Link} to="/Login">
        Giriş Yap
      </Button>
      <Button color="red" style={{ marginLeft: "0.5em" }}>
        Kayıt Ol
      </Button>
    </div>
  );
}
