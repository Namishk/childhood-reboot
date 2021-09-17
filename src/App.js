import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import FirstQ from './pages/FirstQ';
import SecondQ from './pages/SecondQ';
import ThirdQ from './pages/ThirdQ';
import FourthQ from './pages/FourthQ';
import FifthQ from './pages/FifthQ';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/FirstQ" component={FirstQ} />
          <Route path="/SecondQ" component={SecondQ} />
          <Route path="/ThirdQ" component={ThirdQ} />
          <Route path="/FourthQ" component={FourthQ} />
          <Route path="/FifthQ" component={FifthQ}/>
          <Route path='/FinalAnsForm09221414517453528yug87erh97rgy91441rf2151e' component={() => { 
     window.location.href = '//forms.office.com/Pages/ResponsePage.aspx?id=PbiVhpLG70etejdsvONmT1RrUNGgXs1GuL39utP4hO5UNzY0MTNRMUJTWTQyQThNMzFJUEtRVFJTMC4u'; 
     return null;
}}/>
        </Switch>
      </div>
      {/* <p className="abs">designed and developed by namish</p> */}
    </Router>
  );
}

export default App;
