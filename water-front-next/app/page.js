import Products from "./products/page";

const Home = () => {
  return (
    <div className="grid">
      <h1 className="leading-relaxed font-extrabold text-4xl text-center mt-4 py-2 sm:py-4 text-black">
        Agua San Jose
      </h1>
      <div className="gap-y-8">
        <Products />
      </div>
    </div>
  );
};

export default Home;
