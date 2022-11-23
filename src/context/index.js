import { createContext } from "react";


const useStore=()=>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
  
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, async (authUser) => {
        if (authUser) {
          setUser(authUser);
          dispatchRed(setuser(authUser));
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
      return () => unSubscribe();
    }, []);
  
}



