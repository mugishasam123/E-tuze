import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth } from "../../../firebase";
import { db } from "../../../firebase";

const createUserWithEmail = async (userData) => {
  try {
    const cred = await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );

    return setDoc(doc(db, "providers", cred.user.uid), {
      resumeUrl: userData.resumeUrl,
      photoUrl: userData.photoUrl,
      name: userData.name,
      phoneNumber: userData.phoneNumber,
      role: "provider",
    });
  } catch (error) {
    return error.message;
  }
};

export default createUserWithEmail;
