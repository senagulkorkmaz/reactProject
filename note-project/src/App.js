import './App.css';
import 'semantic-ui-css/semantic.min.css'
import LoginDashboard from './pages/LoginPage/LoginDashboard';
import { BrowserRouter as Rounter, Route, Switch, Link } from "react-router-dom"
import İnformation from './pages/HomePage/İnformation';
import NoteAdd from './pages/NoteAddPage/NoteAdd';
import SignIn from './pages/RegisterPage/Register';
import NoteLayout from './pages/NotePage/NoteLayout';
import ReduxNote from './pages/ReduxNote';
import Notlar from './Components/Notlar';
import Card from './layouts/ProfilLayout/Card';
import ProfilGuncelle from './layouts/ProfileLayout/ProfilGuncelle'
import AnaSayfa from './pages/HomePage/AnaSayfa';
import Notlarım from './Components/Notlarım';
import AnaSayfaa from './pages/HomePage/AnaSayfaa';

function App() {
  
  const Home = () => {
    return (
      <div className="Home">
        <AnaSayfaa/>
      </div>
    )
  }

  return (
    <Rounter>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={LoginDashboard} />
          <Route path="/profile" component={AnaSayfa} />
          <Route path="/noteAdd" component={NoteAdd} />
          <Route path="/register" component={SignIn} />
          <Route path="/note" component={ReduxNote} />
          <Route path="/information" component={Card} />
          <Route path="/ProfilGüncelle" component={ProfilGuncelle} />
          <Route path="/myNote" component={Notlarım} />
          <Route component={"Sayfa bulunamadı"}></Route>
        </Switch>
      </div>
    </Rounter>
  );
}
export default App;





