import Link from "next/link";
import { getArticles, getCoverImage } from "../services/articles";

const Article = ({ attributes }) => (
  <div className="w-64 h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
    <Link
      href="#"
      className="w-64 h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="p-5">
        <img src={getCoverImage({ attributes })} alt="" />
        <div className="h-48 relative">
          <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {attributes.name}
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {attributes.description}
          </p>
          <span className="text-palette-dark font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-palette-lighter  rounded-tl-sm triangle">
            Valor: {attributes.value}
          </span>
        </div>
      </div>
    </Link>
  </div>
);

const Products = async () => {
  const articles = await getArticles();
  return (
    <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
      {articles.map((article) => (
        <Article key={article.id} attributes={article.attributes} />
      ))}
    </div>
  );
};

export default Products;
