import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/LandingPage.module.css';

import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.landingPageContainer}>
      <Head>
        <title>Band App</title>
        <meta name="description" content="Get your band organised" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Hello World</h1>
        <h3>Welcome to this wonderful app</h3>
        <br />
        <div>
          <Link href="/authentication/login">
            <a className={styles.landingPageLink}>Einloggen</a>
          </Link>
          <Link href="/authentication/sign-up">
            <a className={styles.landingPageLink}>Registrieren</a>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
