import React from 'react'
import { Button, Divider, Input, Segment } from 'semantic-ui-react'

export default function Search() {
    return (
        <div>
            <Segment basic textAlign='center'>
                <Input
                    action={{ color: 'blue', content: 'Ara' }}
                    icon='search'
                    iconPosition='left'
                    placeholder=''
                />

                <Divider horizontal>YA DA</Divider>

                <Button
                    color='teal'
                    content='Yeni Not Oluştur'
                    icon='add'
                    labelPosition='left'
                />
            </Segment>
        </div>
    )
}
