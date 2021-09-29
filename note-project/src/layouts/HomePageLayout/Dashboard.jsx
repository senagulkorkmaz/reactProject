import { Card, Icon, Image, Button, Dropdown } from "semantic-ui-react";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import Profileİnformation from "../NaviLayout/Profileİnformation";
import Space from "../../pages/Space";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { auth, db, logout } from "./firebase";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [university, setUniversity] = useState("");
  const [fakulte, setFakulte] = useState("");
  const [bolum, setBolum] = useState("");
  const history = useHistory();

  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name);
      setSurname(data.surname);
      setUniversity(data.university);
      setFakulte(data.fakulte);
      setBolum(data.bolum);
    } catch (err) {
      console.error(err);
      alert("Kullanıcı verileri alınırken bir hata oluştu");
    }
  };

  // useEffect(() => {
  //   if (loading) return;
  //   if (!user) return history.replace("/information");

  //   fetchUserName();
  // }, [user, loading]);

  return (
    <div>
      <img className="imges" src="/plan14.jpeg"></img>

      <Card className="profil">
        <Profileİnformation />
        <Space />
        <Image
          className="kucult"
          src="https://as2.ftcdn.net/v2/jpg/01/97/15/87/1000_F_197158744_1NBB1dEAHV2j9xETSUClYqZo7SEadToU.jpg"
          wrapped
        />
        <Card.Content>
          <Card.Header>
            <div>
              {name} {surname}
            </div>
          </Card.Header>
          <Card.Meta>
            <span className="date">{user?.email}</span>
          </Card.Meta>
          <Card.Description>
            <Profile />
          </Card.Description>
        </Card.Content>
        {/* <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content> */}

        <Link to="/ProfilGüncelle">
          <li>
            <Button
              className="guncelle"
              content="Bilgilerimi Güncelle"
              icon="right arrow"
              labelPosition="right"
            />
          </li>
        </Link>
      </Card>
    </div>
  );
}

export default Dashboard;
