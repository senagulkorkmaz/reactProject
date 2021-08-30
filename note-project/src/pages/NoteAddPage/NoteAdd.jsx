import React, { Component } from "react";
import { Form, Segment } from "semantic-ui-react";
import Profileİnformation from "../../layouts/NaviLayout/Profileİnformation";
import { Link } from "react-router-dom";
import Space from "../Space";

const options = [
  { key: "m", text: "Özel", value: "Özel" },
  { key: "f", text: "Genel", value: "Genel" },
];
class NoteAdd extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <div>
        <Profileİnformation />
        <Segment>
          <Space />
          <Form>
            <Form.Group widths="equal">
              <Form.Input fluid label="Başlık" placeholder="Başlık" />
              <Form.Input fluid label="Tarih" placeholder="Tarih" />
              <Form.Select
                fluid
                label="ÖZEL/GENEL"
                options={options}
                placeholder="Özel/Genel"
              />
            </Form.Group>
            <Form.Group inline>
              <label>Boyut:</label>
              <Form.Radio
                label="Küçük"
                value="sm"
                checked={value === "sm"}
                onChange={this.handleChange}
              />
              <Form.Radio
                label="Orta"
                value="md"
                checked={value === "md"}
                onChange={this.handleChange}
              />
              <Form.Radio
                label="Büyük"
                value="lg"
                checked={value === "lg"}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.TextArea
              label="NOT METNİ"
              placeholder='Düzenli hayata "MERHABA" diyelim!!'
            />
            <Link to="/note">
              <li>
                <Form.Button color="red">OLUŞTUR</Form.Button>
              </li>
            </Link>
          </Form>
        </Segment>
      </div>
    );
  }
}

export default NoteAdd;
