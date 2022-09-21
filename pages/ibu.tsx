import type { NextPage } from "next";
import Head from "next/head";
import AbvCalculator from "../components/Abv/AbvCalculator";
import PageContainer from "../components/PageContainer/PageContainer";
import styles from "../assets/styles/Home.module.css";

const Ibu: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Abv Calculator</title>
        <meta name="description" content="Ibu calculator" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PageContainer>
          <h1>Calculating AAU</h1>
          <ul>
            <li>
              AAU = Weight of hops (oz) x % Alpha Acid rating of the hops.
            </li>
            <li>
              When hops are measured in grams, divide grams by 28 to get ounces.
            </li>
            <li>
              Example 1: 1.5 oz Brewer&apos;s Gold, having 6.7% Alpha Acid rating =
              1.5 x 6.7 = 10.05 AAU.
            </li>
            <li>
              Example 2: 42 g Brewer&apos;s Gold, having 6.7% Alpha Acid rating = (42
              / 28) x 6.7 = 10.05 AAU.
            </li>
          </ul>
          <p>
            This calculator uses the original gravity and final gravity to
            calculate the ABV.
          </p>
          <AbvCalculator />
        </PageContainer>
      </main>
    </div>
  );
};

export default Ibu;
