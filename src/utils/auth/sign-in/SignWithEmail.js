import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'

const signInWithEmail = async (email,password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    return userCredential;
  } catch (error) {
     return error.message
  }
};

export default signInWithEmail;