import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

// pages
import Home from './pages/Home/Home';
import Booking from './pages/Booking/Booking';
import Services from './pages/Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        {/* Uncomment the routes below as needed */}
        <Route exact path='/booking' component={Booking} />
        <Route exact path='/services' component={Services} />
        {/* <Route exact path='/resume' component={Resume} /> */}
      </Switch>
    </div>
  );
}

export default App;
