import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../../styles/Autentication.module.css';

import Footer from '../../components/Footer';

function Signup() {
  const [name, setName] = useState('');
  const [username, setUserame] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [error, setError] = useState('');
  const [message, useMessage] = useState('');

  const handleInputChange = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Registrierung</title>
      </Head>
      <main>
        <div>
          <form>
            <label>Name *</label>
            <input type="text" placeholder="Dein voller Name" />

            <label>Username *</label>
            <input
              type="text"
              placeholder="Dein Username für diese Plattform"
            />

            <label>Mailadresse *</label>
            <input type="email" placeholder="Mailadresse" />

            <label>Passwort *</label>
            <input type="password" placeholder="Dein Passwort" />

            <label htmlFor="">Dein Profilbild</label>
            <input type="file" placeholder="Dein Profilbild" />
            <button>Jetzt registrieren</button>
          </form>
        </div>
        <p className={styles.text}>mit * markierte Felder sind Pflichtfelder</p>
      </main>
      <Footer />
    </>
  );
}

export default Signup;
