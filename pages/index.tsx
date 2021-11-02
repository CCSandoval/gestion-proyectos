import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="bg-red-900">
      <span className="text-white font-extrabold">Hello world</span>
    </div>
  );
};

export default Home;
