import Head from 'next/head';
import { useContext, useEffect } from "react";
import { Layout } from 'antd';


import { StoreContext } from "../store"


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ramen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div className="test">hello</div>
      </main>

      <footer>
      
      </footer>

      {/* <style jsx>{`

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>  */}
{/* 
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style> */}
    </div>
  )
}
