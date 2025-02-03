import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nawa's World</title>
        <meta name="description" content="Welcome to my personal space on the web!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Welcome to Nawa's World</h1>
          <p>This is my personal page where you can find me online.</p>

          <div className={styles.buttons}>
            <a href="https://twitter.com/nawadotdev" target="_blank" rel="noopener noreferrer" className={styles.button}>
              Twitter (@nawadotdev)
            </a>
            <a href="https://github.com/nawadotdev" target="_blank" rel="noopener noreferrer" className={styles.button}>
              GitHub (@nawadotdev)
            </a>
          </div>

          <p className={styles.discord}>Discord: nawa.dev</p>
        </main>
      </div>
    </>
  );
}
