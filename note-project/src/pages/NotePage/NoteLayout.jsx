import React from "react";
import NoteList from "../../layouts/NoteLayout/NoteList";
import Space from "../Space";
import Profileİnformation from "../../layouts/NaviLayout/Profileİnformation";
import Search from "../../layouts/ProfileLayout/Search";

export default function NoteLayout() {
  return (
    <div>
      <Space />
      <Profileİnformation />
      <NoteList />
      <Search />
    </div>
  );
}
