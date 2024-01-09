import Link from "next/link";
import { getCoverImage } from "../services/articles";

const Article = ({ id, attributes }) => (
  <div className="w-64 h-auto bg-celestito  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
    <div className="p-5">
      <Link href={`/articles/${id}`}>
        <img src={getCoverImage({ attributes })} alt="product" />
      </Link>
      <div className="h-48 relative">
        <div className="mb-2 text-2xl font-bold text-cerulean tracking-tight">
          {attributes.name}
        </div>
        <span className="text-palette-dark font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-palette-lighter  rounded-tl-sm triangle">
          Precio: {attributes.value}
        </span>
      </div>
    </div>
  </div>
);

export default Article;
