import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const Header = () => {
  return (
    <header>
      <nav className="text-slate-200 flex justify-between bg-slate-900 pt-6 pb-6">
        <div className="flex justify-center items-center pl-4 lg:pl-8">
          {/* add an image logo next to medical */}
          <img
            className="rounded-l h-10 w-10 object-cover mr-2"
            alt="animated picture of nodes connected with links"
            src="/MediQL_NoBuffer.png"
          />
          <div className="text-xl text-[#FE48BD] font-bold">MediQL</div>
        </div>
        <div className="flex justify-center items-center space-x-4 pr-4 lg:pr-8 text-xl">
          <div className="">
            <Link href="https://medium.com/@noahtofte/364ff07bed34">
              {' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-medium hover:bg-slate-700 hover:rounded-xl"
                viewBox="0 0 16 16"
              >
                <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z" />
              </svg>{' '}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

const SplashMain = () => {
  return (
    <main>
      <div className="flex flex-col lg:flex-row bg-slate-950 space-y-32 pb-10 pt-40 lg:pt-0 lg:pb-0  lg:pl-20 lg:pr-20 xl:pl-40 xl:pr-40">
        <div className="text-gray-200 flex flex-col space-y-10 lg:flex-1 lg:justify-center lg:p-20">
          <div className="text-4xl lg:text-5xl text-center lg:text-start font-bold">
            <span className="text-pink-400">Revolutionize </span> Your GraphQL
            Development Workflow
          </div>
          <div className="text-xl lg:text-2xl text-center lg:text-start text-rose-100">
            <span className="">MediQL </span>
            provides the perfect remedy to visualize GraphQL queries through our
            intuitive and easy to use application!
          </div>

          <div className="w-full flex justify-center lg:justify-start">
            <Link href="https://github.com/oslabs-beta/MediQL">
              <button className="text-2xl font-bold text-gray-200 p-6 rounded-xl bg-pink-500  hover:bg-pink-600  transition">
                Get Started!
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-1 pl-4 pr-4 lg:pb-32 max-w-full max-h-full">
          <img
            className="rounded-3xl object-cover w-full h-full xl:w-4/5"
            alt="animated picture of nodes connected with links"
            src="/MediQL_NoBuffer.png"
          />
        </div>
      </div>
    </main>
  );
};

const KeyFeatures = () => {
  return (
    <section className="bg-slate-900">
      <div className="flex justify-center px-8 pt-16 lg:justify-normal items-center">
        <div className="text-slate-300 text-4xl ">
          Get proper REST and get <span className="text-pink-400">MediQL</span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row space-y-28 lg:space-y-0 lg:space-x-20 px-8 py-20 text-slate-300">
        <div className="flex flex-1 flex-col bg-slate-800 px-4 py-8 space-y-4 border-2 border-slate-400 opacity-90">
          <div className="text-2xl text-pink-400">Error Transparency</div>
          <div>
            MediQL enhances GraphQL queries and gets the true error message sent
            with each response. Bypass stale and unclear error messages by using
            our unique application.
          </div>
        </div>
        <div className="flex flex-1 flex-col bg-slate-800 px-4 py-8 space-y-4 border-2 border-slate-400 opacity-90">
          <div className="text-2xl text-pink-400">
            Query Response Visualization
          </div>
          <div>
            Visualize in style with D3.JS. Click on the color coded nodes in
            your visualized GraphQL query and gather further information and
            enhance your development experience.
          </div>
        </div>
        <div className="flex flex-1 flex-col bg-slate-800 px-4 py-8 space-y-4 border-2 border-slate-400 opacity-90">
          <div className="text-2xl text-pink-400">Original API Response </div>
          <div>
            Click on red nodes to view the original error response and the error
            object message without adding layers of abstraction. No longer will
            you be perplexed by the dreaded GraphQL Status 200 OK!
          </div>
        </div>
      </div>
    </section>
  );
};

const MeetTheTeam = () => {
  return (
    <section className="pt-14 bg-slate-950">
      <div className="text-slate-100 flex justify-center items-center text-5xl font-bold">
        Meet the Team
      </div>
      <div className="text-slate-100 flex flex-col lg:flex-row justify-center items-center mt-10 pb-10 space-y-12 lg:space-y-0 lg:space-x-32 ">
        <div className="flex flex-col justify-center items-center space-y-2">
          <img className="rounded-3xl h-80 w-80 object-cover" src="/Lily.JPG" />
          <div className="text-xl space-y-2">
            <div>Lily Hoong</div>
            <div className="flex justify-center space-x-4">
              <Link href="https://github.com/hoonglily/">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-github hover:bg-slate-800 hover:rounded-xl"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </Link>

              <Link href="https://www.linkedin.com/in/lilyhoong/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-linkedin hover:bg-slate-600 hover:rounded-l"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-2">
          <img
            className="rounded-3xl h-80 w-80 object-cover"
            src="/jake2_2328.jpg"
          />
          <div className="text-xl space-y-2">
            <div>Jake Ruiz</div>
            <div className="flex justify-center space-x-4">
              <Link href="https://github.com/J-Ruiz">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-github hover:bg-slate-800 hover:rounded-xl"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </Link>

              <Link href="https://www.linkedin.com/in/jake-ruiz-954535184/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-linkedin hover:bg-slate-600 hover:rounded-l"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-2">
          <img className="rounded-3xl h-80 w-80 object-cover" src="/noah.jpg" />
          <div className="text-xl space-y-2">
            <div>Noah Tofte</div>
            <div className="flex justify-center space-x-4">
              <Link href="https://github.com/nAndrewT">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-github hover:bg-slate-800 hover:rounded-xl"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </Link>

              <Link href="https://www.linkedin.com/in/ntofte/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-linkedin hover:bg-slate-600 hover:rounded-l"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-2">
          <img
            className="rounded-3xl h-80 w-80 object-cover"
            src="/james.jpg"
          />
          <div className="text-xl space-y-2">
            <div>James Huang</div>
            <div className="flex justify-center space-x-4">
              <Link href="https://github.com/JamesJunJieHuang/">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-github hover:bg-slate-800 hover:rounded-xl"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </Link>

              <Link href="https://www.linkedin.com/in/jamesjhuang/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-linkedin hover:bg-slate-600 hover:rounded-l"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Header />
      <SplashMain />
      <KeyFeatures />
      <MeetTheTeam />
    </>
  );
}

