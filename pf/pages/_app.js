import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="globals.css" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
