import React from 'react'
import Baslik from '../Navi'
import Search from '../NoteLayouth/Search'
import { Route } from 'react-router-dom'
import NoteList from '../../pages/NoteList'
import Login from '../Login'
import NoteAdd from '../../pages/NoteAdd'
export default function Dashboard() {
    return (
        <div>
            <Baslik />
            <NoteList />
            <Search />
            <Route />
            <Login />
            <Route path="/note/add" component={NoteAdd} />
        </div>
    )
}
