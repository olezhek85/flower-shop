import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Flower Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to{" "}
          <a href="http://flower-shop-delta.vercel.app/">Flower Shop!</a>
        </h1>
      </main>
    </>
  );
}
