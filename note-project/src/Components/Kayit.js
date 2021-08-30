import { useDispatch } from "react-redux";
import { telKaydiSil } from "../KayitlarActions";

function Kayit(props) {
  const dispatch = useDispatch();

  const Sil = () => {
    dispatch(telKaydiSil({ id: props.kayit.id }));
  }

  return (
    <div className='kayit'>
      <h2>{props.kayit.baslik}</h2>
      <h3>{props.kayit.ög}</h3>
      <h3>{props.kayit.metin}</h3>
      <h3>{props.kayit.dosyaAdi}</h3>
      <button onClick={Sil}>sil</button>
    </div>
  );
}

export default Kayit;
