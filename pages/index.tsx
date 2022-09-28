import type { NextPage } from 'next';
import Head from 'next/head';
import Counter from '../components/Counter';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Counter App</title>
                <meta name="description" content="Create a counter app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col justify-center items-center gap-5 h-screen w-screen bg-slate-800">
                <Counter />
            </main>
        </div>
    );
};

export default Home;
