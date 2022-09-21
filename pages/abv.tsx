import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AbvCalculator from "../components/Abv/AbvCalculator";
import PageContainer from "../components/PageContainer/PageContainer";
import styles from "../assets/styles/Home.module.css";

const Abv: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Abv Calculator</title>
        <meta name="description" content="Abv calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PageContainer>
          <h1>Abv Calculator</h1>
          <p>
            This calculator uses the original gravity and final gravity to
            calculate the ABV.
          </p>
          <AbvCalculator/>
        </PageContainer>
      </main>
    </div>
  );
};

export default Abv;
