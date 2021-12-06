import React from 'react';
import Head from 'next/head';
import styles from '../../styles/Login.module.css';

import Footer from '../../components/Footer';

function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <main>
        <div>
          <form>
            <input type="email" placeholder="Deine Mailadresse" />
            <input type="password" placeholder="Dein Passwort" />
            <button>Einloggen</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Login;
