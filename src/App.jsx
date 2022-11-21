import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/client/Login';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/client/login" element={<Login />} />
    </Routes>
  </div>
);

export default App;
