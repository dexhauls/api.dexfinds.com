import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>DexFinds API</title>
      </Head>
      <div className="container">
        <h1>⚙️ DexFinds API Playground</h1>
        <p>
          API for Rep Websites 🧢👟👜<br />
          DexFinds — where reps get their sauce.
        </p>
        <p style={{ marginTop: '20px', fontSize: '0.9rem', opacity: 0.8 }}>
          Wanna use this API? DM me on Discord:<br />
          <strong>@dex_hauls</strong> 🚀
        </p>
        <a href="https://github.com/dexhauls" target="_blank" className="button">
          🌐 GitHub Project
        </a>
      </div>
    </>
  );
}
