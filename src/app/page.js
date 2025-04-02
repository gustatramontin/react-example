"use client"
import Image from "next/image";
import styles from "./page.module.css";
import ListagemDePessoas from "./components/listagem"

export default function Home() {

  return (
      <div className={styles.main}>
    
      <h1>Listagem de pessoas</h1>

      <ListagemDePessoas />

      </div>
  );
}
