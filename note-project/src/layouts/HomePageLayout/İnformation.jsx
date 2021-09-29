import { Grid, Button } from "semantic-ui-react";
import Profileİnformation from "../NaviLayout/Profileİnformation";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { auth, db, logout } from "./firebase";

function İnformation() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const history = useHistory();

  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");

    fetchUserName();
  }, [user, loading]);

  return (
    <div>
      <Profileİnformation />

      <h3 class="ui block header"> {name}</h3>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <img src={user.photoURL} width="100" height="100" alt="avatar" />
          </Grid.Column>
          <div class="ui huge message">
            <ul class="list">
              <li>İNÖNÜ ÜNİVERSİTESİ</li>
              <li>Bilgisayar Mühendisliği</li>
            </ul>
          </div>
        </Grid.Row>
        <Link to="/ProfilGüncelle">
          <li>
            <Button
              content="Güncelle"
              icon="right arrow"
              labelPosition="right"
            />
          </li>
        </Link>
      </Grid>
    </div>
  );
}

export default İnformation;
