import { useSelector } from "react-redux";

function Footer() {
  const notlar = useSelector(notKayitlari => notKayitlari);

  return (
    <div className='footer' className="deneme">
      <h3> Toplam {notlar.length} notunuz bulunmaktadır.</h3>
    </div>
  );
}

export default Footer;
