import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BeatLoader } from "react-spinners";
import { emailValidator, passwordValidator } from "../../../utils/auth/sign-in/validator";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../utils/firebase";
import { getDoc, doc } from "firebase/firestore";
import { useNavigate, useLocation } from "react-router-dom";

const getErrorMsg = (error) => {
  if (error.message === "Firebase: Error (auth/user-not-found).") {
    return "user not found!";
  }
  return "you entered a wrong password!"
};

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const nextPath = searchParams.get('next') || '';

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    remember: "off",
  });
  const [loading, setIsLoading] = useState(false);
  const [emailErr, setEmailErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        const userData = userDoc.data();
        const basePath = userData.role === 'provider' ? '/provider/dashboard/main' : '/client/dashboard';
        const redirectPath = nextPath ? `${basePath}/${nextPath}` : basePath;
        navigate(redirectPath);
      }
    };

    checkAuthStatus();
  }, [navigate, nextPath]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (emailValidator(credentials.email) || passwordValidator(credentials.password)) {
      setEmailErr(emailValidator(credentials.email));
      setPasswordErr(passwordValidator(credentials.password));
      return;
    }

    setEmailErr("");
    setPasswordErr("");

    try {
      setIsLoading(true);
      const userCredential = await toast.promise(
        signInWithEmailAndPassword(auth, credentials.email, credentials.password),
        {
          loading: 'Logging in...',
          success: 'Logged in successfully!',
          error: (error) => getErrorMsg(error)
        }
      );


      const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));
      const userData = { ...userDoc.data(), userEmail: userCredential.user.email };

      // Construct redirect URL with query parameter if it exists
      const basePath = userData.role === 'provider' ? '/provider/dashboard/main' : '/client/dashboard';
      const redirectPath = nextPath ? `${basePath}/${nextPath}` : basePath;

      window.Location.href = redirectPath;

      const userEmail = userCredential.user.email;
      const user = { ...userPromise.data(), userEmail };
      console.log("testing1",user)
      if(user.userEmail){
        console.log("testing2")

       window.location.href='/provider/dashboard/main'
       console.log("testing3")

      }
      
      

    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-[90%] md:w-[25%]">
      <form className="flex flex-col items-start justify-start w-full" onSubmit={handleSubmit}>
        <label htmlFor="email" className="text-gray-500">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Enter your Email"
          className="border border-gray-500 mb-5 h-16 w-full rounded-xl p-3 focus:border-green-600 focus:outline-none"
        />
        {emailErr && <span className="text-red-500">{emailErr}</span>}

        <label htmlFor="password" className="text-gray-500">Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Enter your password"
          className="border border-gray-500 h-16 w-full rounded-xl p-3 focus:border-green-600 focus:outline-none"
        />
        {passwordErr && <span className="text-red-500">{passwordErr}</span>}

        <a href="#forgot" className="color-1 font-bold">Forgot password?</a>

        <div>
          <input
            type="checkbox"
            name="remember"
            id="remember"
            onChange={handleChange}
            className="my-5 mr-3 inline-block"
          />
          <label htmlFor="remember" className="text-gray-500">Remember Me</label>
        </div>

        <button
          type="submit"
          className="text-3xl font-semibold tracking-wider px-16 py-4 rounded-xl btn"
        >
          {loading ? <BeatLoader color="#fff" /> : "Login"}
        </button>
      </form>
      <Toaster position="top-right" />
    </div>
  );
};

export default LoginForm;