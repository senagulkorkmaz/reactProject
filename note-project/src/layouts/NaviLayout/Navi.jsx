

import React, { useState} from "react";
import { Container, Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { useHistory } from "react-router-dom";



export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
  //Authenticated:kimliği doğrulandı o yüzden dönüş değeri true ya da false 
  const history = useHistory()
  //usehistory mesela çıkışa basınca anasayfaya dönmesi için kullancaz
 
 
  function handleSignOut(params) { //çıkış yapma işllemi
     setIsAuthenticated(false)
     history.push("/") //çıkış yap deyince sayfayı anasayfaya götürür
  }

  function handleSignIn(params) { //girişyapma işllemi
    setIsAuthenticated(true)
 }
    
  return (
    <div>
      {/* inerted: naviyi siyah yaptı, 
        fixed: aşağı indikçe menu de bizimle gelsin yaptı
        Container: div gibi düşün yazıları ortaaya çekti */}
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            {isAuthenticated? <SignedIn signOut={handleSignOut} bisey="1"/>: <SignedOut signIn={handleSignIn} bisey="0"/>} 
            {/* //eğer otantikeyse yani doğrulanmışsa signed in i göster
            //değilse signed outu göster
            yukardaki false ise adımın yazdığı yeri göstermiyor
            yukardaki true ise sadec adımı gösteriyor giriş yap falan göstermiyor. */}
            
            {/* //alt komponente data geçmek;
            SignedIn signOut={handleSignOut} : 
            //eğer sistemdeysen sign in de 
            //yukarda yazdığımız fonksiyon çağrılır ve
            /sistemden çıkış yapılır. */}



          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}