import { useDispatch } from "react-redux";
import { notKaydiSil } from "../NotlarActions";
import Datetime from "../layouts/HomePageLayout/DateTime";
import { Form, Header, Icon, Label, Menu } from "semantic-ui-react";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

function Not(props) {
  const dispatch = useDispatch();

  const Sil = () => {
    dispatch(notKaydiSil({ id: props.not.id }));
    alertify.success("SİLME İŞLEMİ X BAŞARILI  ✔");
  };

  function tarihSaat() {
    var tarih = new Date();
    var yil = tarih.getFullYear();
    var ay = tarih.getMonth();
    var gun = tarih.getDay();
    var saat = tarih.getHours();
    var dakika = tarih.getMinutes();
    var saniye = tarih.getSeconds();
    document.write(
      gun + "/" + ay + "/" + yil + "<br>" + saat + ":" + dakika + ":" + saniye
    );
  }

  return (
    <div>
      <br />
      <br /> <hr />
      <Menu.Item as="a" className="redux">
        <hr></hr>
        <Label color="grey" as="h7" icon>
          <Icon name="folder open" />
          {props.not.dosyaAdi}
        </Label>
      </Menu.Item>
      {/* <h5>
      <Menu.Item as='a' className="redux"  >
          <Label as='Özel' color='grey' ribbon>
          {props.not.dosyaAdi}
          </Label>
        </Menu.Item>
        </h5> */}
      <h3>
        <i>
          {" "}
          {props.not.baslik}
          {":"}
        </i>
        <br />
        <br />
      </h3>
      {props.not.metin}
      <h4>
        <Menu.Item as="a" className="redux">
          <Label as="Özel" color="red" ribbon>
            {props.not.ög}
          </Label>

          <hr />
        </Menu.Item>
      </h4>
      <button color="red" Icon="delete" onClick={Sil}>
        SİL
      </button>
    </div>
  );
}

export default Not;
