import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Segment, Icon, Label, Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom"


const options = [
  { key: 'ö', text: 'Özel', value: 'Özel' },
  { key: 'g', text: 'Genel', value: 'Genel' },
]

class Notlar extends Component {


  handleChange = (e, { value }) => this.setState({ value })
  render() {

    return <div>
      {/* <p>
        <b>NOTLAR</b>
      </p>
      BAŞLIK : <input id="txtNotBaslik" type="textArea" onChange={this.props.degistirNotBaslik } />
      <br />
      METİN : <input  id="txtMetin" type="text"  onChange={this.props.degistirMetin} />
      <br />
      <button onClick={this.props.ekleNot}>Ekle</button>
      <br />
      <ul>
        {this.props.notlar.map(not => {
          const key = not.notBaslik + not.metin;
          return <ol key={key}><br /><h3> {not.notBaslik }{":"}</h3>{not.metin}</ol>;
        })}
      </ul> */}

      <Form.Group widths='equal'>
        <Form.Input id="txtNotBaslik" type="textArea"
          onChange={this.props.degistirNotBaslik} fluid label='BAŞLIK' placeholder='Başlık' />

        <Form.Input
          id="txtÖg" type="listBox" onChange={this.props.degistirÖzelGenel}
          fluid
          label='ÖZEL/GENEL'
          placeholder='Özel/Genel'
        />
      </Form.Group>
      <Form.Group inline>
        <label>BOYUT:</label>
        <Form.Radio
          label='Küçük'
          value='sm'
          onChange={this.handleChange}
        />
        <Form.Radio
          label='Orta'
          value='md'
          onChange={this.handleChange}
        />
        <Form.Radio
          label='Büyük'
          value='lg'
          onChange={this.handleChange}
        />
      </Form.Group>
      <Form.TextArea id="txtMetin" type="text" onChange={this.props.degistirMetin} label='NOT METNİ' placeholder='Düzenli hayata "MERHABA" diyelim!!' />


      <Form.Button onClick={this.props.ekleNot} color='red'>OLUŞTUR</Form.Button>
      <Menu compact>
        <ul>
          {this.props.notlar.map(not => {
            const key = not.notBaslik + not.metin + not.ög;

            return <ol key={key}><br /><br /> <hr /><h3> {not.notBaslik}{":"}</h3>{not.metin}
              <h4 >
                <Menu.Item as='a' className="redux"  >
                  <Label as='Özel' color='red' ribbon>
                    {not.ög}
                  </Label>
                  <hr />
                </Menu.Item>
              </h4>
              <button onClick={this.props.silNot} color='red'>
                OLUŞTUR
              </button> </ol>;
          })}
        </ul>
      </Menu>
    </div>;
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    notBaslik: state.NoteReducer.notBaslik,
    metin: state.NoteReducer.metin,
    notlar: state.NoteReducer.notlar,
    ög: state.NoteReducer.ög
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    degistirNotBaslik: baslik => {
      dispatch({ type: 'NOT.DEGİSTİR_BASLİK', payload: { notBaslik: document.getElementById('txtNotBaslik').value } });
    },
    degistirMetin: metin => {
      dispatch({
        type: 'NOT.DEGİSTİR_METİN',
        payload: { metin: document.getElementById('txtMetin').value }
      });
    },
    degistirÖzelGenel: ög => {
      dispatch({
        type: 'NOT.DEGİSTİR_ÖG',
        payload: { ög: document.getElementById('txtÖg').value }
      });
    },
    ekleNot: () => {
      dispatch({ type: 'NOT.EKLE' });
    },
    silNot: () => {
      dispatch({ type: 'NOT.SİL' });
    }
  };
};

const NotlarConnected = connect(mapStateToProps, mapDispatchToProps)(Notlar);

export default NotlarConnected;