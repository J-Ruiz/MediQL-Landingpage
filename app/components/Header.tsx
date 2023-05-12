import Link from 'next/link';

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
            <Link href="https://medium.com/@noahtofte/introducing-mediql-364ff07bed34">
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

export default Header;
