import React from "react";
import Search from "../ProfileLayout/Search";
import { Route } from "react-router-dom";
import NoteList from "../NoteLayout/NoteList";
import Login from "../HomePageLayout/Login";
import NoteAdd from "../../pages/NoteAddPage/NoteAdd";
import SearchUsers from "../../pages/SearchUsers";
import SignIn from "../../pages/RegisterPage/Register";
import Space from "../../pages/Space";
import ─░nformation from "../../pages/HomePage/─░nformation";
import Navi from "../NaviLayout/Navi";
export default function Dashboard() {
  return (
    <div>
      <Navi />
      <Space />
      <─░nformation />
      <Search />
      <NoteAdd />
      <Route />
      <SearchUsers />
      <Login />
      <SignIn />
      <Route path="/note/add" component={NoteAdd} />
    </div>
  );
}
