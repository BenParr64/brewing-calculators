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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PageContainer>
          <h1>Alcohol By Volume Abv Calculator</h1>
          <p>
            Original gravity (OG) measures how a great deal sugar is gift
            withinside the wort earlier than it's miles fermented. The very last
            gravity (FG) is how a great deal sugar is left over whilst
            fermentation is done. A decrease very last gravity shows a dry or
            crisp flavor, at the same time as a better very last gravity shows a
            candy or malty flavor. The length of the space among OG and FG may
            be used to calculate how a great deal alcohol the beer contains.
          </p>
          <AbvCalculator />
        </PageContainer>
      </main>
    </div>
  );
};

export default Abv;
