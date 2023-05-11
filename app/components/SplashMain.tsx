import Link from 'next/link';

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

export default SplashMain;
