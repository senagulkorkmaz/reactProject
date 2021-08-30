import { useSelector } from "react-redux";

function Header() {
  const profils = useSelector(profilKayitlari => profilKayitlari);

  return (
    <div className='header'>
      <h3 className="yazi">Bilgilerim   </h3>
      <br />
    </div>
  );
}

export default Header;