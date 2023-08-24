import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                {/* Other meta tags, styles, etc. */}
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
