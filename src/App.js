import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'


import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        {/* Header*/}
        <Header />

        <Switch>   
        {/*Home */}
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            {/*Search */}
            <Home />
          </Route>
        </Switch>  
        {/*Footer*/}
        <Footer />
      </ Router>
      
      {/*SearchPage-PlacePage */}
      {/*... */}
    </div>
  );
}

export default App;
