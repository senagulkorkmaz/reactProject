import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'
import Note from '../NoteLayouth/Note'

export default function SignedIn({ signOut }) {
    return (
        <div>
            <Menu.Item>
                <Note />
                <Image avatar spaced="right" src="https://imzalikitabim.com/wp-content/uploads/2018/05/bo%C5%9F-profil-resmi.jpg"></Image>
                <Dropdown>
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item text="Notlarım" icon="edit" />
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
