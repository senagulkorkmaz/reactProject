import Not from "./Not";
import { useSelector } from "react-redux";
import Header from "../Components/Header";

function Notlar() {
  const notlar = useSelector((notKayitlari) => notKayitlari);

  return (
    <div>
      <Header />
      {notlar.map((not) => (
        <Not not={not} />
      ))}
    </div>
  );
}

export default Notlar;
