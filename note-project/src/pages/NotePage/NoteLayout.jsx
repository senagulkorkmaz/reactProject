import React from "react";
import NoteList from "../../layouts/NoteLayout/NoteList";
import Space from "../Space";
import Profile─░nformation from "../../layouts/NaviLayout/Profile─░nformation";
import Search from "../../layouts/ProfileLayout/Search";

export default function NoteLayout() {
  return (
    <div>
      <Space />
      <Profile─░nformation />
      <NoteList />
      <Search />
    </div>
  );
}
