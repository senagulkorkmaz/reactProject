import { useState } from "react";
import { useDispatch } from "react-redux";
import { profilKaydiEkle } from "../ProfilActions";
import Profileİnformation from "../layouts/NaviLayout/Profileİnformation";
import { Form, Segment } from 'semantic-ui-react'


function ProfilGüncelle() {
  const [adSoyad, setadSoyad] = useState('');
  const [uni, setUni] = useState('');
  const [fakulte, setFakulte] = useState('');
  const [bolum, setBolum] = useState('');
  const [sinif, setSinif] = useState('');
  const dispatch = useDispatch();

  const Ekle = () => {
    dispatch(profilKaydiEkle({ adSoyad: adSoyad, uni: uni, fakulte: fakulte, bolum: bolum, sinif: sinif }));
  }

  return (
    <div className='header'>
      <Profileİnformation />
      <Form  >
        <Segment >
          <Form.Group widths='equal'>
            <Form.Input type='text' value={adSoyad}
              onChange={e => setadSoyad(e.target.value)} fluid label='AD SOYAD' placeholder='AD SOYAD' />
            <Form.Input
              type="text" value={uni} onChange={e => setUni(e.target.value)}
              fluid
              label='ÜNİVERSİTE'
              placeholder='ÜNİVERSİTE'
            />
            <Form.Input
              type="text" value={fakulte} onChange={e => setFakulte(e.target.value)}
              fluid
              label='FAKÜLTE'
              placeholder='FAKÜLTE'
            />
            <Form.Input
              type="text" value={bolum} onChange={e => setBolum(e.target.value)}
              fluid
              label='BÖLÜM'
              placeholder='BÖLÜM'
            />
            <Form.Input
              type="text" value={sinif} onChange={e => setSinif(e.target.value)}
              fluid
              label='SINIF'
              placeholder='SINIF'
            />
            <Form.Button onClick={Ekle} color='red'>GÜNCELLE</Form.Button>
          </Form.Group>
        </Segment>
      </Form  >
    </div>
  );
}

export default ProfilGüncelle;

