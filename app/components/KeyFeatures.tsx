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

export default KeyFeatures;
