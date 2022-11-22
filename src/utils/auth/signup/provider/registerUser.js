import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'
import { db } from '../../../firebase';

const createUserWithEmail = async (userData) => {
  try {
    const cred = await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password,
    );

    return db.collection('providers').doc(cred.user.uid).set({
        resume:userData.cv,
        photoUrl:userData.photo,
        name:userData.name,
        phoneNumber:userData.phoneNumber,
        independent:userData.status
    })
  } catch (error) {
     return error.message
  }
};

export default createUserWithEmail;