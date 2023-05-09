import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <header>
        <nav className="flex justify-between px-20 py-10 items-end bg-gradient-to-r from-sky-500 via-sky-700 to-sky-950">
          <div>
            {/* add an image logo next to medical */}
            <div className="text-3xl">MediQL</div>
          </div>
          <div className="flex text-2xl">
            <div className="mr-5">
              <Link href="/about"> About </Link>
            </div>
            <div>
              <Link href="/contact-us"> Contact Us </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* when it gets bigger than x amount of pixels, it defaults to row! */}
      <main className="flex justify-center items-center bg-gradient-to-r from-sky-900 via-fuchsia-200 to-sky-900 p-20 m-10 rounded-xl text-black">
        <div className="flex max-w-7xl p-10">
          <div className="flex-1 flex flex-col justify-center items-start space-y-7">
            <div className="text-5xl">
              Revolutionize Your GraphQL Development Workflow
            </div>
            <p className="text-xl">
              <span className="text-pink-400">MediQL</span> provides the perfect
              remedy to visualize GraphQL queries through our intuitive and easy
              to use application!
            </p>

            <div className="w-full">
              <Link href="/port-input">
                <button className="text-2xl border-4 border-fuchsia-100 rounded-xl p-10 w-4/5 bg-transparent text-sky-900 hover:bg-fuchsia-200 transition">
                  Click here to get started!
                </button>
              </Link>
            </div>
          </div>

          {/* <div className="flex-1 space-y-4 text-3xl mr-10 pl-20 pt-16"> */}
          {/* <div className=" min-w-full min-h-full "> */}
          <div className="flex-1 flex justify-center items-center">
            <Image
              className="rounded-3xl"
              alt="animated picture of nodes connected with links"
              src="/danial-igdery-FCHlYvR5gJI-unsplash.jpg"
              width={900}
              height={800}
            />
          </div>
        </div>
      </main>
      <section className="m-10 rounded-xl pb-40 text-black bg-gray-100">
        <div className="flex justify-center items-center p-20 text-5xl font-bold">
          Meet the Team
        </div>
        <div className="flex">
          <div className="flex-1 flex flex-col justify-center items-center">
            <img
              className="rounded-3xl h-60 w-60 object-cover"
              src="/Lily.JPG"
            />
            <div>Lily Hoong</div>
          </div>
          <div className="flex-1 flex flex-col  justify-center items-center">
            <img
              className="rounded-3xl h-60 w-60 object-cover"
              src="/jake2_2328.jpg"
            />
            <div>Jake Ruiz</div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center">
            <img
              className="rounded-3xl h-60 w-60 object-cover"
              src="/noah.jpg"
            />
            <div>Noah Tofte</div>
          </div>
          <div className="flex-1 flex flex-col  justify-center items-center">
            <img
              className="rounded-3xl h-60 w-60 object-cover"
              src="/james.jpg"
            />
            <div>James Huang</div>
          </div>
        </div>
      </section>
      <footer>
        <div></div>
      </footer>
    </>
  );
}

{
  /* <Image
            alt="programmer image"
            src="/fatos-bytyqi-Agx5_TLsIf4-unsplash.jpg"
            width={650}
            height={500}
          /> */
}

{
  /* <Image
            alt="Visualizer with data nodes for GraphQL"
            src="/tree-diagram-2-jpg.jpg"
            width={500}
            height={500}
          /> */
}
{
  /* </div> */
}
{
  /* </div> */
}

{
  /* <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */
}
