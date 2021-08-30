import Not from './Not';
import { useSelector } from "react-redux";
import Profileİnformation from "../layouts/NaviLayout/Profileİnformation";
import YeniEkle from "../Components/YeniEkle";
import Search from '../layouts/ProfileLayout/Search';
import Header from "../Components/Header";


function Notlar() {
  const notlar = useSelector(notKayitlari => notKayitlari);

  return (
    <div >
      <Header />
      {notlar.map(not => (<Not not={not} />))}

    </div>
  );
}

export default Notlar;
