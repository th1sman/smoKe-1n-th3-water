import Articles from "./articles/page";

const Home = () => {
  return (
    <div className="grid">
      <h1 className="leading-relaxed font-merri text-cerulean text-4xl text-center mt-4 py-2 sm:py-4">
        Agua San Jose
      </h1>
      <div className="grid">
        <Articles />
      </div>
    </div>
  );
};

export default Home;
