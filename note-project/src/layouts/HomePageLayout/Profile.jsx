import { List, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { auth, db, logout } from "./firebase";

function Profile() {
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
      alert("Kullanıcı verileri alınırken bir hata oluştu.");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/profile");

    fetchUserName();
  }, [user, loading]);

  return (
    <List>
      <List.Item>
        <List.Icon name="university" />
        <List.Content>{university} ÜNİVERSİTESİ</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="edit outline" />
        <List.Content>{fakulte} FAKÜLTESİ</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="laptop" />
        <List.Content>{bolum}</List.Content>
      </List.Item>
      <List.Item>
        <Link to="/ProfilGüncelle">
          <li>
            <br />
            <Button
              className="notlarım"
              style={{ color: "black" }}
              content="Notlarım"
              icon="address book"
            />
          </li>
        </Link>
      </List.Item>
    </List>
  );
}

export default Profile;
