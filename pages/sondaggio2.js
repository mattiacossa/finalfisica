import React,{ useState, useEffect } from "react";
import ContainerBlock from "../components/ContainerBlock";
import Sondaggio from "../components/Sondaggio2";
import styles from "../styles/Home.module.css";

import 'katex/dist/katex.min.css';

export default function sondaggio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay of 2 seconds before setting the loading variable to false
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.loadingDots}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
        <div className={styles.loadingText}>Caricamento...</div>
      </div>
    );
  }


  return (
    <ContainerBlock title="Polly - Lascia il segno">
      <Sondaggio />
    </ContainerBlock>
  );
}
