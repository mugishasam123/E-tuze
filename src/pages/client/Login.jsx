import React from 'react';
import LogoNav from '../../components/common/LogoNav/LogoNav';
import LoginForm from '../../components/common/LoginForm/LoginForm';

const Login = () => {
  return (
    <>
    <nav>
      <LogoNav />
    </nav>
    <main>
      <LoginForm />
    </main>
    </>
  )
}

export default Login;