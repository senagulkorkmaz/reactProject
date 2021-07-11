import React from 'react'
import { Dropdown } from 'semantic-ui-react'

export default function Note() {
    return (
        <div>
            <Dropdown item text='Notlar'>
                <Dropdown.Menu >
                    <Dropdown.Item >Kişisel Notlar</Dropdown.Item>
                    <Dropdown.Item >Genel Notlar</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </div>
    )
}
