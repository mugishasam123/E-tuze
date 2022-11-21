import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/client/Login';
import ProviderLogin from './pages/provider/Login';
import Register from './pages/provider/Register';
import GetStarted from './pages/getStarted/index';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/client/login" element={<Login />} />
      <Route path="/provider/login" element={<ProviderLogin />} />
      <Route path="/provider/register" element={<Register />} />
      <Route path="/get-started" element={<GetStarted />} />
    </Routes>
  </div>
);

export default App;
