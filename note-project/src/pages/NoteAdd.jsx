import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

export default function NoteAdd() {
    const initialValues = { noteTittle: " ", history: " ", size: " ", noteLogin: "", create: "" }

    const shema = Yup.object({
        noteTittle: Yup.string().required("Not Başlık zorunludur"),
        history: Yup.string().required("Tarih zorunludur"),

        noteLogin: Yup.string().required("Not kısmı boş bırakılamaz"),

    })
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={shema}
            >
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='BAŞLIK' placeholder='BAŞLIK' />
                        <Form.Input fluid label='TARİH' placeholder='TARİH' />
                    </Form.Group>
                    <Form.Group inline>
                        <label>Size</label>
                        <Form.Radio
                            label='Small'
                            value='sm'
                            // checked={value === 'sm'}
                            onChange={this.handleChange}
                        />
                        <Form.Radio
                            label='Medium'
                            value='md'
                            //  checked={value === 'md'}
                            onChange={this.handleChange}
                        />
                        <Form.Radio
                            label='Large'
                            value='lg'
                            // checked={value === 'lg'}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.TextArea label='NOT' placeholder='Düzenli hayata "Merhaba" diyelim...' />
                    <Form.Checkbox label='ÖZEL NOT' />
                    <Form.Checkbox label='GENEL NOT' />
                    <Form.Button>OLUŞTUR</Form.Button>
                </Form>

            </Formik>
        </div>
    )
}
