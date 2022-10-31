import Head from 'next/head';
import web3Modal from "web3modal";
import { providers, Contract } from "ethers";
import styles from '../styles/Home.module.css';
import { useEffect,useState } from 'react';
import { WHITELIST_CONTRACT_ADDRESS, abi } from "../constants";
export default function Home() {
  const [walletConnected, setWalletConnected] =useState(false);
  const [joinedWhitelist, setJoinedWhitelist] = useState(false);
  const [loading, setLoading] = useState(false);
  const[numberOfWhitelisted,setNumberOfWhitelisted] =useState(0);
  const web3ModalRef = useRef();
  const renderButton=()=>{

  }
  return (
    <div >
      <Head>
      <title>Whitelist Dapp</title>
        <meta name="description" content="Whitelist-Dapp" />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>

      <div className={styles.main}>
        <div >
          <h1 className={styles.title}>Welcome to Crypto Devs!</h1>
        
        <div className={styles.description}>
            Its an NFT collection for developers in Crypto.
        </div>
        <div className={styles.description}>
            {numberOfWhitelisted} have already joined the Whitelist
        </div>renderButton
        {renderButton()}
        </div>
        <div>
          <img className={styles.image} src="./crypto-devs.svg"/>
        </div>
      </div>

      <footer className={styles.footer}>
      Made with &#10084; by Crypto Devs
      </footer>
    </div>
  )
}
