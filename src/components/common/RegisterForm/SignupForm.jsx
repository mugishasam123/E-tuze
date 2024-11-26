import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BeatLoader } from "react-spinners";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../utils/firebase";
import {
  emailValidator,
  nameValidator,
  passwordValidator,
  phoneValidator,
  matchValidator,
  resumeValidator,
  profileValidator
} from "../../../utils/auth/signup/provider/formValidator";
import createUserWithEmail from "../../../utils/auth/signup/provider/registerUser";

const SignupForm = () => {
  const [userData, setUserData] = useState({ userType: 'individual' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [files, setFiles] = useState({
    resume: { url: null, progress: 0, name: null },
    profile: { url: null, progress: 0, name: null }
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) return;

    const fileType = e.target.name;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    setFiles(prev => ({
      ...prev,
      [fileType]: { ...prev[fileType], name: file.name }
    }));

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setFiles(prev => ({
          ...prev,
          [fileType]: { ...prev[fileType], progress }
        }));
      },
      (error) => {
        console.log(error);
        toast.error(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFiles(prev => ({
            ...prev,
            [fileType]: { ...prev[fileType], url: downloadURL }
          }));
        });
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {
      ...(userData.userType === 'provider' && { resume: resumeValidator(files.resume.url) }),
      profile: profileValidator(files.profile.url),
      email: emailValidator(userData.email),
      password: passwordValidator(userData.password),
      phone: phoneValidator(userData.phoneNumber),
      name: nameValidator(userData.name),
      passwordConfirm: matchValidator(userData.password, userData.passwordConfirm)
    };

    if (Object.values(validationErrors).some(error => error)) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    try {
      setLoading(true);
      const submitData = {
        ...userData,
        resumeUrl: files.resume.url,
        photoUrl: files.profile.url
      };

      await toast.promise(
        createUserWithEmail(submitData),
        {
          loading: "Creating account...",
          success: "Account created successfully!",
          error: (error) => error.message
        }
      );
      window.location.href = '/login';
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-7 my-4 md:w-[35%]">
      <form onSubmit={handleSubmit}>
        <fieldset className="border py-6 px-5">
          <legend className="text-2xl font-bold text-gray-600">Who Are You?</legend>
          <div className="space-y-4">
            <select
              name="userType"
              value={userData.userType}
              onChange={handleChange}
              className="border border-gray-500 h-16 w-full rounded-xl p-3"
            >
              <option value="individual">Individual</option>
              <option value="provider">Provider (Therapist)</option>
            </select>
          </div>

          {userData.userType === 'provider' && (
            <div className="pt-6">
              <legend className="text-2xl font-bold text-gray-600">Professional Details</legend>
              <div className="space-y-4">
                <div>
                  <label htmlFor="resume" className="text-gray-500 require relative">
                    Resume/CV
                  </label>
                  <em className="text-gray-500 block">Only PDF supported</em>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleUpload}
                    accept=".pdf"
                    className="border border-gray-500 w-full rounded-xl p-2"
                  />
                  {errors.resume && <span className="text-red-500">{errors.resume}</span>}
                  {files.resume.progress > 0 && !files.resume.url && (
                    <div>{files.resume.progress}%</div>
                  )}
                </div>
              </div>

              <div className="my-5">
                <label className="text-gray-500 block">
                  Are you independently licensed as a therapist?
                </label>
                <div className="space-x-4">
                  <input
                    type="radio"
                    name="independent"
                    value="yes"
                    onChange={handleChange}
                    id="yes"
                  />
                  <label htmlFor="yes">Yes</label>
                  <input
                    type="radio"
                    name="independent"
                    value="no"
                    onChange={handleChange}
                    id="no"
                  />
                  <label htmlFor="no">No</label>
                </div>
              </div>
            </div>
          )}

        </fieldset>

        <fieldset className="border py-6 px-5 my-3 space-y-3">
          <legend className="text-2xl font-bold text-gray-600">Personal Information</legend>

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="text-gray-500 require relative">Full Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                className="border border-gray-500 h-16 w-full rounded-xl p-3"
                required
              />
              {errors.name && <span className="text-red-500">{errors.name}</span>}
            </div>

            <div>
              <label htmlFor="phoneNumber" className="text-gray-500 require relative">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                onChange={handleChange}
                className="border border-gray-500 h-16 w-full rounded-xl p-3"
                required
              />
              {errors.phone && <span className="text-red-500">{errors.phone}</span>}
            </div>

            <div>
              <label htmlFor="email" className="text-gray-500 require relative">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="border border-gray-500 h-16 w-full rounded-xl p-3"
                required
              />
              {errors.email && <span className="text-red-500">{errors.email}</span>}
            </div>

            <div>
              <label htmlFor="password" className="text-gray-500 require relative">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                className="border border-gray-500 h-16 w-full rounded-xl p-3"
                required
              />
              {errors.password && <span className="text-red-500">{errors.password}</span>}
            </div>

            <div>
              <label htmlFor="passwordConfirm" className="text-gray-500 require relative">Confirm Password</label>
              <input
                type="password"
                name="passwordConfirm"
                onChange={handleChange}
                className="border border-gray-500 h-16 w-full rounded-xl p-3"
                required
              />
              {errors.passwordConfirm && <span className="text-red-500">{errors.passwordConfirm}</span>}
            </div>

            <div>
              <label htmlFor="profile" className="text-gray-500 require relative">Profile Photo</label>
              <em className="text-gray-500 block">PNG/JPG/JPEG</em>
              <input
                type="file"
                name="profile"
                onChange={handleUpload}
                accept="image/*"
                className="border border-gray-500 w-full rounded-xl p-2"
              />
              {errors.profile && <span className="text-red-500">{errors.profile}</span>}
              {files.profile.progress > 0 && !files.profile.url && (
                <div>{files.profile.progress}%</div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <input type="checkbox" id="terms" required className="mr-2" />
              <label htmlFor="terms" className="text-gray-500">
                I agree to the terms and conditions
              </label>
            </div>
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
      <Toaster position="top-right" />
    </div>
  );
};

export default SignupForm;