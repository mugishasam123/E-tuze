import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/client/Login';
import ProviderLogin from './pages/provider/Login';
import Register from './pages/provider/Register';
import ProviderDashboard from './pages/provider/dashboard';
import Main from './components/dashboard/Main';
import Requests from './components/dashboard/Requests';
import Messages from './components/dashboard/Messages';
import Settings from './components/dashboard/Settings';
import GetStarted from './pages/getStarted/index';
import Questionaire from './pages/questionaire/index';
import Thank from './pages/Thank/Thank';
import PageNotFound from './pages/404/PageNotFound';

const App = () => (
  <div className="App">
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/client/login" element={<Login />} />
      <Route path="/provider/login" element={<ProviderLogin />} />
      <Route path="/provider/register" element={<Register />} />
      <Route path="/provider/dashboard" element={<ProviderDashboard />}>
        <Route path="/provider/dashboard/main" element={<Main />} />
        <Route path="/provider/dashboard/requests" element={<Requests />} />
        <Route path="/provider/dashboard/messages" element={<Messages />} />
        <Route path="/provider/dashboard/settings" element={<Settings />} />
      </Route>
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/questionaire" element={<Questionaire />} />
      <Route path="/submitted" element={<Thank />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </div>
);

export default App;
