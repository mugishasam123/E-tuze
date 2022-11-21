import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/client/Login';
import ProviderLogin from './pages/provider/Login';
import Register from './pages/provider/Register';
import GetStarted from './pages/getStarted/index';
import Questionaire from './pages/questionaire/index';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/client/login" element={<Login />} />
      <Route path="/provider/login" element={<ProviderLogin />} />
      <Route path="/provider/register" element={<Register />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/questionaire" element={<Questionaire />} />
    </Routes>
  </div>
);

export default App;
