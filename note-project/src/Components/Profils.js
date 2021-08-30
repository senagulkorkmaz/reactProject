import Profil from './Profil';
import { useSelector } from "react-redux";
import Profileİnformation from "../layouts/NaviLayout/Profileİnformation";
import ProfilGüncelle from "../Components/ProfilGüncelle";
import ProfilHeader from "../Components/ProfilHeader";


function Profils() {
  const profils = useSelector(profilKayitlari => profilKayitlari);

  return (
    <div>
      <Profileİnformation />
      <ProfilHeader />
      {profils.map(profil => (<Profil profil={profil} />))}
    </div>
  );
}

export default Profils;