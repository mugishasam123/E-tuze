import React, { useState } from "react";
import "./signup.css";
import toast, { Toaster } from "react-hot-toast";
import createUserWithEmail from "../../../utils/auth/signup/provider/registerUser";
import { BeatLoader } from "react-spinners";
import {
  emailValidator,
  nameValidator,
  passwordValidator,
  phoneValidator,
  matchValidator,
  resumeValidator,
  profileValidator
} from "../../../utils/auth/signup/provider/formValidator";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../utils/firebase";

export const getErrorMsg = (error) => {
    console.log(error.message);
  // return "you entered a wrong password!"
};
const SignupForm = () => {
  const [userData, setUserData] = useState({});
  const [emailErr, setEmailErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);
  const [passwordConfirmErr, setPasswordConfirmErr] = useState(null);
  const [nameErr, setNameErr] = useState(null);
  const [phoneErr, setPhoneErr] = useState(null);
  const [resumeErr, setResumeErr] = useState(null);
  const [profileErr, setProfileErr] = useState(null);
  const [resumeName, setResumeName] = useState(null);
  const [resumeUrl, setResumeUrl] = useState(null);
  const [resumeProgress, setResumeProgress] = useState(0);
  const [profileName, setProfileName] = useState(null);
  const [profileUrl, setProfileUrl] = useState(null);
  const [profileProgress, setProfileProgress] = useState(0);
  const [loading,setLoading]=useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    if (e.target.name === "profile") setProfileName(file.name);
    if (e.target.name === "resume") setResumeName(file.name);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        if (e.target.name === "profile") return setProfileProgress(progress);
        if (e.target.name === "resume") return setResumeProgress(progress);
      },
      (error) => {
        console.log(error)
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          if (e.target.name === "profile") return setProfileUrl(downloadURL);
          if (e.target.name === "resume") return setResumeUrl(downloadURL);
        });
      }
    );
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (
      resumeValidator(resumeUrl)||
      profileValidator(profileUrl)||
      emailValidator(userData.email) ||
      passwordValidator(userData.password) ||
      phoneValidator(userData.phoneNumber) ||
      nameValidator(userData.name) ||
      matchValidator(userData.password, userData.passwordConfirm)
    ) {
      setResumeErr(resumeValidator(resumeUrl))
      setProfileErr(profileValidator(profileUrl))
      setEmailErr(emailValidator(userData.email))
      setPasswordErr(passwordValidator(userData.password))
      setPhoneErr(phoneValidator(userData.phoneNumber))
      setNameErr(nameValidator(userData.name))
      setPasswordConfirmErr(matchValidator(userData.password, userData.passwordConfirm))
      return;
    }

    setResumeErr("")
    setProfileErr("")
    setEmailErr("")
    setPasswordErr("")
    setPhoneErr("")
    setNameErr("")
    setPasswordConfirmErr("")
    userData.resumeUrl=resumeUrl
    userData.photoUrl=profileUrl
    try{
      setLoading(true)
      await toast.promise(
        createUserWithEmail(userData),
         {
           loading: "creating...",
           success: <b>user created Successfully!</b>,
           error:(error)=><b>{getErrorMsg(error)}</b>
         }
       ); 
       window.location.href='/client/login'
    }catch(error){
      console.log(error)
      toast.error(error?.message);
    }
    finally{
      setLoading(false);
    }
    
  };

  return (
    <div className="mx-7 my-4 md:w-[35%]">
      <form className="flex flex-col items-start justify-start w-[100%]">
        <fieldset className="border py-6 px-5">
          <legend className="text-2xl font-bold text-gray-600">
            Profession Details
          </legend>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="resume"
                className=" text-gray-500 require relative"
              >
                Attach your Resume/CV
              </label>
              <em className="text-gray-500 block">Only PDF are supported </em>
              <input
                type="file"
                name="resume"
                onChange={(e) => handleUpload(e)}
                id="resume"
                placeholder="Attach Resume/ CV"
                required
                className="border border-gray-500 mb-5 w-full rounded-r-xl focus:border-green-600 focus:outline-none"
              />
               {resumeErr && (
                <span className="text-red-500">{resumeErr}</span>
              )}
            </div>

            {!resumeUrl && (
              <div className="text-color w-24">
                {resumeProgress === 0 ? "" : `${resumeProgress}%`}
              </div>
            )}
            {resumeUrl && (
              <div className="space-y-3">
                <div className="flex space-x-60 items-center">
                  <span className="w-12">{resumeName}</span>
                  <span
                    className="hover:cursor-pointer"
                    onClick={() => {
                      setResumeUrl(null);
                      setResumeProgress(0);
                    }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
                <img
                  src={resumeUrl}
                  alt="uploaded file"
                  className="h-[200px] w-[200px] border border-gray-500 p-2 border-dotted"
                />
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="profile"
                className=" text-gray-500 require relative"
              >
                Attach your Photo profile
              </label>
              <em className="text-gray-500 block">PNG/JPG/JPEG</em>
              <input
                type="file"
                name="profile"
                onChange={(e) => handleUpload(e)}
                id="profile"
                placeholder="Attach photo"
                required
                className="border border-gray-500 mb-5 w-full rounded-r-xl focus:border-green-600 focus:outline-none"
              />
               {profileErr && (
                <span className="text-red-500">{profileErr}</span>
              )}
            </div>

            {!profileUrl && (
              <div className="text-color w-24">
                {profileProgress === 0 ? "" : `${profileProgress}%`}
              </div>
            )}
            {profileUrl && (
              <div className="space-y-3">
                <div className="flex space-x-60 items-center ">
                  <span className="w-12">{profileName}</span>
                  <span
                    className="hover:cursor-pointer"
                    onClick={() => {
                      setProfileUrl(null);
                      setProfileProgress(0);
                    }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
                <img
                  src={profileUrl}
                  alt="uploaded file"
                  className="h-[200px] w-[200px] border border-gray-500 p-2 border-dotted"
                />
              </div>
            )}
          </div>

          <div className="my-5">
            <label className="text-gray-500 block">
              <span className="require mr-5"></span>Are you independently
              licenced as a therapist in your state of practice?
            </label>
            <input
              type="radio"
              onChange={handleChange}
              name="independent"
              id="yes"
              className="inline-block"
            />
            <label htmlFor="yes" className="text-gray-500 mr-5">
              Yes
            </label>
            <input type="radio" name="no" id="no" className="inline-block" />
            <label htmlFor="no" className="text-gray-500">
              No
            </label>
          </div>
          <div className="my-5">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              required
              className="mr-3 inline-block"
            />
            <label htmlFor="agree" className="text-gray-500">
              <span className="require mr-5"></span>By providing us with your
              phone number and clicking "Register", you agree that we may call
              or text you regarding your application.
            </label>
          </div>
        </fieldset>
        <fieldset className="border py-6 px-5 my-3 space-y-3">
          <legend className="text-2xl font-bold text-gray-600">Sign Up</legend>
          <div className="flex flex-col">
            <label htmlFor="name" className=" text-gray-500 require relative">
              Full name
            </label>
            <div className="flex flex-col">
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                placeholder="Enter your Full Name"
                required
                className="border  border-gray-500 mb-5 h-16 w-full rounded-xl placeholder:px-2 p-3 focus:border-green-600 focus:outline-none"
              />
              {nameErr&& <span className="text-red-500">{nameErr}</span>}
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-gray-500 require">
              Telephone Number
            </label>
            <div className="flex flex-col">
              <input
                type="tel"
                name="phoneNumber"
                onChange={handleChange}
                id="phone"
                placeholder="+250-000-000-000"
                required
                className="border  border-gray-500 mb-5 h-16 w-full rounded-xl placeholder:px-2 p-3 focus:border-green-600 focus:outline-none"
              />
              {phoneErr && <span className="text-red-500">{phoneErr}</span>}
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-500 require">
              Email
            </label>
            <div className="flex flex-col">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                id="email"
                placeholder="Enter your Email"
                required
                className="border  border-gray-500 mb-5 h-16 w-full rounded-xl placeholder:px-2 p-3 focus:border-green-600 focus:outline-none"
              />
              {emailErr && <span className="text-red-500">{emailErr}</span>}
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-500 require">
              Create Password
            </label>
            <em className="text-gray-500 block">
              Password length should be greater than 6 characters{" "}
            </em>
            <div className="flex flex-col">
              <input
                type="password"
                name="password"
                onChange={handleChange}
                id="password"
                placeholder="Enter your Password"
                required
                className="border  border-gray-500  h-16 w-full rounded-xl placeholder:px-2 p-3 focus:border-green-600 focus:outline-none"
              />
              {passwordErr && (
                <span className="text-red-500">{passwordErr}</span>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="passwordConfirm" className="text-gray-500 require">
              Confirm Password
            </label>
            <div className="flex flex-col">
              <input
                type="password"
                name="passwordConfirm"
                onChange={handleChange}
                id="passwordConfirm"
                placeholder="Re-enter your Password"
                required
                className="border  border-gray-500  h-16 w-full rounded-xl placeholder:px-2 p-3 focus:border-green-600 focus:outline-none"
              />
              {passwordConfirmErr && (
                <span className="text-red-500">{passwordConfirmErr}</span>
              )}
            </div>
          </div>

          <div className="my-5">
            <input
              type="checkbox"
              name="accept"
              id="accept"
              required
              className="mr-3 inline-block"
            />
            <label htmlFor="accept" className="text-gray-500">
              <span className="require mr-5"></span>By signing up, you agree to
              the terms and conditions of E-Tuze platform{" "}
            </label>
          </div>
        </fieldset>
        <button
          type="button"
          onClick={handleSubmit}
          className="text-3xl font-semibold tracking-wider px-16 py-4 rounded-xl  btn"
        >
          {
            loading ? <p className="my-auto"> <BeatLoader color="#fff" /></p> : <p>Register</p>
}
        </button>
      </form>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </div>
  );
};

export default SignupForm;
