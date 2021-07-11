import React from 'react'
import { useState } from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

export default function NoteList() {
    const [notes, setnotes] = useState([])
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>NOT BAŞLIĞI</Table.HeaderCell>
                        <Table.HeaderCell>TARİH</Table.HeaderCell>
                        <Table.HeaderCell>GİZLİLİK</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    {
                        notes.map(notes => (
                            <Table.Row>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                            </Table.Row>
                        ))}


                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
