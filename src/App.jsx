import { Route, Routes,Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth, db } from "./utils/firebase";
import { getDoc, doc } from "firebase/firestore";
import Home from "./pages/home/Home";
import Login from "./pages/client/Login";
import ProviderLogin from "./pages/provider/Login";
import Register from "./pages/provider/Register";
import ProviderDashboard from "./pages/provider/dashboard";
import Main from "./components/dashboard/Main";
import Requests from "./components/dashboard/Requests";
import Response from "./components/dashboard/Response";
import Messages from "./components/dashboard/Messages";
import Settings from "./components/dashboard/Settings";
import GetStarted from "./pages/getStarted/index";
import Questionaire from "./pages/questionaire/index";
import Thank from "./pages/Thank/Thank";
import PageNotFound from "./pages/404/PageNotFound";
import { DotLoader } from "react-spinners";

const App = () => {
  const [store] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    store.loading=loading
  }, [loading]);
  
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        const userPromise = await getDoc(doc(db, "providers", authUser.uid));
        const userEmail = authUser.email;
        const userData = { ...userPromise.data(), userEmail };
        store.user=userData;
        setLoading(false); 
      } else {
        setLoading(false);
      }
    });
    return () => unSubscribe();
  }, []);

  return (
    <div>
      {
        !loading? <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/client/login" element={<Login />} />
          <Route path="/provider/login" element={<ProviderLogin />} />
          <Route path="/provider/register" element={<Register />} />
          {store?.user  && (
            <Route path="/provider/dashboard" element={<ProviderDashboard user={store.user}/>}>
              <Route path="/provider/dashboard/main" element={<Main />} />
              <Route
                path="/provider/dashboard/requests"
                element={<Requests />}
              />
              <Route
                path="/provider/dashboard/requests/:id"
                element={<Response />}
              />
              <Route
                path="/provider/dashboard/messages"
                element={<Messages />}
              />
              <Route
                path="/provider/dashboard/settings"
                element={<Settings />}
              />
            </Route>
          )}
        
        {!store?.user && (
            <Route path="/provider/dashboard" element={<Navigate to="/provider/login" />}>
              <Route path="/provider/dashboard/main" element={<Navigate to="/provider/login" />} />
              <Route
                path="/provider/dashboard/requests"
                element={<Navigate to="/provider/login" />}
              />
              <Route
                path="/provider/dashboard/messages"
                element={<Navigate to="/provider/login" />}
              />
              <Route
                path="/provider/dashboard/settings"
                element={<Navigate to="/provider/login" />}
              />
            </Route>
          )}
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/questionaire" element={<Questionaire />} />
          <Route path="/submitted" element={<Thank />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>:<div className="flex justify-center items-center w-full h-screen"><DotLoader color="#36d7b7"/></div>
      }
    </div> 
  );
};

export default App;
