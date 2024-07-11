import Image from "next/image";
import styles from "./page.module.css";
import Homee from "../app/Pages/Home/Home";

export default function Home() {
  return (
    <main className={styles.main} style={{backgroundColor:'rgba(55, 58, 64, 1)'}}>
      <Homee/>
    </main>
  );
}
