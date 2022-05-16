import Head from "next/head";

// components
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";

// requests
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu • Clone</title>
        <meta name="description" content="Hulu clone app by kamtoeddy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { genre } = context.query;

  const req = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.trending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: req.results,
    },
  };
}
