import { useState } from "react";
import { useDispatch } from "react-redux";
import { notKaydiEkle } from "../NotlarActions";
import { Form, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

function YeniEkle() {
  const [baslik, setBaslik] = useState('');
  const [ög, setÖg] = useState('');
  const [metin, setMetin] = useState('');
  const [dosyaAdi, setDosyaAdi] = useState('');
  const dispatch = useDispatch();

  const Ekle = () => {
    dispatch(notKaydiEkle({ baslik: baslik, ög: ög, metin: metin, dosyaAdi: dosyaAdi }));
  }
  function ActionLink() {
    alertify.success('NOT OLUŞTURULDU!  ✔');
  }

  return (
    <div className='header'>
      <Form  >
        <Segment >
          <Form.Group widths='equal'>
            <Form.Input type='text' value={baslik}
              onChange={e => setBaslik(e.target.value)} fluid label='BAŞLIK' placeholder='Başlık' />
            <Form.Input
              type="text" value={ög} onChange={e => setÖg(e.target.value)}
              fluid
              label='ÖZEL/GENEL'
              placeholder='Özel/Genel'
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.TextArea type="textArea" value={metin} onChange={e => setMetin(e.target.value)} fluid label='NOT METNİ ' placeholder='Düzenli hayata "MERHABA" diyelim!!' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input
              type="text" value={dosyaAdi} onChange={e => setDosyaAdi(e.target.value)}
              fluid
              label='DOSYA ADI'
              placeholder='Dosya Adı'
            />
          </Form.Group>
          <Link onClick={ActionLink} to="/profile">
            <li>
              <Form.Button onClick={Ekle} color='red'>OLUŞTUR</Form.Button>
            </li>
          </Link>
        </Segment>
      </Form  >
    </div>
  );
}

export default YeniEkle;
