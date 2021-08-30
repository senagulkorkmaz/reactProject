import { useDispatch } from "react-redux";
import { profilKaydiSil } from "../ProfilActions";
import { Form, FormGroup, Icon, Label, Menu } from 'semantic-ui-react'


function Profil(props) {
  const dispatch = useDispatch();

  const Sil = () => {
    dispatch(profilKaydiSil({ id: props.profil.id }));
  }

  return (
    <div>
      <h3>{props.profil.adSoyad}</h3>
      <h3>{props.profil.uni}</h3>
      <h3>{props.profil.fakulte}</h3>
      <h3>{props.profil.bolum}</h3>
      <h3>{props.profil.sinif}</h3>
      <button color='red' onClick={Sil} >
        SİL
      </button>
    </div>
  );
}

export default Profil;